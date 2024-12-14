"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3964],{44745:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=s(74848),i=s(28453);const l={title:"AssemblyAI",sidebar_position:1,slug:"/integrations-assemblyai"},r="AssemblyAI",o={id:"Integrations/integrations-assemblyai",title:"AssemblyAI",description:"The AssemblyAI components allow you to apply powerful Speech AI models to your app for tasks like:",source:"@site/docs/Integrations/integrations-assemblyai.md",sourceDirName:"Integrations",slug:"/integrations-assemblyai",permalink:"/integrations-assemblyai",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"AssemblyAI",sidebar_position:1,slug:"/integrations-assemblyai"},sidebar:"docs",previous:{title:"Render",permalink:"/deployment-render"},next:{title:"Integrate Composio with Langflow",permalink:"/integrations-composio"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Components",id:"components",level:2},{value:"AssemblyAI Start Transcript",id:"assemblyai-start-transcript",level:3},{value:"AssemblyAI Poll Transcript",id:"assemblyai-poll-transcript",level:3},{value:"AssemblyAI Get Subtitles",id:"assemblyai-get-subtitles",level:3},{value:"AssemblyAI LeMUR",id:"assemblyai-lemur",level:3},{value:"AssemblyAI List Transcripts",id:"assemblyai-list-transcripts",level:3},{value:"Flow Process",id:"flow-process",level:2},{value:"Run the Transcription and Speech AI Flow",id:"run-the-transcription-and-speech-ai-flow",level:2},{value:"Customization",id:"customization",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"assemblyai",children:"AssemblyAI"})}),"\n",(0,t.jsx)(n.p,{children:"The AssemblyAI components allow you to apply powerful Speech AI models to your app for tasks like:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Transcribing audio and video files"}),"\n",(0,t.jsx)(n.li,{children:"Formatting transcripts"}),"\n",(0,t.jsx)(n.li,{children:"Generating subtitles"}),"\n",(0,t.jsx)(n.li,{children:"Applying LLMs to audio files"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"More info about AssemblyAI:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.assemblyai.com/",children:"Website"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.assemblyai.com/docs",children:"AssemblyAI API Docs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.assemblyai.com/dashboard/signup",children:"Get a Free API key"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["You need an ",(0,t.jsx)(n.strong,{children:"AssemblyAI API key"}),". After creating a free account, you'll find the API key in your dashboard. ",(0,t.jsx)(n.a,{href:"https://www.assemblyai.com/dashboard/signup",children:"Get a Free API key here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Enter the key in the ",(0,t.jsx)(n.em,{children:"AssemblyAI API Key"})," field in all components that require the key."]}),"\n",(0,t.jsx)(n.p,{children:"(Optional): To use LeMUR, you need to upgrade your AssemblyAI account, since this is not included in the free account."}),"\n",(0,t.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AssemblyAI Components",src:s(56453).A+"",width:"1494",height:"1048"})}),"\n",(0,t.jsx)(n.h3,{id:"assemblyai-start-transcript",children:"AssemblyAI Start Transcript"}),"\n",(0,t.jsx)(n.p,{children:"This component allows you to submit an audio or video file for transcription."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tip"}),": You can freeze the path of this component to only submit the file once."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Input"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AssemblyAI API Key: Your API key."}),"\n",(0,t.jsx)(n.li,{children:"Audio File: The audio or video file to transcribe."}),"\n",(0,t.jsxs)(n.li,{children:["Speech Model (Optional): Select the class of models. Default is ",(0,t.jsx)(n.em,{children:"Best"}),". See ",(0,t.jsx)(n.a,{href:"https://www.assemblyai.com/docs/speech-to-text/speech-recognition#select-the-speech-model-with-best-and-nano",children:"speech models"})," for more info."]}),"\n",(0,t.jsx)(n.li,{children:"Automatic Language Detection (Optional): Enable automatic language detection."}),"\n",(0,t.jsxs)(n.li,{children:["Language (Optional): The language of the audio file. Can be set manually if automatic language detection is disabled.\nSee ",(0,t.jsx)(n.a,{href:"https://www.assemblyai.com/docs/getting-started/supported-languages",children:"supported languages"})," for a list of supported language codes."]}),"\n",(0,t.jsx)(n.li,{children:"Enable Speaker Labels (Optional): Detect speakers in an audio file and what each speaker said."}),"\n",(0,t.jsx)(n.li,{children:"Expected Number of Speakers (Optional): Set the expected number of speakers, if Speaker Labels is enabled."}),"\n",(0,t.jsxs)(n.li,{children:["Audio File URL (Optional): The URL of the audio or video file to transcribe. Can be used instead of ",(0,t.jsx)(n.em,{children:"Audio File"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Punctuate (Optional): Apply punctuation. Default is true."}),"\n",(0,t.jsx)(n.li,{children:"Format Text (Optional): Apply casing and text formatting. Default is true."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Transcript ID: The id of the transcript"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"assemblyai-poll-transcript",children:"AssemblyAI Poll Transcript"}),"\n",(0,t.jsx)(n.p,{children:"This components allows you to poll the transcripts. It checks the status of the transcript every few seconds until the transcription is completed."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Input"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AssemblyAI API Key: Your API key."}),"\n",(0,t.jsx)(n.li,{children:"Polling Interval (Optional): The polling interval in seconds. Default is 3."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Transcription Result: The AssemblyAI JSON response of a completed transcript. Contains the text and other info."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"assemblyai-get-subtitles",children:"AssemblyAI Get Subtitles"}),"\n",(0,t.jsx)(n.p,{children:"This component allows you to generate subtitles in SRT or VTT format."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Input"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AssemblyAI API Key: Your API key."}),"\n",(0,t.jsxs)(n.li,{children:["Transcription Result: The output of the ",(0,t.jsx)(n.em,{children:"Poll Transcript"})," component."]}),"\n",(0,t.jsx)(n.li,{children:"Subtitle Format: The format of the captions (SRT or VTT)."}),"\n",(0,t.jsx)(n.li,{children:"Character per Caption (Optional): The maximum number of characters per caption (0 for no limit)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Subtitles: A JSON response with the ",(0,t.jsx)(n.code,{children:"subtitles"})," field containing the captions in SRT or VTT format."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"assemblyai-lemur",children:"AssemblyAI LeMUR"}),"\n",(0,t.jsxs)(n.p,{children:["This component allows you to apply Large Language Models to spoken data using the ",(0,t.jsx)(n.a,{href:"https://www.assemblyai.com/docs/lemur",children:"AssemblyAI LeMUR framework"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"LeMUR automatically ingests the transcript as additional context, making it easy to apply LLMs to audio data. You can use it for tasks like summarizing audio, extracting insights, or asking questions."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Input"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AssemblyAI API Key: Your API key."}),"\n",(0,t.jsxs)(n.li,{children:["Transcription Result: The output of the ",(0,t.jsx)(n.em,{children:"Poll Transcript"})," component."]}),"\n",(0,t.jsxs)(n.li,{children:["Input Prompt: The text to prompt the model. You can type your prompt in this field or connect it to a ",(0,t.jsx)(n.em,{children:"Prompt"})," component."]}),"\n",(0,t.jsx)(n.li,{children:"Final Model: The model that is used for the final prompt after compression is performed. Default is Claude 3.5 Sonnet."}),"\n",(0,t.jsx)(n.li,{children:"Temperature (Optional): The temperature to use for the model. Default is 0.0."}),"\n",(0,t.jsx)(n.li,{children:"Max Output Size (Optional): Max output size in tokens, up to 4000. Default is 2000."}),"\n",(0,t.jsxs)(n.li,{children:['Endpoint (Optional): The LeMUR endpoint to use. Default is "task". For "summary" and "question-answer", no prompt input is needed. See ',(0,t.jsx)(n.a,{href:"https://www.assemblyai.com/docs/api-reference/lemur/",children:"LeMUR API docs"})," for more info."]}),"\n",(0,t.jsxs)(n.li,{children:["Questions (Optional): Comma-separated list of your questions. Only used if ",(0,t.jsx)(n.em,{children:"Endpoint"}),' is "question-answer".']}),"\n",(0,t.jsxs)(n.li,{children:["Transcript IDs (Optional): Comma-separated list of transcript IDs. LeMUR can perform actions over multiple transcripts. If provided, the ",(0,t.jsx)(n.em,{children:"Transcription Result"})," is ignored."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"LeMUR Response: The generated LLM response."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"assemblyai-list-transcripts",children:"AssemblyAI List Transcripts"}),"\n",(0,t.jsx)(n.p,{children:"This component can be used as a standalone component to list all previously generated transcripts."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Input"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AssemblyAI API Key: Your API key."}),"\n",(0,t.jsx)(n.li,{children:"Limit (Optional): Maximum number of transcripts to retrieve. Default is 20, use 0 for all."}),"\n",(0,t.jsx)(n.li,{children:"Filter (Optional): Filter by transcript status."}),"\n",(0,t.jsx)(n.li,{children:"Created On (Optional): Only get transcripts created on this date (YYYY-MM-DD)."}),"\n",(0,t.jsx)(n.li,{children:"Throttled Only (Optional): Only get throttled transcripts, overrides the status filter"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Transcript List: A list of all transcripts with info such as the transcript ID, the status, and the data."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"flow-process",children:"Flow Process"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The user inputs an audio or video file."}),"\n",(0,t.jsx)(n.li,{children:"The user can also input an LLM prompt. In this example, we want to generate a summary of the transcript."}),"\n",(0,t.jsx)(n.li,{children:"The flow submits the audio file for transcription."}),"\n",(0,t.jsx)(n.li,{children:"The flow checks the status of the transcript every few seconds until transcription is completed."}),"\n",(0,t.jsx)(n.li,{children:"The flow parses the transcription result and outputs the transcribed text."}),"\n",(0,t.jsx)(n.li,{children:"The flow also generates subtitles."}),"\n",(0,t.jsx)(n.li,{children:"The flow applies the LLM prompt to generate a summary."}),"\n",(0,t.jsx)(n.li,{children:"As a standalone component, all transcripts can be listed."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"run-the-transcription-and-speech-ai-flow",children:"Run the Transcription and Speech AI Flow"}),"\n",(0,t.jsx)(n.p,{children:"To run the Transcription and Speech AI Flow:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open Langflow and create a new project."}),"\n",(0,t.jsxs)(n.li,{children:["Add the components listed above to your flow canvas, or download the ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(28618).A+"",children:"AssemblyAI Transcription and Speech AI Flow"}),"(Download link) and ",(0,t.jsx)(n.strong,{children:"Import"})," the JSON file into Langflow."]}),"\n",(0,t.jsxs)(n.li,{children:["Connect the components as shown in the flow diagram. ",(0,t.jsx)(n.strong,{children:"Tip"}),": Freeze the path of the ",(0,t.jsx)(n.em,{children:"Start Transcript"})," component to only submit the file once."]}),"\n",(0,t.jsx)(n.li,{children:"Input the AssemblyAI API key in in all components that require the key (Start Transcript, Poll Transcript, Get Subtitles, LeMUR, List Transcripts)."}),"\n",(0,t.jsxs)(n.li,{children:["Select an audio or video file in the ",(0,t.jsx)(n.em,{children:"Start Transcript"})," component."]}),"\n",(0,t.jsxs)(n.li,{children:["Run the flow by clicking ",(0,t.jsx)(n.strong,{children:"Play"})," on the ",(0,t.jsx)(n.em,{children:"Parse Data"})," component. Make sure that the specified template is ",(0,t.jsx)(n.code,{children:"{text}"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["To generate subtitles, click ",(0,t.jsx)(n.strong,{children:"Play"})," on the ",(0,t.jsx)(n.em,{children:"Get Subtitles"})," component."]}),"\n",(0,t.jsxs)(n.li,{children:["To apply an LLM to your audio file, click ",(0,t.jsx)(n.strong,{children:"Play"})," on the ",(0,t.jsx)(n.em,{children:"LeMUR"})," component. Note that you need an upgraded AssemblyAI account to use LeMUR."]}),"\n",(0,t.jsxs)(n.li,{children:["To list all transcripts, click ",(0,t.jsx)(n.strong,{children:"Play"})," on the ",(0,t.jsx)(n.em,{children:"List Transcript"})," component."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,t.jsx)(n.p,{children:"The flow can be customized by:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Modifying the parameters in the ",(0,t.jsx)(n.em,{children:"Start Transcript"})," component."]}),"\n",(0,t.jsxs)(n.li,{children:["Modifying the subtitle format in the ",(0,t.jsx)(n.em,{children:"Get Subtitles"})," component."]}),"\n",(0,t.jsxs)(n.li,{children:["Modifying the LLM prompt for input of the ",(0,t.jsx)(n.em,{children:"LeMUR"})," component."]}),"\n",(0,t.jsxs)(n.li,{children:["Modifying the LLM parameters (e.g., temperature) in the ",(0,t.jsx)(n.em,{children:"LeMUR"})," component."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"If you encounter issues:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure the API key is correctly set in all components that require the key."}),"\n",(0,t.jsx)(n.li,{children:"To use LeMUR, you need to upgrade your AssemblyAI account, since this is not included in the free account."}),"\n",(0,t.jsx)(n.li,{children:"Verify that all components are properly connected in the flow."}),"\n",(0,t.jsx)(n.li,{children:"Review the Langflow logs for any error messages."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more advanced usage, refer to the ",(0,t.jsx)(n.a,{href:"https://www.assemblyai.com/docs/",children:"AssemblyAI API documentation"}),". If you need more help, you can reach out to the ",(0,t.jsx)(n.a,{href:"https://www.assemblyai.com/contact/support",children:"AssemblyAI support"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28618:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/AssemblyAI_Flow-368be24ae9542f0b8b5253cc9d97b42f.json"},56453:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/assemblyai-components-b88c7c97e04114bf658898f7fc633e23.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);