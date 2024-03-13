"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[52609],{40457:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var r=t(85893),a=t(11151),s=t(74866),i=t(85162),o=t(93687);const l={sidebar_label:"Container Engine",title:"Container Engine"},c=void 0,d={id:"ui/preferences/container-engine",title:"Container Engine",description:"General",source:"@site/versioned_docs/version-latest/ui/preferences/container-engine.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/container-engine",permalink:"/ui/preferences/container-engine",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/preferences/container-engine.md",tags:[],version:"latest",frontMatter:{sidebar_label:"Container Engine",title:"Container Engine"}},u={},h=[{value:"General",id:"general",level:3},{value:"Container Engine",id:"container-engine",level:4},{value:"Allowed Images",id:"allowed-images",level:3},{value:"Allowed image patterns",id:"allowed-image-patterns",level:4},{value:"How to specify Allowed Image patterns",id:"how-to-specify-allowed-image-patterns",level:5},{value:"Examples",id:"examples",level:4}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,r.jsxs)(n.p,{children:["Set the ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/",children:"container runtime"})," for Rancher Desktop. Users have the option of ",(0,r.jsx)(n.a,{href:"https://containerd.io/",children:"containerd"})," which provides namespaces for containers and the use of nerdctl or ",(0,r.jsx)(n.a,{href:"https://mobyproject.org/",children:"dockerd (moby)"})," which enables the Docker API and the use of the Docker CLI. Only one container runtime will function at a time."]}),"\n",(0,r.jsxs)(s.Z,{groupId:"os",defaultValue:o.Z.defaultOs,children:[(0,r.jsx)(i.Z,{value:"Windows",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Windows_containerEngine_tabGeneral.png",alt:""})})}),(0,r.jsx)(i.Z,{value:"macOS",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.12/preferences/macOS_containerEngine_tabGeneral.png",alt:""})})}),(0,r.jsx)(i.Z,{value:"Linux",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Linux_containerEngine_tabGeneral.png",alt:""})})})]}),"\n",(0,r.jsx)(n.h4,{id:"container-engine",children:"Container Engine"}),"\n",(0,r.jsx)(n.p,{children:"When switching to a different container runtime: Workloads and images that have been built or pulled using the current container runtime are not available on the container runtime being switched to."}),"\n",(0,r.jsx)(n.h3,{id:"allowed-images",children:"Allowed Images"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Allowed Images"})," tab lets you control which registry artifacts you can access within Rancher Desktop. For example, you may want to pull container images only from your organization's private registry or only from your department-specific namespace in your organization's registry, etc. You can specify image name patterns to allow accessing images only from specific registries and/or repositories."]}),"\n",(0,r.jsxs)(s.Z,{groupId:"os",children:[(0,r.jsx)(i.Z,{value:"Windows",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Windows_containerEngine_tabAllowedImages.png",alt:""})})}),(0,r.jsx)(i.Z,{value:"macOS",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/macOS_containerEngine_tabAllowedImages.png",alt:""})})}),(0,r.jsx)(i.Z,{value:"Linux",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Linux_containerEngine_tabAllowedImages.png",alt:""})})})]}),"\n",(0,r.jsx)(n.h4,{id:"allowed-image-patterns",children:"Allowed image patterns"}),"\n",(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)(n.strong,{children:"Enable"})," checkbox to enable Rancher Desktop to apply the specified patterns while pulling or pushing images, which means only images whose names match at least one of the specified patterns will be allowed."]}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.strong,{children:"+"})," and ",(0,r.jsx)(n.strong,{children:"-"})," buttons to add/remove image name patterns."]}),"\n",(0,r.jsx)(n.h5,{id:"how-to-specify-allowed-image-patterns",children:"How to specify Allowed Image patterns"}),"\n",(0,r.jsxs)(n.p,{children:["You can specify Allowed Image patterns using the format ",(0,r.jsx)(n.code,{children:"[registry/][:port/][organization/]repository[:tag]"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"If not specified in an Allowed Image pattern,"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"registry"})," defaults to Docker Hub (",(0,r.jsx)(n.code,{children:"docker.io"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"port"})," defaults to 443."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"organization"})," for Docker Hub defaults to ",(0,r.jsx)(n.code,{children:"library"}),", and does not apply to other registries."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tag"})," defaults to anything and ",(0,r.jsx)(n.strong,{children:"not"})," just to ",(0,r.jsx)(n.code,{children:"latest"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Filtering by ",(0,r.jsx)(n.code,{children:"tag"})," does not actually work; the corresponding digests (",(0,r.jsx)(n.code,{children:"repository@digest"}),") will have to be added to the allow list as well, making this impractical. Please file a Github issue if you have a use-case that requires filtering based on tags!"]}),"\n",(0,r.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Pattern"}),(0,r.jsx)(n.th,{children:"Meaning"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"busybox"})}),(0,r.jsxs)(n.td,{children:["Allow the ",(0,r.jsx)(n.code,{children:"busybox"})," repository in the ",(0,r.jsx)(n.code,{children:"library"})," organization of the ",(0,r.jsx)(n.code,{children:"docker.io"})," registry."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"suse/"})}),(0,r.jsxs)(n.td,{children:["Allow any image in the ",(0,r.jsx)(n.code,{children:"suse"})," organization of the ",(0,r.jsx)(n.code,{children:"docker.io"})," registry. ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.strong,{children:"Note:"})," A trailing slash at the end of the repository means a single segment follows, e.g. ",(0,r.jsx)(n.code,{children:"suse/nginx"}),", but not ",(0,r.jsx)(n.code,{children:"suse/cap/uaa"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"suse//"})}),(0,r.jsxs)(n.td,{children:["Allow any image in the ",(0,r.jsx)(n.code,{children:"suse"})," organization of the ",(0,r.jsx)(n.code,{children:"docker.io"})," registry. ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.strong,{children:"Note:"})," A trailing double slash at the end of the repository means one or more segments follow, e.g. ",(0,r.jsx)(n.code,{children:"suse/cap/uaa"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"registry.internal:5000"})}),(0,r.jsxs)(n.td,{children:["Allow any image from the ",(0,r.jsx)(n.code,{children:"registry.internal:5000"})," registry."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"registry.suse.com/nginx"})}),(0,r.jsxs)(n.td,{children:["Allow the image ",(0,r.jsx)(n.code,{children:"nginx"})," from the ",(0,r.jsx)(n.code,{children:"registry.suse.com"})," registry. ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.strong,{children:"Note:"})," Non-DockerHub registries do not have the concept of organizations at the top level, so no default ",(0,r.jsx)(n.code,{children:"library"})," organization is implied."]})]})]})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},93687:function(e,n,t){var r=t(10412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=a?"ios":"android",o=a?"macOS":s?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,n,t){t.d(n,{Z:function(){return i}});t(67294);var r=t(36905),a={tabItem:"tabItem_Ymn6"},s=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(67294),a=t(36905),s=t(12466),i=t(16550),o=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=g({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(72389),x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=t(85893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);