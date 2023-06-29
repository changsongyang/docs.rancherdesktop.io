"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2353],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3687:function(e,t,n){var a=n(412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",i=r?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return O}});var a=n(3117),r=n(7294),o=n(4334),l=n(2466),i=n(6775),u=n(1980),s=n(7392),c=n(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=b({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),m=(()=>{const e=u??d;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var m=n(2389),v="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(d(t),u(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function O(e){const t=(0,m.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},5007:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var a=n(3117),r=(n(7294),n(3905));n(4866),n(5162),n(3687);const o={title:"Introduction",slug:"/"},l=void 0,i={unversionedId:"getting-started/introduction",id:"getting-started/introduction",title:"Introduction",description:"Rancher Desktop is an app that provides container management and Kubernetes on the desktop. It is available for Mac (both on Intel and Apple Silicon), Windows, and Linux.",source:"@site/docs/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/",permalink:"/next/",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/getting-started/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/next/getting-started/installation"}},u={},s=[{value:"Container Management",id:"container-management",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Rancher vs Rancher Desktop",id:"rancher-vs-rancher-desktop",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher Desktop is an app that provides container management and Kubernetes on the desktop. It is available for Mac (both on Intel and Apple Silicon), Windows, and Linux."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/getting-started/introduction_preferences_tabKubernetes.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The above image shows Kubernetes settings on Mac on the left and Windows on the right.")),(0,r.kt)("h2",{id:"container-management"},"Container Management"),(0,r.kt)("p",null,"Rancher Desktop provides the ability to build, push, and pull container images along with the ability to run containers. This is provided by either the Docker CLI (when you choose Moby/dockerd as you engine) or nerdctl (when you choose containerd as your engine). ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"nerdctl"),' is a "Docker-compatible CLI for containerd" provided by the containerd project.'),(0,r.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"Kubernetes is built in to Rancher Desktop. Kubernetes is provided by ",(0,r.kt)("a",{parentName:"p",href:"https://k3s.io/"},"k3s"),", a lightweight certified distribution. With Rancher Desktop you have the ability to ",(0,r.kt)("em",{parentName:"p"},"choose your version of Kubernetes")," and ",(0,r.kt)("em",{parentName:"p"},"reset Kubernetes or Kubernetes and the whole container runtime with the click of a button"),"."),(0,r.kt)("h2",{id:"rancher-vs-rancher-desktop"},"Rancher vs Rancher Desktop"),(0,r.kt)("p",null,"While ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," and Rancher Desktop share the ",(0,r.kt)("em",{parentName:"p"},"Rancher")," name they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop provides a local Kubernetes and container management platform. The two solutions complement each other."),(0,r.kt)("p",null,"If you want to run Rancher on your local system, you can install Rancher into Rancher Desktop."))}d.isMDXComponent=!0}}]);