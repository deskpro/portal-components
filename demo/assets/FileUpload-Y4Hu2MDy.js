import{a as o,j as s,c as f}from"./index-O-l6OFW6.js";import{r as v}from"./index-2fYL9DzZ.js";import{A as _,D as y,F as V}from"./File-i9_is3Z_.js";import{e as N,c as g}from"./Submit-ZWH0ymzD.js";import{P as q}from"./Progress-XycQIgQw.js";const F=l=>o("svg",{viewBox:"0 0 600 600",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",...l,children:[s("style",{children:".file-icon_svg__st0{fill:#6e8293}"}),s("path",{className:"file-icon_svg__st0",d:"M471 588H129.3c-29.8 0-54-24.2-54-54V62c0-29.8 24.2-54 54-54H471c29.8 0 54 24.2 54 54v472c0 29.8-24.2 54-54 54zM129.3 58.5c-1.9 0-3.6 1.7-3.6 3.6v472c0 1.9 1.7 3.6 3.6 3.6H471c1.9 0 3.6-1.7 3.6-3.6v-472c0-1.9-1.7-3.6-3.6-3.6H129.3z"}),s("path",{className:"file-icon_svg__st0",d:"M182.5 122.7h238.7v50.4H182.5zM182.5 222.9h238.7v50.4H182.5zM182.192 324.096l163.084-2.003.619 50.395-163.084 2.003z"})]});try{FileIcon.displayName="FileIcon",FileIcon.__docgenInfo={description:"",displayName:"FileIcon",props:{}}}catch{}const S=l=>o("svg",{viewBox:"0 0 600 600",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",...l,children:[s("style",{children:".drag-and-drop_svg__st0{fill:#6e8293}"}),s("path",{className:"drag-and-drop_svg__st0",d:"M56.3 297.5v-48.3h48.2V201H56.3C29.7 201 8 222.7 8 249.2v48.3h48.3zM538.7 8H249.2C222.7 8 201 29.7 201 56.3V201h-48.3v48.3H201v96.5c0 26.5 21.7 48.2 48.2 48.2h96.5v48.3H394V394h144.7c26.5 0 48.3-21.7 48.3-48.2V56.3C587 29.7 565.3 8 538.7 8zm0 337.7H249.2V56.3h289.5v289.4z"}),s("path",{className:"drag-and-drop_svg__st0",d:"M297.5 249.2h48.3v48.3H394v-48.3c0-26.6-21.7-48.3-48.3-48.3h-48.3v48.3zM152.8 538.7h96.5V587h-96.5zM345.8 490.5v48.2h-48.3V587h48.3c26.5 0 48.3-21.7 48.3-48.3v-48.2h-48.3zM104.5 538.7H56.3v-48.2H8v48.2C8 565.3 29.7 587 56.3 587h48.2v-48.3zM8 345.7h48.3v96.5H8z"})]});try{DragAndDrop.displayName="DragAndDrop",DragAndDrop.__docgenInfo={description:"",displayName:"DragAndDrop",props:{}}}catch{}const b={dragNDrop:"Drag and drop",or:"or",chooseAFile:"Choose a file",chooseFiles:"Choose files",remove:"remove",error413:"File too large",errorMaxSize:"File too large: {max} maximum",generalError:"Upload failed",tooLargeError:"File too big",error:"Error"},c=class c extends v.Component{constructor(i){super(i),this.handleDrop=(r,t)=>{let a;if(a=this.state.files.filter(e=>!e.error),this.setState({files:a}),t.length>0){const e=[];t.forEach(n=>{n.errors.forEach(u=>{const m=n.file;m.error=u,e.push(m)})}),a=a.concat(e),this.setState({files:a})}r.length>0&&_({url:this.props.url,files:r,name:"blob",token:this.props.csrfToken,transferComplete:this.handleTransferComplete,transferFailed:this.handleTransferFailed,updateProgress:this.handleUpdateProgress,headers:{"X-CSRF-Token":this.props.csrfToken}})},this.handleTransferComplete=r=>{const{name:t,onChange:a}=this.props;let{response:e}=r.target;if(r.target.status===413)return this.setState({progress:-1,error:this.i18n.error413});if(r.target.status!==200)return e&&e.error&&e.error.message?this.setState({progress:-1,error:e.error.message}):e&&e.error&&e.error.code==="size"?this.setState({progress:-1,error:this.i18n.errorMaxSize.replace(/\{max\}/,e.error.detail)}):this.setState({progress:-1,error:this.i18n.generalError});typeof e=="string"&&(e=JSON.parse(e));const n=this.state.files.concat([e.blob]);return this.setState({files:n}),a(t,n),this.setState({progress:-1})},this.handleTransferFailed=()=>{this.setState({progress:-1,error:this.i18n.generalError})},this.handleUpdateProgress=r=>{if(r.lengthComputable){const t=r.loaded/r.total*100;this.setState({progress:t,error:""})}else this.setState({progress:-1,error:""})},this.handleKeyPress=r=>{r.key===" "&&(r.preventDefault(),this.dropZone.open())},this.handleBlur=()=>{this.setState({focused:!1})},this.handleFocus=()=>{this.setState({focused:!0})},this.handleMouseEnter=()=>{this.setState({hovered:!0})},this.handleMouseLeave=()=>{this.setState({hovered:!1})},this.handleRemove=r=>{const t=this.state.files.filter(a=>a.id!==r.id);this.setState({files:t})},this.renderDivider=()=>null,this.renderLabel=()=>{const{label:r,id:t}=this.props;return s("label",{className:"dp-pc_file-input_label",htmlFor:t,children:r})},this.i18n=N(b,i.i18n),this.state={files:i.files,progress:-1,focused:!1,hovered:!1,error:""}}componentDidMount(){this.props.form&&this.props.form.on("reset",()=>{this.setState({files:[]})})}render(){const{multiple:i,name:r,id:t,maxSize:a}=this.props;return o("div",{className:f("dp-pc_file-upload",{focused:this.state.focused,hovered:this.state.hovered,error:this.state.error}),children:[s(y,{onDrop:this.handleDrop,multiple:i,maxSize:a,ref:e=>{this.dropZone=e},children:({getRootProps:e,getInputProps:n,isDragActive:u})=>o("div",{className:f("dp-pc_file-upload__dropzone",{active:u}),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,...e(),tabIndex:-1,children:[s("input",{id:t,...n()}),o("div",{className:"choose",tabIndex:0,onKeyDown:this.handleKeyPress,onFocus:this.handleFocus,onBlur:this.handleBlur,children:[s(F,{}),i?this.i18n.chooseFiles:this.i18n.chooseAFile]}),s("div",{className:"or",children:this.i18n.or}),o("div",{className:"dnd",children:[s(S,{}),this.i18n.dragNDrop]}),s(q,{percent:this.state.progress})]})}),this.state.error&&s("span",{className:"dp-pc_file-upload__error",children:this.state.error}),s("ul",{className:"dp-pc_file-upload__attached",children:Array.from(this.state.files).map(e=>s(V,{onRemove:this.handleRemove,inputName:r,i18n:this.i18n,file:e},`key_${e.name}`))})]})}};c.defaultProps={multiple:!1,label:"",id:"",files:[],onChange(){},i18n:{},maxSize:1/0,form:null};let d=c;const h=class h extends g{constructor(){super(...arguments),this.renderField=({form:i})=>s(d,{onChange:i.setFieldValue,id:this.id,...this.props})}};h.defaultProps={...g.defaultProps,multiple:!1};let p=h;try{d.displayName="FileUploadInput",d.__docgenInfo={description:"",displayName:"FileUploadInput",props:{multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},id:{defaultValue:{value:""},description:"",name:"id",required:!1,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},csrfToken:{defaultValue:null,description:"",name:"csrfToken",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(name: string, files: DpBlob[]) => void"}},i18n:{defaultValue:{value:"{}"},description:"",name:"i18n",required:!1,type:{name:"object"}},files:{defaultValue:{value:"[]"},description:"",name:"files",required:!1,type:{name:"DpBlob[]"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!0,type:{name:"number"}},form:{defaultValue:{value:"null"},description:"",name:"form",required:!1,type:{name:"{ on: (event: string, callback: () => void) => void; }"}}}}}catch{}try{p.displayName="FileUpload",p.__docgenInfo={description:"",displayName:"FileUpload",props:{multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},csrfToken:{defaultValue:null,description:"",name:"csrfToken",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},errorsName:{defaultValue:null,description:"",name:"errorsName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fClassName:{defaultValue:null,description:"",name:"fClassName",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},i18n:{defaultValue:null,description:"",name:"i18n",required:!1,type:{name:"I18nType"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"() => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"() => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"() => void"}}}}}catch{}export{p as F};
