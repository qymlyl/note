"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>_});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=i(r),d=s,_=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return r?n.createElement(_,a(a({ref:t},m),{},{components:r})):n.createElement(_,a({ref:t},m))}));function _(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:s,a[1]=l;for(var i=2;i<o;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),s=(r(7294),r(3905));const o={id:"setup-os-devel-env",title:"macOS\u642d\u5efaOS\u5b9e\u9a8c\u73af\u5883"},a=void 0,l={unversionedId:"rCore-Tutorial-Book\u5b66\u4e60/setup-os-devel-env",id:"rCore-Tutorial-Book\u5b66\u4e60/setup-os-devel-env",title:"macOS\u642d\u5efaOS\u5b9e\u9a8c\u73af\u5883",description:"\u524d\u63d0: \u5df2\u7ecf\u5b89\u88c5\u597drust\uff0c\u53ef\u4ee5\u67e5\u770bmacOS\u5b89\u88c5Rust",source:"@site/docs/rCore-Tutorial-Book\u5b66\u4e60/macOS\u642d\u5efaOS\u5b9e\u9a8c\u73af\u5883.md",sourceDirName:"rCore-Tutorial-Book\u5b66\u4e60",slug:"/rCore-Tutorial-Book\u5b66\u4e60/setup-os-devel-env",permalink:"/note/rCore-Tutorial-Book\u5b66\u4e60/setup-os-devel-env",draft:!1,tags:[],version:"current",frontMatter:{id:"setup-os-devel-env",title:"macOS\u642d\u5efaOS\u5b9e\u9a8c\u73af\u5883"},sidebar:"tutorialSidebar",previous:{title:"ref",permalink:"/note/rCore-Tutorial-Book\u5b66\u4e60/ref"}},u={},i=[{value:"\u5b89\u88c5QEMU",id:"\u5b89\u88c5qemu",level:2},{value:"\u62c9\u53d6rCore-Tutorial\u4ed3\u5e93",id:"\u62c9\u53d6rcore-tutorial\u4ed3\u5e93",level:2},{value:"\u66ff\u6362RustSBI",id:"\u66ff\u6362rustsbi",level:2},{value:"\u8fd0\u884cos",id:"\u8fd0\u884cos",level:2}],m={toc:i},p="wrapper";function c(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u524d\u63d0: \u5df2\u7ecf\u5b89\u88c5\u597drust\uff0c\u53ef\u4ee5\u67e5\u770b",(0,s.kt)("a",{parentName:"p",href:"https://qymlyl.github.io/note/tools/mac-install-rust"},"macOS\u5b89\u88c5Rust"))),(0,s.kt)("h2",{id:"\u5b89\u88c5qemu"},"\u5b89\u88c5QEMU"),(0,s.kt)("p",null,"\u4f7f\u7528brew\u76f4\u63a5\u5b89\u88c5qemu\uff0c",(0,s.kt)("a",{parentName:"p",href:"https://www.qemu.org/download/#macos"},"\u5b98\u65b9\u4e0b\u8f7d\u9875\u9762")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install qemu\n")),(0,s.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u63a7\u5236\u53f0\u8f93\u5165",(0,s.kt)("inlineCode",{parentName:"p"},"qemu-"),"\u6309",(0,s.kt)("inlineCode",{parentName:"p"},"tab"),"\u952e\u5c1d\u8bd5\u8865\u5168\u547d\u4ee4\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ qemu-\nqemu-edid                 qemu-system-avr           qemu-system-mips          qemu-system-riscv32       qemu-system-tricore     \nqemu-img                  qemu-system-cris          qemu-system-mips64        qemu-system-riscv64       qemu-system-x86_64      \nqemu-io                   qemu-system-hppa          qemu-system-mips64el      qemu-system-rx            qemu-system-xtensa      \nqemu-nbd                  qemu-system-i386          qemu-system-mipsel        qemu-system-s390x         qemu-system-xtensaeb    \nqemu-storage-daemon       qemu-system-loongarch64   qemu-system-nios2         qemu-system-sh4                                   \nqemu-system-aarch64       qemu-system-m68k          qemu-system-or1k          qemu-system-sh4eb                                 \nqemu-system-alpha         qemu-system-microblaze    qemu-system-ppc           qemu-system-sparc                                 \nqemu-system-arm           qemu-system-microblazeel  qemu-system-ppc64         qemu-system-sparc64\n")),(0,s.kt)("p",null,"\u9ed8\u8ba4\u662f\u5c06\u6240\u652f\u6301\u7684\u5e73\u53f0\u90fd\u5b89\u88c5\u4e86"),(0,s.kt)("p",null,"\u67e5\u770b",(0,s.kt)("inlineCode",{parentName:"p"},"qemu"),"\u7248\u672c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ qemu-system-riscv64 --version\nQEMU emulator version 8.0.4\nCopyright (c) 2003-2022 Fabrice Bellard and the QEMU Project developers\n")),(0,s.kt)("h2",{id:"\u62c9\u53d6rcore-tutorial\u4ed3\u5e93"},"\u62c9\u53d6rCore-Tutorial\u4ed3\u5e93"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/LearningOS/rCore-Tutorial-Code-2023A\ncd rCore-Tutorial-Code-2023A\n\n# ch1\u4e2d\u6709\u4e00\u4e2a\u53ef\u8fd0\u884c\u7684hello world\u7a0b\u5e8f\ngit checkout ch1\n")),(0,s.kt)("h2",{id:"\u66ff\u6362rustsbi"},"\u66ff\u6362RustSBI"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://learningos.cn/rCore-Tutorial-Guide-2023A/0setup-devel-env.html"},"rCore-Tutorial-Book"),"\u4e2d\u6709\u8bf4\u660e\uff0c\u5982\u679c\u4f7f\u7528\u7684\u662fQemu8\u9700\u8981\u4f7f\u7528\u65b0",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rustsbi/rustsbi-qemu/releases"},"RustSBI")),(0,s.kt)("p",null,"\u4e0b\u8f7d\u6700\u65b0\u7248",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rustsbi/rustsbi-qemu/releases/tag/Unreleased"},"RustSBI Prereleased 2023-10-27"),"\u540e\u590d\u5236\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"bootloader"),"\u76ee\u5f55\u4e0b\u66ff\u6362\u540c\u540d\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"rustsbi-qemu.bin")," \u5373\u53ef\uff0c\u5373",(0,s.kt)("inlineCode",{parentName:"p"},"rCore-Tutorial-Code-2023A/bootloader/rustsbi-qemu.bin")),(0,s.kt)("h2",{id:"\u8fd0\u884cos"},"\u8fd0\u884cos"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd os\nLOG=DEBUG make run\n")),(0,s.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ LOG=DEBUG make run\n(rustup target list | grep \"riscv64gc-unknown-none-elf (installed)\") || rustup target add riscv64gc-unknown-none-elf\nriscv64gc-unknown-none-elf (installed)\ncargo install cargo-binutils\n    Blocking waiting for file lock on package cache\n    Updating `crates-io` index\n     Ignored package `cargo-binutils v0.3.6` is already installed, use --force to override\nrustup component add rust-src\ninfo: component 'rust-src' is up to date\nrustup component add llvm-tools-preview\ninfo: component 'llvm-tools' for target 'aarch64-apple-darwin' is up to date\nPlatform: qemu\n   Compiling os v0.1.0 (/Users/mqy/Workspace/programming/programming_study/os_rcore/stage2_rcore/2023a-rcore-qymlyl/os)\n    Finished release [optimized + debuginfo] target(s) in 0.09s\n[rustsbi] RustSBI version 0.3.1, adapting to RISC-V SBI v1.0.0\n.______       __    __      _______.___________.  _______..______   __\n|   _  \\     |  |  |  |    /       |           | /       ||   _  \\ |  |\n|  |_)  |    |  |  |  |   |   (----`---|  |----`|   (----`|  |_)  ||  |\n|      /     |  |  |  |    \\   \\       |  |      \\   \\    |   _  < |  |\n|  |\\  \\----.|  `--'  |.----)   |      |  |  .----)   |   |  |_)  ||  |\n| _| `._____| \\______/ |_______/       |__|  |_______/    |______/ |__|\n[rustsbi] Implementation     : RustSBI-QEMU Version 0.2.0-alpha.2\n[rustsbi] Platform Name      : riscv-virtio,qemu\n[rustsbi] Platform SMP       : 1\n[rustsbi] Platform Memory    : 0x80000000..0x88000000\n[rustsbi] Boot HART          : 0\n[rustsbi] Device Tree Region : 0x87e00000..0x87e010e6\n[rustsbi] Firmware Address   : 0x80000000\n[rustsbi] Supervisor Address : 0x80200000\n[rustsbi] pmp01: 0x00000000..0x80000000 (-wr)\n[rustsbi] pmp02: 0x80000000..0x80200000 (---)\n[rustsbi] pmp03: 0x80200000..0x88000000 (xwr)\n[rustsbi] pmp04: 0x88000000..0x00000000 (-wr)\n[kernel] Hello, world!\n[DEBUG] [kernel] .rodata [0x80202000, 0x80203000)\n[ INFO] [kernel] .data [0x80203000, 0x80204000)\n[ WARN] [kernel] boot_stack top=bottom=0x80214000, lower_bound=0x80204000\n[ERROR] [kernel] .bss [0x80214000, 0x80215000)\n")),(0,s.kt)("p",null,"\u9700\u8981\u5f3a\u5236\u7ed3\u675fQemu\uff0c\u53ef\u4ee5\u5148\u6309\u4e0b ",(0,s.kt)("inlineCode",{parentName:"p"},"Ctrl+A")," \uff0c\u518d\u6309\u4e0b ",(0,s.kt)("inlineCode",{parentName:"p"},"X")," \u6765\u9000\u51fa Qemu\u3002"))}c.isMDXComponent=!0}}]);