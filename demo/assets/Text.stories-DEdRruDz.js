import{F as m,a as s,b as c,S as u}from"./Submit-BnsufPd_.js";import{R as t}from"./index-DlAg5hdJ.js";import{T as o}from"./Text-D6BuDyiS.js";import"./v4-CtRu48qb.js";import"./index-CS2SCc-X.js";const S={title:"Input/Text",component:o,tags:["autodocs"]},e={args:{name:"text",label:"Text",description:"Test description"},render:i=>t.createElement(m,{initialValues:{text:""},onSubmit:s("submit")},()=>t.createElement(c,null,t.createElement(o,{...i}),t.createElement(u,null,"Submit")))};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const T=["Input"];export{e as Input,T as __namedExportsOrder,S as default};
