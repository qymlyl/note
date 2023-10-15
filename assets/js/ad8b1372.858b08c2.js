"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[495],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),i=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=i(t.components);return r.createElement(u.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=i(n),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,l(l({ref:e},p),{},{components:n})):r.createElement(g,l({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[c]="string"==typeof t?t:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2313:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={id:"mac-install-rust",title:"macOS\u5b89\u88c5rust"},l=void 0,s={unversionedId:"tools/mac-install-rust",id:"tools/mac-install-rust",title:"macOS\u5b89\u88c5rust",description:"\u8fd9\u91cc\u662fmac\u4e0a\u5b89\u88c5Rust\u7684\u6b65\u9aa4\uff0cubuntu amd64\u7684\u64cd\u4f5c\u65b9\u5f0f\u662f\u4e00\u6837\u7684",source:"@site/docs/tools/mac-install-rust.md",sourceDirName:"tools",slug:"/tools/mac-install-rust",permalink:"/note/tools/mac-install-rust",draft:!1,tags:[],version:"current",frontMatter:{id:"mac-install-rust",title:"macOS\u5b89\u88c5rust"},sidebar:"tutorialSidebar",previous:{title:"macOS brew\u6362\u6e90",permalink:"/note/tools/mac-brew-update-sources"},next:{title:"macOS\u5b89\u88c5Mkdocs",permalink:"/note/tools/mac-install-mkdocs"}},u={},i=[{value:"\u5b98\u65b9\u5b89\u88c5\u65b9\u6cd5",id:"\u5b98\u65b9\u5b89\u88c5\u65b9\u6cd5",level:2},{value:"\u4f7f\u7528\u56fd\u5185\u955c\u50cf\u5b89\u88c5",id:"\u4f7f\u7528\u56fd\u5185\u955c\u50cf\u5b89\u88c5",level:2},{value:"\u79fb\u52a8.cargo",id:"\u79fb\u52a8cargo",level:2},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",level:2},{value:"\u5176\u4ed6\u7248\u672c",id:"\u5176\u4ed6\u7248\u672c",level:2},{value:"\u914d\u7f6e\u6e90",id:"\u914d\u7f6e\u6e90",level:2}],p={toc:i},c="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u662fmac\u4e0a\u5b89\u88c5Rust\u7684\u6b65\u9aa4\uff0cubuntu amd64\u7684\u64cd\u4f5c\u65b9\u5f0f\u662f\u4e00\u6837\u7684")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/workspace/programming/Rust\ncd ~/workspace/programming/Rust\n")),(0,a.kt)("h2",{id:"\u5b98\u65b9\u5b89\u88c5\u65b9\u6cd5"},"\u5b98\u65b9\u5b89\u88c5\u65b9\u6cd5"),(0,a.kt)("p",null,"\u6587\u6863\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"https://www.rust-lang.org/tools/install")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u56fd\u5185\u955c\u50cf\u5b89\u88c5"},"\u4f7f\u7528\u56fd\u5185\u955c\u50cf\u5b89\u88c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# RUSTUP_DIST_SERVER \uff08\u7528\u4e8e\u66f4\u65b0 toolchain\uff09\nexport RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static\n\n#RUSTUP_UPDATE_ROOT \uff08\u7528\u4e8e\u66f4\u65b0 rustup\uff09\nexport RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5b89\u88c5\u811a\u672c\u5e76\u6267\u884c"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e0b\u8f7d\u811a\u672c\nwget https://cdn.jsdelivr.net/gh/rust-lang-nursery/rustup.rs/rustup-init.sh\n\n#\u8bbe\u7f6e\u6267\u884c\u6743\u9650\u5e76\u6267\u884c\nchmod +x rustup-init.sh \nsh rustup-init.sh \n")),(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5b89\u88c5\u65b9\u5f0f\n\u811a\u672c\u6267\u884c\u540e\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff0c\u4f1a\u8df3\u51fa\u5b89\u88c5\u9009\u9879 1) \u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\uff0c2) \u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c3)\u53d6\u6d88\u5b89\u88c5\n\u8fd9\u91cc\u4f7f\u75282)\u81ea\u5b9a\u4e49\u914d\u7f6e")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sehll"},"1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n>2\n\nI'm going to ask you the value of each of these installation options.\nYou may simply press the Enter key to leave unchanged.\n\nDefault host triple? [aarch64-unknown-linux-gnu]\n\n\nDefault toolchain? (stable/beta/nightly/none) [stable]\n\n\nProfile (which tools and data to install)? (minimal/default/complete) [default]\n\n\nModify PATH variable? (Y/n)\nn\nCurrent installation options:\n\n\n   default host triple: aarch64-unknown-linux-gnu\n     default toolchain: stable\n               profile: default\n  modify PATH variable: no\n\n")),(0,a.kt)("h2",{id:"\u79fb\u52a8cargo"},"\u79fb\u52a8.cargo"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},".cargo"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},".rustup"),"\u4e24\u4e2a\u76ee\u5f55\u9ed8\u8ba4\u662f\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"~"),"\u76ee\u5f55\u4e0b\u7684\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"home"),"\u76ee\u5f55\uff0c\u8fd9\u91cc\u5c06\u5176\u79fb\u52a8\u5230\u4e86\u81ea\u5b9a\u4e49\u7684\u76ee\u5f55")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# .cargo\u76ee\u5f55\u9ed8\u8ba4\u5728~\u4e0b\uff0c\u5c06\u5176\u79fb\u52a8\u5230\u6307\u5b9a\u76ee\u5f55\u4e0b\nmv ~/.cargo ~/workspace/programming/Rust \\\n&& mv ~/.rustup ~/workspace/programming/Rust\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\u4e2d\u6240\u9700\u8981\u7684\u5916\u6e90\u5e93\u4f1a\u88ab\u653e\u5230.cargo\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u914d\u7f6e\u73af\u5883\u53d8\u91cf\nvim ~/.zshrc\n\n# RUST\nexport RUST_HOME=$HOME/workspace/programming/Rust\nexport CARGO_HOME=$RUST_HOME/.cargo\nexport RUSTUP_HOME=$RUST_HOME/.rustup\nexport PATH=$PATH:$CARGO_HOME/bin\nexport RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static\nexport RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@mqy224512:~/opt# cargo version\ncargo 1.57.0 (b2e52d7ca 2021-10-21)\n")),(0,a.kt)("h2",{id:"\u5176\u4ed6\u7248\u672c"},"\u5176\u4ed6\u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"rustup default stable\nrustup update\n# \u9ed8\u8ba4\u662fnightly\u7248\u672c,\u6bcf\u5929\u66f4\u65b0\uff0c\u5305\u542b\u4ee5\u4e00\u4e9b\u5b9e\u9a8c\u6027\u7684\u65b0\u7279\u6027\u3002\nrustup update nightly\n# \u5b89\u88c5wasm\u5de5\u5177\nrustup target add wasm32-unknown-unknown --toolchain nightly\n\nrustup version\n\n # \u5c55\u793arust\u5df2\u7ecf\u4e0b\u8f7d\u7684\u4e1c\u897f\n rustup show\n # \u67e5\u770brust\u5df2\u7ecf\u5b89\u88c5\u7684\u7248\u672c\n rustup toolchain list\n \n rustup target add wasm32-unknown-unknown --toolchain nightly\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u6e90"},"\u914d\u7f6e\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vim $RUST_HOME/.cargo/config\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[source.crates-io]\nregistry = "https://github.com/rust-lang/crates.io-index"\n\nreplace-with = \'ustc\'\n[source.ustc]\nregistry = "git://mirrors.ustc.edu.cn/crates.io-index"\n')))}m.isMDXComponent=!0}}]);