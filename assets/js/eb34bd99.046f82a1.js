"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[84483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={},a="Migration from 0.3.0 to 0.3.1",c={unversionedId:"kits/tractusx-edc/docs/migration/Version_0.3.1_0.3.2",id:"version-23.09/kits/tractusx-edc/docs/migration/Version_0.3.1_0.3.2",title:"Migration from 0.3.0 to 0.3.1",description:"Configuration of Azure KeyVault",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/docs/migration/Version_0.3.1_0.3.2.md",sourceDirName:"kits/tractusx-edc/docs/migration",slug:"/kits/tractusx-edc/docs/migration/Version_0.3.1_0.3.2",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/migration/Version_0.3.1_0.3.2",draft:!1,tags:[],version:"23.09",frontMatter:{},sidebar:"kits",previous:{title:"Migration from 0.3.0 to 0.3.1",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/migration/Version_0.3.0_0.3.1"},next:{title:"Migration from 0.3.3 to 0.3.4",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/migration/Version_0.3.3_0.3.4"}},s={},u=[{value:"Configuration of Azure KeyVault",id:"configuration-of-azure-keyvault",level:2}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration-from-030-to-031"},"Migration from 0.3.0 to 0.3.1"),(0,o.kt)("h2",{id:"configuration-of-azure-keyvault"},"Configuration of Azure KeyVault"),(0,o.kt)("p",null,"When using Helm Charts that use the Azure KeyVault (",(0,o.kt)("inlineCode",{parentName:"p"},"edc-runtime-memory"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edc-controlplane-postgres"),")\nit is now possible to select ",(0,o.kt)("em",{parentName:"p"},"either")," authentication via Client Secret (",(0,o.kt)("inlineCode",{parentName:"p"},"azure.vault.secret"),") or via\ncertificate (",(0,o.kt)("inlineCode",{parentName:"p"},"azure.vault.certificate"),")."),(0,o.kt)("p",null,"If neither of the two is configured, the runtime will fail to start issuing an error."))}p.isMDXComponent=!0}}]);