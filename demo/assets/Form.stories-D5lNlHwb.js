import{b as m,F as l,a as n,S as c}from"./Submit-BGIobfEZ.js";import{R as e}from"./index-DlAg5hdJ.js";import{c as u,a as r,C as d}from"./Checkbox-DJ-jE8L3.js";import{E as p}from"./Email-DHsnx-II.js";import{P as b}from"./Password-QDKRWIHf.js";import{D as h}from"./DropDown-BDK-jYjd.js";import"./v4-CQkTLCs1.js";import"./index-CS2SCc-X.js";import"./index-akXHnwru.js";import"./index-DqYt4Xuk.js";const q={title:"Forms/Basic form",component:m,tags:["autodocs"]},w=[{value:"free",label:"Free"},{value:"medium",label:"Medium"},{value:"premium",label:"Premium"}],E=u().shape({email:r().email("Email not valid").required("Email is required"),password:r().min(9,"Password must be 9 characters or longer").required("Password is required"),newsletter:r().matches(/true/,"You must accept the newsletter")}),a={args:{showHover:!1},render:i=>e.createElement(l,{initialValues:{text:""},onSubmit:n("submit"),validationSchema:E},()=>e.createElement(m,{showHover:i.showHover},e.createElement(p,{name:"email",placeholder:"Email",label:"Email"}),e.createElement(b,{name:"password",placeholder:"Password",label:"Password",description:"Must have 9 characters minimum"}),e.createElement(d,{id:"checkbox",name:"newsletter",label:"Join our newsletter"}),e.createElement(h,{dataSource:{getOptions:w},name:"plan",label:"Plan"}),e.createElement(c,null,"Submit")))};var o,t,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    showHover: false
  },
  render: args => <Formik initialValues={{
    text: ''
  }} onSubmit={action('submit')} validationSchema={validationSchema}>
      {() => <Form showHover={args.showHover}>
          <Email name="email" placeholder="Email" label="Email" />
          <Password name="password" placeholder="Password" label="Password" description="Must have 9 characters minimum" />
          <Checkbox id="checkbox" name="newsletter" label="Join our newsletter" />
          <DropDown dataSource={{
        getOptions: options
      }} name="plan" label="Plan" />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const C=["Input"];export{a as Input,C as __namedExportsOrder,q as default};
