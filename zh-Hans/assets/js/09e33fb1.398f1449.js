"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=s,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,a=new Array(l);a[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[m]="string"==typeof e?e:s,a[1]=u;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var r=n(7462),s=(n(7294),n(3905));const l={id:"ubuntu-use",title:"Ubuntu\u76f8\u5173\u64cd\u4f5c"},a=void 0,u={unversionedId:"tools/ubuntu-use",id:"tools/ubuntu-use",title:"Ubuntu\u76f8\u5173\u64cd\u4f5c",description:"\u5e38\u89c4\u64cd\u4f5c",source:"@site/docs/tools/ubuntu-use.md",sourceDirName:"tools",slug:"/tools/ubuntu-use",permalink:"/note/zh-Hans/tools/ubuntu-use",draft:!1,tags:[],version:"current",frontMatter:{id:"ubuntu-use",title:"Ubuntu\u76f8\u5173\u64cd\u4f5c"},sidebar:"tutorialSidebar",previous:{title:"\u9996\u9875",permalink:"/note/zh-Hans/home"},next:{title:"macOS brew\u6362\u6e90",permalink:"/note/zh-Hans/tools/mac-brew-update-sources"}},o={},i=[{value:"\u5e38\u89c4\u64cd\u4f5c",id:"\u5e38\u89c4\u64cd\u4f5c",level:2},{value:"\u6362\u6e90",id:"\u6362\u6e90",level:3},{value:"open too many files",id:"open-too-many-files",level:3},{value:"ssh\u8fde\u63a5Permission denied (publickey)",id:"ssh\u8fde\u63a5permission-denied-publickey",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7528\u6237",id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7528\u6237",level:3},{value:"\u4fee\u6539\u76ee\u5f55\u6240\u6709\u8005",id:"\u4fee\u6539\u76ee\u5f55\u6240\u6709\u8005",level:3},{value:"\u4e3a\u5e94\u7528\u521b\u5efa\u5b88\u62a4\u8fdb\u7a0b",id:"\u4e3a\u5e94\u7528\u521b\u5efa\u5b88\u62a4\u8fdb\u7a0b",level:3},{value:"\u914d\u7f6eroot\u7528\u6237",id:"\u914d\u7f6eroot\u7528\u6237",level:3},{value:"\u5b89\u88c5make\u548cGcc",id:"\u5b89\u88c5make\u548cgcc",level:3},{value:"Git",id:"git",level:2},{value:"\u751f\u6210\u516c\u94a5",id:"\u751f\u6210\u516c\u94a5",level:3},{value:"\u8bbe\u7f6eglobal\u53c2\u6570",id:"\u8bbe\u7f6eglobal\u53c2\u6570",level:3},{value:"\u4ee3\u7801\u62c9\u53d6\u62a5\u9519",id:"\u4ee3\u7801\u62c9\u53d6\u62a5\u9519",level:3},{value:"shell",id:"shell",level:2},{value:"\u67e5\u770b\u6240\u6709shell",id:"\u67e5\u770b\u6240\u6709shell",level:3},{value:"\u67e5\u770b\u5f53\u524dsell",id:"\u67e5\u770b\u5f53\u524dsell",level:3},{value:"zsh\u5b89\u88c5",id:"zsh\u5b89\u88c5",level:3},{value:"\u5b89\u88c5zsh",id:"\u5b89\u88c5zsh",level:4},{value:"\u5b89\u88c5oh-my-zsh",id:"\u5b89\u88c5oh-my-zsh",level:4},{value:"\u914d\u7f6ezsh",id:"\u914d\u7f6ezsh",level:4},{value:"GO\u5b89\u88c5",id:"go\u5b89\u88c5",level:2}],p={toc:i},m="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u5e38\u89c4\u64cd\u4f5c"},"\u5e38\u89c4\u64cd\u4f5c"),(0,s.kt)("h3",{id:"\u6362\u6e90"},"\u6362\u6e90"),(0,s.kt)("p",null,"\u4f7f\u7528\u6e05\u534e\u7684\u6e90",(0,s.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/"},"https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/")),(0,s.kt)("p",null,"\u5148\u5907\u4efd\u6e90\u6587\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cp /etc/apt/sources.list  /etc/apt/sources.list.bk\n")),(0,s.kt)("p",null,"\u4fee\u6539\u6e90\u6587\u4ef6\uff0c\u5220\u9664\u6587\u4ef6\u4e2d\u4e4b\u524d\u7684\u5185\u5bb9\uff0c\u5199\u5165\u65b0\u7684\u6e90"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo rm /etc/apt/sources.list\nsudo vim /etc/apt/sources.list\n")),(0,s.kt)("p",null,"\u4ec5\u5305\u542b 32/64 \u4f4d x86 \u67b6\u6784\u5904\u7406\u5668\u7684\u8f6f\u4ef6\u5305"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u9ed8\u8ba4\u6ce8\u91ca\u4e86\u6e90\u7801\u955c\u50cf\u4ee5\u63d0\u9ad8 apt update \u901f\u5ea6\uff0c\u5982\u6709\u9700\u8981\u53ef\u81ea\u884c\u53d6\u6d88\u6ce8\u91ca\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse\n\n# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse\n# # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse\n\ndeb http://security.ubuntu.com/ubuntu/ jammy-security main restricted universe multiverse\n# deb-src http://security.ubuntu.com/ubuntu/ jammy-security main restricted universe multiverse\n\n# \u9884\u53d1\u5e03\u8f6f\u4ef6\u6e90\uff0c\u4e0d\u5efa\u8bae\u542f\u7528\n# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse\n# # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse\n")),(0,s.kt)("p",null,"\u5728 ARM(arm64, armhf)\u3001PowerPC(ppc64el)\u3001RISC-V(riscv64) \u548c S390x \u7b49\u67b6\u6784\u7684\u8bbe\u5907\u4e0a\uff08\u5bf9\u5e94\u5b98\u65b9\u6e90\u4e3a ports.ubuntu.com\uff09\u4f7f\u7528\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u9ed8\u8ba4\u6ce8\u91ca\u4e86\u6e90\u7801\u955c\u50cf\u4ee5\u63d0\u9ad8 apt update \u901f\u5ea6\uff0c\u5982\u6709\u9700\u8981\u53ef\u81ea\u884c\u53d6\u6d88\u6ce8\u91ca\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-updates main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-updates main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-backports main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-backports main restricted universe multiverse\n\n# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-security main restricted universe multiverse\n# # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-security main restricted universe multiverse\n\ndeb http://ports.ubuntu.com/ubuntu-ports/ jammy-security main restricted universe multiverse\n# deb-src http://ports.ubuntu.com/ubuntu-ports/ jammy-security main restricted universe multiverse\n\n# \u9884\u53d1\u5e03\u8f6f\u4ef6\u6e90\uff0c\u4e0d\u5efa\u8bae\u542f\u7528\n# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-proposed main restricted universe multiverse\n# # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-proposed main restricted universe multivers\n")),(0,s.kt)("p",null,"\u66f4\u65b0\u6e90"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\n")),(0,s.kt)("h3",{id:"open-too-many-files"},"open too many files"),(0,s.kt)("p",null,"\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u8d85\u9650\u4e86"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"vim /etc/security/limits.conf\n\n* soft nproc 1000000\n* hard nproc 1000000\n* soft nofile 1000000\n* hard nofile 1000000\n")),(0,s.kt)("p",null,"\u91cd\u65b0\u767b\u5f55\u5373\u53ef"),(0,s.kt)("p",null,"\u67e5\u770b\u6240\u5141\u8bb8\u6700\u5927\u6587\u4ef6\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[root@localhost ~]# cat /proc/sys/fs/file-max\n2000000\n")),(0,s.kt)("h3",{id:"ssh\u8fde\u63a5permission-denied-publickey"},"ssh\u8fde\u63a5Permission denied (publickey)"),(0,s.kt)("p",null,"\u53ef\u80fd\u662fLinux\u4e0assh\u670d\u52a1\u6ca1\u6709\u5f00\u5bc6\u7801\u767b\u5f55"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/ssh/sshd_config\n")),(0,s.kt)("p",null,"\u627e\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"PasswordAuthentication"),",\u5c06",(0,s.kt)("inlineCode",{parentName:"p"},"no"),"\u6539\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"yes")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"PasswordAuthentication yes\n")),(0,s.kt)("p",null,"\u7136\u540e\u91cd\u542f\u670d\u52a1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart sshd\n")),(0,s.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7528\u6237"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7528\u6237"),(0,s.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7528\u6237"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo adduser <username>\n")),(0,s.kt)("p",null,"\u5c06\u7528\u6237\u6dfb\u52a0\u5230sudo\u7ec4\u4e2d\uff0c\u4ee5\u4fbf\u62e5\u6709\u7ba1\u7406\u5458\u6743\u9650"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo usermod -aG sudo <username>\n")),(0,s.kt)("h3",{id:"\u4fee\u6539\u76ee\u5f55\u6240\u6709\u8005"},"\u4fee\u6539\u76ee\u5f55\u6240\u6709\u8005"),(0,s.kt)("p",null,"\u9012\u5f52\u4fee\u6539\u76ee\u5f55\u53ca\u5176\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u7684\u6240\u6709\u8005"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chown -R <\u7528\u6237\u540d>:<\u7528\u6237\u7ec4> \u76ee\u6807\u76ee\u5f55\n")),(0,s.kt)("h3",{id:"\u4e3a\u5e94\u7528\u521b\u5efa\u5b88\u62a4\u8fdb\u7a0b"},"\u4e3a\u5e94\u7528\u521b\u5efa\u5b88\u62a4\u8fdb\u7a0b"),(0,s.kt)("p",null,"\u7f16\u5199\u4e00\u4e2a\u670d\u52a1\u6587\u4ef6\uff0c\u901a\u5e38\u653e\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/")," \u76ee\u5f55\u4e0b\uff0c\u547d\u540d\u89c4\u5219\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"your-service-name.service"),"\u3002\u53ef\u4ee5\u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u6253\u5f00\u5e76\u7f16\u8f91\u8be5\u6587\u4ef6\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vi /etc/systemd/system/your-service-name.service\n")),(0,s.kt)("p",null,"\u5728\u670d\u52a1\u6587\u4ef6\u4e2d\u5b9a\u4e49\u670d\u52a1\u7684\u63cf\u8ff0\u4fe1\u606f\u3001\u542f\u52a8\u547d\u4ee4\u3001\u505c\u6b62\u547d\u4ee4\u3001\u4f9d\u8d56\u5173\u7cfb\u7b49\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[Unit]\nDescription=<Your Service Name>\n\n[Service]\nKillMode=process\nLimitNOFILE=102400\nEnvironment=BINPATH=<binary path>\nWorkingDirectory=<binary path>\nType=forking\n\nExecStart=/usr/bin/bash -c "${BINPATH}/run.sh start"\nExecStop=/usr/bin/bash -c "${BINPATH}/run.sh stop"\nExecReload=/usr/bin/bash -c "${BINPATH}/run.sh restart"\n\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target\n')),(0,s.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[Unit]")," \u6bb5\u5305\u542b\u670d\u52a1\u7684\u63cf\u8ff0\u4fe1\u606f\u548c\u4f9d\u8d56\u5173\u7cfb\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[Service]")," \u6bb5\u5305\u542b\u670d\u52a1\u7684\u542f\u52a8\u547d\u4ee4\u548c\u91cd\u542f\u7b56\u7565\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[Install]")," \u6bb5\u5305\u542b\u670d\u52a1\u7684\u5b89\u88c5\u4fe1\u606f\u3002")),(0,s.kt)("p",null,"\u542f\u7528\u670d\u52a1\u5e76\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl enable your-service-name.service\n")),(0,s.kt)("p",null,"\u542f\u52a8\u670d\u52a1\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl start your-service-name.service\n")),(0,s.kt)("p",null,"\u68c0\u67e5\u670d\u52a1\u72b6\u6001\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl status your-service-name.service\n")),(0,s.kt)("p",null,"\u5982\u679c\u670d\u52a1\u7684\u72b6\u6001\u663e\u793a\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"active (running)"),"\uff0c\u5219\u8bf4\u660e\u670d\u52a1\u5df2\u7ecf\u6210\u529f\u542f\u52a8\uff0c\u5e76\u4e14\u5df2\u7ecf\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8\u3002\u5982\u679c\u670d\u52a1\u7684\u72b6\u6001\u663e\u793a\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"inactive (dead)"),"\uff0c\u5219\u8bf4\u660e\u670d\u52a1\u542f\u52a8\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u662f\u5426\u6b63\u786e\u3002"),(0,s.kt)("p",null,"\u7981\u7528\u5b88\u62a4\u8fdb\u7a0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl disable your-service-name.service \n")),(0,s.kt)("h3",{id:"\u914d\u7f6eroot\u7528\u6237"},"\u914d\u7f6eroot\u7528\u6237"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e3aroot\u7528\u6237\u8bbe\u7f6e\u5bc6\u7801\nsudo passwd root\n\n#\u767b\u5f55\u5230root\u7528\u6237\nsu root\n\n# \u8bbe\u7f6eroot\u7528\u6237\u53efssh\u767b\u5f55\nsudo vi /etc/ssh/sshd_config\n\n#\u6253\u5f00\nLoginGraceTime 2m\nPermitRootLogin yes\nStrictModes yes\n\n#\u91cd\u542fssh\nsudo service ssh restart\n")),(0,s.kt)("p",null,"\u8bbe\u7f6eroot\u7528\u6237\u767b\u5f55\u56fe\u5f62\u684c\u9762"),(0,s.kt)("p",null,"1)\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u547d\u4ee4sudo vim /etc/pam.d/gdm-autologin"),(0,s.kt)("p",null,"(\u524d\u63d0\u662f\u7cfb\u7edf\u4e2d\u5b89\u88c5\u6709vim\u7f16\u8f91\u5668,\u5b89\u88c5\u547d\u4ee4\u662fsudo apt-get install vim,\u4e5f\u53ef\u4ee5\u4f7f\u7528vi\u7f16\u8f91\u5668\u6216nano\u7f16\u8f91\u5668)"),(0,s.kt)("p",null,"2)\u6ce8\u91ca'auth requied pam_succeed_if.so user != root quiet success'\u8fd9\u4e00\u884c,\u4fdd\u5b58\u9000\u51fa"),(0,s.kt)("p",null,"3)\u5728\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4sudo vim /etc/pam.d/gdm-password"),(0,s.kt)("p",null,"4)\u6ce8\u91ca'auth requied pam_succeed_if.so user != root quiet success'\u8fd9\u4e00\u884c,\u4fdd\u5b58\u9000\u51fa"),(0,s.kt)("p",null,"5)\u5728\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4sudo vi /root/.profile"),(0,s.kt)("p",null,"6)\u5728'mesg n 2> /dev/null || true'\u8fd9\u4e00\u884c\u524d\u6dfb\u52a0'tty -s && ',\u6539\u4e3a'tty -s && mesg n 2> /dev/null || true'"),(0,s.kt)("p",null,"7)\u91cd\u542f\u8ba1\u7b97\u673a,\u6b64\u65f6\u53ef\u4ee5\u7528ROOT\u7528\u6237\u767b\u5f55,\u4e5f\u53ef\u4ee5\u4f7f\u7528\u539f\u6765\u5b89\u88c5\u65f6\u81ea\u5df1\u521b\u5efa\u7684\u666e\u901a\u7528\u6237\u767b\u5f55,\u4f46\u662f\u9009\u62e9\u4e86\u666e\u901a\u7528\u6237\u540e\u7684\u7528\u6237\u9009\u62e9\u5217\u8868\u5e76\u6ca1\u6709root\u7528\u6237,\u9700\u8981\u70b9\u51fb\u672a\u5217\u51fa\u624b\u52a8\u8f93\u5165root\u548c\u5bc6\u7801\u6765\u767b\u5f55"),(0,s.kt)("h3",{id:"\u5b89\u88c5make\u548cgcc"},"\u5b89\u88c5make\u548cGcc"),(0,s.kt)("p",null,"\u5b89\u88c5make"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt install make\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ make --version\nGNU Make 4.3\nBuilt for aarch64-unknown-linux-gnu\nCopyright (C) 1988-2020 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n")),(0,s.kt)("p",null,"\u5b89\u88c5gcc"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt install build-essential\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ gcc --version\ngcc (Ubuntu 11.3.0-1ubuntu1~22.04.1) 11.3.0\nCopyright (C) 2021 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")),(0,s.kt)("h2",{id:"git"},"Git"),(0,s.kt)("h3",{id:"\u751f\u6210\u516c\u94a5"},"\u751f\u6210\u516c\u94a5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'# \u4e00\u8def\u56de\u8f66\nssh-keygen -t rsa -C "your email"\n')),(0,s.kt)("h3",{id:"\u8bbe\u7f6eglobal\u53c2\u6570"},"\u8bbe\u7f6eglobal\u53c2\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global  user.name "your user name"\ngit config --global user.email "your email"\n\n# \u67e5\u770b\u6240\u6709\u914d\u7f6e\ngit config --global --list\n')),(0,s.kt)("h3",{id:"\u4ee3\u7801\u62c9\u53d6\u62a5\u9519"},"\u4ee3\u7801\u62c9\u53d6\u62a5\u9519"),(0,s.kt)("p",null,"\u4ed3\u5e93\u914d\u7f6e\u4e86ssh\u516c\u94a5\uff0c\u62c9\u53d6\u4ee3\u7801\u62a5\u9519\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"Their offer: ssh-rsa fatal: Could not read from remote repository.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"vim ~/.ssh/config\n\nHost *\nHostkeyAlgorithms +ssh-rsa\nPubkeyAcceptedKeyTypes +ssh-rsa\n")),(0,s.kt)("h2",{id:"shell"},"shell"),(0,s.kt)("h3",{id:"\u67e5\u770b\u6240\u6709shell"},"\u67e5\u770b\u6240\u6709shell"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cat /etc/shells\n")),(0,s.kt)("h3",{id:"\u67e5\u770b\u5f53\u524dsell"},"\u67e5\u770b\u5f53\u524dsell"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"echo $SHELL\n")),(0,s.kt)("h3",{id:"zsh\u5b89\u88c5"},"zsh\u5b89\u88c5"),(0,s.kt)("h4",{id:"\u5b89\u88c5zsh"},"\u5b89\u88c5zsh"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install zsh\n")),(0,s.kt)("p",null,"\u5c06\u9ed8\u8ba4\u7684shell\u6539\u4e3azsh"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4f7f\u7528zsh\nzsh\n")),(0,s.kt)("p",null,"\u5c06zsh\u8bbe\u7f6e\u6210\u9ed8\u8ba4shell"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"chsh -s /usr/bin/zsh\n")),(0,s.kt)("h4",{id:"\u5b89\u88c5oh-my-zsh"},"\u5b89\u88c5oh-my-zsh"),(0,s.kt)("p",null,"\u524d\u63d0\u5df2\u7ecf\u5b89\u88c5\u4e86gt"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'# github\u5b89\u88c5\nwget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh\n\n# giteea\u5b89\u88c5\nsh -c "$(curl -fsSL https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh)"\n')),(0,s.kt)("h4",{id:"\u914d\u7f6ezsh"},"\u914d\u7f6ezsh"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"vim ~/.zshrc\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'#\u9632\u6b62\u4e2d\u6587\u4e71\u7801\nexport LC_ALL=en_US.UTF-8\nexport LANG=en_US.UTF-8\n\n# \u9ed8\u8ba4\u7684\u8def\u5f84\nZSH="\uff5e/.oh-my-zsh"\n# \u8bbe\u7f6e\u5b57\u4f53\u6a21\u5f0f\u4ee5\u53ca\u914d\u7f6e\u547d\u4ee4\u884c\u7684\u4e3b\u9898 \n#ZSH_THEME="robbyrussell" #\u9ed8\u8ba4\u4e3b\u9898\n# \u4e3b\u9898\uff1ahttps://github.com/ohmyzsh/ohmyzsh/wiki/Themes\nZSH_THEME="gallois" # \u76ee\u524d\u4f7f\u7528\u4e3b\u9898\n')),(0,s.kt)("h2",{id:"go\u5b89\u88c5"},"GO\u5b89\u88c5"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u662f\u4e4b\u524d\u5728\u4e00\u53f0arm64\u7684ubuntu\u5b89\u88c5\u7684\u6b65\u9aa4\uff0cubuntu amd64\u7684\u64cd\u4f5c\u65b9\u5f0f\u662f\u4e00\u6837\u7684")),(0,s.kt)("p",null,"\u5b98\u7f51\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://golang.google.cn/"},"https://golang.google.cn/")),(0,s.kt)("p",null,"\u4e0b\u8f7d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://golang.google.cn/dl/go1.17.13.linux-arm64.tar.gz\n")),(0,s.kt)("p",null,"\u89e3\u538b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"tar -zxvf go1.17.13.linux-arm64.tar.gz -C ~/opt/programming/Go\n")),(0,s.kt)("p",null,"\u521b\u5efa\u76ee\u5f55"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir ~/opt/programming/Go/go_workspace\nmkdir ~/opt/programming/Go/GOCACHE\ntouch ~/opt/programming/Go/ENV\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ ll ~/opt/programming/Go        \ntotal 12K\n-rw-rw-r-- 1 ubuntu ubuntu   0 Mar 12 17:46 ENV\ndrwxr-xr-x 1 ubuntu ubuntu 608 Jul 30  2022 go\ndrwxrwxr-x 1 ubuntu ubuntu  64 Mar 12 17:46 GOCACHE\ndrwxrwxr-x 1 ubuntu ubuntu  64 Mar 12 17:46 go_workspace\n")),(0,s.kt)("p",null,"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"vim ~/.zshrc\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"export OPT_DIR=$HOME/opt\n\n# Go\nexport GO_HOME=$OPT_DIR/programming/Go\nexport GOROOT=$GO_HOME/go\nexport GOPATH=$GO_HOME/go_workspace\nexport GOENV=$$GO_HOME/ENV\nexport GOCACHE=$GO_HOME/GOCACHE\nexport PATH=$PATH:$GOROOT/bin:$GOPATH\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.io,direct\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"source ~/.zshrc\n")),(0,s.kt)("p",null,"\u67e5\u770b\u7248\u672c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version                                                                                                       \ngo version go1.17.13 linux/arm64\n")))}c.isMDXComponent=!0}}]);