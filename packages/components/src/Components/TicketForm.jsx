import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-hijri';
import classNames from 'classnames';
import { List } from 'immutable';
import { Formik } from 'formik';
import DropZone from 'react-dropzone';
import * as Yup from 'yup';
import Form from './Form';
import Submit from './Submit';
import TicketField from './TicketField';
import Hidden from './Inputs/Hidden';
import Person from './Inputs/Person';
import TicketDepartment from './TicketDepartment';
import DropArea from './DropArea';
import AJAXSubmit from '../utils/AJAXSubmit';

const invalidDate = new Date('');
function parseDateFromFormats(formats, parseStrict) {
  return this.transform((value, originalValue) => {
    if (this.isType(value)) return value;

    const newValue = moment(originalValue, formats, parseStrict);

    return newValue.isValid() ? newValue.toDate() : invalidDate;
  });
}

Yup.addMethod(Yup.date, 'format', parseDateFromFormats);

class TicketForm extends React.Component {
  static propTypes = {
    deskproLayout:      PropTypes.object.isRequired,
    departments:        PropTypes.object.isRequired,
    departmentPropName: PropTypes.string,
    onSubmit:           PropTypes.func.isRequired,
    department:         PropTypes.number,
    fileUploadUrl:      PropTypes.string.isRequired,
    csrfToken:          PropTypes.string.isRequired,
    showHover:          PropTypes.bool,
    errors:             PropTypes.object,
    initialValues:      PropTypes.object,
  };

  static defaultProps = {
    errors:             {},
    initialValues:      {},
    department:         null,
    showHover:          true,
    departmentPropName: 'department'
  };

  constructor(props) {
    super(props);
    this.formik = React.createRef();
    this.state = {
      [props.departmentPropName]: props.department,
      files:                      [],
      progress:                   -1,
    };
  }

  componentDidMount() {
    this.formik.current.setErrors(this.props.errors);
  }

  componentDidUpdate() {
    this.formik.current.setErrors(this.props.errors);
  }

  getLayout = () => {
    const layout = this.props.deskproLayout
      .find(d => d.get('department') === this.state[this.props.departmentPropName]);
    if (layout) {
      return layout;
    }
    return this.props.deskproLayout.find(d => d.get('department') === 0);
  };

  getInitialValues = () => {
    const values = {};
    const { initialValues } = this.props;
    this.getLayout()
      .get('fields', [])
      .filter(f => f.getIn(['data', 'widget_type'], '') !== 'display')
      .forEach((field) => {
        if (field.get('field_type') === 'department') {
          values[this.props.departmentPropName] = this.state[this.props.departmentPropName];
        } else if (field.get('field_type') === 'person') {
          const { person } = initialValues;
          values.person = {
            name:  person && person.name ? person.name : '',
            email: { email: person && person.email ? person.email : '' },
          };
        } else if (initialValues[field.get('field_id')]) {
          values[field.get('field_id')] = initialValues[field.get('field_id')];
        } else {
          let defaultValue = field.getIn(['data', 'default_value'], '');
          if (List.isList(defaultValue)) {
            defaultValue = defaultValue.toArray();
          }
          values[field.get('field_id')] = defaultValue;
        }
      });

    return values;
  };

  getValidationSchema = () => {
    // return lazy(obj)
    const shape = {};

    this.getLayout()
      .get('fields', [])
      .forEach((field) => {
        let validationRule = Yup.string();
        if (field.get('required', false) || field.getIn(['data', 'options', 'validation_type']) === 'required') {
          const fieldName = field.hasIn(['data', 'title'])
            ? field.getIn(['data', 'title'])
            : `${field.get('field_type').charAt(0).toUpperCase()}${field.get('field_type').slice(1)}`;
          validationRule = validationRule.required(`The '${fieldName}' field is required`);
        }
        if (field.get('field_type') === 'email') {
          validationRule = validationRule.email('A valid email is required');
        }
        const regex = field.getIn(['data', 'options', 'regex']);
        const widgetType = field.getIn(['data', 'widget_type'], null);
        if (regex) {
          validationRule = validationRule.matches(new RegExp(regex.split('/')[1]), {
            message:            'Field is invalid',
            excludeEmptyString: field.getIn(['data', 'options', 'regex_required'])
          });
        }
        if (widgetType === 'datetime' || widgetType === 'date') {
          // just a stab - format is not passed
          const format = widgetType === 'datetime' ? 'DD/MM/YYYY HH:MM' : 'DD/MM/YYYY';
          validationRule = Yup.date().format(format);
          const dateValidType = field.getIn(['data', 'options', 'date_valid_type']);
          if (dateValidType === 'range') {
            if (field.getIn(['data', 'options', 'date_valid_range1'])) {
              const range1 = new Date();
              range1.setDate(range1.getDate() - field.getIn(['data', 'options', 'date_valid_range1']));
              validationRule = validationRule.min(range1);
            }
            if (field.getIn(['data', 'options', 'date_valid_range2'])) {
              const range2 = new Date();
              range2.setDate(range2.getDate() + field.getIn(['data', 'options', 'date_valid_range2']));
              validationRule = validationRule.max(range2);
            }
          }
        }
        if (field.get('field_type') === 'person') {
          shape[field.get('field_id')] = Yup.object().shape({
            email: validationRule.email('A valid email is required'),
            name:  validationRule
          });
        } else {
          shape[field.get('field_id')] = validationRule;
        }
      });
    return Yup.object().shape(shape);
  };

  handleDrop = (accepted, setFieldValue) => {
    accepted.forEach((file) => {
      AJAXSubmit({
        url:              this.props.fileUploadUrl,
        files:            [file],
        name:             'blob',
        token:            this.props.csrfToken,
        transferComplete: e => this.handleTransferComplete(e, setFieldValue),
        transferFailed:   this.handleTransferFailed,
        updateProgress:   this.handleUpdateProgress,
      });
    });
  };

  handleTransferComplete = (e, setFieldValue) => {
    const files = this.state.files.concat([e.target.response.blob]);
    this.setState({ files });
    setFieldValue('attachments', files);
    this.setState({ progress: -1 });
  };

  handleTransferFailed = () => {
    this.setState({ progress: -1 });
  };

  handleUpdateProgress = (e) => {
    if (e.lengthComputable) {
      const percentComplete = e.loaded / e.total * 100;
      this.setState({ progress: percentComplete });
    } else {
      this.setState({ progress: -1 });
    }
  };

  handleRemove = (setFieldValue, file) => {
    const files = this.state.files.filter(f => f.id !== file.id);
    setFieldValue('attachments', files);
    this.setState({ files });
  };

  handleDepartmentChange = (department) => {
    this.setState({
      [this.props.departmentPropName]: department
    });
  };

  renderFields = (setFieldValue = () => {}, fileInputProps = {}) => {
    const { departments, fileUploadUrl, csrfToken } = this.props;
    return this.getLayout()
      .get('fields', [])
      .map((field) => {
        switch (field.get('field_type')) {
          case 'department':
            return (
              field.get('is_hidden') ? <Hidden
                key="department"
                name={this.props.departmentPropName}
              /> : <TicketDepartment
                key="department"
                name={this.props.departmentPropName}
                departments={departments
                  .toArray()
                  .map(d => (
                    {
                      label:    d.get('title'),
                      value:    d.get('id'),
                      children: d.get('children', new List())
                        .toArray()
                        .map(cd => ({ label: cd.get('title'), value: cd.get('id') }))
                    }))
                }
                handleChange={this.handleDepartmentChange}
              />
            );
          case 'person':
            return (<Person
              isDisabled={field.get('is_disabled')}
              name="person"
              key="person"
              namePlaceholder="John Doe"
              emailPlaceholder="john.doe@company.com"
            />);
          default:
            return (
              <TicketField
                key={field.get('field_id')}
                field={field}
                fileUploadUrl={fileUploadUrl}
                csrfToken={csrfToken}
                fileInputProps={fileInputProps}
                files={this.state.files}
                handleRemove={file => this.handleRemove(setFieldValue, file)}
              />
            );
        }
      });
  };

  render() {
    const { showHover } = this.props;

    const hasAttachment = this.getLayout().get('fields', []).find(f => f.get('field_type') === 'attachments');

    if (hasAttachment) {
      return (
        <Formik
          ref={this.formik}
          enableReinitialize
          initialValues={this.getInitialValues()}
          onSubmit={this.props.onSubmit}
        >
          {props => (
            <Form noValidate showHover={showHover}>
              <DropZone
                onDrop={acceptedFiles => this.handleDrop(acceptedFiles, props.setFieldValue)}
                noClick
                noKeyboard
                multiple
                ref={(c) => { this.dropZone = c; }}
              >
                {({ getRootProps, getInputProps, isDragActive }) => (
                  <div
                    className={classNames('dp-pc_full-dnd__dropzone', { active: isDragActive })}
                    {...getRootProps()}
                  >
                    <DropArea
                      isDragActive={isDragActive}
                      progress={this.state.progress}
                    />
                    {this.renderFields(props.handleChange, getInputProps())}
                    <Submit>Submit</Submit>
                  </div>
                )}
              </DropZone>
            </Form>
          )}
        </Formik>
      );
    }
    return (
      <Formik
        ref={this.formik}
        enableReinitialize
        initialValues={this.getInitialValues()}
        onSubmit={this.props.onSubmit}
      >
        {() => (
          <Form noValidate showHover={showHover}>
            {this.renderFields()}
            <Submit>Submit</Submit>
          </Form>
        )}
      </Formik>
    );
  }
}

export default TicketForm;
