(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{244:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return y}));var n=a(234),r=a(1),i=a.n(r),o=a(219),c=a(237);var l=e=>Object(c.a)({underline:{position:"relative",width:"fit-content","&::after":{position:"absolute",content:'""',bottom:e=>e.bottom||-4,left:({centered:e,width:t})=>e?`calc(50% - ${(t||100)/2}px)`:0,right:"0",borderRadius:"3px",height:e=>e.height||6,width:e=>e.width||100,background:t=>t.color||e.palette.primary.main}}});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const g=Object(o.a)(l);var d=e=>{let{width:t,height:a,color:r,bottom:o,children:c,className:l,centered:d}=e,u=m(e,["width","height","color","bottom","children","className","centered"]);const{underline:p}=g({width:t,height:a,bottom:o,color:r,centered:d});return i.a.createElement(n.a,s({className:`${p} ${l}`},u),c)},u=(a(37),a(254)),p=a.n(u),b=a(45);var M=e=>Object(c.a)({root:{"& .slick-prev:before":{color:b.a.active,content:"url(data:image/svg+xml;base64,ICA8c3ZnIHdpZHRoPSIxNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE1IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTE1IDIuODNMMTIuMTM3NiAwTDAgMTJMMTIuMTM3NiAyNEwxNSAyMS4xN0w1LjcyNDg4IDEyTDE1IDIuODNaIiBmaWxsPSIjRkZDODAwIiAvPgogIDwvc3ZnPg==)"},"& .slick-next:before":{color:b.a.active,content:"url(data:image/svg+xml;base64,ICA8c3ZnIHdpZHRoPSIxNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE1IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTIuNDc0MDZlLTA3IDIxLjE3TDIuODYyNDQgMjRMMTUgMTJMMi44NjI0NCAtMS4wNjExZS0wNkwxLjg1MDc0ZS0wNiAyLjgzTDkuMjc1MTIgMTJMMi40NzQwNmUtMDcgMjEuMTdaIiBmaWxsPSIjRkZDODAwIiAvPgogIDwvc3ZnPg==)"}},dots:{margin:e.spacing(0,1),height:7,width:100,[e.breakpoints.down("sm")]:{width:40}},dotsContainer:{textAlign:"right",display:"flex",justifyContent:"flex-end",cursor:"pointer","& li":{listStyleType:"none"}}});function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){C(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const N=Object(o.a)(M);var y=({children:e})=>{const{root:t,dotsContainer:a,dots:o}=N(),[c,l]=Object(r.useState)(0),s=({className:e,style:t,onClick:a})=>i.a.createElement(n.a,{className:e,style:E(E({},t),{},{color:b.a.active}),onClick:a}),m=({className:e,style:t,onClick:a})=>i.a.createElement(n.a,{className:e,style:E(E({},t),{},{color:b.a.active}),onClick:a}),g={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,prevArrow:i.a.createElement(s,null),nextArrow:i.a.createElement(m,null),beforeChange:(e,t)=>l(t),appendDots:e=>i.a.createElement(n.a,{className:a},e),customPaging:e=>i.a.createElement(n.a,{className:o,bgcolor:c===e?b.a.active:b.a.black1F})};return i.a.createElement(n.a,{className:t},i.a.createElement(p.a,h({dotsClass:a},g),e))}},245:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));const n="https://us-central1-getmoving-5a566.cloudfunctions.net/app",r={name:"Vikár András",email:"vikarandras@gmail.com",phone:"(+36) 30 271 7990",address:"1056 Budapest, Váci utca 78-80"}},251:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=()=>r.a.createElement("svg",{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M6.0054e-07 10.5852L1.43122 12.0002L7.5 6.00018L1.43122 0.000183529L1.40221e-06 1.41518L4.63756 6.00018L6.0054e-07 10.5852Z",fill:"#0E0F11"}),r.a.createElement("path",{d:"M5.5 10.5852L6.93122 12.0002L13 6.00018L6.93122 0.000183529L5.5 1.41518L10.1376 6.00018L5.5 10.5852Z",fill:"#0E0F11"}))},253:function(e,t,a){"use strict";t.a=a.p+"5c07f082d3506bd703ec6c24b8dac831.png"},363:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(1),i=a.n(r),o=a(240),c=a(234),l=a(228),s=a(227),m=a(223),g=a(219),d=a(10),u=a(238),p=a(282),b=a.n(p),M=a(251),h=a(237),j=a(253);var E=e=>Object(h.a)({title:{color:e.palette.secondary.main,textAlign:"center",fontWeight:"bold",fontSize:96,textTransform:"uppercase",zIndex:400,[e.breakpoints.down("sm")]:{fontSize:60}},description:{color:e.palette.secondary.main,maxWidth:610,fontSize:20,margin:"auto",marginBottom:30,textAlign:"center",zIndex:400,padding:e.spacing(2)},hr:{backgroundColor:e.palette.secondary.main,width:100,height:6,margin:"auto",borderRadius:3,marginBottom:e.spacing(5),zIndex:400},imageContainer:{backgroundImage:`url(${j.a})`,backgroundPosition:"center",backgroundSize:"cover",height:"100vh",width:"100%"},dividerContainer:{height:"100%",overflow:"hidden"},zIndex400:{zIndex:400,textTransform:"uppercase"},leftMargin:{marginLeft:".7em"},welcomeTextContainer:{top:"33vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"98vw"},darkerOverlay:{background:"black",opacity:"0.4",height:"400%",transform:"rotate(30deg)",marginTop:"-71.5%",marginLeft:"-20.5%"},ligtherOverlay:{background:"black",opacity:"0.2",height:"400%",transform:"rotate(30deg)",marginTop:"-21.5%",marginLeft:"-20.5%"}});const C=Object(g.a)(E);var N=()=>{const{darkerOverlay:e,ligtherOverlay:t,dividerContainer:a,zIndex400:g,title:p,description:h,leftMargin:j,hr:E,imageContainer:N,welcomeTextContainer:y}=C(),w=Object(d.g)(),{t:O}=Object(u.a)(),{setVariant:f}=Object(r.useContext)(n.a);return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{position:"absolute"},i.a.createElement(c.a,{position:"relative",className:y},i.a.createElement(m.a,{className:p},O("landing.getmoving")),i.a.createElement(s.a,{className:E}),i.a.createElement(m.a,{className:h},O("landing.description")),i.a.createElement(l.a,{onClick:()=>w.push("auth/register"),color:"primary",variant:"contained",className:g},O("landing.register"),i.a.createElement("span",{className:j},i.a.createElement(M.a,null))))),i.a.createElement(b.a,{partialVisibility:!0,onChange:e=>{f(e?"transparent":"black")}},i.a.createElement(c.a,{className:N},i.a.createElement(o.a,{container:!0,className:a},i.a.createElement(o.a,{item:!0,xs:8,md:8,lg:8,className:e}),i.a.createElement(o.a,{item:!0,xs:5,md:5,lg:5,className:t}),i.a.createElement(o.a,{item:!0,xs:1,md:1,lg:1})))))},y=a(222),w=a(41),O=a(244),f=(a(37),a(354)),D=a(353),I=a(368),k=a(364),x=a(255),v=a.n(x),L=a(245);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){z(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const S={name:"",email:"",message:"",accepted:!1},P=(e,t)=>A(A({},e),t);var F=a.p+"444e40fbcdf19cf67d9a2893d581dbdc.png",Q=a(45);var Z=e=>Object(h.a)({imageContainer:{backgroundImage:`url(${F})`,backgroundPosition:"center",backgroundSize:"cover",minHeight:490,width:"100%",paddingLeft:100,paddingRight:100,boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"center",[e.breakpoints.down("sm")]:{padding:e.spacing(4,2)}},title:{fontSize:50,[e.breakpoints.down("sm")]:{fontSize:30},fontWeight:900,color:Q.a.secondary},form:{color:Q.a.secondary,display:"unset","& > div":{marginTop:e.spacing(2),marginBottom:e.spacing(2)}},inputProps:{color:Q.a.secondary,"&:before":{borderBottomColor:`${Q.a.secondary} !important`}},inputLabelProps:{color:Q.a.secondary},checkbox:{color:Q.a.secondary},table:{marginTop:50,"& td":{color:Q.a.secondary,border:"none",padding:e.spacing(1),"&:nth-child(2)":{color:Q.a.secondary,opacity:.7}}}});const H=Object(g.a)(Z);var U=()=>{const{t:e}=Object(u.a)(),{form:t,inputProps:a,inputLabelProps:n,checkbox:o}=H(),[s,g]=Object(r.useReducer)(P,S),[d,p]=Object(r.useState)(!1),[b,M]=Object(r.useState)(!1);return b?i.a.createElement(m.a,{color:"secondary"},e("landing.contact.emailSent")):i.a.createElement("form",{className:t,onSubmit:async e=>{e.preventDefault();try{p(!0),await v.a.post(`${L.a}/api/send-contact-email`,s),M(!0),g(S)}catch(e){alert(e.message)}finally{p(!1)}}},i.a.createElement(k.a,{required:!0,fullWidth:!0,InputLabelProps:{className:n,required:!1},InputProps:{className:a},value:s.name,onChange:e=>g({name:e.target.value}),name:"name",label:e("landing.contact.name")}),i.a.createElement(k.a,{required:!0,fullWidth:!0,InputLabelProps:{className:n,required:!1},InputProps:{className:a},value:s.email,onChange:e=>g({email:e.target.value}),name:"email",type:"email",label:e("landing.contact.email")}),i.a.createElement(k.a,{required:!0,fullWidth:!0,InputLabelProps:{className:n,required:!1},InputProps:{className:a},value:s.message,onChange:e=>g({message:e.target.value}),name:"message",label:e("landing.contact.message")}),i.a.createElement(D.a,{label:e("landing.contact.checkbox"),control:i.a.createElement(I.a,{required:!0,classes:{root:o},color:"secondary",checked:s.accepted,onChange:e=>g({accepted:e.target.checked})})}),i.a.createElement(c.a,{textAlign:"right",mt:5},i.a.createElement(l.a,{disabled:d,endIcon:d&&i.a.createElement(f.a,{size:16}),type:"submit",variant:"contained",color:"primary"},e("landing.contact.send"))))},Y=a(355),B=a(356),V=a(357),R=a(358);const W=Object(g.a)(Z);var G=()=>{const{t:e}=Object(u.a)(),{table:t}=W();return i.a.createElement(Y.a,{className:t},i.a.createElement(B.a,null,i.a.createElement(V.a,null,i.a.createElement(R.a,null,e("common.email")),i.a.createElement(R.a,null,L.b.email)),i.a.createElement(V.a,null,i.a.createElement(R.a,null,e("landing.contact.phone")),i.a.createElement(R.a,null,L.b.phone)),i.a.createElement(V.a,null,i.a.createElement(R.a,null,e("landing.contact.address")),i.a.createElement(R.a,null,L.b.address))))};const J=Object(g.a)(Z);var $=()=>{const{imageContainer:e,title:t}=J(),{t:a}=Object(u.a)(),n=Object(w.a)(),r=Object(y.a)(n.breakpoints.down("sm"));return i.a.createElement(c.a,{className:e},i.a.createElement(o.a,{container:!0,spacing:r?0:10},i.a.createElement(o.a,{item:!0,xs:12,sm:6},i.a.createElement(O.b,{color:"white",bottom:-16},i.a.createElement(m.a,{className:t,variant:"h2"},a("landing.contact.title"))),i.a.createElement(G,null)),i.a.createElement(o.a,{item:!0,xs:12,sm:6},i.a.createElement(U,null))))};var q=[{title:"landing.offers.videos.title",description:"landing.offers.videos.description",Logo:()=>i.a.createElement("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M29.1667 9.05322H5.8217C5.17736 9.05322 4.65503 9.57556 4.65503 10.2199V24.7916C4.65503 25.4359 5.17736 25.9582 5.8217 25.9582H29.1667C29.811 25.9582 30.3334 25.4359 30.3334 24.7916V10.2199C30.3334 9.57556 29.811 9.05322 29.1667 9.05322Z",stroke:"#FFC800",strokeMiterlimit:"10"}),i.a.createElement("path",{d:"M17.4999 22.5167C20.2706 22.5167 22.5166 20.2707 22.5166 17.5001C22.5166 14.7294 20.2706 12.4834 17.4999 12.4834C14.7293 12.4834 12.4833 14.7294 12.4833 17.5001C12.4833 20.2707 14.7293 22.5167 17.4999 22.5167Z",stroke:"#FFC800",strokeMiterlimit:"10"}),i.a.createElement("path",{d:"M16.8234 15.5398L19.2034 17.7215L16.8234 19.9031V15.5398Z",stroke:"#FFC800",strokeLinecap:"round",strokeLinejoin:"round"})),path:"/about/videos"},{title:"landing.offers.recipes.title",description:"landing.offers.recipes.description",Logo:()=>i.a.createElement("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M29.9717 21.7118V21.8284C29.9717 25.8534 27.1017 29.1085 23.5783 29.1085C22.7525 29.109 21.9364 28.9298 21.1867 28.5835L20.79 28.3851C19.9499 28.8594 19.0014 29.1085 18.0367 29.1085C14.5367 29.1085 11.6433 25.8534 11.6433 21.8284C11.6179 20.3231 12.0227 18.8417 12.81 17.5584C13.5397 16.3908 14.6168 15.481 15.89 14.9568C16.1383 14.8508 16.3961 14.7687 16.66 14.7118C17.0992 14.6044 17.5496 14.5495 18.0017 14.5484C18.6551 14.5519 19.3027 14.6704 19.915 14.8984C20.12 14.9576 20.3162 15.0439 20.4983 15.1551C20.5913 15.1812 20.6784 15.2247 20.755 15.2834C20.8948 15.2008 21.0435 15.1342 21.1983 15.0851C21.9252 14.7313 22.7232 14.5477 23.5317 14.5484C23.7143 14.5379 23.8974 14.5379 24.08 14.5484C25.3884 14.6733 26.6189 15.227 27.58 16.1234C27.2237 16.4413 26.9426 16.8344 26.757 17.2743C26.5713 17.7141 26.4858 18.1898 26.5067 18.6668C26.4586 19.4535 26.7236 20.2274 27.2437 20.8196C27.7638 21.4119 28.497 21.7745 29.2833 21.8284C29.518 21.8316 29.7512 21.792 29.9717 21.7118Z",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M18.2933 10.675C19.03 10.6841 19.734 10.9808 20.2549 11.5018C20.7759 12.0227 21.0726 12.7267 21.0817 13.4634C21.0825 14.0477 20.8942 14.6166 20.545 15.085",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M21.0817 12.67C21.337 12.3505 21.6623 12.0939 22.0324 11.92C22.4026 11.746 22.8077 11.6594 23.2167 11.6667",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M29.9483 8.55182C28.5978 7.94779 27.0697 7.87284 25.6666 8.34182C24.3899 9.07798 23.4332 10.2634 22.9833 11.6668C24.3413 12.2735 25.8776 12.3484 27.2883 11.8768C28.5555 11.1354 29.5031 9.95087 29.9483 8.55182Z",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M14.7001 21.1516C14.676 20.3623 14.8917 19.5842 15.3186 18.9198C15.7456 18.2555 16.3637 17.736 17.0917 17.4299",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M9.52002 8.92505H13.7667",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M6.83667 8.92505H7.61834",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M6.83667 11.7249H7.61834",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M6.83667 14.5366H7.61834",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M9.52002 11.8066H14.8984",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M9.52002 14.5366H13.7667",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M16.695 7.05827V14.7116C16.4311 14.7685 16.1733 14.8506 15.925 14.9566C14.6475 15.4788 13.5661 16.3888 12.8333 17.5583H6.19499C5.88557 17.5583 5.58882 17.4353 5.37003 17.2166C5.15124 16.9978 5.02832 16.701 5.02832 16.3916V7.05827C5.02832 6.74885 5.15124 6.4521 5.37003 6.23331C5.58882 6.01452 5.88557 5.8916 6.19499 5.8916H15.5283C15.8377 5.8916 16.1345 6.01452 16.3533 6.23331C16.5721 6.4521 16.695 6.74885 16.695 7.05827V7.05827Z",stroke:"#FFC800",strokeLinejoin:"bevel"})),path:"/about/recipes"},{title:"landing.offers.generator.title",description:"landing.offers.generator.description",Logo:()=>i.a.createElement("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M22.8316 22.1667C22.8428 23.0575 22.5301 23.9221 21.9516 24.5996C21.373 25.2771 20.5681 25.7213 19.6865 25.8497C18.8049 25.9781 17.9067 25.7819 17.159 25.2975C16.4113 24.8132 15.8649 24.0738 15.6216 23.2167H11.3166C11.0656 24.0668 10.5167 24.798 9.77044 25.2763C9.02422 25.7547 8.13064 25.9481 7.25339 25.8213C6.37614 25.6945 5.57395 25.2558 4.99377 24.5857C4.41358 23.9156 4.09424 23.0589 4.09424 22.1726C4.09424 21.2862 4.41358 20.4295 4.99377 19.7594C5.57395 19.0893 6.37614 18.6507 7.25339 18.5238C8.13064 18.397 9.02422 18.5905 9.77044 19.0688C10.5167 19.5472 11.0656 20.2783 11.3166 21.1284H15.6216C15.8647 20.2725 16.4101 19.5338 17.1566 19.0495C17.9031 18.5652 18.7999 18.3682 19.6806 18.4951C20.5613 18.6219 21.3661 19.064 21.9456 19.7392C22.5251 20.4144 22.8399 21.277 22.8316 22.1667Z",stroke:"#FFC800",strokeMiterlimit:"10"}),i.a.createElement("path",{d:"M30.8933 12.8335C30.9016 13.7232 30.5868 14.5858 30.0073 15.261C29.4278 15.9363 28.623 16.3783 27.7423 16.5052C26.8616 16.632 25.9648 16.435 25.2183 15.9507C24.4718 15.4664 23.9264 14.7278 23.6833 13.8718H19.39C19.1403 14.7196 18.5934 15.449 17.8496 15.9263C17.1058 16.4037 16.2149 16.597 15.3402 16.4709C14.4654 16.3447 13.6654 15.9076 13.0868 15.2395C12.5082 14.5715 12.1897 13.7173 12.1897 12.8335C12.1897 11.9497 12.5082 11.0955 13.0868 10.4275C13.6654 9.75941 14.4654 9.32225 15.3402 9.19611C16.2149 9.06996 17.1058 9.26328 17.8496 9.74062C18.5934 10.218 19.1403 10.9474 19.39 11.7951H23.6833C23.9264 10.9392 24.4718 10.2005 25.2183 9.71626C25.9648 9.23198 26.8616 9.03497 27.7423 9.1618C28.623 9.28864 29.4278 9.7307 30.0073 10.4059C30.5868 11.0812 30.9016 11.9437 30.8933 12.8335V12.8335Z",stroke:"#FFC800",strokeMiterlimit:"10"})),path:"/about/workout-generator"},{title:"landing.offers.blog.title",description:"landing.offers.blog.description",Logo:()=>i.a.createElement("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M25.34 28H9.65997C9.53311 28 9.41145 27.9496 9.32174 27.8599C9.23204 27.7702 9.18164 27.6485 9.18164 27.5217V10.1733L12.3666 7H25.34C25.4028 7 25.465 7.01237 25.523 7.03641C25.5811 7.06045 25.6338 7.09568 25.6782 7.1401C25.7226 7.18452 25.7579 7.23725 25.7819 7.29528C25.8059 7.35332 25.8183 7.41552 25.8183 7.47833V27.5333C25.8153 27.6582 25.7635 27.7769 25.6741 27.864C25.5848 27.9512 25.4648 28 25.34 28V28Z",stroke:"#FFC800",strokeMiterlimit:"10"}),i.a.createElement("path",{d:"M11.4683 15.4001H17.6166",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M11.4683 17.8616H22.0733",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M11.4683 20.1833H17.6166",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),i.a.createElement("path",{d:"M12.3666 7V9.695C12.3666 9.82186 12.3162 9.94353 12.2265 10.0332C12.1368 10.1229 12.0152 10.1733 11.8883 10.1733H9.18164L12.3666 7Z",stroke:"#FFC800",strokeLinejoin:"bevel"})),path:"/about/blog"}],K=a(359),_=a(362),X=a(361),ee=a(360),te=a(371),ae=a(17);var ne=e=>Object(h.a)({avatar:{width:50,height:50,backgroundColor:"#333"},buttonStyle:{fontSize:"18px",fontWeight:500},container:{backgroundColor:"unset",boxShadow:"unset"},content:{paddingTop:"unset",minHeight:"100px"},descriptionStyle:{fontSize:".9em",lineHeight:"20px"},falseButtonStyle:{color:"black",textDecoration:"unset",paddingLeft:e.spacing(1),fontSize:"1em"},noBottomPadding:{paddingBottom:"unset"},titleStyle:{fontSize:"20px"}});const re=Object(g.a)(ne);var ie=({title:e,description:t,Logo:a,path:n})=>{const{t:r}=Object(u.a)(),{avatar:o,buttonStyle:c,container:l,content:s,descriptionStyle:g,falseButtonStyle:d,noBottomPadding:p,titleStyle:b}=re();return i.a.createElement(K.a,{className:l},i.a.createElement(ee.a,{avatar:i.a.createElement(te.a,{"aria-label":"recipe",className:o},i.a.createElement(a,null)),title:i.a.createElement(m.a,{variant:"h6",className:b},r(e))}),i.a.createElement(X.a,{className:`${p} ${s}`},i.a.createElement(m.a,{className:g},r(t))),i.a.createElement(_.a,null,i.a.createElement(ae.b,{to:n,className:d},i.a.createElement(m.a,{className:c},"Tovább ",i.a.createElement(M.a,null)))))};var oe=e=>Object(h.a)({boxContainer:{backgroundColor:Q.a.primary,minHeight:360,padding:e.spacing(3)},gridContainer:{padding:e.spacing(2,7),[e.breakpoints.down("sm")]:{padding:e.spacing(0)}},underlined:{marginBottom:e.spacing(3),textTransform:"uppercase"}});const ce=Object(g.a)(oe);var le=()=>{const{boxContainer:e,gridContainer:t,underlined:a}=ce(),{t:n}=Object(u.a)();return i.a.createElement(c.a,{className:e},i.a.createElement(O.b,{color:"black",margin:"auto",centered:!0},i.a.createElement(m.a,{className:a,variant:"subtitle1"},n("landing.offers.title"))),i.a.createElement(o.a,{container:!0,className:t},q.map(e=>i.a.createElement(o.a,{item:!0,xs:12,sm:6,lg:3,key:e.path},i.a.createElement(ie,e)))))},se=a(271),me=a.n(se);var ge="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA5OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ij4KPHBhdGggZD0iTTQyLjQ4OCA0OS40NTQ1QzQyLjQ4OCA1NC43MTI2IDQwLjQ5NTMgNTkuMTE4MSAzNi41MDk4IDYyLjY3MDhDMzIuNTI0MyA2Ni4yMjM2IDI3LjU0MjUgNjggMjEuNTY0MyA2OEMxNS43Mjg0IDY4IDEwLjY3NTQgNjYuMDEwNSA2LjQwNTIzIDYyLjAzMTNDMi4xMzUwOCA1Ny45MTAxIDAgNTIuMDEyNSAwIDQ0LjMzODZDMCAzOS43OTEgMC45MjUyIDM1LjI0MzUgMi43NzU2IDMwLjY5NTlDNC42MjYgMjYuMTQ4NCA2Ljk3NDU4IDIxLjg4NTEgOS44MjEzNSAxNy45MDZDMTIuODEwNSAxMy45MjY5IDE2LjAxMzEgMTAuMzc0MSAxOS40MjkyIDcuMjQ3NjVDMjIuODQ1MyA0LjEyMTIxIDI2LjExOTEgMS43MDUzMyAyOS4yNTA1IDBMMzkuOTI1OSAxMC40NDUxQzM4LjIxNzkgMTEuMTU1NyAzNi40Mzg2IDEyLjIyMTUgMzQuNTg4MiAxMy42NDI2QzMyLjczNzggMTUuMDYzNyAzMS4wMjk4IDE2LjY5OCAyOS40NjQxIDE4LjU0NTVDMjcuODk4MyAyMC4yNTA4IDI2LjYxNzMgMjIuMjQwMyAyNS42MjA5IDI0LjUxNDFDMjQuNjI0NSAyNi42NDU4IDI0LjEyNjQgMjguNzc3NCAyNC4xMjY0IDMwLjkwOTFDMjkuMzkyOSAzMS42MTk2IDMzLjczNDIgMzMuNjA5MiAzNy4xNTAzIDM2Ljg3NzdDNDAuNzA4OCA0MC4wMDQyIDQyLjQ4OCA0NC4xOTY0IDQyLjQ4OCA0OS40NTQ1Wk05OCA0OS40NTQ1Qzk4IDU0LjcxMjYgOTYuMDA3MyA1OS4xMTgxIDkyLjAyMTggNjIuNjcwOEM4OC4wMzYzIDY2LjIyMzYgODMuMDU0NSA2OCA3Ny4wNzYyIDY4QzcxLjI0MDQgNjggNjYuMTg3NCA2Ni4wMTA1IDYxLjkxNzIgNjIuMDMxM0M1Ny42NDcxIDU3LjkxMDEgNTUuNTEyIDUyLjAxMjUgNTUuNTEyIDQ0LjMzODZDNTUuNTEyIDM5Ljc5MSA1Ni40MzcyIDM1LjI0MzUgNTguMjg3NiAzMC42OTU5QzYwLjEzOCAyNi4xNDg0IDYyLjQ4NjYgMjEuODg1MSA2NS4zMzMzIDE3LjkwNkM2OC4zMjI0IDEzLjkyNjkgNzEuNTI1IDEwLjM3NDEgNzQuOTQxMiA3LjI0NzY1Qzc4LjM1NzMgNC4xMjEyMSA4MS42MzExIDEuNzA1MzMgODQuNzYyNSAwTDk1LjQzNzkgMTAuNDQ1MUM5My43Mjk4IDExLjE1NTcgOTEuOTUwNiAxMi4yMjE1IDkwLjEwMDIgMTMuNjQyNkM4OC4yNDk4IDE1LjA2MzcgODYuNTQxOCAxNi42OTggODQuOTc2IDE4LjU0NTVDODMuNDEwMyAyMC4yNTA4IDgyLjEyOTMgMjIuMjQwMyA4MS4xMzI5IDI0LjUxNDFDODAuMTM2NSAyNi42NDU4IDc5LjYzODMgMjguNzc3NCA3OS42MzgzIDMwLjkwOTFDODQuOTA0OSAzMS42MTk2IDg5LjI0NjIgMzMuNjA5MiA5Mi42NjIzIDM2Ljg3NzdDOTYuMjIwOCA0MC4wMDQyIDk4IDQ0LjE5NjQgOTggNDkuNDU0NVoiIGZpbGw9IiNGRkM4MDAiLz4KPC9nPgo8L3N2Zz4K";var de=e=>Object(h.a)({root:{backgroundColor:Q.a.greyF6,display:"flex",padding:e.spacing(8,12),[e.breakpoints.down("sm")]:{flexDirection:"column",padding:e.spacing(4,2)}},videoContainer:{width:"60%",height:400,backgroundColor:"white",textAlign:"center",[e.breakpoints.down("sm")]:{width:"100%"}},img:{marginTop:e.spacing(6),[e.breakpoints.down("sm")]:{marginTop:e.spacing(3),height:50}},rotatedImg:{transform:"rotate(180deg)",float:"right",[e.breakpoints.down("sm")]:{height:50}},underlined:{textTransform:"uppercase",[e.breakpoints.down("sm")]:{marginBottom:e.spacing(4)}},introduction:{fontSize:20,fontStyle:"italic"},name:{fontSize:16,marginLeft:e.spacing(3),marginTop:e.spacing(4),[e.breakpoints.down("sm")]:{marginLeft:0}}});const ue=Object(g.a)(de);var pe=()=>{const{name:e,underlined:t,rotatedImg:a,introduction:n,root:r,videoContainer:o,img:l}=ue(),{t:s}=Object(u.a)(),g=Object(w.a)(),d=Object(y.a)(g.breakpoints.down("sm")),p=i.a.createElement(O.b,{className:t},i.a.createElement(m.a,{variant:"subtitle1"},s("landing.introduction.title")));return i.a.createElement(c.a,{className:r},d&&p,i.a.createElement(c.a,{className:o},i.a.createElement(me.a,{url:"https://www.youtube.com/watch?v=qRS6U3glL2U",width:"100%",height:"100%"})),i.a.createElement(c.a,{width:d?"100%":"40%"},i.a.createElement(c.a,{ml:3},!d&&p,i.a.createElement("img",{className:l,alt:"quote",src:ge}),i.a.createElement(c.a,{my:2,mx:d?0:3},i.a.createElement(m.a,{className:n},s("landing.introduction.description"))),i.a.createElement("img",{className:a,alt:"quote",src:ge}),i.a.createElement(m.a,{className:e},L.b.name))))};var be=e=>Object(h.a)({container:{[e.breakpoints.only("xs")]:{padding:e.spacing(4,2)},padding:e.spacing(8,2),backgroundColor:Q.a.greyF6,textAlign:"center"},title:{textTransform:"uppercase",[e.breakpoints.only("xs")]:{fontSize:20}},details:{margin:"30px auto",maxWidth:800}});const Me=Object(g.a)(be);var he=()=>{const{container:e,title:t,details:a}=Me(),{t:n}=Object(u.a)(),r=Object(d.g)();return i.a.createElement(c.a,{className:e},i.a.createElement(O.b,{margin:"auto",centered:!0},i.a.createElement(m.a,{className:t,variant:"subtitle1"},n("landing.trial.title"))),i.a.createElement(m.a,{className:a},n("landing.trial.details")),i.a.createElement(l.a,{color:"primary",variant:"contained",onClick:()=>r.push("/auth/register")},n("landing.trial.button")))};var je=e=>{const[t,a]=Object(r.useState)(),[n,i]=Object(r.useState)(!1),[o,c]=Object(r.useState)("");return Object(r.useEffect)(()=>{let t=!1;return(async()=>{i(!0);try{c("");const n=await v()(e);t||a(n.data)}catch(e){c(e.message)}i(!1)})(),()=>{t=!0}},[e]),{data:t,loading:n,error:o}};var Ee=e=>Object(h.a)({box:{padding:e.spacing(3),margin:e.spacing(1),backgroundColor:"white",maxWidth:360,textAlign:"center",position:"relative",borderRadius:6,"&:first-child:before":{content:`url(${ge})`,position:"absolute",left:-6,top:-36,opacity:.8,[e.breakpoints.down("sm")]:{transform:"scale(0.7)"}},"&:last-child:after":{content:`url(${ge})`,position:"absolute",right:-6,bottom:-36,opacity:.8,[e.breakpoints.down("sm")]:{height:50},transform:"rotate(180deg)",[e.breakpoints.down("sm")]:{transform:"scale(0.7) rotate(180deg)"}}},cardTitle:{fontWeight:700,fontSize:17,marginTop:20,marginBottom:20,textTransform:"uppercase"},image:{height:120,width:120,margin:"auto",objectFit:"cover",borderRadius:"50%"},quote:{width:"100px !important"}});const Ce=Object(g.a)(Ee);var Ne=({name:e,description:t,src:a})=>{const{cardTitle:n,image:r,box:o}=Ce();return i.a.createElement(c.a,{className:o},i.a.createElement("img",{className:r,alt:"profile",src:a}),i.a.createElement(m.a,{className:n},e),i.a.createElement(m.a,null,t))};function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var we=()=>{const{t:e}=Object(u.a)(),t=Object(w.a)(),a=Object(y.a)(t.breakpoints.down("sm")),{data:n,loading:r,error:o}=je(`${L.a}/api/get-about`);if(o)return i.a.createElement(m.a,{color:"error"},o);return i.a.createElement(c.a,{px:a?4:12,py:6,bgcolor:Q.a.greyF6},i.a.createElement(O.b,null,i.a.createElement(m.a,{style:{textTransform:"uppercase"},variant:"subtitle1"},e("landing.about.title"))),i.a.createElement(O.a,null,r||!n?i.a.createElement(f.a,null):(l=n,s=3,l.reduce((e,t,a)=>{const n=Math.floor(a/s);return e[n]=[].concat(e[n]||[],t),e},[])).map(e=>{return t=e,i.a.createElement(c.a,{my:8,key:Math.random().toString(36).slice(2)},i.a.createElement(c.a,{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:a?"column":"row"},t.map(e=>i.a.createElement(Ne,ye({key:e.name},e)))));var t})));var l,s};var Oe=()=>Object(h.a)({title:{textTransform:"uppercase"},container:{padding:"0px 40px 50px 0px"},carouselContentContainer:{padding:"50px 60px"}});const fe=Object(g.a)(Oe);var De=()=>{const{title:e,container:t,carouselContentContainer:a}=fe(),{t:n}=Object(u.a)(),r=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{item:!0,xs:3,md:3,lg:3},i.a.createElement(me.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=N8GgunjEJA8&ab_channel=SouthCentralChannel"})),i.a.createElement(o.a,{item:!0,xs:3,md:3,lg:3},i.a.createElement(me.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=N8GgunjEJA8&ab_channel=SouthCentralChannel"})),i.a.createElement(o.a,{item:!0,xs:3,md:3,lg:3},i.a.createElement(me.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=N8GgunjEJA8&ab_channel=SouthCentralChannel"})),i.a.createElement(o.a,{item:!0,xs:3,md:3,lg:3},i.a.createElement(me.a,{height:"100%",width:"100%",url:"https://www.youtube.com/watch?v=N8GgunjEJA8&ab_channel=SouthCentralChannel"})));return i.a.createElement(c.a,null,i.a.createElement(O.b,{margin:"auto",centered:!0},i.a.createElement(m.a,{variant:"subtitle1",className:e},n("landing.videos"))),i.a.createElement(c.a,{className:t},i.a.createElement(O.a,null,i.a.createElement(c.a,null,i.a.createElement(o.a,{container:!0,direction:"row",spacing:5,className:a},r())),i.a.createElement(c.a,null,i.a.createElement(o.a,{className:a,container:!0,direction:"row",spacing:5},r())),i.a.createElement(c.a,null,i.a.createElement(o.a,{className:a,container:!0,direction:"row",spacing:5},r())))))};t.default=()=>{const{setComponentType:e}=Object(r.useContext)(n.a);return Object(r.useEffect)(()=>{e("public")},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement(pe,null),i.a.createElement(le,null),i.a.createElement(we,null),i.a.createElement(De,null),i.a.createElement(he,null),i.a.createElement($,null))}}}]);