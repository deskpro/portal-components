import{F as o,a as s,b as l,S as u}from"./Submit-De2WISPg.js";import{R as e}from"./index-H1b-pnYG.js";import{E as n}from"./Email-BzQrTNqc.js";import"./v4-CQkTLCs1.js";import"./index-D0IZRIKX.js";const S={title:"Input/Email",component:n,tags:["autodocs"]},t={args:{name:"email",label:"Email",required:!0},render:i=>e.createElement(o,{initialValues:{text:""},onSubmit:s("submit")},()=>e.createElement(l,null,e.createElement(n,{...i}),e.createElement(u,null,"Submit")))};var a,r,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    name: 'email',
    label: 'Email',
    required: true
  },
  render: args => <Formik initialValues={{
    text: ''
  }} onSubmit={action('submit')}>
      {() => <Form>
          <Email {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(m=(r=t.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const F=["Input"];export{t as Input,F as __namedExportsOrder,S as default};
