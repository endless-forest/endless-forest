"use strict";(self.webpackChunkendless_forest=self.webpackChunkendless_forest||[]).push([[872],{4521:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var r=s(7462),o=s(7294),a=s(3905),l=s(416),n=s(967);const i=s(7218).default,c=()=>{const[e,t]=(0,o.useState)({resultsDisplayed:!1,query:"",src:""});return o.createElement("main",null,o.createElement(l.Z,{value:e.query,onChange:s=>{const r=s.target.value;t({...e,query:r})},style:{border:"5px solid white"}}),o.createElement(n.Z,{basic:!0,color:"teal",onClick:()=>(s=>{const r=`https://api.wolframalpha.com/v1/simple?appid=WU5ELG-E63YVEXY3U&i=${s}`;i.get(r).then((function(s){console.log("wolfram alpha api:",s),t({...e,src:s})})).catch((function(e){console.log(e)})).finally((function(){}))})(e.query)},"Solve"),e.src.length>0&&o.createElement("img",{src:e.src}))},d={sidebarId:"math-solver",sidebar_position:6},u="Math Solver",p={unversionedId:"math-solver",id:"math-solver",title:"Math Solver",description:"",source:"@site/docs/math-solver.mdx",sourceDirName:".",slug:"/math-solver",permalink:"/endless-forest/docs/math-solver",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebarId:"math-solver",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Graph",permalink:"/endless-forest/docs/graph"},next:{title:"Playground",permalink:"/endless-forest/docs/playground"}},m={},h=[],v={toc:h},f="wrapper";function g(e){let{components:t,...s}=e;return(0,a.kt)(f,(0,r.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"math-solver"},"Math Solver"),(0,a.kt)(c,{mdxType:"MathSolver"}))}g.isMDXComponent=!0}}]);