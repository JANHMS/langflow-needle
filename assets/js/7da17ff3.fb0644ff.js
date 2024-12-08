"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1258],{80115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(74848),r=t(28453);const a={title:"Travel planning agent",sidebar_position:8,slug:"/starter-projects-travel-planning-agent"},l=void 0,o={id:"Starter-Projects/starter-projects-travel-planning-agent",title:"Travel planning agent",description:"Build a Travel Planning Agent flow for an agentic application using the multiple Tool-calling agents.",source:"@site/docs/Starter-Projects/starter-projects-travel-planning-agent.md",sourceDirName:"Starter-Projects",slug:"/starter-projects-travel-planning-agent",permalink:"/starter-projects-travel-planning-agent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Travel planning agent",sidebar_position:8,slug:"/starter-projects-travel-planning-agent"},sidebar:"docs",previous:{title:"Sequential tasks agent",permalink:"/starter-projects-sequential-agent"},next:{title:"Workspace concepts",permalink:"/workspace-overview"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Open Langflow and start a new flow",id:"open-langflow-and-start-a-new-flow",level:2},{value:"Create the travel planning agent flow",id:"create-the-travel-planning-agent-flow",level:2},{value:"Run the travel planning agent flow",id:"run-the-travel-planning-agent-flow",level:2}];function h(e){const n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Build a ",(0,s.jsx)(n.strong,{children:"Travel Planning Agent"})," flow for an agentic application using the multiple Tool-calling agents."]}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.strong,{children:"agent"}),' uses an LLM as its "brain" to select among the connected tools and complete its tasks.']}),"\n",(0,s.jsxs)(n.p,{children:["In this flow, multiple ",(0,s.jsx)(n.strong,{children:"Tool-calling agents"})," reason using an ",(0,s.jsx)(n.strong,{children:"Open AI"})," LLM to plan a travel journey. Each agent is given a different responsibility defined by its ",(0,s.jsx)(n.strong,{children:"System Prompt"})," field."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Chat input"})," defines where the user wants to go, and passes the result to the ",(0,s.jsx)(n.strong,{children:"City Selection"})," agent. The ",(0,s.jsx)(n.strong,{children:"Local Expert"})," agent then adds information based on the selected cities, and the ",(0,s.jsx)(n.strong,{children:"Travel Concierge"})," assembles a seven day travel plan in Markdown."]}),"\n",(0,s.jsxs)(n.p,{children:["All agents have access to the ",(0,s.jsx)(n.strong,{children:"Search API"})," and ",(0,s.jsx)(n.strong,{children:"URL Content Fetcher"})," components, while only the Travel Concierge can use the ",(0,s.jsx)(n.strong,{children:"Calculator"})," for computing the trip costs."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["To use this flow, you need an ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/",children:"OpenAI API key"})," and a ",(0,s.jsx)(n.a,{href:"https://www.searchapi.io/",children:"Search API key"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"open-langflow-and-start-a-new-flow",children:"Open Langflow and start a new flow"}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"New Flow"}),", and then select the ",(0,s.jsx)(n.strong,{children:"Travel Planning Agent"})," flow."]}),"\n",(0,s.jsx)(n.p,{children:"This opens a starter flow with the necessary components to run an agentic application using multiple Tool-calling agents."}),"\n",(0,s.jsx)(n.h2,{id:"create-the-travel-planning-agent-flow",children:"Create the travel planning agent flow"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(94e3).A+"",width:"2948",height:"1302"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Travel Planning Agent"})," flow consists of these components:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Multiple ",(0,s.jsx)(n.strong,{children:"Tool calling agent"})," components that use the connected LLM to reason through the user's input and select among the connected tools to complete their tasks."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"Calculator"})," component performs basic arithmetic operations."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"URL Content Fetcher"})," component scrapes content from a given URL."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"Chat Input"})," component accepts user input to the chat."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"Chat Output"})," component prints the flow's output to the chat."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"OpenAI"})," model component sends the user input and prompt to the OpenAI API and receives a response."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"run-the-travel-planning-agent-flow",children:"Run the travel planning agent flow"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Add your credentials to the Open AI and Search API components."}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Chat output"})," component, click \u25b6\ufe0f Play to start the end-to-end application flow.\nA ",(0,s.jsx)(n.strong,{children:"Chat output built successfully"})," message and a \u2705 Check on all components indicate that the flow ran successfully."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Playground"})," to start a chat session.\nYou should receive a detailed, helpful answer to the journey defined in the ",(0,s.jsx)(n.strong,{children:"Chat input"})," component."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now that your query has completed the journey from ",(0,s.jsx)(n.strong,{children:"Chat input"})," to ",(0,s.jsx)(n.strong,{children:"Chat output"}),", you have completed the ",(0,s.jsx)(n.strong,{children:"Travel Planning Agent"})," flow."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94e3:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/starter-flow-travel-agent-94f75fa203af9a49e2571bdc68bc6050.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(96540);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);