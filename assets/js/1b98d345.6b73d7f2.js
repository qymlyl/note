"use strict";(self.webpackChunkstudy_note=self.webpackChunkstudy_note||[]).push([[867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},o=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?l.createElement(k,u(u({ref:t},o),{},{components:n})):l.createElement(k,u({ref:t},o))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<r;s++)u[s]=n[s];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));const r={id:"ubuntu2204-install-tidb",title:"Ubuntu22.04\u5b89\u88c5tidb\u96c6\u7fa4"},u=void 0,i={unversionedId:"tools/ubuntu2204-install-tidb",id:"tools/ubuntu2204-install-tidb",title:"Ubuntu22.04\u5b89\u88c5tidb\u96c6\u7fa4",description:"\u5b98\u65b9\u6587\u6863\uff1ahttps://docs.pingcap.com/zh/",source:"@site/docs/tools/ubuntu2204-install-tidb.md",sourceDirName:"tools",slug:"/tools/ubuntu2204-install-tidb",permalink:"/note/tools/ubuntu2204-install-tidb",draft:!1,tags:[],version:"current",frontMatter:{id:"ubuntu2204-install-tidb",title:"Ubuntu22.04\u5b89\u88c5tidb\u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"Ubuntu\u76f8\u5173\u64cd\u4f5c",permalink:"/note/tools/ubuntu-usage"},next:{title:"macOS brew\u6362\u6e90",permalink:"/note/tools/mac-brew-update-sources"}},p={},s=[{value:"\u90e8\u7f72tidb\u96c6\u7fa4",id:"\u90e8\u7f72tidb\u96c6\u7fa4",level:2},{value:"TiUP\u5b89\u88c5",id:"tiup\u5b89\u88c5",level:3},{value:"\u4e0b\u8f7d\u5e76\u5b89\u88c5TiUP",id:"\u4e0b\u8f7d\u5e76\u5b89\u88c5tiup",level:4},{value:"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",level:4},{value:"\u5b89\u88c5TiUP\u7684cluster\u7ec4\u4ef6",id:"\u5b89\u88c5tiup\u7684cluster\u7ec4\u4ef6",level:4},{value:"\u5355\u673a\u90e8\u7f72tidb\u96c6\u7fa4",id:"\u5355\u673a\u90e8\u7f72tidb\u96c6\u7fa4",level:3},{value:"\u96c6\u7fa4\u5b9e\u4f8b\u5217\u8868",id:"\u96c6\u7fa4\u5b9e\u4f8b\u5217\u8868",level:4},{value:"\u4fee\u6539sshd\u6700\u5927\u94fe\u63a5\u6570",id:"\u4fee\u6539sshd\u6700\u5927\u94fe\u63a5\u6570",level:4},{value:"\u521b\u5efa\u914d\u7f6e\u6a21\u677f\uff0c<code>topo.yaml</code>",id:"\u521b\u5efa\u914d\u7f6e\u6a21\u677ftopoyaml",level:4},{value:"\u6267\u884c\u96c6\u7fa4\u90e8\u7f72\u547d\u4ee4",id:"\u6267\u884c\u96c6\u7fa4\u90e8\u7f72\u547d\u4ee4",level:4},{value:"\u542f\u52a8\u96c6\u7fa4",id:"\u542f\u52a8\u96c6\u7fa4",level:4},{value:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",id:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",level:4},{value:"\u4f7f\u7528mysql \u8fde\u63a5tidb",id:"\u4f7f\u7528mysql-\u8fde\u63a5tidb",level:4},{value:"\u5176\u4ed6\u547d\u4ee4",id:"\u5176\u4ed6\u547d\u4ee4",level:4},{value:"\u6269\u5bb9-tidb-server",id:"\u6269\u5bb9-tidb-server",level:3},{value:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u6267\u884c\u6269\u5bb9\u547d\u4ee4",id:"\u6267\u884c\u6269\u5bb9\u547d\u4ee4",level:4}],o={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b98\u65b9\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/zh/"},"https://docs.pingcap.com/zh/"))),(0,a.kt)("h2",{id:"\u90e8\u7f72tidb\u96c6\u7fa4"},"\u90e8\u7f72tidb\u96c6\u7fa4"),(0,a.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528\u7684\u662f\u4e91\u670d\u52a1\u5668ubuntu 22.04"),(0,a.kt)("h3",{id:"tiup\u5b89\u88c5"},"TiUP\u5b89\u88c5"),(0,a.kt)("p",null,"TiUP\u662fTiDB4.0\u7248\u672c\u5f15\u5165\u7684\u96c6\u7fa4\u8fd0\u7ef4\u5de5\u5177\uff0c\u901a\u8fc7TiUP\u53ef\u4ee5\u8fdb\u884cTiDB\u7684\u65e5\u5e38\u8fd0\u7ef4\u5de5\u4f5c\uff0c\u5305\u62ec\u90e8\u7f72\u3001\u542f\u52a8\u3001\u5173\u95ed\u3001\u9500\u6bc1\u3001\u5f39\u6027\u6269\u5bb9\u548c\u5347\u7ea7TiDB\u96c6\u7fa4\uff0c\u4ee5\u53ca\u7ba1\u7406TiDB\u96c6\u7fa4\u53c2\u6570\u3002"),(0,a.kt)("h4",{id:"\u4e0b\u8f7d\u5e76\u5b89\u88c5tiup"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5TiUP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --proto '=https' --tlsv1.2 -sSf https://tiup-mirrors.pingcap.com/install.sh | sh\n")),(0,a.kt)("p",null,"TiUP\u4f1a\u88ab\u5b89\u88c5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"~/.tiup"),"\u76ee\u5f55\u4e0b\uff0c\u5b89\u88c5\u6210\u529f\u591f\u4f1a\u63d0\u793a\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Successfully set mirror to https://tiup-mirrors.pingcap.com\nDetected shell: bash\nShell profile:  /home/ubuntu/.bashrc\n/home/ubuntu/.bashrc has been modified to add tiup to PATH\nopen a new terminal or source /home/ubuntu/.bashrc to use it\nInstalled path: /home/ubuntu/.tiup/bin/tiup\n===============================================\nHave a try:     tiup playground\n===============================================\n")),(0,a.kt)("h4",{id:"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u58f0\u660e\u5168\u5c40\u53d8\u91cf\uff0c\u8fd9\u6837\u5728\u4efb\u4f55\u76ee\u5f55\u4e0b\u90fd\u80fd\u591f\u4f7f\u7528tiup\u547d\u4ee4\uff08\u4e0a\u9762\u5b89\u88c5\u6210\u529f\u7684\u63d0\u793a\u4e2d\uff0cShell profile\u5373\u662f\u6211\u4eec\u8981source\u7684shell profile\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"source /home/ubuntu/.bashrc\n")),(0,a.kt)("p",null,"\u9a8c\u8bc1\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ubuntu@ubuntu-22-04:~$ tiup -v\n1.11.3 tiup\nGo Version: go1.19.5\nGit Ref: v1.11.3\nGitHash: 7223ed50460785a2adf666d511a257aa03110294\n")),(0,a.kt)("h4",{id:"\u5b89\u88c5tiup\u7684cluster\u7ec4\u4ef6"},"\u5b89\u88c5TiUP\u7684cluster\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tiup cluster\n")),(0,a.kt)("p",null,"\u5982\u679c\u673a\u5668\u5df2\u7ecf\u5b89\u88c5TiUP cluster\uff0c\u66f4\u65b0\u8f6f\u4ef6\u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tiup update --self && tiup update cluster\n")),(0,a.kt)("h3",{id:"\u5355\u673a\u90e8\u7f72tidb\u96c6\u7fa4"},"\u5355\u673a\u90e8\u7f72tidb\u96c6\u7fa4"),(0,a.kt)("h4",{id:"\u96c6\u7fa4\u5b9e\u4f8b\u5217\u8868"},"\u96c6\u7fa4\u5b9e\u4f8b\u5217\u8868"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b9e\u4f8b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4e2a\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"IP"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,a.kt)("th",{parentName:"tr",align:null},"\u90e8\u7f72\u76ee\u5f55"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TiKV"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,a.kt)("td",{parentName:"tr",align:null},"20160"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528global\u4e2d\u914d\u7f6e\u7684\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TiDB"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,a.kt)("td",{parentName:"tr",align:null},"4000"),(0,a.kt)("td",{parentName:"tr",align:null},"\uff5e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PD"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,a.kt)("td",{parentName:"tr",align:null},"2379"),(0,a.kt)("td",{parentName:"tr",align:null},"\uff5e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\uff5e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\uff5e")))),(0,a.kt)("h4",{id:"\u4fee\u6539sshd\u6700\u5927\u94fe\u63a5\u6570"},"\u4fee\u6539sshd\u6700\u5927\u94fe\u63a5\u6570"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u662f10"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/ssh/sshd_config\n")),(0,a.kt)("p",null,"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"MaxSessions"),"\u81f330"),(0,a.kt)("p",null,"\u91cd\u542fsshd\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"service sshd restart\n")),(0,a.kt)("h4",{id:"\u521b\u5efa\u914d\u7f6e\u6a21\u677ftopoyaml"},"\u521b\u5efa\u914d\u7f6e\u6a21\u677f\uff0c",(0,a.kt)("inlineCode",{parentName:"h4"},"topo.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# # Global variables are applied to all deployments and used as the default value of# # the deployments if a specific deployment value is missing.\n# \u8def\u5f84\u662f\u76f8\u5bf9\u4e8e~\u8def\u5f84\u6765\u521b\u5efa\u7684\nglobal:\n  user: "ubuntu"\n  ssh_port: 22\n  deploy_dir: "/home/ubuntu/opt/tidb/tidb-deploy"\n  data_dir: "/home/ubuntu/opt/tidb/tidb-data"\n\n# # Monitored variables are applied to all the machines.\nmonitored:\n  node_exporter_port: 9100\n  blackbox_exporter_port: 9115\n\nserver_configs:\n  tidb:\n    log.slow-threshold: 300\n  tikv:\n    readpool.storage.use-unified-pool: false\n    readpool.coprocessor.use-unified-pool: true\n  pd:\n    replication.enable-placement-rules: true\n    replication.location-labels: ["host"]\n  tiflash:\n    logger.level: "info"\n\npd_servers:\n  - host: 127.0.0.1\n\ntidb_servers:\n  - host: 127.0.0.1\n\ntikv_servers:\n  - host: 127.0.0.1\n    port: 20160\n    status_port: 20180\n    config:\n      server.labels: { host: "logic-host-1" }\n\nmonitoring_servers:\n  - host: 127.0.0.1\n\ngrafana_servers:\n  - host: 127.0.0.1\n')),(0,a.kt)("h4",{id:"\u6267\u884c\u96c6\u7fa4\u90e8\u7f72\u547d\u4ee4"},"\u6267\u884c\u96c6\u7fa4\u90e8\u7f72\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#tiup cluster deploy <cluster-name> <version> ./topo.yaml --user root -p\ntiup cluster deploy test-tidb-cluster v6.1.2 ./topo.yaml --user ubuntu -p\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<cluster-name>"),"\uff1a\u96c6\u7fa4\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<version>"),"\uff1a\u96c6\u7fa4\u7248\u672c\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"tiup list tidb"),"\u547d\u4ee4\u67e5\u770b\u5f53\u524d\u90e8\u7f72\u7684TiDB\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--user"),"\uff1a\u8fde\u63a5\u5230\u76ee\u6807\u673a\u5668\u65f6\u4f7f\u7528\u7684\u7528\u6237\u540d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-p"),"\uff1a\u8868\u793a\u8fde\u63a5\u76ee\u6807\u673a\u5668\u65f6\u4f7f\u7528\u7684\u5bc6\u7801\u767b\u9646")),(0,a.kt)("p",null,"\u67e5\u770b\u90e8\u7f72\u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ubuntu@ubuntu-22-04:~/opt/tidb$ pwd\n/home/ubuntu/opt/tidb\nubuntu@ubuntu-22-04:~/opt/tidb$ ll\ntotal 20\ndrwxrwxr-x  4 ubuntu ubuntu 4096 Mar  5 18:50 ./\ndrwxrwxr-x  3 ubuntu ubuntu 4096 Mar  5 18:31 ../\ndrwxr-xr-x  8 ubuntu ubuntu 4096 Mar  5 18:50 tidb-data/\ndrwxr-xr-x 10 ubuntu ubuntu 4096 Mar  5 18:50 tidb-deploy/\n-rw-rw-r--  1 ubuntu ubuntu 1174 Mar  5 18:49 topo.yaml\nubuntu@ubuntu-22-04:~/opt/tidb$ tree -L 2\n.\n\u251c\u2500\u2500 tidb-data\n\u2502   \u251c\u2500\u2500 monitor-9100\n\u2502   \u251c\u2500\u2500 pd-2379\n\u2502   \u251c\u2500\u2500 prometheus-9090\n\u2502   \u251c\u2500\u2500 tikv-20160\n\u2502   \u251c\u2500\u2500 tikv-20161\n\u2502   \u2514\u2500\u2500 tikv-20162\n\u251c\u2500\u2500 tidb-deploy\n\u2502   \u251c\u2500\u2500 grafana-3000\n\u2502   \u251c\u2500\u2500 monitor-9100\n\u2502   \u251c\u2500\u2500 pd-2379\n\u2502   \u251c\u2500\u2500 prometheus-9090\n\u2502   \u251c\u2500\u2500 tidb-4000\n\u2502   \u251c\u2500\u2500 tikv-20160\n\u2502   \u251c\u2500\u2500 tikv-20161\n\u2502   \u2514\u2500\u2500 tikv-20162\n\u2514\u2500\u2500 topo.yaml\n\n16 directories, 1 file\n")),(0,a.kt)("h4",{id:"\u542f\u52a8\u96c6\u7fa4"},"\u542f\u52a8\u96c6\u7fa4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e0a\u9762\u4e00\u4e2a\u6b65\u9aa4\u6709\u63d0\u793a\ntiup cluster start test-tidb-cluster --init\n\n# \u628a\u751f\u6210\u7684\u5bc6\u7801\u8bb0\u5f55\u4e0b\u6765\n+5^m6qaF29bB=X14G%\n")),(0,a.kt)("h4",{id:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"},"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tiup cluster display test-tidb-cluster\n")),(0,a.kt)("h4",{id:"\u4f7f\u7528mysql-\u8fde\u63a5tidb"},"\u4f7f\u7528mysql \u8fde\u63a5tidb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h 127.0.0.1 -P 4000 -u root -p+5^m6qaF29bB=X14G%\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| INFORMATION_SCHEMA |\n| METRICS_SCHEMA     |\n| PERFORMANCE_SCHEMA |\n| mysql              |\n| test               |\n+--------------------+\n5 rows in set (0.00 sec)\n")),(0,a.kt)("h4",{id:"\u5176\u4ed6\u547d\u4ee4"},"\u5176\u4ed6\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b\u96c6\u7fa4\u72b6\u51b5\ntiup cluster display <cluster-name>\n\n# \u505c\u6389\u96c6\u7fa4\ntiup cluster stop <cluster-name>\n\n# \u9500\u6bc1\u96c6\u7fa4\ntiup cluster destroy <cluster-name> -y\n\n# \u5220\u9664\u96c6\u7fa4\u6570\u636e\ntiup cluster clean <cluster-name> --all\n\n# \u67e5\u770b\u96c6\u7fa4\u5217\u8868\ntiup cluster list\n\n# \u4fee\u6539\u96c6\u7fa4\u914d\u7f6e\ntiup cluster edit-config <cluster-name> \n")),(0,a.kt)("h3",{id:"\u6269\u5bb9-tidb-server"},"\u6269\u5bb9-tidb-server"),(0,a.kt)("p",null,"\u5982\u679c\u5fd8\u8bb0\u5b89\u88c5\u4e86tidb-server\uff0c\u662f\u65e0\u6cd5\u901a\u8fc7sql\u8bed\u53e5\u6765\u67e5\u8be2\u6570\u636e\u5e93\u4e2d\u7684\u5185\u5bb9\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"tiup cluster scale out")," \u547d\u4ee4\u8fdb\u884c\u6269\u5bb9\u3002"),(0,a.kt)("h4",{id:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vim scale-out.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tidb_servers:\n    - host: 127.0.0.1\n     ssh_port: 22\n     port: 4000\n     status_port: 10080\n     #deploy_dir: /data/deploy/install/deploy/tidb-4000\n     #log_dir: /data/deploy/install/log/tidb-4000\n")),(0,a.kt)("p",null,"TiKV \u914d\u7f6e\u6587\u4ef6\u53c2\u8003\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tikv_servers:\n  - host: 10.0.1.5\n     ssh_port: 22\n     port: 20160\n     status_port: 20180\n     deploy_dir: /data/deploy/install/deploy/tikv-20160\n     data_dir: /data/deploy/install/data/tikv-20160\n     log_dir: /data/deploy/install/log/tikv-20160\n")),(0,a.kt)("p",null,"PD \u914d\u7f6e\u6587\u4ef6\u53c2\u8003\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"pd_servers:\n    - host: 10.0.1.5\n   ssh_port: 22\n   name: pd-1\n   client_port: 2379\n   peer_port: 2380\n   deploy_dir: /data/deploy/install/deploy/pd-2379\n   data_dir: /data/deploy/install/data/pd-2379\n   log_dir: /data/deploy/install/log/pd-2379\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"tiup cluster edit-config <cluster-name>")," \u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u56e0\u4e3a\u5176\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"global")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"server_configs")," \u53c2\u6570\u914d\u7f6e\u9ed8\u8ba4\u4f1a\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"scale-out.yaml")," \u7ee7\u627f\uff0c\u56e0\u6b64\u4e5f\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"scale-out.yaml")," \u4e2d\u751f\u6548"),(0,a.kt)("h4",{id:"\u6267\u884c\u6269\u5bb9\u547d\u4ee4"},"\u6267\u884c\u6269\u5bb9\u547d\u4ee4"),(0,a.kt)("p",null,"\u68c0\u67e5\u96c6\u7fa4\u5b58\u5728\u7684\u6f5c\u5728\u98ce\u9669\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tiup cluster check <cluster-name> scale-out.yaml --cluster --user ubuntu [-p] [-i /home/root/.ssh/gcp_rsa]\n")),(0,a.kt)("p",null,"\u81ea\u52a8\u4fee\u590d \u96c6\u7fa4\u5b58\u5728\u7684\u6f5c\u5728\u98ce\u9669\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tiup cluster check <cluster-name> scale-out.yaml --cluster --apply --user ubuntu [-p] [-i /home/root/.ssh/gcp_rsa]\n")),(0,a.kt)("p",null,"\u6267\u884c scale-out \u547d\u4ee4\u6269\u5bb9 TiDB \u96c6\u7fa4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tiup cluster scale-out <cluster-name> scale-out.yaml --user ubuntu [-p] [-i /home/root/.ssh/gcp_rsa]\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u64cd\u4f5c\u793a\u4f8b\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6269\u5bb9\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"scale-out.yaml"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--user root")," \u8868\u793a\u901a\u8fc7 root \u7528\u6237\u767b\u5f55\u5230\u76ee\u6807\u4e3b\u673a\u5b8c\u6210\u96c6\u7fa4\u90e8\u7f72\uff0c\u8be5\u7528\u6237\u9700\u8981\u6709 ssh \u5230\u76ee\u6807\u673a\u5668\u7684\u6743\u9650\uff0c\u5e76\u4e14\u5728\u76ee\u6807\u673a\u5668\u6709 sudo \u6743\u9650\u3002\u4e5f\u53ef\u4ee5\u7528\u5176\u4ed6\u6709 ssh \u548c sudo \u6743\u9650\u7684\u7528\u6237\u5b8c\u6210\u90e8\u7f72\u3002"),(0,a.kt)("li",{parentName:"ul"},"[-i]"," \u53ca ","[-p]"," \u4e3a\u53ef\u9009\u9879\uff0c\u5982\u679c\u5df2\u7ecf\u914d\u7f6e\u514d\u5bc6\u767b\u5f55\u76ee\u6807\u673a\uff0c\u5219\u4e0d\u9700\u586b\u5199\u3002\u5426\u5219\u9009\u62e9\u5176\u4e00\u5373\u53ef\uff0c","[-i]"," \u4e3a\u53ef\u767b\u5f55\u5230\u76ee\u6807\u673a\u7684 root \u7528\u6237\uff08\u6216 --user \u6307\u5b9a\u7684\u5176\u4ed6\u7528\u6237\uff09\u7684\u79c1\u94a5\uff0c\u4e5f\u53ef\u4f7f\u7528 ","[-p]"," \u4ea4\u4e92\u5f0f\u8f93\u5165\u8be5\u7528\u6237\u7684\u5bc6\u7801\u3002")),(0,a.kt)("p",null,"\u9884\u671f\u65e5\u5fd7\u7ed3\u5c3e\u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"Scaled cluster  <cluster-name> out successfully")," \u4fe1\u606f\uff0c\u8868\u793a\u6269\u5bb9\u64cd\u4f5c\u6210\u529f"))}c.isMDXComponent=!0}}]);