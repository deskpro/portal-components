import{F as i,a as r,b as m,S as c}from"./Submit-BGIobfEZ.js";import{R as e}from"./index-DlAg5hdJ.js";import{C as s}from"./Checkboxes-CFn5UC2p.js";import"./v4-CQkTLCs1.js";import"./index-CS2SCc-X.js";const S={title:"Choices/Checkboxes",component:s,tags:["autodocs"]},u=[{value:"bacon",label:"Bacon"},{value:"cheese",label:"Cheese"},{value:"jalapenos",label:"Jalapeños"},{value:"mushrooms",label:"Mushrooms"},{value:"onions",label:"Onions"},{value:"pickles",label:"Pickles"}],a={args:{name:"filling",options:u,label:"Filling"},render:t=>e.createElement(i,{initialValues:{filling:["bacon"]},onSubmit:r("submit")},()=>e.createElement(m,null,e.createElement(s,{...t}),e.createElement(c,null,"Submit")))};var n,o,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const f=["Input"];export{a as Input,f as __namedExportsOrder,S as default};
