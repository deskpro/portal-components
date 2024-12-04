import{F as i,a as m,b as s,S as u}from"./Submit-Wn57fLW3.js";import{R as e}from"./index-BsgXEZSC.js";import{R as l}from"./Radio-B54talRJ.js";import"./v4-CQkTLCs1.js";import"./index-BKIz_jqd.js";const S={title:"Choices/Radio",component:l,tags:["autodocs"]},c=[{value:"blue",label:"Blue"},{value:"green",label:"Green"},{value:"orange",label:"Orange"},{value:"pink",label:"Pink"},{value:"red",label:"Red"},{value:"yellow",label:"Yellow"}],o={args:{name:"colour",options:c,label:"Colour",description:"Pick a colour"},render:t=>e.createElement(i,{initialValues:{colour:"pink"},onSubmit:m("submit")},()=>e.createElement(s,null,e.createElement(l,{...t}),e.createElement(u,null,"Submit")))};var a,r,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const F=["Input"];export{o as Input,F as __namedExportsOrder,S as default};
