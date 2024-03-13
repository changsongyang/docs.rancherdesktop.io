"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[89657],{41653:function(e,n,s){s.r(n),s.d(n,{assets:function(){return r},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var i=s(85893),t=s(11151),a=s(93687);const l={title:"Installing and Uninstalling Rancher Desktop Extensions"},o=void 0,d={id:"how-to-guides/installing-uninstalling-extensions",title:"Installing and Uninstalling Rancher Desktop Extensions",description:"The Extensions feature introduced in the v1.9.0-tech-preview release enables you to use Docker Desktop Extensions within Rancher Desktop. The feature helps you extend Rancher Desktop's functionality to meet your additional needs. This guide will demonstrate how to install and uninstall Docker extensions in Rancher Desktop.",source:"@site/versioned_docs/version-1.13/how-to-guides/installing-uninstalling-extensions.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/installing-uninstalling-extensions",permalink:"/1.13/how-to-guides/installing-uninstalling-extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.13/how-to-guides/installing-uninstalling-extensions.md",tags:[],version:"1.13",frontMatter:{title:"Installing and Uninstalling Rancher Desktop Extensions"},sidebar:"tutorialSidebar",previous:{title:"Hello World Example",permalink:"/1.13/how-to-guides/hello-world-example"},next:{title:"Transfer Container Images",permalink:"/1.13/how-to-guides/transfer-container-images"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing Extensions",id:"installing-extensions",level:3},{value:"Using the UI",id:"using-the-ui",level:4},{value:"Using the Command Line",id:"using-the-command-line",level:4},{value:"Using the UI",id:"using-the-ui-1",level:4},{value:"Using the Command Line",id:"using-the-command-line-1",level:4},{value:"Using the UI",id:"using-the-ui-2",level:4},{value:"Using the Command Line",id:"using-the-command-line-2",level:4},{value:"Uninstalling Extensions",id:"uninstalling-extensions",level:3},{value:"Using the UI",id:"using-the-ui-3",level:4},{value:"Using the Command Line",id:"using-the-command-line-3",level:4},{value:"Using the UI",id:"using-the-ui-4",level:4},{value:"Using the Command Line",id:"using-the-command-line-4",level:4},{value:"Using the UI",id:"using-the-ui-5",level:4},{value:"Using the Command Line",id:"using-the-command-line-5",level:4}];function h(e){const n={admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{Head:s,TabItem:l,Tabs:o}=n;return s||x("Head",!0),l||x("TabItem",!0),o||x("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/installing-uninstalling-extensions"})}),"\n","\n","\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Extensions"})," feature introduced in the ",(0,i.jsx)(n.code,{children:"v1.9.0-tech-preview"})," release enables you to use ",(0,i.jsx)(n.strong,{children:"Docker Desktop Extensions"})," within Rancher Desktop. The feature helps you extend Rancher Desktop's functionality to meet your additional needs. This guide will demonstrate how to install and uninstall Docker extensions in Rancher Desktop."]}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["Rancher Desktop Extensions are available as part of release ",(0,i.jsx)(n.code,{children:"v1.9.0-tech-preview"})," or later."]}),"\n",(0,i.jsx)(n.h3,{id:"installing-extensions",children:"Installing Extensions"}),"\n",(0,i.jsxs)(n.p,{children:["There are two ways in which you can install extensions, a method using the UI and another using the ",(0,i.jsx)(n.code,{children:"rdctl extension install"})," command."]}),"\n",(0,i.jsxs)(o,{groupId:"os",defaultValue:a.Z.defaultOs,children:[(0,i.jsxs)(l,{value:"Windows",children:[(0,i.jsx)(n.h4,{id:"using-the-ui",children:"Using the UI"}),(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Extensions"})," from the main UI to navigate to the ",(0,i.jsx)(n.strong,{children:"Catalog"})," tab. Here you can search through extensions available for use which can be downloaded and installed using the ",(0,i.jsx)(n.strong,{children:"Install"})," button."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.13/ui-main/Windows_Extensions.png",alt:""})}),(0,i.jsx)(n.h4,{id:"using-the-command-line",children:"Using the Command Line"}),(0,i.jsxs)(n.p,{children:["We have also extended the ",(0,i.jsx)(n.code,{children:"rdctl"})," command line in the ",(0,i.jsx)(n.code,{children:"v1.9.0-tech-preview"})," release to install extensions. Please use the command below to install extensions:"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The use of the ",(0,i.jsx)(n.code,{children:"<tag>"})," parameter is optional."]})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"rdctl extension install <image-id>:<tag>\n"})})]}),(0,i.jsxs)(l,{value:"macOS",children:[(0,i.jsx)(n.h4,{id:"using-the-ui-1",children:"Using the UI"}),(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Extensions"})," from the main UI to navigate to the ",(0,i.jsx)(n.strong,{children:"Catalog"})," tab. Here you can search through extensions available for use which can be downloaded and installed using the ",(0,i.jsx)(n.strong,{children:"Install"})," button."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.13/ui-main/macOS_Extensions.png",alt:""})}),(0,i.jsx)(n.h4,{id:"using-the-command-line-1",children:"Using the Command Line"}),(0,i.jsxs)(n.p,{children:["We have also extended the ",(0,i.jsx)(n.code,{children:"rdctl"})," command line in the ",(0,i.jsx)(n.code,{children:"v1.9.0-tech-preview"})," release to install extensions. Please use the command below to install extensions:"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The use of the ",(0,i.jsx)(n.code,{children:"<tag>"})," parameter is optional."]})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"rdctl extension install <image-id>:<tag>\n"})})]}),(0,i.jsxs)(l,{value:"Linux",children:[(0,i.jsx)(n.h4,{id:"using-the-ui-2",children:"Using the UI"}),(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Extensions"})," from the main UI to navigate to the ",(0,i.jsx)(n.strong,{children:"Catalog"})," tab. Here you can search through extensions available for use which can be downloaded and installed using the ",(0,i.jsx)(n.strong,{children:"Install"})," button."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.13/ui-main/Linux_Extensions.png",alt:""})}),(0,i.jsx)(n.h4,{id:"using-the-command-line-2",children:"Using the Command Line"}),(0,i.jsxs)(n.p,{children:["We have also extended the ",(0,i.jsx)(n.code,{children:"rdctl"})," command line in the ",(0,i.jsx)(n.code,{children:"v1.9.0-tech-preview"})," release to install extensions. Please use the command below to install extensions:"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The use of the ",(0,i.jsx)(n.code,{children:"<tag>"})," parameter is optional."]})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"rdctl extension install <image-id>:<tag>\n"})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"uninstalling-extensions",children:"Uninstalling Extensions"}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, there are two ways in which you can uninstall extensions, a method using the UI and another using the ",(0,i.jsx)(n.code,{children:"rdctl extension uninstall"})," command."]}),"\n",(0,i.jsxs)(o,{groupId:"os",defaultValue:a.Z.defaultOs,children:[(0,i.jsxs)(l,{value:"Windows",children:[(0,i.jsx)(n.h4,{id:"using-the-ui-3",children:"Using the UI"}),(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Extensions"})," from the main UI to navigate to the ",(0,i.jsx)(n.strong,{children:"Catalog"})," tab. On this view, you can search through the available extensions, and uninstall the already installed extensions. Extensions can also be uninstalled from the ",(0,i.jsx)(n.strong,{children:"Installed"})," tab by clicking the ",(0,i.jsx)(n.strong,{children:"Remove"})," button."]}),(0,i.jsxs)(o,{children:[(0,i.jsx)(l,{value:"Catalog",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.13/ui-main/Windows_Extensions.png",alt:""})})}),(0,i.jsx)(l,{value:"Installed",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.13/ui-main/Windows_Extensions-Installed.png",alt:""})})})]}),(0,i.jsx)(n.h4,{id:"using-the-command-line-3",children:"Using the Command Line"}),(0,i.jsxs)(n.p,{children:["We have also extended the ",(0,i.jsx)(n.code,{children:"rdctl"})," command line in the ",(0,i.jsx)(n.code,{children:"v1.9.0-tech-preview"})," release to uninstall extensions. Please use the command below to uninstall extensions:"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The use of the ",(0,i.jsx)(n.code,{children:"<tag>"})," parameter is optional."]})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"rdctl extension uninstall <image-id>:<tag>\n"})})]}),(0,i.jsxs)(l,{value:"macOS",children:[(0,i.jsx)(n.h4,{id:"using-the-ui-4",children:"Using the UI"}),(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Extensions"})," from the main UI to navigate to the ",(0,i.jsx)(n.strong,{children:"Catalog"})," tab. On this view, you can search through the available extensions, and uninstall the already installed extensions. Extensions can also be uninstalled from the ",(0,i.jsx)(n.strong,{children:"Installed"})," tab by clicking the ",(0,i.jsx)(n.strong,{children:"Remove"})," button."]}),(0,i.jsxs)(o,{children:[(0,i.jsx)(l,{value:"Catalog",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.13/ui-main/macOS_Extensions.png",alt:""})})}),(0,i.jsx)(l,{value:"Installed",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.13/ui-main/macOS_Extensions-Installed.png",alt:""})})})]}),(0,i.jsx)(n.h4,{id:"using-the-command-line-4",children:"Using the Command Line"}),(0,i.jsxs)(n.p,{children:["We have also extended the ",(0,i.jsx)(n.code,{children:"rdctl"})," command line in the ",(0,i.jsx)(n.code,{children:"v1.9.0-tech-preview"})," release to uninstall extensions. Please use the command below to uninstall extensions:"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The use of the ",(0,i.jsx)(n.code,{children:"<tag>"})," parameter is optional."]})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"rdctl extension uninstall <image-id>:<tag>\n"})})]}),(0,i.jsxs)(l,{value:"Linux",children:[(0,i.jsx)(n.h4,{id:"using-the-ui-5",children:"Using the UI"}),(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Extensions"})," from the main UI to navigate to the ",(0,i.jsx)(n.strong,{children:"Catalog"})," tab. On this view, you can search through the available extensions, and uninstall the already installed extensions. Extensions can also be uninstalled from the ",(0,i.jsx)(n.strong,{children:"Installed"})," tab by clicking the ",(0,i.jsx)(n.strong,{children:"Remove"})," button."]}),(0,i.jsxs)(o,{children:[(0,i.jsx)(l,{value:"Catalog",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.13/ui-main/Linux_Extensions.png",alt:""})})}),(0,i.jsx)(l,{value:"Installed",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.13/ui-main/Linux_Extensions-Installed.png",alt:""})})})]}),(0,i.jsx)(n.h4,{id:"using-the-command-line-5",children:"Using the Command Line"}),(0,i.jsxs)(n.p,{children:["We have also extended the ",(0,i.jsx)(n.code,{children:"rdctl"})," command line in the ",(0,i.jsx)(n.code,{children:"v1.9.0-tech-preview"})," release to uninstall extensions. Please use the command below to uninstall extensions:"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The use of the ",(0,i.jsx)(n.code,{children:"<tag>"})," parameter is optional."]})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"rdctl extension uninstall <image-id>:<tag>\n"})})]})]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,s){var i=s(10412);const t=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=t?"ios":"android",o=t?"macOS":a?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var i=s(67294);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);