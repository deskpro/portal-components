import{j as l,a as r}from"./index-O-l6OFW6.js";import{F as u,a as o,b as s,S as m}from"./Submit-ZWH0ymzD.js";import{M as t}from"./MultipleDropDown-v1_4IUar.js";import"./index-2fYL9DzZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-4EJmg-NZ.js";import"./index-PPLHz8o0.js";import"./DropDown-JnTL_igb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-uzpk7B40.js";import"./index-hIUESwVt.js";const R={title:"Choices/MultipleDropdown",component:t,tags:["autodocs"]},k=(e,A,F)=>new Promise(f=>{setTimeout(()=>{const D=new RegExp(e.toLowerCase()),B=F.filter(V=>V.label.toLowerCase().match(D)||e==="");f(B)},A)}),h=[{value:"bacon",label:"Bacon"},{value:"cheese",label:"Cheese"},{value:"jalapenos",label:"Jalapeños"},{value:"mushrooms",label:"Mushrooms"},{value:"onions",label:"Onions"},{value:"pickles",label:"Pickles"}],w=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3",children:[{value:"3-A",label:"Option 3 - A",children:[{value:"3-A-I",label:"Option 3 - A - I"},{value:"3-A-II",label:"Option 3 - A - II"},{value:"3-A-III",label:"Option 3 - A - III"},{value:"3-A-IV",label:"Option 3 - A - IV"}]},{value:"3-B",label:"Option 3 - B",children:[{value:"3-B-I",label:"Option 3 - B - I"},{value:"3-B-II",label:"Option 3 - B - II"},{value:"3-B-III",label:"Option 3 - B - III"},{value:"3-B-IV",label:"Option 3 - B - IV"}]},{value:"3-C",label:"Option 3 - C"},{value:"3-D",label:"Option 3 - D"}]},{value:"4",label:"Option 4",children:[{value:"4-A",label:"Option 4 - A",children:[{value:"4-A-I",label:"Option 4 - A - I"},{value:"4-A-II",label:"Option 4 - A - II"},{value:"4-A-III",label:"Option 4 - A - III"},{value:"4-A-IV",label:"Option 4 - A - IV"}]},{value:"4-B",label:"Option 4 - B"},{value:"4-C",label:"Option 4 - C"},{value:"4-D",label:"Option 4 - D"}]},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}],n={args:{name:"filling",dataSource:{getOptions:h},label:"Filling",multiple:!0},render:e=>l(u,{initialValues:{filling:["bacon"]},onSubmit:o("submit"),children:()=>r(s,{children:[l(t,{...e}),l(m,{children:"Submit"})]})})},a={args:{name:"filling",dataSource:{getOptions:e=>k(e,300,h)},label:"Filling",multiple:!0},render:e=>l(u,{initialValues:{filling:"bacon"},onSubmit:o("submit"),children:()=>r(s,{children:[l(t,{...e}),l(m,{children:"Submit"})]})})},i={args:{name:"multilevel",dataSource:{getOptions:w},label:"Multi Level",handleChanged:o("change")},render:e=>l(u,{initialValues:{multilevel:["2","4-A-III"]},onSubmit:o("submit"),children:()=>r(s,{children:[l(t,{...e}),l(m,{children:"Submit"})]})})};var p,b,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'filling',
    dataSource: {
      getOptions: options
    },
    label: 'Filling',
    multiple: true
  },
  render: args => <Formik initialValues={{
    filling: ['bacon']
  }} onSubmit={action('submit')}>
      {() => <Form>
        <MultipleDropDown {...args} />
        <Submit>Submit</Submit>
      </Form>}
    </Formik>
}`,...(c=(b=n.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};var I,d,v;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
          <MultipleDropDown {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(v=(d=a.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var g,O,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'multilevel',
    dataSource: {
      getOptions: multiLevelOptions
    },
    label: 'Multi Level',
    handleChanged: action('change')
  },
  render: args => <Formik initialValues={{
    multilevel: ['2', '4-A-III']
  }} onSubmit={action('submit')}>
      {() => <Form>
          <MultipleDropDown {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(S=(O=i.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const T=["Dropdown","Async","MultiLevel"];export{a as Async,n as Dropdown,i as MultiLevel,T as __namedExportsOrder,R as default};
