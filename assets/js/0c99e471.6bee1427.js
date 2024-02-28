"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[24834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},o="Migration from 0.1.x to 0.3.x",l={unversionedId:"kits/tractusx-edc/docs/migration/Version_0.1.x_0.3.x",id:"version-3.1.0/kits/tractusx-edc/docs/migration/Version_0.1.x_0.3.x",title:"Migration from 0.1.x to 0.3.x",description:"Deprecation",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/docs/migration/Version_0.1.x_0.3.x.md",sourceDirName:"kits/tractusx-edc/docs/migration",slug:"/kits/tractusx-edc/docs/migration/Version_0.1.x_0.3.x",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/docs/migration/Version_0.1.x_0.3.x",draft:!1,tags:[],version:"3.1.0",frontMatter:{},sidebar:"kits",previous:{title:"Migration Version 0.1.2 to 0.1.3",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/docs/migration/Version_0.1.2_0.1.3"},next:{title:"Migration from 0.3.0 to 0.3.1",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/docs/migration/Version_0.3.0_0.3.1"}},c={},s=[{value:"Deprecation",id:"deprecation",level:2},{value:"Management API changes",id:"management-api-changes",level:2},{value:"Settings changes",id:"settings-changes",level:2},{value:"Other changes",id:"other-changes",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-from-01x-to-03x"},"Migration from 0.1.x to 0.3.x"),(0,i.kt)("h2",{id:"deprecation"},"Deprecation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"edc-controlplane")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"edc-dataplane")," charts are deprecated, please use ",(0,i.kt)("inlineCode",{parentName:"li"},"tractusx-connector")," which combines the former ones")),(0,i.kt)("h2",{id:"management-api-changes"},"Management API changes"),(0,i.kt)("p",null,"Details at the ",(0,i.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/eclipse-edc-bot/management-api/0.0.1-SNAPSHOT"},"official documentation on swaggerhub")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Management API for creating resources (assets, policydefinitions, contractdefinitions, ...) will return a body containing the id of the created resource"),(0,i.kt)("li",{parentName:"ul"},"Added a ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /request")," for every management endpoint (assets, policydefinitions, ...) to query all the resources. The existent ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /")," have been deprecated"),(0,i.kt)("li",{parentName:"ul"},"added ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," field in ",(0,i.kt)("inlineCode",{parentName:"li"},"DataRequestDTO")," (",(0,i.kt)("inlineCode",{parentName:"li"},"/transferprocess")," management api), if not set it will use a randomly generated one."),(0,i.kt)("li",{parentName:"ul"},"Removed field ",(0,i.kt)("inlineCode",{parentName:"li"},"assetId")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"ContractOffer"),". It was always null though, so there should be nothing to do about it."),(0,i.kt)("li",{parentName:"ul"},"on ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /contractdefinitions")," a ",(0,i.kt)("inlineCode",{parentName:"li"},"duration")," field can be added to control the duration of the contract."),(0,i.kt)("li",{parentName:"ul"},"added the ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /assets/{id}/address")," endpoint to being able to retrieve the stored ",(0,i.kt)("inlineCode",{parentName:"li"},"DataAddress"))),(0,i.kt)("h2",{id:"settings-changes"},"Settings changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"refactored the HTTP server contexts (more details on the ",(0,i.kt)("a",{parentName:"li",href:"https://eclipse-edc.github.io/docs/#/submodule/Connector/docs/developer/decision-records/2022-11-09-api-refactoring/renaming"},"related decision record"),"). They need to be refactored as:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web.http.data")," becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"web.http.management")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web.http.ids")," becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"web.http.protocol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web.http.validation"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"web.http.controlplane")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"web.http.dataplane")," become ",(0,i.kt)("inlineCode",{parentName:"li"},"web.http.control")))),(0,i.kt)("li",{parentName:"ul"},"Healthcheck api now it's exposed under the ",(0,i.kt)("inlineCode",{parentName:"li"},"management")," context."),(0,i.kt)("li",{parentName:"ul"},"Removed default value for setting ",(0,i.kt)("inlineCode",{parentName:"li"},"edc.transfer.proxy.token.verifier.publickey.alias")," so it must be valued accordingly"),(0,i.kt)("li",{parentName:"ul"},"made the state machine settings configurable so it will be possible to tune them accordingly. More details in the ",(0,i.kt)("a",{parentName:"li",href:"https://eclipse-edc.github.io/docs/#/submodule/Connector/docs/developer/performance-tuning"},"related documentation entry"),"."),(0,i.kt)("li",{parentName:"ul"},"renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"edc.receiver.http.endpoint")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"edc.receiver.http.dynamic.endpoint")),(0,i.kt)("li",{parentName:"ul"},"renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"edc.oauth.public.key.alias")," setting to ",(0,i.kt)("inlineCode",{parentName:"li"},"edc.oauth.certificate.alias"))),(0,i.kt)("h2",{id:"other-changes"},"Other changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supported ",(0,i.kt)("inlineCode",{parentName:"li"},"/public")," data plane endpoint without trailing slash, that can be eventually removed from the configuration"),(0,i.kt)("li",{parentName:"ul"},"packages name changed from ",(0,i.kt)("inlineCode",{parentName:"li"},"org.eclipse.dataspaceconnector")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"org.eclipse.edc")),(0,i.kt)("li",{parentName:"ul"},"To specify multiple BPN into Policies the operator ",(0,i.kt)("inlineCode",{parentName:"li"},"OR")," can be used. More details in the ",(0,i.kt)("a",{parentName:"li",href:"../../edc-extensions/business-partner-validation"},"business-partner-validation extension documentation")),(0,i.kt)("li",{parentName:"ul"},"HTTP Dynamic Endpoint Data Reference: The URL for Endpoint Data Reference can be also provided via the call for starting the transfer process. More details ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/tree/main/extensions/control-plane/transfer/transfer-pull-http-dynamic-receiver"},"Http Dynamic EDR receiver"))))}p.isMDXComponent=!0}}]);