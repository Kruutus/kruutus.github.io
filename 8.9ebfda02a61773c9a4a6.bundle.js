(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{292:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return C})),a.d(t,"c",(function(){return R}));var n=a(286),r=a(0),o=a.n(r),i=a(274),c=a(289);var l=e=>Object(c.a)({underline:{position:"relative",width:"fit-content","&::after":{position:"absolute",content:'""',bottom:e=>e.bottom||-4,left:({centered:e,width:t})=>e?`calc(50% - ${(t||100)/2}px)`:0,right:"0",borderRadius:"3px",height:e=>e.height||6,width:e=>e.width||100,background:t=>t.color||e.palette.primary.main}}});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const m=Object(i.a)(l);var p=e=>{let{width:t,height:a,color:r,bottom:i,children:c,className:l,centered:p}=e,d=u(e,["width","height","color","bottom","children","className","centered"]);const{underline:b}=m({width:t,height:a,bottom:i,color:r,centered:p});return o.a.createElement(n.a,s({className:`${b} ${l}`},d),c)},d=a(285),b=a(309),f=a.n(b),g=a(39),h=a(31),O=a(83);var E=e=>Object(c.a)({root:{"& .slick-prev:before":{color:h.a.active,content:`url(${O.e})`},"& .slick-next:before":{color:h.a.active,content:`url(${O.g})`}},dots:{margin:e.spacing(0,1),height:7,width:100,backgroundColor:h.a.black1F,[e.breakpoints.down("sm")]:{width:40}},dotsContainer:{marginTop:"2em",marginRight:"2em",textAlign:"right",display:"flex",justifyContent:"flex-end",cursor:"pointer","& li":{listStyleType:"none"},"& .slick-active > div":{backgroundColor:h.a.active}}});function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){w(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const x=Object(i.a)(E);var C=({children:e,slidesToShow:t=4,slidesToScroll:a=4})=>{const r=Object(g.a)(),i=Object(d.a)(r.breakpoints.down("xs")),{root:c,dotsContainer:l,dots:s}=x({isMobile:i}),u=({className:e,style:t,onClick:a})=>o.a.createElement(n.a,{className:e,style:y(y({},t),{},{color:h.a.active}),onClick:a}),m=({className:e,style:t,onClick:a})=>o.a.createElement(n.a,{className:e,style:y(y({},t),{},{color:h.a.active}),onClick:a}),p={dots:!0,infinite:!0,speed:500,slidesToShow:t,slidesToScroll:a,prevArrow:o.a.createElement(u,null),nextArrow:o.a.createElement(m,null),appendDots:e=>o.a.createElement(n.a,{className:l},e),customPaging:()=>o.a.createElement(n.a,{className:s}),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2,dots:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]};return o.a.createElement(n.a,{className:c},o.a.createElement(f.a,v({dotsClass:l},p),e))},k=a(287),S=a(283),N=a(301),T=a(297),P=a.n(T),L=a(294),M=a(296);const z=Object(i.a)(L.a);var R=()=>{const{url:e,setUrl:t}=o.a.useContext(M.a),{videoBox:a,closeIcon:r}=z({isMobile:!1});return o.a.createElement(k.a,{open:!!e},o.a.createElement(n.a,{className:a},o.a.createElement(S.a,{className:r,color:"primary",onClick:()=>t("")},o.a.createElement(N.a,{fontSize:"large"})),o.a.createElement(P.a,{height:"100%",width:"100%",url:e,controls:!0})))}},294:function(e,t,a){"use strict";var n=a(289);t.a=()=>Object(n.a)({rootContainer:{padding:({isMobile:e})=>e?"2em":"2em 100px"},title:{textTransform:"uppercase"},container:{padding:"0px 40px 50px 0px"},carouselContentContainer:{padding:"50px 60px"},videoBox:{width:"50%",height:"50%",margin:"auto",marginTop:"10%",position:"relative"},closeIcon:{position:"absolute",right:-100,top:-14},leftIcon:{position:"absolute",left:-100,top:"calc(50% - 30px)"},rightIcon:{position:"absolute",right:-100,top:"calc(50% - 30px)"},playIcon:{position:"absolute",cursor:"pointer",top:"calc(50% - 27px)",left:"calc(50% - 27px)"}})},296:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));a(43);var n=a(0),r=a.n(n),o=a(292);const i=Object(n.createContext)({url:"",setUrl:()=>null}),c=e=>()=>{const[t,a]=r.a.useState("");return r.a.createElement(i.Provider,{value:{url:t,setUrl:a}},r.a.createElement(e,null),r.a.createElement(o.c,null))};t.a=i},308:function(e,t,a){"use strict";t.a=a.p+"5c07f082d3506bd703ec6c24b8dac831.png"},411:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Te}));var n=a(0),r=a.n(n),o=a(9),i=(a(104),a(105),a(106),a(107),a(108),a(109),a(110),a(111),a(112),a(113),a(114),a(115),a(116),a(43),a(291)),c=a(275),l=a(286),s=a(281),u=a(72),m=a.n(u),p=a(274),d=a(288);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const h={firstName:"",lastName:"",email:"",subbed:!1,accepted:!1,password:"",passwordRepeat:""},O=Object(n.createContext)({state:h,dispatch:()=>null}),E=(e,t)=>f(f({},e),t);var v=O,j=a(292),y=a(101),w=a(35),x=a(289);var C=e=>Object(x.a)({title:{fontSize:50,fontWeight:900},form:{marginTop:e.spacing(5),display:"flex",flexDirection:"column"}}),k=a(397),S=a(413),N=a(412);var T=()=>{const{t:e}=Object(d.a)(),{state:{lastName:t,firstName:a,accepted:o,subbed:c,email:s},dispatch:u}=Object(n.useContext)(v);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{container:!0,spacing:5},r.a.createElement(i.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{fullWidth:!0,value:t,onChange:e=>u({lastName:e.target.value}),required:!0,InputLabelProps:{required:!1},name:"lastName",autoFocus:!0,label:e("auth.lastName")})),r.a.createElement(i.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{fullWidth:!0,value:a,onChange:e=>u({firstName:e.target.value}),required:!0,InputLabelProps:{required:!1},name:"firstName",label:e("auth.firstName")})),r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement(N.a,{fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:s,onChange:e=>u({email:e.target.value}),name:"email",type:"email",label:e("common.email")}))),r.a.createElement(l.a,{mb:5}),r.a.createElement(k.a,{control:r.a.createElement(S.a,{required:!0,color:"primary",checked:o,onChange:e=>u({accepted:e.target.checked})}),label:e("auth.accept")}),r.a.createElement(k.a,{control:r.a.createElement(S.a,{color:"primary",checked:c,onChange:e=>u({subbed:e.target.checked})}),label:e("auth.sub")}))};var P=()=>{const{t:e}=Object(d.a)(),{state:{password:t,passwordRepeat:a},dispatch:o}=Object(n.useContext)(v);return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{required:!0,InputLabelProps:{required:!1},value:t,onChange:e=>o({password:e.target.value}),name:"password",type:"password",label:e("auth.password")}),r.a.createElement(l.a,{mb:5}),r.a.createElement(N.a,{required:!0,InputLabelProps:{required:!1},value:a,onChange:e=>o({passwordRepeat:e.target.value}),name:"passwordRepeat",type:"password",label:e("auth.passwordRepeat")}))};const L=new Map;L.set(0,()=>r.a.createElement(T,null)),L.set(1,()=>r.a.createElement(P,null));const M=Object(p.a)(C);var z,R=(z=()=>{const{setComponentType:e,setVariant:t}=Object(n.useContext)(w.a),{title:a,form:u}=M(),{t:p}=Object(d.a)(),{state:{firstName:b,lastName:f,email:g,password:h,passwordRepeat:O,accepted:E}}=Object(n.useContext)(v),[x,C]=Object(n.useState)(0),k=x===L.size-1,S=Object(o.g)();return Object(n.useEffect)(()=>{e("register"),t("black")},[]),r.a.createElement(l.a,{my:4,mx:8},r.a.createElement(l.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.a.createElement(j.b,null,r.a.createElement(s.a,{className:a},p("auth.register"))),r.a.createElement(s.a,{variant:"h4"},`${x+1}/${L.size}`)),r.a.createElement("form",{className:u,onSubmit:e=>{if(e.preventDefault(),k||C(x+1),k){const e={email:g,password:h,firstName:b,lastName:f};m.a.post(`${y.a}/api/register-user`,e).then(()=>{S.push("/auth/confirm")}).catch(e=>{alert(e.message)})}}},r.a.createElement(l.a,null,L.get(x)),r.a.createElement(l.a,{mb:5}),r.a.createElement(i.a,{container:!0,justify:x?"space-between":"center"},x?r.a.createElement(i.a,{item:!0},r.a.createElement(c.a,{onClick:()=>C(x-1),type:"button",variant:"outlined",color:"inherit"},p("auth.back"))):null,r.a.createElement(i.a,{item:!0},r.a.createElement(c.a,{disabled:!(()=>{switch(x){case 0:return!!(b&&f&&g&&E);case 1:return!(!h||!O||h!==O);default:return!0}})(),type:"submit",variant:"contained",color:"primary"},p(`auth.${k?"register":"next"}`))))))},()=>{const[e,t]=Object(n.useReducer)(E,h);return r.a.createElement(O.Provider,{value:{state:e,dispatch:t}},r.a.createElement(z,null))}),I=a(308);var D=e=>Object(x.a)({extraSpacingTop:{paddingTop:e.mixins.toolbar.height},img:{backgroundImage:`url(${I.a})`,backgroundPosition:"80%",backgroundSize:"cover",height:"100vh"}});const W=Object(p.a)(D);var q=({children:e})=>{const{extraSpacingTop:t,img:a}=W();return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:t}),r.a.createElement(i.a,{container:!0},r.a.createElement(i.a,{item:!0,xs:"auto",md:4,lg:5},r.a.createElement(l.a,{className:a})),r.a.createElement(i.a,{item:!0,xs:12,md:8,lg:7},e)))},A=a(15),$=a(83),H=a(53),B=a(31);var F=e=>Object(x.a)({title:{fontSize:50,fontWeight:900},link:{color:B.a.linkBlue,fontFamily:"'Open Sans', sans-serif",textDecoration:"unset",letterSpacing:"1px"},form:{marginTop:e.spacing(5),display:"flex",flexDirection:"column"}});const V=Object(p.a)(F);var U=()=>{const{title:e,form:t,link:a}=V(),{t:i}=Object(d.a)(),u=Object(o.g)(),[m,p]=Object(n.useState)(""),[b,f]=Object(n.useState)(""),{setVariant:g,setComponentType:h}=Object(n.useContext)(w.a);Object(n.useEffect)(()=>{g("black"),h("login")},[]);return r.a.createElement(l.a,{my:4,mx:8},r.a.createElement(j.b,{style:{margin:"auto"},centered:!0},r.a.createElement(s.a,{className:e},i("auth.login"))),r.a.createElement("form",{className:t,onSubmit:async e=>{e.preventDefault();const{user:t}=await H.a.auth().signInWithEmailAndPassword(m,b);t?u.push("/profile/personal-data"):alert("sikertelen belépés!")}},r.a.createElement(N.a,{required:!0,autoFocus:!0,InputLabelProps:{required:!1},value:m,onChange:e=>p(e.target.value),name:"email",type:"email",label:i("common.email")}),r.a.createElement(l.a,{mb:5}),r.a.createElement(N.a,{required:!0,InputLabelProps:{required:!1},value:b,onChange:e=>f(e.target.value),name:"password",type:"password",label:i("auth.password")}),r.a.createElement(l.a,{mt:5},r.a.createElement(A.b,{to:"/auth/reset-password",className:a},i("auth.forgotPasswordLink"))),r.a.createElement(l.a,{textAlign:"center",mt:5},r.a.createElement(c.a,{type:"submit",variant:"contained",color:"primary",endIcon:r.a.createElement($.a,null)},i("auth.login")))))},G=a(3),J=a(25),Z=a(2),X=a(1),K=a.n(X),Q=a(5),Y=a(6),_=a(34),ee=a(280),te=a(27),ae=a(8),ne=a(58),re=a(278),oe=a(279),ie=a(13),ce=n.forwardRef((function(e,t){var a=e.action,r=e.classes,o=e.className,i=e.message,c=e.role,l=void 0===c?"alert":c,s=Object(G.a)(e,["action","classes","className","message","role"]);return n.createElement(oe.a,Object(Z.a)({role:l,square:!0,elevation:6,className:Object(Q.a)(r.root,o),ref:t},s),n.createElement("div",{className:r.message},i),a?n.createElement("div",{className:r.action},a):null)}));ce.propTypes={action:K.a.node,classes:K.a.object,className:K.a.string,message:K.a.node,role:K.a.string};var le=Object(Y.a)((function(e){var t="light"===e.palette.type?.8:.98,a=Object(ie.b)(e.palette.background.default,t);return{root:Object(Z.a)({},e.typography.body2,Object(J.a)({color:e.palette.getContrastText(a),backgroundColor:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(ce),se=n.forwardRef((function(e,t){var a=e.action,r=e.anchorOrigin,o=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,i=r.horizontal,c=e.autoHideDuration,l=void 0===c?null:c,s=e.children,u=e.classes,m=e.className,p=e.ClickAwayListenerProps,d=e.ContentProps,b=e.disableWindowBlurListener,f=void 0!==b&&b,g=e.message,h=e.onClose,O=e.onEnter,E=e.onEntered,v=e.onEntering,j=e.onExit,y=e.onExited,w=e.onExiting,x=e.onMouseEnter,C=e.onMouseLeave,k=e.open,S=e.resumeHideDuration,N=e.TransitionComponent,T=void 0===N?re.a:N,P=e.transitionDuration,L=void 0===P?{enter:_.b.enteringScreen,exit:_.b.leavingScreen}:P,M=e.TransitionProps,z=Object(G.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),R=n.useRef(),I=n.useState(!0),D=I[0],W=I[1],q=Object(te.a)((function(){h&&h.apply(void 0,arguments)})),A=Object(te.a)((function(e){h&&null!=e&&(clearTimeout(R.current),R.current=setTimeout((function(){q(null,"timeout")}),e))}));n.useEffect((function(){return k&&A(l),function(){clearTimeout(R.current)}}),[k,l,A]);var $=function(){clearTimeout(R.current)},H=n.useCallback((function(){null!=l&&A(null!=S?S:.5*l)}),[l,S,A]);return n.useEffect((function(){if(!f&&k)return window.addEventListener("focus",H),window.addEventListener("blur",$),function(){window.removeEventListener("focus",H),window.removeEventListener("blur",$)}}),[f,H,k]),!k&&D?null:n.createElement(ee.a,Object(Z.a)({onClickAway:function(e){h&&h(e,"clickaway")}},p),n.createElement("div",Object(Z.a)({className:Object(Q.a)(u.root,u["anchorOrigin".concat(Object(ae.a)(o)).concat(Object(ae.a)(i))],m),onMouseEnter:function(e){x&&x(e),$()},onMouseLeave:function(e){C&&C(e),H()},ref:t},z),n.createElement(T,Object(Z.a)({appear:!0,in:k,onEnter:Object(ne.a)((function(){W(!1)}),O),onEntered:E,onEntering:v,onExit:j,onExited:Object(ne.a)((function(){W(!0)}),y),onExiting:w,timeout:L,direction:"top"===o?"down":"up"},M),s||n.createElement(le,Object(Z.a)({message:g,action:a},d)))))}));se.propTypes={action:K.a.node,anchorOrigin:K.a.shape({horizontal:K.a.oneOf(["center","left","right"]).isRequired,vertical:K.a.oneOf(["bottom","top"]).isRequired}),autoHideDuration:K.a.number,children:K.a.element,classes:K.a.object,className:K.a.string,ClickAwayListenerProps:K.a.object,ContentProps:K.a.object,disableWindowBlurListener:K.a.bool,key:K.a.any,message:K.a.node,onClose:K.a.func,onEnter:K.a.func,onEntered:K.a.func,onEntering:K.a.func,onExit:K.a.func,onExited:K.a.func,onExiting:K.a.func,onMouseEnter:K.a.func,onMouseLeave:K.a.func,open:K.a.bool,resumeHideDuration:K.a.number,TransitionComponent:K.a.elementType,transitionDuration:K.a.oneOfType([K.a.number,K.a.shape({appear:K.a.number,enter:K.a.number,exit:K.a.number})]),TransitionProps:K.a.object};var ue=Object(Y.a)((function(e){var t={top:8},a={bottom:8},n={justifyContent:"flex-end"},r={justifyContent:"flex-start"},o={top:24},i={bottom:24},c={right:24},l={left:24},s={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(Z.a)({},t,Object(J.a)({},e.breakpoints.up("sm"),Object(Z.a)({},o,s))),anchorOriginBottomCenter:Object(Z.a)({},a,Object(J.a)({},e.breakpoints.up("sm"),Object(Z.a)({},i,s))),anchorOriginTopRight:Object(Z.a)({},t,n,Object(J.a)({},e.breakpoints.up("sm"),Object(Z.a)({left:"auto"},o,c))),anchorOriginBottomRight:Object(Z.a)({},a,n,Object(J.a)({},e.breakpoints.up("sm"),Object(Z.a)({left:"auto"},i,c))),anchorOriginTopLeft:Object(Z.a)({},t,r,Object(J.a)({},e.breakpoints.up("sm"),Object(Z.a)({right:"auto"},o,l))),anchorOriginBottomLeft:Object(Z.a)({},a,r,Object(J.a)({},e.breakpoints.up("sm"),Object(Z.a)({right:"auto"},i,l)))}}),{flip:!1,name:"MuiSnackbar"})(se),me=a(285),pe=a(39),de=a(311),be=Object(de.a)(n.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),fe=Object(de.a)(n.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),ge=Object(de.a)(n.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),he=Object(de.a)(n.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Oe=Object(de.a)(n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Ee=a(283),ve={success:n.createElement(be,{fontSize:"inherit"}),warning:n.createElement(fe,{fontSize:"inherit"}),error:n.createElement(ge,{fontSize:"inherit"}),info:n.createElement(he,{fontSize:"inherit"})},je=n.createElement(Oe,{fontSize:"small"}),ye=n.forwardRef((function(e,t){var a=e.action,r=e.children,o=e.classes,i=e.className,c=e.closeText,l=void 0===c?"Close":c,s=e.color,u=e.icon,m=e.iconMapping,p=void 0===m?ve:m,d=e.onClose,b=e.role,f=void 0===b?"alert":b,g=e.severity,h=void 0===g?"success":g,O=e.variant,E=void 0===O?"standard":O,v=Object(G.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return n.createElement(oe.a,Object(Z.a)({role:f,square:!0,elevation:0,className:Object(Q.a)(o.root,o["".concat(E).concat(Object(ae.a)(s||h))],i),ref:t},v),!1!==u?n.createElement("div",{className:o.icon},u||p[h]||ve[h]):null,n.createElement("div",{className:o.message},r),null!=a?n.createElement("div",{className:o.action},a):null,null==a&&d?n.createElement("div",{className:o.action},n.createElement(Ee.a,{size:"small","aria-label":l,title:l,color:"inherit",onClick:d},je)):null)}));ye.propTypes={action:K.a.node,children:K.a.node,classes:K.a.object,className:K.a.string,closeText:K.a.string,color:K.a.oneOf(["error","info","success","warning"]),icon:K.a.node,iconMapping:K.a.shape({error:K.a.node,info:K.a.node,success:K.a.node,warning:K.a.node}),onClose:K.a.func,role:K.a.string,severity:K.a.oneOf(["error","info","success","warning"]),variant:K.a.oneOf(["filled","outlined","standard"])};var we=Object(Y.a)((function(e){var t="light"===e.palette.type?ie.a:ie.e,a="light"===e.palette.type?ie.e:ie.a;return{root:Object(Z.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:a(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:a(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:a(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:a(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(ye);var xe=e=>Object(x.a)({title:{fontSize:50,fontWeight:900},mobileTitle:{fontSize:30,fontWeight:900},textStyle:{fontSize:20},mobileTextStyle:{fontSize:16},form:{marginTop:e.spacing(5),padding:e.spacing(10),display:"flex",flexDirection:"column"},mobileForm:{marginTop:e.spacing(5),padding:"unset",display:"flex",flexDirection:"column"}});function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ke(e){return r.a.createElement(we,Ce({elevation:6,variant:"filled"},e))}const Se=Object(p.a)(xe);var Ne=()=>{const{title:e,mobileTitle:t,form:a,mobileForm:o,mobileTextStyle:i,textStyle:u}=Se(),{t:m}=Object(d.a)(),p=Object(pe.a)(),[b,f]=Object(n.useState)(""),[g,h]=Object(n.useState)(),[O,E]=Object(n.useState)(""),[v,y]=Object(n.useState)(!1),w=Object(me.a)("(min-width:1440px)"),x=Object(me.a)(p.breakpoints.down("sm"));return r.a.createElement(l.a,{my:4,mx:x?1:8},r.a.createElement(j.b,{style:{margin:"auto"},centered:!0},r.a.createElement(s.a,{className:x?t:e},m("auth.forgotPasswordTitle"))),r.a.createElement("form",{className:x?o:a,onSubmit:async e=>{e.preventDefault();try{await H.a.auth().sendPasswordResetEmail(b),E(m("auth.pwResetEmailSent")),h("success")}catch{E(m("auth.pwResetEmailError")),h("error")}finally{y(!0)}}},r.a.createElement(l.a,{mb:x?2:5},r.a.createElement(s.a,{variant:"h6",className:x?i:u},m("auth.pwResetEmailHelperText"))),r.a.createElement(N.a,{required:!0,InputLabelProps:{required:!1},value:b,onChange:e=>f(e.target.value),name:"email",type:"email",label:m("common.email")}),r.a.createElement(l.a,{textAlign:"center",mt:5},r.a.createElement(c.a,{type:"submit",variant:"contained",color:"primary"},m("auth.send")))),r.a.createElement(ue,{open:v,autoHideDuration:6e3,onClose:()=>y(!1)},r.a.createElement(ke,{onClose:()=>y(!1),severity:g},r.a.createElement(s.a,{variant:w?"h6":"body1"},O))))};var Te=({match:e})=>r.a.createElement(q,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:`${e.path}/register`,component:R}),r.a.createElement(o.b,{path:`${e.path}/login`,component:U}),r.a.createElement(o.b,{path:`${e.path}/reset-password`,component:Ne}),r.a.createElement(o.a,{to:"/"})))}}]);