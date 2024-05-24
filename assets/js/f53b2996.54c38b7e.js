"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[4500],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},l=void 0,s={unversionedId:"rCore-Tutorial-Book\u5b66\u4e60/ch1",id:"rCore-Tutorial-Book\u5b66\u4e60/ch1",title:"ch1",description:"\u5148\u5b89\u88c5\u76ee\u6807\u5e73\u53f0",source:"@site/docs/rCore-Tutorial-Book\u5b66\u4e60/ch1.md",sourceDirName:"rCore-Tutorial-Book\u5b66\u4e60",slug:"/rCore-Tutorial-Book\u5b66\u4e60/ch1",permalink:"/note/rCore-Tutorial-Book\u5b66\u4e60/ch1",draft:!1,tags:[],version:"current",frontMatter:{}},i={},c=[{value:"\u79fb\u9664\u6807\u51c6\u5e93\u4f9d\u8d56",id:"\u79fb\u9664\u6807\u51c6\u5e93\u4f9d\u8d56",level:2},{value:"\u76f4\u63a5\u8fd0\u884c\u4f1a\u62a5\u9519",id:"\u76f4\u63a5\u8fd0\u884c\u4f1a\u62a5\u9519",level:3},{value:"\u79fb\u9664std\u548cmain",id:"\u79fb\u9664std\u548cmain",level:3},{value:"\u6784\u5efa\u7528\u6237\u6001\u6267\u884c\u73af\u5883\uff08user mode\uff09",id:"\u6784\u5efa\u7528\u6237\u6001\u6267\u884c\u73af\u5883user-mode",level:2},{value:"\u6dfb\u52a0_start\u51fd\u6570",id:"\u6dfb\u52a0_start\u51fd\u6570",level:3},{value:"\u8ba9\u7a0b\u5e8f\u6b63\u5e38\u9000\u51fa",id:"\u8ba9\u7a0b\u5e8f\u6b63\u5e38\u9000\u51fa",level:3},{value:"\u6784\u5efa\u88f8\u673a\u6267\u884c\u73af\u5883(system mode)",id:"\u6784\u5efa\u88f8\u673a\u6267\u884c\u73af\u5883system-mode",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5148\u5b89\u88c5\u76ee\u6807\u5e73\u53f0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rustup target add riscv64gc-unknown-none-elf\nrustup component add llvm-tools-preview\n")),(0,o.kt)("h2",{id:"\u79fb\u9664\u6807\u51c6\u5e93\u4f9d\u8d56"},"\u79fb\u9664\u6807\u51c6\u5e93\u4f9d\u8d56"),(0,o.kt)("h3",{id:"\u76f4\u63a5\u8fd0\u884c\u4f1a\u62a5\u9519"},"\u76f4\u63a5\u8fd0\u884c\u4f1a\u62a5\u9519"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ cargo run --target riscv64gc-unknown-none-elf\n   Compiling os v0.1.0 (/Users/mqy/Workspace/programming/programming_study/os_rcore/my_os/rv-kernel/os)\nerror[E0463]: can\'t find crate for `std`\n  |\n  = note: the `riscv64gc-unknown-none-elf` target may not be installed\n  = help: consider downloading the target with `rustup target add riscv64gc-unknown-none-elf`\n\nerror: cannot find macro `println` in this scope\n --\x3e src/main.rs:2:5\n  |\n2 |     println!("Hello, world!");\n  |     ^^^^^^^\n\nerror: requires `sized` lang_item\n\nFor more information about this error, try `rustc --explain E0463`.\nerror: could not compile `os` (bin "os") due to 3 previous errors\n\n')),(0,o.kt)("p",null,"\u62a5\u9519\u539f\u56e0\uff1a\u76ee\u6807\u5e73\u53f0\u4e0a\u6ca1\u6709Rust\u6807\u51c6\u5e93std, \u4e5f\u4e0d\u5b58\u5728\u4efb\u4f55OS\u652f\u6301\u7684\u7cfb\u7edf\u8c03\u7528\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u8fd9\u6837\u7684\u5e73\u53f0\u79f0\u4e4b\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u88f8\u673a\u5e73\u53f0\uff08bare-metal\uff09"),"\n\u597d\u5728\u662f\uff0cRust\u9664\u4e86std\u5e93\u4e4b\u5916\uff0c\u8fd8\u6709\u4e00\u4e2a\u4e0d\u9700\u8981\u4efb\u4f55OS\u652f\u6301\u7684\u6838\u5fc3\u5e93Core\uff0c \u5b83\u63d0\u4f9b\u4e86\u57fa\u672c\u7c7b\u578b\u3001\u6570\u636e\u7ed3\u6784\uff08\u5207\u7247\u7b49\uff09\u3001\u51fd\u6570\u3001\u5f02\u5e38\u5904\u7406\u3001unsafe\u4ee3\u7801\u652f\u6301\u3001\u88f8\u6307\u9488\u3001\u5185\u5b58\u7ba1\u7406\u3001\u539f\u5b50\u64cd\u4f5c\u3001\u6240\u6709\u6743\u3001\u751f\u547d\u5468\u671f\u7b49\uff0c\u4e3b\u8981\u7528\u4e8e\u7f16\u5199\u64cd\u4f5c\u7cfb\u7edf\u3001\u5d4c\u5165\u5f0f\u7cfb\u7edf\u548c\u5176\u4ed6\u4e0d\u4f9d\u8d56\u4e0e\u6807\u51c6\u5e93\u7684\u4f4e\u7ea7\u4ee3\u7801\u3002"),(0,o.kt)("h3",{id:"\u79fb\u9664std\u548cmain"},"\u79fb\u9664std\u548cmain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\n// \u79fb\u9664\u6807\u51c6\u5e93\uff0c\u5373\u544a\u8bc9Rust\u7f16\u8bd1\u5668\u4e0d\u5728\u4f7f\u7528\u6807\u51c6\u5e93\uff0c\u53ea\u4f7f\u7528\u6838\u5fc3\u5e93Core\n#![no_std]\n\n// \u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c\u7f16\u8bd1\u5668\u5c06\u4f1a\u67e5\u627estart lang_item\uff0c\u5b83\u5b9a\u4e49\u4e86\u7a0b\u5e8f\u7684\u5165\u53e3\u70b9(entry pointer)\n// start\u8bed\u4e49\u662f\u5728std\u5e93\u4e2d\u5b9a\u4e49\u7684\n// \u8fd9\u884c\u6807\u6ce8\u662f\u544a\u8bc9\u7f16\u8bd1\u5668\u4e0d\u518d\u4f7f\u7528\u6807\u51c6\u5e93\u7684start\u8bed\u4e49\n#![no_main]\n\nuse core::panic::PanicInfo;\n\n// \u8fd4\u56de\u503c\u4e3a!\u7684\u662f\u4e00\u4e2a\u53d1\u6563\u51fd\u6570\uff0c\u6ca1\u6709\u4efb\u4f55\u8fd4\u56de\u503c\uff0c\u51fd\u6570\u6c38\u8fdc\u4e0d\u4f1a\u5c06\u63a7\u5236\u5185\u5bb9\u8fd4\u56de\u7ed9\u8c03\u7528\u8005\n// \u8fd9\u4e2a\u7c7b\u578b\u65e0\u6cd5\u88ab\u5931\u4f8b\u5316\uff0c\u56e0\u4e3a\u6b64\u7c7b\u578b\u53ef\u80fd\u5177\u6709\u6240\u6709\u53ef\u80fd\u503c\u7684\u96c6\u5408\u7a7a\uff0c\u53ef\u4ee5\u88ab\u8f6c\u5316\u4e3a\u4efb\u4f55\u7c7b\u578b\n// \u5982\u6c38\u8fdc\u5faa\u73af\uff08\u5982 loop {}\uff09\u7684\u51fd\u6570\uff08\u5982\u7f51\u7edc\u670d\u52a1\u5668\uff09\u6216\u7ec8\u6b62\u8fdb\u7a0b\u7684\u51fd\u6570\uff08\u5982 exit()\uff09\u7684\u8fd4\u56de\u7c7b\u578b\u90fd\u662f\u53d1\u6563\u51fd\u6570\n// panic_handler\u5b9a\u4e00\u4e2apanic\u5904\u7406\u51fd\u6570\uff0c\u5f53\u53d1\u751fpanic\u65f6\u5c06\u4f1a\u8c03\u7528\u8be5\u65b9\u6cd5\n#[panic_handler]\nfn panic(_info: &PanicInfo) -> ! {\n    // \u76ee\u524d\u5148\u4e0d\u8fdb\u884c\u4efb\u4f55\u5904\u7406\n    loop {}\n}\n\n// \u79fb\u9664\u4e86\u6807\u51c6\u5e93\u7684start\u8bed\u4e49\uff0c\u5c31\u53ef\u4ee5\u5c06main\u51fd\u6570\u5220\u9664\n// fn main() {\n//     // println! \u5b8f\u662f\u6709std\u5e93\u63d0\u4f9b\u7684\uff0c\u5148\u6ce8\u91ca\u6389\n//     // println!("Hello, world!");\n// }\n\n')),(0,o.kt)("p",null,"\u8fd0\u884c\u4f1a\u62a5\u9519"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$  os git:(ch1) \u2717 cargo run\n   Compiling os v0.1.0 (/Users/mqy/Workspace/programming/programming_study/os_rcore/my_os/rv-kernel/os)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.13s\n     Running `target/riscv64gc-unknown-none-elf/debug/os`\ntarget/riscv64gc-unknown-none-elf/debug/os: target/riscv64gc-unknown-none-elf/debug/os: cannot execute binary file\n")),(0,o.kt)("p",null,"\u5206\u6790\u7f16\u8bd1\u540e\u7684\u7a0b\u5e8f"),(0,o.kt)("p",null,"\u67e5\u770b\u6587\u4ef6\u683c\u5f0f\uff0c\u8fd9\u662f\u4e00\u4e2a\u5408\u6cd5\u7684riscv64\u7684\u7a0b\u5e8f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ file target/riscv64gc-unknown-none-elf/debug/os\ntarget/riscv64gc-unknown-none-elf/debug/os: ELF 64-bit LSB executable, UCB RISC-V, RVC, double-float ABI, version 1 (SYSV), statically linked, with debug_info, not stripped\n")),(0,o.kt)("p",null,"\u67e5\u770b\u6587\u4ef6\u5934\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ rust-readobj -h target/riscv64gc-unknown-none-elf/debug/os\n\nFile: target/riscv64gc-unknown-none-elf/debug/os\nFormat: elf64-littleriscv\nArch: riscv64\nAddressSize: 64bit\nLoadName: <Not found>\nElfHeader {\n  Ident {\n    Magic: (7F 45 4C 46)\n    Class: 64-bit (0x2)\n    DataEncoding: LittleEndian (0x1)\n    FileVersion: 1\n    OS/ABI: SystemV (0x0)\n    ABIVersion: 0\n    Unused: (00 00 00 00 00 00 00)\n  }\n  Type: Executable (0x2)\n  Machine: EM_RISCV (0xF3)\n  Version: 1\n  Entry: 0x0\n  ProgramHeaderOffset: 0x40\n  SectionHeaderOffset: 0x1B18\n  Flags [ (0x5)\n    EF_RISCV_FLOAT_ABI_DOUBLE (0x4)\n    EF_RISCV_RVC (0x1)\n  ]\n  HeaderSize: 64\n  ProgramHeaderEntrySize: 56\n  ProgramHeaderCount: 4\n  SectionHeaderEntrySize: 64\n  SectionHeaderCount: 14\n  StringTableSectionIndex: 12\n}\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"Entry: 0x0"),", \u5373\u5165\u53e3\u5730\u5740\u4e3a0"),(0,o.kt)("p",null,"\u5bf9\u4e8c\u8fdb\u5236\u8fdb\u884c\u53cd\u6c47\u7f16"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ rust-objdump -S target/riscv64gc-unknown-none-elf/debug/os\n\ntarget/riscv64gc-unknown-none-elf/debug/os:     file format elf64-littleriscv\n")),(0,o.kt)("p",null,"\u7ed3\u679c\u4e3a\u7a7a\uff0c\u8bf4\u660e\u8fd9\u4e2a\u4e8c\u8fdb\u5236\u867d\u7136\u662f\u5408\u6cd5\u7684\uff0c\u4f46\u662f\u5176\u5b9e\u662f\u4e00\u4e2a\u7a7a\u7a0b\u5e8f\uff0c\u5176\u4e2d\u6ca1\u6709\u4efb\u4f55\u5185\u5bb9\uff0c\u539f\u56e0\u662f\u859b\u7ecd\u4e86\u7f16\u8bd1\u5668\u89c4\u5b9a\u7684\u5165\u53e3\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"_start")),(0,o.kt)("h2",{id:"\u6784\u5efa\u7528\u6237\u6001\u6267\u884c\u73af\u5883user-mode"},"\u6784\u5efa\u7528\u6237\u6001\u6267\u884c\u73af\u5883\uff08user mode\uff09"),(0,o.kt)("h3",{id:"\u6dfb\u52a0_start\u51fd\u6570"},"\u6dfb\u52a0_start\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'// no_mangle: \u7981\u7528\u540d\u79f0\u91cd\u6574\uff0c\u8fd9\u662f\u4e3a\u4e86\u786e\u4fddRust\u7f16\u8bd1\u5668\u8f93\u51fa\u7684\u662f_start\u51fd\u6570\uff0c\u5426\u5219\u5bf9\u51fd\u6570\u540d\u8fdb\u884c\u91cd\u547d\u540d\uff0c\n//    \u5982_ZN3blog_os4_start7hb173fedf945531caE, \u8fd9\u4f1a\u4f7f\u5f97\u94fe\u63a5\u5668\u65e0\u6cd5\u8fa8\u8ba4\n// \u7f16\u5199\u7a0b\u5e8f\u5165\u53e3\n#[no_mangle]\nextern "C" fn _start() {\n    loop {}\n}\n')),(0,o.kt)("p",null,"\u91cd\u65b0\u7f16\u8bd1\u5e76\u8fdb\u884c\u53cd\u6c47\u7f16"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cargo build\n   Compiling os v0.1.0 (/Users/mqy/Workspace/programming/programming_study/os_rcore/my_os/rv-kernel/os)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.13s\n    \n$ rust-objdump -S target/riscv64gc-unknown-none-elf/debug/os\n\ntarget/riscv64gc-unknown-none-elf/debug/os:     file format elf64-littleriscv\n\nDisassembly of section .text:\n\n0000000000011158 <_start>:\n;       loop {}\n   11158: 09 a0         j       0x1115a <_start+0x2>\n   1115a: 01 a0         j       0x1115a <_start+0x2>\n")),(0,o.kt)("p",null,"\u53cd\u6c47\u7f16\u51fa\u7684\u4e24\u6761\u6307\u4ee4\u5c31\u662f\u4e00\u4e2a\u6b7b\u5faa\u73af\uff0c\u8fd9\u5df2\u7ecf\u8bf4\u660e\u7f16\u8bd1\u5668\u751f\u6210\u7684\u7a0b\u5e8f\u5df2\u7ecf\u662f\u4e00\u4e2a\u5408\u6cd5\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"qemu-riscv64"),"\u6765\u6267\u884c\u8fd9\u4e2a\u7a0b\u5e8f\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ qemu-riscv64 target/riscv64gc-unknown-none-elf/debug/os\n")),(0,o.kt)("p",null,"\u7a0b\u5e8f\u4f1a\u62a5\u9519"),(0,o.kt)("h3",{id:"\u8ba9\u7a0b\u5e8f\u6b63\u5e38\u9000\u51fa"},"\u8ba9\u7a0b\u5e8f\u6b63\u5e38\u9000\u51fa"),(0,o.kt)("h2",{id:"\u6784\u5efa\u88f8\u673a\u6267\u884c\u73af\u5883system-mode"},"\u6784\u5efa\u88f8\u673a\u6267\u884c\u73af\u5883(system mode)"))}d.isMDXComponent=!0}}]);