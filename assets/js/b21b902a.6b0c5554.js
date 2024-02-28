"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[74840],{41700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),o=a(26389),l=a(94891),r=(a(75190),a(47507)),n=a(24310),p=a(63303),d=(a(75035),a(85162));const c={id:"query-negotiations",title:"queryNegotiations",description:"Returns all contract negotiations according to a query",sidebar_label:"queryNegotiations",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Negotiation"],description:"Returns all contract negotiations according to a query",operationId:"queryNegotiations",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/QuerySpec"},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Criterion"},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"Criterion",operandLeft:"fieldName",operator:"=",operandRight:"some value"}}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}}}}},responses:{200:{description:"The contract negotiations that match the query",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{"@id":{type:"string",example:null},"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/ContractNegotiation"},callbackAddresses:{type:"array",example:null,items:{type:"object",properties:{authCodeId:{type:"string",example:null},authKey:{type:"string",example:null},events:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},transactional:{type:"boolean",example:null},uri:{type:"string",example:null}},example:null}},contractAgreementId:{type:"string",example:null},counterPartyAddress:{type:"string",example:null},counterPartyId:{type:"string",example:null},errorDetail:{type:"string",example:null},protocol:{type:"string",example:null},state:{type:"string",example:null},type:{type:"string",example:null,enum:["CONSUMER","PROVIDER"]}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"https://w3id.org/edc/v0.0.1/ns/ContractNegotiation","@id":"negotiation-id",type:"PROVIDER",protocol:"dataspace-protocol-http",counterPartyId:"counter-party-id",counterPartyAddress:"http://counter/party/address",state:"VERIFIED",contractAgreementId:"contract:agreement:id",errorDetail:"eventual-error-detail",createdAt:1688465655,callbackAddresses:[{transactional:!1,uri:"http://callback/url",events:["contract.negotiation","transfer.process"],authKey:"auth-key",authCodeId:"auth-code-id"}]}}}}}},400:{description:"Request was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/v2/contractnegotiations/request",servers:[{url:"/"}],jsonRequestBodyExample:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]},info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"query Negotiations",description:{content:"Returns all contract negotiations according to a query",type:"text/plain"},url:{path:["v2","contractnegotiations","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},m=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-negotiations",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-negotiations",title:"queryNegotiations",description:"Returns all contract negotiations according to a query",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-negotiations.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-negotiations",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-negotiations",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"query-negotiations",title:"queryNegotiations",description:"Returns all contract negotiations according to a query",sidebar_label:"queryNegotiations",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Negotiation"],description:"Returns all contract negotiations according to a query",operationId:"queryNegotiations",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/QuerySpec"},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Criterion"},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"Criterion",operandLeft:"fieldName",operator:"=",operandRight:"some value"}}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}}}}},responses:{200:{description:"The contract negotiations that match the query",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{"@id":{type:"string",example:null},"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/ContractNegotiation"},callbackAddresses:{type:"array",example:null,items:{type:"object",properties:{authCodeId:{type:"string",example:null},authKey:{type:"string",example:null},events:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},transactional:{type:"boolean",example:null},uri:{type:"string",example:null}},example:null}},contractAgreementId:{type:"string",example:null},counterPartyAddress:{type:"string",example:null},counterPartyId:{type:"string",example:null},errorDetail:{type:"string",example:null},protocol:{type:"string",example:null},state:{type:"string",example:null},type:{type:"string",example:null,enum:["CONSUMER","PROVIDER"]}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"https://w3id.org/edc/v0.0.1/ns/ContractNegotiation","@id":"negotiation-id",type:"PROVIDER",protocol:"dataspace-protocol-http",counterPartyId:"counter-party-id",counterPartyAddress:"http://counter/party/address",state:"VERIFIED",contractAgreementId:"contract:agreement:id",errorDetail:"eventual-error-detail",createdAt:1688465655,callbackAddresses:[{transactional:!1,uri:"http://callback/url",events:["contract.negotiation","transfer.process"],authKey:"auth-key",authCodeId:"auth-code-id"}]}}}}}},400:{description:"Request was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/v2/contractnegotiations/request",servers:[{url:"/"}],jsonRequestBodyExample:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]},info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"query Negotiations",description:{content:"Returns all contract negotiations according to a query",type:"text/plain"},url:{path:["v2","contractnegotiations","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"queryEdrs",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-edrs"},next:{title:"queryPolicyDefinitions",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-policy-definitions"}},y={},g=[{value:"queryNegotiations",id:"querynegotiations",level:2}],v={toc:g};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"querynegotiations"},"queryNegotiations"),(0,s.kt)("p",null,"Returns all contract negotiations according to a query"),(0,s.kt)(l.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"filterExpression"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"operandLeft",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"operandRight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"operator",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(n.Z,{collapsible:!1,name:"limit",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"offset",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"sortField",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"sortOrder",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ASC`, `DESC`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The contract negotiations that match the query")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema"),(0,s.kt)("span",{style:{opacity:"0.6"}}," array")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"@id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"callbackAddresses"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"authCodeId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"authKey",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"events",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"transactional",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"uri",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(n.Z,{collapsible:!1,name:"contractAgreementId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"counterPartyAddress",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"counterPartyId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"errorDetail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"protocol",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"state",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`CONSUMER`, `PROVIDER`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Request was malformed")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema"),(0,s.kt)("span",{style:{opacity:"0.6"}}," array")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);