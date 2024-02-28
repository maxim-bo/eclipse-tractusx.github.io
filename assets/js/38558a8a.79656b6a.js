"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[99355],{74838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>k,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),o=a(94891),l=a(75190),c=a(47507),d=a(24310),p=a(63303),r=(a(75035),a(85162));const u={id:"decline-negotiation",title:"declineNegotiation",description:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",sidebar_label:"declineNegotiation",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Negotiation"],description:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",operationId:"declineNegotiation",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{200:{description:"Request to decline the Contract negotiation was successfully received",links:{"poll-state":{operationId:"getNegotiationState"}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},404:{description:"A contract negotiation with the given ID does not exist",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},deprecated:!0,method:"post",path:"/v2/contractnegotiations/{id}/decline",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"decline Negotiation",description:{content:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",type:"text/plain"},url:{path:["v2","contractnegotiations",":id","decline"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},m=void 0,h={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/decline-negotiation",id:"version-23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/decline-negotiation",title:"declineNegotiation",description:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/decline-negotiation.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/decline-negotiation",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/decline-negotiation",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"decline-negotiation",title:"declineNegotiation",description:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",sidebar_label:"declineNegotiation",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Negotiation"],description:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",operationId:"declineNegotiation",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{200:{description:"Request to decline the Contract negotiation was successfully received",links:{"poll-state":{operationId:"getNegotiationState"}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},404:{description:"A contract negotiation with the given ID does not exist",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},deprecated:!0,method:"post",path:"/v2/contractnegotiations/{id}/decline",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"decline Negotiation",description:{content:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",type:"text/plain"},url:{path:["v2","contractnegotiations",":id","decline"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"createPolicyDefinition",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-policy-definition"},next:{title:"deleteContractDefinition",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/delete-contract-definition"}},y={},g=[{value:"declineNegotiation",id:"declinenegotiation",level:2}],v={toc:g};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"declinenegotiation"},"declineNegotiation"),(0,s.kt)("admonition",{title:"deprecated",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,s.kt)("p",null,"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Request to decline the Contract negotiation was successfully received")),(0,s.kt)("div",null)),(0,s.kt)(r.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Request was malformed, e.g. id was null")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(r.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(r.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema"),(0,s.kt)("span",{style:{opacity:"0.6"}}," array")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(r.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(r.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A contract negotiation with the given ID does not exist")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(r.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(r.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema"),(0,s.kt)("span",{style:{opacity:"0.6"}}," array")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(r.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);