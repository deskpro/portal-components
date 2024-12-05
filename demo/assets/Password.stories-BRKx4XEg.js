import{F as m,a as i,b as u,S as l}from"./Submit-BGIobfEZ.js";import{R as r}from"./index-DlAg5hdJ.js";import{P as o}from"./Password-QDKRWIHf.js";import"./v4-CQkTLCs1.js";import"./index-CS2SCc-X.js";const w={title:"Input/Password",component:o,tags:["autodocs"]},e={args:{name:"password",label:"Password",required:!0},render:n=>r.createElement(m,{initialValues:{text:""},onSubmit:i("submit")},()=>r.createElement(u,null,r.createElement(o,{...n}),r.createElement(l,null,"Submit")))};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'password',
    label: 'Password',
    required: true
  },
  render: args => <Formik initialValues={{
    text: ''
  }} onSubmit={action('submit')}>
      {() => <Form>
          <Password {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const F=["Input"];export{e as Input,F as __namedExportsOrder,w as default};
