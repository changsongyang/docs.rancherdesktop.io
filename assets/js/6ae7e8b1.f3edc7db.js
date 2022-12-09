"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5378],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(u,".").concat(b)]||p[b]||d[b]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3687:function(e,t,n){var a=n(412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(3117),r=n(7294),l=n(4334),i=n(2389),o=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:b,groupId:f,className:m}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=b??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,u.U)(),[T,O]=(0,r.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==T&&k.some((t=>t.value===e))&&O(e)}const N=e=>{const t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==T&&(E(t),O(a),null!=f&&w(f,String(a)))},K=e=>{var t;let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},m)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:K,onClick:N},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function b(e){const t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},1931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905)),l=n(5488),i=n(5162),o=n(3687);const u={sidebar_label:"Kubernetes",title:"Kubernetes"},s=void 0,c={unversionedId:"ui/preferences/kubernetes",id:"ui/preferences/kubernetes",title:"Kubernetes",description:"Enable Kubernetes",source:"@site/docs/ui/preferences/kubernetes.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/kubernetes",permalink:"/next/ui/preferences/kubernetes",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/kubernetes.md",tags:[],version:"current",frontMatter:{sidebar_label:"Kubernetes",title:"Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"Container engine",permalink:"/next/ui/preferences/container-engine"},next:{title:"Working with Images",permalink:"/next/tutorials/working-with-images"}},d={},p=[{value:"Enable Kubernetes",id:"enable-kubernetes",level:3},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Kubernetes Port",id:"kubernetes-port",level:3},{value:"Enable Traefik",id:"enable-traefik",level:3}],b={toc:p};function f(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"enable-kubernetes"},"Enable Kubernetes"),(0,r.kt)("p",null,"This option allows you to enable or disable Kubernetes. By disabling Kubernetes, you can run just ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerd")," by itself for reduced resource consumption. By default, Kubernetes is enabled."),(0,r.kt)("p",null,"To enable/disable Kubernetes, just check/uncheck the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable Kubernetes")," checkbox. The app will be restarted when you enable/disable Kubernetes. Disabling Kubernetes will not delete existing resources and they will be available again when you enable Kubernetes again."),(0,r.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,r.kt)("p",null,"This option presents a list of Kubernetes versions that your Rancher Desktop instance can use."),(0,r.kt)("p",null,"When upgrading:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A check is performed to see if the target Kubernetes version is available locally. If not, it downloads the files."),(0,r.kt)("li",{parentName:"ul"},"Workloads are retained."),(0,r.kt)("li",{parentName:"ul"},"Images are retained.")),(0,r.kt)("p",null,"When downgrading:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Workloads are removed."),(0,r.kt)("li",{parentName:"ul"},"Images are retained.")),(0,r.kt)("p",null,"To switch versions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Kubernetes version")," drop-down menu."),(0,r.kt)("li",{parentName:"ol"},"Select the version you want to change to.")),(0,r.kt)("h3",{id:"kubernetes-port"},"Kubernetes Port"),(0,r.kt)("p",null,"Set the port Kubernetes is exposed on. Use this setting to avoid port collisions if multiple instances of K3s are running."),(0,r.kt)("h3",{id:"enable-traefik"},"Enable Traefik"),(0,r.kt)("p",null,"This option allows you to enable or disable Traefik. By disabling Traefik, you can free up port 80 and 443 for alternate ingress configuration. By default, Traefik is enabled."),(0,r.kt)("p",null,"Disabling Traefik will not delete existing resources."),(0,r.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(484).Z,width:"764",height:"510"}))),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(640).Z,width:"1760",height:"1248"}))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4355).Z,width:"768",height:"538"})))))}f.isMDXComponent=!0},4355:function(e,t,n){t.Z=n.p+"assets/images/Linux_kubernetes-584b03d1312f07c6ce56f5971c07d77b.png"},484:function(e,t,n){t.Z=n.p+"assets/images/Windows_kubernetes-7ae196a3965a1831e5bbc5d3425623c8.png"},640:function(e,t,n){t.Z=n.p+"assets/images/macOS_kubernetes-f4cf66e6ae025e8be8f642ae7be51afe.png"}}]);