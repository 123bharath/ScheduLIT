(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{8588:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return i(4266)}])},8082:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var r=i(5893);i(7294);var a=i(1913),s=i.n(a);function o(e){var n=e.message;return(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsx)("div",{className:s().message,children:n||"Loading..."}),(0,r.jsx)("span",{className:s().loader})]})}},4266:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return f}});var r=i(7568),a=i(655),s=i(5893),o=i(1664),l=i.n(o),t=i(1163),c=i(7294),u=i(9531),d=i(8082),m=i(9294),p=i.n(m);function f(){var e=function(e,n){n.test(e.value)?(e.className="valid__formfield",setValidForm(!0)):(e.className="invalid__formfield",setValidForm(!1))},n=function(n){e(n.target,g.current[n.target.id])},i=(0,c.useRef)(),o=(0,c.useRef)(),m=(0,c.useRef)(),f=(0,c.useRef)(),h=(0,c.useRef)(),g=(0,c.useRef)({email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,password:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/}),$=(0,t.useRouter)(),x=(0,u.E)(),v=x.signUp,j=x.loading;function N(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(function(e){var n,r,s,l,t;return(0,a.__generator)(this,function(a){switch(a.label){case 0:if(e.preventDefault(),n=i.current.value,r=o.current.value,s=m.current.value,l=f.current.value,t=h.current.value,!(n===r&&s===l))return[3,2];return[4,v(n,t,s)];case 1:return a.sent(),$.replace("/"),[3,3];case 2:alert("password or email does not match"),a.label=3;case 3:return[2]}})})).apply(this,arguments)}return j?(0,s.jsx)(d.Z,{}):(0,s.jsxs)("div",{className:p().signUp__container,children:[(0,s.jsxs)("div",{className:p().form__container,children:[(0,s.jsx)("h1",{children:"Signup"}),(0,s.jsxs)("form",{id:p().signUp__form,onSubmit:N,children:[(0,s.jsx)("button",{className:"form-btn",children:"Continue with Google"}),(0,s.jsx)("div",{className:p().or__line,children:"or"}),(0,s.jsxs)("div",{className:p().manual__signUp__container,children:[(0,s.jsx)("h2",{children:"Sign up with your email address"}),(0,s.jsxs)("div",{className:"email__div",children:[(0,s.jsx)("label",{htmlFor:"email",children:"What's your email?"}),(0,s.jsx)("input",{type:"email",id:"email",onKeyUp:n,required:!0,placeholder:"Enter your email",ref:i}),(0,s.jsx)("p",{className:"validation__info",children:"Email must be valid address"})]}),(0,s.jsxs)("div",{className:"emailCnf__div",children:[(0,s.jsx)("label",{htmlFor:"emailCnf",children:"Confirm your email"}),(0,s.jsx)("input",{type:"email",id:"emailCnf",required:!0,placeholder:"Enter your email again",ref:o})]}),(0,s.jsxs)("div",{className:"password__div",children:[(0,s.jsx)("label",{htmlFor:"password",children:"Create a password"}),(0,s.jsx)("input",{type:"password",id:"password",onKeyUp:n,required:!0,placeholder:"Create a password",ref:m}),(0,s.jsx)("p",{className:"validation__info",children:"Password must contain atleast 6 characters max 16"})]}),(0,s.jsxs)("div",{className:"passwordCnf__div",children:[(0,s.jsx)("label",{htmlFor:"passwordCnf",children:"Confirm your password"}),(0,s.jsx)("input",{type:"password",id:"passwordCnf",required:!0,placeholder:"Enter your password again",ref:f})]}),(0,s.jsxs)("div",{className:"userName__div",children:[(0,s.jsx)("label",{htmlFor:"userName",children:"What should we call you?"}),(0,s.jsx)("input",{type:"text",id:"userName",required:!0,placeholder:"Enter a profile name",ref:h}),(0,s.jsx)("div",{children:"This appears on your profile"})]}),(0,s.jsx)("button",{onClick:N,className:"form-btn",children:"Sign up"}),(0,s.jsxs)("div",{className:p().login__link,children:["Have an account? ",(0,s.jsx)(l(),{href:"/login",children:"Login"})]})]})]})]}),(0,s.jsx)("div",{className:p().img__container,children:(0,s.jsx)("img",{src:"/assets/login_img.jpg",alt:"login illustration",className:p().img})})]})}},1913:function(e){e.exports={container:"Spinner_container__2RgA6",loader:"Spinner_loader__YLVyy",rotate:"Spinner_rotate__i5Rb2",prixClipFix:"Spinner_prixClipFix__HUOuX",message:"Spinner_message__1wx2W",messageColor:"Spinner_messageColor__xP8zi"}},9294:function(e){e.exports={signUp__container:"Login_signUp__container__OLt3N",form__container:"Login_form__container__23h1b",img__container:"Login_img__container__qeQYU",img:"Login_img__O_Q7k",signUp__form:"Login_signUp__form__vXJi5",or__line:"Login_or__line__BNho5",manual__signUp__container:"Login_manual__signUp__container__esSE8",userName:"Login_userName__WfHy1",manual__signUp:"Login_manual__signUp__27gmP",login__link:"Login_login__link__LV49d"}},7568:function(e,n,i){"use strict";function r(e,n,i,r,a,s,o){try{var l=e[s](o),t=l.value}catch(c){i(c);return}l.done?n(t):Promise.resolve(t).then(r,a)}function a(e){return function(){var n=this,i=arguments;return new Promise(function(a,s){var o=e.apply(n,i);function l(e){r(o,a,s,l,t,"next",e)}function t(e){r(o,a,s,l,t,"throw",e)}l(void 0)})}}i.d(n,{Z:function(){return a}})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8588)}),_N_E=e.O()}]);