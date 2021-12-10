(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),r=(n(0),n(296)),o={id:"core-incremental-db",title:"Incremental DB",keywords:["core","incremental","database"],description:"Core protocol design - incremental DB."},l={id:"contributors/core-incremental-db",isDocsHomePage:!1,title:"Incremental DB",description:"Core protocol design - incremental DB.",source:"@site/docs/contributors/core-incremental-db.md",permalink:"/docs/contributors/core-incremental-db",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/contributors/core-incremental-db.md",sidebar:"ContributorsSidebar",previous:{title:"Account Management",permalink:"/docs/contributors/core-accounts"},next:{title:"Scilla Operation",permalink:"/docs/contributors/core-scilla-operation"}},c=[{value:"Background",id:"background",children:[]},{value:"Implementation",id:"implementation",children:[{value:"Upload Incremental DB Script",id:"upload-incremental-db-script",children:[]},{value:"Download Incremental DB Script",id:"download-incremental-db-script",children:[]}]},{value:"Incremental DB Usage by a Joining Node",id:"incremental-db-usage-by-a-joining-node",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("p",null,"The incremental DB feature leverages on AWS Simple Storage Service (S3) to provide an efficient way for miners and seed nodes to get blockchain data in order to join the network."),Object(r.b)("h2",{id:"background"},"Background"),Object(r.b)("p",null,"Prior to this feature, the basic design involved uploading or syncing entire persistence to an AWS S3 bucket at each and every Tx epoch. New nodes would then fetch the entire persistence from that bucket."),Object(r.b)("p",null,"This would have been alright for all existing LevelDB databases, with the exception of the ",Object(r.b)("inlineCode",{parentName:"p"},"state")," database. This is because running ",Object(r.b)("inlineCode",{parentName:"p"},"aws-cli sync")," on ",Object(r.b)("inlineCode",{parentName:"p"},"state")," results in uploading all files in the database, which is time-consuming and not bandwidth efficient."),Object(r.b)("p",null,"Uploading of ",Object(r.b)("inlineCode",{parentName:"p"},"state")," LevelDB for every Tx epoch is thus a bottleneck, and so incremental DB was introduced as the solution."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is practically possible that all files in ",Object(r.b)("inlineCode",{parentName:"p"},"stateDB")," get updated at every Tx epoch, if transactions in that particular epoch changed the states of addresses that somehow update TrieDB across all the files in ",Object(r.b)("inlineCode",{parentName:"p"},"state")," LevelDB."))),Object(r.b)("h2",{id:"implementation"},"Implementation"),Object(r.b)("p",null,"Two scripts make up the building blocks for incremental DB."),Object(r.b)("h3",{id:"upload-incremental-db-script"},"Upload Incremental DB Script"),Object(r.b)("p",null,"The script ",Object(r.b)("inlineCode",{parentName:"p"},"uploadIncrDB.py")," runs on a lookup node managed by Zilliqa Research. It performs the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"Lock")," file to S3 bucket ",Object(r.b)("strong",{parentName:"li"},"incremental")),Object(r.b)("li",{parentName:"ol"},"Perform sync between local ",Object(r.b)("inlineCode",{parentName:"li"},"persistence")," folder (i.e., within this lookup node) and ",Object(r.b)("inlineCode",{parentName:"li"},"incremental\\persistence")," on AWS S3 every Tx epoch. More specifically, syncing is done according to different criteria based on the Tx epoch number. These are the possibilities:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"At script startup",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Clear both buckets, i.e., ",Object(r.b)("strong",{parentName:"li"},"incremental")," and ",Object(r.b)("strong",{parentName:"li"},"statedelta")),Object(r.b)("li",{parentName:"ol"},"Sync entire ",Object(r.b)("inlineCode",{parentName:"li"},"persistence")," (i.e., everything that exists in the folder, including ",Object(r.b)("inlineCode",{parentName:"li"},"state"),", ",Object(r.b)("inlineCode",{parentName:"li"},"stateroot"),", ",Object(r.b)("inlineCode",{parentName:"li"},"txBlocks"),", ",Object(r.b)("inlineCode",{parentName:"li"},"txnBodies"),", ",Object(r.b)("inlineCode",{parentName:"li"},"txnBodiesTmp"),", ",Object(r.b)("inlineCode",{parentName:"li"},"microblock"),", etc) to bucket ",Object(r.b)("strong",{parentName:"li"},"incremental")),Object(r.b)("li",{parentName:"ol"},"Clear all state deltas from bucket ",Object(r.b)("strong",{parentName:"li"},"statedelta")))),Object(r.b)("li",{parentName:"ul"},"At every 10th DS epoch (i.e., the first Tx epoch following the 10th DS epoch)",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Sync entire ",Object(r.b)("inlineCode",{parentName:"li"},"persistence")," to bucket ",Object(r.b)("strong",{parentName:"li"},"incremental")),Object(r.b)("li",{parentName:"ol"},"Clear all state deltas from bucket ",Object(r.b)("strong",{parentName:"li"},"statedelta")))),Object(r.b)("li",{parentName:"ul"},"At all other Tx epochs",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Sync entire ",Object(r.b)("inlineCode",{parentName:"li"},"persistence")," (excluding ",Object(r.b)("inlineCode",{parentName:"li"},"state"),", ",Object(r.b)("inlineCode",{parentName:"li"},"stateroot"),", ",Object(r.b)("inlineCode",{parentName:"li"},"contractCode"),", ",Object(r.b)("inlineCode",{parentName:"li"},"contractStateData"),", ",Object(r.b)("inlineCode",{parentName:"li"},"contractStateIndex"),") to bucket ",Object(r.b)("strong",{parentName:"li"},"incremental")),Object(r.b)("li",{parentName:"ol"},"For the first Tx block within the DS epoch (e.g., 100, 200, 300, ...), we don't need to upload state delta differences. Instead, the complete ",Object(r.b)("inlineCode",{parentName:"li"},"stateDelta")," LevelDB (composed as a tarball, e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"stateDelta_100.tar.gz"),") is uploaded to S3 bucket ",Object(r.b)("strong",{parentName:"li"},"statedelta")),Object(r.b)("li",{parentName:"ol"},"For other Tx blocks, we upload the state delta differences (composed as tarballs, e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"stateDelta_101.tar.gz"),", ",Object(r.b)("inlineCode",{parentName:"li"},"stateDelta_102.tar.gz"),", .... ",Object(r.b)("inlineCode",{parentName:"li"},"stateDelta_199.tar.gz"),") to S3 bucket ",Object(r.b)("strong",{parentName:"li"},"statedelta"))))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Remove ",Object(r.b)("inlineCode",{parentName:"li"},"Lock")," file from S3 bucket ",Object(r.b)("strong",{parentName:"li"},"incremental"))),Object(r.b)("h3",{id:"download-incremental-db-script"},"Download Incremental DB Script"),Object(r.b)("p",null,"The script ",Object(r.b)("inlineCode",{parentName:"p"},"downloadIncrDB.py")," is executed upon startup by every miner or seed node to get the latest block chain data. It performs the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Check if ",Object(r.b)("inlineCode",{parentName:"li"},"Lock")," file exists. Wait until no ",Object(r.b)("inlineCode",{parentName:"li"},"Lock")," file is found"),Object(r.b)("li",{parentName:"ol"},"Clear existing local ",Object(r.b)("inlineCode",{parentName:"li"},"persistence")," folder, then download entire persistence data (except ",Object(r.b)("inlineCode",{parentName:"li"},"microblocks")," and ",Object(r.b)("inlineCode",{parentName:"li"},"txBodies")," for miner nodes) from S3 bucket ",Object(r.b)("strong",{parentName:"li"},"incremental")),Object(r.b)("li",{parentName:"ol"},"Check if ",Object(r.b)("inlineCode",{parentName:"li"},"Lock")," file has appeared after executing the previous step. If yes, return to the first step"),Object(r.b)("li",{parentName:"ol"},"Clear existing local ",Object(r.b)("inlineCode",{parentName:"li"},"StateDeltasFromS3")," folder, then download all state deltas from S3 bucket ",Object(r.b)("strong",{parentName:"li"},"statedelta")," to ",Object(r.b)("inlineCode",{parentName:"li"},"StateDeltasFromS3")," folder")),Object(r.b)("h2",{id:"incremental-db-usage-by-a-joining-node"},"Incremental DB Usage by a Joining Node"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Node uses the ",Object(r.b)("inlineCode",{parentName:"li"},"downloadIncrDB.py")," script to populate its ",Object(r.b)("inlineCode",{parentName:"li"},"persistence")," folder from S3 bucket ",Object(r.b)("strong",{parentName:"li"},"incrementalDB")),Object(r.b)("li",{parentName:"ol"},"Node uses the same script to populate its ",Object(r.b)("inlineCode",{parentName:"li"},"StateDeltasFromS3")," folder with all the state deltas from S3 bucket ",Object(r.b)("strong",{parentName:"li"},"statedelta")),Object(r.b)("li",{parentName:"ol"},"Node loads the contents of ",Object(r.b)("inlineCode",{parentName:"li"},"persistence")," and initiates syncup. At this point, node has a base state of, say, ",Object(r.b)("inlineCode",{parentName:"li"},"X")),Object(r.b)("li",{parentName:"ol"},"Node then recreates the latest state using the state deltas in ",Object(r.b)("inlineCode",{parentName:"li"},"StateDeltasFromS3")," (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"stateDelta_101.tar.gz"),", ",Object(r.b)("inlineCode",{parentName:"li"},"stateDelta_101.tar.gz"),", ...., ",Object(r.b)("inlineCode",{parentName:"li"},"stateDelta_199.tar.gz"),", ",Object(r.b)("inlineCode",{parentName:"li"},"stateDelta_200.tar.gz"),", ",Object(r.b)("inlineCode",{parentName:"li"},"stateDelta_201.tar.gz"),", ....)"),Object(r.b)("li",{parentName:"ol"},"Using these files, the final state ",Object(r.b)("inlineCode",{parentName:"li"},"Y")," is computed as ",Object(r.b)("inlineCode",{parentName:"li"},"Y = X + x1 + x2 + ... + x99 + x100 + x101 + x102 + ..."))),Object(r.b)("p",null,"More information on new node joining can be found in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/contributors/core-rejoin-mechanism"}),"Rejoin Mechanism")," page."))}s.isMDXComponent=!0},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,l(l({ref:t},b),{},{components:n})):i.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);