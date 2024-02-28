"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[32497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>O});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,O=u["".concat(s,".").concat(m)]||u[m]||k[m]||i;return r?n.createElement(O,a(a({ref:t},l),{},{components:r})):n.createElement(O,a({ref:t},l))}));function O(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a="DAPS Token Script",p={unversionedId:"kits/tractusx-edc/docs/development/scripts/daps_token/README",id:"version-23.12/kits/tractusx-edc/docs/development/scripts/daps_token/README",title:"DAPS Token Script",description:"Script to request an IDS token from the DAPS.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/development/scripts/daps_token/README.md",sourceDirName:"kits/tractusx-edc/docs/development/scripts/daps_token",slug:"/kits/tractusx-edc/docs/development/scripts/daps_token/",permalink:"/docs-kits/kits/tractusx-edc/docs/development/scripts/daps_token/",draft:!1,tags:[],version:"23.12",frontMatter:{}},s={},c=[{value:"Usage",id:"usage",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"daps-token-script"},"DAPS Token Script"),(0,o.kt)("p",null,"Script to request an IDS token from the DAPS."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy your DAPS private key into ",(0,o.kt)("inlineCode",{parentName:"p"},"key.pem"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit in the script the following variables"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token_url")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client_id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resource")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run script"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./daps_auth_sh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Take the ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," from the output in use it in IDS messages. The output of the script looks like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "eyJ0eXAiOiJhdCtqd3QiLCJraWQiOiI3MDM2MzAwNzVkYTM2N2IxYmZiYjRjY2Q0N2M1Y2ViMGQ5ZjM1MmRmYWU2MzJkMzYxMGMxNzNmMTM1NDI0NmM5IiwiYWxnIjoiUlMyNTYifQ.eyJzY29wZSI6Imlkc2M6SURTX0NPTk5FQ1RPUl9BVFRSSUJVVEVTX0FMTCIsImF1ZCI6WyJodHRwczovL3Blbi10ZXN0LXBsYXRvLXR4ZGMuaW50LmRlbW8uY2F0ZW5hLXgubmV0L2FwaS92MS9pZHMvZGF0YSJdLCJpc3MiOiJodHRwOi8vaWRzLWRhcHM6NDU2Ny8iLCJzdWIiOiI5OTo4MzpBNzoxNzo4NjpGRjo5ODo5MzpDRTpBMDpERDpBMTpGMTozNjpGQTpGNjowRjo3NTowQToyMzprZXlpZDo5OTo4MzpBNzoxNzo4NjpGRjo5ODo5MzpDRTpBMDpERDpBMTpGMTozNjpGQTpGNjowRjo3NTowQToyMyIsIm5iZiI6MTY3ODMxMDE0OSwiaWF0IjoxNjc4MzEwMTQ5LCJqdGkiOiJkZmY5Y2FmOS05NDZiLTQ1YmMtOWY4My0yYmJkMDI4NTlmYWMiLCJleHAiOjE2NzgzMTM3NDksImNsaWVudF9pZCI6Ijk5OjgzOkE3OjE3Ojg2OkZGOjk4OjkzOkNFOkEwOkREOkExOkYxOjM2OkZBOkY2OjBGOjc1OjBBOjIzOmtleWlkOjk5OjgzOkE3OjE3Ojg2OkZGOjk4OjkzOkNFOkEwOkREOkExOkYxOjM2OkZBOkY2OjBGOjc1OjBBOjIzIiwicmVmZXJyaW5nQ29ubmVjdG9yIjoiaHR0cDovL3BsYXRvLWNvbnRyb2xwbGFuZS9CUE5QTEFUTyJ9.JQqt9gCpaG7rLztO5-pJa7HIybVjKog9v0CFXHoVJZgdxMc5nTKZnuwBVHC1PXuWrBiyPxPoNg0TsfRg9DqF8rFD5noarxOJ1S84BF7AUUi3phQzBF26lsmNmOW_gdNBC-8xw1WMo5hRHH56cB64_x4V8T4VwFlSYYrmA5ge_EiPCW_KWF9sNguXBKs8uTbLB3lvTELGTjmZI93tVR-vYuYzW2jxH1PJNW29KJRQcM0D1AiveMs3_ThRjheEvugyh9QIY1RwPXMgYQpSTvoumNuFFTnpR21ueWfSUtU-4Qu9suNTkcaFihvEObXVrhyMja-HjhQaC8i0XsAgY0tT1A",\n  "expires_in": 3600,\n  "token_type": "bearer",\n  "scope": "idsc:IDS_CONNECTOR_ATTRIBUTES_ALL"\n}\n')))))}u.isMDXComponent=!0}}]);