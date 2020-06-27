import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-hijri';
import classNames from 'classnames';
import { List } from 'immutable';
import { Formik } from 'formik';
import DropZone from 'react-dropzone';
import * as Yup from 'yup';
import { capitalize } from '@deskpro/js-utils/dist/strings';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import Form from './Form';
import Submit from './Submit';
import TicketField from './TicketField';
import Hidden from './Inputs/Hidden';
import Person from './Inputs/Person';
import TicketDepartment from './TicketDepartment';
import DropArea from './DropArea';
import DropDown from './Choices/DropDown';
import AJAXSubmit from '../utils/AJAXSubmit';
import DynamicForm from '../utils/DynamicForm';
import { recursiveDropdownChoices } from '../utils/helpers';

const invalidDate = new Date('');
function parseDateFromFormats(formats, parseStrict) {
  return this.transform((value, originalValue) => {
    if (this.isType(value)) return value;

    const newValue = moment(originalValue, formats, parseStrict);

    return newValue.isValid() ? newValue.toDate() : invalidDate;
  });
}

Yup.addMethod(Yup.date, 'format', parseDateFromFormats);

const I18N = {
  name:        'Name',
  email:       'Email',
  department:  'Department',
  message:     'Message',
  product:     'Product',
  priority:    'Priority',
  category:    'Category',
  submit:      'Submit',
  dragNDrop:   'Drag and drop',
  or:          'or',
  chooseAFile: 'Choose a file',
  chooseFiles: 'Choose files',
  select:      'Select',
  back:        'Back',
  required:    'Required',
};

class TicketForm extends React.Component {
  static propTypes = {
    deskproLayout:      PropTypes.object.isRequired,
    departments:        PropTypes.object.isRequired,
    products:           PropTypes.object,
    categories:         PropTypes.object,
    priorities:         PropTypes.object,
    departmentPropName: PropTypes.string,
    onSubmit:           PropTypes.func.isRequired,
    department:         PropTypes.number,
    fileUploadUrl:      PropTypes.string.isRequired,
    csrfToken:          PropTypes.string.isRequired,
    showHover:          PropTypes.bool,
    errors:             PropTypes.object,
    initialValues:      PropTypes.object,
    languageId:         PropTypes.number,
    i18n:               PropTypes.object,
  };

  static defaultProps = {
    errors:             {},
    initialValues:      {},
    products:           new List(),
    categories:         new List(),
    priorities:         new List(),
    department:         null,
    showHover:          true,
    departmentPropName: 'department',
    languageId:         0,
    i18n:               {},
  };

  constructor(props) {
    super(props);
    this.formik = React.createRef();

    this.i18n = deepMerge(I18N, props.i18n);

    this.state = {
      [props.departmentPropName]: props.department,
      files:                      [],
      progress:                   -1,
      error:                      null,
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
    if (e.target.response && e.target.response.blob) {
      const files = this.state.files.concat([e.target.response.blob]);
      this.setState({ files });
      setFieldValue('attachments', files);
      this.setState({ progress: -1 });
    }
  };

  handleTransferFailed = (e) => {
    this.setState({
      progress: -1,
      error:    e
    });
  };

  handleUpdateProgress = (e) => {
    if (e.lengthComputable) {
      const percentComplete = e.loaded / e.total * 100;
      this.setState({ progress: percentComplete });
    } else {
      this.setState({ progress: -1 });
    }
  };

  clearError = () => {
    this.setState({
      error: null
    });
  }

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

  renderLabel = (field) => {
    let label = field.getIn(['data', 'title']) || field.get('field_id');
    if (this.i18n[field.get('field_id')] && !field.getIn(['data', 'title'])) {
      label = this.i18n[field.get('field_id')];
    }
    if (field.get('required', false)) {
      label = `${label} *`;
    }
    return capitalize(label);
  };

  renderFields = (form, setFieldValue = () => {}, fileInputProps = {}) => {
    const {
      departments, priorities, products, fileUploadUrl, csrfToken, languageId
    } = this.props;
    return this.getLayout()
      .get('fields', [])
      .filter(field => DynamicForm.filterField(field, form))
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
                i18n={this.i18n}
                required={!!field.get('required', false)}
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
          case 'category':
            return (
              <DropDown
                name="category"
                key="category"
                label={this.renderLabel(field)}
                required={!!field.get('required', false)}
                i18n={this.i18n}
                dataSource={{
                  getOptions: recursiveDropdownChoices(field.getIn(['data', 'choices'], new List()).toArray())
                }}
                isClearable={false}
                isSearchable={false}
              />
            );
          case 'priority':
            return (
              <DropDown
                name="priority"
                key="priority"
                label={this.renderLabel(field)}
                required={!!field.get('required', false)}
                i18n={this.i18n}
                dataSource={{
                  getOptions: priorities
                    .sort((a, b) => {
                      if (a.get('priority') < b.get('priority')) {
                        return -1;
                      }
                      if (a.get('priority') > b.get('priority')) {
                        return 1;
                      }
                      return 0;
                    })
                    .toArray()
                    .map(p => (
                      {
                        label: p.get('title'),
                        value: p.get('id'),
                      }))
                   }}
                isClearable={!field.get('required')}
                isSearchable={false}
              />
            );
          case 'product':
            return (
              <DropDown
                name="product"
                key="product"
                label={this.renderLabel(field)}
                required={!!field.get('required', false)}
                i18n={this.i18n}
                dataSource={{
                  getOptions: products
                    .sort((a, b) => {
                      if (a.get('display_order') < b.get('display_order')) {
                        return -1;
                      }
                      if (a.get('display_order') > b.get('display_order')) {
                        return 1;
                      }
                      if (a.get('display_order') === b.get('display_order')) {
                        if (a.get('id') < b.get('id')) {
                          return -1;
                        }
                        if (a.get('id') > b.get('id')) {
                          return 1;
                        }
                      }
                      return 0;
                    })
                    .toArray()
                    .map(p => (
                      {
                        label: p.get('title'),
                        value: p.get('id'),
                      }))
                  }}
                isClearable={!field.get('required')}
                isSearchable={false}
              />
            );
          case 'person':
            return (<Person
              isDisabled={field.get('is_disabled')}
              required={!!field.get('required', false)}
              name="person"
              key="person"
              namePlaceholder="John Doe"
              emailPlaceholder="john.doe@company.com"
              i18n={this.i18n}
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
                languageId={languageId}
                handleRemove={file => this.handleRemove(setFieldValue, file)}
                i18n={this.i18n}
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
            <Form showHover={showHover}>
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
                      error={this.state.error}
                      clearError={this.clearError}
                    />
                    {this.renderFields(props, props.handleChange, getInputProps())}
                    <Submit>{this.i18n.submit}</Submit>
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
        {props => (
          <Form showHover={showHover}>
            {this.renderFields(props)}
            <Submit>{this.i18n.submit}</Submit>
          </Form>
        )}
      </Formik>
    );
  }
}

export default TicketForm;
