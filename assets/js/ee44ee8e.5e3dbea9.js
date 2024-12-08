"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7054],{30976:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(74848),l=i(28453);const r={},s="Read Folder",a={type:"api",id:"read-folder",title:"Read Folder",description:"",slug:"/read-folder",frontMatter:{},api:{tags:["Folders"],operationId:"read_folder_api_v1_folders__folder_id__get",security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],parameters:[{name:"folder_id",in:"path",required:!0,schema:{type:"string",title:"Folder Id"}},{name:"is_component",in:"query",required:!1,schema:{type:"boolean",default:!1,title:"Is Component"}},{name:"is_flow",in:"query",required:!1,schema:{type:"boolean",default:!1,title:"Is Flow"}},{name:"search",in:"query",required:!1,schema:{type:"string",default:"",title:"Search"}},{name:"page",in:"query",required:!1,schema:{anyOf:[{type:"integer"},{type:"null"}],title:"Page"}},{name:"size",in:"query",required:!1,schema:{anyOf:[{type:"integer"},{type:"null"}],title:"Size"}}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{anyOf:[{properties:{folder:{properties:{name:{type:"string",title:"Name"},description:{anyOf:[{type:"string"},{type:"null"}],title:"Description"},id:{type:"string",format:"uuid",title:"Id"},parent_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Parent Id"}},type:"object",required:["name","id","parent_id"],title:"FolderRead"},flows:{properties:{items:{items:{properties:{name:{type:"string",title:"Name"},description:{anyOf:[{type:"string"},{type:"null"}],title:"Description"},icon:{anyOf:[{type:"string"},{type:"null"}],title:"Icon"},icon_bg_color:{anyOf:[{type:"string"},{type:"null"}],title:"Icon Bg Color"},gradient:{anyOf:[{type:"string"},{type:"null"}],title:"Gradient"},data:{anyOf:[{type:"object"},{type:"null"}],title:"Data"},is_component:{anyOf:[{type:"boolean"},{type:"null"}],title:"Is Component",default:!1},updated_at:{anyOf:[{type:"string",format:"date-time"},{type:"null"}],title:"Updated At"},webhook:{anyOf:[{type:"boolean"},{type:"null"}],title:"Webhook",description:"Can be used on the webhook endpoint",default:!1},endpoint_name:{anyOf:[{type:"string"},{type:"null"}],title:"Endpoint Name"},tags:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Tags",default:[]},id:{type:"string",format:"uuid",title:"Id"},user_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"User Id"},folder_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Folder Id"}},type:"object",required:["name","user_id"],title:"Flow"},type:"array",title:"Items"},total:{anyOf:[{type:"integer",minimum:0},{type:"null"}],title:"Total"},page:{anyOf:[{type:"integer",minimum:1},{type:"null"}],title:"Page"},size:{anyOf:[{type:"integer",minimum:1},{type:"null"}],title:"Size"},pages:{anyOf:[{type:"integer",minimum:0},{type:"null"}],title:"Pages"}},type:"object",required:["items","total","page","size"],title:"Page[Flow]"}},type:"object",required:["folder","flows"],title:"FolderWithPaginatedFlows"},{properties:{name:{type:"string",title:"Name"},description:{anyOf:[{type:"string"},{type:"null"}],title:"Description"},id:{type:"string",format:"uuid",title:"Id"},parent_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Parent Id"},flows:{items:{properties:{name:{type:"string",title:"Name"},description:{anyOf:[{type:"string"},{type:"null"}],title:"Description"},icon:{anyOf:[{type:"string"},{type:"null"}],title:"Icon"},icon_bg_color:{anyOf:[{type:"string"},{type:"null"}],title:"Icon Bg Color"},gradient:{anyOf:[{type:"string"},{type:"null"}],title:"Gradient"},data:{anyOf:[{type:"object"},{type:"null"}],title:"Data"},is_component:{anyOf:[{type:"boolean"},{type:"null"}],title:"Is Component",default:!1},updated_at:{anyOf:[{type:"string",format:"date-time"},{type:"null"}],title:"Updated At"},webhook:{anyOf:[{type:"boolean"},{type:"null"}],title:"Webhook",description:"Can be used on the webhook endpoint",default:!1},endpoint_name:{anyOf:[{type:"string"},{type:"null"}],title:"Endpoint Name"},tags:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Tags"},id:{type:"string",format:"uuid",title:"Id"},user_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"User Id"},folder_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Folder Id"}},type:"object",required:["name","id","user_id","folder_id"],title:"FlowRead"},type:"array",title:"Flows",default:[]}},type:"object",required:["name","id","parent_id"],title:"FolderReadWithFlows"}],title:"Response Read Folder Api V1 Folders  Folder Id  Get"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Read Folder",method:"get",path:"/api/v1/folders/{folder_id}",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Read Folder",description:{type:"text/plain"},url:{path:["api","v1","folders",":folder_id"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"is_component",value:"false"},{description:{content:"",type:"text/plain"},key:"is_flow",value:"false"},{description:{content:"",type:"text/plain"},key:"search",value:""},{description:{content:"",type:"text/plain"},key:"page",value:"<integer>"},{description:{content:"",type:"text/plain"},key:"size",value:"<integer>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"folder_id"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/read-folder",previous:{title:"Create Folder",permalink:"/api/create-folder"},next:{title:"Update Folder",permalink:"/api/update-folder"}},d=[];function o(e){const t={h1:"h1",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"read-folder",children:"Read Folder"})}),"\n",(0,n.jsx)(t.p,{children:"Read Folder"}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"folder_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Query Parameters"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"is_component"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Is Component"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"is_flow"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Is Flow"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"search"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Search"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"page"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Page"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"size"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Size"})]})})]})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Successful Response"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"422"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Validation Error"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"detail"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"loc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"msg"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function p(e){void 0===e&&(e={});const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const l={},r=n.createContext(l);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);