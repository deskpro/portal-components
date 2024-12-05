import{F as i,a as s,b as u,S as c}from"./Submit-BGIobfEZ.js";import{R as e}from"./index-DlAg5hdJ.js";import{D as n}from"./DatePicker-Cp3LVhzS.js";/* empty css                         */import"./v4-CQkTLCs1.js";import"./index-CS2SCc-X.js";import"./index-akXHnwru.js";import"./index-DqYt4Xuk.js";const D={title:"Input/DatePicker",component:n,parameters:{layout:"centered",formik:{initialValues:{date:"10/07/2001"}}},tags:["autodocs"]},t={args:{name:"date",label:"Date"},render:o=>e.createElement(i,{initialValues:{date:"10/07/2001"},onSubmit:s("submit")},()=>e.createElement(u,null,e.createElement(n,{...o}),e.createElement(c,null,"Submit")))};var a,r,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(r=t.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const f=["Input"];export{t as Input,f as __namedExportsOrder,D as default};
