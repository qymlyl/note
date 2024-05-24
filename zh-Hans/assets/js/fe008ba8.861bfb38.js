"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[3048],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,d=m["".concat(o,".").concat(c)]||m[c]||k[c]||r;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={},i=void 0,p={unversionedId:"ethereum/gas_billing_rule",id:"ethereum/gas_billing_rule",title:"gas_billing_rule",description:"\u6982\u8ff0",source:"@site/docs/ethereum/gas_billing_rule.md",sourceDirName:"ethereum",slug:"/ethereum/gas_billing_rule",permalink:"/note/zh-Hans/ethereum/gas_billing_rule",draft:!1,tags:[],version:"current",frontMatter:{}},o={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Call\u548cTransaction",id:"call\u548ctransaction",level:3},{value:"view\u51fd\u6570\u548cpure\u51fd\u6570",id:"view\u51fd\u6570\u548cpure\u51fd\u6570",level:3},{value:"Gas price",id:"gas-price",level:3},{value:"GasLimit",id:"gaslimit",level:3},{value:"\u4e0eGas\u76f8\u5173\u7684EIP",id:"\u4e0egas\u76f8\u5173\u7684eip",level:2},{value:"EIP-2929",id:"eip-2929",level:3}],u={toc:s},m="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("h3",{id:"call\u548ctransaction"},"Call\u548cTransaction"),(0,l.kt)("p",null,"\u4ee5\u592a\u574a\u7f51\u7edc\u4e2d\u5728\u5411\u7f51\u7edc\u4e2d\u5199\u5165\u6570\u636e\u548c\u8bfb\u53d6\u6570\u636e\u4e4b\u95f4\u8fdb\u884c\u4e86\u533a\u5206\uff0c\u5373Call\u548cTransaction\u3002"),(0,l.kt)("p",null,"1\uff09",(0,l.kt)("strong",{parentName:"p"},"Call\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528\u662f\u4e00\u79cd\u5728\u4ee5\u592a\u574a\u7f51\u7edc\u4e0a\u6267\u884c\u7684\u672c\u5730\u64cd\u4f5c\uff0c\u7528\u4e8e\u6267\u884c\u667a\u80fd\u5408\u7ea6\u4e2d\u7684\u51fd\u6570\u6216\u8005\u83b7\u53d6\u5408\u7ea6\u72b6\u6001\uff0c\u4f46\u4e0d\u4f1a\u5c06\u72b6\u6001\u66f4\u6539\u5199\u5165\u533a\u5757\u94fe\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528\u4e0d\u5305\u542b\u53d1\u9001\u8005\u5730\u5740\u3001\u4ee5\u592a\u5e01\u6570\u91cf\u7b49\u4fe1\u606f\uff0c\u5b83\u53ea\u5305\u542b\u8c03\u7528\u76ee\u6807\u5408\u7ea6\u5730\u5740\u3001\u8c03\u7528\u6570\u636e\uff08\u51fd\u6570\u7b7e\u540d\u548c\u53c2\u6570\uff09\u7b49\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528\u4e0d\u4f1a\u4ea7\u751f Gas \u8d39\u7528\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ea\u662f\u672c\u5730\u6267\u884c\uff0c\u4e0d\u9700\u8981\u5728\u533a\u5757\u94fe\u4e0a\u8bb0\u5f55\u72b6\u6001\u53d8\u5316\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528\u7684\u7ed3\u679c\u4f1a\u8fd4\u56de\u7ed9\u8c03\u7528\u8005\uff0c\u4f46\u4e0d\u4f1a\u5bf9\u533a\u5757\u94fe\u4e0a\u7684\u72b6\u6001\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\u3002")),(0,l.kt)("p",null,"2\uff09",(0,l.kt)("strong",{parentName:"p"},"Transaction\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u662f\u4e00\u79cd\u5728\u4ee5\u592a\u574a\u7f51\u7edc\u4e0a\u53d1\u9001\u7684\u4fe1\u606f\u5355\u5143\uff0c\u7528\u4e8e\u6267\u884c\u72b6\u6001\u8f6c\u6362\u6216\u89e6\u53d1\u667a\u80fd\u5408\u7ea6\u4e2d\u7684\u51fd\u6570\u8c03\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u5fc5\u987b\u5305\u542b\u53d1\u9001\u8005\u5730\u5740\u3001\u63a5\u6536\u8005\u5730\u5740\u3001\u4ee5\u592a\u5e01\u7684\u6570\u91cf\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u3001Gas \u9650\u5236\u3001Gas \u4ef7\u683c\u7b49\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u662f\u7531\u4ee5\u592a\u574a\u7f51\u7edc\u4e2d\u7684\u77ff\u5de5\u6253\u5305\u5e76\u5199\u5165\u533a\u5757\u94fe\u7684\uff0c\u4e00\u65e6\u88ab\u6253\u5305\u8fdb\u533a\u5757\uff0c\u4ea4\u6613\u5c31\u4f1a\u88ab\u6267\u884c\uff0c\u5e76\u4e14\u72b6\u6001\u4f1a\u88ab\u66f4\u65b0\u5230\u533a\u5757\u94fe\u4e0a\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u53ef\u4ee5\u4fee\u6539\u5408\u7ea6\u72b6\u6001\u3001\u8f6c\u79fb\u4ee5\u592a\u5e01\u3001\u89e6\u53d1\u667a\u80fd\u5408\u7ea6\u4e2d\u7684\u51fd\u6570\u8c03\u7528\u7b49\u3002")),(0,l.kt)("p",null,"Transaction\u548cCall\u5728\u4ee5\u592a\u574a\u4e2d\u7528\u9014\u4e0d\u540c\uff0cTransaction\u7528\u4e8e\u5728\u533a\u5757\u94fe\u4e0a\u6267\u884c\u72b6\u6001\u8f6c\u6362\u548c\u5199\u5165\u72b6\u6001\u53d8\u5316\uff0c\u800cCall\u4ec5\u7528\u4e8e\u672c\u5730\u6267\u884c\u667a\u80fd\u5408\u7ea6\u4e2d\u7684\u51fd\u6570\u6216\u83b7\u53d6\u5408\u7ea6\u72b6\u6001\uff0c\u4e0d\u4f1a\u66f4\u6539\u533a\u5757\u94fe\u4e0a\u7684\u72b6\u6001\u3002"),(0,l.kt)("h3",{id:"view\u51fd\u6570\u548cpure\u51fd\u6570"},"view\u51fd\u6570\u548cpure\u51fd\u6570"),(0,l.kt)("p",null,"\u5728\u667a\u80fd\u5408\u7ea6\u5185\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"view")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"pure")," \u5173\u952e\u5b57\u58f0\u660e\u7684\u51fd\u6570\u662f\u53ef\u4ee5\u901a\u8fc7 Call \u4ea4\u6613\u8c03\u7528\u7684\u7c7b\u578b\u3002\u8fd9\u4e24\u79cd\u51fd\u6570\u7c7b\u578b\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"View \u51fd\u6570\uff1a")," \u5728\u667a\u80fd\u5408\u7ea6\u5185\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"view")," \u5173\u952e\u5b57\u58f0\u660e\u7684\u51fd\u6570\u8868\u793a\u8fd9\u4e2a\u51fd\u6570\u53ea\u8bfb\u53d6\u5408\u7ea6\u7684\u72b6\u6001\uff0c\u800c\u4e0d\u4fee\u6539\u72b6\u6001\u3002View \u51fd\u6570\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u4fee\u6539\u533a\u5757\u94fe\u72b6\u6001\uff0c\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7 Call \u4ea4\u6613\u6765\u8c03\u7528\u3002\u5728\u65e7\u7248\u672c\u7684 Solidity \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"constant")," \u5173\u952e\u5b57\u4e5f\u53ef\u4ee5\u7528\u6765\u58f0\u660e\u53ea\u8bfb\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Pure \u51fd\u6570\uff1a")," \u5728\u667a\u80fd\u5408\u7ea6\u5185\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"pure")," \u5173\u952e\u5b57\u58f0\u660e\u7684\u51fd\u6570\u8868\u793a\u8fd9\u4e2a\u51fd\u6570\u4e0d\u4ec5\u4e0d\u4f1a\u8bfb\u53d6\u5408\u7ea6\u7684\u72b6\u6001\uff0c\u4e5f\u4e0d\u4f1a\u4fee\u6539\u72b6\u6001\uff0c\u5b83\u53ea\u4f1a\u57fa\u4e8e\u7ed9\u5b9a\u7684\u53c2\u6570\u6267\u884c\u8ba1\u7b97\u5e76\u8fd4\u56de\u7ed3\u679c\u3002\u4e0e View \u51fd\u6570\u7c7b\u4f3c\uff0cPure \u51fd\u6570\u4e5f\u53ef\u4ee5\u901a\u8fc7 Call \u4ea4\u6613\u6765\u8c03\u7528\u3002")),(0,l.kt)("p",null,"View\u51fd\u6570\u548cPure\u51fd\u6570\u5bf9\u533a\u522b\u662f\uff0cView\u51fd\u6570\u4e2d\u4f1a\u5bf9\u5408\u7ea6\u7684\u72b6\u6001\u6570\u636e\u8fdb\u884c\u8bfb\u53d6\uff0cPure\u51fd\u6570\u4e2d\u4e0d\u6d89\u53ca\u5230\u5408\u7ea6\u5185\u4efb\u4f55\u72b6\u6001\u7684\u64cd\u4f5c\u5373\u4e5f\u4e0d\u4f1a\u5bf9\u94fe\u4e0a\u7684\u5408\u7ea6\u72b6\u6001\u6570\u636e\u8fdb\u884c\u8bfb\u53d6\u3002"),(0,l.kt)("h3",{id:"gas-price"},"Gas price"),(0,l.kt)("p",null,"\u5728EIP-1559\u63d0\u6848\u5b9e\u65bd\u4e4b\u540e\uff0cGas \u8d39\u7528\u7531\u4e24\u90e8\u5206\u6784\u6210\uff1a\u57fa\u672c\u8d39\u7528\uff08Base Fee\uff09\u548c\u4f18\u5148\u8d39\u7528\uff08Priority Fee\uff09\u3002\u8fd9\u4e24\u8005\u5171\u540c\u51b3\u5b9a\u4e86\u4ea4\u6613\u7684\u603b\u8d39\u7528\u3002"),(0,l.kt)("p",null,"EIP-1559\u662f\u4ee5\u592a\u574a\u7684\u4e00\u4e2a\u91cd\u5927\u5347\u7ea7\uff0c\u65e8\u5728\u6539\u5584\u4ea4\u6613\u8d39\u7528\u548c\u5e02\u573a\u7684\u673a\u5236\uff0c\u5f15\u5165\u4e86\u4e00\u4e2a\u66f4\u53ef\u9884\u6d4b\u7684\u4ea4\u6613\u8d39\u7528\u7cfb\u7edf\uff0c\u8be5\u7cfb\u7edf\u5c06Gas\u4ef7\u683c\u5206\u4e3a\u4e24\u4e2a\u4e3b\u8981\u7ec4\u6210\u90e8\u5206\uff1a\u57fa\u7840\u8d39\u7528\uff08Base Fee\uff09\u548c\u4f18\u5148\u8d39\u7528\uff08Priority Fee\uff09\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u57fa\u672c\u8d39\u7528\uff08Base Fee\uff09\uff1a")," ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u8d39\u7528\u662f\u7531\u4ee5\u592a\u574a\u7f51\u7edc\u6839\u636e\u5f53\u524d\u7684\u7f51\u7edc\u62e5\u5835\u60c5\u51b5\u52a8\u6001\u786e\u5b9a\u7684\uff0c\u5b83\u8868\u793a\u6267\u884c\u4e00\u5355\u4f4d Gas \u6240\u9700\u7684\u6210\u672c\u3002\u57fa\u7840\u8d39\u7528\u662f\u6bcf\u4e2a\u533a\u5757\u4e2d\u6240\u6709\u4ea4\u6613\u5fc5\u987b\u652f\u4ed8\u7684\u6700\u5c0f\u8d39\u7528\uff0c\u5b83\u662f\u7b97\u6cd5\u786e\u5b9a\u7684\uff0c\u6839\u636e\u524d\u4e00\u4e2a\u533a\u5757\u7684\u7f51\u7edc\u62e5\u5835\u60c5\u51b5\u81ea\u52a8\u8c03\u6574\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u533a\u5757\u7684\u57fa\u7840\u8d39\u7528\u53ef\u80fd\u4e0a\u5347\u6216\u4e0b\u964d\uff0c\u8fd9\u53d6\u51b3\u4e8e\u533a\u5757\u662f\u6ee1\u7684\u8fd8\u662f\u7a7a\u7684\u3002\u5982\u679c\u533a\u5757\u8d85\u8fc7\u4e86\u76ee\u6807\u5927\u5c0f\uff0c\u57fa\u7840\u8d39\u7528\u4f1a\u4e0a\u5347\uff1b\u5982\u679c\u533a\u5757\u5c0f\u4e8e\u76ee\u6807\u5927\u5c0f\uff0c\u57fa\u7840\u8d39\u7528\u4f1a\u4e0b\u964d\u3002\u8fd9\u79cd\u673a\u5236\u65e8\u5728\u4f7f\u533a\u5757\u5229\u7528\u7387\u81ea\u52a8\u8c03\u8282\u5230\u4e00\u4e2a\u7406\u60f3\u7684\u5e73\u8861\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u57fa\u7840\u8d39\u7528\u7684\u652f\u4ed8\u662f\u4ee5Ether\u76f4\u63a5\u70e7\u6bc1\u7684\u5f62\u5f0f\u8fdb\u884c\u7684"),"\uff0c\u8fd9\u610f\u5473\u7740\u8fd9\u90e8\u5206\u8d39\u7528\u4e0d\u4f1a\u652f\u4ed8\u7ed9\u77ff\u5de5\uff08\u6216\u9a8c\u8bc1\u8005\uff09\uff0c\u800c\u662f\u4ece\u603b\u7684\u4ee5\u592a\u5e01\u4f9b\u5e94\u4e2d\u6c38\u4e45\u79fb\u9664\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u4f18\u5148\u8d39\u7528\uff08Priority Fee\uff09\uff1a")," ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u8d39\u7528\uff0c\u4e5f\u88ab\u79f0\u4e3a\u5c0f\u8d39\u6216\u77ff\u5de5\u5c0f\u8d39\uff0c\u4f18\u5148\u8d39\u7528\u662f\u7531\u7528\u6237\u8bbe\u7f6e\u7684\uff0c\u5b83\u8868\u793a\u7528\u6237\u613f\u610f\u652f\u4ed8\u7ed9\u77ff\u5de5\u7684 Gas \u4ef7\u683c\uff0c\u7528\u4e8e\u63d0\u9ad8\u4ea4\u6613\u7684\u4f18\u5148\u7ea7\uff0c\u4f18\u5148\u8d39\u7528\u8d8a\u9ad8\uff0c\u77ff\u5de5\u8d8a\u6709\u52a8\u529b\u4f18\u5148\u6253\u5305\u8fd9\u7b14\u4ea4\u6613\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u8d39\u7528\u662f\u53ef\u9009\u7684\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u5bf9\u4ea4\u6613\u901f\u5ea6\u7684\u9700\u6c42\u6765\u8bbe\u7f6e\u8fd9\u4e2a\u8d39\u7528\u7684\u9ad8\u4f4e\u3002\u4f18\u5148\u8d39\u7528\u5b8c\u5168\u652f\u4ed8\u7ed9\u77ff\u5de5\uff08\u6216\u9a8c\u8bc1\u8005\uff09\uff0c\u4f5c\u4e3a\u5904\u7406\u4ea4\u6613\u7684\u6fc0\u52b1\u3002")))),(0,l.kt)("p",null,"\u4ec5\u652f\u4ed8\u57fa\u672c\u8d39\u7528\u7684\u4ea4\u6613\u5728\u6280\u672f\u4e0a\u662f\u6709\u6548\u7684\uff0c\u4f46\u4e0d\u592a\u53ef\u80fd\u88ab\u5305\u542b\u5728\u5185\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u6fc0\u52b1\u77ff\u5de5\u9009\u62e9\u5b83\uff0c\u4f18\u5148\u8d39\u7528\u53d6\u51b3\u4e8e\u60a8\u53d1\u9001\u4ea4\u6613\u65f6\u7684\u7f51\u7edc\u4f7f\u7528\u60c5\u51b5\uff0c\u5982\u679c\u8f83\u4e3a\u62e5\u5835\uff0c\u90a3\u4e48\u53ef\u80fd\u9700\u8981\u5c06\u4f18\u5148\u8d39\u7528\u8bbe\u7f6e\u5f97\u66f4\u9ad8\uff0c\u4f46\u5f53\u8f83\u4e3a\u901a\u7545\u65f6\uff0c\u53ef\u4ee5\u652f\u4ed8\u66f4\u5c11\u7684\u8d39\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"GasPrice = \u57fa\u672c\u8d39\u7528 + \u4f18\u5148\u8d39\u7528\nGasUsed = Gas\u6d88\u8017\u91cf * GasPrice\n\u603b\u8d39\u7528 = Gas \u6d88\u8017\u91cf \xd7 (\u57fa\u672c\u8d39\u7528 + \u4f18\u5148\u8d39\u7528)\n")),(0,l.kt)("p",null,"\u8f6c\u8d26\u7b80\u5355\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4ee5\u592a\u574a\u4e2d\u8f6c\u8d26\u4ea4\u6613\u56fa\u5b9a\u662f21000\u5355\u4f4d\u7684gas\n\u4f8b\u5982\uff0c\u5047\u8bbeA\u5411B\u652f\u4ed81ETH\u3002\u4e00\u7b14ETH\u8f6c\u8d26\u9700\u898121000\u5355\u4f4d\u7684gas\uff0c\u57fa\u672c\u8d39\u7528\u4e3a10gwei\u3002A\u8bbe\u7f6e2 gwei\u7684\u5c0f\u8d39\u3002\n\u603b\u8d39\u7528\u73b0\u5728\u7b49\u4e8e\uff1a\n\u537321,000 * (10 + 2) = 252,000 gwei\uff080.000252 ETH\uff09\u3002\n\u5f53A\u6c47\u6b3e\u65f6\uff0c1.000252 ETH \u5c06\u4eceA\u7684\u8d26\u6237\u4e2d\u6263\u9664\u3002B\u5c06\u83b7\u5f97 1.0000 ETH\u3002\u77ff\u5de5\u6536\u5230 0.000042 ETH \u7684\u5c0f\u8d39\u30020.00021 ETHbase fee\u88ab\u70e7\u6bc1\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u5c06\u88ab\u4ece\u6d41\u901a\u4e2d\u79fb\u9664\u3002\n")),(0,l.kt)("p",null,"\u66f4\u4e3a\u590d\u6742\u7684\u5408\u7ea6\u4ea4\u6613\uff0c\u662f\u7531\u5408\u7ea6\u5b57\u8282\u7801\u6267\u884c\u60c5\u51b5\u786e\u5b9a\u7684\u3002"),(0,l.kt)("h3",{id:"gaslimit"},"GasLimit"),(0,l.kt)("p",null,"GasLimit\u65f6\u7528\u6237\u5728\u53d1\u9001\u4ea4\u6613\u65f6\u8bbe\u7f6e\u7684Gas\u4f7f\u7528\u4e0a\u9650\uff0c\u8868\u793a\u7528\u6237\u613f\u610f\u4e3a\u6267\u884c\u8be5\u7b14\u4ea4\u6613\u6216\u667a\u80fd\u5408\u7ea6\u64cd\u4f5c\u652f\u4ed8\u7684\u6700\u5927Gas\u6570\u91cf\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4ea4\u6613\u6d88\u8017\u7684Gas\u8d85\u8fc7\u4e86\u7528\u6237\u8bbe\u7f6e\u7684GasLimit\uff0c\u4ea4\u6613\u4f1a\u6267\u884c\u5931\u8d25\uff0c\u4f46\u662f\u5df2\u7ecf\u6d88\u8017\u7684Gas\u5e76\u4e0d\u4f1a\u88ab\u9000\u56de\u3002\u5982\u679c\u4ea4\u6613\u6d88\u8017\u7684Gas\u4f4e\u4e8eGasLimit\uff0c\u5219\u5269\u4f59\u7684Gas\u4f1a\u88ab\u9000\u56de\u3002"),(0,l.kt)("p",null,"GasLimit\u7684\u5b58\u5728\u4e3b\u8981\u4f5c\u7528\u662f\u4e3a\u4e86\u9650\u5236\u4ea4\u6613\u53ef\u80fd\u6d88\u8017\u7684\u6700\u5927\u8d44\u6e90\u91cf\uff0c\u4ee5\u907f\u514d\u56e0\u5408\u7ea6\u6267\u884c\u51fa\u9519\uff08\u5982\u65e0\u9650\u5faa\u73af\uff09\u800c\u5bfc\u81f4\u7684\u8fc7\u5ea6\u8d39\u7528\u3002"),(0,l.kt)("p",null,"GasLimit\u7684\u4e0a\u9650\u7406\u8bba\u4e0a\u662f\u6ca1\u6709\u9650\u5236\u7684\uff0c\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u975e\u5e38\u9ad8\u7684\u6570\u503c\u3002\u4e0d\u8fc7\uff0c\u8fd9\u4e2a\u8bbe\u5b9a\u7684\u6570\u503c\u4e0d\u80fd\u8d85\u8fc7\u5305\u542b\u8be5\u4ea4\u6613\u7684\u533a\u5757\u7684Gas Limit\uff0c\u8fd9\u662f\u56e0\u4e3a\u6bcf\u4e2a\u533a\u5757\u90fd\u6709\u4e00\u4e2a\u6700\u5927\u5bb9\u91cf\uff0c\u5373\u533a\u5757Gas Limit\uff0c\u5b83\u9650\u5236\u4e86\u8be5\u533a\u5757\u5185\u6240\u6709\u4ea4\u6613Gas\u6d88\u8017\u603b\u548c\u7684\u4e0a\u9650\u3002"),(0,l.kt)("p",null,"\u533a\u5757GasLimit\u662f\u7f51\u7edc\u4e2d\u6bcf\u4e2a\u533a\u5757\u80fd\u591f\u5904\u7406\u7684\u6700\u5927\u7684Gas\u603b\u91cf\uff0c\u8fd9\u4e2a\u9650\u5236\u786e\u4fdd\u4e86\u533a\u5757\u7684\u5904\u7406\u65f6\u95f4\u548c\u7f51\u7edc\u7684\u95ee\u9898\uff0c\u533a\u5757\u7684Gas Limit\u662f\u6709\u77ff\u5de5(\u6216\u4ee5\u592a\u574a2.0\u4e2d\u7684\u9a8c\u8bc1\u8005)\u901a\u8fc7\u4e00\u79cd\u6295\u7968\u7684\u673a\u5236\u51b3\u5b9a\u7684\uff0c\u5e76\u53ef\u4ee5\u968f\u7740\u65f6\u95f4\u8fdb\u884c\u8c03\u6574\uff0c\u4ee5\u54cd\u5e94\u7f51\u7edc\u8d1f\u8f7d\u7684\u53d8\u5316\u3002"),(0,l.kt)("p",null,"\u7528\u6237\u8bbe\u7f6e\u7684Gas Limit\u53cd\u6620\u4e86\u4ed6\u4eec\u5bf9\u4ea4\u6613\u6267\u884c\u590d\u6742\u5ea6\u7684\u9884\u4f30\uff0c\u5982\u679c\u4e00\u4e2a\u4ea4\u6613\u7684 Gas Limit \u9ad8\u5230\u4e0d\u5207\u5b9e\u9645\u7684\u7a0b\u5ea6\uff0c\u77ff\u5de5\u53ef\u80fd\u4f1a\u9009\u62e9\u5ffd\u7565\u8fd9\u4e2a\u4ea4\u6613\uff0c\u56e0\u4e3a\u5b83\u53ef\u80fd\u770b\u8d77\u6765\u50cf\u662f\u4e00\u4e2a\u9519\u8bef\u6216\u662f\u6076\u610f\u7684\u3002"),(0,l.kt)("h2",{id:"\u4e0egas\u76f8\u5173\u7684eip"},"\u4e0eGas\u76f8\u5173\u7684EIP"),(0,l.kt)("p",null,"\u5728\u4ee5\u592a\u574a\u4e2d\uff0c\u5173\u4e8eGas\uff08\u6267\u884c\u4ee5\u592a\u574a\u7f51\u7edc\u4ea4\u6613\u6240\u9700\u7684\u8ba1\u7b97\u8d44\u6e90\u8d39\u7528\uff09\u76f8\u5173\u7684EIP\uff08Ethereum Improvement Proposals\uff0c\u4ee5\u592a\u574a\u6539\u8fdb\u63d0\u6848\uff09\u6d89\u53ca\u5bf9\u7f51\u7edc\u7684\u8d39\u7528\u6a21\u578b\u3001Gas\u4ef7\u683c\u3001\u8d44\u6e90\u6d88\u8017\u9650\u5236\u7b49\u65b9\u9762\u7684\u4f18\u5316\u548c\u8c03\u6574\u3002\u8fd9\u4e9b\u63d0\u6848\u65e8\u5728\u63d0\u9ad8\u4ee5\u592a\u574a\u7f51\u7edc\u7684\u6548\u7387\u3001\u964d\u4f4e\u7528\u6237\u6210\u672c\u3001\u589e\u52a0\u7f51\u7edc\u7684\u53ef\u6269\u5c55\u6027\u548c\u5b89\u5168\u6027\u3002\u4e0b\u9762\u5217\u51fa\u4e86\u4e00\u4e9b\u91cd\u8981\u7684\u3001\u4e0eGas\u76f8\u5173\u7684EIPs\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"EIP-150"),": \u65e8\u5728\u8c03\u6574\u8c03\u7528\u5408\u7ea6\u6240\u9700\u7684Gas\u6210\u672c\uff0c\u4ee5\u89e3\u51b3DoS\u653b\u51fb\u95ee\u9898\uff0c\u901a\u8fc7\u589e\u52a0\u67d0\u4e9b\u64cd\u4f5c\u7684Gas\u6210\u672c\u6765\u9632\u6b62\u653b\u51fb\u8005\u5229\u7528\u4f4e\u6210\u672c\u7684\u4ea4\u6613\u6765\u62e5\u5835\u7f51\u7edc\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"EIP-1559"),": \u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u63d0\u6848\uff0c\u5b83\u5f15\u5165\u4e86\u4e00\u4e2a\u57fa\u7840\u8d39\u7528\uff08base fee\uff09\u673a\u5236\uff0c\u8be5\u8d39\u7528\u4f1a\u6839\u636e\u7f51\u7edc\u62e5\u5835\u60c5\u51b5\u81ea\u52a8\u8c03\u6574\uff0c\u5e76\u5c06\u8fc7\u91cf\u652f\u4ed8\u7684\u8d39\u7528\u9500\u6bc1\u800c\u4e0d\u662f\u652f\u4ed8\u7ed9\u77ff\u5de5\uff0c\u4ece\u800c\u6539\u5584\u4ea4\u6613\u8d39\u7528\u7684\u5e02\u573a\u548c\u51cf\u5c11ETH\u7684\u4f9b\u5e94\u901a\u80c0\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"EIP-2200"),": \u5bf9SSTORE\u64cd\u4f5c\u7684Gas\u6210\u672c\u8fdb\u884c\u52a8\u6001\u8c03\u6574\uff0c\u8003\u8651\u5230\u5b58\u50a8\u69fd\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u4f18\u5316\u667a\u80fd\u5408\u7ea6\u7684\u5b58\u50a8\u6210\u672c\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"EIP-2929"),": \u4e3a\u4e86\u63d0\u9ad8\u7f51\u7edc\u7684\u5b89\u5168\u6027\uff0c\u8be5\u63d0\u6848\u589e\u52a0\u4e86\u67d0\u4e9b\u64cd\u4f5c\u7684Gas\u6210\u672c\uff0c\u7279\u522b\u662f\u90a3\u4e9b\u80fd\u591f\u8bfb\u53d6\u72b6\u6001\u7684\u64cd\u4f5c\uff0c\u4ee5\u9632\u6b62\u53ef\u80fd\u7684DoS\u653b\u51fb\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"EIP-2930"),": \u5f15\u5165\u4e86\u4e00\u79cd\u65b0\u7684\u4ea4\u6613\u7c7b\u578b\uff0c\u5141\u8bb8\u9884\u5148\u58f0\u660e\u4e00\u4e2a\u4ea4\u6613\u5c06\u8bbf\u95ee\u54ea\u4e9b\u5730\u5740\u548c\u5b58\u50a8\u69fd\uff0c\u4ee5\u51cf\u5c11EIP-2929\u6240\u589e\u52a0\u7684Gas\u6210\u672c\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"EIP-3198"),": \u4e0eEIP-1559\u914d\u5957\uff0c\u5f15\u5165\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"BASEFEE"),"\u7684\u64cd\u4f5c\u7801\uff0c\u5141\u8bb8\u667a\u80fd\u5408\u7ea6\u8bbf\u95ee\u5f53\u524d\u533a\u5757\u7684\u57fa\u7840\u8d39\u7528\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"EIP-3529"),": \u79fb\u9664\u548c\u51cf\u5c11Gas\u9000\u6b3e\u673a\u5236\u4e2d\u7684\u67d0\u4e9b\u90e8\u5206\uff0c\u4ee5\u907f\u514d\u9000\u6b3e\u673a\u5236\u88ab\u6ee5\u7528\uff0c\u4ece\u800c\u5f71\u54cd\u7f51\u7edc\u7684\u5b89\u5168\u6027\u548c\u6548\u7387\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"EIP-3541"),": \u7981\u6b62\u90e8\u7f72\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"0xEF"),"\u5b57\u8282\u5f00\u5934\u7684\u5408\u7ea6\u4ee3\u7801\uff0c\u4e3a\u5c06\u6765\u5f15\u5165\u65b0\u7684\u5408\u7ea6\u7c7b\u578b\u505a\u51c6\u5907\u3002")),(0,l.kt)("h3",{id:"eip-2929"},"EIP-2929"),(0,l.kt)("p",null,"\u5728\u4ee5\u592a\u574a\u4e2d\uff0cEIP-2929\uff08Ethereum Improvement Proposal 2929\uff09\u662f\u4e00\u4e2a\u63d0\u6848\uff0c\u65e8\u5728\u589e\u52a0\u7279\u5b9a\u64cd\u4f5c\u7801\u7684\u6c14\u8d39\u6210\u672c\uff0c\u4ee5\u66f4\u597d\u5730\u53cd\u6620\u5b83\u4eec\u5bf9\u7f51\u7edc\u8d44\u6e90\u7684\u5b9e\u9645\u6d88\u8017\u3002\u8fd9\u4e2a\u63d0\u6848\u4e3b\u8981\u5173\u6ce8\u7684\u662f\u72b6\u6001\u8bbf\u95ee\u64cd\u4f5c\u7684\u6c14\u8d39\uff0c\u7279\u522b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"SLOAD"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"CALL"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"CALLCODE"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"DELEGATECALL")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"STATICCALL")," \u64cd\u4f5c\u3002EIP-2929 \u5f15\u5165\u4e86\u201c\u51b7\u201d\u548c\u201c\u70ed\u201d\u8bbf\u95ee\u7684\u6982\u5ff5\uff0c\u4ee5\u533a\u5206\u5bf9\u67d0\u4e2a\u6570\u636e\u7684\u9996\u6b21\u8bbf\u95ee\uff08\u51b7\u8bbf\u95ee\uff09\u548c\u540e\u7eed\u8bbf\u95ee\uff08\u70ed\u8bbf\u95ee\uff09\u3002"),(0,l.kt)("p",null,"\u5728 EIP-2929 \u4e4b\u524d\uff0c\u8bbf\u95ee\u667a\u80fd\u5408\u7ea6\u7684\u72b6\u6001\u53d8\u91cf\uff08\u4f8b\u5982\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SLOAD")," \u64cd\u4f5c\uff09\u7684\u6210\u672c\u662f\u56fa\u5b9a\u7684\uff0c\u4e0d\u8003\u8651\u8be5\u6570\u636e\u662f\u5426\u5df2\u7ecf\u5728\u4e4b\u524d\u88ab\u8bbf\u95ee\u8fc7\u3002EIP-2929 \u5f15\u5165\u4e86\u51b7\u8bbf\u95ee\u7684\u6982\u5ff5\uff0c\u5e76\u4e3a\u9996\u6b21\u8bbf\u95ee\u67d0\u4e2a\u72b6\u6001\u53d8\u91cf\u6307\u5b9a\u4e86\u66f4\u9ad8\u7684\u6c14\u8d39\u3002\u6307\u7684\u662f\u5bf9\u5df2\u7ecf\u88ab\u8bbf\u95ee\u8fc7\u7684\u6570\u636e\u7684\u518d\u6b21\u8bbf\u95ee\u3002EIP-2929 \u89c4\u5b9a\uff0c\u4e00\u65e6\u67d0\u4e2a\u6570\u636e\u5728\u5f53\u524d\u4ea4\u6613\u4e2d\u88ab\u8bbf\u95ee\u8fc7\uff08\u53d8\u201c\u70ed\u201d\u4e86\uff09\uff0c\u518d\u6b21\u8bbf\u95ee\u5b83\u7684\u6210\u672c\u5c31\u4f1a\u964d\u4f4e\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ColdSloadCostEIP2929(gas: 2100)")," \u662f\u6307\u6309\u7167 EIP-2929 \u89c4\u5b9a\uff0c\u8fdb\u884c\u4e00\u6b21\u51b7\u88c5\u8f7d\u64cd\u4f5c\u7684\u6c14\u8d39\u6210\u672c\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"WarmStorageReadCostEIP2929(gas: 100)")," \u662f\u6307\u8fdb\u884c\u4e00\u6b21\u70ed\u5b58\u50a8\u8bfb\u53d6\u64cd\u4f5c\u7684\u6c14\u8d39\u6210\u672c\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u533a\u5206\u53cd\u6620\u4e86\u5b9e\u9645\u7684\u8d44\u6e90\u6d88\u8017\uff1a\u4ece EVM \u7684\u72b6\u6001\u6811\u4e2d\u9996\u6b21\u52a0\u8f7d\u6570\u636e\uff08\u51b7\u8bbf\u95ee\uff09\u6bd4\u8bbf\u95ee\u5df2\u7ecf\u5728\u5185\u5b58\u4e2d\u7684\u6570\u636e\uff08\u70ed\u8bbf\u95ee\uff09\u66f4\u6602\u8d35\u3002"),(0,l.kt)("p",null,"EIP-2929 \u7684\u8fd9\u79cd\u6539\u53d8\u4f7f\u5f97\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u8005\u9700\u8981\u66f4\u52a0\u6ce8\u610f\u4ed6\u4eec\u5408\u7ea6\u7684\u72b6\u6001\u8bbf\u95ee\u6a21\u5f0f\uff0c\u4ee5\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u51b7\u8bbf\u95ee\uff0c\u4ece\u800c\u4f18\u5316\u5408\u7ea6\u7684\u6c14\u8d39\u6d88\u8017\u3002\u5bf9\u4e8e\u90a3\u4e9b\u9700\u8981\u9891\u7e41\u8bfb\u53d6\u540c\u4e00\u72b6\u6001\u53d8\u91cf\u7684\u5408\u7ea6\uff0c\u5408\u7406\u5730\u89c4\u5212\u72b6\u6001\u8bbf\u95ee\u987a\u5e8f\u53ef\u4ee5\u663e\u8457\u964d\u4f4e\u4ea4\u6613\u6210\u672c\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u8fd9\u4e5f\u662f\u4ee5\u592a\u574a\u5bf9\u7f51\u7edc\u62e5\u5835\u548c\u9ad8\u6c14\u8d39\u95ee\u9898\u7684\u4e00\u79cd\u5e94\u5bf9\u63aa\u65bd\uff0c\u901a\u8fc7\u8c03\u6574\u6c14\u8d39\u6210\u672c\u6765\u9f13\u52b1\u66f4\u9ad8\u6548\u7684\u667a\u80fd\u5408\u7ea6\u7f16\u5199\u548c\u6267\u884c\uff0c\u4ee5\u53ca\u66f4\u5408\u7406\u5730\u5229\u7528\u7f51\u7edc\u8d44\u6e90\u3002"))}k.isMDXComponent=!0}}]);