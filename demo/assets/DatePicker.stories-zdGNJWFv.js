import{F as i,a as s,b as u,S as c}from"./Submit-Wn57fLW3.js";import{R as e}from"./index-BsgXEZSC.js";import{D as m}from"./DatePicker-zf9kEB2Y.js";/* empty css                         */import"./v4-CQkTLCs1.js";import"./index-BKIz_jqd.js";import"./index-CcfkNoGB.js";const g={title:"Input/DatePicker",component:m,parameters:{layout:"centered",formik:{initialValues:{date:"10/07/2001"}}},tags:["autodocs"]},t={args:{name:"date",label:"Date"},render:o=>e.createElement(i,{initialValues:{date:"10/07/2001"},onSubmit:s("submit")},()=>e.createElement(u,null,e.createElement(m,{...o}),e.createElement(c,null,"Submit")))};var a,r,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const D=["Input"];export{t as Input,D as __namedExportsOrder,g as default};
