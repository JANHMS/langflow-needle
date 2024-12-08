"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3249],{87341:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(74848),i=n(28453);const r={},l="Login To Get Access Token",o={type:"api",id:"login-to-get-access-token",title:"Login To Get Access Token",description:"",slug:"/login-to-get-access-token",frontMatter:{},api:{tags:["Login"],operationId:"login_to_get_access_token_api_v1_login_post",requestBody:{content:{"application/x-www-form-urlencoded":{schema:{properties:{grant_type:{anyOf:[{type:"string",pattern:"password"},{type:"null"}],title:"Grant Type"},username:{type:"string",title:"Username"},password:{type:"string",title:"Password"},scope:{type:"string",title:"Scope",default:""},client_id:{anyOf:[{type:"string"},{type:"null"}],title:"Client Id"},client_secret:{anyOf:[{type:"string"},{type:"null"}],title:"Client Secret"}},type:"object",required:["username","password"],title:"Body_login_to_get_access_token_api_v1_login_post"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{access_token:{type:"string",title:"Access Token"},refresh_token:{type:"string",title:"Refresh Token"},token_type:{type:"string",title:"Token Type"}},type:"object",required:["access_token","refresh_token","token_type"],title:"Token"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Login To Get Access Token",method:"post",path:"/api/v1/login",parameters:[],securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Login To Get Access Token",description:{type:"text/plain"},url:{path:["api","v1","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/x-www-form-urlencoded"}],method:"POST",body:{mode:"urlencoded",urlencoded:[{description:{content:"",type:"text/plain"},key:"username",value:"<string>"},{description:{content:"",type:"text/plain"},key:"password",value:"<string>"},{description:{content:"",type:"text/plain"},key:"grant_type",value:"<string>"},{description:{content:"",type:"text/plain"},key:"scope",value:""},{description:{content:"",type:"text/plain"},key:"client_id",value:"<string>"},{description:{content:"",type:"text/plain"},key:"client_secret",value:"<string>"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/login-to-get-access-token",previous:{title:"Save Store Api Key",permalink:"/api/save-store-api-key"},next:{title:"Auto Login",permalink:"/api/auto-login"}},c=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"login-to-get-access-token",children:"Login To Get Access Token"})}),"\n",(0,s.jsx)(t.p,{children:"Login To Get Access Token"}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Request Body "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"grant_type"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Grant Type"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"username"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Username"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"password"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Password"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"scope"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Scope"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"client_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Client Id"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"client_secret"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Client Secret"})]})})]})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Successful Response"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"access_token"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Access Token"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"refresh_token"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Refresh Token"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"token_type"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Token Type"})]})})]})]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"422"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Validation Error"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"detail"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"loc"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"msg"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"type"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function a(e){void 0===e&&(e={});const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);