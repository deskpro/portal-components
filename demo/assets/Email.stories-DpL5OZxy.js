import{j as a,a as o}from"./index-Cu9b6RMb.js";import{F as s,a as u,b as l,S as p}from"./Submit-B52r16mi.js";import{E as m}from"./Email-4KXZb9yx.js";import"./index-BTmClkIh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B53NYd7n.js";import"./index-DrFu-skq.js";const x={title:"Input/Email",component:m,tags:["autodocs"]},r={args:{name:"email",label:"Email",required:!0},render:n=>a(s,{initialValues:{text:""},onSubmit:u("submit"),children:()=>o(l,{children:[a(m,{...n}),a(p,{children:"Submit"})]})})};var t,i,e;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(e=(i=r.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const f=["Input"];export{r as Input,f as __namedExportsOrder,x as default};
