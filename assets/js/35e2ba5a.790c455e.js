"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[89470],{25864:function(e,r,i){i.r(r),i.d(r,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var t=i(85893),n=i(11151),s=i(93687);const a={title:"Mirroring Private Registries"},o=void 0,c={id:"how-to-guides/mirror-private-registry",title:"Mirroring Private Registries",description:"Rancher Desktop can be configured to mirror private registries using either container runtime (containerd or dockerd) via provisioning scripts or updating the registry file used by k3s. Please see the k3s documentation for further information on private registry configuration.",source:"@site/versioned_docs/version-latest/how-to-guides/mirror-private-registry.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/mirror-private-registry",permalink:"/how-to-guides/mirror-private-registry",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/mirror-private-registry.md",tags:[],version:"latest",frontMatter:{title:"Mirroring Private Registries"},sidebar:"tutorialSidebar",previous:{title:"Using Testcontainers on Rancher Desktop",permalink:"/how-to-guides/using-testcontainers"},next:{title:"Architecture",permalink:"/references/architecture"}},l={},d=[];function p(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Head:i,TabItem:a,Tabs:o}=r;return i||u("Head",!0),a||u("TabItem",!0),o||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/mirror-private-registry"})}),"\n",(0,t.jsxs)(r.p,{children:["Rancher Desktop can be configured to mirror private registries using either container runtime (",(0,t.jsx)(r.code,{children:"containerd"})," or ",(0,t.jsx)(r.code,{children:"dockerd"}),") via provisioning scripts or updating the registry file used by ",(0,t.jsx)(r.code,{children:"k3s"}),". Please see the ",(0,t.jsx)(r.code,{children:"k3s"})," documentation for further information on ",(0,t.jsx)(r.a,{href:"https://docs.k3s.io/installation/private-registry",children:"private registry configuration"}),"."]}),"\n",(0,t.jsxs)(o,{groupId:"os",defaultValue:s.Z.defaultOs,children:[(0,t.jsxs)(a,{value:"Linux",children:[(0,t.jsxs)(r.p,{children:["Below is an example ",(0,t.jsx)(r.a,{href:"https://docs.rancherdesktop.io/how-to-guides/provisioning-scripts/#macos--linux",children:"provisioning script"})," that can be used to mirror private registries."]}),(0,t.jsxs)(r.p,{children:["Check if you have the ",(0,t.jsx)(r.code,{children:"override.yaml"})," file in the path below, otherwise you can create the file in the path with the suggested provisioning commands."]}),(0,t.jsxs)(r.p,{children:["Override File Path:\n",(0,t.jsx)(r.code,{children:"$HOME/.local/share/rancher-desktop/lima/_config/override.yaml"})]}),(0,t.jsx)(r.p,{children:"Example Script:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'provision:\n  - mode: system\n    script: |\n      #!/bin/sh\n      set -eux\n      mkdir -p /etc/rancher/k3s\n      cat <<EOF >/etc/rancher/k3s/registries.yaml\n      mirrors:\n        "<my.private.registry>:5000":\n          endpoint:\n          - http://<my.private.registry>:5000\n      EOF\n'})}),(0,t.jsxs)(r.p,{children:["After restarting the applicaition, you can verify the script being applied using the ",(0,t.jsx)(r.code,{children:"rdctl shell"})," command below:"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"rdctl shell -- cat /etc/rancher/k3s/registries.yaml\n"})})]}),(0,t.jsxs)(a,{value:"macOS",children:[(0,t.jsxs)(r.p,{children:["Below is an example ",(0,t.jsx)(r.a,{href:"https://docs.rancherdesktop.io/how-to-guides/provisioning-scripts/#macos--linux",children:"provisioning script"})," that can be used to mirror private registries."]}),(0,t.jsxs)(r.p,{children:["Check if you have the ",(0,t.jsx)(r.code,{children:"override.yaml"})," file in the path below, otherwise you can create the file in the path with the suggested provisioning commands."]}),(0,t.jsxs)(r.p,{children:["Override File Path:\n",(0,t.jsx)(r.code,{children:"$HOME/Library/Application Support/rancher-desktop/lima/_config/override.yaml"})]}),(0,t.jsx)(r.p,{children:"Example Script:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'provision:\n  - mode: system\n    script: |\n      #!/bin/sh\n      set -eux\n      mkdir -p /etc/rancher/k3s\n      cat <<EOF >/etc/rancher/k3s/registries.yaml\n      mirrors:\n        "<my.private.registry>:5000":\n          endpoint:\n          - http://<my.private.registry>:5000\n      EOF\n'})}),(0,t.jsxs)(r.p,{children:["After restarting the applicaition, you can verify the script being applied using the ",(0,t.jsx)(r.code,{children:"rdctl shell"})," command below:"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"rdctl shell -- cat /etc/rancher/k3s/registries.yaml\n"})})]}),(0,t.jsxs)(a,{value:"Windows",children:[(0,t.jsxs)(r.p,{children:["Ensure that you have initialized the application with a first run in order to create the ",(0,t.jsx)(r.code,{children:"\\provisioning\\"})," directory. Once created, ",(0,t.jsx)(r.a,{href:"https://docs.rancherdesktop.io/how-to-guides/provisioning-scripts/#windows",children:"provisioning scripts"})," can be utilized to mirror private registries using a ",(0,t.jsx)(r.code,{children:".start"})," file."]}),(0,t.jsx)(r.p,{children:"The file path and example provisioning script are provided below. After you have created the file with the appropriate configuration, restart the Rancher Desktop application for the provisioning script to take effect."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:".start"})," File Path:\n",(0,t.jsx)(r.code,{children:"$HOME\\AppData\\Roaming\\rancher-desktop\\provisioning\\mirror-registry.start"})]}),(0,t.jsx)(r.p,{children:"Example Script:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'#!/bin/sh\n\nset -eux\n\nmkdir -p /etc/rancher/k3s\n\ncat <<EOF >/etc/rancher/k3s/registries.yaml\nmirrors:\n  "localhost:5000":\n  endpoint:\n    - http://localhost:5000\nEOF\n'})}),(0,t.jsxs)(r.p,{children:["Verify using the ",(0,t.jsx)(r.code,{children:"rdctl shell"})," command below that the script is applied:"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"rdctl shell -- cat /etc/rancher/k3s/registries.yaml\n"})})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}function u(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,r,i){var t=i(10412);const n=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),a=n?"ios":"android",o=n?"macOS":s?"Windows":"Linux";r.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:a,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,r,i){i.d(r,{Z:function(){return o},a:function(){return a}});var t=i(67294);const n={},s=t.createContext(n);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);