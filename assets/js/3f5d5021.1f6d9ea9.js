"use strict";(self.webpackChunkendless_forest=self.webpackChunkendless_forest||[]).push([[655],{2505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>S,frontMatter:()=>f,metadata:()=>g,toc:()=>E});var r=a(7462),o=a(7294),l=a(3905),n=a(5142),s=a(967),i=a(5150),c=a(412);const d=(e,t)=>{let a,r="\\polygon(";for(let o=0;o<e.length;o++)a=e[o],o<e.length-1?r+=`(${a.x}, ${a.y}),`:r+=`(${a.x}, ${a.y}))`;return{id:"movable-star",latex:`${r}`,color:`${t}`}};if(c.Z.canUseDOM)var m=a(8723);const u=e=>{let t=e.split("),")[1].replace("(","").replace(" ","").split(",");return`(${t[0]}, ${t[1]})`},p=(e,t)=>{t.forEach((t=>{e.setExpression(t)})),u(t[0].latex),e.setExpression({id:"star-label",latex:u(t[0].latex),label:"I'm a star!",showLabel:!0})},x=function(e,t,a,r){void 0===a&&(a=null),void 0===r&&(r=null);const o=["#000000","#fa7e19","#6042a6","#388c46","#2d70b3","#c74440"],l=o[(n=0,s=o.length,n=Math.ceil(n),s=Math.floor(s),Math.floor(Math.random()*(s-n)+n))];var n,s;a&&a(r);const i=[d(t,l||r)];p(e,i)},v=(e,t,a,r,o,l,n)=>{const s=function(e,t,a,r){void 0===r&&(r=1);const o=e.map((e=>{const t={...e};return"up"===a?t.y=t.y+r:"down"===a?t.y=t.y-r:t.x="left"===a?t.x-r:t.x+r,t}));return t(o),o}(a,o,e,t);x(r,s,l,n)},y=(e,t,a,r,o,l,n,s)=>{r?(o(!1),clearInterval(t)):(o(!0),((e,t,a,r,o)=>{t(setInterval((()=>a(e,r,o)),500))})(l,a,n,s,e))},b=()=>{const[e,t]=(0,o.useState)(null),[a,r]=(0,o.useState)(null),[l,c]=(0,o.useState)(1),[u,b]=(0,o.useState)("#fa7e19"),[f,h]=(0,o.useState)(!1),[g,k]=(0,o.useState)(null);return(0,o.useEffect)((()=>{if(window){const e=[{x:-3,y:5},{x:0,y:0},{x:1,y:5},{x:2,y:0},{x:5,y:4},{x:2,y:-2},{x:3,y:-5},{x:1,y:-3},{x:-2,y:-6},{x:0,y:-2},{x:-5,y:1},{x:-1,y:-1}],a=[d(e,u)],o=(()=>{const e=document.getElementById("graph");return e.style.width="1200px",e.style.height="800px",e.style.margin="25px",m.GraphingCalculator(e,{expressions:!1,settingsMenu:!1})})();t(o),r(e),p(o,a)}}),[]),o.createElement("div",null,o.createElement(n.Z,{style:{margin:"20px"},as:"h2",color:"violet",tag:!0},"Use the keys to control the star's movement."),o.createElement(s.Z,{icon:!0,color:"teal",onClick:()=>v("left",l,a,e,r,b,u)},o.createElement(i.Z,{name:"arrow left"})),o.createElement(s.Z,{icon:!0,color:"teal",onClick:()=>v("right",l,a,e,r,b,u)},o.createElement(i.Z,{name:"arrow right"})),o.createElement(s.Z,{icon:!0,color:"teal",onClick:()=>v("up",l,a,e,r,b,u)},o.createElement(i.Z,{name:"arrow up"})),o.createElement(s.Z,{icon:!0,color:"teal",onClick:()=>v("down",l,a,e,r,b,u)},o.createElement(i.Z,{name:"arrow down"})),o.createElement(s.Z,{color:"blue",onClick:()=>y(b,g,k,f,h,e,x,a)},"Toggle Imprison Star"),o.createElement("div",{id:"graph"}))},f={sidebarId:"movable-star",sidebar_position:3},h="Movable Star",g={unversionedId:"movable-star",id:"movable-star",title:"Movable Star",description:"",source:"@site/docs/movable-star.mdx",sourceDirName:".",slug:"/movable-star",permalink:"/endless-forest/docs/movable-star",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebarId:"movable-star",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Circle Kingdom",permalink:"/endless-forest/docs/circle-kingdom"},next:{title:"Rotating Shape",permalink:"/endless-forest/docs/rotating-shape"}},k={},E=[],w={toc:E},M="wrapper";function S(e){let{components:t,...a}=e;return(0,l.kt)(M,(0,r.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"movable-star"},"Movable Star"),(0,l.kt)(b,{mdxType:"MovableStar"}))}S.isMDXComponent=!0}}]);