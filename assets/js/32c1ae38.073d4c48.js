"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[50160],{50076:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return t},metadata:function(){return o},toc:function(){return d}});var a=i(85893),s=i(11151),l=i(93687);const t={sidebar_label:"Images",title:"Images"},r=void 0,o={id:"ui/images",title:"Images",description:"The Images tab allows you to manage local container images via the application Graphical User Interface. Depending on the container engine selected, the options include:",source:"@site/docs/ui/images.md",sourceDirName:"ui",slug:"/ui/images",permalink:"/next/ui/images",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/images.md",tags:[],version:"current",frontMatter:{sidebar_label:"Images",title:"Images"},sidebar:"tutorialSidebar",previous:{title:"Port Forwarding",permalink:"/next/ui/port-forwarding"},next:{title:"Snapshots",permalink:"/next/ui/snapshots"}},c={},d=[{value:"Image Management Options",id:"image-management-options",level:3},{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Head:i,TabItem:t,Tabs:r}=n;return i||g("Head",!0),t||g("TabItem",!0),r||g("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/images"})}),"\n","\n","\n",(0,a.jsxs)(r,{groupId:"os",defaultValue:l.Z.defaultOs,children:[(0,a.jsx)(t,{value:"Windows",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/ui-main/Windows_Images.png",alt:""})})}),(0,a.jsx)(t,{value:"macOS",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/ui-main/macOS_Images.png",alt:""})})}),(0,a.jsx)(t,{value:"Linux",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/ui-main/Linux_Images.png",alt:""})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"Images"})," tab allows you to manage local container images via the application Graphical User Interface. Depending on the container engine selected, the options include:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Building container images from a local Dockerfile."}),"\n",(0,a.jsx)(n.li,{children:"Pull images from a registry and push images to a registry."}),"\n",(0,a.jsx)(n.li,{children:"Delete, and scan local images."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To view how to manage container images using the command line, refer to the ",(0,a.jsx)(n.a,{href:"/next/tutorials/working-with-images",children:"Images section"})," in the Tutorials."]}),"\n",(0,a.jsx)(n.h3,{id:"image-management-options",children:"Image Management Options"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Delete"}),": This option is only available using the container engine ",(0,a.jsx)(n.code,{children:"dockerd (moby)"}),". Images can be selected from the display view and deleted using the ",(0,a.jsx)(n.code,{children:"Delete"})," button."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"All Images"}),": This option is only available using the container engine ",(0,a.jsx)(n.code,{children:"containerd (nerdctl)"})," and ",(0,a.jsx)(n.code,{children:"k8s.io"})," namespace. This checkbox can be marked to list all images including default application images in the ",(0,a.jsx)(n.code,{children:"Rancher"})," resource group."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Namespace"}),": This option is only available using the container engine ",(0,a.jsx)(n.code,{children:"containerd (nerdctl)"}),". You can select a specific namespace in the cluster via the dropdown, which will then display the associated images."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Filter"}),": Accepts either text or numbered input to display filtered images."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"scanning-images",children:"Scanning Images"}),"\n",(0,a.jsxs)(n.p,{children:["This feature uses ",(0,a.jsx)(n.a,{href:"https://github.com/aquasecurity/trivy",children:"Trivy"})," to scan your images for vulnerabilities and configuration issues."]}),"\n",(0,a.jsx)(n.p,{children:"To scan an image:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"From the image list, find the image you want to scan."}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"\u22ee > Scan"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"A summary of the vulnerabilities, sorted by the level of severity, are displayed."}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:">"})," to view the details of each vulnerability, including reference links to learn more about the particular vulnerability."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"adding-images",children:"Adding Images"}),"\n",(0,a.jsx)(n.h4,{id:"pulling-images",children:"Pulling Images"}),"\n",(0,a.jsx)(n.p,{children:"Use this option to pull images from a registry to your virtual machine."}),"\n",(0,a.jsx)(n.p,{children:"To pull an image:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Click the ",(0,a.jsx)(n.strong,{children:"Add Image"})," button in the top-right corner."]}),"\n",(0,a.jsxs)(n.li,{children:["Click on the ",(0,a.jsx)(n.strong,{children:"Pull"})," tab."]}),"\n",(0,a.jsxs)(n.li,{children:["Enter the name of the image to pull.","\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note: By default, images are pulled from ",(0,a.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," which uses the ",(0,a.jsx)(n.code,{children:"repo/image[:tag]"})," format. To pull from other registries, include the hostname ",(0,a.jsx)(n.code,{children:"registry.example.com/repo/image[:tag]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Pull"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"building-images",children:"Building Images"}),"\n",(0,a.jsx)(n.p,{children:"Use this option to build an image and add it to your virtual machine."}),"\n",(0,a.jsx)(n.p,{children:"To build an image:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Click the ",(0,a.jsx)(n.strong,{children:"Add Image"})," button in the top-right corner."]}),"\n",(0,a.jsxs)(n.li,{children:["Click on the ",(0,a.jsx)(n.strong,{children:"Build"})," tab."]}),"\n",(0,a.jsxs)(n.li,{children:["Enter a name for the image being built. E.g., ",(0,a.jsx)(n.code,{children:"repo/image"}),", ",(0,a.jsx)(n.code,{children:"repo/image:tag"}),", ",(0,a.jsx)(n.code,{children:"registry.example.com/repo/image"}),", or ",(0,a.jsx)(n.code,{children:"registry.example.com/repo/image:tag"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Build"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"In the file browser, select the Dockerfile to build an image with."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,i){var a=i(10412);const s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),t=s?"ios":"android",r=s?"macOS":l?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:r,defaultPackageManager:"npm",defaultPlatform:t,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return t}});var a=i(67294);const s={},l=a.createContext(s);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);