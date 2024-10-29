import{j as r,a}from"./index-Cu9b6RMb.js";import{F as m,a as p,b as c,S as u}from"./Submit-B52r16mi.js";import{T as o}from"./Text-tfMZHF8x.js";import"./index-BTmClkIh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B53NYd7n.js";import"./index-DrFu-skq.js";const g={title:"Input/Text",component:o,tags:["autodocs"]},t={args:{name:"text",label:"Text",description:"Test description"},render:s=>r(m,{initialValues:{text:""},onSubmit:p("submit"),children:()=>a(c,{children:[r(o,{...s}),r(u,{children:"Submit"})]})})};var e,i,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    name: 'text',
    label: 'Text',
    description: 'Test description'
  },
  render: args => <Formik initialValues={{
    text: ''
  }} onSubmit={action('submit')}>
      {() => <Form>
          <Text {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const f=["Input"];export{t as Input,f as __namedExportsOrder,g as default};
