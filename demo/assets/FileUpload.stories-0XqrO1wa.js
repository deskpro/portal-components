import{j as i,a as d}from"./index-Cu9b6RMb.js";import{F as c,a as f,b,S as k}from"./Submit-B52r16mi.js";import{F as m}from"./FileUpload-DxlMalD6.js";import"./index-BTmClkIh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B53NYd7n.js";import"./index-DrFu-skq.js";import"./File-fA5bknZX.js";import"./index-D3ylJrlI.js";import"./Progress-Dqqku3hD.js";const A={title:"Input/FileUpload",component:m,tags:["autodocs"]};function F(t,l,p,u){let o="";{const n=new Date;n.setTime(n.getTime()+p*24*60*60*1e3),o=`; expires=${n.toUTCString()}`}document.cookie=`${t}=${l}${o}; path=/; domain=${u};`}F("_dp_csrf_token","123456",1,"deskpro.test");const e={args:{name:"files",label:"Attachments",url:"http://deskpro.test/en/dpblob",csrfToken:"123456",multiple:!0,files:[{name:"Test file",filename:"Test file.pdf"}]},render:t=>i(c,{initialValues:{text:""},onSubmit:f("submit"),children:()=>d(b,{children:[i(m,{...t}),i(k,{children:"Submit"})]})})};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const C=["Input"];export{e as Input,C as __namedExportsOrder,A as default};
