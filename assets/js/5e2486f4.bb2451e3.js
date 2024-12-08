"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3335],{42441:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(74848),r=n(28453);const i={},o="Stream Logs",a={type:"api",id:"stream-logs",title:"Stream Logs",description:"",slug:"/stream-logs",frontMatter:{},api:{tags:["Log"],description:'HTTP/2 Server-Sent-Event (SSE) endpoint for streaming logs.\n\nIt establishes a long-lived connection to the server and receives log messages in real-time.\nThe client should use the header "Accept: text/event-stream".',operationId:"stream_logs_logs_stream_get",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}}},method:"get",path:"/logs-stream",parameters:[],securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Stream Logs",description:{content:'HTTP/2 Server-Sent-Event (SSE) endpoint for streaming logs.\n\nIt establishes a long-lived connection to the server and receives log messages in real-time.\nThe client should use the header "Accept: text/event-stream".',type:"text/plain"},url:{path:["logs-stream"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/stream-logs",previous:{title:"Health Check",permalink:"/api/health-check"},next:{title:"Logs",permalink:"/api/logs"}},l=[];function c(e){const t={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"stream-logs",children:"Stream Logs"})}),"\n",(0,s.jsx)(t.p,{children:"HTTP/2 Server-Sent-Event (SSE) endpoint for streaming logs."}),"\n",(0,s.jsx)(t.p,{children:'It establishes a long-lived connection to the server and receives log messages in real-time.\nThe client should use the header "Accept: text/event-stream".'}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Successful Response"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})})})]})]})}function d(e){void 0===e&&(e={});const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);