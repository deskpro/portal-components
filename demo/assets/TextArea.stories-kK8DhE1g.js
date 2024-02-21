import{j as s,a as m}from"./index-O-l6OFW6.js";import{F as o,a as p,b as c,S as u}from"./Submit-ZWH0ymzD.js";import{T as i}from"./Textarea-ZcPKhQaQ.js";import"./index-2fYL9DzZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-4EJmg-NZ.js";import"./index-PPLHz8o0.js";const T={title:"Input/Textarea",component:i,tags:["autodocs"]},e={args:{name:"message",label:"Message",description:"Test description"},render:n=>s(o,{initialValues:{message:"Initial message"},onSubmit:p("submit"),children:()=>m(c,{children:[s(i,{...n}),s(u,{children:"Submit"})]})})};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    name: 'message',
    label: 'Message',
    description: 'Test description'
  },
  render: args => <Formik initialValues={{
    message: 'Initial message'
  }} onSubmit={action('submit')}>
      {() => <Form>
          <Textarea {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const I=["Input"];export{e as Input,I as __namedExportsOrder,T as default};
