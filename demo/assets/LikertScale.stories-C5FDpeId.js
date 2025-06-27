import{c as m,g as q,F as _,a as V,b as k,S as F}from"./Submit-BnsufPd_.js";import{r as l,R as i}from"./index-DlAg5hdJ.js";import{c as S}from"./index-CS2SCc-X.js";import"./v4-CtRu48qb.js";const o=class o extends m{constructor(h){super(h),this.handleKeyPress=(a,r,d)=>{const{name:n}=this.props;a.key===" "&&(a.preventDefault(),r.setFieldValue(n,d))},this.handleBlur=()=>{this.setState({focused:!1})},this.handleFocus=()=>{this.setState({focused:!0})},this.renderField=({form:a})=>{const{name:r,labels:d}=this.props,n=[],s=this.id,y=q(a.values,r);for(let e=5;e>0;e--)n.push(l.createElement("label",{key:e,htmlFor:`${s}-${e}`,tabIndex:0,className:"dp-pc_likert_input",onKeyPress:b=>this.handleKeyPress(b,a,e),onFocus:this.handleFocus,onBlur:this.handleBlur},l.createElement("input",{id:`${s}-${e}`,name:r,type:"radio",value:e,hidden:!0,checked:parseInt(y,10)===e,onChange:a.handleChange,onBlur:a.handleBlur}),l.createElement("label",{className:"dp-pc_likert_number",htmlFor:`${s}-${e}`},e),l.createElement("label",{className:"dp-pc_likert_label",htmlFor:`${s}-${e}`},d[e-1])));return l.createElement("div",{className:S("dp-pc_likert",{focused:this.state.focused})},n)},this.state={focused:!1}}};o.defaultProps={...m.defaultProps,labels:["Strongly agree","Agree","Neutral","Disagree","Strongly disagree"]};let t=o;try{t.displayName="LikertScale",t.__docgenInfo={description:"",displayName:"LikertScale",props:{labels:{defaultValue:{value:`[
      'Strongly agree',
      'Agree',
      'Neutral',
      'Disagree',
      'Strongly disagree',
    ]`},description:"",name:"labels",required:!1,type:{name:"string[]"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},errorsName:{defaultValue:null,description:"",name:"errorsName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fClassName:{defaultValue:null,description:"",name:"fClassName",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},i18n:{defaultValue:null,description:"",name:"i18n",required:!1,type:{name:"I18nType"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"() => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"() => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"() => void"}}}}}catch{}const $={title:"Input/Likert scale",component:t,tags:["autodocs"]},u={args:{name:"likert_scale",label:"Rating",description:"Short description",required:!0},render:c=>i.createElement(_,{initialValues:{likert_scale:""},onSubmit:V("submit")},()=>i.createElement(k,null,i.createElement(t,{...c}),i.createElement(F,null,"Submit")))};var p,f,g;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(f=u.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const B=["Input"];export{u as Input,B as __namedExportsOrder,$ as default};
