import{j as e,a as n}from"./index-Cu9b6RMb.js";import{b as i,F as l,a as c,S as d}from"./Submit-B52r16mi.js";import{c as p,a as r,C as u}from"./Checkbox-HF2W-6lO.js";import{E as h}from"./Email-4KXZb9yx.js";import{P as b}from"./Password-BX-Q4uFg.js";import{D as w}from"./DropDown-U3U_mA5B.js";import"./index-BTmClkIh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B53NYd7n.js";import"./index-DrFu-skq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CVWs3LsI.js";import"./index-DJKtnk1S.js";const M={title:"Forms/Basic form",component:i,tags:["autodocs"]},v=[{value:"free",label:"Free"},{value:"medium",label:"Medium"},{value:"premium",label:"Premium"}],S=p().shape({email:r().email("Email not valid").required("Email is required"),password:r().min(9,"Password must be 9 characters or longer").required("Password is required"),newsletter:r().matches(/true/,"You must accept the newsletter")}),a={args:{showHover:!1},render:m=>e(l,{initialValues:{text:""},onSubmit:c("submit"),validationSchema:S,children:()=>n(i,{showHover:m.showHover,children:[e(h,{name:"email",placeholder:"Email",label:"Email"}),e(b,{name:"password",placeholder:"Password",label:"Password",description:"Must have 9 characters minimum"}),e(u,{id:"checkbox",name:"newsletter",label:"Join our newsletter"}),e(w,{dataSource:{getOptions:v},name:"plan",label:"Plan"}),e(d,{children:"Submit"})]})})};var o,s,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
