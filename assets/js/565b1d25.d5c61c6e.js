"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[93397],{30831:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var a=t(85893),o=t(11151);t(93687);const i={title:"Introduction",slug:"/"},r=void 0,s={id:"getting-started/introduction",title:"Introduction",description:"Rancher Desktop is an app that provides container management and Kubernetes on the desktop. It is available for Mac (both on Intel and Apple Silicon), Windows, and Linux.",source:"@site/versioned_docs/version-1.12/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/",permalink:"/1.12/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.12/getting-started/introduction.md",tags:[],version:"1.12",frontMatter:{title:"Introduction",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/1.12/getting-started/installation"}},c={},l=[{value:"Container Management",id:"container-management",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Rancher vs Rancher Desktop",id:"rancher-vs-rancher-desktop",level:2}];function d(e){const n={a:"a",em:"em",h2:"h2",img:"img",p:"p",...(0,o.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/"})}),"\n","\n","\n",(0,a.jsx)(n.p,{children:"Rancher Desktop is an app that provides container management and Kubernetes on the desktop. It is available for Mac (both on Intel and Apple Silicon), Windows, and Linux."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.12/getting-started/introduction_preferences_tabKubernetes.png",alt:""})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"The above image shows Kubernetes settings on Mac on the left and Windows on the right."})}),"\n",(0,a.jsx)(n.h2,{id:"container-management",children:"Container Management"}),"\n",(0,a.jsxs)(n.p,{children:["Rancher Desktop provides the ability to build, push, and pull container images along with the ability to run containers. This is provided by either the Docker CLI (when you choose Moby/dockerd as you engine) or nerdctl (when you choose containerd as your engine). ",(0,a.jsx)(n.a,{href:"https://github.com/containerd/nerdctl",children:"nerdctl"}),' is a "Docker-compatible CLI for containerd" provided by the containerd project.']}),"\n",(0,a.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,a.jsxs)(n.p,{children:["Kubernetes is built in to Rancher Desktop. Kubernetes is provided by ",(0,a.jsx)(n.a,{href:"https://k3s.io/",children:"k3s"}),", a lightweight certified distribution. With Rancher Desktop you have the ability to ",(0,a.jsx)(n.em,{children:"choose your version of Kubernetes"})," and ",(0,a.jsx)(n.em,{children:"reset Kubernetes or Kubernetes and the whole container runtime with the click of a button"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"rancher-vs-rancher-desktop",children:"Rancher vs Rancher Desktop"}),"\n",(0,a.jsxs)(n.p,{children:["While ",(0,a.jsx)(n.a,{href:"https://rancher.com/",children:"Rancher"})," and Rancher Desktop share the ",(0,a.jsx)(n.em,{children:"Rancher"})," name they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop provides a local Kubernetes and container management platform. The two solutions complement each other."]}),"\n",(0,a.jsx)(n.p,{children:"If you want to run Rancher on your local system, you can install Rancher into Rancher Desktop."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},93687:function(e,n,t){var a=t(10412);const o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=o?"ios":"android",s=o?"macOS":i?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(67294);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);