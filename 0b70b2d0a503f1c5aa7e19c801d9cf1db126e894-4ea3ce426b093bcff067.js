"use strict";(self.webpackChunkDonutMissOut=self.webpackChunkDonutMissOut||[]).push([[137],{3923:function(e,t,a){a.d(t,{ZP:function(){return h}});class r{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const s={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},o=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},n=async(e,t,a={})=>{const o=await fetch(s.origin+e,{method:"POST",headers:a,body:t}),n=await o.text(),i=new r(o.status,n);if(o.ok)return i;throw i},i=(e,t,a)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||"string"!=typeof a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},l=e=>e.webdriver||!e.languages||0===e.languages.length,c=()=>new r(451,"Unavailable For Headless Browser"),m=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const a=(r=t,s=e.watchVariable,r instanceof FormData?r.get(s):r[s]);var r,s;return"string"==typeof a&&e.list.includes(a)},u=()=>new r(403,"Forbidden"),d=async(e,t,a)=>{if(!t.throttle||!a)return!1;((e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const r=t.id||e,s=await(async(e,t,a)=>{const r=Number(await a.get(e)||0);return t-Date.now()+r})(r,t.throttle,a);return s>0||(await a.set(r,Date.now().toString()),!1)},p=()=>new r(429,"Too Many Requests");var h={init:(e,t="https://api.emailjs.com")=>{if(!e)return;const a=o(e);s.publicKey=a.publicKey,s.blockHeadless=a.blockHeadless,s.storageProvider=a.storageProvider,s.blockList=a.blockList,s.limitRate=a.limitRate,s.origin=a.origin||t},send:async(e,t,a,r)=>{const h=o(r),f=h.publicKey||s.publicKey,g=h.blockHeadless||s.blockHeadless,v=h.storageProvider||s.storageProvider,b={...s.blockList,...h.blockList},y={...s.limitRate,...h.limitRate};if(g&&l(navigator))return Promise.reject(c());if(i(f,e,t),(e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(a),a&&m(b,a))return Promise.reject(u());if(await d(location.pathname,y,v))return Promise.reject(p());const N={lib_version:"4.4.1",user_id:f,service_id:e,template_id:t,template_params:a};return n("/api/v1.0/email/send",JSON.stringify(N),{"Content-type":"application/json"})},sendForm:async(e,t,a,r)=>{const h=o(r),f=h.publicKey||s.publicKey,g=h.blockHeadless||s.blockHeadless,v=s.storageProvider||h.storageProvider,b={...s.blockList,...h.blockList},y={...s.limitRate,...h.limitRate};if(g&&l(navigator))return Promise.reject(c());const N=(e=>"string"==typeof e?document.querySelector(e):e)(a);i(f,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(N);const w=new FormData(N);return m(b,w)?Promise.reject(u()):await d(location.pathname,y,v)?Promise.reject(p()):(w.append("lib_version","4.4.1"),w.append("service_id",e),w.append("template_id",t),w.append("user_id",f),n("/api/v1.0/email/send-form",w))},EmailJSResponseStatus:r}},5194:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294);let s=e=>e;const o={some:0,all:1};function n(e,t,{root:a,margin:r,amount:n="some"}={}){const i=function(e,t,a){var r;if("string"==typeof e){let o=document;t&&(s(Boolean(t.current),"Scope provided, but no element detected."),o=t.current),a?(null!==(r=a[e])&&void 0!==r||(a[e]=o.querySelectorAll(e)),e=a[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e),l=new WeakMap,c=new IntersectionObserver((e=>{e.forEach((e=>{const a=l.get(e.target);if(e.isIntersecting!==Boolean(a))if(e.isIntersecting){const a=t(e);"function"==typeof a?l.set(e.target,a):c.unobserve(e.target)}else a&&(a(e),l.delete(e.target))}))}),{root:a,rootMargin:r,threshold:"number"==typeof n?n:o[n]});return i.forEach((e=>c.observe(e))),()=>c.disconnect()}var i=a(3923),l=a(155);function c(){!function(e,{root:t,margin:a,amount:s,once:o=!1}={}){const[i,l]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(!e.current||o&&i)return;const r={root:t&&t.current||void 0,margin:a,amount:s};return n(e.current,(()=>(l(!0),o?void 0:()=>l(!1))),r)}),[t,e,a,o,s])}((0,r.useRef)(null),{once:!0});const[e,t]=r.useState({display:"none"}),[a,s]=r.useState(!1),[o,c]=r.useState({firstName:"",lastName:"",email:"",message:""}),[m,u]=r.useState({firstName:!1,lastName:!1,email:!1,message:!1});const[d,p]=r.useState(""),[h,f]=r.useState(""),[g,v]=r.useState(""),[b,y]=r.useState("");function N(e){const{name:t,value:a,type:r,checked:s}=e.target;c((e=>({...e,[t]:"checkbox"===r?s:a}))),function(){const e=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,t=/^[A-Za-z]+$/;d.value.match(t)||document.activeElement!==d?d.value.match(t)&&(d.classList.remove("input-error"),u((e=>({...e,firstName:!0})))):(d.classList.add("input-error"),u((e=>({...e,firstName:!1}))));h.value.match(t)||document.activeElement!==h?h.value.match(t)&&(h.classList.remove("input-error"),u((e=>({...e,lastName:!0})))):(h.classList.add("input-error"),u((e=>({...e,lastName:!1}))));g.value.match(e)||document.activeElement!==g?g.value.match(e)&&(g.classList.remove("input-error"),u((e=>({...e,email:!0})))):(g.classList.add("input-error"),u((e=>({...e,email:!1}))));0===b.value.length&&document.activeElement===b?(b.classList.add("input-error"),u((e=>({...e,message:!1})))):b.value.length>0&&(b.classList.remove("input-error"),u((e=>({...e,message:!0}))))}()}function w(){t({display:"flex",className:"fadein"}),setTimeout((()=>{t({display:"none",className:""})}),4500)}return r.useEffect((()=>{p(document.querySelector(".firstNameField")),f(document.querySelector(".lastNameField")),v(document.querySelector(".emailField")),y(document.querySelector(".messageField"))}),[]),r.createElement(r.Fragment,null,r.createElement("form",{className:"form contact-form",onSubmit:function(e){e.preventDefault(),m.firstName&&m.lastName&&m.email&&m.message?i.ZP.sendForm({}.REACT_APP_SERVICE_ID,{}.REACT_APP_TEMPLATE_ID,e.target,{}.REACT_APP_PUBLIC_KEY).then((e=>{s(!0),c({firstName:"",lastName:"",email:"",message:""}),u({firstName:!1,lastName:!1,email:!1,message:!1}),w()})).catch((e=>{s(!1),w()})):(0===d.value.length&&d.classList.add("input-error"),0===h.value.length&&h.classList.add("input-error"),0===g.value.length&&g.classList.add("input-error"),0===b.value.length&&b.classList.add("input-error"))}},r.createElement("div",{className:"thank-you-popup",style:e},r.createElement("p",{className:"thank-you-copy success"},a?"Success!":"Error!"),r.createElement("div",{className:"checkmark-container"},a?r.createElement(l.nSI,{className:"thank-you-pop-checkmark"}):r.createElement(l._vi,{className:"thank-you-pop-error"})),a?r.createElement(r.Fragment,null,r.createElement("p",{className:"thank-you-copy"},"Thanks for reaching out!"),r.createElement("p",{className:"thank-you-copy"},"I'll be in touch soon.")):r.createElement(r.Fragment,null,r.createElement("p",{className:"thank-you-copy"},"Looks like something went wrong. Double check you info, and try again."))),r.createElement("div",{className:"form-row form-row-name"},r.createElement("input",{className:"firstNameField",type:"text",placeholder:"First Name",onChange:N,name:"firstName",id:"firstName",value:o.firstName}),r.createElement("input",{className:"lastNameField",type:"text",placeholder:"Last Name",onChange:N,name:"lastName",id:"lastName",value:o.lastName})),r.createElement("div",{className:"form-row"},r.createElement("input",{className:"emailField",type:"text",placeholder:"Email",onChange:N,name:"email",value:o.email})),r.createElement("div",{className:"form-row"},r.createElement("textarea",{className:"messageField",name:"message",id:"message",value:o.message,onChange:N,placeholder:"Message"})),r.createElement("div",{className:"contact-btn-style"},r.createElement("button",{type:"submit",className:"btn contact-btn btn-hover"}),"Submit")))}},2557:function(e,t,a){t.Z=a.p+"static/main_background-0a6d6fb02ea74c00d1585f736cdaf48c.png"}}]);
//# sourceMappingURL=0b70b2d0a503f1c5aa7e19c801d9cf1db126e894-4ea3ce426b093bcff067.js.map