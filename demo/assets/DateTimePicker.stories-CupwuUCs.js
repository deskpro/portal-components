import{F as o,a as s,b as u,S as c}from"./Submit-De2WISPg.js";import{R as e}from"./index-H1b-pnYG.js";import{D as i}from"./DateTimePicker-ClWx9K-Z.js";/* empty css                         */import"./v4-CQkTLCs1.js";import"./index-D0IZRIKX.js";import"./DatePicker-DIOUieIe.js";import"./index-Cp9knY08.js";const D={title:"Input/DateTimePicker",component:i,parameters:{layout:"centered",formik:{initialValues:{date:"10/07/2001"}}},tags:["autodocs"]},t={args:{name:"date",label:"Date"},render:n=>e.createElement(o,{initialValues:{date:"10/07/2001 11:11:12"},onSubmit:s("submit")},()=>e.createElement(u,null,e.createElement(i,{...n}),e.createElement(c,null,"Submit")))};var a,r,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(r=t.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const f=["Input"];export{t as Input,f as __namedExportsOrder,D as default};
