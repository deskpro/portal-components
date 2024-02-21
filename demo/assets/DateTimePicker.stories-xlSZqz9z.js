import{j as a,a as n}from"./index-O-l6OFW6.js";import{F as s,a as p,b as u,S as c}from"./Submit-ZWH0ymzD.js";import{D as m}from"./DateTimePicker-Hhu72eEO.js";/* empty css                         */import"./index-2fYL9DzZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-4EJmg-NZ.js";import"./index-PPLHz8o0.js";import"./DatePicker-zVG8IStT.js";import"./index-hIUESwVt.js";const h={title:"Input/DateTimePicker",component:m,parameters:{layout:"centered",formik:{initialValues:{date:"10/07/2001"}}},tags:["autodocs"]},t={args:{name:"date",label:"Date"},render:o=>a(s,{initialValues:{date:"10/07/2001 11:11:12"},onSubmit:p("submit"),children:()=>n(u,{children:[a(m,{...o}),a(c,{children:"Submit"})]})})};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    name: 'date',
    label: 'Date'
  },
  render: args => <Formik initialValues={{
    date: '10/07/2001 11:11:12'
  }} onSubmit={action('submit')}>
      {() => <Form>
          <DateTimePicker {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const j=["Input"];export{t as Input,j as __namedExportsOrder,h as default};
