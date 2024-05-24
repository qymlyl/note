"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[3753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(k,o(o({ref:t},i),{},{components:n})):r.createElement(k,o({ref:t},i))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={id:"docker-install-ubuntu",title:"Docker\u5b89\u88c5Ubuntu"},o=void 0,s={unversionedId:"tools/docker-install-ubuntu",id:"tools/docker-install-ubuntu",title:"Docker\u5b89\u88c5Ubuntu",description:"\u521b\u5efa\u5bb9\u5668",source:"@site/docs/tools/docker-install-ubuntu.md",sourceDirName:"tools",slug:"/tools/docker-install-ubuntu",permalink:"/note/tools/docker-install-ubuntu",draft:!1,tags:[],version:"current",frontMatter:{id:"docker-install-ubuntu",title:"Docker\u5b89\u88c5Ubuntu"},sidebar:"tutorialSidebar",previous:{title:"Docker\u76f8\u5173\u64cd\u4f5c",permalink:"/note/tools/docker-usage"},next:{title:"Docker\u5b89\u88c5wordpress",permalink:"/note/tools/docker-install-wordpress"}},u={},c=[{value:"\u521b\u5efa\u5bb9\u5668",id:"\u521b\u5efa\u5bb9\u5668",level:2},{value:"\u8fdb\u5165\u5bb9\u5668",id:"\u8fdb\u5165\u5bb9\u5668",level:2},{value:"\u8fdb\u884cssh\u76f8\u5173\u914d\u7f6e",id:"\u8fdb\u884cssh\u76f8\u5173\u914d\u7f6e",level:2},{value:"ssh\u8fdc\u7a0b\u767b\u5f55",id:"ssh\u8fdc\u7a0b\u767b\u5f55",level:2}],i={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u521b\u5efa\u5bb9\u5668"},"\u521b\u5efa\u5bb9\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5bf922\u7aef\u53e3\u8fdb\u884c\u6620\u5c04\ndocker run --name ubuntu -it -d -p 10022:22 ubuntu:22.04\n")),(0,l.kt)("h2",{id:"\u8fdb\u5165\u5bb9\u5668"},"\u8fdb\u5165\u5bb9\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it ubuntu /bin/bash\n")),(0,l.kt)("h2",{id:"\u8fdb\u884cssh\u76f8\u5173\u914d\u7f6e"},"\u8fdb\u884cssh\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("p",null,"\u66f4\u65b0\u5305\u7ba1\u7406\u5668\uff0c\u5b89\u88c5ssh\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update && \\\napt-get upgrade -y && \\\napt-get install -y openssh-server openssh-client vim\n")),(0,l.kt)("p",null,"\u542f\u52a8ssh\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/etc/init.d/ssh start\n")),(0,l.kt)("p",null,"\u67e5\u770b\u8fdb\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ps -ef | grep sshd\n")),(0,l.kt)("p",null,"\u7f16\u8f91 sshd_config\u6587\u4ef6\uff0c\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"PermitRootLogin yes")," \uff0c\u4fdd\u5b58\u9000\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vim /etc/ssh/sshd_config\n")),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Authentication:\nPermitRootLogin yes\n#LoginGraceTime 2m\n#PermitRootLogin prohibit-password\n#StrictModes yes\n#MaxAuthTries 6\n#MaxSessions 10\n")),(0,l.kt)("p",null,"\u91cd\u542fssh\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"service ssh restart\n")),(0,l.kt)("p",null,"\u8bbe\u7f6essh\u670d\u52a1\u5f00\u673a\u81ea\u542f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"update-rc.d ssh defaults\n")),(0,l.kt)("p",null,"\u4e3aroot\u8bbe\u7f6e\u5bc6\u7801\uff08\u5bb9\u5668\u4e2d\u9ed8\u8ba4\u662froot\u7528\u6237\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"passwd root\n")),(0,l.kt)("h2",{id:"ssh\u8fdc\u7a0b\u767b\u5f55"},"ssh\u8fdc\u7a0b\u767b\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ssh root@\u5bbf\u4e3b\u673aIP:10022\n")))}d.isMDXComponent=!0}}]);