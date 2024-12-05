import{F as o,a as r,b as s,S as m}from"./Submit-De2WISPg.js";import{R as e}from"./index-H1b-pnYG.js";import{D as i}from"./DropDown-BSl6FTY3.js";import"./v4-CQkTLCs1.js";import"./index-D0IZRIKX.js";import"./index-Cp9knY08.js";const B={title:"Choices/Dropdown",component:i,tags:["autodocs"]},w=(l,f,I)=>new Promise(A=>{setTimeout(()=>{const D=new RegExp(l.toLowerCase()),E=I.filter(k=>k.label.toLowerCase().match(D)||l==="");A(E)},f)}),F=[{value:"bacon",label:"Bacon"},{value:"cheese",label:"Cheese"},{value:"jalapenos",label:"Jalapeños"},{value:"mushrooms",label:"Mushrooms"},{value:"onions",label:"Onions"},{value:"pickles",label:"Pickles"}],h=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4",children:[{value:"4-A",label:"Option 4 - A",children:[{value:"4-A-I",label:"Option 4 - A - I"},{value:"4-A-II",label:"Option 4 - A - II"},{value:"4-A-III",label:"Option 4 - A - III"},{value:"4-A-IV",label:"Option 4 - A - IV"}]},{value:"4-B",label:"Option 4 - B"},{value:"4-C",label:"Option 4 - C"},{value:"4-D",label:"Option 4 - D"}]},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}],n={args:{name:"filling",dataSource:{getOptions:F},label:"Filling",multiple:!0},render:l=>e.createElement(o,{initialValues:{filling:"bacon"},onSubmit:r("submit")},()=>e.createElement(s,null,e.createElement(i,{...l}),e.createElement(m,null,"Submit")))},a={args:{name:"filling",dataSource:{getOptions:l=>w(l,300,F)},label:"Filling",multiple:!0},render:l=>e.createElement(o,{initialValues:{filling:"bacon"},onSubmit:r("submit")},()=>e.createElement(s,null,e.createElement(i,{...l}),e.createElement(m,null,"Submit")))},t={args:{name:"multilevel",dataSource:{getOptions:h},label:"Multilevel"},render:l=>e.createElement(o,{initialValues:{filling:"bacon"},onSubmit:r("submit")},()=>e.createElement(s,null,e.createElement(i,{...l}),e.createElement(m,null,"Submit")))};var u,c,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var b,g,d;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var S,v,O;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(v=t.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};const R=["Dropdown","Async","MultiLevel"];export{a as Async,n as Dropdown,t as MultiLevel,R as __namedExportsOrder,B as default};
