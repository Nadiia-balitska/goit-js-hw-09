import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r=document.querySelector(".feedback-form"),s="feedback-form-state";let o=JSON.parse(localStorage.getItem(s))||{email:"",message:""};//!==================================================================
r.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),a=e.currentTarget.elements.message.value.trim();if(!t||!a)return alert("email or message is empty");console.log({email:t,message:a}),e.target.elements.email.value="",e.target.elements.message.value="",localStorage.removeItem(s),e.target.reset(),o={}});r.addEventListener("input",e=>{const t=e.target.value.trim();o[e.target.name]=t,l(s,o)});//!==================================================================
function l(e,t){try{const a=JSON.stringify(t);localStorage.setItem(e,a)}catch(a){console.log(a.message)}}function n(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}//!==================================================================
function m(){const e=n(s)||{};r.elements.email.value=e.email||"",r.elements.message.value=e.message||""}m();//!==================================================================
//# sourceMappingURL=commonHelpers2.js.map