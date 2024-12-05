import{F as i,a as o,b as c,S as l}from"./Submit-De2WISPg.js";import{R as e}from"./index-H1b-pnYG.js";import{T as n}from"./Textarea-DbS4Fg3-.js";import"./v4-CQkTLCs1.js";import"./index-D0IZRIKX.js";const S={title:"Input/Textarea",component:n,tags:["autodocs"]},a={args:{name:"message",label:"Message",description:"Test description"},render:m=>e.createElement(i,{initialValues:{message:"Initial message"},onSubmit:o("submit")},()=>e.createElement(c,null,e.createElement(n,{...m}),e.createElement(l,null,"Submit")))};var t,s,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(s=a.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const F=["Input"];export{a as Input,F as __namedExportsOrder,S as default};
