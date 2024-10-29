import{j as a,a as n}from"./index-Cu9b6RMb.js";import{F as s,a as u,b as c,S as p}from"./Submit-B52r16mi.js";import{D as o}from"./DatePicker-ICZxwa7-.js";/* empty css                         */import"./index-BTmClkIh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B53NYd7n.js";import"./index-DrFu-skq.js";import"./index-DJKtnk1S.js";const x={title:"Input/DatePicker",component:o,parameters:{layout:"centered",formik:{initialValues:{date:"10/07/2001"}}},tags:["autodocs"]},t={args:{name:"date",label:"Date"},render:m=>a(s,{initialValues:{date:"10/07/2001"},onSubmit:u("submit"),children:()=>n(c,{children:[a(o,{...m}),a(p,{children:"Submit"})]})})};var r,e,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    name: 'date',
    label: 'Date'
  },
  render: args => <Formik initialValues={{
    date: '10/07/2001'
  }} onSubmit={action('submit')}>
      {() => <Form>
          <DatePicker {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const h=["Input"];export{t as Input,h as __namedExportsOrder,x as default};
