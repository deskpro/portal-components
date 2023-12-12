import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Form, CascadingDropDown, Submit, Formik } from '@deskpro/portal-components';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  {
    value:    '3',
    label:    'Option 3',
    children: [
      {
        value:    '3-A',
        label:    'Option 3 - A',
        children: [
          {
            value: '3-A-I',
            label: 'Option 3 - A - I'
          },
          {
            value: '3-A-II',
            label: 'Option 3 - A - II'
          },
          {
            value: '3-A-III',
            label: 'Option 3 - A - III'
          },
          {
            value: '3-A-IV',
            label: 'Option 3 - A - IV'
          },
        ]
      },
      {
        value:    '3-B',
        label:    'Option 3 - B',
        children: [
          {
            value: '3-B-I',
            label: 'Option 3 - B - I'
          },
          {
            value: '3-B-II',
            label: 'Option 3 - B - II'
          },
          {
            value: '3-B-III',
            label: 'Option 3 - B - III'
          },
          {
            value: '3-B-IV',
            label: 'Option 3 - B - IV'
          },
        ]
      },
      {
        value: '3-C',
        label: 'Option 3 - C'
      },
      {
        value: '3-D',
        label: 'Option 3 - D'
      },
    ]
  },
  {
    value:    '4',
    label:    'Option 4',
    children: [
      {
        value:    '4-A',
        label:    'Option 4 - A',
        children: [
          {
            value: '4-A-I',
            label: 'Option 4 - A - I'
          },
          {
            value: '4-A-II',
            label: 'Option 4 - A - II'
          },
          {
            value: '4-A-III',
            label: 'Option 4 - A - III'
          },
          {
            value: '4-A-IV',
            label: 'Option 4 - A - IV'
          },
        ]
      },
      {
        value: '4-B',
        label: 'Option 4 - B'
      },
      {
        value: '4-C',
        label: 'Option 4 - C'
      },
      {
        value: '4-D',
        label: 'Option 4 - D'
      },
    ]
  },
  { value: '5', label: 'Option 5' },
  { value: '6', label: 'Option 6' },
];

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        value: '4-A-III',
        label: 'Option 4 - B'
      }
    };
  }

  handleChange = (value) => {
    this.setState({ value: value });
  }

  render() {
    const { value } = this.state;
    return (
      <Formik
        onSubmit={action('submit')}
      >
        {() => (
          <Form>
            <CascadingDropDown
              value={value}
              dataSource={{ getOptions: options }}
              onChange={this.handleChange}
              name="multilevel"
              label="Label"
            />
            <Submit>Submit</Submit>
          </Form>
        )}
      </Formik>
    )
  }
}

storiesOf('Choices', module)
  .add('Multilevel Cascading Dropdown', () => <Story />);
