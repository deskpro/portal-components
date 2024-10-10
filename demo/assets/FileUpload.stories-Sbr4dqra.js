import{j as n,a as c}from"./index-O-l6OFW6.js";import{F as d,a as f,b,S as k}from"./Submit-ZWH0ymzD.js";import{F as l}from"./FileUpload-Fv8QM0fL.js";import"./index-2fYL9DzZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-4EJmg-NZ.js";import"./index-PPLHz8o0.js";import"./File-i9_is3Z_.js";import"./index-tvtfaFq4.js";import"./Progress-XycQIgQw.js";const A={title:"Input/FileUpload",component:l,tags:["autodocs"]};function F(t,p,o,u){let r="";if(o){const i=new Date;i.setTime(i.getTime()+o*24*60*60*1e3),r=`; expires=${i.toUTCString()}`}document.cookie=`${t}=${p||""}${r}; path=/; domain=${u};`}F("_dp_csrf_token","123456",1,"deskpro.test");const e={args:{name:"files",label:"Attachments",url:"http://deskpro.test/en/dpblob",csrfToken:"123456",multiple:!0,files:[{name:"Test file",filename:"Test file.pdf"}]},render:t=>n(d,{initialValues:{text:""},onSubmit:f("submit"),children:()=>c(b,{children:[n(l,{...t}),n(k,{children:"Submit"})]})})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: 'files',
    label: 'Attachments',
    url: 'http://deskpro.test/en/dpblob',
    csrfToken: '123456',
    multiple: true,
    files: [{
      name: 'Test file',
      filename: 'Test file.pdf'
    }]
  },
  render: args => <Formik initialValues={{
    text: ''
  }} onSubmit={action('submit')}>
      {() => <Form>
          <FileUpload {...args} />
          <Submit>Submit</Submit>
        </Form>}
    </Formik>
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const C=["Input"];export{e as Input,C as __namedExportsOrder,A as default};
