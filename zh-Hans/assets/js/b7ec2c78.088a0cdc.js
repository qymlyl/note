"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[9530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={id:"setup_eth2.0_local_testnet",title:"\u4ee5\u592a\u574a2.0\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u642d\u5efa"},l=void 0,p={unversionedId:"ethereum/setup_eth2.0_local_testnet",id:"ethereum/setup_eth2.0_local_testnet",title:"\u4ee5\u592a\u574a2.0\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u642d\u5efa",description:"\u53c2\u8003prysm\u5b98\u7f51\u63d0\u4f9b\u6587\u7ae0How to Set Up an Ethereum Proof-of-Stake Devnet in Minutes",source:"@site/docs/ethereum/setup_eth2.0_local_testnet.md",sourceDirName:"ethereum",slug:"/ethereum/setup_eth2.0_local_testnet",permalink:"/note/zh-Hans/ethereum/setup_eth2.0_local_testnet",draft:!1,tags:[],version:"current",frontMatter:{id:"setup_eth2.0_local_testnet",title:"\u4ee5\u592a\u574a2.0\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u642d\u5efa"},sidebar:"tutorialSidebar",previous:{title:"Hardhat\u4f7f\u7528\u6559\u7a0b",permalink:"/note/zh-Hans/ethereum/hardhat-usage"},next:{title:"Scroll\u6574\u4f53\u67b6\u6784\u548c\u4e3b\u8981\u6d41\u7a0b",permalink:"/note/zh-Hans/layer2/scroll_architecture"}},c={},i=[{value:"docker\u542f\u52a8local testnet",id:"docker\u542f\u52a8local-testnet",level:2},{value:"\u4e0b\u8f7d\u9879\u76ee",id:"\u4e0b\u8f7d\u9879\u76ee",level:3},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6(\u76f4\u63a5\u8fd0\u884c\u62a5\u9519)",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u76f4\u63a5\u8fd0\u884c\u62a5\u9519",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"\u67e5\u770b\u65e5\u5fd7",id:"\u67e5\u770b\u65e5\u5fd7",level:3},{value:"\u8bbf\u95ee",id:"\u8bbf\u95ee",level:3},{value:"\u53ef\u7528\u8d26\u6237",id:"\u53ef\u7528\u8d26\u6237",level:3},{value:"chinId(networkId)\u4fee\u6539",id:"chinidnetworkid\u4fee\u6539",level:3},{value:"\u5176\u4ed6\u6ce8\u610f\u70b9",id:"\u5176\u4ed6\u6ce8\u610f\u70b9",level:3}],s={toc:i},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://docs.prylabs.network/docs/getting-started"},"prysm"),"\u5b98\u7f51\u63d0\u4f9b\u6587\u7ae0",(0,r.kt)("a",{parentName:"p",href:"https://docs.prylabs.network/docs/advanced/proof-of-stake-devnet"},"How to Set Up an Ethereum Proof-of-Stake Devnet in Minutes")),(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\uff1aprysm \u662f\u4e00\u4e2aGolang \u5b9e\u73b0\u4ee5\u592a\u574a\u5171\u8bc6\u5ba2\u6237\u7aef\u3002")),(0,r.kt)("h2",{id:"docker\u542f\u52a8local-testnet"},"docker\u542f\u52a8local testnet"),(0,r.kt)("h3",{id:"\u4e0b\u8f7d\u9879\u76ee"},"\u4e0b\u8f7d\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/Offchainlabs/eth-pos-devnet && cd eth-pos-devnet\n")),(0,r.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u76f4\u63a5\u8fd0\u884c\u62a5\u9519"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6(\u76f4\u63a5\u8fd0\u884c\u62a5\u9519)"),(0,r.kt)("p",null,"\u6ce8\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"2024-05-24\u65f6\u76f4\u63a5\u4f7f\u7528docker compose up -d\u4f1a\u62a5\u9519"),",\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO[0000] Specified a chain config file: config.yml     prefix=genesis\nFATA[0000] Could not generate beacon chain genesis state  error="could not set config params: version 0x05000000 for fork electra in config interop conflicts with existing config named=mainnet: configset cannot add config with conflicting fork version schedule" prefix=genesis\n')),(0,r.kt)("p",null,"\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u5f0f\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OffchainLabs/eth-pos-devnet/pull/50"},"https://github.com/OffchainLabs/eth-pos-devnet/pull/50")),(0,r.kt)("p",null,"\u539f\u56e0\u662f\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"consensus/config.yml"),"\u5b58\u5728\u95ee\u9898\uff0c\u914d\u7f6e\u4e2d\u7f3a\u5c11",(0,r.kt)("inlineCode",{parentName:"p"},"ELECTRA_FORK_VERSION: 0x20000094")),(0,r.kt)("p",null,"\u5b8c\u6574\u53ef\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"PRESET_BASE: interop\n\n# Genesis\nGENESIS_FORK_VERSION: 0x20000089\n\n# Altair\nALTAIR_FORK_EPOCH: 0\nALTAIR_FORK_VERSION: 0x20000090\n\n# Merge\nBELLATRIX_FORK_EPOCH: 0\nBELLATRIX_FORK_VERSION: 0x20000091\nTERMINAL_TOTAL_DIFFICULTY: 0\n\n# Capella\nCAPELLA_FORK_EPOCH: 0\nCAPELLA_FORK_VERSION: 0x20000092\nMAX_WITHDRAWALS_PER_PAYLOAD: 16\n\n# Deneb\nDENEB_FORK_VERSION: 0x20000093\n\n# Electra\nELECTRA_FORK_VERSION: 0x20000094\n\n# Time parameters\nSECONDS_PER_SLOT: 12\nSLOTS_PER_EPOCH: 6\n\n# Deposit contract\nDEPOSIT_CONTRACT_ADDRESS: 0x4242424242424242424242424242424242424242\n")),(0,r.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker composer up -d\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u6210\u529f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[+] Building 0.0s (0/0)                                                                         docker:desktop-linux\n[+] Running 6/6\n\u2714 Container eth-pos-devnet-geth-remove-db-1               Exited                                               0.0s\n\u2714 Container eth-pos-devnet-create-beacon-chain-genesis-1  Exited                                               0.0s\n\u2714 Container eth-pos-devnet-beacon-chain-1                 Running                                              0.0s\n\u2714 Container eth-pos-devnet-geth-genesis-1                 Exited                                               0.0s\n\u2714 Container eth-pos-devnet-validator-1                    Running                                              0.0s\n\u2714 Container eth-pos-devnet-geth-1                         Running     \n")),(0,r.kt)("p",null,"\u67e5\u770b\u5bb9\u5668:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker ps -a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'CONTAINER ID   IMAGE                                                 COMMAND                   CREATED             STATUS                         PORTS                                                                                                                                                                                                                   NAMES\nf3430b548451   ethereum/client-go:latest                             "geth --http --http.\u2026"   About an hour ago   Up About an hour               0.0.0.0:8545-8546->8545-8546/tcp, :::8545-8546->8545-8546/tcp, 0.0.0.0:8551->8551/tcp, :::8551->8551/tcp, 30303/tcp, 30303/udp                                                                                          eth-pos-devnet-geth-1\n065aa9f0b9ea   gcr.io/prysmaticlabs/prysm/validator:v4.1.1           "/app/cmd/validator/\u2026"   About an hour ago   Up About an hour                                                                                                                                                                                                                                       eth-pos-devnet-validator-1\nd54feb1cfb0c   ethereum/client-go:latest                             "geth --datadir=/exe\u2026"   About an hour ago   Exited (0) About an hour ago                                                                                                                                                                                                                           eth-pos-devnet-geth-genesis-1\nf1d1b333e8ed   gcr.io/prysmaticlabs/prysm/beacon-chain:v4.1.1        "/app/cmd/beacon-cha\u2026"   About an hour ago   Up About an hour               0.0.0.0:3500->3500/tcp, :::3500->3500/tcp, 0.0.0.0:4000->4000/tcp, :::4000->4000/tcp, 0.0.0.0:6060->6060/tcp, :::6060->6060/tcp, 0.0.0.0:8080->8080/tcp, :::8080->8080/tcp, 0.0.0.0:9090->9090/tcp, :::9090->9090/tcp   eth-pos-devnet-beacon-chain-1\nd261e36d2ced   gcr.io/prysmaticlabs/prysm/cmd/prysmctl:HEAD-10dedd   "/prysmctl testnet g\u2026"   About an hour ago   Exited (0) About an hour ago                                                                                                                                                                                                                           eth-pos-devnet-create-beacon-chain-genesis-1\n32fb83e1efd3   alpine:3.19.0                                         "rm -rf /execution/g\u2026"   About an hour ago   Exited (0) About an hour ago                                                                                                                                                                                                                           eth-pos-devnet-geth-remove-db-1\n')),(0,r.kt)("h3",{id:"\u67e5\u770b\u65e5\u5fd7"},"\u67e5\u770b\u65e5\u5fd7"),(0,r.kt)("p",null,"geth\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs eth-pos-devnet-geth-1\n")),(0,r.kt)("p",null,"\u4fe1\u6807\u94fe\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs -f eth-pos-devnet-beacon-chain-1\n")),(0,r.kt)("p",null,"validator client\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs -f eth-pos-devnet-validator-1\n")),(0,r.kt)("h3",{id:"\u8bbf\u95ee"},"\u8bbf\u95ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"go-ethereum JSON-RPC API\uff1a ",(0,r.kt)("a",{parentName:"li",href:"http://geth:8545/"},"http://geth:8545")),(0,r.kt)("li",{parentName:"ul"},"Prysm \u5ba2\u6237\u7aef\u7684 REST API\uff1a",(0,r.kt)("a",{parentName:"li",href:"http://beacon-chain:3500/"},"http://beacon-chain:3500"))),(0,r.kt)("h3",{id:"\u53ef\u7528\u8d26\u6237"},"\u53ef\u7528\u8d26\u6237"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u5730\u5740\u8d26\u6237\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"0x123463a4b065722e99115d6c222f267d9cabb524"),", \u5bf9\u5e94\u79c1\u94a5\u6587\u4ef6\u4fdd\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"execution/sk.json"),"\u4e2d\uff0c\u79c1\u94a5\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"2e0834786285daccd064ca17f1654f67b4aef298acbb82cef9ec422fb4975622\n")),(0,r.kt)("p",null,"\u53ef\u7528\u4e8e\u53d1\u9001\u4ea4\u6613\u3001\u90e8\u7f72\u5408\u7ea6\u7b49\u3002"),(0,r.kt)("h3",{id:"chinidnetworkid\u4fee\u6539"},"chinId(networkId)\u4fee\u6539"),(0,r.kt)("p",null,"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vim execution/genesis.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "config": {\n        "chainId": \u65b0\u7684chainId(\u6570\u5b57\u8868\u793a),\n    },\n    ...\n}\n')),(0,r.kt)("p",null,"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"service:\n    ...\n    beacon-chain:\n        command:\n            ...\n            - --chain-id=${CHAIN_ID:-\u65b0\u7684chainId\u4e0egenesis.json\u4e2d\u5bf9\u5e94}\n            ...\n")),(0,r.kt)("h3",{id:"\u5176\u4ed6\u6ce8\u610f\u70b9"},"\u5176\u4ed6\u6ce8\u610f\u70b9"),(0,r.kt)("p",null,"\u542f\u52a8\u65f6\u53ef\u80fd\u4f1a\u9047\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),"\u7aef\u53e3\u5df2\u7ecf\u4f7f\u7528\u4e86\uff0c\u9700\u8981\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\uff0c\u628a\u66b4\u9732\u76848080\u7aef\u53e3\u8fdb\u884c\u4fee\u6539\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"beacon-chain"),"\u9ed8\u8ba4\u66b4\u9732\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),"\u7aef\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"service:\n    ...\n    beacon-chain:\n        ...\n        ports:\n      - 4000:4000\n      - 3500:3500\n      - 8080:8080\n      - 6060:6060\n      - 9090:9090\n        ...\n")))}u.isMDXComponent=!0}}]);