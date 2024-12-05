import{F as c,a as d,b as f,S as b}from"./Submit-BGIobfEZ.js";import{R as e}from"./index-DlAg5hdJ.js";import{F as m}from"./FileUpload-DL_57saI.js";import"./v4-CQkTLCs1.js";import"./index-CS2SCc-X.js";import"./File-bk5nQgKn.js";import"./Progress-DCjffZAI.js";const _={title:"Input/FileUpload",component:m,tags:["autodocs"]};function k(n,l,p,u){let o="";{const r=new Date;r.setTime(r.getTime()+p*24*60*60*1e3),o=`; expires=${r.toUTCString()}`}document.cookie=`${n}=${l}${o}; path=/; domain=${u};`}k("_dp_csrf_token","123456",1,"deskpro.test");const t={args:{name:"files",label:"Attachments",url:"http://deskpro.test/en/dpblob",csrfToken:"123456",multiple:!0,files:[{name:"Test file",filename:"Test file.pdf"}]},render:n=>e.createElement(c,{initialValues:{text:""},onSubmit:d("submit")},()=>e.createElement(f,null,e.createElement(m,{...n}),e.createElement(b,null,"Submit")))};var a,i,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const $=["Input"];export{t as Input,$ as __namedExportsOrder,_ as default};
