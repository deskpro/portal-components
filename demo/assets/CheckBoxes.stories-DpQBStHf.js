import{j as a,a as r}from"./index-Cu9b6RMb.js";import{F as t,a as m,b as c,S as u}from"./Submit-B52r16mi.js";import{C as i}from"./Checkboxes-BYRzlk2h.js";import"./index-BTmClkIh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B53NYd7n.js";import"./index-DrFu-skq.js";const k={title:"Choices/Checkboxes",component:i,tags:["autodocs"]},b=[{value:"bacon",label:"Bacon"},{value:"cheese",label:"Cheese"},{value:"jalapenos",label:"Jalapeños"},{value:"mushrooms",label:"Mushrooms"},{value:"onions",label:"Onions"},{value:"pickles",label:"Pickles"}],e={args:{name:"filling",options:b,label:"Filling"},render:l=>a(t,{initialValues:{filling:["bacon"]},onSubmit:m("submit"),children:()=>r(c,{children:[a(i,{...l}),a(u,{children:"Submit"})]})})};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: 'filling',
    options,
    label: 'Filling'
  },
  render: args => <Formik initialValues={{
    filling: ['bacon']
  }} onSubmit={action('submit')}>
      {() => <Form>
          <Checkboxes {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const x=["Input"];export{e as Input,x as __namedExportsOrder,k as default};
