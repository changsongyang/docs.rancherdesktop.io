"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[48512],{10548:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=t(85893),o=t(11151);const i={sidebar_label:"Network",title:"Network (macOS)"},s=void 0,c={id:"ui/preferences/virtual-machine/network",title:"Network (macOS)",description:"Enable socket-vmnet",source:"@site/docs/ui/preferences/virtual-machine/network.md",sourceDirName:"ui/preferences/virtual-machine",slug:"/ui/preferences/virtual-machine/network",permalink:"/next/ui/preferences/virtual-machine/network",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/virtual-machine/network.md",tags:[],version:"current",frontMatter:{sidebar_label:"Network",title:"Network (macOS)"},sidebar:"tutorialSidebar",previous:{title:"Hardware",permalink:"/next/ui/preferences/virtual-machine/hardware"},next:{title:"Volumes",permalink:"/next/ui/preferences/virtual-machine/volumes"}},a={},d=[{value:"Enable <code>socket-vmnet</code>",id:"enable-socket-vmnet",level:3},{value:"<code>vmnet</code> and <code>mDNSResponder</code>",id:"vmnet-and-mdnsresponder",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/preferences/virtual-machine/network"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/macOS_virtualMachine_tabNetwork.png",alt:""})}),"\n",(0,r.jsxs)(n.h3,{id:"enable-socket-vmnet",children:["Enable ",(0,r.jsx)(n.code,{children:"socket-vmnet"})]}),"\n",(0,r.jsx)(n.admonition,{title:"warning",type:"caution",children:(0,r.jsxs)(n.p,{children:["This is an ",(0,r.jsx)(n.strong,{children:"experimental"})," setting."]})}),"\n",(0,r.jsxs)(n.p,{children:["Network settings can be enabled or disabled from this view. Users have the initial option of enabling ",(0,r.jsx)(n.code,{children:"socket-vmnet"})," which will allow for adding another guest IP that is accessible from the host and other guests. The enabled option also provides ",(0,r.jsxs)(n.a,{href:"https://developer.apple.com/documentation/vmnet",children:[(0,r.jsx)(n.code,{children:"vmnet"})," framework"]})," support for QEMU and does not depend on VDE."]}),"\n",(0,r.jsxs)(n.h3,{id:"vmnet-and-mdnsresponder",children:[(0,r.jsx)(n.code,{children:"vmnet"})," and ",(0,r.jsx)(n.code,{children:"mDNSResponder"})]}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"vmnet"})," framework with Rancher Desktop, the macOS component ",(0,r.jsx)(n.a,{href:"https://github.com/apple-oss-distributions/mDNSResponder#mdns-responder-daemon",children:(0,r.jsx)(n.code,{children:"mDNSResponder"})})," will automatically start and make use of your machine's port ",(0,r.jsx)(n.code,{children:"53"}),". The port is used to get a routable IP address for the virtual machine running the application's container engine."]}),"\n",(0,r.jsxs)(n.p,{children:["If you need access to port ",(0,r.jsx)(n.code,{children:"53"}),", or do not wish to make use of routable IP adresses, then you can achieve this by disabling ",(0,r.jsx)(n.a,{href:"https://docs.rancherdesktop.io/ui/preferences/application/general#administrative-access",children:(0,r.jsx)(n.code,{children:"Administrative Access"})})," from the ",(0,r.jsx)(n.em,{children:"Preferences"})," dialog. Using ",(0,r.jsx)(n.code,{children:"vmnet"})," requires starting a daemon via ",(0,r.jsx)(n.code,{children:"sudo"}),", and with administrative access removed this will free port ",(0,r.jsx)(n.code,{children:"53"})," from the ",(0,r.jsx)(n.code,{children:"mDNSResponder"})," daemon."]}),"\n",(0,r.jsx)(n.admonition,{title:"warning",type:"caution",children:(0,r.jsxs)(n.p,{children:["Please note that with ",(0,r.jsx)(n.code,{children:"Administrative Access"})," disabled, Rancher Desktop will no longer be able to create the Docker socket in the default location at ",(0,r.jsx)(n.code,{children:"/var/run/docker.sock"}),". Instead, the application will create a ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/context/working-with-contexts/",children:(0,r.jsx)(n.code,{children:"docker context"})})," called ",(0,r.jsx)(n.code,{children:"rancher-desktop"})," and switch to it automatically. Please be aware of this in the event you are running software that expects the default location and may not know about ",(0,r.jsx)(n.code,{children:"docker contexts"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);