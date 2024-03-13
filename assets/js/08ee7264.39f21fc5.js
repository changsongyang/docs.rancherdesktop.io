"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[94043],{22069:function(e,n,s){s.r(n),s.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return d}});var a=s(85893),t=s(11151),i=s(93687);const o={sidebar_label:"Extensions",title:"Extensions"},l=void 0,r={id:"ui/extensions",title:"Extensions",description:"Catalog",source:"@site/versioned_docs/version-1.12/ui/extensions.md",sourceDirName:"ui",slug:"/ui/extensions",permalink:"/1.12/ui/extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.12/ui/extensions.md",tags:[],version:"1.12",frontMatter:{sidebar_label:"Extensions",title:"Extensions"},sidebar:"tutorialSidebar",previous:{title:"Diagnostics",permalink:"/1.12/ui/diagnostics"},next:{title:"General",permalink:"/1.12/ui/preferences/application/general"}},c={},d=[{value:"Catalog",id:"catalog",level:3},{value:"Search",id:"search",level:4},{value:"Installed",id:"installed",level:3},{value:"Name",id:"name",level:4},{value:"Remote Debugging Extensions",id:"remote-debugging-extensions",level:3}];function u(e){const n={a:"a",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...(0,t.a)(),...e.components},{Head:s,TabItem:o,Tabs:l}=n;return s||h("Head",!0),o||h("TabItem",!0),l||h("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/extensions"})}),"\n","\n","\n",(0,a.jsx)(n.h3,{id:"catalog",children:"Catalog"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"Catalog"})," tab acts as a marketplace for available Rancher Desktop Extensions. Users can view and click on extensions for further description and the ability to install extensions directly through the UI."]}),"\n",(0,a.jsxs)(l,{groupId:"os",defaultValue:i.Z.defaultOs,children:[(0,a.jsx)(o,{value:"Windows",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.12/ui-main/Windows_Extensions.png",alt:""})})}),(0,a.jsx)(o,{value:"macOS",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.12/ui-main/macOS_Extensions.png",alt:""})})}),(0,a.jsx)(o,{value:"Linux",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.12/ui-main/Linux_Extensions.png",alt:""})})})]}),"\n",(0,a.jsx)(n.h4,{id:"search",children:"Search"}),"\n",(0,a.jsxs)(n.p,{children:["Users can make use of the ",(0,a.jsx)(n.strong,{children:"Search"})," functionality to query through available extensions."]}),"\n",(0,a.jsx)(n.h3,{id:"installed",children:"Installed"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"Installed"})," tab is a view for all installed extensions on your Rancher Desktop application."]}),"\n",(0,a.jsxs)(l,{groupId:"os",defaultValue:i.Z.defaultOs,children:[(0,a.jsx)(o,{value:"Windows",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.12/ui-main/Windows_Extensions-Installed.png",alt:""})})}),(0,a.jsx)(o,{value:"macOS",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.12/ui-main/macOS_Extensions-Installed.png",alt:""})})}),(0,a.jsx)(o,{value:"Linux",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.us-east-1.amazonaws.com/desktop/v1.12/ui-main/Linux_Extensions-Installed.png",alt:""})})})]}),"\n",(0,a.jsx)(n.h4,{id:"name",children:"Name"}),"\n",(0,a.jsxs)(n.p,{children:["A list of names of installed extensions. Users can directly uninstall extensions by clicking the ",(0,a.jsx)(n.strong,{children:"Remove"})," button for the respective extension on the right hand side."]}),"\n",(0,a.jsx)(n.h3,{id:"remote-debugging-extensions",children:"Remote Debugging Extensions"}),"\n",(0,a.jsxs)(n.p,{children:["The Chrome remote debugger allows you to debug Electron apps using Chrome Developer Tools. This tool can be used to also debug Docker extensions in Rancher Desktop. Please follow these instructions on ",(0,a.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/#remote-debugging-an-extension",children:"remote debugging an extension"})," installed in the application."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,s){var a=s(10412);const t=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=t?"ios":"android",l=t?"macOS":i?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var a=s(67294);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);