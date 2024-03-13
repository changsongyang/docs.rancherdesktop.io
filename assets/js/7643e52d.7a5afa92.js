"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[45006],{73436:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var l=r(85893),t=r(11151),o=r(74866),a=r(85162);const i={title:"Hello World Example"},d=void 0,s={id:"how-to-guides/hello-world-example",title:"Hello World Example",description:"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.",source:"@site/versioned_docs/version-1.6/how-to-guides/hello-world-example.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/hello-world-example",permalink:"/1.6/how-to-guides/hello-world-example",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.6/how-to-guides/hello-world-example.md",tags:[],version:"1.6",frontMatter:{title:"Hello World Example"},sidebar:"tutorialSidebar",previous:{title:"Working with Containers",permalink:"/1.6/tutorials/working-with-containers"},next:{title:"Create a Multi-Node Cluster with k3d",permalink:"/1.6/how-to-guides/create-multi-node-cluster"}},c={},u=[{value:"Example#1 - Build Image &amp; Run Container",id:"example1---build-image--run-container",level:3},{value:"Create a folder",id:"create-a-folder",level:4},{value:"Create a blank Dockerfile",id:"create-a-blank-dockerfile",level:4},{value:"Populate the Dockerfile with the command below",id:"populate-the-dockerfile-with-the-command-below",level:4},{value:"Build and run the image for verification purposes",id:"build-and-run-the-image-for-verification-purposes",level:4},{value:"Example#2 - Build Image &amp; Deploy Container to Kubernetes",id:"example2---build-image--deploy-container-to-kubernetes",level:3},{value:"Create a folder and add a sample index.html file as follows",id:"create-a-folder-and-add-a-sample-indexhtml-file-as-follows",level:4},{value:"Create a blank Dockerfile",id:"create-a-blank-dockerfile-1",level:4},{value:"Populate the Dockerfile with the command below",id:"populate-the-dockerfile-with-the-command-below-1",level:4},{value:"Build image from code locally",id:"build-image-from-code-locally",level:4},{value:"Deploy to Kubernetes",id:"deploy-to-kubernetes",level:4},{value:"Delete the pod and the image",id:"delete-the-pod-and-the-image",level:4}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{children:(0,l.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/hello-world-example"})}),"\n",(0,l.jsx)(n.p,{children:"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster."}),"\n",(0,l.jsxs)(n.p,{children:["Rancher Desktop works with two container engines, ",(0,l.jsx)(n.a,{href:"https://containerd.io/",children:"containerd"})," and ",(0,l.jsx)(n.a,{href:"https://mobyproject.org/",children:"Moby"}),", the open-sourced components of the Docker ecosystem. For ",(0,l.jsx)(n.code,{children:"nerdctl"}),", use the ",(0,l.jsx)(n.strong,{children:"containerd"})," runtime. For ",(0,l.jsx)(n.code,{children:"docker"}),", use the ",(0,l.jsx)(n.strong,{children:"dockerd(moby)"})," runtime."]}),"\n",(0,l.jsx)(n.h3,{id:"example1---build-image--run-container",children:"Example#1 - Build Image & Run Container"}),"\n",(0,l.jsx)(n.h4,{id:"create-a-folder",children:"Create a folder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mkdir hello-world\ncd hello-world\n"})}),"\n",(0,l.jsx)(n.h4,{id:"create-a-blank-dockerfile",children:"Create a blank Dockerfile"}),"\n",(0,l.jsxs)(n.p,{children:["On Windows, Create a blank file named ",(0,l.jsx)(n.code,{children:"Dockerfile"})]}),"\n",(0,l.jsxs)(n.p,{children:["On Linux, You can use below command to create a blank ",(0,l.jsx)(n.code,{children:"Dockerfile"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"vi Dockerfile\n"})}),"\n",(0,l.jsx)(n.h4,{id:"populate-the-dockerfile-with-the-command-below",children:"Populate the Dockerfile with the command below"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'FROM alpine  \nCMD ["echo", "Hello World!!"]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"build-and-run-the-image-for-verification-purposes",children:"Build and run the image for verification purposes"}),"\n",(0,l.jsxs)(o.Z,{groupId:"container-runtime",children:[(0,l.jsx)(a.Z,{value:"nerdctl",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"nerdctl build --tag helloworld:v1.0 .\nnerdctl images | grep helloworld\nnerdctl run --rm helloworld:v1.0\n# Remove the image\nnerdctl rmi helloworld:v1.0 \n"})})}),(0,l.jsx)(a.Z,{value:"docker",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"docker build --tag helloworld:v1.0 .\ndocker images | grep helloworld\ndocker run --rm helloworld:v1.0\n# Remove the image\ndocker rmi helloworld:v1.0 \n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"example2---build-image--deploy-container-to-kubernetes",children:"Example#2 - Build Image & Deploy Container to Kubernetes"}),"\n",(0,l.jsxs)(n.p,{children:["Make sure that you switch the ",(0,l.jsx)(n.strong,{children:"Container Runtime"})," setting in the ",(0,l.jsx)(n.strong,{children:"Kubernetes Settings"})," panel to either ",(0,l.jsx)(n.code,{children:"dockerd"})," or ",(0,l.jsx)(n.code,{children:"containerd"})," as needed."]}),"\n",(0,l.jsx)(n.h4,{id:"create-a-folder-and-add-a-sample-indexhtml-file-as-follows",children:"Create a folder and add a sample index.html file as follows"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'mkdir nginx\ncd nginx\necho "<h1>Hello World from NGINX!!</h1>" > index.html\n'})}),"\n",(0,l.jsx)(n.h4,{id:"create-a-blank-dockerfile-1",children:"Create a blank Dockerfile"}),"\n",(0,l.jsxs)(n.p,{children:["On Windows, Create a blank file named ",(0,l.jsx)(n.code,{children:"Dockerfile"})]}),"\n",(0,l.jsxs)(n.p,{children:["On Linux, You can use below command to create a blank ",(0,l.jsx)(n.code,{children:"Dockerfile"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"vi Dockerfile\n"})}),"\n",(0,l.jsx)(n.h4,{id:"populate-the-dockerfile-with-the-command-below-1",children:"Populate the Dockerfile with the command below"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"FROM nginx:alpine\nCOPY . /usr/share/nginx/html\n"})}),"\n",(0,l.jsx)(n.h4,{id:"build-image-from-code-locally",children:"Build image from code locally"}),"\n",(0,l.jsxs)(n.p,{children:["\u26a0\ufe0f"," ",(0,l.jsx)(n.strong,{children:"Note:"})," Please note that you need to pass the flag ",(0,l.jsx)(n.code,{children:"--namespace k8s.io"})," to the ",(0,l.jsx)(n.code,{children:"nerdctl"})," build command, so that ",(0,l.jsx)(n.code,{children:"nerdctl"})," builds the image and then makes it available in the ",(0,l.jsx)(n.code,{children:"k8s.io"})," namespace."]}),"\n",(0,l.jsxs)(o.Z,{groupId:"container-runtime",children:[(0,l.jsx)(a.Z,{value:"nerdctl",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"nerdctl --namespace k8s.io build --tag nginx-helloworld:latest .\nnerdctl --namespace k8s.io images | grep nginx-helloworld\n"})})}),(0,l.jsx)(a.Z,{value:"docker",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"docker build --tag nginx-helloworld:latest .\ndocker images | grep nginx-helloworld\n"})})})]}),"\n",(0,l.jsx)(n.h4,{id:"deploy-to-kubernetes",children:"Deploy to Kubernetes"}),"\n",(0,l.jsx)(n.p,{children:"Run below command to create and run a pod using the image built in the previous step."}),"\n",(0,l.jsxs)(n.p,{children:["\u26a0\ufe0f"," ",(0,l.jsx)(n.strong,{children:"Note:"})," Please note that you need to pass the flag ",(0,l.jsx)(n.code,{children:"--image-pull-policy=Never"})," to use a local image with ",(0,l.jsx)(n.code,{children:":latest"})," tag, as ",(0,l.jsx)(n.code,{children:":latest"})," tag will always try to pull the images from a remote repository."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl run hello-world --image=nginx-helloworld:latest --image-pull-policy=Never --port=80\nkubectl port-forward pods/hello-world 8080:80\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Point your web browser to ",(0,l.jsx)(n.code,{children:"localhost:8080"}),", and you will see the message ",(0,l.jsx)(n.code,{children:"Hello World from NGINX!!"}),". If you prefer to stay on the command line, use ",(0,l.jsx)(n.code,{children:"curl localhost:8080"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"delete-the-pod-and-the-image",children:"Delete the pod and the image"}),"\n",(0,l.jsxs)(o.Z,{groupId:"container-runtime",children:[(0,l.jsx)(a.Z,{value:"nerdctl",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl delete pod hello-world\n# Remove the image\nnerdctl --namespace k8s.io rmi nginx-helloworld:latest \n"})})}),(0,l.jsx)(a.Z,{value:"docker",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl delete pod hello-world \n# Remove the image\ndocker rmi nginx-helloworld:latest\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},85162:function(e,n,r){r.d(n,{Z:function(){return a}});r(67294);var l=r(36905),t={tabItem:"tabItem_Ymn6"},o=r(85893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,l.Z)(t.tabItem,a),hidden:r,children:n})}},74866:function(e,n,r){r.d(n,{Z:function(){return k}});var l=r(67294),t=r(36905),o=r(12466),a=r(16550),i=r(20469),d=r(91980),s=r(67392),c=r(50012);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:t}}=e;return{value:n,label:r,attributes:l,default:t}}))}(r);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(o),(0,l.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=h(e),[a,d]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:o}))),[s,u]=m({queryString:r,groupId:t}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,c.Nk)(r);return[t,(0,l.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),b=(()=>{const e=s??f;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{b&&d(b)}),[b]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=r(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=r(85893);function w(e){let{className:n,block:r,selectedValue:l,selectValue:a,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),t=i[r].value;t!==l&&(s(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...o,className:(0,t.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(w,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function k(e){const n=(0,x.Z)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},11151:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var l=r(67294);const t={},o=l.createContext(t);function a(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);