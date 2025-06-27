import{a as i,F as r,b as u,S as s}from"./Submit-BnsufPd_.js";import{R as e}from"./index-DlAg5hdJ.js";import{M as o}from"./MultipleDropDown-CQ1iHqKb.js";import"./v4-CtRu48qb.js";import"./index-CS2SCc-X.js";import"./DropDown-B71xx4hp.js";import"./index-rQmOPHS8.js";import"./index-Bef-dRtY.js";const y={title:"Choices/MultipleDropdown",component:o,tags:["autodocs"]},B=(l,A,F)=>new Promise(h=>{setTimeout(()=>{const f=new RegExp(l.toLowerCase()),D=F.filter(E=>E.label.toLowerCase().match(f)||l==="");h(D)},A)}),S=[{value:"bacon",label:"Bacon"},{value:"cheese",label:"Cheese"},{value:"jalapenos",label:"Jalapeños"},{value:"mushrooms",label:"Mushrooms"},{value:"onions",label:"Onions"},{value:"pickles",label:"Pickles"}],V=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3",children:[{value:"3-A",label:"Option 3 - A",children:[{value:"3-A-I",label:"Option 3 - A - I"},{value:"3-A-II",label:"Option 3 - A - II"},{value:"3-A-III",label:"Option 3 - A - III"},{value:"3-A-IV",label:"Option 3 - A - IV"}]},{value:"3-B",label:"Option 3 - B",children:[{value:"3-B-I",label:"Option 3 - B - I"},{value:"3-B-II",label:"Option 3 - B - II"},{value:"3-B-III",label:"Option 3 - B - III"},{value:"3-B-IV",label:"Option 3 - B - IV"}]},{value:"3-C",label:"Option 3 - C"},{value:"3-D",label:"Option 3 - D"}]},{value:"4",label:"Option 4",children:[{value:"4-A",label:"Option 4 - A",children:[{value:"4-A-I",label:"Option 4 - A - I"},{value:"4-A-II",label:"Option 4 - A - II"},{value:"4-A-III",label:"Option 4 - A - III"},{value:"4-A-IV",label:"Option 4 - A - IV"}]},{value:"4-B",label:"Option 4 - B"},{value:"4-C",label:"Option 4 - C"},{value:"4-D",label:"Option 4 - D"}]},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}],n={args:{name:"filling",dataSource:{getOptions:S},label:"Filling",multiple:!0},render:l=>e.createElement(r,{initialValues:{filling:["bacon"]},onSubmit:i("submit")},()=>e.createElement(u,null,e.createElement(o,{...l}),e.createElement(s,null,"Submit")))},a={args:{name:"filling",dataSource:{getOptions:l=>B(l,300,S)},label:"Filling",multiple:!0},render:l=>e.createElement(r,{initialValues:{filling:"bacon"},onSubmit:i("submit")},()=>e.createElement(u,null,e.createElement(o,{...l}),e.createElement(s,null,"Submit")))},t={args:{name:"multilevel",dataSource:{getOptions:V},label:"Multi Level",handleChanged:i("change")},render:l=>e.createElement(r,{initialValues:{multilevel:["2","4-A-III"]},onSubmit:i("submit")},()=>e.createElement(u,null,e.createElement(o,{...l}),e.createElement(s,null,"Submit")))};var m,p,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,I,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(I=a.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var g,d,O;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(d=t.parameters)==null?void 0:d.docs)==null?void 0:O.source}}};const _=["Dropdown","Async","MultiLevel"];export{a as Async,n as Dropdown,t as MultiLevel,_ as __namedExportsOrder,y as default};
