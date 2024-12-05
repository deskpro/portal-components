import{c as l,F as c,a as f,b,S as h}from"./Submit-De2WISPg.js";import{R as e}from"./index-H1b-pnYG.js";import"./v4-CQkTLCs1.js";import"./index-D0IZRIKX.js";const i=class i extends l{constructor(y){super(y),this.renderField=({form:g})=>super.renderField(g),this.type="tel"}};i.defaultProps={...l.defaultProps,excludeCountries:[],onlyCountries:[],preferredCountries:["us","gb"],withIndicator:!1,placeholder:"1234 123456"};let n=i;try{n.displayName="Tel",n.__docgenInfo={description:"",displayName:"Tel",props:{excludeCountries:{defaultValue:{value:"[]"},description:"",name:"excludeCountries",required:!1,type:{name:"string[]"}},onlyCountries:{defaultValue:{value:"[]"},description:"",name:"onlyCountries",required:!1,type:{name:"string[]"}},preferredCountries:{defaultValue:{value:"['us', 'gb']"},description:"",name:"preferredCountries",required:!1,type:{name:"string[]"}},withIndicator:{defaultValue:{value:"false"},description:"",name:"withIndicator",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"1234 123456"},description:"",name:"placeholder",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},errorsName:{defaultValue:null,description:"",name:"errorsName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fClassName:{defaultValue:null,description:"",name:"fClassName",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},i18n:{defaultValue:null,description:"",name:"i18n",required:!1,type:{name:"I18nType"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"() => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"() => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"() => void"}}}}}catch{}const I={title:"Input/Tel",component:n,tags:["autodocs"]},r={args:{name:"phone",label:"Phone",description:"Phone number"},render:a=>e.createElement(c,{initialValues:{phone:""},onSubmit:f("submit")},()=>e.createElement(b,null,e.createElement(n,{...a}),e.createElement(h,null,"Submit")))},t={args:{name:"phone",label:"Phone",description:"Phone number",withIndicator:!0},render:a=>e.createElement(c,{initialValues:{phone:""},onSubmit:f("submit")},()=>e.createElement(b,null,e.createElement(n,{...a}),e.createElement(h,null,"Submit")))};var s,u,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: 'phone',
    label: 'Phone',
    description: 'Phone number'
  },
  render: args => <Formik initialValues={{
    phone: ''
  }} onSubmit={action('submit')}>
      {() => <Form>
          <Tel {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(o=(u=r.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'phone',
    label: 'Phone',
    description: 'Phone number',
    withIndicator: true
  },
  render: args => <Formik initialValues={{
    phone: ''
  }} onSubmit={action('submit')}>
      {() => <Form>
          <Tel {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const C=["Input","WithIndicator"];export{r as Input,t as WithIndicator,C as __namedExportsOrder,I as default};
