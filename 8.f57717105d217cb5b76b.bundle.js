(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{306:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));const r=()=>Math.random().toString(36).slice(2)},316:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"c",(function(){return d}));t(45);var r=t(0),n=t.n(r);function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}let l;!function(e){e.OTHER="other",e.MALE="male",e.FEMALE="female"}(l||(l={}));const s={firstName:"",lastName:"",email:"",subbed:!1,accepted:!1,password:"",passwordRepeat:"",gender:l.OTHER},m=Object(r.createContext)({state:s,dispatch:()=>null}),u=(e,a)=>c(c({},e),a),d=e=>()=>{const[a,t]=Object(r.useReducer)(u,s);return n.a.createElement(m.Provider,{value:{state:a,dispatch:t}},n.a.createElement(e,null))};a.b=m},322:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(0);function n(e){var a=r.useState(e),t=a[0],n=a[1],o=e||t;return r.useEffect((function(){null==t&&n("mui-".concat(Math.round(1e5*Math.random())))}),[t]),o}},323:function(e,a,t){"use strict";var r=t(0),n=r.createContext();n.displayName="RadioGroupContext",a.a=n},396:function(e,a,t){"use strict";var r=t(2),n=t(3),o=t(0),c=t(1),i=t.n(c),l=t(5),s=t(49),m=t(6),u=t(8),d=o.forwardRef((function(e,a){var t=e.classes,c=e.className,i=e.color,s=void 0===i?"primary":i,m=e.disableShrink,d=void 0!==m&&m,p=e.size,f=void 0===p?40:p,b=e.style,h=e.thickness,y=void 0===h?3.6:h,v=e.value,g=void 0===v?0:v,O=e.variant,E=void 0===O?"indeterminate":O,j=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),k={},w={},x={};if("determinate"===E||"static"===E){var C=2*Math.PI*((44-y)/2);k.strokeDasharray=C.toFixed(3),x["aria-valuenow"]=Math.round(g),k.strokeDashoffset="".concat(((100-g)/100*C).toFixed(3),"px"),w.transform="rotate(-90deg)"}return o.createElement("div",Object(r.a)({className:Object(l.a)(t.root,c,"inherit"!==s&&t["color".concat(Object(u.a)(s))],{determinate:t.determinate,indeterminate:t.indeterminate,static:t.static}[E]),style:Object(r.a)({width:f,height:f},w,b),ref:a,role:"progressbar"},x,j),o.createElement("svg",{className:t.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},o.createElement("circle",{className:Object(l.a)(t.circle,d&&t.circleDisableShrink,{determinate:t.circleDeterminate,indeterminate:t.circleIndeterminate,static:t.circleStatic}[E]),style:k,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})))}));d.propTypes={classes:i.a.object,className:i.a.string,color:i.a.oneOf(["inherit","primary","secondary"]),disableShrink:Object(s.a)(i.a.bool,(function(e){return e.disableShrink&&e.variant&&"indeterminate"!==e.variant?new Error("Material-UI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect."):null})),size:i.a.oneOfType([i.a.number,i.a.string]),style:i.a.object,thickness:i.a.number,value:i.a.number,variant:Object(s.a)(i.a.oneOf(["determinate","indeterminate","static"]),(function(e){if("static"===e.variant)throw new Error('Material-UI: `variant="static"` was deprecated. Use `variant="determinate"` instead.');return null}))},a.a=Object(m.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},398:function(e,a,t){"use strict";var r=t(2),n=t(3),o=t(0),c=t(1),i=t.n(c),l=t(5),s=t(255),m=t(329),u=t(173),d=Object(u.a)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),p=Object(u.a)(o.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),f=t(6);function b(e){var a=e.checked,t=e.classes,r=e.fontSize;return o.createElement("div",{className:Object(l.a)(t.root,a&&t.checked)},o.createElement(d,{fontSize:r}),o.createElement(p,{fontSize:r,className:t.layer}))}b.propTypes={checked:i.a.bool,classes:i.a.object.isRequired,fontSize:i.a.oneOf(["small","medium"])};var h=Object(f.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})(b),y=t(13),v=t(8),g=t(57),O=t(323);var E=o.createElement(h,{checked:!0}),j=o.createElement(h,null),k=o.forwardRef((function(e,a){var t=e.checked,c=e.classes,i=e.color,s=void 0===i?"secondary":i,u=e.name,d=e.onChange,p=e.size,f=void 0===p?"medium":p,b=Object(n.a)(e,["checked","classes","color","name","onChange","size"]),h=o.useContext(O.a),y=t,k=Object(g.a)(d,h&&h.onChange),w=u;return h&&(void 0===y&&(y=h.value===e.value),void 0===w&&(w=h.name)),o.createElement(m.a,Object(r.a)({color:s,type:"radio",icon:o.cloneElement(j,{fontSize:"small"===f?"small":"medium"}),checkedIcon:o.cloneElement(E,{fontSize:"small"===f?"small":"medium"}),classes:{root:Object(l.a)(c.root,c["color".concat(Object(v.a)(s))]),checked:c.checked,disabled:c.disabled},name:w,checked:y,onChange:k,ref:a},b))}));k.propTypes={checked:i.a.bool,checkedIcon:i.a.node,classes:i.a.object,color:i.a.oneOf(["default","primary","secondary"]),disabled:i.a.bool,disableRipple:i.a.bool,icon:i.a.node,id:i.a.string,inputProps:i.a.object,inputRef:s.a,name:i.a.string,onChange:i.a.func,required:i.a.bool,size:i.a.oneOf(["medium","small"]),value:i.a.any};a.a=Object(f.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(y.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(y.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(k)},400:function(e,a,t){"use strict";var r=t(2),n=t(56),o=t(3),c=t(0),i=t(1),l=t.n(i),s=t(5),m=t(6),u=c.forwardRef((function(e,a){var t=e.classes,n=e.className,i=e.row,l=void 0!==i&&i,m=Object(o.a)(e,["classes","className","row"]);return c.createElement("div",Object(r.a)({className:Object(s.a)(t.root,n,l&&t.row),ref:a},m))}));u.propTypes={children:l.a.node,classes:l.a.object,className:l.a.string,row:l.a.bool};var d=Object(m.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(u),p=t(7),f=t(321),b=t(323),h=t(322),y=c.forwardRef((function(e,a){var t=e.actions,i=e.children,l=e.name,s=e.value,m=e.onChange,u=Object(o.a)(e,["actions","children","name","value","onChange"]),y=c.useRef(null),v=Object(f.a)({controlled:s,default:e.defaultValue,name:"RadioGroup"}),g=Object(n.a)(v,2),O=g[0],E=g[1];c.useImperativeHandle(t,(function(){return{focus:function(){var e=y.current.querySelector("input:not(:disabled):checked");e||(e=y.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var j=Object(p.a)(a,y),k=Object(h.a)(l);return c.createElement(b.a.Provider,{value:{name:k,onChange:function(e){E(e.target.value),m&&m(e,e.target.value)},value:O}},c.createElement(d,Object(r.a)({role:"radiogroup",ref:j},u),i))}));y.propTypes={children:l.a.node,defaultValue:l.a.oneOfType([l.a.arrayOf(l.a.string),l.a.number,l.a.string]),name:l.a.string,onChange:l.a.func,value:l.a.any};a.a=y},431:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return V}));var r=t(0),n=t.n(r),o=t(10),c=t(159),i=t(281),l=t(416),s=t(400),m=t(418),u=t(398),d=t(417),p=t(292),f=t(430),b=t(287),h=t(396),y=t(316),v=(t(45),t(280)),g=t(295),O=t(106),E=t(72),j=t.n(E),k=t(37),w=t(103);function x(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?x(Object(t),!0).forEach((function(a){D(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function D(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const P={email:"",firstName:"",lastName:"",isLoading:!1,gender:y.a.OTHER},S=(e,a)=>C(C({},e),a);var N=t(294);var R=()=>Object(N.a)({form:{maxWidth:600},cancelButton:{color:"black",borderColor:"black"}});const z=Object(v.a)(R);var $=()=>{const{cancelButton:e,form:a}=z(),{t:t}=Object(g.a)(),{user:n}=Object(r.useContext)(k.a),[{data:o,loading:c},i]=Object(O.a)(`${w.a}/api/get-user-by-id/${null==n?void 0:n.uid}`),[l,s]=Object(r.useReducer)(S,P),m=()=>{s({email:o.email,firstName:o.firstName,lastName:o.lastName,gender:o.gender})};Object(r.useEffect)(()=>{n&&i()},[n]),Object(r.useEffect)(()=>{o&&m()},[o]);return{data:o,cancelButton:e,form:a,onSubmit:async e=>{if(e.preventDefault(),n)try{s({isLoading:!0}),await j.a.put(`${w.a}/api/update-user/${n.uid}`,l),i()}catch(e){alert(e.message)}finally{s({isLoading:!1})}},loading:c||l.isLoading,state:l,dispatch:s,setInitialState:m,t:t}};var I=()=>{const{data:e,onSubmit:a,form:t,t:r,state:o,dispatch:c,cancelButton:v,setInitialState:g,loading:O}=$();return e?n.a.createElement(p.a,{pt:14,ml:10,minHeight:"100vh"},n.a.createElement(b.a,{style:{fontSize:20}},r("profile.personalData")),n.a.createElement("form",{className:t,onSubmit:a},n.a.createElement(p.a,{my:4,display:"flex",justifyContent:"space-between"},n.a.createElement(f.a,{style:{marginRight:16},fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:o.lastName,onChange:e=>c({lastName:e.target.value}),name:"lastName",label:r("auth.lastName")}),n.a.createElement(f.a,{style:{marginLeft:16},fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:o.firstName,onChange:e=>c({firstName:e.target.value}),name:"firstName",label:r("auth.firstName")})),n.a.createElement(f.a,{fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:o.email,onChange:e=>c({email:e.target.value}),name:"email",type:"email",label:r("common.email")}),n.a.createElement(p.a,{m:4}),n.a.createElement(l.a,{component:"fieldset"},n.a.createElement(d.a,{component:"legend"},r("auth.gender")),n.a.createElement(s.a,{value:o.gender,onChange:e=>c({gender:e.target.value})},n.a.createElement(m.a,{value:y.a.OTHER,control:n.a.createElement(u.a,{color:"primary"}),label:r("auth.other")}),n.a.createElement(m.a,{value:y.a.FEMALE,control:n.a.createElement(u.a,{color:"primary"}),label:r("auth.female")}),n.a.createElement(m.a,{value:y.a.MALE,control:n.a.createElement(u.a,{color:"primary"}),label:r("auth.male")}))),n.a.createElement(p.a,{mt:4,display:"flex",justifyContent:"space-between"},n.a.createElement(i.a,{className:v,onClick:g,type:"button",color:"primary",variant:"outlined"},r("common.cancel")),n.a.createElement(i.a,{endIcon:O&&n.a.createElement(h.a,{size:16}),disabled:O,type:"submit",color:"primary",variant:"contained"},r("common.save"))))):n.a.createElement(h.a,null)},M=t(306),L=t.p+"5377bff248ab950545c2abc8d97123c6.png";const T=(e,a)=>e.startDate<a.startDate?1:e.startDate>a.startDate?-1:0;var q=()=>{const{userNode:e}=Object(r.useContext)(k.a),[{data:a,loading:t},n]=Object(O.a)(`${w.a}/api/get-plans/${null==e?void 0:e.planId}`),o=a&&Object.keys(a).map(e=>a[e]);return Object(r.useEffect)(()=>{n()},[]),{data:o?o.sort(T):[],loading:t}},B=t(296),W=t(31),H=t(83);var A=()=>Object(N.a)({cardRoot:{boxShadow:"-4px -4px 20px rgba(0, 0, 0, 0.05), 4px 4px 20px rgba(0, 0, 0, 0.05)",padding:30,marginBottom:32,borderRadius:5}});const F=Object(v.a)(A),U=["A","B","C","D","E"];var G=({weekProps:{day0:e,day1:a,day2:t,day3:r,day4:o,startDate:c}})=>{const i=[e,a,t,r,o],{cardRoot:l}=F(),{t:s}=Object(g.a)();return n.a.createElement(p.a,null,n.a.createElement(p.a,{mb:1},n.a.createElement(b.a,{style:{color:W.a.primary,fontWeight:700,fontSize:18}},new Date(c).toLocaleDateString())),n.a.createElement(B.a,{container:!0,spacing:2},i.map((e,a)=>((e,a)=>a?n.a.createElement(B.a,{key:e,item:!0,xs:12,md:6},n.a.createElement(p.a,{className:l,style:{border:`${a.isDone?`1px solid  ${W.a.green}`:"none"}`}},n.a.createElement(b.a,{style:{fontSize:25}},s("myPlan.nDay",{n:e})),n.a.createElement(p.a,{display:"flex",alignItems:"center",mt:1},a.isDone?n.a.createElement(H.d,null):n.a.createElement(H.b,null),n.a.createElement(b.a,{style:{marginLeft:16}},a.isDone?`Teljesítve! (${a.dateOfCompletion})`:s("myPlan.notDoneYet"))))):null)(U[a],e))))};const Y=Object(v.a)({img:{marginTop:16,backgroundImage:`url(${L})`,width:"auto",height:250,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}});var J=()=>{const{data:e}=q(),{t:a}=Object(g.a)(),{img:t}=Y(),r=Object(o.g)();if(!e)return n.a.createElement(h.a,null);const c=e.length;return n.a.createElement(p.a,{pt:14,ml:10,minHeight:"100vh",maxWidth:1240,mx:4},n.a.createElement(b.a,{style:{fontSize:18,fontWeight:700}},"Edzéstervem"),c?n.a.createElement(p.a,{my:4},n.a.createElement(b.a,null,a("myPlan.check"))):null,c?e.map(e=>n.a.createElement(G,{key:Object(M.a)(),weekProps:e})):n.a.createElement(p.a,{textAlign:"center"},n.a.createElement(p.a,{className:t}),n.a.createElement(p.a,{my:4},n.a.createElement(b.a,null,a("myPlan.noPlanYet"))),n.a.createElement(i.a,{color:"primary",variant:"contained",onClick:()=>r.push("/about/workout-generator")},a("myPlan.button"))))};var V=({match:e})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(o.d,null,n.a.createElement(o.b,{path:`${e.path}/personal-data`,component:I}),n.a.createElement(o.b,{path:`${e.path}/my-plan`,component:J}),n.a.createElement(o.a,{to:"/"})),n.a.createElement(c.a,null))}}]);