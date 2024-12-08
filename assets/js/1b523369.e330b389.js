"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1246],{33509:(e,t,r)=>{r.r(t),r.d(t,{CH:()=>l,assets:()=>a,chCodeConfig:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>g});var n=r(74848),o=r(28453),s=r(24754);const i={title:"Blog Writer",sidebar_position:1,slug:"/starter-projects-blog-writer"},c=void 0,d={id:"Starter-Projects/starter-projects-blog-writer",title:"Blog Writer",description:"Build a Blog Writer flow for a one-shot application using OpenAI.",source:"@site/docs/Starter-Projects/starter-projects-blog-writer.md",sourceDirName:"Starter-Projects",slug:"/starter-projects-blog-writer",permalink:"/starter-projects-blog-writer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Blog Writer",sidebar_position:1,slug:"/starter-projects-blog-writer"},sidebar:"docs",previous:{title:"Basic Prompting",permalink:"/starter-projects-basic-prompting"},next:{title:"Document QA",permalink:"/starter-projects-document-qa"}},a={},l={annotations:s.hk,Code:s.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},g=[{value:"Prerequisites",id:"899268e6c12c49b59215373a38287507",level:2},{value:"Create the blog writer flow",id:"0c1a9c65b7d640f693ec3aad963416ff",level:2},{value:"Run the blog writer flow",id:"b93be7a567f5400293693b31b8d0f81a",level:3}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return l||f("CH",!1),l.Code||f("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,n.jsx)(t.p,{children:"Build a Blog Writer flow for a one-shot application using OpenAI."}),"\n",(0,n.jsxs)(t.p,{children:["This flow extends the Basic Prompting flow with the ",(0,n.jsx)(t.strong,{children:"URL"})," and ",(0,n.jsx)(t.strong,{children:"Parse data"})," components that fetch content from multiple URLs and convert the loaded data into plain text."]}),"\n",(0,n.jsxs)(t.p,{children:["OpenAI uses this loaded data to generate a blog post, as instructed by the ",(0,n.jsx)(t.strong,{children:"Text input"})," component."]}),"\n",(0,n.jsx)(t.h2,{id:"899268e6c12c49b59215373a38287507",children:"Prerequisites"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/get-started-installation",children:"Langflow installed and running"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://platform.openai.com/",children:"OpenAI API key created"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"0c1a9c65b7d640f693ec3aad963416ff",children:"Create the blog writer flow"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["From the Langflow dashboard, click\xa0",(0,n.jsx)(t.strong,{children:"New Flow"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Select\xa0",(0,n.jsx)(t.strong,{children:"Blog Writer"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The\xa0",(0,n.jsx)(t.strong,{children:"Blog Writer"})," flow is created."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(17574).A+"",width:"2908",height:"976"})}),"\n",(0,n.jsxs)(t.p,{children:["This flow creates a one-shot article generator with\xa0",(0,n.jsx)(t.strong,{children:"Prompt"}),",\xa0",(0,n.jsx)(t.strong,{children:"OpenAI"}),", and\xa0",(0,n.jsx)(t.strong,{children:"Chat Output"}),"\xa0components, augmented with reference content and instructions from the\xa0",(0,n.jsx)(t.strong,{children:"URL"}),"\xa0and\xa0",(0,n.jsx)(t.strong,{children:"Text Input"}),"\xa0components."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"URL"})," component extracts raw text and metadata from one or more web links.\nThe ",(0,n.jsx)(t.strong,{children:"Parse Data"})," component converts the data coming from the ",(0,n.jsx)(t.strong,{children:"URL"})," component into plain text to feed the prompt."]}),"\n",(0,n.jsxs)(t.p,{children:["To examine the flow's prompt,\xa0click the ",(0,n.jsx)(t.strong,{children:"Template"}),"\xa0field of the ",(0,n.jsx)(t.strong,{children:"Prompt"})," component."]}),"\n",(0,n.jsx)(l.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"Reference 1:",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"{references}",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"---",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"{instructions}",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"Blog:",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.code,{children:"{instructions}"}),"\xa0value is received from the\xa0",(0,n.jsx)(t.strong,{children:"Text input"}),"\xa0component, and one or more\xa0",(0,n.jsx)(t.code,{children:"{references}"}),"\xa0are received from a list of URLs parsed from the ",(0,n.jsx)(t.strong,{children:"URL"})," component."]}),"\n",(0,n.jsx)(t.h3,{id:"b93be7a567f5400293693b31b8d0f81a",children:"Run the blog writer flow"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Click the\xa0",(0,n.jsx)(t.strong,{children:"Playground"}),"\xa0button. Here you can chat with the AI that has access to the ",(0,n.jsx)(t.strong,{children:"URL"})," content."]}),"\n",(0,n.jsxs)(t.li,{children:["Click the\xa0",(0,n.jsx)(t.strong,{children:"Lighting Bolt"}),"\xa0icon to run it."]}),"\n",(0,n.jsxs)(t.li,{children:["To write about something different, change the values in the\xa0",(0,n.jsx)(t.strong,{children:"URL"}),"\xa0component and adjust the instructions on the left side bar of the ",(0,n.jsx)(t.strong,{children:"Playground"}),". Try again and see what the LLM constructs."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},17574:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/starter-flow-blog-writer-3ccae539e48f559f7aba9d741e2d8984.png"}}]);