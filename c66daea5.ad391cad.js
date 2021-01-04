(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{225:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(259)),l=a(266),c={id:"dev-tools-ceres",title:"Ceres",keywords:["ceres","local network","isolated server","testing","faucet","zilliqa"],description:"Guide on Building on Ceres"},i={id:"dev/dev-tools-ceres",isDocsHomePage:!1,title:"Ceres",description:"Guide on Building on Ceres",source:"@site/docs/dev/dev-tools-ceres.mdx",permalink:"/docs/dev/dev-tools-ceres",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-tools-ceres.mdx",sidebar:"DevelopersSidebar",previous:{title:"Magic",permalink:"/docs/dev/dev-keys-magic"},next:{title:"zilliqa-js",permalink:"/docs/dev/dev-tools-zilliqajs"}},s=[{value:"Installation",id:"installation",children:[{value:"System Requirements",id:"system-requirements",children:[]},{value:"Download Ceres",id:"download-ceres",children:[]}]},{value:"Available Services",id:"available-services",children:[{value:"Isolated Server",id:"isolated-server",children:[]},{value:"Devex",id:"devex",children:[]},{value:"Scilla Server",id:"scilla-server",children:[]}]},{value:"Using Ceres with a dApp",id:"using-ceres-with-a-dapp",children:[{value:"Deploying contract on local network",id:"deploying-contract-on-local-network",children:[]}]}],b={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("p",null,"Ceres is a one-stop local development application for developers looking to build on top of Zilliqa.\nIt is a simple to use graphical interface that has multiple Zilliqa development tools.\nDevelopment tools that come with Ceres currently are ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#isolated-server"}),"Isolated server"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#devex"}),"Devex")," developer block explorer and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#scilla-server"}),"Scilla server"),".\nCeres allows developers to run these tools locally on their machine which allows them to: run a local Zilliqa blockchain network,\ndeploy contracts locally, test their contracts using a testing library and view these transactions on a network explorer."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/dev/tools/ceres.png",alt:"Docusaurus with Keytar"}))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("h3",{id:"system-requirements"},"System Requirements"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"MacOS / Linux"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Windows"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://nodejs.org/en/"}),"NodeJS")," v12 or newer")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://nodejs.org/en/"}),"NodeJS")," v12 or newer"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://www.docker.com/get-started"}),"Docker"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://www.docker.com/get-started"}),"Docker")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"WSL 2.0"))))),Object(o.b)("p",null,"You would also need the following ports to be free on your system: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ports 5555, 5556 for Isolated Server"),Object(o.b)("li",{parentName:"ul"},"Port 5557 for Network Explorer"),Object(o.b)("li",{parentName:"ul"},"Port 4000 for Scilla Server")),Object(o.b)("h3",{id:"download-ceres"},"Download Ceres"),Object(o.b)("p",null,"You can download the Ceres application by clicking on the icon that matches your operating system below."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"MacOS"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Windows"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Linux"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Zilliqa/ceres/releases/latest/download/Ceres-0.2.5.dmg"}),Object(o.b)("img",{alt:"Download Mac",src:Object(l.a)("img/dev/tools/downloadMAC.png"),width:"80",height:"80"}))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Zilliqa/ceres/releases/latest/download/Ceres.Setup.0.2.5.exe"}),Object(o.b)("img",{alt:"Download Windows",src:Object(l.a)("img/dev/tools/downloadWindows.png"),width:"80",height:"80"}))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Zilliqa/ceres/releases/latest/download/Ceres-0.2.5.AppImage"}),Object(o.b)("img",{alt:"Download Linux",src:Object(l.a)("img/dev/tools/downloadLinux.png"),width:"80",height:"80"})))))),Object(o.b)("p",null,"Keep track of Ceres releases on github ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ceres/releases"}),"here"),"."),Object(o.b)("h2",{id:"available-services"},"Available Services"),Object(o.b)("h3",{id:"isolated-server"},"Isolated Server"),Object(o.b)("p",null,"Zilliqa Isolated Server is a test server for dApp developers to quickly test their applications.\nIt allows developers to spin up a simulated blockchain locally where transactions are validated immediately, hence improving the productivity for dApp developers. "),Object(o.b)("p",null,"Isolated server runs 2 containers that are tied together:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Server Container (http://localhost:5555) is the local Zilliqa blockchain network and it comes with 10 pre-loaded accounts."),Object(o.b)("li",{parentName:"ol"},"Faucet Container (http://localhost:5556) is a faucet for the above server, you can query the faucet to get $ZILs to an account.")),Object(o.b)("p",null,"To start the isolated server, you need to click on \u201cIsolated server\u201d from the Ceres\u2019 home screen and then click on\n\u201cDownload and install\u201d. After downloading is finished, you need to click on to Start Service - you have now successfully started\nthe isolated server and faucet."),Object(o.b)("img",{alt:"Isolated Server",src:Object(l.a)("img/dev/tools/isolatedStartService.png")}),Object(o.b)("h4",{id:"using-isolated-server-during-dapp-development"},"Using Isolated server during dApp development"),Object(o.b)("p",null,"To interact with the local blockchain network with your dApp, you would need to set the value of the RPC server URL when\ninitialising a new Zilliqa object to point to the isolated server."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"const zilliqa = new Zilliqa('http://localhost:5555'); //Example code in js")),Object(o.b)("p",null,"Also, you would need to change the Chain ID to reflect the value relevant for the isolated server i.e. 222. "),Object(o.b)("p",null,"Switching from testing on isolated server to pushing your dApp to production on Zilliqa testnet or mainnet is simple,\nyou just need to change the value of the RPC server URL and Chain ID to the one specific to your network as mentioned ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://dev.zilliqa.com/docs/apis/api-introduction"}),"here"),"."),Object(o.b)("h3",{id:"devex"},"Devex"),Object(o.b)("p",null,"Devex is a developer-focused lightweight blockchain explorer that shows data on the local blockchain network running on the\nisolated server. Devex runs on the port 5557. You can access it from any browser on http://localhost:5557."),Object(o.b)("p",null,"To start the explorer, you need to click on \u201cNetwork explorer\u201d from the Ceres\u2019 home screen and then click on\n\u201cDownload and install\u201d. After downloading is finished, you need to click on to Start Service -\nyou have now successfully started the network explorer."),Object(o.b)("img",{alt:"Devex",src:Object(l.a)("img/dev/tools/explorerStartService.png")}),Object(o.b)("h3",{id:"scilla-server"},"Scilla Server"),Object(o.b)("p",null,"Scilla server runs Scilla binaries locally and exposes API endpoints for ",Object(o.b)("inlineCode",{parentName:"p"},"scilla-checker")," and ",Object(o.b)("inlineCode",{parentName:"p"},"scilla-runner"),".\nThe scilla-server provides the functionality of ",Object(o.b)("inlineCode",{parentName:"p"},"scilla-runner")," and ",Object(o.b)("inlineCode",{parentName:"p"},"scilla-checker")," as a JSON-RPC server.\nScilla server accepts contract execution requests and executes them, providing a JSON output within the\nserver process itself. "),Object(o.b)("p",null,"Scilla Server runs on port 4000. You can call it's API on http://localhost:4000."),Object(o.b)("p",null,"To start the server, you need to click on \u201cScilla\u201d from the Ceres\u2019 home screen and then click on \u201cDownload and install\u201d.\nAfter downloading is finished, you need to click on to Start Service - you have now successfully started the Scilla server."),Object(o.b)("img",{alt:"Scilla Server",src:Object(l.a)("img/dev/tools/scillaStartService.png")}),Object(o.b)("h2",{id:"using-ceres-with-a-dapp"},"Using Ceres with a dApp"),Object(o.b)("p",null,"After you are done with installation of Ceres and all the available services, you can start using Ceres for your dApp development."),Object(o.b)("p",null,"In this section, we will deploy a fungible token (ZRC-2) smart contract using the Zilliqa IDE which would be connected to your\nlocal Zilliqa blockchain network. We will also use the local faucet & network explorer in the process.\nNote : Make sure that you have Isolated server and network explorer services of Ceres running before proceeding further."),Object(o.b)("h3",{id:"deploying-contract-on-local-network"},"Deploying contract on local network"),Object(o.b)("p",null,"Step 1 : Visit the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ide.zilliqa.com/"}),"Scilla IDE"),", start a new file and write your contract code in it.\nAlternatively, you can choose one of the already available contracts from the left tab, in this example we will be selecting the Fungible Token contract from the left tab."),Object(o.b)("p",null,"Step 2 : Go to the networks tab and click on \u201cAdd Network\u201d to add your local blockchain network to the IDE by filling in\ndetails of your network."),Object(o.b)("img",{alt:"Add Custom Network",src:Object(l.a)("img/dev/tools/customNetworkDetails.png")}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Network ID for the isolated server is 222, refer ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://dev.zilliqa.com/docs/apis/api-blockchain-get-network-id/"}),"https://dev.zilliqa.com/docs/apis/api-blockchain-get-network-id/")," to\nknow about the id of your Zilliqa network."))),Object(o.b)("p",null,"Step 3: Select an account that you will eventually use to deploy the contract. In this example, we are using a keystore file but you can use ledger or Zilpay, which is a Zilliqa wallet available as a chrome extension similar to metamask."),Object(o.b)("p",null,"Step 4 : Paste your account address and request funds from the faucet available on Ceres."),Object(o.b)("img",{alt:"Faucet Request",src:Object(l.a)("img/dev/tools/faucetRequest.png")}),Object(o.b)("p",null,"Step 5: Click on \u201cDeploy\u201d, enter the initialization params and finally deploy the contract!"),Object(o.b)("img",{alt:"Deploy Contract",src:Object(l.a)("img/dev/tools/deployContract.png")}),Object(o.b)("img",{alt:"Deploy Success",src:Object(l.a)("img/dev/tools/deploySuccess.png")}),Object(o.b)("p",null,"Step 6: You can click on the transaction ID link and you will be redirected to Devex page, alternatively you can also visit http://localhost:5557 (local network explorer) and you will find your contract creation transaction there as well."),Object(o.b)("img",{alt:"Devex",src:Object(l.a)("img/dev/tools/deployDevex.png")}),Object(o.b)("p",null,'Voila! Your contract is now deployed on the local network and can be accessed under the "Contracts" tab on the left side of the IDE.'))}d.isMDXComponent=!0},259:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return a?r.a.createElement(h,c(c({ref:t},s),{},{components:a})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},265:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},266:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(265),r=a(267);function o(e,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){const{siteConfig:{baseUrl:o="/",url:l}={}}=Object(n.a)();if(!e)return e;if(t)return o+e;if(!Object(r.a)(e))return e;const c=o+e.replace(/^\//,"");return a?l+c:c}},267:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))}}]);