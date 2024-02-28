"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[79417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,f=m["".concat(o,".").concat(c)]||m[c]||k[c]||i;return a?r.createElement(f,s(s({ref:t},d),{},{components:a})):r.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:"Specification",title:"Specification",description:"",sidebar_position:1},s=void 0,l={unversionedId:"kits/Business Partner Kit/Software Development View/Specification",id:"version-23.09/kits/Business Partner Kit/Software Development View/Specification",title:"Specification",description:"",source:"@site/docs-kits_versioned_docs/version-23.09/kits/Business Partner Kit/Software Development View/page_software-development-view.md",sourceDirName:"kits/Business Partner Kit/Software Development View",slug:"/kits/Business Partner Kit/Software Development View/Specification",permalink:"/docs-kits/23.09/kits/Business Partner Kit/Software Development View/Specification",draft:!1,tags:[],version:"23.09",sidebarPosition:1,frontMatter:{id:"Specification",title:"Specification",description:"",sidebar_position:1},sidebar:"kits",previous:{title:"Development View",permalink:"/docs-kits/23.09/category/development-view"},next:{title:"Gate API",permalink:"/docs-kits/23.09/category/gate-api"}},o={},p=[{value:"Business Partner KIT",id:"business-partner-kit",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"BPDM Pool Api reference",id:"bpdm-pool-api-reference",level:2},{value:"Available Methods",id:"available-methods",level:3},{value:"1. Site Controller",id:"1-site-controller",level:3},{value:"2. Legal Entity Controller",id:"2-legal-entity-controller",level:3},{value:"3. Address Controller",id:"3-address-controller",level:3},{value:"4. Open Search Controller",id:"4-open-search-controller",level:3},{value:"5. Metadata Controller",id:"5-metadata-controller",level:3},{value:"6. Changelog Controller",id:"6-changelog-controller",level:3},{value:"7. BPN Controller",id:"7-bpn-controller",level:3},{value:"BPDM Gate Api reference",id:"bpdm-gate-api-reference",level:2},{value:"Available Methods",id:"available-methods-1",level:3},{value:"1. Sharing-state Controller",id:"1-sharing-state-controller",level:3},{value:"2. Site Controller",id:"2-site-controller",level:3},{value:"3. legal Entity Controller",id:"3-legal-entity-controller",level:3},{value:"4. Address Controller",id:"4-address-controller",level:3},{value:"5. Changelog controller",id:"5-changelog-controller",level:3},{value:"BPDM Bridge Dummy Api reference",id:"bpdm-bridge-dummy-api-reference",level:2},{value:"Available Methods",id:"available-methods-2",level:3},{value:"1. Bridge Controller",id:"1-bridge-controller",level:3}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Business partner kit banner",src:a(20140).Z,width:"285",height:"244"})),(0,n.kt)("h3",{id:"business-partner-kit"},"Business Partner KIT"),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("p",null,"The BPDM is comprised of two primary services: BPDM Pool and BPDM Gate. The Swagger UI interface, which is an interactive tool for exploring and testing RESTful APIs. Swagger UI provides a user-friendly interface for interacting with APIs, allowing you to make requests, view responses, and explore different API endpoints and operations, allowing you to drill down into specific endpoints and view the associated request parameters, response schemas, and sample responses."),(0,n.kt)("p",null,"The Business Partner Data Management includes the services that manages and shares business partner data with other Catena-X services. In the following sections, the available methods and different controllers of the API are explained.\nMore Information to the open-source repository can be found on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/bpdm"},"GitHub")),(0,n.kt)("h2",{id:"bpdm-pool-api-reference"},"BPDM Pool Api reference"),(0,n.kt)("p",null,"The Business Partner Data Management Pool includes the services that manages and shares business partner data with other Catena-X services. In the following sections, the available methods and different controllers of the API are explained."),(0,n.kt)("h3",{id:"available-methods"},"Available Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Request Method"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Request Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PUT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Update. The endpoint expects to receive the full updated record, including values that didn't change.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Search")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Search for the best match")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DELETE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Deletes all the records in the controller, resets the timestamp")))),(0,n.kt)("h3",{id:"1-site-controller"},"1. Site Controller"),(0,n.kt)("p",null,"The Site Controller is the controller that creates, updates, or retrieves business partners of type site (referenced via BPNS). There are PUT, POST and GET requests possible and api those are availble under site controller are clustered in table below. Hyperlink in each record gives you more information about api endpoint."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Site Controller Apis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/update-site"},"Update existing site business partners"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/create-site"},"Create new site business partners"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/search-sites"},"Search site partners by BPNs and/or parent BPNs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/search-main-addresses"},"Search Main Addresses"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-site"},"Get site partners by bpn"))))),(0,n.kt)("h3",{id:"2-legal-entity-controller"},"2. Legal Entity Controller"),(0,n.kt)("p",null,"The Legal Entity Controller calls, searches, creates or updates existing business partners of type legal entity (referenced via BPNL). There are PUT, POST and GET requests possible. The endpoint expects a perfect match or looks for the highest relevancy, depending on the request made. Some of the requests need a obligatory parameter, like business partner number or id value. Hyperlink in each record gives you more information about api endpoint."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Legal Entity Controller Apis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-legal-entities"},"Get page of legal entity business partners matching the search criteria"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/update-business-partners"},"Update existing legal entity business partners"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/create-business-partners"},"Create new legal entity business partners"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/set-legal-entity-currentness"},"Confirms that the data of a legal entity business partner is still up to date."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/search-sites-1"},"Search legal entity partners by BPNLs."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/search-legal-addresses"},"Search Legal Addresses."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-legal-entity"},"Get legal entity business partner by identifier."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-sites"},"Get site partners of a legal entity."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-addresses"},"Get address partners of a legal entity."))))),(0,n.kt)("h3",{id:"3-address-controller"},"3. Address Controller"),(0,n.kt)("p",null,"The Address Controller is the controller that updates, creates, or retrieves business partner records of type address via BPNA. There are PUT, POST and GET requests possible. Hyperlink in each record gives you more information about api endpoint."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Address Controller Apis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-addresses-1"},"Get page of addresses matching the search criteria"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/update-addresses"},"Update existing address business partners"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/create-addresses"},"Create new address business partners"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/search-addresses"},"Search address partners by BPNs and/or parent BPNs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-address"},"Get address partners by bpna"))))),(0,n.kt)("h3",{id:"4-open-search-controller"},"4. Open Search Controller"),(0,n.kt)("p",null,"The Open Search Controller is only used by the developers on the backend of the API. They are not relevant for the API end-users. Hyperlink in each record gives you more information about api endpoint."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Open Search Controller Apis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-business-partners"},"Fetch information about the latest OpenSearch export"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/export"},"Index new business partner records on OpenSearch"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/clear"},"Clear business partner index on OpenSearch"))))),(0,n.kt)("h3",{id:"5-metadata-controller"},"5. Metadata Controller"),(0,n.kt)("p",null,"The Metadata Controller can retrieve and create legal forms, new issuing bodies, identifier types and identifier statuses. There are POST and GET requests possible. Hyperlink in each record gives you more information about api endpoint."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metadata Controller"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-legal-forms"},"Get page of legal forms"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/create-legal-form"},"Create new legal form"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-identifier-types"},"Get page of identifier types"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/create-identifier-type"},"Create new identifier type"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-field-quality-rules"},"Get all field quality rules filtered by country"))))),(0,n.kt)("h3",{id:"6-changelog-controller"},"6. Changelog Controller"),(0,n.kt)("p",null,"The changelog Controller can retrieve business partner changelog entries from time, by BPN and/or LSA type. The hyperlink in below record gives you more information about api endpoint."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Changelog Controller Api"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/get-changelog-entries"},"Get business partner changelog entries from time, by BPN and/or LSA type"))))),(0,n.kt)("h3",{id:"7-bpn-controller"},"7. BPN Controller"),(0,n.kt)("p",null,"The BPN Controller retrieves business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries. The hyperlink in below record gives you more information about api endpoint."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"BPN Controller Api"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Pool%20Api/find-bpns-by-identifiers"},"Find business partner numbers by identifiers"))))),(0,n.kt)("h2",{id:"bpdm-gate-api-reference"},"BPDM Gate Api reference"),(0,n.kt)("p",null,"The Business Partner Data Management Gate includes the services that managesto share business partner data with Catena-X.In the following sections, the available methods and different controllers of the API are explained."),(0,n.kt)("h3",{id:"available-methods-1"},"Available Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Request Method"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Request Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PUT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Update. The endpoint expects to receive the full updated record, including values that didn't change.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Search")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Search for the best match")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DELETE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Deletes all the records in the controller, resets the timestamp")))),(0,n.kt)("p",null,"Gate service consist of five major controllers which are listed below."),(0,n.kt)("h3",{id:"1-sharing-state-controller"},"1. Sharing-state Controller"),(0,n.kt)("p",null,"The Sharing-state Controller is the controller that updates, or retrieves business partners of any type (referenced via LSA Type or External identifiers). There are PUT and GET requests possible."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Sharing-state Controller Api"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-sharing-states"},"Get sharing states"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/upsert-sharing-state"},"Insert/update sharing state"))))),(0,n.kt)("h3",{id:"2-site-controller"},"2. Site Controller"),(0,n.kt)("p",null,"The Site Controller is the controller that creates, updates, or retrieves business partners of type site (referenced via BPNS). There are PUT, POST and GET requests possible."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Site Controller Api"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/upsert-sites-output"},"Create or update sites (Output)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-sites"},"Get page of sites"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/upsert-sites"},"Create or update sites"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-sites-output"},"Get page of sites. Can optionally be filtered by external ids"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-sites-by-external-ids"},"Get page of sites filtered by a collection of externalIds."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-site-by-external-id"},"Get site by external identifier"))))),(0,n.kt)("h3",{id:"3-legal-entity-controller"},"3. legal Entity Controller"),(0,n.kt)("p",null,"The Legal Entity Controller calls, searches, creates or updates existing business partners of type legal entity (referenced via BPNL). There are PUT, POST and GET requests possible. Some of the requests need a obligatory parameter, like external id."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"legal Entity Controller"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/upsert-legal-entities-output"},"Create or update legal entities (Output)."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-legal-entities"},"Get page of legal entities"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/upsert-legal-entities"},"Create or update legal entities."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-legal-entities-output"},"Get page of legal entities. Can optionally be filtered by external ids"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-legal-entities-by-external-ids"},"Get page of legal-entities filtered by a collection of externalIds"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-legal-entity-by-external-id"},"Get legal entity by external identifier"))))),(0,n.kt)("h3",{id:"4-address-controller"},"4. Address Controller"),(0,n.kt)("p",null,"The Address Controller is the controller that updates, creates, or retrieves business partner records of type address via BPNA. There are PUT, POST and GET requests possible."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Address Controller"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/put-addresses-output"},"Create or update addresses (Output)."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-addresses"},"Get page of addresses"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/upsert-addresses"},"Create or update addresses"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-addresses-output"},"Get page of addresses. Can optionally be filtered by external ids."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-addresses-by-external-ids"},"Get page of addresses filtered by a collection of externalIds."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-address-by-external-id"},"Get address by external identifier"))))),(0,n.kt)("h3",{id:"5-changelog-controller"},"5. Changelog controller"),(0,n.kt)("p",null,"The changelog controller is controller that gets business partner changelog entries by list of external id from timestamp.\nOnly two POST api's available for search of business partner changelog details for input and output respectively."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Changelog Controller"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-output-changelog"},"Get business partner changelog entries for changes to the business partner output data."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Gate%20Api/get-input-changelog"},"Get business partner changelog entries for changes to the business partner input data."))))),(0,n.kt)("h2",{id:"bpdm-bridge-dummy-api-reference"},"BPDM Bridge Dummy Api reference"),(0,n.kt)("p",null,"The Business Partner Data Management Bridge Dummy includes the services that sync business partner data between Gate and Pool Service. In the following sections, the available methods and different controllers of the API are explained."),(0,n.kt)("h3",{id:"available-methods-2"},"Available Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Request Method"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Request Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Sync between Gate and Pool")))),(0,n.kt)("p",null,"Bridge Dummy service consist of only one controllers which is listed below."),(0,n.kt)("h3",{id:"1-bridge-controller"},"1. Bridge Controller"),(0,n.kt)("p",null,"Bridge Controller is controller that perfom sync between Gate and Pool. There is only one api end point which is as mentioned below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Bridge Controller API"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs-kits/23.09/kits/Business%20Partner%20Kit/Software%20Development%20View/Bridge%20Dummy%20Api/trigger-sync"},"Start sync between Gate and Pool"))))))}m.isMDXComponent=!0},20140:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/BPKitIcon-55e920e08d5706764626858aebe41780.png"}}]);