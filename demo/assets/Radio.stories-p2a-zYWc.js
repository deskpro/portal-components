import{j as e,a as t}from"./index-O-l6OFW6.js";import{F as s,a as m,b as u,S as c}from"./Submit-ZWH0ymzD.js";import{R as i}from"./Radio-UNyIcvPo.js";import"./index-2fYL9DzZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-4EJmg-NZ.js";import"./index-PPLHz8o0.js";const R={title:"Choices/Radio",component:i,tags:["autodocs"]},p=[{value:"blue",label:"Blue"},{value:"green",label:"Green"},{value:"orange",label:"Orange"},{value:"pink",label:"Pink"},{value:"red",label:"Red"},{value:"yellow",label:"Yellow"}],o={args:{name:"colour",options:p,label:"Colour",description:"Pick a colour"},render:l=>e(s,{initialValues:{colour:"pink"},onSubmit:m("submit"),children:()=>t(u,{children:[e(i,{...l}),e(c,{children:"Submit"})]})})};var r,a,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
