"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[52051],{52657:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return l}});var i=t(85893),o=t(11151);const r={sidebar_label:"Integrations",title:"Integrations"},s=void 0,a={id:"ui/preferences/wsl/integrations",title:"Integrations",description:"The Integrations tab allows for the option to make the Rancher Desktop Kubernetes configuration accessible to any Linux distributions configured for WSL. Once enabled, you can communicate with the Rancher Desktop Kubernetes cluster using tools like kubectl from within the WSL distribution.",source:"@site/versioned_docs/version-1.13/ui/preferences/wsl/integrations.md",sourceDirName:"ui/preferences/wsl",slug:"/ui/preferences/wsl/integrations",permalink:"/1.13/ui/preferences/wsl/integrations",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.13/ui/preferences/wsl/integrations.md",tags:[],version:"1.13",frontMatter:{sidebar_label:"Integrations",title:"Integrations"},sidebar:"tutorialSidebar",previous:{title:"Volumes",permalink:"/1.13/ui/preferences/virtual-machine/volumes"},next:{title:"Network",permalink:"/1.13/ui/preferences/wsl/network"}},c={},l=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",...(0,o.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/preferences/wsl/integrations"})}),"\n",(0,i.jsxs)(n.p,{children:["The Integrations tab allows for the option to make the Rancher Desktop Kubernetes configuration accessible to any Linux distributions configured for WSL. Once enabled, you can communicate with the Rancher Desktop Kubernetes cluster using tools like ",(0,i.jsx)(n.code,{children:"kubectl"})," from within the WSL distribution."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/Windows_wsl_tabIntegrations.png",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["With WSL, memory and CPU allocation is configured globally across all Linux distributions. Refer to the ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig",children:"WSL documentation"})," for instructions."]}),"\n",(0,i.jsx)(n.admonition,{title:"warning: breaking change",type:"caution"}),"\n",(0,i.jsxs)(n.p,{children:["Starting with version ",(0,i.jsx)(n.code,{children:"1.11.1"}),", Rancher Desktop no longer supports a symlink from the ",(0,i.jsx)(n.code,{children:"~/.kube/config"})," file to the instance on your Windows filesystem. This is due to the Kubernetes endpoint differing between the Windows host and inside a WSL2 distribution. The application will replace found symlinks with a separate file instead."]}),"\n",(0,i.jsxs)(n.p,{children:["If the file inside the distribution is a separate file, or a symlink to any other location, then Rancher Desktop will update that file with the ",(0,i.jsx)(n.code,{children:"rancher-desktop"})," context."]}),"\n",(0,i.jsx)(n.p,{children:"However, if the file is a symlink to the default location on the host, then Rancher Desktop will delete it and create a new file with the cluster configuration that works from inside the distribution."}),"\n",(0,i.jsx)(n.p,{children:'Consequently, the "Kubernetes context" menu entry for the notification will show (and change) the context for the Win32 side only. The contexts inside distributions will need to be managed manually from a command prompt.'})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);