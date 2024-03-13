"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[96194],{25414:function(e,n,s){s.r(n),s.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return c}});var t=s(85893),i=s(11151);s(93687);const a={sidebar_label:"Allowed Images",title:"Allowed Images"},r=void 0,o={id:"ui/preferences/container-engine/allowed-images",title:"Allowed Images",description:"The Allowed Images tab lets you control which registry artifacts you can access within Rancher Desktop. For example, you may want to pull container images only from your organization's private registry or only from your department-specific namespace in your organization's registry, etc. You can specify image name patterns to allow accessing images only from specific registries and/or repositories.",source:"@site/versioned_docs/version-1.13/ui/preferences/container-engine/allowed-images.md",sourceDirName:"ui/preferences/container-engine",slug:"/ui/preferences/container-engine/allowed-images",permalink:"/1.13/ui/preferences/container-engine/allowed-images",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.13/ui/preferences/container-engine/allowed-images.md",tags:[],version:"1.13",frontMatter:{sidebar_label:"Allowed Images",title:"Allowed Images"},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/1.13/ui/preferences/container-engine/general"},next:{title:"Kubernetes",permalink:"/1.13/ui/preferences/kubernetes"}},l={},c=[{value:"Allowed image patterns",id:"allowed-image-patterns",level:4},{value:"How to specify Allowed Image patterns",id:"how-to-specify-allowed-image-patterns",level:5},{value:"Examples",id:"examples",level:4}];function d(e){const n={blockquote:"blockquote",code:"code",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Head:s,TabItem:a,Tabs:r}=n;return s||h("Head",!0),a||h("TabItem",!0),r||h("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/preferences/container-engine/allowed-images"})}),"\n","\n","\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Allowed Images"})," tab lets you control which registry artifacts you can access within Rancher Desktop. For example, you may want to pull container images only from your organization's private registry or only from your department-specific namespace in your organization's registry, etc. You can specify image name patterns to allow accessing images only from specific registries and/or repositories."]}),"\n",(0,t.jsxs)(r,{groupId:"os",children:[(0,t.jsx)(a,{value:"Windows",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/Windows_containerEngine_tabAllowedImages.png",alt:""})})}),(0,t.jsx)(a,{value:"macOS",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/macOS_containerEngine_tabAllowedImages.png",alt:""})})}),(0,t.jsx)(a,{value:"Linux",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/Linux_containerEngine_tabAllowedImages.png",alt:""})})})]}),"\n",(0,t.jsx)(n.h4,{id:"allowed-image-patterns",children:"Allowed image patterns"}),"\n",(0,t.jsxs)(n.p,{children:["Check the ",(0,t.jsx)(n.strong,{children:"Enable"})," checkbox to enable Rancher Desktop to apply the specified patterns while pulling or pushing images, which means only images whose names match at least one of the specified patterns will be allowed."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.strong,{children:"+"})," and ",(0,t.jsx)(n.strong,{children:"-"})," buttons to add/remove image name patterns."]}),"\n",(0,t.jsx)(n.h5,{id:"how-to-specify-allowed-image-patterns",children:"How to specify Allowed Image patterns"}),"\n",(0,t.jsxs)(n.p,{children:["You can specify Allowed Image patterns using the format ",(0,t.jsx)(n.code,{children:"[registry/][:port/][organization/]repository[:tag]"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"If not specified in an Allowed Image pattern,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"registry"})," defaults to Docker Hub (",(0,t.jsx)(n.code,{children:"docker.io"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"port"})," defaults to 443."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"organization"})," for Docker Hub defaults to ",(0,t.jsx)(n.code,{children:"library"}),", and does not apply to other registries."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tag"})," defaults to anything and ",(0,t.jsx)(n.strong,{children:"not"})," just to ",(0,t.jsx)(n.code,{children:"latest"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Filtering by ",(0,t.jsx)(n.code,{children:"tag"})," does not actually work; the corresponding digests (",(0,t.jsx)(n.code,{children:"repository@digest"}),") will have to be added to the allow list as well, making this impractical. Please file a Github issue if you have a use-case that requires filtering based on tags!"]}),"\n",(0,t.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Pattern"}),(0,t.jsx)(n.th,{children:"Meaning"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"busybox"})}),(0,t.jsxs)(n.td,{children:["Allow the ",(0,t.jsx)(n.code,{children:"busybox"})," repository in the ",(0,t.jsx)(n.code,{children:"library"})," organization of the ",(0,t.jsx)(n.code,{children:"docker.io"})," registry."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"suse/"})}),(0,t.jsxs)(n.td,{children:["Allow any image in the ",(0,t.jsx)(n.code,{children:"suse"})," organization of the ",(0,t.jsx)(n.code,{children:"docker.io"})," registry. ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.strong,{children:"Note:"})," A trailing slash at the end of the repository means a single segment follows, e.g. ",(0,t.jsx)(n.code,{children:"suse/nginx"}),", but not ",(0,t.jsx)(n.code,{children:"suse/cap/uaa"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"suse//"})}),(0,t.jsxs)(n.td,{children:["Allow any image in the ",(0,t.jsx)(n.code,{children:"suse"})," organization of the ",(0,t.jsx)(n.code,{children:"docker.io"})," registry. ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.strong,{children:"Note:"})," A trailing double slash at the end of the repository means one or more segments follow, e.g. ",(0,t.jsx)(n.code,{children:"suse/cap/uaa"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"registry.internal:5000"})}),(0,t.jsxs)(n.td,{children:["Allow any image from the ",(0,t.jsx)(n.code,{children:"registry.internal:5000"})," registry."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"registry.suse.com/nginx"})}),(0,t.jsxs)(n.td,{children:["Allow the image ",(0,t.jsx)(n.code,{children:"nginx"})," from the ",(0,t.jsx)(n.code,{children:"registry.suse.com"})," registry. ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.strong,{children:"Note:"})," Non-DockerHub registries do not have the concept of organizations at the top level, so no default ",(0,t.jsx)(n.code,{children:"library"})," organization is implied."]})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,s){var t=s(10412);const i=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",o=i?"macOS":a?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var t=s(67294);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);