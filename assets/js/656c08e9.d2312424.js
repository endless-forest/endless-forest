"use strict";(self.webpackChunkendless_forest=self.webpackChunkendless_forest||[]).push([[756],{6018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>v,frontMatter:()=>x,metadata:()=>k,toc:()=>w});var n=a(7462),o=a(7294),s=a(3905),r=a(412),l=a(967),i=a(9609),c=a(6973),p=a(416);if(r.Z.canUseDOM)var u=a(8723);const d=(e,t)=>{console.info("points",e);let a,n="\\polygon(";for(let o=0;o<e.length;o++)a=e[o],o<e.length-1?n+=`(${a.x}, ${a.y}),`:n+=`(${a.x}, ${a.y}))`;return{id:"movable-star",latex:`${n}`,color:`${t}`}},h=e=>{let t=e.split("),")[1].replace("(","").replace(" ","").split(",");return`(${t[0]}, ${t[1]})`},m=(e,t)=>{t.forEach((t=>{e.setExpression(t)})),h(t[0].latex),e.setExpression({id:"star-label",latex:h(t[0].latex),label:"Rotate Me!",showLabel:!0})},g=()=>{const[e,t]=(0,o.useState)(null),[a,n]=(0,o.useState)(null),[s,r]=(0,o.useState)("clockwise"),[h,g]=(0,o.useState)(10),[x,f]=(0,o.useState)("#388c46"),k=(e,t)=>{let{value:a}=t;return r(a)};return(0,o.useEffect)((()=>{if(window){const e=[{x:-2,y:2},{x:2,y:2},{x:2,y:-2},{x:-2,y:-2}],a=[d(e,x)],o=(()=>{const e=document.getElementById("graph");return e.style.width="1200px",e.style.height="800px",e.style.margin="25px",u.GraphingCalculator(e,{expressions:!1,settingsMenu:!1})})();t(o),n(e),m(o,a)}}),[]),o.createElement("div",null,o.createElement(l.Z,{basic:!0,color:"teal",style:{margin:"25px"},onClick:()=>{if(console.info("rotationIncrement",h),window){e.setBlank();const t=function(e,t,a){void 0===a&&(a=10);const n=a*(Math.PI/180);return e.map((e=>{const a=e.x*Math.cos(n),o=e.y*Math.sin(n),s=e.y*Math.cos(n),r=e.x*Math.sin(n);return{x:"clockwise"===t?a+o:a-o,y:"clockwise"===t?s-r:s+r}}))}(a,s,h);n(t);const o=[d(t,x)];m(e,o)}}},"Rotate The Shape"),o.createElement(i.Z,{style:{marginLeft:"25px"}},o.createElement(i.Z.Field,null,o.createElement("b",null,"Rotation Direction")),o.createElement(i.Z.Field,null,o.createElement(c.Z,{label:"Clockwise",name:"radioGroup",value:"clockwise",checked:"clockwise"===s,onChange:k})),o.createElement(i.Z.Field,null,o.createElement(c.Z,{label:"Counterclockwise",name:"radioGroup",value:"counterclockwise",checked:"counterclockwise"===s,onChange:k}))),o.createElement(p.Z,{style:{margin:"25px",width:"60px"},onChange:(e,t)=>{let{value:a}=t;return g(a)},action:{color:"teal",labelPosition:"left",icon:"sync alternate",content:"Rotation Increment (Degrees)"},actionPosition:"left",placeholder:"Degrees",defaultValue:"10"}),o.createElement("div",{id:"graph"}))},x={sidebarId:"rotating-shape",sidebar_position:4},f="Use Desmos To Create A Rotating Shape",k={unversionedId:"rotating-shape",id:"rotating-shape",title:"Use Desmos To Create A Rotating Shape",description:"Hey, I'm updating this page.",source:"@site/docs/rotating-shape.mdx",sourceDirName:".",slug:"/rotating-shape",permalink:"/endless-forest/docs/rotating-shape",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebarId:"rotating-shape",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Use Desmos To Create A Movable Star",permalink:"/endless-forest/docs/movable-star"},next:{title:"Student work",permalink:"/endless-forest/docs/student-work"}},y={},w=[],b={toc:w},E="wrapper";function v(e){let{components:t,...a}=e;return(0,s.kt)(E,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-desmos-to-create-a-rotating-shape"},"Use Desmos To Create A Rotating Shape"),(0,s.kt)("p",null,"Hey, I'm updating this page."),(0,s.kt)(g,{mdxType:"RotatingShape"}))}v.isMDXComponent=!0}}]);