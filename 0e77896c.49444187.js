(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return u}));var o=r(2),n=r(6),s=(r(0),r(296)),a=r(303),i={id:"basics-zil-nodes",title:"Types of Nodes",keywords:["type of nodes","shard nodes","ds nodes","lookup nodes","seed nodes","staked seed nodes"],description:"Zilliqa Types Of Nodes"},c={id:"basics/basics-zil-nodes",isDocsHomePage:!1,title:"Types of Nodes",description:"Zilliqa Types Of Nodes",source:"@site/docs/basics/basics-zil-nodes.mdx",permalink:"/docs/basics/basics-zil-nodes",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/basics/basics-zil-nodes.mdx",sidebar:"BasicsSideBar",previous:{title:"Gas",permalink:"/docs/basics/basics-intro-gas"},next:{title:"Sharding Mechanism",permalink:"/docs/basics/basics-zil-sharding"}},d=[{value:"Shard Nodes",id:"shard-nodes",children:[]},{value:"DS Nodes",id:"ds-nodes",children:[]},{value:"Lookup Nodes",id:"lookup-nodes",children:[]},{value:"Seed Nodes",id:"seed-nodes",children:[]},{value:"Staked Seed Nodes",id:"staked-seed-nodes",children:[]}],l={rightToc:d};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("hr",null),Object(s.b)("p",null,"The Zilliqa Mainnet is composed of several types of nodes that perform different functions or provide specialized services."),Object(s.b)("img",{alt:"Network Layout Image 1",src:Object(a.a)("img/contributors/core/network-layout/image01.png")}),Object(s.b)("h2",{id:"shard-nodes"},"Shard Nodes"),Object(s.b)("p",null,"Shard nodes are the mining nodes in the Zilliqa Network. They are named as such because they are assigned to one of several clusters (i.e., shards) within the network. Nodes that belong to the same shard process the same set of transactions assigned to their shard. After processing, the nodes must achieve consensus over the transaction set in order to generate the shard's microblock. For their work, shard nodes are rewarded $ZIL at the end of every DS epoch."),Object(s.b)("p",null,"Shard membership is determined by the DS committee after shard nodes successfully submit solutions to a Proof-of-Work (PoW) problem, which occurs once every DS epoch."),Object(s.b)("h2",{id:"ds-nodes"},"DS Nodes"),Object(s.b)("p",null,"DS (Directory Service) nodes are also mining nodes, with the additional responsibilities of (1) aggregating shard microblocks to form the Transaction Block and (2) creating the DS Block at the start of every DS epoch. As with the shard nodes, DS nodes are rewarded $ZIL at the end of every DS epoch."),Object(s.b)("p",null,"The collection of DS nodes in the network is referred to as the DS committee. Unlike the shards, which are completely revised every DS epoch, the DS committee stays relatively stable across several DS epochs, as only a small fraction of the committee is replaced every DS epoch. DS committee membership is determined by Proof-of-Work of a higher difficulty. The length of a DS node's tenure within the committee is also affected by its performance within the duration of the DS epoch."),Object(s.b)("h2",{id:"lookup-nodes"},"Lookup Nodes"),Object(s.b)("p",null,"Lookup nodes are full nodes, i.e., they store all of the blockchain data generated by the DS and shard nodes (including transactions, microblocks, Transaction Blocks, and DS Blocks). They provide the data to nodes that are syncing with or attempting to join the network. Lookups also dispatch transactions to the shards and DS Committee."),Object(s.b)("h2",{id:"seed-nodes"},"Seed Nodes"),Object(s.b)("p",null,"Seed nodes are full nodes (like lookup nodes) that do not directly dispatch transactions to the shards and DS committee. They are used mainly for serving JSON-RPC requests, including creating new transactions. Transactions are regularly bundled by seed nodes and forwarded to lookups for eventual dispatch to the shards and DS committee."),Object(s.b)("h2",{id:"staked-seed-nodes"},"Staked Seed Nodes"),Object(s.b)("p",null,"Staked seed nodes (SSNs) are a variant of seed nodes. SSNs are run by staking partners and are expected to serve JSON-RPC requests from the community. In return for the service, these nodes are regularly given staking rewards in the form of $ZILs. Staking rewards are determined based on the performance of the SSN. For more information on staked seed nodes, please refer to our staking feature documentation in ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-3.md"}),"Zilliqa Improvement Proposal #3"),"."))}u.isMDXComponent=!0},296:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),p=o,f=u["".concat(a,".").concat(p)]||u[p]||h[p]||s;return r?n.a.createElement(f,i(i({ref:t},d),{},{components:r})):n.a.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<s;d++)a[d]=r[d];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},302:function(e,t,r){"use strict";var o=r(0),n=r(35);t.a=function(){return Object(o.useContext)(n.a)}},303:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r(302),n=r(304);function s(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:s="/",url:a}={}}=Object(o.a)();if(!e)return e;if(t)return s+e;if(!Object(n.a)(e))return e;const i=s+e.replace(/^\//,"");return r?a+i:i}},304:function(e,t,r){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return o}))}}]);