"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[384],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>k});var t=n(7294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),i=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(n),u=l,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?t.createElement(k,a(a({ref:r},p),{},{components:n})):t.createElement(k,a({ref:r},p))}));function k(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[m]="string"==typeof e?e:l,a[1]=c;for(var i=2;i<o;i++)a[i]=n[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8034:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=n(7462),l=(n(7294),n(3905));const o={id:"docker-install-mysql",title:"Docker\u5b89\u88c5Mysql"},a=void 0,c={unversionedId:"tools/docker-install-mysql",id:"tools/docker-install-mysql",title:"Docker\u5b89\u88c5Mysql",description:"docker\u5b89\u88c5mysql5.7",source:"@site/docs/tools/docker-install-mysql.md",sourceDirName:"tools",slug:"/tools/docker-install-mysql",permalink:"/note/zh-Hans/tools/docker-install-mysql",draft:!1,tags:[],version:"current",frontMatter:{id:"docker-install-mysql",title:"Docker\u5b89\u88c5Mysql"},sidebar:"tutorialSidebar",previous:{title:"Docker\u5b89\u88c5wordpress",permalink:"/note/zh-Hans/tools/docker-install-wordpress"},next:{title:"macOS brew\u6362\u6e90",permalink:"/note/zh-Hans/tools/mac-brew-update-sources"}},s={},i=[{value:"docker\u5b89\u88c5mysql5.7",id:"docker\u5b89\u88c5mysql57",level:2},{value:"\u62c9\u53d6\u955c\u50cf",id:"\u62c9\u53d6\u955c\u50cf",level:3},{value:"\u67e5\u770b\u955c\u50cf\u5217\u8868",id:"\u67e5\u770b\u955c\u50cf\u5217\u8868",level:3},{value:"\u521b\u5efa\u6302\u8f7d\u76ee\u5f55",id:"\u521b\u5efa\u6302\u8f7d\u76ee\u5f55",level:3},{value:"\u521b\u5efa\u5bb9\u5668",id:"\u521b\u5efa\u5bb9\u5668",level:3}],p={toc:i},m="wrapper";function d(e){let{components:r,...n}=e;return(0,l.kt)(m,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"docker\u5b89\u88c5mysql57"},"docker\u5b89\u88c5mysql5.7"),(0,l.kt)("h3",{id:"\u62c9\u53d6\u955c\u50cf"},"\u62c9\u53d6\u955c\u50cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u9ed8\u8ba4\u4e0b\u8f7dMySQL5.7\u6700\u65b0\u7248\u672c(\u6307\u5b9a\u7248\u672c: docker pull mysql:5.7.34)\ndocker pull mysql:5.7\n")),(0,l.kt)("p",null,"mac m2\u82af\u7247\u62a5\u9519"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"no matching manifest for linux/arm64/v8 in the manifest list entries\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u5c1d\u8bd5\u6307\u5b9a\u5e73\u53f0\u67b6\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull --platform linux/amd64 mysql:5.7\n# \u6216\u8005\ndocker pull --platform linux/x86_64 mysql:5.7\n")),(0,l.kt)("h3",{id:"\u67e5\u770b\u955c\u50cf\u5217\u8868"},"\u67e5\u770b\u955c\u50cf\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker images\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  docker images\nREPOSITORY   TAG       IMAGE ID       CREATED         SIZE\nmysql        5.7       c20987f18b13   18 months ago   448MB\n")),(0,l.kt)("h3",{id:"\u521b\u5efa\u6302\u8f7d\u76ee\u5f55"},"\u521b\u5efa\u6302\u8f7d\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5bbf\u4e3b\u673a\u521b\u5efa\u6570\u636e\u5b58\u653e\u76ee\u5f55\u6620\u5c04\u5230\u5bb9\u5668\nmkdir -p ~/Workspace/docker_container/mysql_5_7/data\n\n# \u5bbf\u4e3b\u673a\u521b\u5efa\u65e5\u5fd7\u76ee\u5f55\u6620\u5c04\u5230\u5bb9\u5668\nmkdir -p ~/Workspace/docker_container/mysql_5_7/logs\n\n# \u5bbf\u4e3b\u673a\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\u6620\u5c04\u5230\u5bb9\u5668 \nmkdir -p ~/Workspace/docker_container/mysql_5_7/conf #(\u9700\u8981\u5728\u6b64\u76ee\u5f55\u4e0b\u521b\u5efa"conf.d"\u3001"mysql.conf.d"\u4e24\u4e2a\u76ee\u5f55)\nmkdir -p ~/Workspace/docker_container/mysql_5_7/conf/conf.d # (\u5efa\u8bae\u5728\u6b64\u76ee\u5f55\u521b\u5efamy.cnf\u6587\u4ef6\u5e76\u8fdb\u884c\u76f8\u5173MySQL\u914d\u7f6e)\nmkdir -p ~/Workspace/docker_container/mysql_5_7/conf/mysql.conf.d\n')),(0,l.kt)("h3",{id:"\u521b\u5efa\u5bb9\u5668"},"\u521b\u5efa\u5bb9\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# --privileged=true\u53c2\u6570\uff0c\u8ba9container\u5185\u7684root\u62e5\u6709\u771f\u6b63\u7684root\u6743\u9650,\u5426\u5219\uff0ccontainer\u5185\u7684root\u53ea\u662f\u5916\u90e8\u7684\u4e00\u4e2a\u666e\u901a\u7528\u6237\u6743\u9650\u3002\n# \u666e\u901a\u7528\u6237\u4e0b\u521b\u5efa\u5bb9\u5668\u53ef\u4e0d\u6dfb\u52a0--privileged=true\u53c2\u6570\ndocker run -d --name mysql57 \\\n-p 23306:3306 \\\n-e MYSQL_ROOT_PASSWORD=123456 \\\n-v ~/Workspace/docker_container/mysql_5_7/data:/var/lib/mysql \\\n-v ~/Workspace/docker_container/mysql_5_7/logs:/var/log/mysql \\\n-v ~/Workspace/docker_container/mysql_5_7/conf:/etc/mysql/conf.d \\\nmysql:5.7\n")),(0,l.kt)("p",null,"mac m2\u4e0a\u62a5\u4e86\u8b66\u544a\uff0c\u4f46\u662f\u80fd\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  docker ps -a\nCONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                                NAMES\n63bc7101c565   mysql:5.7   "docker-entrypoint.s\u2026"   3 seconds ago   Up 2 seconds   33060/tcp, 0.0.0.0:23306->3306/tcp   mysql57\n')))}d.isMDXComponent=!0}}]);