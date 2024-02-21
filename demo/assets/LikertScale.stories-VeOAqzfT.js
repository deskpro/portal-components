import{a as h,j as l,c as q}from"./index-O-l6OFW6.js";import{c,g as _,F as V,a as F,b as S,S as k}from"./Submit-ZWH0ymzD.js";import"./index-2fYL9DzZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-4EJmg-NZ.js";import"./index-PPLHz8o0.js";const u=class u extends c{constructor(g){super(g),this.handleKeyPress=(a,t,d)=>{const{name:n}=this.props;a.key===" "&&(a.preventDefault(),t.setFieldValue(n,d))},this.handleBlur=()=>{this.setState({focused:!1})},this.handleFocus=()=>{this.setState({focused:!0})},this.renderField=({form:a})=>{const{name:t,labels:d}=this.props,n=[],s=this.id,y=_(a.values,t);for(let e=5;e>0;e--)n.push(h("label",{htmlFor:`${s}-${e}`,tabIndex:0,className:"dp-pc_likert_input",onKeyPress:b=>this.handleKeyPress(b,a,e),onFocus:this.handleFocus,onBlur:this.handleBlur,children:[l("input",{id:`${s}-${e}`,name:t,type:"radio",value:e,hidden:!0,checked:parseInt(y,10)===e,onChange:a.handleChange,onBlur:a.handleBlur}),l("label",{className:"dp-pc_likert_number",htmlFor:`${s}-${e}`,children:e}),l("label",{className:"dp-pc_likert_label",htmlFor:`${s}-${e}`,children:d[e-1]})]},e));return l("div",{className:q("dp-pc_likert",{focused:this.state.focused}),children:n})},this.state={focused:!1}}};u.defaultProps={...c.defaultProps,labels:["Strongly agree","Agree","Neutral","Disagree","Strongly disagree"]};let r=u;try{r.displayName="LikertScale",r.__docgenInfo={description:"",displayName:"LikertScale",props:{labels:{defaultValue:{value:`[
      'Strongly agree',
      'Agree',
      'Neutral',
      'Disagree',
      'Strongly disagree',
    ]`},description:"",name:"labels",required:!1,type:{name:"string[]"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},errorsName:{defaultValue:null,description:"",name:"errorsName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fClassName:{defaultValue:null,description:"",name:"fClassName",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},i18n:{defaultValue:null,description:"",name:"i18n",required:!1,type:{name:"I18nType"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"() => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"() => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"() => void"}}}}}catch{}const P={title:"Input/Likert scale",component:r,tags:["autodocs"]},i={args:{name:"likert_scale",label:"Rating",description:"Short description",required:!0},render:o=>l(V,{initialValues:{likert_scale:""},onSubmit:F("submit"),children:()=>h(S,{children:[l(r,{...o}),l(k,{children:"Submit"})]})})};var p,m,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'likert_scale',
    label: 'Rating',
    description: 'Short description',
    required: true
  },
  render: args => <Formik initialValues={{
    likert_scale: ''
  }} onSubmit={action('submit')}>
      {() => <Form>
          <LikertScale {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const C=["Input"];export{i as Input,C as __namedExportsOrder,P as default};
