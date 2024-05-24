"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[2198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"hardhat-usage",title:"Hardhat\u4f7f\u7528\u6559\u7a0b"},l=void 0,i={unversionedId:"ethereum/hardhat-usage",id:"ethereum/hardhat-usage",title:"Hardhat\u4f7f\u7528\u6559\u7a0b",description:"Hardhat\u662f\u4e00\u4e2a\u57fa\u4e8eJavaScript\u7684\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u73af\u5883\uff0c\u53ef\u4ee5\u7528\u4e8e\u7075\u6d3b\u7684\u7f16\u8bd1\u3001\u90e8\u7f72\u3001\u6d4b\u8bd5\u548c\u8c03\u8bd5\u57fa\u4e8eSolidity\u7f16\u8bd1\u7684EVM\u667a\u80fd\u5408\u7ea6\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5de5\u5177\u6765\u6574\u5408\u4ee3\u7801\u4e0e\u5916\u90e8\u5de5\u5177\uff0c\u8fd8\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u63d2\u4ef6\u751f\u6001\u3002Hardhat\u8fd8\u63d0\u4f9b\u4e86\u672c\u5730\u4ee5\u592a\u574a\u8282\u70b9\u7684Hardhat\u7f51\u7edc\uff0c\u7528\u6765\u90e8\u7f72\u5408\u7ea6\u3001\u8fd0\u884c\u6d4b\u8bd5\u548c\u8c03\u8bd5\u4ee3\u7801\u3002",source:"@site/docs/ethereum/hardhat-usage.md",sourceDirName:"ethereum",slug:"/ethereum/hardhat-usage",permalink:"/note/zh-Hans/ethereum/hardhat-usage",draft:!1,tags:[],version:"current",frontMatter:{id:"hardhat-usage",title:"Hardhat\u4f7f\u7528\u6559\u7a0b"},sidebar:"tutorialSidebar",previous:{title:"\u4ee5\u592a\u574a\u767d\u76ae\u4e66",permalink:"/note/zh-Hans/ethereum/whitepaper"},next:{title:"\u4ee5\u592a\u574a2.0\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u642d\u5efa",permalink:"/note/zh-Hans/ethereum/setup_eth2.0_local_testnet"}},s={},c=[{value:"\u9879\u76ee\u521b\u5efa",id:"\u9879\u76ee\u521b\u5efa",level:2},{value:"\u7f16\u5199\u667a\u80fd\u5408\u7ea6",id:"\u7f16\u5199\u667a\u80fd\u5408\u7ea6",level:2},{value:"\u7f16\u8bd1\u667a\u80fd\u5408\u7ea6",id:"\u7f16\u8bd1\u667a\u80fd\u5408\u7ea6",level:2},{value:"Hardhat \u6d4b\u8bd5",id:"hardhat-\u6d4b\u8bd5",level:2},{value:"\u7b80\u5355\u6d4b\u8bd5\u7528\u4f8b",id:"\u7b80\u5355\u6d4b\u8bd5\u7528\u4f8b",level:3},{value:"\u90e8\u7f72\u5408\u7ea6\u5230Hardhat Network",id:"\u90e8\u7f72\u5408\u7ea6\u5230hardhat-network",level:2},{value:"refs",id:"refs",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Hardhat\u662f\u4e00\u4e2a\u57fa\u4e8eJavaScript\u7684\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u73af\u5883\uff0c\u53ef\u4ee5\u7528\u4e8e\u7075\u6d3b\u7684\u7f16\u8bd1\u3001\u90e8\u7f72\u3001\u6d4b\u8bd5\u548c\u8c03\u8bd5\u57fa\u4e8eSolidity\u7f16\u8bd1\u7684EVM\u667a\u80fd\u5408\u7ea6\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5de5\u5177\u6765\u6574\u5408\u4ee3\u7801\u4e0e\u5916\u90e8\u5de5\u5177\uff0c\u8fd8\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u63d2\u4ef6\u751f\u6001\u3002Hardhat\u8fd8\u63d0\u4f9b\u4e86\u672c\u5730\u4ee5\u592a\u574a\u8282\u70b9\u7684Hardhat\u7f51\u7edc\uff0c\u7528\u6765\u90e8\u7f72\u5408\u7ea6\u3001\u8fd0\u884c\u6d4b\u8bd5\u548c\u8c03\u8bd5\u4ee3\u7801\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5b98\u65b9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-runner/docs/getting-started"},"https://hardhat.org/hardhat-runner/docs/getting-started")),(0,r.kt)("p",{parentName:"admonition"},"Github\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NomicFoundation/hardhat"},"https://github.com/NomicFoundation/hardhat"))),(0,r.kt)("h2",{id:"\u9879\u76ee\u521b\u5efa"},"\u9879\u76ee\u521b\u5efa"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u524d\u63d0\uff1a\u8981\u6c42Nodejs\u7684\u7248\u672c\u8981",(0,r.kt)("inlineCode",{parentName:"p"},">=16.0"))),(0,r.kt)("p",null,"\u521b\u5efa\u9879\u76ee\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir hardhat-tutorial\ncd hardhat-tutorial\n")),(0,r.kt)("p",null,"\u521d\u59cb\u5316Nodejs\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# -y\uff1a\u8868\u793a\u81ea\u52a8\u56de\u7b54\u6240\u6709\u8bbe\u7f6e\u9879\u76ee\u4fe1\u606f\u7684\u95ee\u9898\uff0c\u800c\u4e0d\u9700\u8981\u7528\u6237\u624b\u52a8\u8f93\u5165\uff08\u9879\u76ee\u540d\u79f0\u3001\u7248\u672c\u3001\u63cf\u8ff0\u3001\u5165\u53e3\u6587\u4ef6...\uff09,\u4f7f\u7528\u9ed8\u8ba4\u503c\u586b\u5145 package.json \u6587\u4ef6\u3002\nnpm init -y\n")),(0,r.kt)("p",null,"\u5b89\u88c5harhat"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev hardhat\n")),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u4e3ahardhat\u9879\u76ee\uff0c\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"Create an empty hardhat.config.js"),"\uff0c\u7136\u540e\u56de\u8f66\uff0chardhat\u5c06\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx hardhat init\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ npx hardhat init\n888    888                      888 888               888\n888    888                      888 888               888\n888    888                      888 888               888\n8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888\n888    888     "88b 888P"  d88" 888 888 "88b     "88b 888\n888    888 .d888888 888    888  888 888  888 .d888888 888\n888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.\n888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888\n\nWelcome to Hardhat v2.18.3\n\n? What do you want to do? \u2026\n  Create a JavaScript project\n  Create a TypeScript project\n\u25b8 Create an empty hardhat.config.js\n  Quit\n')),(0,r.kt)("h2",{id:"\u7f16\u5199\u667a\u80fd\u5408\u7ea6"},"\u7f16\u5199\u667a\u80fd\u5408\u7ea6"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"contracts"),"\u7684\u65b0\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir contracts\n")),(0,r.kt)("p",null,"\u6b64\u65f6\u76ee\u5f55\u7ed3\u6784\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree -L 1\n.\n\u251c\u2500\u2500 contracts\n\u251c\u2500\u2500 hardhat.config.js\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package-lock.json\n\u2514\u2500\u2500 package.json\n\n3 directories, 3 files\n")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"contracts"),"\u4e2d\u521b\u5efa\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Token.sol"),"\u6587\u4ef6\u7528\u4e8e\u7f16\u5199Solidity\u5408\u7ea6\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vim contracts/Token.sol\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: GPL-3.0\n// Solidity files have to start with this pragma.\n// It will be used by the Solidity compiler to validate its version.\npragma solidity ^0.8.9;\n\n\n// This is the main building block for smart contracts.\ncontract Token {\n    // Some string type variables to identify the token.\n    // The `public` modifier makes a variable readable from outside the contract.\n    string public name = "My Hardhat Token";\n    string public symbol = "MBT";\n\n    // \u56fa\u5b9a\u53d1\u884c\u91cf\uff0c\u4fdd\u5b58\u5728\u4e00\u4e2a\u65e0\u7b26\u53f7\u6574\u578b\u91cc\n    uint256 public totalSupply = 1000000;\n\n    // An address type variable is used to store ethereum accounts.\n    address public owner;\n\n    // A mapping is a key/value map. Here we store each account balance.\n    mapping(address => uint256) balances;\n\n    /**\n     * \u5408\u7ea6\u6784\u9020\u51fd\u6570\n     *\n     * The `constructor` is executed only once when the contract is created.\n     */\n    constructor() {\n        // The totalSupply is assigned to transaction sender, which is the account\n        // that is deploying the contract.\n        balances[msg.sender] = totalSupply;\n        owner = msg.sender;\n    }\n\n    /**\n     * \u4ee3\u5e01\u8f6c\u8d26.\n     *\n     * The `external` modifier makes a function *only* callable from outside\n     * the contract.\n     */\n    function transfer(address to, uint256 amount) external {\n        // Check if the transaction sender has enough tokens.\n        // If `require`\'s first argument evaluates to `false` then the\n        // transaction will revert.\n        require(balances[msg.sender] >= amount, "Not enough tokens");\n\n        // Transfer the amount.\n        balances[msg.sender] -= amount;\n        balances[to] += amount;\n    }\n\n    /**\n     * \u8fd4\u56de\u8d26\u53f7\u7684\u4ee3\u5e01\u4f59\u989d\uff0c\u53ea\u8bfb\u51fd\u6570\u3002\n     *\n     * The `view` modifier indicates that it doesn\'t modify the contract\'s\n     * state, which allows us to call it without executing a transaction.\n     */\n    function balanceOf(address account) external view returns (uint256) {\n        return balances[account];\n    }\n}\n')),(0,r.kt)("p",null,"\u6b64\u65f6\u7684\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# -I: \u6392\u9664\u6307\u5b9a\u76ee\u5f55,node_modules\u4e2d\u5185\u5bb9\u592a\u591a\n$ tree -I 'node_modules'        \n.\n\u251c\u2500\u2500 contracts\n\u2502\xa0\xa0 \u2514\u2500\u2500 Token.sol\n\u251c\u2500\u2500 hardhat.config.js\n\u251c\u2500\u2500 package-lock.json\n\u2514\u2500\u2500 package.json\n")),(0,r.kt)("h2",{id:"\u7f16\u8bd1\u667a\u80fd\u5408\u7ea6"},"\u7f16\u8bd1\u667a\u80fd\u5408\u7ea6"),(0,r.kt)("p",null,"\u5728\u7ec8\u7aef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npx hardhat compile\nCompiled 1 Solidity file successfully (evm target: paris).\n")),(0,r.kt)("p",null,"\u6b64\u65f6\u7684\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# -I: \u6392\u9664\u6307\u5b9a\u76ee\u5f55,node_modules\u4e2d\u5185\u5bb9\u592a\u591a\n$ tree -I 'node_modules'        \n.\n\u251c\u2500\u2500 artifacts\n\u2502\xa0\xa0 \u251c\u2500\u2500 build-info\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 90260d8de0becfb3d43b8782741d821b.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 contracts\n\u2502\xa0\xa0     \u2514\u2500\u2500 Token.sol\n\u2502\xa0\xa0         \u251c\u2500\u2500 Token.dbg.json\n\u2502\xa0\xa0         \u2514\u2500\u2500 Token.json\n\u251c\u2500\u2500 cache\n\u2502\xa0\xa0 \u2514\u2500\u2500 solidity-files-cache.json\n\u251c\u2500\u2500 contracts\n\u2502\xa0\xa0 \u2514\u2500\u2500 Token.sol\n\u251c\u2500\u2500 hardhat.config.js\n\u251c\u2500\u2500 package-lock.json\n\u2514\u2500\u2500 package.json\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"artifacts/contracts/Token.sol/Token.json"),"\uff0c\u5185\u90e8\u5305\u542b\u6709\u5408\u7ea6",(0,r.kt)("inlineCode",{parentName:"p"},"bytecode"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"abi"),"\u4fe1\u606f"),(0,r.kt)("h2",{id:"hardhat-\u6d4b\u8bd5"},"Hardhat \u6d4b\u8bd5"),(0,r.kt)("p",null,"\u521b\u5efa\u6d4b\u8bd5\u76ee\u5f55\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir test\n")),(0,r.kt)("p",null,"\u6b64\u65f6\u76ee\u5f55\u7ed3\u6784\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree -L 1\n.\n\u251c\u2500\u2500 artifacts\n\u251c\u2500\u2500 cache\n\u251c\u2500\u2500 contracts\n\u251c\u2500\u2500 hardhat.config.js\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 test\n\n6 directories, 3 files\n")),(0,r.kt)("h3",{id:"\u7b80\u5355\u6d4b\u8bd5\u7528\u4f8b"},"\u7b80\u5355\u6d4b\u8bd5\u7528\u4f8b"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u76ee\u5f55\u4e0b\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"Token.js"),"\u7528\u4e8e\u7f16\u5199\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"Token.sol"),"\u5408\u7ea6\u76f8\u5173\u7684\u6d4b\u8bd5\u4ee3\u7801\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { expect } = require("chai");\n\ndescribe("Token contract", function() {\n  it("Deployment should assign the total supply of tokens to the owner", async function() {\n    const [owner] = await ethers.getSigners();\n\n    const Token = await ethers.getContractFactory("Token");\n\n    const hardhatToken = await Token.deploy();\n\n    const ownerBalance = await hardhatToken.balanceOf(owner.address);\n    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);\n  });\n});\n')),(0,r.kt)("h2",{id:"\u90e8\u7f72\u5408\u7ea6\u5230hardhat-network"},"\u90e8\u7f72\u5408\u7ea6\u5230Hardhat Network"),(0,r.kt)("h2",{id:"refs"},"refs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NomicFoundation/hardhat-boilerplate"},"Hardhat\u6a21\u677f\u5de5\u7a0b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learnblockchain.cn/docs/hardhat/getting-started/"},"Hardhat \u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learnblockchain.cn/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox"},"Hardhat Toolbox's \u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ethers.org/v5/"},"Ethers.js \u6587\u6863")," \u53ca ",(0,r.kt)("a",{parentName:"li",href:"https://learnblockchain.cn/ethers_v5"},"ethers.js\u6587\u6863\u4e2d\u6587\u7248")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://getwaffle.io/"},"Waffle \u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mochajs.org/"},"Mocha \u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.chaijs.com/"},"Chai \u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://decert.me/tutorial/solidity/intro/"},"Solidity \u6559\u7a0b")," \u5168\u9762\u7684 Solidity \u5408\u7ea6\u6559\u7a0b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.alchemy.com/docs/hello-world-smart-contract"},"Alchemy \u5408\u7ea6\u6559\u7a0b")," \u4e5f\u53ef\u4ee5\u5b66\u4e60\u5982\u4f55\u4f7f\u7528Metamask\u548cSolidity\uff0c\u4ee5\u53ca\u50cfAlchemy\u63d0\u4f9b\u7684RPC\u7aef\u70b9\u3002")))}h.isMDXComponent=!0}}]);