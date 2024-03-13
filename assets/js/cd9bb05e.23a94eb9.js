"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[85376],{90833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(85893),s=n(11151),o=n(74866),a=n(85162);const l={title:"Create a Multi-Node Cluster with k3d"},i=void 0,u={id:"how-to-guides/create-multi-node-cluster",title:"Create a Multi-Node Cluster with k3d",description:"Rancher Desktop provides a single cluster with single node setup, which is adequate for most local development scenarios. However, there are use cases where, the ability to create a multi node cluster or spin up multiple clusters with flexibilty to switch between clusters is required. Eventhough Rancher Desktop doesn't have in-built multi node/cluster functionality, you can use k3d with Rancher Desktop to accomplish the same. k3d is a lightweight wrapper to run k3s (a minimal Kubernetes distribution, which is used by Rancher Desktop as well) in docker. k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes.",source:"@site/versioned_docs/version-1.6/how-to-guides/create-multi-node-cluster.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-multi-node-cluster",permalink:"/1.6/how-to-guides/create-multi-node-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.6/how-to-guides/create-multi-node-cluster.md",tags:[],version:"1.6",frontMatter:{title:"Create a Multi-Node Cluster with k3d"},sidebar:"tutorialSidebar",previous:{title:"Hello World Example",permalink:"/1.6/how-to-guides/hello-world-example"},next:{title:"Setup NGINX Ingress Controller",permalink:"/1.6/how-to-guides/setup-NGINX-Ingress-Controller"}},c={},d=[{value:"Steps to spin up a multi-node cluster",id:"steps-to-spin-up-a-multi-node-cluster",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/create-multi-node-cluster"})}),"\n",(0,r.jsxs)(t.p,{children:["Rancher Desktop provides a ",(0,r.jsx)(t.strong,{children:"single cluster with single node"})," setup, which is adequate for most local development scenarios. However, there are use cases where, the ability to create a multi node cluster or spin up multiple clusters with flexibilty to switch between clusters is required. Eventhough Rancher Desktop doesn't have in-built multi node/cluster functionality, you can use ",(0,r.jsx)(t.a,{href:"https://k3d.io",children:"k3d"})," with Rancher Desktop to accomplish the same. k3d is a lightweight wrapper to run k3s (a minimal Kubernetes distribution, which is used by Rancher Desktop as well) in docker. k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes."]}),"\n",(0,r.jsx)(t.h3,{id:"steps-to-spin-up-a-multi-node-cluster",children:"Steps to spin up a multi-node cluster"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Make sure ",(0,r.jsx)(t.strong,{children:"dockerd(moby)"})," is selected as the Container Runtime in the ",(0,r.jsx)(t.strong,{children:"Kubernetes Settings"})," page."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Install k3d."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.Z,{groupId:"installation-approach",children:[(0,r.jsx)(a.Z,{value:"wget",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n"})})}),(0,r.jsx)(a.Z,{value:"curl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n"})})})]}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"k3d cluster create"})," command to spin up multi node clusters. For example:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"k3d cluster create two-node-cluster --agents 2\nk3d cluster create three-node-cluster --agents 3\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["k3d sets the newly created cluster as active. You can switch between clusters via ",(0,r.jsx)(t.code,{children:"kubectl config use-context"})," command. For example:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"kubectl config use-context k3d-two-node-cluster\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To learn more about ",(0,r.jsx)(t.strong,{children:"k3s"})," and ",(0,r.jsx)(t.strong,{children:"k3d"}),", refer to these projects' docs at ",(0,r.jsx)(t.a,{href:"https://docs.k3s.io/",children:"k3s docs"})," and ",(0,r.jsx)(t.a,{href:"https://k3d.io/",children:"k3d docs"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["\u26a0\ufe0f"," Please note that the clusters created by ",(0,r.jsx)(t.code,{children:"k3d"})," are not managed by Rancher Desktop GUI."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return a}});n(67294);var r=n(36905),s={tabItem:"tabItem_Ymn6"},o=n(85893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(67294),s=n(36905),o=n(12466),a=n(16550),l=n(20469),i=n(91980),u=n(67392),c=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=h(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),g=(()=>{const e=u??f;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},k=n(85893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==r&&(u(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=f(e);return(0,k.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,k.jsx)(v,{...e,...t}),(0,k.jsx)(w,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,k.jsx)(x,{...e,children:d(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var r=n(67294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);