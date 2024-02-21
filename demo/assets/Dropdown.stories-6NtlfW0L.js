import{j as n,a as t}from"./index-O-l6OFW6.js";import{F as r,a as s,b as u,S as m}from"./Submit-ZWH0ymzD.js";import{D as o}from"./DropDown-JnTL_igb.js";import"./index-2fYL9DzZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-4EJmg-NZ.js";import"./index-PPLHz8o0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-uzpk7B40.js";import"./index-hIUESwVt.js";const J={title:"Choices/Dropdown",component:o,tags:["autodocs"]},V=(e,h,I)=>new Promise(A=>{setTimeout(()=>{const D=new RegExp(e.toLowerCase()),k=I.filter(w=>w.label.toLowerCase().match(D)||e==="");A(k)},h)}),f=[{value:"bacon",label:"Bacon"},{value:"cheese",label:"Cheese"},{value:"jalapenos",label:"Jalapeños"},{value:"mushrooms",label:"Mushrooms"},{value:"onions",label:"Onions"},{value:"pickles",label:"Pickles"}],x=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4",children:[{value:"4-A",label:"Option 4 - A",children:[{value:"4-A-I",label:"Option 4 - A - I"},{value:"4-A-II",label:"Option 4 - A - II"},{value:"4-A-III",label:"Option 4 - A - III"},{value:"4-A-IV",label:"Option 4 - A - IV"}]},{value:"4-B",label:"Option 4 - B"},{value:"4-C",label:"Option 4 - C"},{value:"4-D",label:"Option 4 - D"}]},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}],l={args:{name:"filling",dataSource:{getOptions:f},label:"Filling",multiple:!0},render:e=>n(r,{initialValues:{filling:"bacon"},onSubmit:s("submit"),children:()=>t(u,{children:[n(o,{...e}),n(m,{children:"Submit"})]})})},i={args:{name:"filling",dataSource:{getOptions:e=>V(e,300,f)},label:"Filling",multiple:!0},render:e=>n(r,{initialValues:{filling:"bacon"},onSubmit:s("submit"),children:()=>t(u,{children:[n(o,{...e}),n(m,{children:"Submit"})]})})},a={args:{name:"multilevel",dataSource:{getOptions:x},label:"Multilevel"},render:e=>n(r,{initialValues:{filling:"bacon"},onSubmit:s("submit"),children:()=>t(u,{children:[n(o,{...e}),n(m,{children:"Submit"})]})})};var c,p,b;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'filling',
    dataSource: {
      getOptions: options
    },
    label: 'Filling',
    multiple: true
  },
  render: args => <Formik initialValues={{
    filling: 'bacon'
  }} onSubmit={action('submit')}>
      {() => <Form>
        <DropDown {...args} />
        <Submit>Submit</Submit>
      </Form>}
    </Formik>
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var d,g,S;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'filling',
    dataSource: {
      getOptions: filter => fakeAPI(filter, 300, options)
    },
    label: 'Filling',
    multiple: true
  },
  render: args => <Formik initialValues={{
    filling: 'bacon'
  }} onSubmit={action('submit')}>
      {() => <Form>
          <DropDown {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var v,O,F;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'multilevel',
    dataSource: {
      getOptions: multiLevelOptions
    },
    label: 'Multilevel'
  },
  render: args => <Formik initialValues={{
    filling: 'bacon'
  }} onSubmit={action('submit')}>
      {() => <Form>
          <DropDown {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(F=(O=a.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const R=["Dropdown","Async","MultiLevel"];export{i as Async,l as Dropdown,a as MultiLevel,R as __namedExportsOrder,J as default};
