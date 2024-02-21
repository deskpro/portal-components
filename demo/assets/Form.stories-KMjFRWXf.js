import{j as e,a as n}from"./index-O-l6OFW6.js";import{b as i,F as l,a as c,S as d}from"./Submit-ZWH0ymzD.js";import{c as p,a as r,C as u}from"./Checkbox-8mfC3QX6.js";import{E as h}from"./Email-t7WbbvW8.js";import{P as b}from"./Password-2HwNbXrU.js";import{D as w}from"./DropDown-JnTL_igb.js";import"./index-2fYL9DzZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-4EJmg-NZ.js";import"./index-PPLHz8o0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-uzpk7B40.js";import"./index-hIUESwVt.js";const M={title:"Forms/Basic form",component:i,tags:["autodocs"]},v=[{value:"free",label:"Free"},{value:"medium",label:"Medium"},{value:"premium",label:"Premium"}],S=p().shape({email:r().email("Email not valid").required("Email is required"),password:r().min(9,"Password must be 9 characters or longer").required("Password is required"),newsletter:r().matches(/true/,"You must accept the newsletter")}),a={args:{showHover:!1},render:m=>e(l,{initialValues:{text:""},onSubmit:c("submit"),validationSchema:S,children:()=>n(i,{showHover:m.showHover,children:[e(h,{name:"email",placeholder:"Email",label:"Email"}),e(b,{name:"password",placeholder:"Password",label:"Password",description:"Must have 9 characters minimum"}),e(u,{id:"checkbox",name:"newsletter",label:"Join our newsletter"}),e(w,{dataSource:{getOptions:v},name:"plan",label:"Plan"}),e(d,{children:"Submit"})]})})};var o,s,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const O=["Input"];export{a as Input,O as __namedExportsOrder,M as default};
