"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[28979],{13331:function(e,n,s){s.r(n),s.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return c}});var i=s(85893),t=s(11151);s(93687);const a={sidebar_label:"Volumes",title:"Volumes (macOS & Linux)"},r=void 0,o={id:"ui/preferences/virtual-machine/volumes",title:"Volumes (macOS & Linux)",description:"Mount Type",source:"@site/docs/ui/preferences/virtual-machine/volumes.md",sourceDirName:"ui/preferences/virtual-machine",slug:"/ui/preferences/virtual-machine/volumes",permalink:"/next/ui/preferences/virtual-machine/volumes",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/virtual-machine/volumes.md",tags:[],version:"current",frontMatter:{sidebar_label:"Volumes",title:"Volumes (macOS & Linux)"},sidebar:"tutorialSidebar",previous:{title:"Network",permalink:"/next/ui/preferences/virtual-machine/network"},next:{title:"Integrations",permalink:"/next/ui/preferences/wsl/integrations"}},l={},c=[{value:"Mount Type",id:"mount-type",level:2},{value:"reverse-sshfs",id:"reverse-sshfs",level:3},{value:"9p",id:"9p",level:3},{value:"virtiofs",id:"virtiofs",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Head:s,TabItem:a,Tabs:r}=n;return s||p("Head",!0),a||p("TabItem",!0),r||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/preferences/virtual-machine/volumes"})}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"mount-type",children:"Mount Type"}),"\n",(0,i.jsx)(n.h3,{id:"reverse-sshfs",children:"reverse-sshfs"}),"\n",(0,i.jsxs)(r,{groupId:"os",children:[(0,i.jsx)(a,{value:"macOS",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/macOS_virtualMachine_tabVolumes.png",alt:""})})}),(0,i.jsx)(a,{value:"Linux",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/Linux_virtualMachine_tabVolumes.png",alt:""})})})]}),"\n",(0,i.jsxs)(n.p,{children:['Users can enable the "',(0,i.jsx)(n.a,{href:"https://github.com/lima-vm/lima/blob/master/docs/mount.md#reverse-sshfs",children:"reverse-sshfs"}),'" mount type from the ',(0,i.jsx)(n.code,{children:"Volumes"})," tab. This exposes the filesystem by running an SFTP server on the host. The host instance will then intitiate an SSH connection into the guest allowing it to connect to the SFTP server. This is the default mount type used in the application."]}),"\n",(0,i.jsx)(n.h3,{id:"9p",children:"9p"}),"\n",(0,i.jsxs)(r,{groupId:"os",children:[(0,i.jsx)(a,{value:"macOS",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/macOS_virtualMachine_tabVolumes_9P.png",alt:""})})}),(0,i.jsx)(a,{value:"Linux",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/Linux_virtualMachine_tabVolumes_9P.png",alt:""})})})]}),"\n",(0,i.jsx)(n.admonition,{title:"warning",type:"caution",children:(0,i.jsxs)(n.p,{children:["This is an ",(0,i.jsx)(n.strong,{children:"experimental"})," setting."]})}),"\n",(0,i.jsxs)(n.p,{children:['Users can enable the "',(0,i.jsx)(n.a,{href:"https://www.kernel.org/doc/Documentation/filesystems/9p.txt",children:"9p"}),'" mount type from the ',(0,i.jsx)(n.code,{children:"Volumes"})," tab. This will expose the filesystem by using QEMU's ",(0,i.jsx)(n.code,{children:"virtio-9p-pci"})," devices."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cache Mode:\nSpecifies a caching policy that has a default setting as ",(0,i.jsx)(n.code,{children:"mmap"}),". The caching options are ",(0,i.jsx)(n.code,{children:"[none, loose, fscache, mmap]"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Memory Size In KiB:\nUsers can specify the number of bytes to use for the "9p" packet size. The minimum value is 4 KiB and the default size is 128 KiB.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Protocol Version:\nUsers can select the "9p" protocol version. The options include ',(0,i.jsx)(n.code,{children:"[9p2000, 9p2000.u, 9p2000.L]"})," and the default protocol setting is ",(0,i.jsx)(n.code,{children:"9p200.L"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Security Model:\nUsers can select a supported security model with options being ",(0,i.jsx)(n.code,{children:"[passthrough, mapped-xattr, mapped-file, none]"}),". The default security setting value is ",(0,i.jsx)(n.code,{children:"none"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"virtiofs",children:"virtiofs"}),"\n",(0,i.jsxs)(r,{groupId:"os",children:[(0,i.jsx)(a,{value:"macOS",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/macOS_virtualMachine_tabVolumes.png",alt:""})})}),(0,i.jsx)(a,{value:"Linux",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/Linux_virtualMachine_tabVolumes.png",alt:""})})})]}),"\n",(0,i.jsx)(n.admonition,{title:"warning",type:"caution",children:(0,i.jsxs)(n.p,{children:["This is an ",(0,i.jsx)(n.strong,{children:"experimental"})," setting."]})}),"\n",(0,i.jsxs)(n.p,{children:["Users can enable the ",(0,i.jsx)(n.a,{href:"https://virtio-fs.gitlab.io/",children:(0,i.jsx)(n.code,{children:"virtiofs"})})," mount type from the ",(0,i.jsx)(n.code,{children:"Volumes"})," tab. This is implemented using the Apple ",(0,i.jsx)(n.code,{children:"Virtualization.Framework"})," shared directory device."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,s){var i=s(10412);const t=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=t?"ios":"android",o=t?"macOS":a?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var i=s(67294);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);