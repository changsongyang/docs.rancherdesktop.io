"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5425],{35533:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return t},default:function(){return g},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return d}});var a=i(85893),s=i(11151),l=i(93687);const r={sidebar_label:"\u955c\u50cf",title:"\u955c\u50cf"},t=void 0,o={id:"ui/images",title:"\u955c\u50cf",description:"Images \u9009\u9879\u5361\u5141\u8bb8\u4f60\u7ba1\u7406\u865a\u62df\u673a\u4e0a\u7684\u955c\u50cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.12/ui/images.md",sourceDirName:"ui",slug:"/ui/images",permalink:"/zh/1.12/ui/images",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.12/ui/images.md",tags:[],version:"1.12",frontMatter:{sidebar_label:"\u955c\u50cf",title:"\u955c\u50cf"},sidebar:"tutorialSidebar",previous:{title:"\u7aef\u53e3\u8f6c\u53d1",permalink:"/zh/1.12/ui/port-forwarding"},next:{title:"Snapshots",permalink:"/zh/1.12/ui/snapshots"}},c={},d=[{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components},{TabItem:i,Tabs:r}=n;return i||h("TabItem",!0),r||h("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Images"})," \u9009\u9879\u5361\u5141\u8bb8\u4f60\u7ba1\u7406\u865a\u62df\u673a\u4e0a\u7684\u955c\u50cf\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u8981\u6539\u7528 nerdctl \u7ba1\u7406\u955c\u50cf\uff0c\u8bf7\u53c2\u9605",(0,a.jsx)(n.a,{href:"../tutorials/working-with-images",children:"\u955c\u50cf"}),"\u3002"]}),"\n",(0,a.jsxs)(r,{groupId:"os",defaultValue:l.Z.defaultOs,children:[(0,a.jsx)(i,{value:"Windows",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/Windows_Images.png",alt:""})})}),(0,a.jsx)(i,{value:"macOS",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/macOS_Images.png",alt:""})})}),(0,a.jsx)(i,{value:"Linux",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/Linux_Images.png",alt:""})})})]}),"\n",(0,a.jsx)(n.h3,{id:"scanning-images",children:"Scanning Images"}),"\n",(0,a.jsxs)(n.p,{children:["\u6b64\u529f\u80fd\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"https://github.com/aquasecurity/trivy",children:"Trivy"})," \u6765\u626b\u63cf\u4f60\u7684\u955c\u50cf\uff0c\u4ece\u800c\u67e5\u627e\u6f0f\u6d1e\u548c\u914d\u7f6e\u95ee\u9898\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8981\u626b\u63cf\u955c\u50cf\uff1a"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u4ece\u955c\u50cf\u5217\u8868\u4e2d\uff0c\u627e\u5230\u8981\u626b\u63cf\u7684\u955c\u50cf\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u5355\u51fb ",(0,a.jsx)(n.strong,{children:"\u22ee > Scan"}),"\u3002"]}),"\n",(0,a.jsx)(n.li,{children:"\u5c06\u663e\u793a\u6309\u4e25\u91cd\u7a0b\u5ea6\u6392\u5e8f\u7684\u6f0f\u6d1e\u6458\u8981\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u5355\u51fb ",(0,a.jsx)(n.strong,{children:">"})," \u67e5\u770b\u200b\u200b\u6bcf\u4e2a\u6f0f\u6d1e\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u62ec\u6f0f\u6d1e\u8be6\u60c5\u7684\u94fe\u63a5\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"adding-images",children:"Adding Images"}),"\n",(0,a.jsx)(n.h4,{id:"pulling-images",children:"Pulling Images"}),"\n",(0,a.jsx)(n.p,{children:"\u6b64\u9009\u9879\u53ef\u4ee5\u8ba9\u4f60\u5c06\u955c\u50cf\u4ece\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u5230\u4f60\u7684\u865a\u62df\u673a\u4e2d\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u8981\u62c9\u53d6\u955c\u50cf\uff1a"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,a.jsx)(n.strong,{children:"+"})," \u6309\u94ae\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5355\u51fb ",(0,a.jsx)(n.strong,{children:"Pull"})," \u9009\u9879\u5361\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u8f93\u5165\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7684\u540d\u79f0\u3002","\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u955c\u50cf\u662f\u4ece ",(0,a.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," \u4e2d\u63d0\u53d6\u7684\uff08\u683c\u5f0f\uff1a",(0,a.jsx)(n.code,{children:"repo/image[:tag]"}),"\uff09\u3002\u8981\u4ece\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\uff0c\u8bf7\u5305\u542b\u4e3b\u673a\u540d ",(0,a.jsx)(n.code,{children:"registry.example.com/repo/image[:tag]"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5355\u51fb ",(0,a.jsx)(n.strong,{children:"Pull"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"building-images",children:"Building Images"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u6b64\u9009\u9879\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u4f60\u7684\u865a\u62df\u673a\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u8981\u6784\u5efa\u955c\u50cf\uff1a"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,a.jsx)(n.strong,{children:"+"})," \u6309\u94ae\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5355\u51fb ",(0,a.jsx)(n.strong,{children:"Build"})," \u9009\u9879\u5361\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u8f93\u5165\u6784\u5efa\u7684\u955c\u50cf\u7684\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,a.jsx)(n.code,{children:"repo/image"}),"\u3001",(0,a.jsx)(n.code,{children:"repo/image:tag"}),"\u3001",(0,a.jsx)(n.code,{children:"registry.example.com/repo/image"})," \u6216 ",(0,a.jsx)(n.code,{children:"registry.example.com/repo/image:tag"}),"\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5355\u51fb ",(0,a.jsx)(n.strong,{children:"Build"}),"\u3002"]}),"\n",(0,a.jsx)(n.li,{children:"\u5728\u6587\u4ef6\u6d4f\u89c8\u5668\u4e2d\uff0c\u9009\u62e9\u8981\u7528\u6765\u6784\u5efa\u955c\u50cf\u7684 Dockerfile\u3002"}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,i){var a=i(10412);const s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=s?"ios":"android",t=s?"macOS":l?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:t,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return r}});var a=i(67294);const s={},l=a.createContext(s);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);