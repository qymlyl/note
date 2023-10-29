"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[882],{3905:(e,l,n)=>{n.d(l,{Zo:()=>u,kt:()=>h});var t=n(7294);function i(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function r(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?r(Object(n),!0).forEach((function(l){i(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function o(e,l){if(null==e)return{};var n,t,i=function(e,l){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(i[n]=e[n]);return i}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),s=function(e){var l=t.useContext(c),n=l;return e&&(n="function"==typeof e?e(l):a(a({},l),e)),n},u=function(e){var l=s(e.components);return t.createElement(c.Provider,{value:l},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},m=t.forwardRef((function(e,l){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?t.createElement(h,a(a({ref:l},u),{},{components:n})):t.createElement(h,a({ref:l},u))}));function h(e,l){var n=arguments,i=l&&l.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var o={};for(var c in l)hasOwnProperty.call(l,c)&&(o[c]=l[c]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<r;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7322:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var t=n(7462),i=(n(7294),n(3905));const r={id:"ubuntu-install-riscv-gnu-toolchain",title:"ubuntu\u5b89\u88c5riscv-gnu-toolchain"},a=void 0,o={unversionedId:"risc-v/ubuntu-install-riscv-gnu-toolchain",id:"risc-v/ubuntu-install-riscv-gnu-toolchain",title:"ubuntu\u5b89\u88c5riscv-gnu-toolchain",description:"Docker\u6784\u5efariscv-gnu-toolchain\u73af\u5883",source:"@site/docs/risc-v/ubuntu-install-riscv-gnu-toolchain.md",sourceDirName:"risc-v",slug:"/risc-v/ubuntu-install-riscv-gnu-toolchain",permalink:"/note/risc-v/ubuntu-install-riscv-gnu-toolchain",draft:!1,tags:[],version:"current",frontMatter:{id:"ubuntu-install-riscv-gnu-toolchain",title:"ubuntu\u5b89\u88c5riscv-gnu-toolchain"},sidebar:"tutorialSidebar",previous:{title:"Hardhat\u4f7f\u7528\u6559\u7a0b",permalink:"/note/ethereum/hardhat-usage"}},c={},s=[{value:"Docker\u6784\u5efariscv-gnu-toolchain\u73af\u5883",id:"docker\u6784\u5efariscv-gnu-toolchain\u73af\u5883",level:2},{value:"\u62c9\u53d6\u955c\u50cf",id:"\u62c9\u53d6\u955c\u50cf",level:3},{value:"\u5176\u4ed6RISCV GCC\u7248\u672c",id:"\u5176\u4ed6riscv-gcc\u7248\u672c",level:3},{value:"elf-gcc",id:"elf-gcc",level:4},{value:"linux-glibc",id:"linux-glibc",level:4},{value:"\u521b\u5efa\u5bb9\u5668",id:"\u521b\u5efa\u5bb9\u5668",level:3},{value:"\u8fdb\u5165\u5bb9\u5668",id:"\u8fdb\u5165\u5bb9\u5668",level:3},{value:"\u67e5\u770b\u7248\u672c\u4fe1\u606f",id:"\u67e5\u770b\u7248\u672c\u4fe1\u606f",level:3},{value:"\u7f16\u8bd1\u8fd0\u884cC\u7a0b\u5e8f(hello_world.c)",id:"\u7f16\u8bd1\u8fd0\u884cc\u7a0b\u5e8fhello_worldc",level:3},{value:"\u4e8c\u8fdb\u5236\u7a0b\u5e8f\u548c\u6e90\u7801\u76ee\u5f55",id:"\u4e8c\u8fdb\u5236\u7a0b\u5e8f\u548c\u6e90\u7801\u76ee\u5f55",level:3},{value:"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5riscv-gnu-toolchain",id:"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5riscv-gnu-toolchain",level:2},{value:"\u6807\u51c6\u5e93\u5b89\u88c5\uff08\u524d\u7f6e\u73af\u5883\uff09",id:"\u6807\u51c6\u5e93\u5b89\u88c5\u524d\u7f6e\u73af\u5883",level:3},{value:"\u4e0b\u8f7driscv-gnu-toolchain",id:"\u4e0b\u8f7driscv-gnu-toolchain",level:3},{value:"GitHub\uff08\u4e0d\u63a8\u8350\uff09",id:"github\u4e0d\u63a8\u8350",level:4},{value:"\u4e2d\u79d1\u9662\uff08\u63a8\u8350\uff09",id:"\u4e2d\u79d1\u9662\u63a8\u8350",level:4},{value:"\u7f16\u8bd1GCC\u548cQEMU",id:"\u7f16\u8bd1gcc\u548cqemu",level:3},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",level:3},{value:"\u67e5\u770b\u7248\u672c\u4fe1\u606f",id:"\u67e5\u770b\u7248\u672c\u4fe1\u606f-1",level:3},{value:"\u7f16\u8bd1\u8fd0\u884cC\u7a0b\u5e8f(hello_world.c)",id:"\u7f16\u8bd1\u8fd0\u884cc\u7a0b\u5e8fhello_worldc-1",level:3},{value:"\u81ea\u52a8\u5316\u811a\u672c\u8bd1\u5b89\u88c5riscv-gnu-toolchain",id:"\u81ea\u52a8\u5316\u811a\u672c\u8bd1\u5b89\u88c5riscv-gnu-toolchain",level:2},{value:"\u7f16\u5199\u811a\u672c",id:"\u7f16\u5199\u811a\u672c",level:3},{value:"\u8fd0\u884c\u811a\u672c",id:"\u8fd0\u884c\u811a\u672c",level:3}],u={toc:s},p="wrapper";function d(e){let{components:l,...n}=e;return(0,i.kt)(p,(0,t.Z)({},u,n,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"docker\u6784\u5efariscv-gnu-toolchain\u73af\u5883"},"Docker\u6784\u5efariscv-gnu-toolchain\u73af\u5883"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"mqylyl/riscv-gnu-toolchain"),"\u955c\u50cf\u662f\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"ubuntu:22.04"),"\u955c\u50cf\u8fdb\u884c\u6784\u5efa\uff0c\u652f\u6301riscv32\u548criscv64\uff0c\u4f7f\u7528\u7684\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"qemu"),"\u6a21\u62df\u5668"),(0,i.kt)("p",{parentName:"admonition"},"riscv-gnu-toolchain\u5b98\u65b9Github\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/riscv-collab/riscv-gnu-toolchain"},"https://github.com/riscv-collab/riscv-gnu-toolchain"))),(0,i.kt)("h3",{id:"\u62c9\u53d6\u955c\u50cf"},"\u62c9\u53d6\u955c\u50cf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fd9\u91cc\u62c9\u53d6\u7684\u662felf-gcc\u7684\u7248\u672c\uff0c\u5927\u5c0f:2G\uff0c\u5176\u4ed6\u7248\u672c\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a\u5176\u4ed6\u7248\u672c\ndocker pull mqylyl/riscv-gnu-toolchain:riscv6432_elf_gcc_qemu_20231018_nightly_ubuntu2204_arm64_squashed\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"tag\u89e3\u91ca:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"riscv6432: \u8868\u793a\u652f\u6301riscv64\u548criscv32"),(0,i.kt)("li",{parentName:"ul"},"elf_gcc\uff1a\u5185\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"riscv64-unknown-elf-gcc"),"\u7b49\u4ea4\u53c9\u7f16\u8bd1\u7f16\u8bd1\u5668\u5de5\u5177"),(0,i.kt)("li",{parentName:"ul"},"qemu\uff1a\u4f7f\u7528\u7684\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"qemu"),"\u6a21\u62df\u5668"),(0,i.kt)("li",{parentName:"ul"},"20231018_nightly\uff1a\u5bf9\u5e94\u5b98\u65b9release\u4e3a2023.10.18-nightly"),(0,i.kt)("li",{parentName:"ul"},"ubuntu2204_arm64\uff1ariscv-gnu-toolchain\u955c\u50cf\u662f\u57fa\u4e8earm64\u7684ubuntu:22.04\u8fdb\u884c\u6784\u5efa"),(0,i.kt)("li",{parentName:"ul"},"squashed\uff1a\u955c\u50cf\u4e2d\u65e0\u6e90\u7801\uff0c\u53ea\u6709\u4ea4\u53c9\u7f16\u8bd1\u4e8c\u8fdb\u5236\u5de5\u5177\uff08\u6ca1\u6709squashed\u540e\u7f00\u7684\u662f\u5e26\u6709riscv-gnu-toolchain\u5b8c\u6574\u6e90\u7801\u7684\uff09")),(0,i.kt)("h3",{id:"\u5176\u4ed6riscv-gcc\u7248\u672c"},"\u5176\u4ed6RISCV GCC\u7248\u672c"),(0,i.kt)("h4",{id:"elf-gcc"},"elf-gcc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# arm64\u975esquashed\u7248\u672c\u5e26\u6709\u6e90\u7801\uff0c\u5927\u5c0f:22G (\u72b6\u6001\uff1a\u6682\u672a\u4e0a\u4f20\uff0c\u592a\u5927\u4e86)\ndocker pull mqylyl/riscv-gnu-toolchain:riscv6432_elf_gcc_qemu_20231018_nightly_ubuntu2204_arm64\n\n# amd64 squashed\u7248\u672c\u955c\u50cf\u4e2d\u65e0\u6e90\u7801\uff0c\u5927\u5c0f:2G\ndocker pull mqylyl/riscv-gnu-toolchain:riscv6432_elf_gcc_qemu_20231018_nightly_ubuntu2204_amd64_squashed\n\n# amd64\u975esquashed\u7248\u672c\u5e26\u6709\u6e90\u7801\uff0c\u5927\u5c0f:22G (\u72b6\u6001\uff1a\u6682\u672a\u4e0a\u4f20)\ndocker pull mqylyl/riscv-gnu-toolchain:riscv6432_elf_gcc_qemu_20231018_nightly_ubuntu2204_amd64\n")),(0,i.kt)("h4",{id:"linux-glibc"},"linux-glibc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# arm64 squashed\u7248\u672c\u955c\u50cf\u4e2d\u65e0\u6e90\u7801\uff0c\u5927\u5c0f:2G (\u72b6\u6001\uff1a\u6682\u672a\u6784\u5efa)\ndocker pull mqylyl/riscv-gnu-toolchain:riscv6432_glibc_gcc_qemu_20231018_nightly_ubuntu2204_arm64_squashed\n\n# arm64\u975esquashed\u7248\u672c\u5e26\u6709\u6e90\u7801\uff0c\u5927\u5c0f:22G (\u72b6\u6001\uff1a\u6682\u672a\u6784\u5efa)\ndocker pull mqylyl/riscv-gnu-toolchain:riscv6432_glibc_gcc_qemu_20231018_nightly_ubuntu2204_arm64\n\n# amd64 squashed\u7248\u672c\u955c\u50cf\u4e2d\u65e0\u6e90\u7801\uff0c\u5927\u5c0f:2G (\u72b6\u6001\uff1a\u6682\u672a\u6784\u5efa)\ndocker pull mqylyl/riscv-gnu-toolchain:riscv6432_glibc_gcc_qemu_20231018_nightly_ubuntu2204_amd64_squashed\n\n# amd64\u975esquashed\u7248\u672c\u5e26\u6709\u6e90\u7801\uff0c\u5927\u5c0f:22G (\u72b6\u6001\uff1a\u6682\u672a\u6784\u5efa)\ndocker pull mqylyl/riscv-gnu-toolchain:riscv6432_glibc_gcc_qemu_20231018_nightly_ubuntu2204_amd64\n")),(0,i.kt)("h3",{id:"\u521b\u5efa\u5bb9\u5668"},"\u521b\u5efa\u5bb9\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# riscv toolchain\u662f\u57fa\u4e8eubuntu 22.04\u955c\u50cf\u8fdb\u884c\u6784\u5efa\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u4e00\u4e2a\u7aef\u53e3\u4e0e22\u7aef\u53e3\u8fdb\u884c\u6620\u5c04\u4fbf\u4e8e\u4f7f\u7528ssh\u94fe\u63a5\ndocker run --name riscv64_elf_gcc \\\n-p 10022:22 \\\n-itd  mqylyl/riscv-gnu-toolchain:riscv6432_elf_gcc_qemu_20231018_nightly_ubuntu2204_arm64_squashed\n")),(0,i.kt)("h3",{id:"\u8fdb\u5165\u5bb9\u5668"},"\u8fdb\u5165\u5bb9\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it riscv64_elf_gcc /bin/bash\n")),(0,i.kt)("h3",{id:"\u67e5\u770b\u7248\u672c\u4fe1\u606f"},"\u67e5\u770b\u7248\u672c\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ riscv64-unknown-elf-gcc -v\nUsing built-in specs.\nCOLLECT_GCC=riscv64-unknown-elf-gcc\nCOLLECT_LTO_WRAPPER=/opt/riscv/libexec/gcc/riscv64-unknown-elf/13.2.0/lto-wrapper\nTarget: riscv64-unknown-elf\nConfigured with: /opt/source/riscv-gnu-toolchain/gcc/configure --target=riscv64-unknown-elf --prefix=/opt/riscv --disable-shared --disable-threads --enable-languages=c,c++ --with-pkgversion=gc891d8dc23e --with-system-zlib --enable-tls --with-newlib --with-sysroot=/opt/riscv/riscv64-unknown-elf --with-native-system-header-dir=/include --disable-libmudflap --disable-libssp --disable-libquadmath --disable-libgomp --disable-nls --disable-tm-clone-registry --src=.././gcc --enable-multilib --with-abi=lp64d --with-arch=rv64imafdc --with-tune=rocket --with-isa-spec=20191213 'CFLAGS_FOR_TARGET=-Os    -mcmodel=medlow' 'CXXFLAGS_FOR_TARGET=-Os    -mcmodel=medlow'\nThread model: single\nSupported LTO compression algorithms: zlib\ngcc version 13.2.0 (gc891d8dc23e) \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ qemu-system-riscv64 -version\nQEMU emulator version 8.1.1 (v8.1.1)\nCopyright (c) 2003-2023 Fabrice Bellard and the QEMU Project developers\n")),(0,i.kt)("h3",{id:"\u7f16\u8bd1\u8fd0\u884cc\u7a0b\u5e8fhello_worldc"},"\u7f16\u8bd1\u8fd0\u884cC\u7a0b\u5e8f(hello_world.c)"),(0,i.kt)("p",null,"\u7f16\u5199hello_world.c\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"echo '#include <stdio.h>' > hello_world.c && \\\necho 'int main() {' >> hello_world.c && \\\necho '    printf(\"Hello, world!\\n\");' >> hello_world.c && \\\necho '    return 0;' >> hello_world.c && \\\necho '}' >> hello_world.c\n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u8fd0\u884criscv64"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u7f16\u8bd1\n$ riscv64-unknown-elf-gcc -march=rv64imafdc -mabi=lp64 -o hello_world_64 hello_world.c\n\n# \u67e5\u770b\u4e8c\u8fdb\u5236\u6587\u4ef6\u683c\u5f0f\uff0c64-bit\n$ file hello_world_64 \nhello_world_64: ELF 64-bit LSB executable, UCB RISC-V, RVC, soft-float ABI, version 1 (SYSV), statically linked, with debug_info, not stripped\n\n# \u4f7f\u7528qemu\u8fd0\u884c\u7a0b\u5e8f\n# qemu-riscv64\uff1auser mode\u8fd0\u884c\n# -L: \u7528\u4e8e\u52a0\u8f7d\u6a21\u62df\u5668\u7684\u4f53\u7cfb\u7ed3\u6784\u652f\u6301\u6587\u4ef6\u7684\u76ee\u5f55\uff08risc-v\u7684\u4e00\u4e9b\u5e93\u90fd\u5728$RISCV/sysroot\u76ee\u5f55\u4e0b\uff09\n# qemu-riscv64 -L $RISCV/sysroot ./hello_world_64\n$ qemu-riscv64 ./hello_world_64\nhello world!\n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u8fd0\u884criscv32"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u7f16\u8bd1\n$ riscv64-unknown-elf-gcc -march=rv32imafdc -mabi=ilp32 -o hello_world_32 hello_world.c\n\n# \u67e5\u770b\u4e8c\u8fdb\u5236\u6587\u4ef6\u683c\u5f0f\uff0c32-bit\n$ file hello_world_32\nhello_world_32: ELF 32-bit LSB executable, UCB RISC-V, RVC, soft-float ABI, version 1 (SYSV), statically linked, with debug_info, not strippe\n\n# \u8fd0\u884c\n$ qemu-riscv32 ./hello_world_32\nhello world!\n")),(0,i.kt)("h3",{id:"\u4e8c\u8fdb\u5236\u7a0b\u5e8f\u548c\u6e90\u7801\u76ee\u5f55"},"\u4e8c\u8fdb\u5236\u7a0b\u5e8f\u548c\u6e90\u7801\u76ee\u5f55"),(0,i.kt)("p",null,"\u4e8c\u8fdb\u5236\u7a0b\u5e8f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/riscv")),(0,i.kt)("p",null,"\u6e90\u7801\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/source")),(0,i.kt)("h2",{id:"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5riscv-gnu-toolchain"},"\u624b\u52a8\u7f16\u8bd1\u5b89\u88c5riscv-gnu-toolchain"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u6784\u5efa\u652f\u630132\u4f4d\u548c64\u4f4d\u7684riscv elf-gcc\u4ea4\u53c9\u7f16\u8bd1\u5668"),(0,i.kt)("p",{parentName:"admonition"},"\u5b98\u65b9Github\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/riscv-collab/riscv-gnu-toolchain"},"https://github.com/riscv-collab/riscv-gnu-toolchain")),(0,i.kt)("p",{parentName:"admonition"},"\u4e2d\u79d1\u9662RISC-V\u5de5\u5177\u94fe\u955c\u50cf\u4f7f\u7528\u5e2e\u52a9\u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://help.mirrors.cernet.edu.cn/riscv-toolchains/"},"https://help.mirrors.cernet.edu.cn/riscv-toolchains/"))),(0,i.kt)("h3",{id:"\u6807\u51c6\u5e93\u5b89\u88c5\u524d\u7f6e\u73af\u5883"},"\u6807\u51c6\u5e93\u5b89\u88c5\uff08\u524d\u7f6e\u73af\u5883\uff09"),(0,i.kt)("p",null,"\u5b89\u88c5\u6784\u5efa\u5de5\u5177\u94fe\u6240\u9700\u8981\u7684\u6807\u51c6\u5305"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update && \\\nsudo apt-get upgrade -y && \\\nsudo apt-get install -y autoconf automake autotools-dev curl python3 python3-pip libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev ninja-build git cmake libglib2.0-dev libpixman-1-0 libpixman-1-dev\n")),(0,i.kt)("h3",{id:"\u4e0b\u8f7driscv-gnu-toolchain"},"\u4e0b\u8f7driscv-gnu-toolchain"),(0,i.kt)("h4",{id:"github\u4e0d\u63a8\u8350"},"GitHub\uff08\u4e0d\u63a8\u8350\uff09"),(0,i.kt)("p",null,"clone Github\u4e0a\u7684\u6e90\u7801\uff0c\u66f4\u65b0\u5b50\u4ed3\u5e93\u8fd9\u4e2a\u8fc7\u7a0b\u5341\u5206\u7684\u6f2b\u957f\u53ef\u80fd\u9700\u8981\u5f88\u4e45\u5f88\u4e45\u5f88\u4e45\uff0c\u7b49\u5f85\u4e86\u51e0\u4e2a\u5c0f\u65f6\u6700\u540e\u53ef\u80fd\u56e0\u4e3a\u7f51\u7edc\u7684\u95ee\u9898\u53c8\u5931\u8d25\u4e86\uff0c\u5efa\u8bae\u4f7f\u7528\u4e2d\u79d1\u9662\u7684\u955c\u50cf\u6e90"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# clone \u6e90\u4ee3\u7801\uff0c\u62c9\u53d6\u4ed3\u5e93\ngit clone https://github.com/riscv/riscv-gnu-toolchain\n\n# \u66f4\u65b0\u5b50\u4ed3\u5e93\ncd riscv-gnu-toolchain\ngit submodule update --init --recursive\n")),(0,i.kt)("h4",{id:"\u4e2d\u79d1\u9662\u63a8\u8350"},"\u4e2d\u79d1\u9662\uff08\u63a8\u8350\uff09"),(0,i.kt)("p",null,"\u4e2d\u79d1\u9662\u8f6f\u4ef6\u6240\u63d0\u4f9b\u4e86\u4e00\u4efdRISC-V\u5de5\u5177\u94fe\u955c\u50cf",(0,i.kt)("a",{parentName:"p",href:"https://help.mirrors.cernet.edu.cn/riscv-toolchains"},"riscv-gnu-toolchain"),"\u5e76\u5b9e\u65f6\u540c\u6b65submodule\u7684\u66f4\u65b0\uff0c\u5728\u7ec8\u7aef\u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u540c\u65f6\u514b\u9686\u5b50\u6a21\u5757\ncurl https://mirror.iscas.ac.cn/riscv-toolchains/git/riscv-collab/riscv-gnu-toolchain.sh | bash\n")),(0,i.kt)("h3",{id:"\u7f16\u8bd1gcc\u548cqemu"},"\u7f16\u8bd1GCC\u548cQEMU"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd riscv-gnu-toolchain\n\n# \u8bbe\u7f6e\u7f16\u8bd1\u53c2\u6570\n# --enable-multilib\uff1a\u6784\u5efa\u652f\u630132\u4f4d\u548c64\u4f4d\u7684\u4ea4\u53c9\u7f16\u8bd1\u5668\n# \u652f\u6301\u7684\u67b6\u6784\u4e3a rv32i \u6216 rv64i \u4ee5\u53ca MAFD \u7684\u6807\u51c6\u6269\u5c55 (a)tomics\u3001(m) \u4e58\u6cd5\u548c\u9664\u6cd5\u3001(f)loat\u3001(d)ouble \u6216 (g)general\u3002\n# \u652f\u6301\u7684 ABI \u5305\u62ec ilp32\uff0832 \u4f4d\u8f6f\u6d6e\u70b9\uff09\u3001ilp32d\uff0832 \u4f4d\u786c\u6d6e\u70b9\uff09\u3001ilp32f\uff08\u5bc4\u5b58\u5668\u4e2d\u4e3a\u5355\u7cbe\u5ea6\u3001\u5185\u5b58\u4e2d\u4e3a\u53cc\u7cbe\u5ea6\u7684 32 \u4f4d\uff0c\u4ec5\u9650\u5229\u57fa\u4f7f\u7528\uff09\u3001lp64 lp64f lp64d\uff08\u76f8\u540c\uff0c\u4f46\u5177\u6709 64 \u4f4d\u957f\u548c\u6307\u9488\uff09\u3002\n./configure --prefix=/opt/riscv --enable-multilib\n\n# \u7f16\u8bd1gcc\nsudo make -j$(nproc)\n\n# \u7f16\u8bd1qemu\nsudo make -j$(nproc) build-sim SIM=qemu QEMU_TARGETS=riscv64-linux-user,riscv32-linux-user,riscv64-softmmu,riscv32-softmmu\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"-j: \u662fmake\u547d\u4ee4\u7684\u9009\u9879\uff0c\u7528\u4e8e\u6307\u5b9a\u5e76\u884c\u6784\u5efa\u7684\u7ebf\u7a0b\u6570\u3002 -j \u540e\u9762\u8ddf\u7740\u7684\u6570\u5b57\u8868\u793a\u540c\u65f6\u8fd0\u884c\u591a\u5c11\u4e2a\u6784\u5efa\u4efb\u52a1\uff0c\u5982\uff1a-j4 \u610f\u5473\u7740\u8981\u4f7f\u75284\u4e2a\u7ebf\u7a0b\u5e76\u884c\u6784\u5efa\u9879\u76ee"),(0,i.kt)("li",{parentName:"ul"},"$(nproc): \u83b7\u53d6\u5f53\u524d\u7cfb\u7edf\u4e0a\u53ef\u7528\u7684 CPU \u6838\u5fc3\u6570"),(0,i.kt)("li",{parentName:"ul"},"build-sim: \u6784\u5efa\u6a21\u62df\u5668"),(0,i.kt)("li",{parentName:"ul"},"SIM=qemu: \u4f7f\u7528qemu\u6a21\u62df\u5668"),(0,i.kt)("li",{parentName:"ul"},"riscv64-softmmu\uff1a\u8868\u793a\u8981\u7f16\u8bd1",(0,i.kt)("inlineCode",{parentName:"li"},"system mode"),"\u7684QEMU\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"riscv64-softmmu"),"\u5bf9\u5e94",(0,i.kt)("inlineCode",{parentName:"li"},"qemu-system-riscv64"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"riscv32-softmmu"),"\u5bf9\u5e94",(0,i.kt)("inlineCode",{parentName:"li"},"qemu-system-riscv32")),(0,i.kt)("li",{parentName:"ul"},"riscv64-linux-user\uff1a\u8868\u793a\u8981\u7f16\u8bd1",(0,i.kt)("inlineCode",{parentName:"li"},"user mode"),"\u7684QEMU\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"riscv64-linux-user"),"\u5bf9\u5e94",(0,i.kt)("inlineCode",{parentName:"li"},"qemu-riscv64"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"riscv32-linux-user"),"\u5bf9\u5e94",(0,i.kt)("inlineCode",{parentName:"li"},"qemu-riscv32")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ELF/Newlib\u5de5\u5177\u94fe"),"\uff1a\u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684C\u5e93\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u9002\u7528\u4e8e\u5d4c\u5165\u5f0f\u7cfb\u7edf\u548c\u88f8\u673a\u7f16\u7a0b\u73af\u5883"),"\u3002\u5b83\u63d0\u4f9b\u4e86C\u6807\u51c6\u5e93\u51fd\u6570\u7684\u5b9e\u73b0\uff0c\u9002\u5408\u7528\u4e8e\u6ca1\u6709\u6807\u51c6\u64cd\u4f5c\u7cfb\u7edf\u7684\u7cfb\u7edf",(0,i.kt)("strong",{parentName:"li"},"\u5177\u6709\u524d\u7f00",(0,i.kt)("inlineCode",{parentName:"strong"},"riscv64-unknown-elf-")),"\u3002",(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"strong"},"make"),"\u8fdb\u884c\u7f16\u8bd1"),"\uff0c\u652f\u630132\u4f4d\u300164\u4f4d\u591a\u67b6\u6784\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"./config"),"\u9700\u8981\u52a0\u4e0a",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-multilib"),"\u53c2\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linux-ELF/glibc\u5de5\u5177\u94fe"),"\uff1a\u4e3a\u652f\u6301\u8fd0\u884c\u5728Linux\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f\u800c\u8bbe\u8ba1\u7684\u5de5\u5177\u94fe\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u9002\u5408\u4e8e\u6784\u5efa\u5728Linux\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f"),"\uff0c\u5305\u62ec\u670d\u52a1\u5668\u5e94\u7528\u3001\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u3001\u9a71\u52a8\u7a0b\u5e8f\u5f00\u53d1\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u5177\u6709\u524d\u7f00",(0,i.kt)("inlineCode",{parentName:"strong"},"riscv64-unknown-linux-gnu-")),"\u3002",(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"strong"},"make linux")," \u8fdb\u884c\u7f16\u8bd1"),"\uff0c\u652f\u630132\u4f4d\u300164\u4f4d\u591a\u67b6\u6784\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"./config"),"\u9700\u8981\u52a0\u4e0a",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-multilib"),"\u53c2\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linux musl\u5de5\u5177\u94fe"),"\uff1aLinux\u4e0b\u7684musl\u662f\u4e00\u79cdC\u6807\u51c6\u5e93\uff08C library\uff09\u7684\u66ff\u4ee3\u54c1\uff0c\u5b83\u63d0\u4f9b\u4e86\u7528\u4e8eC\u548cC++\u7a0b\u5e8f\u7684\u6807\u51c6\u51fd\u6570\u548c\u6570\u636e\u7ed3\u6784\u3002\u4e0e\u5e38\u89c1\u7684GNU C\u5e93\uff08glibc\uff09\u4e0d\u540c\uff0cmusl\u65e8\u5728\u63d0\u4f9b\u66f4\u8f7b\u91cf\u7ea7\u3001\u53ef\u5d4c\u5165\u548c\u9ad8\u6027\u80fd\u7684C\u5e93\uff0c\u7279\u522b",(0,i.kt)("strong",{parentName:"li"},"\u9002\u7528\u4e8e\u5d4c\u5165\u5f0f\u7cfb\u7edf\u3001\u5c0f\u578b\u8bbe\u5907\u548c\u9ad8\u6548\u7684\u5e94\u7528\u7a0b\u5e8f"),"\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u5177\u6709\u524d\u7f00",(0,i.kt)("inlineCode",{parentName:"strong"},"riscv64-unknown-linux-musl-")),"\u3002",(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"strong"},"make musl"),"\u8fdb\u884c\u7f16\u8bd1"),"\uff0c\u7531\u4e8e\u4e0a\u6e38 musl \u67b6\u6784\u652f\u6301\u7684\u9650\u5236\uff0cmusl \u7f16\u8bd1\u5668 (riscv64-unknown-linux-musl-) ",(0,i.kt)("strong",{parentName:"li"},"\u53ea\u80fd\u652f\u6301 64 \u4f4d\u7cfb\u7edf"),"\uff0c\u5373",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-multilib"),"\u53c2\u6570\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709\u8d77\u4f5c\u7528\u3002")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u8bf4\u660e\u8be6\u89c1\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/riscv-collab/riscv-gnu-toolchain"},"https://github.com/riscv-collab/riscv-gnu-toolchain"))),(0,i.kt)("h3",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"echo 'export RISCV=/opt/riscv' >> /etc/profile && \\\necho 'export PATH=$RISCV/bin:$PATH' >> /etc/profile && \\\nsource /etc/profile\n")),(0,i.kt)("p",null,"ubuntu\u8981\u5199\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u4e2d\uff0c\u8981\u4e0d\u7136\u6bcf\u6b21shell\u9000\u51fa\uff0c\u5c31\u8981\u91cd\u65b0",(0,i.kt)("inlineCode",{parentName:"p"},"source /etc/profile")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8ffd\u52a0\u5185\u5bb9\necho 'export RISCV=/opt/riscv' >> ~/.bashrc && \\\necho 'export PATH=$RISCV/bin:$PATH' >> ~/.bashrc && \\\nsource ~/.bashrc\n")),(0,i.kt)("h3",{id:"\u67e5\u770b\u7248\u672c\u4fe1\u606f-1"},"\u67e5\u770b\u7248\u672c\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ riscv64-unknown-elf-gcc -v\nUsing built-in specs.\nCOLLECT_GCC=riscv64-unknown-elf-gcc\nCOLLECT_LTO_WRAPPER=/opt/riscv/libexec/gcc/riscv64-unknown-elf/13.2.0/lto-wrapper\nTarget: riscv64-unknown-elf\nConfigured with: /opt/source/riscv-gnu-toolchain/gcc/configure --target=riscv64-unknown-elf --prefix=/opt/riscv --disable-shared --disable-threads --enable-languages=c,c++ --with-pkgversion=gc891d8dc23e --with-system-zlib --enable-tls --with-newlib --with-sysroot=/opt/riscv/riscv64-unknown-elf --with-native-system-header-dir=/include --disable-libmudflap --disable-libssp --disable-libquadmath --disable-libgomp --disable-nls --disable-tm-clone-registry --src=.././gcc --enable-multilib --with-abi=lp64d --with-arch=rv64imafdc --with-tune=rocket --with-isa-spec=20191213 'CFLAGS_FOR_TARGET=-Os    -mcmodel=medlow' 'CXXFLAGS_FOR_TARGET=-Os    -mcmodel=medlow'\nThread model: single\nSupported LTO compression algorithms: zlib\ngcc version 13.2.0 (gc891d8dc23e) \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ qemu-system-riscv64 -version\nQEMU emulator version 8.1.1 (v8.1.1)\nCopyright (c) 2003-2023 Fabrice Bellard and the QEMU Project developers\n")),(0,i.kt)("h3",{id:"\u7f16\u8bd1\u8fd0\u884cc\u7a0b\u5e8fhello_worldc-1"},"\u7f16\u8bd1\u8fd0\u884cC\u7a0b\u5e8f(hello_world.c)"),(0,i.kt)("p",null,"\u7f16\u5199hello_world.c\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"echo '#include <stdio.h>' > hello_world.c && \\\necho 'int main() {' >> hello_world.c && \\\necho '    printf(\"Hello, world!\\n\");' >> hello_world.c && \\\necho '    return 0;' >> hello_world.c && \\\necho '}' >> hello_world.c\n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u8fd0\u884criscv64"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u7f16\u8bd1\n$ riscv64-unknown-elf-gcc -march=rv64imafdc -mabi=lp64 -o hello_world_64 hello_world.c\n\n# \u67e5\u770b\u4e8c\u8fdb\u5236\u6587\u4ef6\u683c\u5f0f\uff0c64-bit\n$ file hello_world_64 \nhello_world_64: ELF 64-bit LSB executable, UCB RISC-V, RVC, soft-float ABI, version 1 (SYSV), statically linked, with debug_info, not stripped\n\n# \u4f7f\u7528qemu\u8fd0\u884c\u7a0b\u5e8f\n# qemu-riscv64\uff1auser mode\u8fd0\u884c\n# -L: \u7528\u4e8e\u52a0\u8f7d\u6a21\u62df\u5668\u7684\u4f53\u7cfb\u7ed3\u6784\u652f\u6301\u6587\u4ef6\u7684\u76ee\u5f55\uff08risc-v\u7684\u4e00\u4e9b\u5e93\u90fd\u5728$RISCV/sysroot\u76ee\u5f55\u4e0b\uff09\n# qemu-riscv64 -L $RISCV/sysroot ./hello_world_64\n$ qemu-riscv64 ./hello_world_64\nhello world!\n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u8fd0\u884criscv32"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u7f16\u8bd1\n$ riscv64-unknown-elf-gcc -march=rv32imafdc -mabi=ilp32 -o hello_world_32 hello_world.c\n\n# \u67e5\u770b\u4e8c\u8fdb\u5236\u6587\u4ef6\u683c\u5f0f\uff0c32-bit\n$ file hello_world_32\nhello_world_32: ELF 32-bit LSB executable, UCB RISC-V, RVC, soft-float ABI, version 1 (SYSV), statically linked, with debug_info, not strippe\n\n# \u8fd0\u884c\n$ qemu-riscv32 ./hello_world_32\nhello world!\n")),(0,i.kt)("h2",{id:"\u81ea\u52a8\u5316\u811a\u672c\u8bd1\u5b89\u88c5riscv-gnu-toolchain"},"\u81ea\u52a8\u5316\u811a\u672c\u8bd1\u5b89\u88c5riscv-gnu-toolchain"),(0,i.kt)("h3",{id:"\u7f16\u5199\u811a\u672c"},"\u7f16\u5199\u811a\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vim install_riscv-gun-toolchain_elf_gcc.sh\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6807\u51c6\u5e93\u4f9d\u8d56\nsudo apt-get update && \\\nsudo apt-get upgrade -y && \\\nsudo apt-get install -y autoconf automake autotools-dev curl python3 python3-pip libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev ninja-build git cmake libglib2.0-dev\n\n# clone riscv-gun-toolchain\ncurl https://mirror.iscas.ac.cn/riscv-toolchains/git/riscv-collab/riscv-gnu-toolchain.sh | bash\n\n# \u7f16\u8bd1gcc\u548cqemu\n# --enable-multilib\uff1a\u6784\u5efa\u652f\u630132\u4f4d\u548c64\u4f4d\u7684\u4ea4\u53c9\u7f16\u8bd1\u5668\ncd riscv-gnu-toolchain && \\\n./configure --prefix=/opt/riscv --enable-multilib && \\\nmake -j$(nproc) && \\\nmake -j$(nproc) build-sim SIM=qemu QEMU_TARGETS=riscv64-linux-user,riscv32-linux-user,riscv64-softmmu,riscv32-softmmu\n      \n# \u914d\u7f6e\u73af\u5883\u53d8\u91cf\necho 'export RISCV=/opt/riscv' >> /etc/profile && \\\necho 'export PATH=$RISCV/bin:$PATH' >> /etc/profile && \\\nsource /etc/profile && \\\necho 'export RISCV=/opt/riscv' >> ~/.bashrc && \\\necho 'export PATH=$RISCV/bin:$PATH' >> ~/.bashrc && \\\nsource ~/.bashrc\n")),(0,i.kt)("h3",{id:"\u8fd0\u884c\u811a\u672c"},"\u8fd0\u884c\u811a\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"chmod +x install_riscv-gun-toolchain_elf_gcc.sh\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8981\u4f7f\u7528sudo\u6743\u9650\nnohup sudo ./install_riscv-gun-toolchain_elf_gcc.sh &\n")))}d.isMDXComponent=!0}}]);