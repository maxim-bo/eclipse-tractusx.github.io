"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[8415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Control Plane EDR API",s={unversionedId:"kits/tractusx-edc/edc-extensions/edr/edr-api/README",id:"version-23.09/kits/tractusx-edc/edc-extensions/edr/edr-api/README",title:"Control Plane EDR API",description:"This module provides extensions to the EDC management API for dealing with EDR tokens.",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/edc-extensions/edr/edr-api/README.md",sourceDirName:"kits/tractusx-edc/edc-extensions/edr/edr-api",slug:"/kits/tractusx-edc/edc-extensions/edr/edr-api/",permalink:"/docs-kits/23.09/kits/tractusx-edc/edc-extensions/edr/edr-api/",draft:!1,tags:[],version:"23.09",frontMatter:{},sidebar:"kits",previous:{title:"Data Plane Selector Configuration Extension",permalink:"/docs-kits/23.09/kits/tractusx-edc/edc-extensions/dataplane-selector-configuration/"},next:{title:"SQL-based `EndpointDataReferenceCache`  extension",permalink:"/docs-kits/23.09/kits/tractusx-edc/edc-extensions/edr/edr-cache-sql/"}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"control-plane-edr-api"},"Control Plane EDR API"),(0,a.kt)("p",null,"This module provides extensions to the EDC management API for dealing with EDR tokens."),(0,a.kt)("p",null,"The extensions are added to the same context as the management APIs, so no additional configuration is required."),(0,a.kt)("p",null,"The base path of the API will be ",(0,a.kt)("inlineCode",{parentName:"p"},"<mgmtContext>/edrs")),(0,a.kt)("p",null,"This module for now provides three APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initiating an EDR negotiation token"),(0,a.kt)("li",{parentName:"ul"},"Fetching the available EDRs"),(0,a.kt)("li",{parentName:"ul"},"Fetching the single EDR")),(0,a.kt)("p",null,"The initiate negotiation EDR leverage the callbacks mechanism introduced in the latest EDC, and it handles\nthe contract negotiation and the transfer request in one API call. Once the transfer has been completed\nthe provider will return the EDR that will be stored into the consumer EDR store/cache. Users can interact\nwith the EDR store/cache for fetching the EDR and then requesting the data, or can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," API described ",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/23.09/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-consumer-api/"},"here")),(0,a.kt)("p",null,"An overview on how to use the EDR APIs is available ",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/edr-api-overview/"},"here")))}p.isMDXComponent=!0}}]);