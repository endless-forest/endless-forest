"use strict";(self.webpackChunkendless_forest=self.webpackChunkendless_forest||[]).push([[756],{6018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>v,frontMatter:()=>x,metadata:()=>k,toc:()=>b});var n=a(7462),o=a(7294),s=a(3905),l=a(412),r=a(967),i=a(9609),c=a(6973),p=a(416);if(l.Z.canUseDOM)var d=a(8723);const u=(e,t)=>{let a,n="\\polygon(";for(let o=0;o<e.length;o++)a=e[o],o<e.length-1?n+=`(${a.x}, ${a.y}),`:n+=`(${a.x}, ${a.y}))`;return{id:"movable-star",latex:`${n}`,color:`${t}`}},h=e=>{let t=e.split("),")[1].replace("(","").replace(" ","").split(",");return`(${t[0]}, ${t[1]})`},m=(e,t)=>{t.forEach((t=>{e.setExpression(t)})),h(t[0].latex),e.setExpression({id:"star-label",latex:h(t[0].latex),label:"Rotate Me!",showLabel:!0})},g=()=>{const[e,t]=(0,o.useState)(null),[a,n]=(0,o.useState)(null),[s,l]=(0,o.useState)("clockwise"),[h,g]=(0,o.useState)(10),[x,f]=(0,o.useState)("#388c46"),k=(e,t)=>{let{value:a}=t;return l(a)};return(0,o.useEffect)((()=>{if(window){const e=[{x:-2,y:2},{x:2,y:2},{x:2,y:-2},{x:-2,y:-2}],a=[u(e,x)],o=(()=>{const e=document.getElementById("graph");return e.style.width="1200px",e.style.height="800px",e.style.margin="25px",d.GraphingCalculator(e,{expressions:!1,settingsMenu:!1})})();t(o),n(e),m(o,a)}}),[]),o.createElement("div",null,o.createElement(r.Z,{basic:!0,color:"teal",style:{margin:"25px"},onClick:()=>{if(window){e.setBlank();const t=function(e,t,a){void 0===a&&(a=10);const n=a*(Math.PI/180);return e.map((e=>{const a=e.x*Math.cos(n),o=e.y*Math.sin(n),s=e.y*Math.cos(n),l=e.x*Math.sin(n);return{x:"clockwise"===t?a+o:a-o,y:"clockwise"===t?s-l:s+l}}))}(a,s,h);n(t);const o=[u(t,x)];m(e,o)}}},"Rotate The Shape"),o.createElement(i.Z,{style:{marginLeft:"25px"}},o.createElement(i.Z.Field,null,o.createElement("b",null,"Rotation Direction")),o.createElement(i.Z.Field,null,o.createElement(c.Z,{label:"Clockwise",name:"radioGroup",value:"clockwise",checked:"clockwise"===s,onChange:k})),o.createElement(i.Z.Field,null,o.createElement(c.Z,{label:"Counterclockwise",name:"radioGroup",value:"counterclockwise",checked:"counterclockwise"===s,onChange:k}))),o.createElement(p.Z,{style:{margin:"25px",width:"60px"},onChange:(e,t)=>{let{value:a}=t;return g(a)},action:{color:"teal",labelPosition:"left",icon:"sync alternate",content:"Rotation Increment (Degrees)"},actionPosition:"left",placeholder:"Degrees",defaultValue:"10"}),o.createElement("div",{id:"graph"}))},x={sidebarId:"rotating-shape",sidebar_position:4},f="Rotating Shape",k={unversionedId:"rotating-shape",id:"rotating-shape",title:"Rotating Shape",description:"",source:"@site/docs/rotating-shape.mdx",sourceDirName:".",slug:"/rotating-shape",permalink:"/endless-forest/docs/rotating-shape",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebarId:"rotating-shape",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Movable Star",permalink:"/endless-forest/docs/movable-star"},next:{title:"Graph",permalink:"/endless-forest/docs/graph"}},y={},b=[],w={toc:b},E="wrapper";function v(e){let{components:t,...a}=e;return(0,s.kt)(E,(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"rotating-shape"},"Rotating Shape"),(0,s.kt)(g,{mdxType:"RotatingShape"}))}v.isMDXComponent=!0}}]);