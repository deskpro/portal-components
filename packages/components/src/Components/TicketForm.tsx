import * as React from 'react';
import classNames from 'classnames';
import * as Immutable from 'immutable';
import { Formik } from 'formik';
import DropZone, { DropzoneRef } from 'react-dropzone';
import * as yup from 'yup';
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
import { recursiveDropdownChoicesWithSorting } from '../utils/helpers';
import Loader, { LoaderSize } from './Loader';
import type { DpBlob } from "../types/blob";
import type { I18nType } from "../types/i18n";
import { isValid, parse } from "date-fns";

const invalidDate = new Date('');
function parseDateFromFormats(formats, parseStrict) {
  return this.transform((value, originalValue) => {
    if (this.isType(value)) return value;

    const newValue = parse(originalValue, formats, parseStrict);

    return isValid(newValue) ? newValue : invalidDate;
  });
}

yup.addMethod(yup.date, 'format', parseDateFromFormats);

const I18N = {
  name:          'Name',
  email:         'Email',
  department:    'Department',
  subject:       'Subject',
  message:       'Message',
  product:       'Product',
  priority:      'Priority',
  category:      'Category',
  submit:        'Submit',
  dragNDrop:     'Drag and drop',
  addAttachment: 'Add attachment',
  or:            'or',
  chooseAFile:   'Choose a file',
  chooseFiles:   'Choose files',
  select:        'Select',
  back:          'Back',
  required:      'Required',
};

interface InitialValues {
  person?: {
    name: string;
    email: string;
  }
}

interface TicketFormValues {
  person?: {
    name: string;
    email: {
      email: string;
    };
  }
}

interface TicketFormProps {
  deskproLayout:      Immutable.List<Immutable.Map<string, any>>;
  departments:        Immutable.List<any>;
  products:           object;
  categories:         Immutable.List<any>;
  priorities:         Immutable.List<any>;
  departmentPropName: 'department'|'chat_department';
  onSubmit:           () => void;
  submitDisabled:     boolean;
  department:         number;
  fileUploadUrl:      string;
  csrfToken:          string;
  showHover:          boolean;
  errors:             object;
  initialValues:      InitialValues;
  languageId:         number;
  i18n:               I18nType;
  onChange:           (state: unknown) => void;
}

interface TicketFormState {
  files: DpBlob[];
  progress: number;
  error: Error;
  department?: string;
  chat_department?: string;
}

class TicketForm extends React.Component<TicketFormProps, TicketFormState> {
  private formik;
  private i18n;
  private form: any;
  private dropZone: DropzoneRef;

  static defaultProps = {
    errors:             {},
    initialValues:      {},
    products:           undefined,
    categories:         undefined,
    priorities:         undefined,
    department:         null,
    showHover:          true,
    departmentPropName: 'department',
    languageId:         0,
    i18n:               {},
    onChange:           () => {},
    submitDisabled:     false,
  };

  constructor(props) {
    super(props);
    console.log('TicketForm', TicketForm);
    this.formik = React.createRef();

    this.i18n = deepMerge(I18N, props.i18n);

    this.state = {
      [props.departmentPropName]: props.department,
      files:                      props.initialValues.attachments || [],
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

  componentWillUnmount() {
    if (this.props.onChange && typeof this.props.onChange === 'function') {
      this.props.onChange(this.formik.current.state);
    }
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
    const values: TicketFormValues = {};
    const { initialValues } = this.props;
    const layout            = this.getLayout();
    layout
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
          if (Immutable.List.isList(defaultValue)) {
            defaultValue = defaultValue.toArray();
          }
          values[field.get('field_id')] = defaultValue;
        }
      });

    layout
      .get('fields', [])
      .filter(field => DynamicForm.filterField(field, { values }));

    return values;
  };

  getValidationSchema = () => {
    // return lazy(obj)
    const shape = {};

    this.getLayout()
      .get('fields', [])
      .forEach((field) => {
        let validationRule: yup.StringSchema | yup.DateSchema = yup.string();
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
          const format: string = widgetType === 'datetime' ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd';
          validationRule = yup.date().format(format);
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
          shape[field.get('field_id')] = validationRule;
        } else if (field.get('field_type') === 'person') {
          shape[field.get('field_id')] = yup.object().shape({
            email: validationRule.email('A valid email is required'),
            name:  validationRule
          });
        } else {
          shape[field.get('field_id')] = validationRule;
        }
      });
    return yup.object().shape(shape);
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
    setFieldValue('attachments', files.length > 0 ? files : null);
    this.setState({ files });
  };

  handleDepartmentChange = (form, department) => {
    const { onChange, departmentPropName } = this.props;
    onChange(form);
    if (departmentPropName === 'department') {
      this.setState({
        department
      });
    } else {
      this.setState({
        chat_department: department
      });
    }
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

  renderFields = (form, setFieldValue: (field: string, value: string) => void = () => {}, fileInputProps = {}): React.ReactElement => {
    this.form = form;
    const {
      departments, priorities, fileUploadUrl, csrfToken, languageId
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
                      children: d.get('children', Immutable.List())
                        .toArray()
                        .map(cd => ({ label: cd.get('title'), value: cd.get('id') }))
                    }))
                }
                handleChange={dep => this.handleDepartmentChange(form, dep)}
              />
            );
          case 'captcha':
            // captcha is not something we can use at we can use in the widget. Keeping it as it was in the old widget.
            return null;
          case 'category':
            return (
              <DropDown
                name="category"
                key="category"
                label={this.renderLabel(field)}
                required={!!field.get('required', false)}
                i18n={this.i18n}
                dataSource={{
                  getOptions: recursiveDropdownChoicesWithSorting(field.getIn(['data', 'choices'], Immutable.List())
                    .toArray())
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
                  getOptions: recursiveDropdownChoicesWithSorting(field.getIn(['data', 'choices'], Immutable.List())
                    .toArray())
                }}
                isClearable={false}
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

    let submitProps = {
      disabled: false
    };
    if (this.props.submitDisabled) {
      submitProps = {
        disabled: true
      };
    }

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
                    {this.renderFields(props, props.setFieldValue, getInputProps())}
                    <Submit {...submitProps}>{this.i18n.submit}</Submit>
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
            <>
              {this.renderFields(props)}
              <Submit {...submitProps}>{submitProps.disabled ? <Loader size={LoaderSize.XS} /> : this.i18n.submit}</Submit>
            </>
          </Form>
        )}
      </Formik>
    );
  }
}

export default TicketForm;
