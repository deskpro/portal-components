import{j as a,a as n}from"./index-Cu9b6RMb.js";import{F as s,a as p,b as u,S as c}from"./Submit-B52r16mi.js";import{D as m}from"./DateTimePicker-BjeHqsGM.js";/* empty css                         */import"./index-BTmClkIh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B53NYd7n.js";import"./index-DrFu-skq.js";import"./DatePicker-ICZxwa7-.js";import"./index-DJKtnk1S.js";const h={title:"Input/DateTimePicker",component:m,parameters:{layout:"centered",formik:{initialValues:{date:"10/07/2001"}}},tags:["autodocs"]},t={args:{name:"date",label:"Date"},render:o=>a(s,{initialValues:{date:"10/07/2001 11:11:12"},onSubmit:p("submit"),children:()=>n(u,{children:[a(m,{...o}),a(c,{children:"Submit"})]})})};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
