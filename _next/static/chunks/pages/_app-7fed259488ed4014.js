(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2656:function(e,t,n){"use strict";n.d(t,{Xb:function(){return ej},v0:function(){return tz},Aj:function(){return eK},e5:function(){return e0},w7:function(){return e9},ck:function(){return eH}});var r=n(4444),i=n(5816),s=n(655),a=n(3333),o=n(8463);function l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let u=l,h=new r.LL("auth","Firebase",l()),c=new a.Yd("@firebase/auth");function d(e,...t){c.logLevel<=a.in.ERROR&&c.error(`Auth (${i.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function g(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return h.create(e,...t)}function m(e,t,...n){if(!e)throw g(t,...n)}function v(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}function y(e,t){e||v(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=$.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function b(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class I{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===E()||"https:"===E()||(0,r.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function T(e,t){y(e.emulator,"Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class k{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},S=new I(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function R(e,t,n,i,s={}){return _(e,s,async()=>{let s={},a={};i&&("GET"===t?a=i:s={body:JSON.stringify(i)});let o=(0,r.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),k.fetch()(D(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function _(e,t,n){e._canInitEmulator=!1;let i=Object.assign(Object.assign({},C),t);try{let s=new L(e),a=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();let o=await a.json();if("needConfirmation"in o)throw x(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{let l=a.ok?o.errorMessage:o.error.message,[h,c]=l.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===h)throw x(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===h)throw x(e,"email-already-in-use",o);if("USER_DISABLED"===h)throw x(e,"user-disabled",o);let d=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw function(e,t,n){let i=Object.assign(Object.assign({},u()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}(e,d,c);f(e,d)}}catch(p){if(p instanceof r.ZR)throw p;f(e,"network-request-failed")}}async function N(e,t,n,r,i={}){let s=await R(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function D(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?T(e.config,i):`${e.config.apiScheme}://${i}`}class L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function x(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=p(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function O(e,t){return R(e,"POST","/v1/accounts:delete",t)}async function P(e,t){return R(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function M(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(n){}}async function U(e,t=!1){let n=(0,r.m9)(e),i=await n.getIdToken(t),s=F(i);m(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let a="object"==typeof s.firebase?s.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:s,token:i,authTime:M(V(s.auth_time)),issuedAtTime:M(V(s.iat)),expirationTime:M(V(s.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function V(e){return 1e3*Number(e)}function F(e){var t;let[n,i,s]=e.split(".");if(void 0===n||void 0===i||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{let a=(0,r.tV)(i);if(!a)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(a)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function B(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=M(this.lastLoginAt),this.creationTime=M(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function j(e){var t,n;let r=e.auth,i=await e.getIdToken(),a=await B(e,P(r,{idToken:i}));m(null==a?void 0:a.users.length,r,"internal-error");let o=a.users[0];e._notifyReloadListener(o);let l=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?(n=o.providerUserInfo,n.map(e=>{var{providerId:t}=e,n=(0,s.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[],u=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,l),h=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(null==u?void 0:u.length),d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new q(o.createdAt,o.lastLoginAt),isAnonymous:!!h&&c};Object.assign(e,d)}async function z(e){let t=(0,r.m9)(e);await j(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function H(e,t){let n=await _(e,{},async()=>{let n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=D(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class K{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(void 0!==e.idToken,"internal-error"),m(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=F(e);return m(t,"internal-error"),m(void 0!==t.exp,"internal-error"),m(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(m(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await H(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new K;return n&&(m("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(m("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(m("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new K,this.toJSON())}_performRefresh(){return v("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function G(e,t){m("string"==typeof e||void 0===e,"internal-error",{appName:t})}class W{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,s.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}{this.errorBackoff=3e4;let r=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=r-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){(null===(e=t)||void 0===e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await B(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return U(this,e)}reload(){return z(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new W(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await j(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await B(this,O(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;let h=null!==(n=t.displayName)&&void 0!==n?n:void 0,c=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,g=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,v=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:$,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:I}=t;m($&&I,e,"internal-error");let T=K.fromJSON(this.name,I);m("string"==typeof $,e,"internal-error"),G(h,e.name),G(c,e.name),m("boolean"==typeof w,e,"internal-error"),m("boolean"==typeof b,e,"internal-error"),G(d,e.name),G(f,e.name),G(p,e.name),G(g,e.name),G(v,e.name),G(y,e.name);let k=new W({uid:$,auth:e,email:c,emailVerified:w,displayName:h,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:v,lastLoginAt:y});return E&&Array.isArray(E)&&(k.providerData=E.map(e=>Object.assign({},e))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(e,t,n=!1){let r=new K;r.updateFromServerResponse(t);let i=new W({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await j(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Q{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Q.type="NONE";let X=Q;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Y(e,t,n){return`firebase:${e}:${t}:${n}`}class J{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=Y(this.userKey,r.apiKey,i),this.fullPersistenceKey=Y("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?W._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new J(w(X),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||w(X),s=Y(n,e.config.apiKey,e.name),a=null;for(let o of t)try{let l=await o._get(s);if(l){let u=W._fromJSON(e,l);o!==i&&(a=u),i=o;break}}catch(h){}let c=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&c.length&&(i=c[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(t){}}))),new J(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Z(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(er(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(es(t))return"Blackberry";if(ea(t))return"Webos";if(et(t))return"Safari";if((t.includes("chrome/")||en(t))&&!t.includes("edge/"))return"Chrome";if(ei(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function ee(e=(0,r.z$)()){return/firefox\//i.test(e)}function et(e=(0,r.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function en(e=(0,r.z$)()){return/crios\//i.test(e)}function er(e=(0,r.z$)()){return/iemobile/i.test(e)}function ei(e=(0,r.z$)()){return/android/i.test(e)}function es(e=(0,r.z$)()){return/blackberry/i.test(e)}function ea(e=(0,r.z$)()){return/webos/i.test(e)}function eo(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function el(e=(0,r.z$)()){return eo(e)||ei(e)||ea(e)||es(e)||/windows phone/i.test(e)||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eu(e,t=[]){let n;switch(e){case"Browser":n=Z((0,r.z$)());break;case"Worker":n=`${Z((0,r.z$)())}-${e}`;break;default:n=e}let s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eh{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ed(this),this.idTokenSubscription=new ed(this),this.beforeStateQueue=new /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let i=e(t);n(i)}catch(s){r(s)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;let n=[];try{for(let r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(i){for(let s of(n.reverse(),n))try{s()}catch(a){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=i)||void 0===t?void 0:t.message})}}}(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await J.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===a)&&(null==o?void 0:o.user)&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await j(e)}catch(n){if((null===(t=n)||void 0===t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,r.m9)(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&w(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await J.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(m(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!(!e||this.frameworks.includes(e))&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ec(e){return(0,r.m9)(e)}class ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)(e=>this.observer=e)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ef{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}async function ep(e,t){return R(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eg(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function em(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function ev(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ey extends ef{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ey(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ey(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return em(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ep(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ev(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function e$(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class ew extends ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new ew(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,s.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;let a=new ew(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return e$(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,e$(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,e$(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function e8(e,t){return R(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function eb(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function eE(e,t){let n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw x(e,"account-exists-with-different-credential",n);return n}let eI={USER_NOT_FOUND:"user-not-found"};async function eT(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,n),eI)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ek extends ef{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ek({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ek({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eb(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eE(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eT(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ek({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class eC{constructor(e){var t,n,i,s,a,o;let l=(0,r.zd)((0,r.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,h=null!==(n=l.oobCode)&&void 0!==n?n:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=l.mode)&&void 0!==i?i:null);m(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(a=l.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,r.zd)((0,r.pd)(e)).link,n=t?(0,r.zd)((0,r.pd)(t)).deep_link_id:null,i=(0,r.zd)((0,r.pd)(e)).deep_link_id,s=i?(0,r.zd)((0,r.pd)(i)).link:null;return s||i||n||t||e}(e);try{return new eC(t)}catch(n){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eS{constructor(){this.providerId=eS.PROVIDER_ID}static credential(e,t){return ey._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=eC.parseLink(t);return m(n,"argument-error"),ey._fromEmailAndCode(e,n.code,n.tenantId)}}eS.PROVIDER_ID="password",eS.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eS.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eR extends eA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e_ extends eR{constructor(){super("facebook.com")}static credential(e){return ew._fromParams({providerId:e_.PROVIDER_ID,signInMethod:e_.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return e_.credentialFromTaggedObject(e)}static credentialFromError(e){return e_.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return e_.credential(e.oauthAccessToken)}catch(t){return null}}}e_.FACEBOOK_SIGN_IN_METHOD="facebook.com",e_.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eN extends eR{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ew._fromParams({providerId:eN.PROVIDER_ID,signInMethod:eN.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eN.credentialFromTaggedObject(e)}static credentialFromError(e){return eN.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return eN.credential(t,n)}catch(r){return null}}}eN.GOOGLE_SIGN_IN_METHOD="google.com",eN.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eD extends eR{constructor(){super("github.com")}static credential(e){return ew._fromParams({providerId:eD.PROVIDER_ID,signInMethod:eD.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eD.credentialFromTaggedObject(e)}static credentialFromError(e){return eD.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eD.credential(e.oauthAccessToken)}catch(t){return null}}}eD.GITHUB_SIGN_IN_METHOD="github.com",eD.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eL extends eR{constructor(){super("twitter.com")}static credential(e,t){return ew._fromParams({providerId:eL.PROVIDER_ID,signInMethod:eL.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eL.credentialFromTaggedObject(e)}static credentialFromError(e){return eL.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return eL.credential(t,n)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ex(e,t){return N(e,"POST","/v1/accounts:signUp",A(e,t))}eL.TWITTER_SIGN_IN_METHOD="twitter.com",eL.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eO{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await W._fromIdTokenResponse(e,n,r),s=eP(n),a=new eO({user:i,providerId:s,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let r=eP(n);return new eO({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function eP(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eM extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,eM.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new eM(e,t,n,r)}}function eU(e,t,n,r){let i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw eM._fromErrorAndOperation(e,n,t,r);throw n})}async function eV(e,t,n=!1){let r=await B(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return eO._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eF(e,t,n=!1){var r;let{auth:i}=e,s="reauthenticate";try{let a=await B(e,eU(i,s,t,e),n);m(a.idToken,i,"internal-error");let o=F(a.idToken);m(o,i,"internal-error");let{sub:l}=o;return m(e.uid===l,i,"user-mismatch"),eO._forOperation(e,s,a)}catch(u){throw(null===(r=u)||void 0===r?void 0:r.code)==="auth/user-not-found"&&f(i,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eB(e,t,n=!1){let r="signIn",i=await eU(e,r,t),s=await eO._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function eq(e,t){return eB(ec(e),t)}async function ej(e,t,n){let r=ec(e),i=await ex(r,{returnSecureToken:!0,email:t,password:n}),s=await eO._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function e0(e,t,n){return eq((0,r.m9)(e),eS.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ez(e,t){return R(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eH(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;let i=(0,r.m9)(e),s=await i.getIdToken(),a=await B(i,ez(i.auth,{idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0}));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;let o=i.providerData.find(({providerId:e})=>"password"===e);o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function eK(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function e9(e){return(0,r.m9)(e).signOut()}new WeakMap;let eG="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(eG,"1"),this.storage.removeItem(eG),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class e2 extends e1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let e=(0,r.z$)();return et(e)||eo(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=el(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let s=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},a=this.storage.getItem(n);(0,r.w1)()&&10===document.documentMode&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e2.type="LOCAL";let eW=e2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e4 extends e1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e4.type="SESSION";let eQ=e4;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e7{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new e7(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){var t;let n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(null==a?void 0:a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let o=Array.from(a).map(async e=>e(n.origin,s)),l=await Promise.all((t=o).map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(n){return{fulfilled:!1,reason:n}}}));n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eX(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}e7.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw Error("connection_unavailable");let i,s;return new Promise((a,o)=>{let l=eX("",20);r.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){let t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),o(Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eY(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e6(){return void 0!==eY().WorkerGlobalScope&&"function"==typeof eY().importScripts}async function eJ(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let e5="firebaseLocalStorageDb",eZ="firebaseLocalStorage",te="fbase_key";class tt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tn(e,t){return e.transaction([eZ],t?"readwrite":"readonly").objectStore(eZ)}function tr(){let e=indexedDB.open(e5,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(eZ,{keyPath:te})}catch(r){n(r)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(eZ)?t(n):(n.close(),await function(){let e=indexedDB.deleteDatabase(e5);return new tt(e).toPromise()}(),t(await tr()))})})}async function ti(e,t,n){let r=tn(e,!0).put({[te]:t,value:n});return new tt(r).toPromise()}async function ts(e,t){let n=tn(e,!1).get(t),r=await new tt(n).toPromise();return void 0===r?null:r.value}function ta(e,t){let n=tn(e,!0).delete(t);return new tt(n).toPromise()}class to{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await tr()),this.db}async _withRetries(e){let t=0;for(;;)try{let n=await this._openDb();return await e(n)}catch(r){if(t++>3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e6()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=e7._getInstance(e6()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await eJ(),!this.activeServiceWorker)return;this.sender=new e3(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await tr();return await ti(e,eG,"1"),await ta(e,eG),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ti(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>ts(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ta(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=tn(e,!1).getAll();return new tt(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}to.type="LOCAL";let tl=to;function tu(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function th(e,t,n){var r,i,s,a,o;let l=await n.verify();try{m("string"==typeof l,e,"argument-error"),m("recaptcha"===n.type,e,"argument-error");let u;if(u="string"==typeof t?{phoneNumber:t}:t,"session"in u){let h=u.session;if("phoneNumber"in u){m("enroll"===h.type,e,"internal-error");let c=await (i=e,s={idToken:h.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:l}},R(i,"POST","/v2/accounts/mfaEnrollment:start",A(i,s)));return c.phoneSessionInfo.sessionInfo}{m("signin"===h.type,e,"internal-error");let d=(null===(r=u.multiFactorHint)||void 0===r?void 0:r.uid)||u.multiFactorUid;m(d,e,"missing-multi-factor-info");let f=await (a=e,o={mfaPendingCredential:h.credential,mfaEnrollmentId:d,phoneSignInInfo:{recaptchaToken:l}},R(a,"POST","/v2/accounts/mfaSignIn:start",A(a,o)));return f.phoneResponseInfo.sessionInfo}}{let{sessionInfo:p}=await e8(e,{phoneNumber:u.phoneNumber,recaptchaToken:l});return p}}finally{n._reset()}}tu("rcb"),new I(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tc{constructor(e){this.providerId=tc.PROVIDER_ID,this.auth=ec(e)}verifyPhoneNumber(e,t){return th(this.auth,e,(0,r.m9)(t))}static credential(e,t){return ek._fromVerification(e,t)}static credentialFromResult(e){return tc.credentialFromTaggedObject(e)}static credentialFromError(e){return tc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?ek._fromTokenResponse(t,n):null}}tc.PROVIDER_ID="phone",tc.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class td extends ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return e$(e,this._buildIdpRequest())}_linkToIdToken(e,t){return e$(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return e$(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tf(e){return eB(e.auth,new td(e),e.bypassAuthState)}function tp(e){let{auth:t,user:n}=e;return m(n,t,"internal-error"),eF(n,new td(e),e.bypassAuthState)}async function tg(e){let{auth:t,user:n}=e;return m(n,t,"internal-error"),eV(n,new td(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tm{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tf;case"linkViaPopup":case"linkViaRedirect":return tg;case"reauthViaPopup":case"reauthViaRedirect":return tp;default:f(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tv=new I(2e3,1e4);class ty extends tm{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ty.currentPopupAction&&ty.currentPopupAction.cancel(),ty.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");let e=eX();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ty.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tv.get())};e()}}ty.currentPopupAction=null;let t$=new Map;class tw extends tm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=t$.get(this.auth._key());if(!e){try{let t=await t8(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}t$.set(this.auth._key(),e)}return this.bypassAuthState||t$.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t8(e,t){var n,r;let i=(n=t,Y("pendingRedirect",n.config.apiKey,n.name)),s=(r=e,w(r._redirectPersistence));if(!await s._isAvailable())return!1;let a=await s._get(i)==="true";return await s._remove(i),a}async function tb(e,t,n=!1){var r,i;let s=ec(e),a=(r=s,(i=t)?w(i):(m(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)),o=new tw(s,a,n),l=await o.execute();return l&&!n&&(delete l.user._redirectEventId,await s._persistUserIfCurrent(l.user),await s._setRedirectUser(null,t)),l}class tE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tT(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tT(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tI(e))}saveEventToCache(e){this.cachedEventUids.add(tI(e)),this.lastProcessedEventTime=Date.now()}}function tI(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tT({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tk(e,t={}){return R(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tS=/^https?/;async function tA(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tk(e);for(let n of t)try{if(tR(n))return}catch(r){}f(e,"unauthorized-domain")}function tR(e){let t=b(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tS.test(n))return!1;if(tC.test(e))return r===e;let s=e.replace(/\./g,"\\."),a=RegExp("^(.+\\."+s+"|"+s+")$","i");return a.test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let t_=new I(3e4,6e4);function tN(){let e=eY().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}let tD=null,tL=new I(5e3,15e3),tx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tP(e){var t,n;let s=await (t=e,tD=tD||(n=t,new Promise((e,t)=>{var r,i,s,a;function o(){tN(),gapi.load("gapi.iframes",{callback(){e(gapi.iframes.getContext())},ontimeout(){tN(),t(p(n,"network-request-failed"))},timeout:t_.get()})}if(null===(i=null===(r=eY().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else if(null===(s=eY().gapi)||void 0===s?void 0:s.load)o();else{let l=tu("iframefcb");return eY()[l]=()=>{gapi.load?o():t(p(n,"network-request-failed"))},(a=`https://apis.google.com/js/api.js?onload=${l}`,new Promise((e,t)=>{var n,r;let i=document.createElement("script");i.setAttribute("src",a),i.onload=e,i.onerror=e=>{let n=p("internal-error");n.customData=e,t(n)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(i)})).catch(e=>t(e))}}).catch(e=>{throw tD=null,e}))),a=eY().gapi;return m(a,e,"internal-error"),s.open({where:document.body,url:function(e){let t=e.config;m(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?T(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},a=tO.get(e.config.apiHost);a&&(s.eid=a);let o=e._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}(e),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tx,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=eY().setTimeout(()=>{r(i)},tL.get());function a(){eY().clearTimeout(s),n(t)}t.ping(a).then(a,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tU{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function tV(e,t,n,s,a,o){m(e.config.authDomain,e,"auth-domain-config-required"),m(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:a};if(t instanceof eA)for(let[u,h]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))l[u]=h;if(t instanceof eR){let c=t.getScopes().filter(e=>""!==e);c.length>0&&(l.scopes=c.join(","))}e.tenantId&&(l.tid=e.tenantId);let d=l;for(let f of Object.keys(d))void 0===d[f]&&delete d[f];return`${function({config:e}){return e.emulator?T(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,r.xO)(d).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tF="webStorageSupport",tB=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eQ,this._completeRedirectFn=tb,this._overrideRedirectResult=function(e,t){t$.set(e._key(),t)}}async _openPopup(e,t,n,i){var s;y(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");let a=tV(e,t,n,b(),i);return function(e,t,n,i=500,s=600){let a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),l="",u=Object.assign(Object.assign({},tM),{width:i.toString(),height:s.toString(),top:a,left:o}),h=(0,r.z$)().toLowerCase();n&&(l=en(h)?"_blank":n),ee(h)&&(t=t||"http://localhost",u.scrollbars="yes");let c=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,r.z$)()){var t;return eo(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",l),new tU(null);let d=window.open(t||"",l,c);m(d,e,"popup-blocked");try{d.focus()}catch(f){}return new tU(d)}(e,a,eX())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=tV(e,t,n,b(),r),eY().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(y(r,"If manager is not set, promise should be"),r)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await tP(e),n=new tE(e);return t.register("authEvent",t=>{m(null==t?void 0:t.authEvent,e,"invalid-auth-event");let r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(tF,{type:tF},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[tF];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return el()||et()||eo()}};var tq="@firebase/auth",tj="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tz(e=(0,i.Mq)()){let t=(0,i.qX)(e,"auth");return t.isInitialized()?t.getImmediate():/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){let n=(0,i.qX)(e,"auth");if(n.isInitialized()){let s=n.getImmediate(),a=n.getOptions();if((0,r.vZ)(a,null!=t?t:{}))return s;f(s,"already-initialized")}let o=n.initialize({options:t});return o}(e,{popupRedirectResolver:tB,persistence:[tl,eW,eQ]})}var tH="Browser";(0,i.Xd)(new o.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{m(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),m(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});let r={apiKey:i,authDomain:s,clientPlatform:tH,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eu(tH)},a=new eh(e,n,r);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal");r.initialize()})),(0,i.Xd)(new o.wA("auth-internal",e=>{var t;let n=ec(e.getProvider("auth").getImmediate());return t=n,new t0(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(tq,tj,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(tH)),(0,i.KN)(tq,tj,"esm2017")},4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return u},L:function(){return o},LL:function(){return y},ZR:function(){return v},b$:function(){return f},eu:function(){return m},hl:function(){return g},m9:function(){return A},ne:function(){return k},pd:function(){return T},ru:function(){return d},tV:function(){return l},uI:function(){return c},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let a=t[s],o=n[s];if(b(a)&&b(o)){if(!e(a,o))return!1}else if(a!==o)return!1}for(let l of i)if(!r.includes(l))return!1;return!0}},w1:function(){return p},xO:function(){return E},xb:function(){return w},z$:function(){return h},zd:function(){return I}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let r=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let a=e[n++],o=e[n++],l=e[n++],u=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{let h=e[n++],c=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&h)<<6|63&c)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,h=s>>2,c=(3&s)<<4|o>>4,d=(15&o)<<2|u>>6,f=63&u;l||(f=64,a||(d=64)),r.push(n[h],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let s=n[e.charAt(i++)],a=i<e.length,o=a?n[e.charAt(i)]:0;++i;let l=i<e.length,u=l?n[e.charAt(i)]:64;++i;let h=i<e.length,c=h?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==u||null==c)throw Error();let d=s<<2|o>>4;if(r.push(d),64!==u){let f=o<<4&240|u>>2;if(r.push(f),64!==c){let p=u<<6&192|c;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){let t=r(e);return s.encodeByteArray(t,!0)},o=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function c(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function d(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){let e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){return"object"==typeof indexedDB}function m(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}})}class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var n,r;let i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],o=a?(n=a,r=i,n.replace($,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`})):"Error",l=`${this.serviceName}: ${o} (${s}).`,u=new v(s,l,i);return u}}let $=/\{\$([^}]+)}/g;function w(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function b(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function I(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function T(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function k(e,t){let n=new C(e,t);return n.subscribe.bind(n)}class C{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=S),void 0===r.error&&(r.error=S),void 0===r.complete&&(r.complete=S);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(e){!this.finalized&&(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function A(e){return e&&e._delegate?e._delegate:e}},5321:function(e,t,n){"use strict";n.d(t,{hJ:function(){return oS},JU:function(){return oA},ad:function(){return oN},cf:function(){return lt},IO:function(){return oJ},Bt:function(){return ln},pl:function(){return le}});var r,i,s,a,o,l,u,h,c,d=n(5816),f=n(8463),p=n(3333),g=n(4444),m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},v={},y=y||{},$=m||self;function w(){}function b(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function E(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function I(e,t,n){return e.call.apply(e.bind,arguments)}function T(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function k(e,t,n){return(k=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?I:T).apply(null,arguments)}function C(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function S(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function A(){this.s=this.s,this.o=this.o}A.prototype.s=!1,A.prototype.na=function(){this.s||(this.s=!0,this.M())},A.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let R=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function _(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function N(e,t){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(b(r)){let i=e.length||0,s=r.length||0;e.length=i+s;for(let a=0;a<s;a++)e[i+a]=r[a]}else e.push(r)}}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{$.addEventListener("test",w,t),$.removeEventListener("test",w,t)}catch(n){}return e}();function x(e){return/^[\s\xa0]*$/.test(e)}var O=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function P(e,t){return e<t?-1:e>t?1:0}function M(){var e=$.navigator;return e&&(e=e.userAgent)?e:""}function U(e){return -1!=M().indexOf(e)}function V(e){return V[" "](e),e}V[" "]=w;var F=U("Opera"),B=U("Trident")||U("MSIE"),q=U("Edge"),j=q||B,z=U("Gecko")&&!(-1!=M().toLowerCase().indexOf("webkit")&&!U("Edge"))&&!(U("Trident")||U("MSIE"))&&!U("Edge"),H=-1!=M().toLowerCase().indexOf("webkit")&&!U("Edge");function K(){var e=$.document;return e?e.documentMode:void 0}a:{var G,W="",Q=(G=M(),z?/rv:([^\);]+)(\)|;)/.exec(G):q?/Edge\/([\d\.]+)/.exec(G):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(G):H?/WebKit\/(\S+)/.exec(G):F?/(?:Version)[ \/]?(\S+)/.exec(G):void 0);if(Q&&(W=Q?Q[1]:""),B){var X=K();if(null!=X&&X>parseFloat(W)){s=String(X);break a}}s=W}var Y={};if($.document&&B){a=K()||parseInt(s,10)||void 0}else a=void 0;var J=a;function Z(e,t){if(D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(z){a:{try{V(t.nodeName);var i=!0;break a}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}S(Z,D);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),en=0;function er(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++en,this.ba=this.ea=!1}function ei(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function es(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function ea(e){let t={};for(let n in e)t[n]=e[n];return t}let eo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function el(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(let s=0;s<eo.length;s++)n=eo[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function eu(e){this.src=e,this.g={},this.h=0}function eh(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=R(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ei(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ec(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}eu.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=ec(e,t,r,i);return -1<a?(t=e[a],n||(t.ea=!1)):((t=new er(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var ed="closure_lm_"+(1e6*Math.random()|0),ef={};function ep(e,t,n,r,i){if(r&&r.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=e8(r),t&&t[et]?t.O(n,r,E(i)?!!i.capture:!!i,s):eg(t,n,r,!0,i,s)}(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ep(e,t[s],n,r,i);return null}return n=e8(n),e&&e[et]?e.N(t,n,E(r)?!!r.capture:!!r,i):eg(e,t,n,!1,r,i)}function eg(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=E(i)?!!i.capture:!!i,o=e$(e);if(o||(e[ed]=o=new eu(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}let t=ey;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ev(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function em(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[et])eh(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ev(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=e$(t))?(eh(n,e),0==n.h&&(n.src=null,t[ed]=null)):ei(e)}}}function ev(e){return e in ef?ef[e]:ef[e]="on"+e}function ey(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&em(e),e=n.call(r,t)}return e}function e$(e){return(e=e[ed])instanceof eu?e:null}var ew="__closure_events_fn_"+(1e9*Math.random()>>>0);function e8(e){return"function"==typeof e?e:(e[ew]||(e[ew]=function(t){return e.handleEvent(t)}),e[ew])}function eb(){A.call(this),this.i=new eu(this),this.P=this,this.I=null}function eE(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var i=t;el(t=new D(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=eI(a,r,!0,t)&&i}if(i=eI(a=t.g=e,r,!0,t)&&i,i=eI(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=eI(a=t.g=n[s],r,!1,t)&&i}function eI(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.ba&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.ea&&eh(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}S(eb,A),eb.prototype[et]=!0,eb.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=E(i)?!!i.capture:!!i,r=e8(r),t&&t[et])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ec(a=t.g[n],r,i,s))&&(ei(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=e$(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ec(n,r,i,s)),(r=-1<t?n[t]:null)&&em(r))}(this,e,t,n,r)},eb.prototype.M=function(){if(eb.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ei(n[r]);delete t.g[e],t.h--}}this.I=null},eb.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},eb.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var eT=$.JSON.stringify;function ek(){var e=eN;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var eC=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eS,e=>e.reset());class eS{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function eA(e){$.setTimeout(()=>{throw e},0)}function eR(e,t){var n;o||(n=$.Promise.resolve(void 0),o=function(){n.then(eD)}),e_||(o(),e_=!0),eN.add(e,t)}var e_=!1,eN=new class{constructor(){this.h=this.g=null}add(e,t){let n=eC.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function eD(){for(var e;e=ek();){try{e.h.call(e.g)}catch(t){eA(t)}var n=eC;n.j(e),100>n.h&&(n.h++,e.next=n.g,n.g=e)}e_=!1}function eL(e,t){eb.call(this),this.h=e||1,this.g=t||$,this.j=k(this.kb,this),this.l=Date.now()}function ex(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function eO(e,t,n){if("function"==typeof e)n&&(e=k(e,n));else if(e&&"function"==typeof e.handleEvent)e=k(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:$.setTimeout(e,t||0)}S(eL,eb),(c=eL.prototype).ca=!1,c.R=null,c.kb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),eE(this,"tick"),this.ca&&(ex(this),this.start()))}},c.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},c.M=function(){eL.X.M.call(this),ex(this),delete this.g};class eP extends A{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eO(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eM(e){A.call(this),this.h=e,this.g={}}S(eM,A);var eU=[];function eV(e,t,n,r){Array.isArray(n)||(n&&(eU[0]=n.toString()),n=eU);for(var i=0;i<n.length;i++){var s=ep(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eF(e){es(e.g,function(e,t){this.g.hasOwnProperty(t)&&em(e)},e),e.g={}}function eB(){this.g=!0}function eq(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return eT(n)}catch(o){return t}}(e,n)+(r?" "+r:"")})}eM.prototype.M=function(){eM.X.M.call(this),eF(this)},eM.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eB.prototype.Aa=function(){this.g=!1},eB.prototype.info=function(){};var ej={},e0=null;function ez(){return e0=e0||new eb}function eH(e){D.call(this,ej.Oa,e)}function eK(e){let t=ez();eE(t,new eH(t,e))}function e9(e,t){D.call(this,ej.STAT_EVENT,e),this.stat=t}function eG(e){let t=ez();eE(t,new e9(t,e))}function e1(e,t){D.call(this,ej.Pa,e),this.size=t}function e2(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){e()},t)}ej.Oa="serverreachability",S(eH,D),ej.STAT_EVENT="statevent",S(e9,D),ej.Pa="timingevent",S(e1,D);var eW={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},e4={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function eQ(){}function e7(e){return e.h||(e.h=e.i())}function eX(){}eQ.prototype.h=null;var e3={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function eY(){D.call(this,"d")}function e6(){D.call(this,"c")}function eJ(){}function e5(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new eM(this),this.O=te,e=j?125:void 0,this.T=new eL(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new eZ}function eZ(){this.i=null,this.g="",this.h=!1}S(eY,D),S(e6,D),S(eJ,eQ),eJ.prototype.g=function(){return new XMLHttpRequest},eJ.prototype.i=function(){return{}},l=new eJ;var te=45e3,tt={},tn={};function tr(e,t,n){e.K=1,e.v=tb(tv(t)),e.s=n,e.P=!0,ti(e,null)}function ti(e,t){e.F=Date.now(),tl(e),e.A=tv(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),tx(n.i,"t",r),e.C=0,n=e.l.H,e.h=new eZ,e.g=nT(e.l,n?t:null,!e.s),0<e.N&&(e.L=new eP(k(e.Ka,e,e.g),e.N)),eV(e.S,e.g,"readystatechange",e.hb),t=e.H?ea(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),eK(1),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.u,e.A,e.m,e.U,e.s)}function ts(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function ta(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if((i=to(e,n))==tn){4==t&&(e.o=4,eG(14),r=!1),eq(e.j,e.m,null,"[Incomplete Response]");break}else if(i==tt){e.o=4,eG(15),eq(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else eq(e.j,e.m,i,null),tf(e,i);ts(e)&&i!=tn&&i!=tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,eG(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nv(t),t.K=!0,eG(11))):(eq(e.j,e.m,n,"[Invalid Chunked Response]"),td(e),tc(e))}function to(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?tn:isNaN(n=Number(t.substring(n,r)))?tt:(r+=1)+n>t.length?tn:(t=t.substr(r,n),e.C=r+n,t)}function tl(e){e.V=Date.now()+e.O,tu(e,e.O)}function tu(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=e2(k(e.fb,e),t)}function th(e){e.B&&($.clearTimeout(e.B),e.B=null)}function tc(e){0==e.l.G||e.I||nw(e.l,e)}function td(e){th(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,ex(e.T),eF(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tf(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||tB(n.h,e))){if(!e.J&&tB(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(i){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){a:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)n$(n),nu(n);else break a}nm(n),eG(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=e2(k(n.bb,n),6e3));if(1>=tF(n.h)&&n.ja){try{n.ja()}catch(a){}n.ja=void 0}}else nb(n,11)}else if((e.J||n.g==e)&&n$(n),!x(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let o=s[t];if(n.T=o[0],o=o[1],2==n.G){if("c"==o[0]){n.I=o[1],n.ka=o[2];let l=o[3];null!=l&&(n.ma=l,n.j.info("VER="+n.ma));let u=o[4];null!=u&&(n.Ca=u,n.j.info("SVER="+n.Ca));let h=o[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let c=e.g;if(c){let d=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var f=r.h;f.g||-1==d.indexOf("spdy")&&-1==d.indexOf("quic")&&-1==d.indexOf("h2")||(f.j=f.l,f.g=new Set,f.h&&(tq(f,f.h),f.h=null))}if(r.D){let p=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.za=p,t8(r.F,r.D,p))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var g=e;if(r.sa=nI(r,r.H?r.ka:null,r.V),g.J){tj(r.h,g);var m=g,v=r.J;v&&m.setTimeout(v),m.B&&(th(m),tl(m)),r.g=g}else ng(r);0<n.i.length&&nc(n)}else"stop"!=o[0]&&"close"!=o[0]||nb(n,7)}else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?nb(n,7):nl(n):"noop"!=o[0]&&n.l&&n.l.wa(o),n.A=0)}}eK(4)}catch(y){}}function tp(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(b(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(b(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(b(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(c=e5.prototype).setTimeout=function(e){this.O=e},c.hb=function(e){e=e.target;let t=this.L;t&&3==nn(e)?t.l():this.Ka(e)},c.Ka=function(e){try{if(e==this.g)a:{let t=nn(this.g);var n=this.g.Ea();let r=this.g.aa();if(!(3>t)&&(3!=t||j||this.g&&(this.h.h||this.g.fa()||nr(this.g)))){this.I||4!=t||7==n||(8==n||0>=r?eK(3):eK(2)),th(this);var i=this.g.aa();this.Y=i;b:if(ts(this)){var s=nr(this.g);e="";var a=s.length,o=4==nn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){td(this),tc(this);var l="";break b}this.h.i=new $.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(s[n],{stream:o&&n==a-1});s.splice(0,a),this.h.g+=e,this.C=0,l=this.h.g}else l=this.g.fa();if(this.i=200==i,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.U,t,i),this.i){if(this.Z&&!this.J){b:{if(this.g){var u,h=this.g;if((u=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(u)){var c=u;break b}}c=null}if(i=c)eq(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tf(this,i);else{this.i=!1,this.o=3,eG(12),td(this),tc(this);break a}}this.P?(ta(this,t,l),j&&this.i&&3==t&&(eV(this.S,this.T,"tick",this.gb),this.T.start())):(eq(this.j,this.m,l,null),tf(this,l)),4==t&&td(this),this.i&&!this.I&&(4==t?nw(this.l,this):(this.i=!1,tl(this)))}else 400==i&&0<l.indexOf("Unknown SID")?(this.o=3,eG(12)):(this.o=0,eG(13)),td(this),tc(this)}}}catch(d){}finally{}},c.gb=function(){if(this.g){var e=nn(this.g),t=this.g.fa();this.C<t.length&&(th(this),ta(this,e,t),this.i&&4!=e&&tl(this))}},c.cancel=function(){this.I=!0,td(this)},c.fb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(eK(3),eG(17)),td(this),this.o=2,tc(this)):tu(this,this.V-e)};var tg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tm(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof tm){this.h=void 0!==t?t:e.h,ty(this,e.j),this.s=e.s,this.g=e.g,t$(this,e.m),this.l=e.l,t=e.i;var n=new t_;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tw(this,n),this.o=e.o}else e&&(n=String(e).match(tg))?(this.h=!!t,ty(this,n[1]||"",!0),this.s=tE(n[2]||""),this.g=tE(n[3]||"",!0),t$(this,n[4]),this.l=tE(n[5]||"",!0),tw(this,n[6]||"",!0),this.o=tE(n[7]||"")):(this.h=!!t,this.i=new t_(null,this.h))}function tv(e){return new tm(e)}function ty(e,t,n){e.j=n?tE(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function t$(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tw(e,t,n){var r,i;t instanceof t_?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tN(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tD(this,t),tx(this,n,e))},r)),r.j=i):(n||(t=tI(t,tA)),e.i=new t_(t,e.h))}function t8(e,t,n){e.i.set(t,n)}function tb(e){return t8(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tE(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tI(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tT(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tm.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tI(t,tk,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tI(t,tk,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tI(n,"/"==n.charAt(0)?tS:tC,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tI(n,tR)),e.join("")};var tk=/[#\/\?@]/g,tC=/[#\?:]/g,tS=/[#\?]/g,tA=/[#\?@]/g,tR=/#/g;function t_(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tN(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tD(e,t){tN(e),t=tO(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tL(e,t){return tN(e),t=tO(e,t),e.g.has(t)}function tx(e,t,n){tD(e,t),0<n.length&&(e.i=null,e.g.set(tO(e,t),_(n)),e.h+=n.length)}function tO(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(c=t_.prototype).add=function(e,t){tN(this),this.i=null,e=tO(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},c.forEach=function(e,t){tN(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},c.oa=function(){tN(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n},c.W=function(e){tN(this);let t=[];if("string"==typeof e)tL(this,e)&&(t=t.concat(this.g.get(tO(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},c.set=function(e,t){return tN(this),this.i=null,tL(this,e=tO(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},c.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},c.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let i=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var a=i;""!==s[r]&&(a+="="+encodeURIComponent(String(s[r]))),e.push(a)}}return this.i=e.join("&")};var tP=class{constructor(e,t){this.h=e,this.g=t}};function tM(e){this.l=e||tU,e=$.PerformanceNavigationTiming?0<(e=$.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tU=10;function tV(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tF(e){return e.h?1:e.g?e.g.size:0}function tB(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tq(e,t){e.g?e.g.add(t):e.h=t}function tj(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function t0(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return _(e.i)}function tz(){}function tH(){this.g=new tz}function tK(e,t,n){let r=n||"";try{tp(e,function(e,n){let i=e;E(e)&&(i=eT(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function t9(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function tG(e){this.l=e.$b||null,this.j=e.ib||!1}function t1(e,t){eb.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=t2,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tM.prototype.cancel=function(){if(this.i=t0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},tz.prototype.stringify=function(e){return $.JSON.stringify(e,void 0)},tz.prototype.parse=function(e){return $.JSON.parse(e,void 0)},S(tG,eQ),tG.prototype.g=function(){return new t1(this.l,this.j)},tG.prototype.i=(i={},function(){return i}),S(t1,eb);var t2=0;function tW(e){e.j.read().then(e.Sa.bind(e)).catch(e.ga.bind(e))}function t4(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tQ(e)}function tQ(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(c=t1.prototype).open=function(e,t){if(this.readyState!=t2)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tQ(this)},c.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||$).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ga.bind(this))},c.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,t4(this)),this.readyState=t2},c.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tQ(this)),this.g&&(this.readyState=3,tQ(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(void 0!==$.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tW(this)}else e.text().then(this.Ua.bind(this),this.ga.bind(this))}},c.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?t4(this):tQ(this),3==this.readyState&&tW(this)}},c.Ua=function(e){this.g&&(this.response=this.responseText=e,t4(this))},c.Ta=function(e){this.g&&(this.response=e,t4(this))},c.ga=function(){this.g&&t4(this)},c.setRequestHeader=function(e,t){this.v.append(e,t)},c.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},c.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(t1.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var t7=$.JSON.parse;function tX(e){eb.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=t3,this.K=this.L=!1}S(tX,eb);var t3="",tY=/^https?$/i,t6=["POST","PUT"];function tJ(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t5(e),ne(e)}function t5(e){e.D||(e.D=!0,eE(e,"complete"),eE(e,"error"))}function tZ(e){if(e.h&&void 0!==y&&(!e.C[1]||4!=nn(e)||2!=e.aa())){if(e.v&&4==nn(e))eO(e.Ha,0,e);else if(eE(e,"readystatechange"),4==nn(e)){e.h=!1;try{let t=e.aa();a:switch(t){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n,r,i=!0;break a;default:i=!1}if(!(n=i)){if(r=0===t){var s=String(e.H).match(tg)[1]||null;if(!s&&$.self&&$.self.location){var a=$.self.location.protocol;s=a.substr(0,a.length-1)}r=!tY.test(s?s.toLowerCase():"")}n=r}if(n)eE(e,"complete"),eE(e,"success");else{e.m=6;try{var o=2<nn(e)?e.g.statusText:""}catch(l){o=""}e.j=o+" ["+e.aa()+"]",t5(e)}}finally{ne(e)}}}}function ne(e,t){if(e.g){nt(e);let n=e.g,r=e.C[0]?w:null;e.g=null,e.C=null,t||eE(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function nt(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&($.clearTimeout(e.A),e.A=null)}function nn(e){return e.g?e.g.readyState:0}function nr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case t3:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ni(e){let t="";return es(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function ns(e,t,n){a:{for(r in n){var r=!1;break a}r=!0}r||(n=ni(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):t8(e,t,n))}function na(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function no(e){this.Ca=0,this.i=[],this.j=new eB,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=na("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=na("baseRetryDelayMs",5e3,e),this.ab=na("retryDelaySeedMs",1e4,e),this.Za=na("forwardChannelMaxRetries",2,e),this.ta=na("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Yb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new tM(e&&e.concurrentRequestLimit),this.Fa=new tH,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=e&&e.Wb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function nl(e){if(nh(e),3==e.G){var t=e.U++,n=tv(e.F);t8(n,"SID",e.I),t8(n,"RID",t),t8(n,"TYPE","terminate"),nf(e,n),(t=new e5(e,e.j,t,void 0)).K=2,t.v=tb(tv(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(t.v.toString(),"")),!n&&$.Image&&((new Image).src=t.v,n=!0),n||(t.g=nT(t.l,null),t.g.da(t.v)),t.F=Date.now(),tl(t)}nE(e)}function nu(e){e.g&&(nv(e),e.g.cancel(),e.g=null)}function nh(e){nu(e),e.u&&($.clearTimeout(e.u),e.u=null),n$(e),e.h.cancel(),e.m&&("number"==typeof e.m&&$.clearTimeout(e.m),e.m=null)}function nc(e){tV(e.h)||e.m||(e.m=!0,eR(e.Ja,e),e.C=0)}function nd(e,t){var n;n=t?t.m:e.U++;let r=tv(e.F);t8(r,"SID",e.I),t8(r,"RID",n),t8(r,"AID",e.T),nf(e,r),e.o&&e.s&&ns(r,e.o,e.s),n=new e5(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=np(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),tq(e.h,n),tr(n,r,t)}function nf(e,t){e.ia&&es(e.ia,function(e,n){t8(t,n,e)}),e.l&&tp({},function(e,n){t8(t,n,e)})}function np(e,t,n){n=Math.min(e.i.length,n);var r=e.l?k(e.l.Qa,e.l,e):null;a:{var i=e.i;let s=-1;for(;;){let a=["count="+n];-1==s?0<n?(s=i[0].h,a.push("ofs="+s)):s=0:a.push("ofs="+s);let o=!0;for(let l=0;l<n;l++){let u=i[l].h,h=i[l].g;if(0>(u-=s))s=Math.max(0,i[l].h-100),o=!1;else try{tK(h,a,"req"+u+"_")}catch(c){r&&r(h)}}if(o){r=a.join("&");break a}}}return e=e.i.splice(0,n),t.D=e,r}function ng(e){e.g||e.u||(e.Z=1,eR(e.Ia,e),e.A=0)}function nm(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=e2(k(e.Ia,e),n8(e,e.A)),e.A++,!0)}function nv(e){null!=e.B&&($.clearTimeout(e.B),e.B=null)}function ny(e){e.g=new e5(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=tv(e.sa);t8(t,"RID","rpc"),t8(t,"SID",e.I),t8(t,"CI",e.L?"0":"1"),t8(t,"AID",e.T),t8(t,"TYPE","xmlhttp"),nf(e,t),e.o&&e.s&&ns(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=tb(tv(t)),n.s=null,n.P=!0,ti(n,e)}function n$(e){null!=e.v&&($.clearTimeout(e.v),e.v=null)}function nw(e,t){var n=null;if(e.g==t){n$(e),nv(e),e.g=null;var r=2}else{if(!tB(e.h,t))return;n=t.D,tj(e.h,t),r=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i,s,a=e.C;eE(r=ez(),new e1(r,n,t,a)),nc(e)}else ng(e)}else if(3==(a=t.o)||0==a&&0<e.pa||!(1==r&&(i=e,s=t,!(tF(i.h)>=i.h.j-(i.m?1:0))&&(i.m?(i.i=s.D.concat(i.i),!0):1!=i.G&&2!=i.G&&!(i.C>=(i.Ya?0:i.Za))&&(i.m=e2(k(i.Ja,i,s),n8(i,i.C)),i.C++,!0)))||2==r&&nm(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),a){case 1:nb(e,5);break;case 4:nb(e,10);break;case 3:nb(e,6);break;default:nb(e,2)}}}function n8(e,t){let n=e.Wa+Math.floor(Math.random()*e.ab);return e.l||(n*=2),n*t}function nb(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=k(e.jb,e);n||(n=new tm("//www.google.com/images/cleardot.gif"),$.location&&"http"==$.location.protocol||ty(n,"https"),tb(n)),function(e,t){let n=new eB;if($.Image){let r=new Image;r.onload=C(t9,n,r,"TestLoadImage: loaded",!0,t),r.onerror=C(t9,n,r,"TestLoadImage: error",!1,t),r.onabort=C(t9,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=C(t9,n,r,"TestLoadImage: timeout",!1,t),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else eG(2);e.G=0,e.l&&e.l.va(t),nE(e),nh(e)}function nE(e){if(e.G=0,e.la=[],e.l){let t=t0(e.h);(0!=t.length||0!=e.i.length)&&(N(e.la,t),N(e.la,e.i),e.h.i.length=0,_(e.i),e.i.length=0),e.l.ua()}}function nI(e,t,n){var r=n instanceof tm?tv(n):new tm(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),t$(r,r.m);else{var i=$.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new tm(null,void 0);r&&ty(s,r),t&&(s.g=t),i&&t$(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&t8(r,n,t),t8(r,"VER",e.ma),nf(e,r),r}function nT(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tX(n&&e.Da&&!e.ra?new tG({ib:!0}):e.ra)).L=e.H,t}function nk(){}function nC(){if(B&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function nS(e,t){eb.call(this),this.g=new no(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Xb)&&!x(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!x(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new n_(this)}function nA(e){eY.call(this);var t=e.__sm__;if(t){a:{for(let n in t){e=n;break a}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nR(){e6.call(this),this.status=1}function n_(e){this.g=e}(c=tX.prototype).da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():l.g(),this.C=this.u?e7(this.u):e7(l),this.g.onreadystatechange=k(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){tJ(this,i);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var a in r)n.set(a,r[a]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[u,h]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),a=$.FormData&&e instanceof $.FormData,!(0<=R(t6,t))||r||a||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(u,h);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var c,d,f;nt(this),0<this.B&&((this.K=(c=this.g,B&&(d=function(){let e=0,t=O(String(s)).split("."),n=O("9").split("."),r=Math.max(t.length,n.length);for(let i=0;0==e&&i<r;i++){var a=t[i]||"",o=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;e=P(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||P(0==a[2].length,0==o[2].length)||P(a[2],o[2]),a=a[3],o=o[3]}while(0==e)}return 0<=e},f=Y,Object.prototype.hasOwnProperty.call(f,9)?f[9]:f[9]=d(9))&&"number"==typeof c.timeout&&void 0!==c.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=k(this.qa,this)):this.A=eO(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(p){tJ(this,p)}},c.qa=function(){void 0!==y&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eE(this,"timeout"),this.abort(8))},c.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,eE(this,"complete"),eE(this,"abort"),ne(this))},c.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ne(this,!0)),tX.X.M.call(this)},c.Ha=function(){this.s||(this.F||this.v||this.l?tZ(this):this.eb())},c.eb=function(){tZ(this)},c.aa=function(){try{return 2<nn(this)?this.g.status:-1}catch(e){return -1}},c.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},c.Ra=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),t7(t)}},c.Ea=function(){return this.m},c.Na=function(){return"string"==typeof this.j?this.j:String(this.j)},(c=no.prototype).ma=8,c.G=1,c.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let t=new e5(this,this.j,e,void 0),n=this.s;if(this.S&&(n?el(n=ea(n),this.S):n=this.S),null!==this.o||this.N||(t.H=n,n=null),this.O)a:{for(var r=0,i=0;i<this.i.length;i++){b:{var s=this.i[i];if("__data__"in s.g&&"string"==typeof(s=s.g.__data__)){s=s.length;break b}s=void 0}if(void 0===s)break;if(4096<(r+=s)){r=i;break a}if(4096===r||i===this.i.length-1){r=i+1;break a}}r=1e3}else r=1e3;r=np(this,t,r),i=tv(this.F),t8(i,"RID",e),t8(i,"CVER",22),this.D&&t8(i,"X-HTTP-Session-Id",this.D),nf(this,i),n&&(this.N?r="headers="+encodeURIComponent(String(ni(n)))+"&"+r:this.o&&ns(i,this.o,n)),tq(this.h,t),this.Xa&&t8(i,"TYPE","init"),this.O?(t8(i,"$req",r),t8(i,"SID","null"),t.Z=!0,tr(t,i,null)):tr(t,i,r),this.G=2}}else 3==this.G&&(e?nd(this,e):0==this.i.length||tV(this.h)||nd(this))}},c.Ia=function(){if(this.u=null,ny(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=e2(k(this.cb,this),e)}},c.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,eG(10),nu(this),ny(this))},c.bb=function(){null!=this.v&&(this.v=null,nu(this),nm(this),eG(19))},c.jb=function(e){e?(this.j.info("Successfully pinged google.com"),eG(2)):(this.j.info("Failed to ping google.com"),eG(1))},(c=nk.prototype).xa=function(){},c.wa=function(){},c.va=function(){},c.ua=function(){},c.Qa=function(){},nC.prototype.g=function(e,t){return new nS(e,t)},S(nS,eb),nS.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;eG(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=nI(e,null,e.V),nc(e)},nS.prototype.close=function(){nl(this.g)},nS.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=eT(e),e=n);t.i.push(new tP(t.$a++,e)),3==t.G&&nc(t)},nS.prototype.M=function(){this.g.l=null,delete this.j,nl(this.g),delete this.g,nS.X.M.call(this)},S(nA,eY),S(nR,e6),S(n_,nk),n_.prototype.xa=function(){eE(this.g,"a")},n_.prototype.wa=function(e){eE(this.g,new nA(e))},n_.prototype.va=function(e){eE(this.g,new nR(e))},n_.prototype.ua=function(){eE(this.g,"b")},nC.prototype.createWebChannel=nC.prototype.g,nS.prototype.send=nS.prototype.u,nS.prototype.open=nS.prototype.m,nS.prototype.close=nS.prototype.close,eW.NO_ERROR=0,eW.TIMEOUT=8,eW.HTTP_ERROR=6,e4.COMPLETE="complete",eX.EventType=e3,e3.OPEN="a",e3.CLOSE="b",e3.ERROR="c",e3.MESSAGE="d",eb.prototype.listen=eb.prototype.N,tX.prototype.listenOnce=tX.prototype.O,tX.prototype.getLastError=tX.prototype.Na,tX.prototype.getLastErrorCode=tX.prototype.Ea,tX.prototype.getStatus=tX.prototype.aa,tX.prototype.getResponseJson=tX.prototype.Ra,tX.prototype.getResponseText=tX.prototype.fa,tX.prototype.send=tX.prototype.da;var nN=v.createWebChannelTransport=function(){return new nC},nD=v.getStatEventTarget=function(){return ez()},nL=v.ErrorCode=eW,nx=v.EventType=e4,nO=v.Event=ej,nP=v.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},nM=v.FetchXmlHttpFactory=tG,nU=v.WebChannel=eX,nV=v.XhrIo=tX;n(3454);let nF="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nB{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nB.UNAUTHENTICATED=new nB(null),nB.GOOGLE_CREDENTIALS=new nB("google-credentials-uid"),nB.FIRST_PARTY=new nB("first-party-uid"),nB.MOCK_USER=new nB("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nq="9.10.0",nj=new p.Yd("@firebase/firestore");function n0(){return nj.logLevel}function nz(e,...t){if(nj.logLevel<=p.in.DEBUG){let n=t.map(n9);nj.debug(`Firestore (${nq}): ${e}`,...n)}}function nH(e,...t){if(nj.logLevel<=p.in.ERROR){let n=t.map(n9);nj.error(`Firestore (${nq}): ${e}`,...n)}}function nK(e,...t){if(nj.logLevel<=p.in.WARN){let n=t.map(n9);nj.warn(`Firestore (${nq}): ${e}`,...n)}}function n9(e){var t;if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nG(e="Unexpected state"){let t=`FIRESTORE (${nq}) INTERNAL ASSERTION FAILED: `+e;throw nH(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let n1={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class n2 extends g.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nW{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n4{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nQ{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nB.UNAUTHENTICATED))}shutdown(){}}class n7{constructor(e){this.t=e,this.currentUser=nB.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new nW;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nW,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{nz("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(nz("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nW)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>{var n;return this.i!==e?(nz("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||nG(),new n4(t.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||nG(),new nB(e)}}class nX{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=nB.FIRST_PARTY,this.p=new Map}I(){var e;return this.g?this.g():(("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)&&nG(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class n3{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new nX(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(nB.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nY{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n6{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&nz("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,nz("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{nz("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):nz("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>{var t;return e?("string"==typeof e.token||nG(),this.A=e.token,new nY(e.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nJ(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n5{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=nJ(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function nZ(e,t){return e<t?-1:e>t?1:0}function re(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new n2(n1.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new n2(n1.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new rt(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?nZ(this.nanoseconds,e.nanoseconds):nZ(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rn{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rn(e)}static min(){return new rn(new rt(0,0))}static max(){return new rn(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rr{constructor(e,t,n){void 0===t?t=0:t>e.length&&nG(),void 0===n?n=e.length-t:n>e.length-t&&nG(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rr.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rr?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let i=e.get(r),s=t.get(r);if(i<s)return -1;if(i>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ri extends rr{construct(e,t,n){return new ri(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new n2(n1.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new ri(t)}static emptyPath(){return new ri([])}}let rs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ra extends rr{construct(e,t,n){return new ra(e,t,n)}static isValidIdentifier(e){return rs.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ra.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ra(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new n2(n1.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let a=e[r];if("\\"===a){if(r+1===e.length)throw new n2(n1.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[r+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new n2(n1.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=o,r+=2}else"`"===a?(s=!s,r++):"."!==a||s?(n+=a,r++):(i(),r++)}if(i(),s)throw new n2(n1.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ra(t)}static emptyPath(){return new ra([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ro{constructor(e){this.path=e}static fromPath(e){return new ro(ri.fromString(e))}static fromName(e){return new ro(ri.fromString(e).popFirst(5))}static empty(){return new ro(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ri.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ri.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ro(new ri(e.slice()))}}function rl(e){return new ru(e.readTime,e.key,-1)}class ru{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ru(rn.min(),ro.empty(),-1)}static max(){return new ru(rn.max(),ro.empty(),-1)}}function rh(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=ro.comparator(e.documentKey,t.documentKey))?n:nZ(e.largestBatchId,t.largestBatchId)}class rc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rd(e){if(e.code!==n1.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;nz("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rf{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&nG(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rf((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rf?t:rf.resolve(t)}catch(n){return rf.reject(n)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rf.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rf.reject(t)}static resolve(e){return new rf((t,n)=>{t(e)})}static reject(e){return new rf((t,n)=>{n(e)})}static waitFor(e){return new rf((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=rf.resolve(!1);for(let n of e)t=t.next(e=>e?rf.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new rf((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new rf((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function rp(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rg{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rm(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rv(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ry(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ rg.at=-1;class r${constructor(e,t){this.comparator=e,this.root=t||r8.EMPTY}insert(e,t){return new r$(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,r8.BLACK,null,null))}remove(e){return new r$(this.comparator,this.root.remove(e,this.comparator).copy(null,null,r8.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rw(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rw(this.root,e,this.comparator,!1)}getReverseIterator(){return new rw(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rw(this.root,e,this.comparator,!0)}}class rw{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class r8{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:r8.RED,this.left=null!=r?r:r8.EMPTY,this.right=null!=i?i:r8.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new r8(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return r8.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return r8.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,r8.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,r8.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nG();let e=this.left.check();if(e!==this.right.check())throw nG();return e+(this.isRed()?0:1)}}r8.EMPTY=null,r8.RED=!0,r8.BLACK=!1,r8.EMPTY=new class{constructor(){this.size=0}get key(){throw nG()}get value(){throw nG()}get color(){throw nG()}get left(){throw nG()}get right(){throw nG()}copy(e,t,n,r,i){return this}insert(e,t,n){return new r8(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rb{constructor(e){this.comparator=e,this.data=new r$(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rE(this.data.getIterator())}getIteratorFrom(e){return new rE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rb)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(r,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rb(this.comparator);return t.data=e,t}}class rE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rI{constructor(e){this.fields=e,e.sort(ra.comparator)}static empty(){return new rI([])}unionWith(e){let t=new rb(ra.comparator);for(let n of this.fields)t=t.add(n);for(let r of e)t=t.add(r);return new rI(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return re(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rT{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new rT(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new rT(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return nZ(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rT.EMPTY_BYTE_STRING=new rT("");let rk=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rC(e){if(!e&&nG(),"string"==typeof e){let t=0,n=rk.exec(e);if(!n&&nG(),n[1]){let r=n[1];t=Number(r=(r+"000000000").substr(0,9))}let i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rS(e.seconds),nanos:rS(e.nanos)}}function rS(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rA(e){return"string"==typeof e?rT.fromBase64String(e):rT.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rR(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function r_(e){let t=rC(e.mapValue.fields.__local_write_time__.timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rN{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class rD{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rD("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rD&&e.projectId===this.projectId&&e.database===this.database}}function rL(e){return null==e}function rx(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rO={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rP(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rR(e)?4:r9(e)?9007199254740991:10:nG()}function rM(e,t){var n,r,i,s;if(e===t)return!0;let a=rP(e);if(a!==rP(t))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return r_(e).isEqual(r_(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rC(e.timestampValue),r=rC(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=e,r=t,rA(n.bytesValue).isEqual(rA(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return i=e,s=t,rS(i.geoPointValue.latitude)===rS(s.geoPointValue.latitude)&&rS(i.geoPointValue.longitude)===rS(s.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rS(e.integerValue)===rS(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=rS(e.doubleValue),r=rS(t.doubleValue);return n===r?rx(n)===rx(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return re(e.arrayValue.values||[],t.arrayValue.values||[],rM);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(rm(n)!==rm(r))return!1;for(let i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!rM(n[i],r[i])))return!1;return!0}(e,t);default:return nG()}}function rU(e,t){return void 0!==(e.values||[]).find(e=>rM(e,t))}function rV(e,t){if(e===t)return 0;let n=rP(e),r=rP(t);if(n!==r)return nZ(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return nZ(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=rS(e.integerValue||e.doubleValue),r=rS(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return rF(e.timestampValue,t.timestampValue);case 4:return rF(r_(e),r_(t));case 5:return nZ(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rA(e),r=rA(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){let s=nZ(n[i],r[i]);if(0!==s)return s}return nZ(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=nZ(rS(e.latitude),rS(t.latitude));return 0!==n?n:nZ(rS(e.longitude),rS(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){let s=rV(n[i],r[i]);if(s)return s}return nZ(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===rO.mapValue&&t===rO.mapValue)return 0;if(e===rO.mapValue)return 1;if(t===rO.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){let o=nZ(r[a],s[a]);if(0!==o)return o;let l=rV(n[r[a]],i[s[a]]);if(0!==l)return l}return nZ(r.length,s.length)}(e.mapValue,t.mapValue);default:throw nG()}}function rF(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return nZ(e,t);let n=rC(e),r=rC(t),i=nZ(n.seconds,r.seconds);return 0!==i?i:nZ(n.nanos,r.nanos)}function rB(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rC(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rA(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ro.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=rB(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${rB(e.fields[i])}`;return n+"}"}(e.mapValue):nG()}function rq(e){return!!e&&"integerValue"in e}function rj(e){return!!e&&"arrayValue"in e}function r0(e){return!!e&&"nullValue"in e}function rz(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rH(e){return!!e&&"mapValue"in e}function rK(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rv(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rK(n)),t}if(e.arrayValue){let n={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=rK(e.arrayValue.values[r]);return n}return Object.assign({},e)}function r9(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rG{constructor(e){this.value=e}static empty(){return new rG({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!rH(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rK(t)}setAll(e){let t=ra.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let s=this.getFieldsMap(t);this.applyChanges(s,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rK(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());rH(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rM(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];rH(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(rv(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new rG(rK(this.value))}}function r1(e){let t=[];return rv(e.fields,(e,n)=>{let r=new ra([e]);if(rH(n)){let i=r1(n.mapValue).fields;if(0===i.length)t.push(r);else for(let s of i)t.push(r.child(s))}else t.push(r)}),new rI(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r2{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new r2(e,0,rn.min(),rn.min(),rG.empty(),0)}static newFoundDocument(e,t,n){return new r2(e,1,t,rn.min(),n,0)}static newNoDocument(e,t){return new r2(e,2,t,rn.min(),rG.empty(),0)}static newUnknownDocument(e,t){return new r2(e,3,t,rn.min(),rG.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rG.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rG.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rn.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof r2&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new r2(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rW{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ht=null}}function r4(e,t=null,n=[],r=[],i=null,s=null,a=null){return new rW(e,t,n,r,i,s,a)}function rQ(e){var t;let n=t=e;if(null===n.ht){let r=n.path.canonicalString();null!==n.collectionGroup&&(r+="|cg:"+n.collectionGroup),r+="|f:",r+=n.filters.map(e=>{var t,n;return(t=e).field.canonicalString()+t.op.toString()+rB(n=t.value)}).join(","),r+="|ob:",r+=n.orderBy.map(e=>{var t;return(t=e).field.canonicalString()+t.dir}).join(","),rL(n.limit)||(r+="|l:",r+=n.limit),n.startAt&&(r+="|lb:",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(e=>{var t;return rB(t=e)}).join(",")),n.endAt&&(r+="|ub:",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(e=>{var t;return rB(t=e)}).join(",")),n.ht=r}return n.ht}function r7(e,t){var n,r;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!ia(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!rM(n.value,r.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!il(e.startAt,t.startAt)&&il(e.endAt,t.endAt)}function rX(e){return ro.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class r3 extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new rY(e,t,n):"array-contains"===t?new rZ(e,n):"in"===t?new ie(e,n):"not-in"===t?new it(e,n):"array-contains-any"===t?new ir(e,n):new r3(e,t,n)}static lt(e,t,n){return"in"===t?new r6(e,n):new rJ(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(rV(t,this.value)):null!==t&&rP(this.value)===rP(t)&&this.ft(rV(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return nG()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class rY extends r3{constructor(e,t,n){super(e,t,n),this.key=ro.fromName(n.referenceValue)}matches(e){let t=ro.comparator(e.key,this.key);return this.ft(t)}}class r6 extends r3{constructor(e,t){super(e,"in",t),this.keys=r5("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rJ extends r3{constructor(e,t){super(e,"not-in",t),this.keys=r5("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function r5(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ro.fromName(e.referenceValue))}class rZ extends r3{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rj(t)&&rU(t.arrayValue,this.value)}}class ie extends r3{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rU(this.value.arrayValue,t)}}class it extends r3{constructor(e,t){super(e,"not-in",t)}matches(e){if(rU(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rU(this.value.arrayValue,t)}}class ir extends r3{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rj(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rU(this.value.arrayValue,e))}}class ii{constructor(e,t){this.position=e,this.inclusive=t}}class is{constructor(e,t="asc"){this.field=e,this.dir=t}}function ia(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function io(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?ro.comparator(ro.fromName(a.referenceValue),n.key):rV(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function il(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rM(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iu{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function ih(e){return new iu(e)}function ic(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function id(e){var t,n;let r=t=e;if(null===r._t){r._t=[];let i=function(e){for(let t of e.filters)if(t.dt())return t.field;return null}(r),s=(n=r).explicitOrderBy.length>0?n.explicitOrderBy[0].field:null;if(null!==i&&null===s)i.isKeyField()||r._t.push(new is(i)),r._t.push(new is(ra.keyField(),"asc"));else{let a=!1;for(let o of r.explicitOrderBy)r._t.push(o),o.field.isKeyField()&&(a=!0);if(!a){let l=r.explicitOrderBy.length>0?r.explicitOrderBy[r.explicitOrderBy.length-1].dir:"asc";r._t.push(new is(ra.keyField(),l))}}}return r._t}function ip(e){var t;let n=t=e;if(!n.wt){if("F"===n.limitType)n.wt=r4(n.path,n.collectionGroup,id(n),n.filters,n.limit,n.startAt,n.endAt);else{let r=[];for(let i of id(n)){let s="desc"===i.dir?"asc":"desc";r.push(new is(i.field,s))}let a=n.endAt?new ii(n.endAt.position,n.endAt.inclusive):null,o=n.startAt?new ii(n.startAt.position,n.startAt.inclusive):null;n.wt=r4(n.path,n.collectionGroup,r,n.filters,n.limit,a,o)}}return n.wt}function ig(e,t,n){return new iu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function im(e,t){return r7(ip(e),ip(t))&&e.limitType===t.limitType}function iv(e){return`${rQ(ip(e))}|lt:${e.limitType}`}function iy(e){var t;let n;return`Query(target=${n=(t=ip(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>{var t,n;return`${(t=e).field.canonicalString()} ${t.op} ${rB(n=t.value)}`}).join(", ")}]`),rL(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>{var t;return t=e,`${t.field.canonicalString()} (${t.dir})`}).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>{var t;return rB(t=e)}).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>{var t;return rB(t=e)}).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function i$(e,t){var n,r;return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ro.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(n=e,r=t,(!n.startAt||!!function(e,t,n){let r=io(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,id(n),r))&&(!n.endAt||!!function(e,t,n){let r=io(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,id(n),r)))}function iw(e){return(t,n)=>{let r=!1;for(let i of id(e)){let s=i8(i,t,n);if(0!==s)return s;r=r||i.field.isKeyField()}return 0}}function i8(e,t,n){let r=e.field.isKeyField()?ro.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?rV(r,i):nG()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return nG()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ib(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rx(t)?"-0":t}}function iE(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iI{constructor(){this._=void 0}}function iT(e,t,n){return e instanceof iS?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof iA?iR(e,t):e instanceof i_?iN(e,t):function(e,t){let n=iC(e,t),r=iL(n)+iL(e.yt);return rq(n)&&rq(e.yt)?iE(r):ib(e.It,r)}(e,t)}function ik(e,t,n){return e instanceof iA?iR(e,t):e instanceof i_?iN(e,t):n}function iC(e,t){var n,r;return e instanceof iD?rq(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}class iS extends iI{}class iA extends iI{constructor(e){super(),this.elements=e}}function iR(e,t){let n=ix(t);for(let r of e.elements)n.some(e=>rM(e,r))||n.push(r);return{arrayValue:{values:n}}}class i_ extends iI{constructor(e){super(),this.elements=e}}function iN(e,t){let n=ix(t);for(let r of e.elements)n=n.filter(e=>!rM(e,r));return{arrayValue:{values:n}}}class iD extends iI{constructor(e,t){super(),this.It=e,this.yt=t}}function iL(e){return rS(e.integerValue||e.doubleValue)}function ix(e){return rj(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iO{constructor(e,t){this.field=e,this.transform=t}}class iP{constructor(e,t){this.version=e,this.transformResults=t}}class iM{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new iM}static exists(e){return new iM(void 0,e)}static updateTime(e){return new iM(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iU(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class iV{}function iF(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new i1(e.key,iM.none()):new iz(e.key,e.data,iM.none());{let n=e.data,r=rG.empty(),i=new rb(ra.comparator);for(let s of t.fields)if(!i.has(s)){let a=n.field(s);null===a&&s.length>1&&(s=s.popLast(),a=n.field(s)),null===a?r.delete(s):r.set(s,a),i=i.add(s)}return new iH(e.key,r,new rI(i.toArray()),iM.none())}}function iB(e,t,n){e instanceof iz?function(e,t,n){let r=e.value.clone(),i=i9(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof iH?function(e,t,n){if(!iU(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=i9(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(iK(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function iq(e,t,n,r){var i,s,a;return e instanceof iz?function(e,t,n,r){if(!iU(e.precondition,t))return n;let i=e.value.clone(),s=iG(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof iH?function(e,t,n,r){if(!iU(e.precondition,t))return n;let i=iG(e.fieldTransforms,r,t),s=t.data;return(s.setAll(iK(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(i=e,s=t,a=n,iU(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a)}function ij(e,t){let n=null;for(let r of e.fieldTransforms){let i=t.data.field(r.field),s=iC(r.transform,i||null);null!=s&&(null===n&&(n=rG.empty()),n.set(r.field,s))}return n||null}function i0(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&re(n,r,(e,t)=>{var n,r,i,s;return n=e,r=t,n.field.isEqual(r.field)&&(i=n.transform,s=r.transform,i instanceof iA&&s instanceof iA||i instanceof i_&&s instanceof i_?re(i.elements,s.elements,rM):i instanceof iD&&s instanceof iD?rM(i.yt,s.yt):i instanceof iS&&s instanceof iS)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class iz extends iV{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class iH extends iV{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iK(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function i9(e,t,n){var r;let i=new Map;(r=e.length===n.length)||nG();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,ik(o,l,n[s]))}return i}function iG(e,t,n){let r=new Map;for(let i of e){let s=i.transform,a=n.data.field(i.field);r.set(i.field,iT(s,a,t))}return r}class i1 extends iV{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i2 extends iV{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iW{constructor(e){this.count=e}}function i4(e){if(void 0===e)return nH("GRPC error has no .code"),n1.UNKNOWN;switch(e){case u.OK:return n1.OK;case u.CANCELLED:return n1.CANCELLED;case u.UNKNOWN:return n1.UNKNOWN;case u.DEADLINE_EXCEEDED:return n1.DEADLINE_EXCEEDED;case u.RESOURCE_EXHAUSTED:return n1.RESOURCE_EXHAUSTED;case u.INTERNAL:return n1.INTERNAL;case u.UNAVAILABLE:return n1.UNAVAILABLE;case u.UNAUTHENTICATED:return n1.UNAUTHENTICATED;case u.INVALID_ARGUMENT:return n1.INVALID_ARGUMENT;case u.NOT_FOUND:return n1.NOT_FOUND;case u.ALREADY_EXISTS:return n1.ALREADY_EXISTS;case u.PERMISSION_DENIED:return n1.PERMISSION_DENIED;case u.FAILED_PRECONDITION:return n1.FAILED_PRECONDITION;case u.ABORTED:return n1.ABORTED;case u.OUT_OF_RANGE:return n1.OUT_OF_RANGE;case u.UNIMPLEMENTED:return n1.UNIMPLEMENTED;case u.DATA_LOSS:return n1.DATA_LOSS;default:return nG()}}(h=u||(u={}))[h.OK=0]="OK",h[h.CANCELLED=1]="CANCELLED",h[h.UNKNOWN=2]="UNKNOWN",h[h.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",h[h.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",h[h.NOT_FOUND=5]="NOT_FOUND",h[h.ALREADY_EXISTS=6]="ALREADY_EXISTS",h[h.PERMISSION_DENIED=7]="PERMISSION_DENIED",h[h.UNAUTHENTICATED=16]="UNAUTHENTICATED",h[h.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",h[h.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",h[h.ABORTED=10]="ABORTED",h[h.OUT_OF_RANGE=11]="OUT_OF_RANGE",h[h.UNIMPLEMENTED=12]="UNIMPLEMENTED",h[h.INTERNAL=13]="INTERNAL",h[h.UNAVAILABLE=14]="UNAVAILABLE",h[h.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iQ{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rv(this.inner,(t,n)=>{for(let[r,i]of n)e(r,i)})}isEmpty(){return ry(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i7=new r$(ro.comparator),iX=new r$(ro.comparator);function i3(...e){let t=iX;for(let n of e)t=t.insert(n.key,n);return t}function iY(e){let t=iX;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function i6(){return i5()}function iJ(){return i5()}function i5(){return new iQ(e=>e.toString(),(e,t)=>e.isEqual(t))}let iZ=new r$(ro.comparator),se=new rb(ro.comparator);function st(...e){let t=se;for(let n of e)t=t.add(n);return t}let sn=new rb(nZ);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){let n=new Map;return n.set(e,si.createSynthesizedTargetChangeForCurrentChange(e,t)),new sr(rn.min(),n,sn,i7,st())}}class si{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new si(rT.EMPTY_BYTE_STRING,t,st(),st(),st())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ss{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class sa{constructor(e,t){this.targetId=e,this.At=t}}class so{constructor(e,t,n=rT.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class sl{constructor(){this.Rt=0,this.bt=sc(),this.Pt=rT.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=st(),t=st(),n=st();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:nG()}}),new si(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=sc()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class su{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=i7,this.qt=sh(),this.Kt=new rb(nZ)}Gt(e){for(let t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(let n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{let n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:nG()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((e,n)=>{this.Ht(n)&&t(n)})}Yt(e){let t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){let i=r.target;if(rX(i)){if(0===n){let s=new ro(i.path);this.jt(t,s,r2.newNoDocument(s,rn.min()))}else{var a;(a=1===n)||nG()}}else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){let t=new Map;this.Lt.forEach((n,r)=>{let i=this.Xt(r);if(i){if(n.current&&rX(i.target)){let s=new ro(i.target.path);null!==this.Ut.get(s)||this.ee(r,s)||this.jt(r,s,r2.newNoDocument(s,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}});let n=st();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Ut.forEach((t,n)=>n.setReadTime(e));let r=new sr(e,t,this.Kt,this.Ut,n);return this.Ut=i7,this.qt=sh(),this.Kt=new rb(nZ),r}Qt(e,t){if(!this.Ht(e))return;let n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;let r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Mt(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){let t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let t=this.Lt.get(e);return t||(t=new sl,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new rb(nZ),this.qt=this.qt.insert(e,t)),t}Ht(e){let t=null!==this.Xt(e);return t||nz("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){let t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new sl),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function sh(){return new r$(ro.comparator)}function sc(){return new r$(ro.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let sd={asc:"ASCENDING",desc:"DESCENDING"},sf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class sp{constructor(e,t){this.databaseId=e,this.gt=t}}function sg(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sm(e,t){return e.gt?t.toBase64():t.toUint8Array()}function sv(e){return!e&&nG(),rn.fromTimestamp(function(e){let t=rC(e);return new rt(t.seconds,t.nanos)}(e))}function sy(e,t){var n;return(n=e,new ri(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString()}function s$(e){var t;let n=ri.fromString(e);return sS(n)||nG(),n}function sw(e,t){return sy(e.databaseId,t.path)}function s8(e,t){let n=s$(t);if(n.get(1)!==e.databaseId.projectId)throw new n2(n1.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new n2(n1.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ro(sI(n))}function sb(e,t){return sy(e.databaseId,t)}function sE(e){return new ri(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sI(e){var t;return e.length>4&&"documents"===e.get(4)||nG(),e.popFirst(5)}function sT(e,t,n){return{name:sw(e,t),fields:n.value.mapValue.fields}}function sk(e){return{fieldPath:e.canonicalString()}}function sC(e){return ra.fromServerFormat(e.fieldPath)}function sS(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sA{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let i=this.mutations[r];i.key.isEqual(e.key)&&iB(i,e,n[r])}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=iq(n,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=iq(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=iJ();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=iF(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(rn.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),st())}isEqual(e){return this.batchId===e.batchId&&re(this.mutations,e.mutations,(e,t)=>i0(e,t))&&re(this.baseMutations,e.baseMutations,(e,t)=>i0(e,t))}}class sR{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){var r;(r=e.mutations.length===n.length)||nG();let i=iZ,s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new sR(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sN{constructor(e,t,n,r,i=rn.min(),s=rn.min(),a=rT.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new sN(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new sN(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sN(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sD{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(rS(e.integerValue));else if("doubleValue"in e){let n=rS(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),rx(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){let r=e.timestampValue;this.le(t,20),"string"==typeof r?t.de(r):(t.de(`${r.seconds||""}`),t.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(rA(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.le(t,45),t.fe(i.latitude||0),t.fe(i.longitude||0)}else"mapValue"in e?r9(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):nG()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){let n=e.fields||{};for(let r of(this.le(t,55),Object.keys(n)))this._e(r,t),this.ae(n[r],t)}pe(e,t){let n=e.values||[];for(let r of(this.le(t,50),n))this.ae(r,t)}ge(e,t){this.le(t,37),ro.fromName(e).path.forEach(e=>{this.le(t,60),this.Ie(e,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}sD.Te=new sD;new Uint8Array(0);class sL{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new sL(e,sL.DEFAULT_COLLECTION_PERCENTILE,sL.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ sL.DEFAULT_COLLECTION_PERCENTILE=10,sL.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sL.DEFAULT=new sL(41943040,sL.DEFAULT_COLLECTION_PERCENTILE,sL.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sL.DISABLED=new sL(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sx{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new sx(0)}static vn(){return new sx(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sO{constructor(){this.changes=new iQ(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,r2.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rf.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sM{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.getBaseDocument(e,t,n))).next(e=>(null!==n&&iq(n.mutation,e,rI.empty(),rt.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,st()).next(()=>t))}getLocalViewOfDocuments(e,t,n=st()){let r=i6();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=i3();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=i6();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,st()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=i7,s=i5(),a=i5();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof iH)?i=i.insert(t.key,t):void 0!==a&&(s.set(t.key,a.mutation.getFieldMask()),iq(a.mutation,t,a.mutation.getFieldMask(),rt.now()))}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new sP(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=i5(),r=new r$((e,t)=>e-t),i=st();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||rI.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||st()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let o=a.getNext(),l=o.key,u=o.value,h=iJ();u.forEach(e=>{if(!i.has(e)){let r=iF(t.get(e),n.get(e));null!==r&&h.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,l,h))}return rf.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){var r,i;return(r=t,ro.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length)?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==(i=t).collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):rf.resolve(i6()),a=-1,o=i;return s.next(t=>rf.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?rf.resolve():this.getBaseDocument(e,t,n).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,st())).next(e=>({batchId:a,changes:iY(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ro(t)).next(e=>{let t=i3();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=i3();return this.indexManager.getCollectionParents(e,r).next(s=>rf.forEach(s,s=>{var a,o;let l=(a=t,o=s.child(r),new iu(o,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId))).next(e=>{e.forEach((e,t)=>{let n=t.getKey();null===r.get(n)&&(r=r.insert(n,r2.newInvalidDocument(n)))});let n=i3();return r.forEach((r,i)=>{let s=e.get(r);void 0!==s&&iq(s.mutation,i,rI.empty(),rt.now()),i$(t,i)&&(n=n.insert(r,i))}),n})}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):rf.resolve(r2.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sU{constructor(){this.overlays=new r$(ro.comparator),this.es=new Map}getOverlay(e,t){return rf.resolve(this.overlays.get(t))}getOverlays(e,t){let n=i6();return rf.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ue(e,t,r)}),rf.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),rf.resolve()}getOverlaysForCollection(e,t,n){let r=i6(),i=t.length+1,s=new ro(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let o=a.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&o.largestBatchId>n&&r.set(o.getKey(),o)}return rf.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new r$((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let a=s.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>n){let o=i.get(a.largestBatchId);null===o&&(o=i6(),i=i.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let l=i6(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=r)););return rf.resolve(l)}ue(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let i=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new s_(t,n));let s=this.es.get(t);void 0===s&&(s=st(),this.es.set(t,s)),this.es.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sV{constructor(){this.ns=new rb(sF.ss),this.rs=new rb(sF.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new sF(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new sF(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new ro(new ri([])),n=new sF(t,e),r=new sF(t,e+1),i=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new ro(new ri([])),n=new sF(t,e),r=new sF(t,e+1),i=st();return this.rs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sF(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class sF{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return ro.comparator(e.key,t.key)||nZ(e._s,t._s)}static os(e,t){return nZ(e._s,t._s)||ro.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sB{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new rb(sF.ss)}checkEmpty(e){return rf.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new sA(i,t,n,r);for(let a of(this.mutationQueue.push(s),r))this.gs=this.gs.add(new sF(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return rf.resolve(s)}lookupMutationBatch(e,t){return rf.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),r=n<0?0:n;return rf.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return rf.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return rf.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new sF(t,0),r=new sF(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],e=>{let t=this.ys(e._s);i.push(t)}),rf.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rb(nZ);return t.forEach(e=>{let t=new sF(e,0),r=new sF(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),rf.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;ro.isDocumentKey(i)||(i=i.child(""));let s=new sF(new ro(i),0),a=new rb(nZ);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e._s)),!0)},s),rf.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){var n;0===this.Ts(t.batchId,"removed")||nG(),this.mutationQueue.shift();let r=this.gs;return rf.forEach(t.mutations,n=>{let i=new sF(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,t){let n=new sF(t,0),r=this.gs.firstAfterOrEqual(n);return rf.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,rf.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}class sq extends sO{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),rf.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sj{constructor(e,t){var n;this.Vs={},this.overlays={},this.Ss=new rg(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(e){this.persistence=e,this.Rs=new iQ(e=>rQ(e),r7),this.lastRemoteSnapshotVersion=rn.min(),this.highestTargetId=0,this.bs=0,this.Ps=new sV,this.targetCount=0,this.vs=sx.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),rf.resolve()}getLastRemoteSnapshotVersion(e){return rf.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rf.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),rf.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),rf.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new sx(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,rf.resolve()}updateTargetData(e,t){return this.Dn(t),rf.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,rf.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),rf.waitFor(i).next(()=>r)}getTargetCount(e){return rf.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return rf.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),rf.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),rf.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),rf.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return rf.resolve(n)}containsKey(e,t){return rf.resolve(this.Ps.containsKey(t))}}(this),this.indexManager=new /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(){this.Ye=new class e{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new rb(ri.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new rb(ri.comparator)).toArray()}}}addToCollectionParentIndex(e,t){return this.Ye.add(t),rf.resolve()}getCollectionParents(e,t){return rf.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return rf.resolve()}deleteFieldIndex(e,t){return rf.resolve()}getDocumentsMatchingTarget(e,t){return rf.resolve(null)}getIndexType(e,t){return rf.resolve(0)}getFieldIndexes(e,t){return rf.resolve([])}getNextCollectionGroupToUpdate(e){return rf.resolve(null)}getMinOffset(e,t){return rf.resolve(ru.min())}getMinOffsetFromCollectionGroup(e,t){return rf.resolve(ru.min())}updateCollectionGroup(e,t,n){return rf.resolve()}updateIndexEntries(e,t){return rf.resolve()}},this.remoteDocumentCache=(n=e=>this.referenceDelegate.xs(e),new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e{constructor(e){this.Es=e,this.docs=new r$(ro.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rf.resolve(n?n.document.mutableCopy():r2.newInvalidDocument(t))}getEntries(e,t){let n=i7;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():r2.newInvalidDocument(e))}),rf.resolve(n)}getAllFromCollection(e,t,n){let r=i7,i=new ro(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){let{key:a,value:{document:o}}=s.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||0>=rh(rl(o),n)||(r=r.insert(o.key,o.mutableCopy()))}return rf.resolve(r)}getAllFromCollectionGroup(e,t,n,r){nG()}As(e,t){return rf.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sq(this)}getSize(e){return rf.resolve(this.size)}}(n)),this.It=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(e){this.re=e}}(t),this.Ns=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return rf.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:sv(n.createTime)}),rf.resolve()}getNamedQuery(e,t){return rf.resolve(this.ts.get(t))}saveNamedQuery(e,t){var n;return this.ts.set(t.name,{name:(n=t).name,query:function(e){let t=function(e){var t,n,r,i,s,a,o,l,u;let h=function(e){let t=s$(e);return 4===t.length?ri.emptyPath():sI(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){(t=1===d)||nG();let p=c.from[0];p.allDescendants?f=p.collectionId:h=h.child(p.collectionId)}let g=[];c.where&&(g=function e(t){var n;return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sC(e.unaryFilter.field);return r3.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=sC(e.unaryFilter.field);return r3.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=sC(e.unaryFilter.field);return r3.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sC(e.unaryFilter.field);return r3.create(i,"!=",{nullValue:"NULL_VALUE"});default:return nG()}}(t)]:void 0!==t.fieldFilter?[(n=t,r3.create(sC(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nG()}}(n.fieldFilter.op),n.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):nG():[]}(c.where));let m=[];c.orderBy&&(m=c.orderBy.map(e=>{var t;return t=e,new is(sC(t.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}));let v=null,y;c.limit&&(v=rL(y="object"==typeof(n=c.limit)?n.value:n)?null:y);let $=null;c.startAt&&($=function(e){let t=!!e.before,n=e.values||[];return new ii(n,t)}(c.startAt));let w=null;return c.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new ii(n,t)}(c.endAt)),r=h,i=f,s=m,a=g,o=v,l=$,u=w,new iu(r,i,s,a,o,"F",l,u)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ig(t,t.limit,"L"):t}(n.bundledQuery),readTime:sv(n.readTime)}),rf.resolve()}}(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sU,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new sB(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){nz("MemoryPersistence","Starting transaction:",e);let r=new s0(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Ms(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Os(e,t){return rf.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class s0 extends rc{constructor(e){super(),this.currentSequenceNumber=e}}class sz{constructor(e){this.persistence=e,this.Fs=new sV,this.$s=null}static Bs(e){return new sz(e)}get Ls(){if(this.$s)return this.$s;throw nG()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),rf.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),rf.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),rf.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Ms(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rf.forEach(this.Ls,n=>{let r=ro.fromPath(n);return this.Us(e,r).next(e=>{e||t.removeEntry(r,rn.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return rf.or([()=>rf.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sH{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=st(),r=st();for(let i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new sH(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sK{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(i=>i||this.Mi(e,t,r,n)).next(n=>n||this.Oi(e,t))}ki(e,t){if(ic(t))return rf.resolve(null);let n=ip(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=ig(t,null,"F"),n=ip(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=st(...r);return this.Ni.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,ig(t,null,"F")):this.Bi(e,s,t,n)}))})))}Mi(e,t,n,r){return ic(t)||r.isEqual(rn.min())?this.Oi(e,t):this.Ni.getDocuments(e,n).next(i=>{let s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Oi(e,t):(n0()<=p.in.DEBUG&&nz("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),iy(t)),this.Bi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=rn.fromTimestamp(1e9===r?new rt(n+1,0):new rt(n,r));return new ru(i,ro.empty(),-1)}(r,-1)))})}Fi(e,t){let n=new rb(iw(e));return t.forEach((t,r)=>{i$(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return n0()<=p.in.DEBUG&&nz("QueryEngine","Using full collection scan to execute query:",iy(t)),this.Ni.getDocumentsMatchingQuery(e,t,ru.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s9{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new r$(nZ),this.qi=new iQ(e=>rQ(e),r7),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sM(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}async function sG(e,t){var n;let r=n=e;return await r.persistence.runTransaction("Handle user change","readonly",e=>{let n;return r.mutationQueue.getAllMutationBatches(e).next(i=>(n=i,r.Qi(t),r.mutationQueue.getAllMutationBatches(e))).next(t=>{let i=[],s=[],a=st();for(let o of n)for(let l of(i.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let h of(s.push(u.batchId),u.mutations))a=a.add(h.key);return r.localDocuments.getDocuments(e,a).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:s}))})})}function s1(e){var t;let n=t=e;return n.persistence.runTransaction("Get last remote snapshot version","readonly",e=>n.Cs.getLastRemoteSnapshotVersion(e))}function s2(e,t){var n;let r=n=e;return r.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function sW(e,t,n){var r;let i=r=e,s=i.Ui.get(t);try{n||await i.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>i.persistence.referenceDelegate.removeTarget(e,s))}catch(a){if(!rp(a))throw a;nz("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.Ui=i.Ui.remove(t),i.qi.delete(s.target)}function s4(e,t,n){var r;let i=r=e,s=rn.min(),a=st();return i.persistence.runTransaction("Execute query","readonly",e=>(function(e,t,n){var r;let i=r=e,s=i.qi.get(n);return void 0!==s?rf.resolve(i.Ui.get(s)):i.Cs.getTargetData(t,n)})(i,e,ip(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{a=e})}).next(()=>i.Li.getDocumentsMatchingQuery(e,t,n?s:rn.min(),n?a:st())).next(e=>{var n,r,s,o;let l;return r=i,s=(n=t).collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2)),o=e,l=rn.min(),o.forEach((e,t)=>{t.readTime.compareTo(l)>0&&(l=t.readTime)}),r.Ki.set(s,l),{documents:e,Hi:a}}))}class sQ{constructor(){this.activeTargetIds=sn}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class s7{constructor(){this.Lr=new sQ,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new sQ,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sX{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s3{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(nz("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(nz("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let sY={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s6{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sJ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,n,r,i){let s=this.ao(e,t);nz("RestConnection","Sending: ",s,n);let a={};return this.ho(a,r,i),this.lo(e,s,a,n).then(e=>(nz("RestConnection","Received: ",e),e),t=>{throw nK("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}fo(e,t,n,r,i,s){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nq,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ao(e,t){let n=sY[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,r){return new Promise((i,s)=>{let a=new nV;a.listenOnce(nx.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case nL.NO_ERROR:let t=a.getResponseJson();nz("Connection","XHR received:",JSON.stringify(t)),i(t);break;case nL.TIMEOUT:nz("Connection",'RPC "'+e+'" timed out'),s(new n2(n1.DEADLINE_EXCEEDED,"Request time out"));break;case nL.HTTP_ERROR:let n=a.getStatus();if(nz("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){let r=a.getResponseJson().error;if(r&&r.status&&r.message){let o=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(n1).indexOf(t)>=0?t:n1.UNKNOWN}(r.status);s(new n2(o,r.message))}else s(new n2(n1.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new n2(n1.UNAVAILABLE,"Connection failed."));break;default:nG()}}finally{nz("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(r);a.send(t,"POST",o,n,15)})}_o(e,t,n){let r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=nN(),s=nD(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new nM({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;let o=r.join("");nz("Connection","Creating WebChannel: "+o,a);let l=i.createWebChannel(o,a),h=!1,c=!1,d=new s6({Hr(e){c?nz("Connection","Not sending because WebChannel is closed:",e):(h||(nz("Connection","Opening WebChannel transport."),l.open(),h=!0),nz("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return f(l,nU.EventType.OPEN,()=>{c||nz("Connection","WebChannel transport opened.")}),f(l,nU.EventType.CLOSE,()=>{c||(c=!0,nz("Connection","WebChannel transport closed"),d.io())}),f(l,nU.EventType.ERROR,e=>{c||(c=!0,nK("Connection","WebChannel transport errored:",e),d.io(new n2(n1.UNAVAILABLE,"The operation could not be completed")))}),f(l,nU.EventType.MESSAGE,e=>{var t,n;if(!c){let r=e.data[0];(n=!!r)||nG();let i=r,s=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(s){nz("Connection","WebChannel received error:",s);let a=s.status,o=function(e){let t=u[e];if(void 0!==t)return i4(t)}(a),h=s.message;void 0===o&&(o=n1.INTERNAL,h="Unknown error status: "+a+" with message "+s.message),c=!0,d.io(new n2(o,h)),l.close()}else nz("Connection","WebChannel received:",r),d.ro(r)}}),f(s,nO.STAT_EVENT,e=>{e.stat===nP.PROXY?nz("Connection","Detected buffering proxy"):e.stat===nP.NOPROXY&&nz("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function s5(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sZ(e){return new sp(e,!0)}class ae{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.wo=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();let t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&nz("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class at{constructor(e,t,n,r,i,s,a,o){this.Hs=e,this.Po=n,this.vo=r,this.Vo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ae(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===n1.RESOURCE_EXHAUSTED?(nH(t.toString()),nH("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):t&&t.code===n1.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{let e=new n2(n1.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return nz("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(nz("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class an extends at{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.It=i}jo(e,t){return this.Vo._o("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i,s,a;t.targetChange;let o="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:nG(),l=t.targetChange.targetIds||[],u=(i=e,s=t.targetChange.resumeToken,i.gt?(void 0===s||"string"==typeof s||nG(),rT.fromBase64String(s||"")):(void 0===s||s instanceof Uint8Array||nG(),rT.fromUint8Array(s||new Uint8Array))),h=t.targetChange.cause,c=h&&function(e){let t=void 0===e.code?n1.UNKNOWN:i4(e.code);return new n2(t,e.message||"")}(h);n=new so(o,l,u,c||null)}else if("documentChange"in t){t.documentChange;let d=t.documentChange;d.document,d.document.name,d.document.updateTime;let f=s8(e,d.document.name),p=sv(d.document.updateTime),g=new rG({mapValue:{fields:d.document.fields}}),m=r2.newFoundDocument(f,p,g),v=d.targetIds||[],y=d.removedTargetIds||[];n=new ss(v,y,m.key,m)}else if("documentDelete"in t){t.documentDelete;let $=t.documentDelete;$.document;let w=s8(e,$.document),b=$.readTime?sv($.readTime):rn.min(),E=r2.newNoDocument(w,b),I=$.removedTargetIds||[];n=new ss([],I,E.key,E)}else if("documentRemove"in t){t.documentRemove;let T=t.documentRemove;T.document;let k=s8(e,T.document),C=T.removedTargetIds||[];n=new ss([],C,k,null)}else{if(!("filter"in t))return nG();{t.filter;let S=t.filter;S.targetId;let A=S.count||0,R=new iW(A),_=S.targetId;n=new sa(_,R)}}return n}(this.It,e),n=function(e){if(!("targetChange"in e))return rn.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rn.min():t.readTime?sv(t.readTime):rn.min()}(e);return this.listener.Wo(t,n)}zo(e){let t={};t.database=sE(this.It),t.addTarget=function(e,t){var n,r;let i,s=t.target;return(i=rX(s)?{documents:(n=e,{documents:[sb(n,(r=s).path)]})}:{query:function(e,t){var n,r,i,s;let a={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(a.parent=sb(e,o),a.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(a.parent=sb(e,o.popLast()),a.structuredQuery.from=[{collectionId:o.lastSegment()}]);let l=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){var t;if("=="===e.op){if(rz(e.value))return{unaryFilter:{field:sk(e.field),op:"IS_NAN"}};if(r0(e.value))return{unaryFilter:{field:sk(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rz(e.value))return{unaryFilter:{field:sk(e.field),op:"IS_NOT_NAN"}};if(r0(e.value))return{unaryFilter:{field:sk(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sk(e.field),op:(t=e.op,sf[t]),value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);l&&(a.structuredQuery.where=l);let u=function(e){if(0!==e.length)return e.map(e=>{var t,n;return{field:sk((t=e).field),direction:(n=t.dir,sd[n])}})}(t.orderBy);u&&(a.structuredQuery.orderBy=u);let h=(r=e,i=t.limit,r.gt||rL(i)?i:{value:i});return null!==h&&(a.structuredQuery.limit=h),t.startAt&&(a.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(a.structuredQuery.endAt={before:!(s=t.endAt).inclusive,values:s.position}),a}(e,s)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?i.resumeToken=sm(e,t.resumeToken):t.snapshotVersion.compareTo(rn.min())>0&&(i.readTime=sg(e,t.snapshotVersion.toTimestamp())),i}(this.It,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return nG()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){let t={};t.database=sE(this.It),t.removeTarget=e,this.Bo(t)}}class ar extends at{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.Vo._o("Write",e,t)}onMessage(e){var t,n,r,i;if(!e.streamToken&&nG(),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();let s=(n=e.writeResults,r=e.commitTime,n&&n.length>0?(void 0!==r||nG(),n.map(e=>{var t,n;let i;return t=e,n=r,(i=t.updateTime?sv(t.updateTime):sv(n)).isEqual(rn.min())&&(i=sv(n)),new iP(i,t.transformResults||[])})):[]),a=sv(e.commitTime);return this.listener.Zo(a,s)}return e.writeResults&&0!==e.writeResults.length&&nG(),this.Jo=!0,this.listener.tu()}eu(){let e={};e.database=sE(this.It),this.Bo(e)}Xo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n,r,i,s;let a;if(t instanceof iz)a={update:sT(e,t.key,t.value)};else if(t instanceof i1)a={delete:sw(e,t.key)};else if(t instanceof iH)a={update:sT(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof i2))return nG();a={verify:sw(e,t.key)}}return t.fieldTransforms.length>0&&(a.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof iS)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof iA)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof i_)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof iD)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw nG()})(0,e))),t.precondition.isNone||(a.currentDocument=(n=e,void 0!==(r=t.precondition).updateTime?{updateTime:(i=n,sg(i,(s=r.updateTime).toTimestamp()))}:void 0!==r.exists?{exists:r.exists}:nG())),a})(this.It,e))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ai extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.Vo=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new n2(n1.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===n1.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new n2(n1.UNKNOWN,e.toString())})}fo(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.fo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===n1.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new n2(n1.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class as{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(e=>{n.enqueueAndForget(async()=>{ap(this)&&(nz("RemoteStore","Restarting streams for network reachability change."),await async function(e){var t;let n=t=e;n._u.add(4),await ao(n),n.gu.set("Unknown"),n._u.delete(4),await aa(n)}(this))})}),this.gu=new class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(nH(t),this.ou=!1):nz("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}(n,r)}}async function aa(e){if(ap(e))for(let t of e.wu)await t(!0)}async function ao(e){for(let t of e.wu)await t(!1)}function al(e,t){var n;let r=n=e;r.du.has(t.targetId)||(r.du.set(t.targetId,t),af(r)?ad(r):aN(r).ko()&&ah(r,t))}function au(e,t){var n;let r=n=e,i=aN(r);r.du.delete(t),i.ko()&&ac(r,t),0===r.du.size&&(i.ko()?i.Fo():ap(r)&&r.gu.set("Unknown"))}function ah(e,t){e.yu.Ot(t.targetId),aN(e).zo(t)}function ac(e,t){e.yu.Ot(t),aN(e).Ho(t)}function ad(e){e.yu=new su({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),aN(e).start(),e.gu.uu()}function af(e){return ap(e)&&!aN(e).No()&&e.du.size>0}function ap(e){var t;return 0===(t=e)._u.size}function ag(e){e.yu=void 0}async function am(e){e.du.forEach((t,n)=>{ah(e,t)})}async function av(e,t){ag(e),af(e)?(e.gu.hu(t),ad(e)):e.gu.set("Unknown")}async function ay(e,t,n){if(e.gu.set("Online"),t instanceof so&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(r){nz("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await a$(e,r)}else if(t instanceof ss?e.yu.Gt(t):t instanceof sa?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(rn.min()))try{let i=await s1(e.localStore);n.compareTo(i)>=0&&await function(e,t){let n=e.yu.te(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(rT.EMPTY_BYTE_STRING,n.snapshotVersion)),ac(e,t);let r=new sN(n.target,t,1,n.sequenceNumber);ah(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){nz("RemoteStore","Failed to raise snapshot:",s),await a$(e,s)}}async function a$(e,t,n){if(!rp(t))throw t;e._u.add(1),await ao(e),e.gu.set("Offline"),n||(n=()=>s1(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{nz("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await aa(e)})}function aw(e,t){return t().catch(n=>a$(e,n,t))}async function a8(e){var t;let n=t=e,r=aD(n),i=n.fu.length>0?n.fu[n.fu.length-1].batchId:-1;for(;ab(n);)try{let s=await s2(n.localStore,i);if(null===s){0===n.fu.length&&r.Fo();break}i=s.batchId,aE(n,s)}catch(a){await a$(n,a)}aI(n)&&aT(n)}function ab(e){return ap(e)&&e.fu.length<10}function aE(e,t){e.fu.push(t);let n=aD(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function aI(e){return ap(e)&&!aD(e).No()&&e.fu.length>0}function aT(e){aD(e).start()}async function ak(e){aD(e).eu()}async function aC(e){let t=aD(e);for(let n of e.fu)t.Xo(n.mutations)}async function aS(e,t,n){let r=e.fu.shift(),i=sR.from(r,t,n);await aw(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await a8(e)}async function aA(e,t){t&&aD(e).Yo&&await async function(e,t){var n;if(function(e){switch(e){default:return nG();case n1.CANCELLED:case n1.UNKNOWN:case n1.DEADLINE_EXCEEDED:case n1.RESOURCE_EXHAUSTED:case n1.INTERNAL:case n1.UNAVAILABLE:case n1.UNAUTHENTICATED:return!1;case n1.INVALID_ARGUMENT:case n1.NOT_FOUND:case n1.ALREADY_EXISTS:case n1.PERMISSION_DENIED:case n1.FAILED_PRECONDITION:case n1.ABORTED:case n1.OUT_OF_RANGE:case n1.UNIMPLEMENTED:case n1.DATA_LOSS:return!0}}(n=t.code)&&n!==n1.ABORTED){let r=e.fu.shift();aD(e).Oo(),await aw(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await a8(e)}}(e,t),aI(e)&&aT(e)}async function aR(e,t){var n;let r=n=e;r.asyncQueue.verifyOperationInProgress(),nz("RemoteStore","RemoteStore received new credentials");let i=ap(r);r._u.add(3),await ao(r),i&&r.gu.set("Unknown"),await r.remoteSyncer.handleCredentialChange(t),r._u.delete(3),await aa(r)}async function a_(e,t){var n;let r=n=e;t?(r._u.delete(2),await aa(r)):t||(r._u.add(2),await ao(r),r.gu.set("Unknown"))}function aN(e){return e.pu||(e.pu=function(e,t,n){var r;let i=r=e;return i.su(),new an(t,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,n)}(e.datastore,e.asyncQueue,{Yr:am.bind(null,e),Zr:av.bind(null,e),Wo:ay.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),af(e)?ad(e):e.gu.set("Unknown")):(await e.pu.stop(),ag(e))})),e.pu}function aD(e){return e.Iu||(e.Iu=function(e,t,n){var r;let i=r=e;return i.su(),new ar(t,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,n)}(e.datastore,e.asyncQueue,{Yr:ak.bind(null,e),Zr:aA.bind(null,e),tu:aC.bind(null,e),Zo:aS.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Oo(),await a8(e)):(await e.Iu.stop(),e.fu.length>0&&(nz("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aL{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nW,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new aL(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new n2(n1.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ax(e,t){if(nH("AsyncQueue",`${t}: ${e}`),rp(e))return new n2(n1.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aO{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ro.comparator(t.key,n.key):(e,t)=>ro.comparator(e.key,t.key),this.keyedMap=i3(),this.sortedSet=new r$(this.comparator)}static emptySet(e){return new aO(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof aO)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new aO;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aP{constructor(){this.Tu=new r$(ro.comparator)}track(e){let t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):nG():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class aM{constructor(e,t,n,r,i,s,a,o){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o}static fromInitialDocuments(e,t,n,r){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new aM(e,t,aO.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&im(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aU{constructor(){this.Au=void 0,this.listeners=[]}}class aV{constructor(){this.queries=new iQ(e=>iv(e),im),this.onlineState="Unknown",this.Ru=new Set}}async function aF(e,t){var n;let r=n=e,i=t.query,s=!1,a=r.queries.get(i);if(a||(s=!0,a=new aU),s)try{a.Au=await r.onListen(i)}catch(o){let l=ax(o,`Initialization of query '${iy(t.query)}' failed`);return void t.onError(l)}r.queries.set(i,a),a.listeners.push(t),t.bu(r.onlineState),a.Au&&t.Pu(a.Au)&&a0(r)}async function aB(e,t){var n;let r=n=e,i=t.query,s=!1,a=r.queries.get(i);if(a){let o=a.listeners.indexOf(t);o>=0&&(a.listeners.splice(o,1),s=0===a.listeners.length)}if(s)return r.queries.delete(i),r.onUnlisten(i)}function aq(e,t){var n;let r=n=e,i=!1;for(let s of t){let a=s.query,o=r.queries.get(a);if(o){for(let l of o.listeners)l.Pu(s)&&(i=!0);o.Au=s}}i&&a0(r)}function aj(e,t,n){var r;let i=r=e,s=i.queries.get(t);if(s)for(let a of s.listeners)a.onError(n);i.queries.delete(t)}function a0(e){e.Ru.forEach(e=>{e.next()})}class az{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new aM(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let r=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),r=!0):this.Cu(e,this.onlineState)&&(this.xu(e),r=!0),this.Su=e,r}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=aM.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aH{constructor(e){this.key=e}}class aK{constructor(e){this.key=e}}class a9{constructor(e,t){this.query=e,this.Lu=t,this.Uu=null,this.current=!1,this.qu=st(),this.mutatedKeys=st(),this.Ku=iw(e),this.Gu=new aO(this.Ku)}get Qu(){return this.Lu}ju(e,t){let n=t?t.Wu:new aP,r=t?t.Gu:this.Gu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=i$(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.zu(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Ku(h,o)>0||l&&0>this.Ku(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let u="F"===this.query.limitType?s.last():s.first();s=s.delete(u.key),i=i.delete(u.key),n.track({type:1,doc:u})}return{Gu:s,Wu:n,$i:a,mutatedKeys:i}}zu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;let i=e.Wu.Eu();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nG()}};return n(e)-n(t)})(e.type,t.type)||this.Ku(e.doc,t.doc)),this.Hu(n);let s=t?this.Ju():[],a=0===this.qu.size&&this.current?1:0,o=a!==this.Uu;return(this.Uu=a,0!==i.length||o)?{snapshot:new aM(this.query,e.Gu,r,i,e.mutatedKeys,0===a,o,!1),Yu:s}:{Yu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new aP,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(e=>this.Lu=this.Lu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Lu=this.Lu.delete(e)),this.current=e.current)}Ju(){if(!this.current)return[];let e=this.qu;this.qu=st(),this.Gu.forEach(e=>{this.Xu(e.key)&&(this.qu=this.qu.add(e.key))});let t=[];return e.forEach(e=>{this.qu.has(e)||t.push(new aK(e))}),this.qu.forEach(n=>{e.has(n)||t.push(new aH(n))}),t}Zu(e){this.Lu=e.Hi,this.qu=st();let t=this.ju(e.documents);return this.applyChanges(t,!0)}tc(){return aM.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class aG{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class a1{constructor(e){this.key=e,this.ec=!1}}class a2{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new iQ(e=>iv(e),im),this.ic=new Map,this.rc=new Set,this.oc=new r$(ro.comparator),this.uc=new Map,this.cc=new sV,this.ac={},this.hc=new Map,this.lc=sx.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function aW(e,t){let n=function(e){var t;let n=t=e;return n.remoteStore.remoteSyncer.applyRemoteEvent=aX.bind(null,n),n.remoteStore.remoteSyncer.getRemoteKeysForTarget=oo.bind(null,n),n.remoteStore.remoteSyncer.rejectListen=aY.bind(null,n),n.nc.Wo=aq.bind(null,n.eventManager),n.nc._c=aj.bind(null,n.eventManager),n}(e),r,i,s=n.sc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{let a=await function(e,t){var n;let r=n=e;return r.persistence.runTransaction("Allocate target","readwrite",e=>{let n;return r.Cs.getTargetData(e,t).next(i=>i?(n=i,rf.resolve(n)):r.Cs.allocateTargetId(e).next(i=>(n=new sN(t,i,0,e.currentSequenceNumber),r.Cs.addTargetData(e,n).next(()=>n))))}).then(e=>{let n=r.Ui.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(r.Ui=r.Ui.insert(e.targetId,e),r.qi.set(t,e.targetId)),e})}(n.localStore,ip(t));n.isPrimaryClient&&al(n.remoteStore,a);let o=n.sharedClientState.addLocalQueryTarget(a.targetId);i=await a4(n,t,r=a.targetId,"current"===o)}return i}async function a4(e,t,n,r){e.dc=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ju(n);i.$i&&(i=await s4(e.localStore,t.query,!1).then(({documents:e})=>t.view.ju(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return on(e,t.targetId,a.Yu),a.snapshot})(e,t,n,r);let i=await s4(e.localStore,t,!0),s=new a9(t,i.Hi),a=s.ju(i.documents),o=si.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),l=s.applyChanges(a,e.isPrimaryClient,o);on(e,n,l.Yu);let u=new aG(t,n,s);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),l.snapshot}async function aQ(e,t){var n;let r=n=e,i=r.sc.get(t),s=r.ic.get(i.targetId);if(s.length>1)return r.ic.set(i.targetId,s.filter(e=>!im(e,t))),void r.sc.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await sW(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),au(r.remoteStore,i.targetId),oe(r,i.targetId)}).catch(rd)):(oe(r,i.targetId),await sW(r.localStore,i.targetId,!0))}async function a7(e,t,n){let r=function(e){var t;let n=t=e;return n.remoteStore.remoteSyncer.applySuccessfulWrite=a6.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=aJ.bind(null,n),n}(e);try{var i,s,a;let o=await function(e,t){var n;let r=n=e,i=rt.now(),s=t.reduce((e,t)=>e.add(t.key),st()),a,o;return r.persistence.runTransaction("Locally write mutations","readwrite",e=>{let n=i7,l=st();return r.Gi.getEntries(e,s).next(e=>{(n=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>r.localDocuments.getOverlayedDocuments(e,n)).next(n=>{a=n;let s=[];for(let o of t){let l=ij(o,a.get(o.key).overlayedDocument);null!=l&&s.push(new iH(o.key,l,r1(l.value.mapValue),iM.exists(!0)))}return r.mutationQueue.addMutationBatch(e,i,s,t)}).next(t=>{o=t;let n=t.applyToLocalDocumentSet(a,l);return r.documentOverlayCache.saveOverlays(e,t.batchId,n)})}).then(()=>({batchId:o.batchId,changes:iY(a)}))}(r.localStore,t),l;r.sharedClientState.addPendingMutation(o.batchId),i=r,s=o.batchId,a=n,(l=i.ac[i.currentUser.toKey()])||(l=new r$(nZ)),l=l.insert(s,a),i.ac[i.currentUser.toKey()]=l,await os(r,o.changes),await a8(r.remoteStore)}catch(u){let h=ax(u,"Failed to persist write");n.reject(h)}}async function aX(e,t){var n;let r=n=e;try{let i=await function(e,t){var n;let r=n=e,i=t.snapshotVersion,s=r.Ui;return r.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var n,a,o;let l=r.Gi.newChangeBuffer({trackRemovals:!0});s=r.Ui;let u=[];t.targetChanges.forEach((n,a)=>{var o,l,h;let c=s.get(a);if(!c)return;u.push(r.Cs.removeMatchingKeys(e,n.removedDocuments,a).next(()=>r.Cs.addMatchingKeys(e,n.addedDocuments,a)));let d=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?d=d.withResumeToken(rT.EMPTY_BYTE_STRING,rn.min()).withLastLimboFreeSnapshotVersion(rn.min()):n.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(n.resumeToken,i)),s=s.insert(a,d),o=c,l=d,h=n,(0===o.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-o.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&u.push(r.Cs.updateTargetData(e,d))});let h=i7,c=st(),d,f;if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(r.persistence.referenceDelegate.updateLimboDocument(e,n))}),u.push((n=e,a=l,o=t.documentUpdates,d=st(),f=st(),o.forEach(e=>d=d.add(e)),a.getEntries(n,d).next(e=>{let t=i7;return o.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(f=f.add(n)),r.isNoDocument()&&r.version.isEqual(rn.min())?(a.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(a.addEntry(r),t=t.insert(n,r)):nz("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Wi:t,zi:f}})).next(e=>{h=e.Wi,c=e.zi})),!i.isEqual(rn.min())){let p=r.Cs.getLastRemoteSnapshotVersion(e).next(t=>r.Cs.setTargetsMetadata(e,e.currentSequenceNumber,i));u.push(p)}return rf.waitFor(u).next(()=>l.apply(e)).next(()=>r.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(r.Ui=s,e))}(r.localStore,t);t.targetChanges.forEach((e,t)=>{var n,i,s;let a=r.uc.get(t);a&&(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1||nG(),e.addedDocuments.size>0?a.ec=!0:e.modifiedDocuments.size>0?(i=a.ec)||nG():e.removedDocuments.size>0&&(a.ec||nG(),a.ec=!1))}),await os(r,i,t)}catch(s){await rd(s)}}function a3(e,t,n){var r;let i=r=e;if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){let s=[];i.sc.forEach((e,n)=>{let r=n.view.bu(t);r.snapshot&&s.push(r.snapshot)}),function(e,t){var n;let r=n=e;r.onlineState=t;let i=!1;r.queries.forEach((e,n)=>{for(let r of n.listeners)r.bu(t)&&(i=!0)}),i&&a0(r)}(i.eventManager,t),s.length&&i.nc.Wo(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function aY(e,t,n){var r;let i=r=e;i.sharedClientState.updateQueryState(t,"rejected",n);let s=i.uc.get(t),a=s&&s.key;if(a){let o=new r$(ro.comparator);o=o.insert(a,r2.newNoDocument(a,rn.min()));let l=st().add(a),u=new sr(rn.min(),new Map,new rb(nZ),o,l);await aX(i,u),i.oc=i.oc.remove(a),i.uc.delete(t),oi(i)}else await sW(i.localStore,t,!1).then(()=>oe(i,t,n)).catch(rd)}async function a6(e,t){var n;let r=n=e,i=t.batch.batchId;try{let s=await function(e,t){var n;let r=n=e;return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=rf.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||nG(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=st();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))})}(r.localStore,t);aZ(r,i,null),a5(r,i),r.sharedClientState.updateMutationState(i,"acknowledged"),await os(r,s)}catch(a){await rd(a)}}async function aJ(e,t,n){var r;let i=r=e;try{let s=await function(e,t){var n;let r=n=e;return r.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||nG(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))})}(i.localStore,t);aZ(i,t,n),a5(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await os(i,s)}catch(a){await rd(a)}}function a5(e,t){(e.hc.get(t)||[]).forEach(e=>{e.resolve()}),e.hc.delete(t)}function aZ(e,t,n){var r;let i=r=e,s=i.ac[i.currentUser.toKey()];if(s){let a=s.get(t);a&&(n?a.reject(n):a.resolve(),s=s.remove(t)),i.ac[i.currentUser.toKey()]=s}}function oe(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.ic.get(t)))e.sc.delete(r),n&&e.nc._c(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach(t=>{e.cc.containsKey(t)||ot(e,t)})}function ot(e,t){e.rc.delete(t.path.canonicalString());let n=e.oc.get(t);null!==n&&(au(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),oi(e))}function on(e,t,n){for(let r of n)r instanceof aH?(e.cc.addReference(r.key,t),or(e,r)):r instanceof aK?(nz("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||ot(e,r.key)):nG()}function or(e,t){let n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(nz("SyncEngine","New document in limbo: "+n),e.rc.add(r),oi(e))}function oi(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){let t=e.rc.values().next().value;e.rc.delete(t);let n=new ro(ri.fromString(t)),r=e.lc.next();e.uc.set(r,new a1(n)),e.oc=e.oc.insert(n,r),al(e.remoteStore,new sN(ip(ih(n.path)),r,2,rg.at))}}async function os(e,t,n){var r;let i=r=e,s=[],a=[],o=[];i.sc.isEmpty()||(i.sc.forEach((e,r)=>{o.push(i.dc(r,t,n).then(e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(r.targetId,e.fromCache?"not-current":"current"),s.push(e);let t=sH.Ci(r.targetId,e);a.push(t)}}))}),await Promise.all(o),i.nc.Wo(s),await async function(e,t){var n;let r=n=e;try{await r.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>rf.forEach(t,t=>rf.forEach(t.Si,n=>r.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>rf.forEach(t.Di,n=>r.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(i){if(!rp(i))throw i;nz("LocalStore","Failed to update sequence numbers: "+i)}for(let s of t){let a=s.targetId;if(!s.fromCache){let o=r.Ui.get(a),l=o.snapshotVersion,u=o.withLastLimboFreeSnapshotVersion(l);r.Ui=r.Ui.insert(a,u)}}}(i.localStore,a))}async function oa(e,t){var n,r;let i=n=e;if(!i.currentUser.isEqual(t)){nz("SyncEngine","User change. New user:",t.toKey());let s=await sG(i.localStore,t);i.currentUser=t,(r=i).hc.forEach(e=>{e.forEach(e=>{e.reject(new n2(n1.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),r.hc.clear(),i.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await os(i,s.ji)}}function oo(e,t){var n;let r=n=e,i=r.uc.get(t);if(i&&i.ec)return st().add(i.key);{let s=st(),a=r.ic.get(t);if(!a)return s;for(let o of a){let l=r.sc.get(o);s=s.unionWith(l.view.Qu)}return s}}class ol{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=sZ(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,t){return null}Tc(e,t){return null}yc(e){var t,n,r,i;return t=this.persistence,n=new sK,r=e.initialUser,i=this.It,new s9(t,n,r,i)}gc(e){return new sj(sz.Bs,this.It)}mc(e){return new s7}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ou{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>a3(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=oa.bind(null,this.syncEngine),await a_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aV}createDatastore(e){var t,n,r,i,s;let a=sZ(e.databaseInfo.databaseId),o=(t=e.databaseInfo,new sJ(t));return n=e.authCredentials,r=e.appCheckCredentials,i=o,s=a,new ai(n,r,i,s)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>a3(this.syncEngine,e,0),s=s3.C()?new s3:new sX,new as(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new a2(e,t,n,r,i,s);return a&&(o.fc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){var t;let n=t=e;nz("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ao(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):nH("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=nB.UNAUTHENTICATED,this.clientId=n5.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{nz("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(nz("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new n2(n1.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nW;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let n=ax(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function od(e,t){e.asyncQueue.verifyOperationInProgress(),nz("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await sG(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function of(e,t){e.asyncQueue.verifyOperationInProgress();let n=await op(e);nz("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>aR(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>aR(t.remoteStore,n)),e.onlineComponents=t}async function op(e){return e.offlineComponents||(nz("FirestoreClient","Using default OfflineComponentProvider"),await od(e,new ol)),e.offlineComponents}async function og(e){return e.onlineComponents||(nz("FirestoreClient","Using default OnlineComponentProvider"),await of(e,new ou)),e.onlineComponents}async function om(e){let t=await og(e),n=t.eventManager;return n.onListen=aW.bind(null,t.syncEngine),n.onUnlisten=aQ.bind(null,t.syncEngine),n}let ov=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oy(e,t,n){if(!n)throw new n2(n1.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function o$(e){if(!ro.isDocumentKey(e))throw new n2(n1.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ow(e){if(ro.isDocumentKey(e))throw new n2(n1.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function o8(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":nG()}function ob(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new n2(n1.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=o8(e);throw new n2(n1.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oE{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new n2(n1.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new n2(n1.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new n2(n1.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oI{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new n2(n1.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new n2(n1.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oE(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nQ;switch(e.type){case"gapi":let t=e.client;return new n3(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new n2(n1.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ov.get(e);t&&(nz("ComponentProvider","Removing Datastore"),ov.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oT{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oC(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oT(this.firestore,e,this._key)}}class ok{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ok(this.firestore,e,this._query)}}class oC extends ok{constructor(e,t,n){super(e,t,ih(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new oT(this.firestore,null,new ro(e))}withConverter(e){return new oC(this.firestore,e,this._path)}}function oS(e,t,...n){if(e=(0,g.m9)(e),oy("collection","path",t),e instanceof oI){let r=ri.fromString(t,...n);return ow(r),new oC(e,null,r)}{if(!(e instanceof oT||e instanceof oC))throw new n2(n1.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(ri.fromString(t,...n));return ow(i),new oC(e.firestore,null,i)}}function oA(e,t,...n){if(e=(0,g.m9)(e),1===arguments.length&&(t=n5.R()),oy("doc","path",t),e instanceof oI){let r=ri.fromString(t,...n);return o$(r),new oT(e,null,new ro(r))}{if(!(e instanceof oT||e instanceof oC))throw new n2(n1.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(ri.fromString(t,...n));return o$(i),new oT(e.firestore,e instanceof oC?e.converter:null,new ro(i))}}function oR(e){return function(e,t){if("object"!=typeof e||null===e)return!1;let n=e;for(let r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}(e,["next","error","complete"])}class o_ extends oI{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new ae(this,"async_queue_retry"),this.jc=()=>{let e=s5();e&&nz("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.bo()};let e=s5();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;let t=s5();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});let t=new nW;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!rp(e))throw e;nz("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){let t=this.$c.then(()=>(this.Kc=!0,e().catch(e=>{var t;this.qc=e,this.Kc=!1;let n,r=(n=(t=e).message||"",t.stack&&(n=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),n);throw nH("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.Kc=!1,e))));return this.$c=t,t}enqueueAfterDelay(e,t,n){this.Wc(),this.Qc.indexOf(e)>-1&&(t=0);let r=aL.createAndSchedule(this,e,t,n,e=>this.Jc(e));return this.Uc.push(r),r}Wc(){this.qc&&nG()}verifyOperationInProgress(){}async Yc(){let e;do await (e=this.$c);while(e!==this.$c)}Xc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}},this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oL(this),this._firestoreClient.terminate()}}function oN(e,t){let n="object"==typeof e?e:(0,d.Mq)();return(0,d.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"})}function oD(e){return e._firestoreClient||oL(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oL(e){var t,n,r,i,s;let a=e._freezeSettings(),o=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,s=a,new rN(n,r,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new oc(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ox{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new n2(n1.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ra(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oO{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oO(rT.fromBase64String(e))}catch(t){throw new n2(n1.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new oO(rT.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oP{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oM{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new n2(n1.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new n2(n1.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return nZ(this._lat,e._lat)||nZ(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oU=/^__.*__$/;class oV{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new iH(e,this.data,this.fieldMask,t,this.fieldTransforms):new iz(e,this.data,t,this.fieldTransforms)}}function oF(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nG()}}class oB{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new oB(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.sa({path:n,ra:!1});return r.oa(e),r}ua(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.sa({path:n,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return o2(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(0===e.length)throw this.aa("Document fields must not be empty");if(oF(this.na)&&oU.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class oq{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||sZ(e)}fa(e,t,n,r=!1){return new oB({na:e,methodName:t,la:n,path:ra.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}class oj extends oP{_toFieldTransform(e){return new iO(e.path,new iS)}isEqual(e){return e instanceof oj}}function o0(e,t){if(oH(e=(0,g.m9)(e)))return oK("Unsupported field value:",t,e),oz(e,t);if(e instanceof oP)return function(e,t){if(!oF(t.na))throw t.aa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.aa(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&4!==t.na)throw t.aa("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let s=o0(i,t.ca(r));null==s&&(s={nullValue:"NULL_VALUE"}),n.push(s),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,g.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.It,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!rx(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?iE(r):ib(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let s=rt.fromDate(e);return{timestampValue:sg(t.It,s)}}if(e instanceof rt){let a=new rt(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sg(t.It,a)}}if(e instanceof oM)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oO)return{bytesValue:sm(t.It,e._byteString)};if(e instanceof oT){let o=t.databaseId,l=e.firestore._databaseId;if(!l.isEqual(o))throw t.aa(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:sy(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.aa(`Unsupported field value: ${o8(e)}`)}(e,t)}function oz(e,t){let n={};return ry(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rv(e,(e,r)=>{let i=o0(r,t.ia(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function oH(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rt||e instanceof oM||e instanceof oO||e instanceof oT||e instanceof oP)}function oK(e,t,n){var r;if(!oH(n)||"object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r)){let i=o8(n);throw"an object"===i?t.aa(e+" a custom object"):t.aa(e+" "+i)}}function o9(e,t,n){if((t=(0,g.m9)(t))instanceof ox)return t._internalPath;if("string"==typeof t)return o1(e,t);throw o2("Field path arguments must be of type string or ",e,!1,void 0,n)}let oG=RegExp("[~\\*/\\[\\]]");function o1(e,t,n){if(t.search(oG)>=0)throw o2(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ox(...t.split("."))._internalPath}catch(r){throw o2(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function o2(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new n2(n1.INVALID_ARGUMENT,o+e+l)}function oW(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o4{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oT(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new oQ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(o7("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class oQ extends o4{data(){return super.data()}}function o7(e,t){return"string"==typeof t?o1(e,t):t instanceof ox?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oX{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class o3 extends o4{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new oY(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(o7("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class oY extends o3{data(e={}){return super.data(e)}}class o6{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new oX(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new oY(this._firestore,this._userDataWriter,n.key,n,new oX(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new n2(n1.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let n=0;return e._snapshot.docChanges.map(t=>({type:"added",doc:new oY(e._firestore,e._userDataWriter,t.doc.key,t.doc,new oX(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:n++}))}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new oY(e._firestore,e._userDataWriter,t.doc.key,t.doc,new oX(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nG()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function oJ(e,...t){for(let n of t)e=n._apply(e);return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o5{convertValue(e,t="none"){switch(rP(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rS(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rA(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw nG()}}convertObject(e,t){let n={};return rv(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oM(rS(e.latitude),rS(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return rR(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(r_(e));default:return null}}convertTimestamp(e){let t=rC(e);return new rt(t.seconds,t.nanos)}convertDocumentKey(e,t){var n;let r=ri.fromString(e);(n=sS(r))||nG();let i=new rD(r.get(1),r.get(3)),s=new ro(r.popFirst(5));return i.isEqual(t)||nH(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}class oZ extends o5{constructor(e){super(),this.firestore=e}convertBytes(e){return new oO(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new oT(this.firestore,null,t)}}function le(e,t,n){var r,i,s,a,o;e=ob(e,oT);let l=ob(e.firestore,o_),u=(r=e.converter,i=t,s=n,r?s&&(s.merge||s.mergeFields)?r.toFirestore(i,s):r.toFirestore(i):i);return a=l,o=[(function(e,t,n,r,i,s={}){let a=e.fa(s.merge||s.mergeFields?2:0,t,n,i);oK("Data must be an object, but it was:",a,r);let o=oz(r,a),l,u;if(s.merge)l=new rI(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){let h=[];for(let c of s.mergeFields){let d=o9(t,c,n);if(!a.contains(d))throw new n2(n1.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);oW(h,d)||h.push(d)}l=new rI(h),u=a.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,u=a.fieldTransforms;return new oV(new rG(o),l,u)})(function(e){let t=e._freezeSettings(),n=sZ(e._databaseId);return new oq(e._databaseId,!!t.ignoreUndefinedProperties,n)}(l),"setDoc",e._key,u,null!==e.converter,n).toMutation(e._key,iM.none())],function(e,t){let n=new nW;return e.asyncQueue.enqueueAndForget(async()=>{var r;return a7(await og(r=e).then(e=>e.syncEngine),t,n)}),n.promise}(oD(a),o)}function lt(e,...t){var n,r,i;e=(0,g.m9)(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||oR(t[a])||(s=t[a],a++);let o={includeMetadataChanges:s.includeMetadataChanges};if(oR(t[a])){let l=t[a];t[a]=null===(n=l.next)||void 0===n?void 0:n.bind(l),t[a+1]=null===(r=l.error)||void 0===r?void 0:r.bind(l),t[a+2]=null===(i=l.complete)||void 0===i?void 0:i.bind(l)}let u,h,c;if(e instanceof oT)h=ob(e.firestore,o_),c=ih(e._key.path),u={next(n){t[a]&&t[a](function(e,t,n){let r=n.docs.get(t._key),i=new oZ(e);return new o3(e,i,t._key,r,new oX(n.hasPendingWrites,n.fromCache),t.converter)}(h,e,n))},error:t[a+1],complete:t[a+2]};else{let d=ob(e,ok);h=ob(d.firestore,o_),c=d._query;let f=new oZ(h);u={next(e){t[a]&&t[a](new o6(h,f,d,e))},error:t[a+1],complete:t[a+2]},/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new n2(n1.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query)}return function(e,t,n,r){let i=new oh(r),s=new az(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>aF(await om(e),s)),()=>{i.Rc(),e.asyncQueue.enqueueAndForget(async()=>aB(await om(e),s))}}(oD(h),c,o,u)}function ln(){return new oj("serverTimestamp")}!function(e,t=!0){var n;nq=d.Jn,(0,d.Xd)(new f.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new o_(new n7(e.getProvider("auth-internal")),new n6(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new n2(n1.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rD(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,d.KN)(nF,"3.5.0",void 0),(0,d.KN)(nF,"3.5.0","esm2017")}()},1153:function(e,t,n){"use strict";n.d(t,{Jt:function(){return ee},cF:function(){return en},iH:function(){return et},KV:function(){return Z}});var r,i,s=n(5816),a=n(4444),o=n(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let l="firebasestorage.googleapis.com",u="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class h extends a.ZR{constructor(e,t){super(c(e),`Firebase Storage: ${t} (${c(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(e){return c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function c(e){return"storage/"+e}function d(){return new h("unknown","An unknown error occurred, please check the error payload for server response.")}function f(e){return new h("invalid-argument",e)}function p(){return new h("app-deleted","The Firebase app was deleted.")}function g(e,t){return new h("invalid-format","String does not match format '"+e+"': "+t)}function m(e){throw new h("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){var n;let r;try{r=v.makeFromUrl(e,t)}catch(i){return new v(e,"")}if(""===r.path)return r;throw n=e,new h("invalid-default-bucket","Invalid default bucket '"+n+"'.")}static makeFromUrl(e,t){let n=null,r="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),o=RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),u=RegExp(`^https?://${t===l?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),c=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:o,indices:{bucket:1,path:3},postModify:s},{regex:u,indices:{bucket:1,path:2},postModify:s}];for(let d=0;d<c.length;d++){let f=c[d],p=f.regex.exec(e);if(p){let g=p[f.indices.bucket],m=p[f.indices.path];m||(m=""),n=new v(g,m),f.postModify(n);break}}if(null==n){var y;throw y=e,new h("invalid-url","Invalid URL '"+y+"'.")}return n}}class y{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function $(e){return"string"==typeof e||e instanceof String}function w(e){return b()&&e instanceof Blob}function b(){return"undefined"!=typeof Blob}function E(e,t,n,r){if(r<t)throw f(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw f(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function I(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function T(e){let t=encodeURIComponent,n="?";for(let r in e)if(e.hasOwnProperty(r)){let i=t(r)+"="+t(e[r]);n=n+i+"&"}return n.slice(0,-1)}(r=i||(i={}))[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class k{constructor(e,t,n,r,i,s,a,o,l,u,h){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{if(t){e(!1,new C(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let r=e=>{let t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;let t=n.getErrorCode()===i.NO_ERROR,s=n.getStatus();if(!t||this.isRetryStatusCode_(s)){let a=n.getErrorCode()===i.ABORT;e(!1,new C(!1,null,a));return}let o=-1!==this.successCodes_.indexOf(s);e(!0,new C(o,n))})},t=(e,t)=>{let n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{var s;let a=this.callback_(i,i.getResponse());(s=a,void 0!==s)?n(a):n()}catch(o){r(o)}else if(null!==i){let l=d();l.serverResponse=i.getErrorText(),r(this.errorCallback_?this.errorCallback_(i,l):l)}else if(t.canceled){let u=this.appDelete_?p():new h("canceled","User canceled the upload/download.");r(u)}else{let c=new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.");r(c)}};this.canceled_?t(!1,new C(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,n){let r=1,i=null,s=null,a=!1,o=0;function l(){return 2===o}let u=!1;function h(...e){u||(u=!0,t.apply(null,e))}function c(t){i=setTimeout(()=>{i=null,e(f,l())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u){d();return}if(e){d(),h.call(null,e,...t);return}let n=l()||a;if(n){d(),h.call(null,e,...t);return}r<64&&(r*=2);let i;1===o?(o=2,i=0):i=(r+Math.random())*1e3,c(i)}let p=!1;function g(e){if(!p)p=!0,d(),!u&&(null!==i?(e||(o=2),clearTimeout(i),c(0)):e||(o=1))}return c(0),s=setTimeout(()=>{a=!0,g(!0)},n),g}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){if(this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_){var t;(t=this.backoffId_)(!1)}null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){let t=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return e>=500&&e<600||t||n}}class C{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function S(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}if(b())return new Blob(e);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let A={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class R{constructor(e,t){this.data=e,this.contentType=t||null}}function _(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if((64512&r)==55296){let i=n<e.length-1&&(64512&e.charCodeAt(n+1))==56320;if(i){let s=r,a=e.charCodeAt(++n);r=65536|(1023&s)<<10|1023&a,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else(64512&r)==56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function N(e,t){switch(e){case A.BASE64:{let n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r)throw g(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case A.BASE64URL:{let i=-1!==t.indexOf("+"),s=-1!==t.indexOf("/");if(i||s)throw g(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}let a;try{var o;a=(o=t,atob(o))}catch(l){throw g(e,"Invalid character found")}let u=new Uint8Array(a.length);for(let h=0;h<a.length;h++)u[h]=a.charCodeAt(h);return u}class D{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw g(A.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let n=t[1]||null;null!=n&&(this.base64=function(e,t){let n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class L{constructor(e,t){let n=0,r="";w(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(w(this.data_)){var n,r,i;let s=this.data_,a=(n=s,r=e,i=t,n.webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===a?null:new L(a)}{let o=new Uint8Array(this.data_.buffer,e,t-e);return new L(o,!0)}}static getBlob(...e){if(b()){let t=e.map(e=>e instanceof L?e.data_:e);return new L(S.apply(null,t))}{let n=e.map(e=>$(e)?function(e,t){switch(e){case A.RAW:return new R(_(t));case A.BASE64:case A.BASE64URL:return new R(N(e,t));case A.DATA_URL:return new R(function(e){let t=new D(e);return t.base64?N(A.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(n){throw g(A.DATA_URL,"Malformed data URL.")}return _(t)}(t.rest)}(t),function(e){let t=new D(e);return t.contentType}(t))}throw d()}(A.RAW,e).data:e.data_),r=0;n.forEach(e=>{r+=e.byteLength});let i=new Uint8Array(r),s=0;return n.forEach(e=>{for(let t=0;t<e.length;t++)i[s++]=e[t]}),new L(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function x(e){var t;let n;try{n=JSON.parse(e)}catch(r){return null}return"object"!=typeof(t=n)||Array.isArray(t)?null:n}function O(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function P(e,t){return t}class M{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||P}}let U=null;function V(){if(U)return U;let e=[];e.push(new M("bucket")),e.push(new M("generation")),e.push(new M("metageneration")),e.push(new M("name","fullPath",!0));let t=new M("name");t.xform=function(e,t){var n;return!$(n=t)||n.length<2?n:O(n)},e.push(t);let n=new M("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new M("timeCreated")),e.push(new M("updated")),e.push(new M("md5Hash",null,!0)),e.push(new M("cacheControl",null,!0)),e.push(new M("contentDisposition",null,!0)),e.push(new M("contentEncoding",null,!0)),e.push(new M("contentLanguage",null,!0)),e.push(new M("contentType",null,!0)),e.push(new M("metadata","customMetadata",!0)),U=e}function F(e,t,n){let r=x(t);return null===r?null:function(e,t,n){var r,i;let s={};s.type="file";let a=n.length;for(let o=0;o<a;o++){let l=n[o];s[l.local]=l.xform(s,t[l.server])}return r=s,i=e,Object.defineProperty(r,"ref",{get:function(){let e=r.bucket,t=r.fullPath,n=new v(e,t);return i._makeStorageReference(n)}}),s}(e,r,n)}class B{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function q(e){if(!e)throw d()}function j(e){return function(t,n){var r,i;let s;return(s=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new h("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(r=e.bucket,new h("quota-exceeded","Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,new h("unauthorized","User does not have permission to access '"+i+"'.")):n).serverResponse=n.serverResponse,s}}class z{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=i.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=i.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=i.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw m("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(let i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw m("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw m("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw m("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw m("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class H extends z{initXhr(){this.xhr_.responseType="text"}}function K(){return new H}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class G{constructor(e,t){this._service=e,t instanceof v?this._location=t:this._location=v.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new G(e,t)}get root(){let e=new v(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return O(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let n=e.slice(0,t);return n}(this._location.path);if(null===e)return null;let t=new v(this._location.bucket,e);return new G(this._service,t)}_throwIfRoot(e){if(""===this._location.path){var t;throw t=e,new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}}function W(e,t){let n=null==t?void 0:t[u];return null==n?null:v.makeFromBucketSpec(n,e)}class Q{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=l,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=r?this._bucket=v.makeFromBucketSpec(r,this._host):this._bucket=W(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=v.makeFromBucketSpec(this._url,e):this._bucket=W(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new G(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new y(p());{let i=function(e,t,n,r,i,s){var a,o,l,u,h,c,d,f;let p=T(e.urlParams),g=e.url+p,m=Object.assign({},e.headers);return a=m,(o=t)&&(a["X-Firebase-GMPID"]=o),l=m,null!==(u=n)&&u.length>0&&(l.Authorization="Firebase "+u),h=m,c=s,h["X-Firebase-Storage-Version"]="webjs/"+(null!=c?c:"AppManager"),d=m,null!==(f=r)&&(d["X-Firebase-AppCheck"]=f),new k(g,e.method,m,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){let[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}let X="@firebase/storage",Y="0.9.9",J="storage";function Z(e,t,n){return function(e,t,n){e._throwIfRoot("uploadBytes");let r=function(e,t,n,r,i){var s,a;let o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"},u=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();l["Content-Type"]="multipart/related; boundary="+u;let c=function(e,t,n){let r=Object.assign({},n);if(r.fullPath=e.path,r.size=t.size(),!r.contentType){var i;r.contentType=(i=t,i&&i.type()||"application/octet-stream")}return r}(t,r,i),d=function(e,t){let n={},r=t.length;for(let i=0;i<r;i++){let s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}(c,n),f="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+d+"\r\n--"+u+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",p=L.getBlob(f,r,"\r\n--"+u+"--");if(null===p)throw new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");let g={name:c.fullPath},m=I(o,e.host,e._protocol),v=e.maxUploadRetryTime,y=new B(m,"POST",(s=e,a=n,function(e,t){let n=F(s,t,a);return q(null!==n),n}),v);return y.urlParams=g,y.headers=l,y.body=p.uploadData(),y.errorHandler=j(t),y}(e.storage,e._location,V(),new L(t,!0),n);return e.storage.makeRequestWithTokens(r,K).then(t=>({metadata:t,ref:e}))}(e=(0,a.m9)(e),t,n)}function ee(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,n){var r,i;let s=t.fullServerUrl(),a=I(s,e.host,e._protocol),o=e.maxOperationRetryTime,l=new B(a,"GET",(r=e,i=n,function(e,t){let n=F(r,t,i);return q(null!==n),function(e,t,n,r){let i=x(t);if(null===i||!$(i.downloadTokens))return null;let s=i.downloadTokens;if(0===s.length)return null;let a=encodeURIComponent,o=s.split(","),l=o.map(t=>{let i=e.bucket,s=e.fullPath,o="/b/"+a(i)+"/o/"+a(s),l=I(o,n,r),u=T({alt:"media",token:t});return l+u});return l[0]}(n,t,r.host,r._protocol)}),o);return l.errorHandler=function(e){let t=j(e);return function(n,r){let i=t(n,r);if(404===n.getStatus()){var s;i=(s=e.path,new h("object-not-found","Object '"+s+"' does not exist."))}return i.serverResponse=r.serverResponse,i}}(t),l}(e.storage,e._location,V());return e.storage.makeRequestWithTokens(t,K).then(e=>{if(null===e)throw new h("no-download-url","The given file does not have any download URLs.");return e})}(e=(0,a.m9)(e))}function et(e,t){return function(e,t){var n,r,i;if(!(t&&(n=t,/^[A-Za-z]+:\/\//.test(n))))return function e(t,n){if(t instanceof Q){let r=t;if(null==r._bucket)throw new h("no-default-bucket","No default bucket found. Did you set the '"+u+"' property when initializing the app?");let i=new G(r,r._bucket);return null!=n?e(i,n):i}return void 0!==n?function(e,t){let n=function(e,t){let n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new v(e._location.bucket,n);return new G(e.storage,r)}(t,n):t}(e,t);if(e instanceof Q)return r=e,i=t,new G(r,i);throw f("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,a.m9)(e),t)}function en(e=(0,s.Mq)(),t){e=(0,a.m9)(e);let n=(0,s.qX)(e,J),r=n.getImmediate({identifier:t});return r}(0,s.Xd)(new o.wA(J,function e(t,{instanceIdentifier:n}){let r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),a=t.getProvider("app-check-internal");return new Q(r,i,a,n,s.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(X,Y,""),(0,s.KN)(X,Y,"esm2017")},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3043)}])},9531:function(e,t,n){"use strict";n.d(t,{E:function(){return l},H:function(){return u}});var r=n(5893),i=n(2656),s=n(7294),a=n(6522),o=(0,s.createContext)(),l=function(){return(0,s.useContext)(o)};function u(e){var t=function(e,t,n){p(!0),(0,i.Xb)(a.I,e,n).then(function(){return(0,i.ck)(a.I.currentUser,{displayName:t})}).then(function(e){return console.log(e)}).catch(function(e){return v(e.message)}).finally(function(){return p(!1)})},n=function(e,t){p(!0),(0,i.e5)(a.I,e,t).then(function(e){return console.log(e)}).catch(function(e){return v(e.message)}).finally(function(){return p(!1)})},l=function(){(0,i.w7)(a.I)},u=(0,s.useState)(null),h=u[0],c=u[1],d=(0,s.useState)(),f=d[0],p=d[1],g=(0,s.useState)(""),m=g[0],v=g[1];return(0,s.useEffect)(function(){return p(!0),(0,i.Aj)(a.I,function(e){e?c(e):c(null),v(""),p(!1)})},[]),(0,r.jsx)(o.Provider,{value:{currentUser:h,loading:f,error:m,signUp:t,signIn:n,logout:l},children:e.children})}},5834:function(e,t,n){"use strict";n.d(t,{B:function(){return u},g:function(){return l}});var r=n(5893),i=n(5321),s=n(7294),a=n(6522),o=(0,s.createContext)(),l=function(){return(0,s.useContext)(o)};function u(e){var t=e.children,n=(0,s.useState)(null),l=n[0],u=n[1],h=(0,s.useState)(!1),c=h[0],d=h[1];return(0,s.useEffect)(function(){var e=(0,i.IO)((0,i.hJ)(a.db,"events"));d(!0);var t=(0,i.cf)(e,function(e){var t=[];e.forEach(function(e){var n=!1;new Date("".concat(e.data().event_end_date,"T").concat(e.data().event_end_time,":00"))<new Date&&(n=!0),t.push({data:e.data(),id:e.id,event_closed:n})}),u(t),d(!1)});return function(){return t()}},[]),(0,r.jsx)(o.Provider,{value:{data:l,loading:c},children:t})}},6522:function(e,t,n){"use strict";n.d(t,{I:function(){return h},db:function(){return u},t:function(){return l}});var r=n(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,r.KN)("firebase","9.10.0","app");var i=n(1153),s=n(5321),a=n(2656),o=(0,r.ZF)({apiKey:"AIzaSyCjW6BX5tOwRxmgrdlez8jogmDvzRrjB0Y",authDomain:"internship-dev-e59b3.firebaseapp.com",projectId:"internship-dev-e59b3",storageBucket:"internship-dev-e59b3.appspot.com",messagingSenderId:"186839654247",appId:"1:186839654247:web:fd90f4bda6074d52b119c2"}),l=(0,i.cF)(o),u=(0,s.ad)(o),h=(0,a.v0)(o)},1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,s=n(7273).Z,a=i(n(7294)),o=n(6273),l=n(2725),u=n(3462),h=n(1018),c=n(7190),d=n(1210),f=n(8684),p=void 0!==a.default.useTransition,g={};function m(e,t,n,r){if(e&&o.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var i=r&&void 0!==r.locale?r.locale:e&&e.locale;g[t+"%"+n+(i?"%"+i:"")]=!0}}var v=a.default.forwardRef(function(e,t){var n,i,v=e.href,y=e.as,$=e.children,w=e.prefetch,b=e.passHref,E=e.replace,I=e.shallow,T=e.scroll,k=e.locale,C=e.onClick,S=e.onMouseEnter,A=e.onTouchStart,R=e.legacyBehavior,_=void 0===R?!0!==Boolean(!1):R,N=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=$,_&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var D=!1!==w,L=r(p?a.default.useTransition():[],2)[1],x=a.default.useContext(u.RouterContext),O=a.default.useContext(h.AppRouterContext);O&&(x=O);var P=a.default.useMemo(function(){var e=r(o.resolveHref(x,v,!0),2),t=e[0],n=e[1];return{href:t,as:y?o.resolveHref(x,y):n||t}},[x,v,y]),M=P.href,U=P.as,V=a.default.useRef(M),F=a.default.useRef(U);_&&(i=a.default.Children.only(n));var B=_?i&&"object"==typeof i&&i.ref:t,q=r(c.useIntersection({rootMargin:"200px"}),3),j=q[0],z=q[1],H=q[2],K=a.default.useCallback(function(e){(F.current!==U||V.current!==M)&&(H(),F.current=U,V.current=M),j(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[U,B,M,H,j]);a.default.useEffect(function(){var e=z&&D&&o.isLocalURL(M),t=void 0!==k?k:x&&x.locale,n=g[M+"%"+U+(t?"%"+t:"")];e&&!n&&m(x,M,U,{locale:t})},[U,M,z,k,D,x]);var G={ref:K,onClick:function(e){_||"function"!=typeof C||C(e),_&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,s,a,l,u,h){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(c=e).currentTarget.target)||"_self"===d)&&!c.metaKey&&!c.ctrlKey&&!c.shiftKey&&!c.altKey&&(!c.nativeEvent||2!==c.nativeEvent.which)&&o.isLocalURL(n)){e.preventDefault();var c,d,f=function(){"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:s,locale:l,scroll:a}):t[i?"replace":"push"](n,{forceOptimisticNavigation:!h})};u?u(f):f()}}(e,x,M,U,E,I,T,k,O?L:void 0,D)},onMouseEnter:function(e){_||"function"!=typeof S||S(e),_&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),!(!D&&O)&&o.isLocalURL(M)&&m(x,M,U,{priority:!0})},onTouchStart:function(e){_||"function"!=typeof A||A(e),_&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),!(!D&&O)&&o.isLocalURL(M)&&m(x,M,U,{priority:!0})}};if(!_||b||"a"===i.type&&!("href"in i.props)){var W=void 0!==k?k:x&&x.locale,Q=x&&x.isLocaleDomain&&d.getDomainLocale(U,W,x.locales,x.domainLocales);G.href=Q||f.addBasePath(l.addLocale(U,W,x&&x.defaultLocale))}return _?a.default.cloneElement(i,G):a.default.createElement("a",Object.assign({},N,G),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,n=e.rootRef,u=e.rootMargin,h=e.disabled||!a,c=r(i.useState(!1),2),d=c[0],f=c[1],p=r(i.useState(null),2),g=p[0],m=p[1];return i.useEffect(function(){if(a){if(!h&&!d&&g&&g.tagName){var e,t,r,i,c,p,m;return e=g,t=function(e){return e&&f(e)},c=(i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=o.get(r)))return t;var i=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},l.push(n),o.set(n,t),t}(r={root:null==n?void 0:n.current,rootMargin:u})).id,p=i.observer,(m=i.elements).set(e,t),p.observe(e),function(){if(m.delete(e),p.unobserve(e),0===m.size){p.disconnect(),o.delete(c);var t=l.findIndex(function(e){return e.root===c.root&&e.margin===c.margin});t>-1&&l.splice(t,1)}}}}else if(!d){var v=s.requestIdleCallback(function(){return f(!0)});return function(){return s.cancelIdleCallback(v)}}},[g,h,u,n,d]),[m,d,i.useCallback(function(){f(!1)},[])]};var i=n(7294),s=n(9311),a="function"==typeof IntersectionObserver,o=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),i=r.default.createContext(null);t.AppRouterContext=i;var s=r.default.createContext(null);t.LayoutRouterContext=s;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a},3043:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(6042),i=n(5893),s=n(7294),a=n(1664),o=n.n(a),l=n(1163),u=n(9531),h=n(9829),c=n.n(h);function d(){var e=function(){f(!d)},t=(0,u.E)(),n=t.currentUser,r=t.logout,a=(0,l.useRouter)(),h=(0,s.useState)(!1),d=h[0],f=h[1],p=(0,s.useState)(!1),g=p[0],m=p[1],v=(0,s.useRef)();return(0,i.jsx)("header",{className:c().header,children:(0,i.jsxs)("nav",{className:c().navbar,children:[(0,i.jsx)("div",{className:c().logo__container,children:(0,i.jsx)("div",{className:c().logo__text,onClick:function(){a.replace("/")},children:"ScheduLIT"})}),(0,i.jsxs)("div",{className:d?"".concat(c().navbar__right__active," ").concat(c().navbar__right):"".concat(c().navbar__right),ref:v,children:[(0,i.jsx)(o(),{href:"/events",children:(0,i.jsx)("div",{className:c().navbar__right__text,onClick:function(){350===v.current.clientWidth&&e()},children:"Browse Events"})}),(0,i.jsx)("button",{className:"form-btn ".concat(c().event__add__btn),onClick:function(){n?a.push("/addevent"):a.replace("/login"),350===v.current.clientWidth&&e()},children:"Create Event"}),n?(0,i.jsx)("div",{className:c().navbar__right__text,onClick:function(){m(!g)},children:n.displayName}):(0,i.jsx)(o(),{href:"/login",children:(0,i.jsx)("div",{className:c().navbar__right__text,onClick:function(){350===v.current.clientWidth&&e()},children:"Login"})}),n&&(0,i.jsxs)("div",{className:g?"".concat(c().account__dropdown__active," ").concat(c().account__dropdown):"".concat(c().account__dropdown),children:[(0,i.jsx)("div",{className:c().dropdown__option,children:"Manage my events"}),(0,i.jsx)("div",{className:c().dropdown__option,onClick:r,children:"Logout"})]})]}),(0,i.jsxs)("div",{className:c().burger,onClick:e,children:[(0,i.jsx)("div",{className:d?"".concat(c().toggle," ").concat(c().burger__line1):"".concat(c().burger__line1)}),(0,i.jsx)("div",{className:d?"".concat(c().toggle," ").concat(c().burger__line2):"".concat(c().burger__line2)}),(0,i.jsx)("div",{className:d?"".concat(c().toggle," ").concat(c().burger__line3):"".concat(c().burger__line3)})]})]})})}function f(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{}),t]})}var p=n(5834);n(906);var g=function(e){var t=e.Component,n=e.pageProps;return(0,i.jsx)(u.H,{children:(0,i.jsx)(p.B,{children:(0,i.jsx)(f,{children:(0,i.jsx)(t,(0,r.Z)({},n))})})})}},9829:function(e){e.exports={header:"NavBar_header__M5PKn",navbar:"NavBar_navbar__JWJL8",logo__container:"NavBar_logo__container__11dXK",logo:"NavBar_logo__MYO60",logo__text:"NavBar_logo__text__bY_Ak",navbar__right:"NavBar_navbar__right__zH0L9",navbar__right__text:"NavBar_navbar__right__text__WB2Af",account__dropdown:"NavBar_account__dropdown__1XJjd",account__dropdown__active:"NavBar_account__dropdown__active__5PvxH",dropdown__option:"NavBar_dropdown__option__vJmx6",burger:"NavBar_burger__PWV2D",toggle:"NavBar_toggle__kJvol",burger__line1:"NavBar_burger__line1__TFtuO",burger__line2:"NavBar_burger__line2___rZLI",burger__line3:"NavBar_burger__line3__FFwZf",event__add__btn:"NavBar_event__add__btn__r0DGW",navbar__right__active:"NavBar_navbar__right__active__lsGIl"}},906:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(r){n=a}}();var l=[],u=!1,h=-1;function c(){u&&r&&(u=!1,r.length?l=r.concat(l):h=-1,l.length&&d())}function d(){if(!u){var e=o(c);u=!0;for(var t=l.length;t;){for(r=l,l=[];++h<t;)r&&r[h].run();h=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},a=!0;try{t[e](s,s.exports,r),a=!1}finally{a&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},5816:function(e,t,n){"use strict";n.d(t,{Jn:function(){return O},qX:function(){return D},Xd:function(){return N},Mq:function(){return M},ZF:function(){return P},KN:function(){return U}});var r,i=n(8463),s=n(3333),a=n(4444);let o=(e,t)=>t.some(t=>e instanceof t),l,u,h=new WeakMap,c=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(m(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let t=function(e){if("function"==typeof e){var t;return(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(t)?function(...e){return t.apply(v(this),e),m(h.get(this))}:function(...e){return m(t.apply(v(this),e))}:function(e,...n){let r=t.call(v(this),e,...n);return d.set(r,e.sort?e.sort():[e]),m(r)}}return(e instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});c.set(e,t)}(e),o(e,l||(l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(e,g):e}(e);return t!==e&&(f.set(e,t),p.set(t,e)),t}let v=e=>p.get(e),y=["get","getKey","getAll","getAllKeys","count"],$=["put","add","delete","clear"],w=new Map;function b(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=$.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||y.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done,]))[0]};return w.set(t,s),s}g=(r=e=>({...e,get:(t,n,r)=>b(t,n)||e.get(t,n,r),has:(t,n)=>!!b(t,n)||e.has(t,n)}))(g);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let I="@firebase/app",T="0.7.33",k=new s.Yd("@firebase/app"),C="[DEFAULT]",S={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,R=new Map;function _(e,t){try{e.container.addComponent(t)}catch(n){k.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function N(e){let t=e.name;if(R.has(t))return k.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(R.set(t,e),A.values()))_(n,e);return!0}function D(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let L=new a.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let O="9.10.0";function P(e,t={}){if("object"!=typeof t){let n=t;t={name:n}}let r=Object.assign({name:C,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw L.create("bad-app-name",{appName:String(s)});let o=A.get(s);if(o){if((0,a.vZ)(e,o.options)&&(0,a.vZ)(r,o.config))return o;throw L.create("duplicate-app",{appName:s})}let l=new i.H0(s);for(let u of R.values())l.addComponent(u);let h=new x(e,r,l);return A.set(s,h),h}function M(e=C){let t=A.get(e);if(!t)throw L.create("no-app",{appName:e});return t}function U(e,t,n){var r;let s=null!==(r=S[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);let a=s.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let l=[`Unable to register library "${s}" with version "${t}":`];a&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),k.warn(l.join(" "));return}N(new i.wA(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}let V="firebase-heartbeat-store",F=null;function B(){return F||(F=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=m(a);return r&&a.addEventListener("upgradeneeded",e=>{r(m(a.result),e.oldVersion,e.newVersion,m(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),o})("firebase-heartbeat-database",1,{upgrade(e,t){0===t&&e.createObjectStore(V)}}).catch(e=>{throw L.create("idb-open",{originalErrorMessage:e.message})})),F}async function q(e){var t;try{let n=await B();return n.transaction(V).objectStore(V).get(z(e))}catch(r){if(r instanceof a.ZR)k.warn(r.message);else{let i=L.create("idb-get",{originalErrorMessage:null===(t=r)||void 0===t?void 0:t.message});k.warn(i.message)}}}async function j(e,t){var n;try{let r=await B(),i=r.transaction(V,"readwrite"),s=i.objectStore(V);return await s.put(t,z(e)),i.done}catch(o){if(o instanceof a.ZR)k.warn(o.message);else{let l=L.create("idb-set",{originalErrorMessage:null===(n=o)||void 0===n?void 0:n.message});k.warn(l.message)}}}function z(e){return`${e.name}!${e.options.appId}`}class H{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new G(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=K();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=K(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let s=n.find(e=>e.agent===i.agent);if(s){if(s.dates.push(i.date),W(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),W(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,a.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function K(){let e=new Date;return e.toISOString().substring(0,10)}class G{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await q(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return j(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return j(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function W(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}N(new i.wA("platform-logger",e=>new E(e),"PRIVATE")),N(new i.wA("heartbeat",e=>new H(e),"PRIVATE")),U(I,T,""),U(I,T,"esm2017"),U("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return o},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new r.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(s){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){var t;if(t=e,"EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(n){}for(let[r,i]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(r);try{let o=this.getOrInitializeService({instanceIdentifier:a});i.resolve(o)}catch(l){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[i,s]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(i);n===a&&s.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var n;let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===s?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return u},in:function(){return r}}),(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,o={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=o[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,[].push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},4924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},6042:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(4924);function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){(0,r.Z)(e,t,n[t])})}return e}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(387)}),_N_E=e.O()}]);