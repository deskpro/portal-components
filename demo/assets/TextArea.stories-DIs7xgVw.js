import{j as s,a as m}from"./index-Cu9b6RMb.js";import{F as o,a as p,b as c,S as u}from"./Submit-B52r16mi.js";import{T as i}from"./Textarea-D87-DYqg.js";import"./index-BTmClkIh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B53NYd7n.js";import"./index-DrFu-skq.js";const T={title:"Input/Textarea",component:i,tags:["autodocs"]},e={args:{name:"message",label:"Message",description:"Test description"},render:n=>s(o,{initialValues:{message:"Initial message"},onSubmit:p("submit"),children:()=>m(c,{children:[s(i,{...n}),s(u,{children:"Submit"})]})})};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
