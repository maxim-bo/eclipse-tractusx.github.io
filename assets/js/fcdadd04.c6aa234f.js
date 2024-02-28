"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[27127],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(i),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},13475:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const a={id:"Specification OSim Kit",title:"Specification",description:"OSim Kit",sidebar_position:4},o=void 0,s={unversionedId:"kits/OSim Kit/Software Development View/Specification OSim Kit",id:"version-23.12/kits/OSim Kit/Software Development View/Specification OSim Kit",title:"Specification",description:"OSim Kit",source:"@site/docs-kits_versioned_docs/version-23.12/kits/OSim Kit/Software Development View/page_software-development-view.md",sourceDirName:"kits/OSim Kit/Software Development View",slug:"/kits/OSim Kit/Software Development View/Specification OSim Kit",permalink:"/docs-kits/kits/OSim Kit/Software Development View/Specification OSim Kit",draft:!1,tags:[],version:"23.12",sidebarPosition:4,frontMatter:{id:"Specification OSim Kit",title:"Specification",description:"OSim Kit",sidebar_position:4},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs-kits/kits/OSim Kit/Software Development View/osim-api"},next:{title:"receiveLatestSimulationResult",permalink:"/docs-kits/kits/OSim Kit/Software Development View/receive-latest-simulation-result"}},c={},l=[{value:"OSim Kit",id:"osim-kit",level:3},{value:"Sample Data",id:"sample-data",level:2}],p={toc:l};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"osim kit banner",src:i(40775).Z,width:"285",height:"245"})),(0,r.kt)("h3",{id:"osim-kit"},"OSim Kit"),(0,r.kt)("h2",{id:"sample-data"},"Sample Data"),(0,r.kt)("p",null,"The following example shows the payload used for exchange  of simulation results between the OSim partners. The format corresponds with AAS format serialized as a JSON string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owner": { "id": "BPNL00000007OTZ3" },\n  "dataQuality": 1,\n  "description": "Daily standard simulation",\n  "comment": "successful simulation",\n  "expirationTimestamp": "2023-03-24T09:15:24.000Z",\n  "runId": "0fece48b-c8d1-4180-1a9caca6d67e",\n  "shipments": [\n    {\n      "handlingUnits": [\n       {\n          "name": "Palette",\n          "volume": 1,\n          "weight": 189,\n          "batches": [\n            {\n              "unitOfMeasurement": "KG",\n              "materialName": "KK1000GR-Geh\xe4use-Rot",\n              "quantity": 50,\n              "materialNumber": "KK1000GR",\n              "batchOrderId": "Order-0001",\n              "batchId": "Batch_1",\n              "hazardousGoods": false,\n              "batchExpirationTimestamp": "2023-08-22T16:00:00.000Z",\n              "batchNumber": "45"\n            }\n          ],\n          "handlingUnitId": "HUT_1",\n          "amount": 1\n        }\n      ],\n      "shipmentId": "DE51515151",\n      "recipientTimestampPlanned": "2023-04-19T09:00:00.000Z",\n      "destination": { "id": "BPNL00000007OTZ3" },\n      "recipient": { "id": "BPNL00000007OTZ4" },\n      "logistics": { "id": "BPNL00000007OS0H" },\n      "preceding": {},\n      "splittingAllowed": true,\n      "destinationTimestamp": "2023-03-19T09:00:00.000Z"\n    }\n  ],\n  "timestamp": "2023-03-09T14:13:42.806Z"\n}\n')))}m.isMDXComponent=!0},40775:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/OSimKitIcon-5a297c66f720e50339198bbd38a4bc42.svg"}}]);