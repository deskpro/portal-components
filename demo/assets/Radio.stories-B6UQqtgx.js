import{j as e,a as t}from"./index-Cu9b6RMb.js";import{F as s,a as m,b as u,S as c}from"./Submit-B52r16mi.js";import{R as i}from"./Radio-DIKstxXc.js";import"./index-BTmClkIh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B53NYd7n.js";import"./index-DrFu-skq.js";const R={title:"Choices/Radio",component:i,tags:["autodocs"]},p=[{value:"blue",label:"Blue"},{value:"green",label:"Green"},{value:"orange",label:"Orange"},{value:"pink",label:"Pink"},{value:"red",label:"Red"},{value:"yellow",label:"Yellow"}],o={args:{name:"colour",options:p,label:"Colour",description:"Pick a colour"},render:l=>e(s,{initialValues:{colour:"pink"},onSubmit:m("submit"),children:()=>t(u,{children:[e(i,{...l}),e(c,{children:"Submit"})]})})};var r,a,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    name: 'colour',
    options,
    label: 'Colour',
    description: 'Pick a colour'
  },
  render: args => <Formik initialValues={{
    colour: 'pink'
  }} onSubmit={action('submit')}>
      {() => <Form>
          <Radio {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const f=["Input"];export{o as Input,f as __namedExportsOrder,R as default};
