"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[589],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>h});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),i=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=i(e.components);return o.createElement(c.Provider,{value:r},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(t),p=n,h=u["".concat(c,".").concat(p)]||u[p]||b[p]||a;return t?o.createElement(h,l(l({ref:r},m),{},{components:t})):o.createElement(h,l({ref:r},m))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<a;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4021:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=t(7462),n=(t(7294),t(3905));const a={id:"mac-brew-update-sources",title:"mac brew\u6362\u6e90"},l=void 0,s={unversionedId:"tools/mac-brew-update-sources",id:"tools/mac-brew-update-sources",title:"mac brew\u6362\u6e90",description:"\u4f7f\u7528brew \u547d\u4ee4\u5b89\u88c5\u8f6f\u4ef6\u7684\u65f6\u5019\uff0c\u4e0e 3 \u4e2a\u4ed3\u5e93\u5730\u5740\u6709\u5173\uff0c\u6362\u6e90\u4e3b\u8981\u662f\u4fee\u6539\u8fd9\u4e09\u4e2a\u4ed3\u5e93\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740",source:"@site/docs/tools/mac-brew-update-sources.md",sourceDirName:"tools",slug:"/tools/mac-brew-update-sources",permalink:"/note/zh-Hans/tools/mac-brew-update-sources",draft:!1,tags:[],version:"current",frontMatter:{id:"mac-brew-update-sources",title:"mac brew\u6362\u6e90"},sidebar:"tutorialSidebar",previous:{title:"\u9996\u9875",permalink:"/note/zh-Hans/home"},next:{title:"mac\u5b89\u88c5Mkdocs",permalink:"/note/zh-Hans/tools/mac-install-mkdocs"}},c={},i=[{value:"\u66ff\u6362brew.git \u4ed3\u5e93\u5730\u5740",id:"\u66ff\u6362brewgit-\u4ed3\u5e93\u5730\u5740",level:2},{value:"\u66ff\u6362homebrew-core.git \u4ed3\u5e93\u5730\u5740",id:"\u66ff\u6362homebrew-coregit-\u4ed3\u5e93\u5730\u5740",level:2},{value:"\u66ff\u6362homebrew-bottles \u8bbf\u95ee\u5730\u5740",id:"\u66ff\u6362homebrew-bottles-\u8bbf\u95ee\u5730\u5740",level:2},{value:"zsh\u66ff\u6362\u6210\u963f\u91cc\u5df4\u5df4\u7684 homebrew-bottles \u8bbf\u95ee\u5730\u5740",id:"zsh\u66ff\u6362\u6210\u963f\u91cc\u5df4\u5df4\u7684-homebrew-bottles-\u8bbf\u95ee\u5730\u5740",level:3},{value:"\u67e5\u770bbrew config",id:"\u67e5\u770bbrew-config",level:2}],m={toc:i},u="wrapper";function b(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528brew \u547d\u4ee4\u5b89\u88c5\u8f6f\u4ef6\u7684\u65f6\u5019\uff0c\u4e0e 3 \u4e2a\u4ed3\u5e93\u5730\u5740\u6709\u5173\uff0c\u6362\u6e90\u4e3b\u8981\u662f\u4fee\u6539\u8fd9\u4e09\u4e2a\u4ed3\u5e93\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740"),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"brew.git"),(0,n.kt)("li",{parentName:"ol"},"homebrew-core.git"),(0,n.kt)("li",{parentName:"ol"},"homebrew-bottles"))),(0,n.kt)("h2",{id:"\u66ff\u6362brewgit-\u4ed3\u5e93\u5730\u5740"},"\u66ff\u6362brew.git \u4ed3\u5e93\u5730\u5740"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'# \u4e2d\u56fd\u79d1\u5927: https://mirrors.ustc.edu.cn/brew.git\n# \u6e05\u534e\u5927\u5b66: https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git \ncd "$(brew --repo)"\ngit remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git\n')),(0,n.kt)("p",null,"\u8fd8\u539f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'cd "$(brew --repo)"\ngit remote set-url origin https://github.com/Homebrew/brew.git\n')),(0,n.kt)("h2",{id:"\u66ff\u6362homebrew-coregit-\u4ed3\u5e93\u5730\u5740"},"\u66ff\u6362homebrew-core.git \u4ed3\u5e93\u5730\u5740"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'# \u4e2d\u56fd\u79d1\u5927: https://mirrors.ustc.edu.cn/homebrew-core.git\n# \u6e05\u534e\u5927\u5b66: https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git\ncd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"\ngit remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git\n')),(0,n.kt)("p",null,"\u8fd8\u539f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"\ngit remote set-url origin https://github.com/Homebrew/homebrew-core.git\n')),(0,n.kt)("h2",{id:"\u66ff\u6362homebrew-bottles-\u8bbf\u95ee\u5730\u5740"},"\u66ff\u6362homebrew-bottles \u8bbf\u95ee\u5730\u5740"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u6b65\u9aa4\u8ddf\u4f60\u7684 macOS \u7cfb\u7edf\u4f7f\u7528\u7684 shell \u7248\u672c\u6709\u5173\u7cfb,\u5148\u6765\u67e5\u770b\u5f53\u524d\u4f7f\u7528\u7684 shell \u7248\u672c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"echo $SHELL\n/bin/zsh\n")),(0,n.kt)("h3",{id:"zsh\u66ff\u6362\u6210\u963f\u91cc\u5df4\u5df4\u7684-homebrew-bottles-\u8bbf\u95ee\u5730\u5740"},"zsh\u66ff\u6362\u6210\u963f\u91cc\u5df4\u5df4\u7684 homebrew-bottles \u8bbf\u95ee\u5730\u5740"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e2d\u56fd\u79d1\u5927: echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc\n# \u6e05\u534e\u5927\u5b66: echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles' >> ~/.zshrc\necho 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc\nsource ~/.zshrc\n")),(0,n.kt)("p",null,"\u8fd8\u539f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"vi ~/.zshrc\n# \u7136\u540e\uff0c\u5220\u9664 HOMEBREW_BOTTLE_DOMAIN \u8fd9\u4e00\u884c\u914d\u7f6e\nsource ~/.zshrc\n")),(0,n.kt)("h2",{id:"\u67e5\u770bbrew-config"},"\u67e5\u770bbrew config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"brew config\n")),(0,n.kt)("p",null,"\u8fd9\u662f\u662f\u9ed8\u8ba4\u7684"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew config\nHOMEBREW_VERSION: 4.0.21\nORIGIN: https://github.com/Homebrew/brew.git\nHEAD: 9d0b7361d1a197949dbb47b761405075f83983b7\nLast commit: 4 days ago\nCore tap origin: https://github.com/Homebrew/homebrew-core\nCore tap HEAD: 63589f1a8e3cd0b1d5ee7eb25275cedb731ef73d\nCore tap last commit: 4 months ago\nCore tap branch: master\nCore tap JSON: 10 Jun 10:00 UTC\nHOMEBREW_PREFIX: /opt/homebrew\nHOMEBREW_CASK_OPTS: []\nHOMEBREW_GITHUB_API_TOKEN: set\nHOMEBREW_MAKE_JOBS: 12\nHomebrew Ruby: 2.6.10 => /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/bin/ruby\nCPU: dodeca-core 64-bit arm_blizzard_avalanche\nClang: 14.0.3 build 1403\nGit: 2.39.2 => /Library/Developer/CommandLineTools/usr/bin/git\nCurl: 7.88.1 => /usr/bin/curl\nmacOS: 13.4-arm64\nCLT: 14.3.1.0.1.1683849156\nXcode: N/A\nRosetta 2: false\n")))}b.isMDXComponent=!0}}]);