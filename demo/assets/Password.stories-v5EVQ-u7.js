import{j as s,a as i}from"./index-O-l6OFW6.js";import{F as m,a as u,b as d,S as p}from"./Submit-ZWH0ymzD.js";import{P as e}from"./Password-2HwNbXrU.js";import"./index-2fYL9DzZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-4EJmg-NZ.js";import"./index-PPLHz8o0.js";const x={title:"Input/Password",component:e,tags:["autodocs"]},r={args:{name:"password",label:"Password",required:!0},render:n=>s(m,{initialValues:{text:""},onSubmit:u("submit"),children:()=>i(d,{children:[s(e,{...n}),s(p,{children:"Submit"})]})})};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const P=["Input"];export{r as Input,P as __namedExportsOrder,x as default};
