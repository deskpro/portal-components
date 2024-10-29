import{j as s,a as i}from"./index-Cu9b6RMb.js";import{F as m,a as u,b as d,S as p}from"./Submit-B52r16mi.js";import{P as e}from"./Password-BX-Q4uFg.js";import"./index-BTmClkIh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B53NYd7n.js";import"./index-DrFu-skq.js";const x={title:"Input/Password",component:e,tags:["autodocs"]},r={args:{name:"password",label:"Password",required:!0},render:n=>s(m,{initialValues:{text:""},onSubmit:u("submit"),children:()=>i(d,{children:[s(e,{...n}),s(p,{children:"Submit"})]})})};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
