"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[14175],{19243:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return c}});var t=i(85893),s=i(11151);i(93687);const o={title:"Increasing Open File Limit"},a=void 0,r={id:"how-to-guides/increasing-open-file-limit",title:"Increasing Open File Limit",description:"You may wish to increase the open file limit as Rancher Desktop's default ulimit setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes.",source:"@site/docs/how-to-guides/increasing-open-file-limit.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/increasing-open-file-limit",permalink:"/next/how-to-guides/increasing-open-file-limit",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/increasing-open-file-limit.md",tags:[],version:"current",frontMatter:{title:"Increasing Open File Limit"},sidebar:"tutorialSidebar",previous:{title:"Provisioning Scripts",permalink:"/next/how-to-guides/provisioning-scripts"},next:{title:"Running When Offline",permalink:"/next/how-to-guides/running-air-gapped"}},l={},c=[{value:"macOS &amp; Linux Steps",id:"macos--linux-steps",level:2},{value:"Windows Steps",id:"windows-steps",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Head:i,TabItem:o,Tabs:a}=n;return i||u("Head",!0),o||u("TabItem",!0),a||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/increasing-open-file-limit"})}),"\n","\n","\n",(0,t.jsxs)(n.p,{children:["You may wish to increase the open file limit as Rancher Desktop's default ",(0,t.jsx)(n.code,{children:"ulimit"})," setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes."]}),"\n",(0,t.jsx)(n.h2,{id:"macos--linux-steps",children:"macOS & Linux Steps"}),"\n",(0,t.jsx)(n.p,{children:"First, use lima override.yaml to write the provisioning scripts."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create ",(0,t.jsx)(n.code,{children:"override.yaml"})," file at below path"]}),"\n"]}),"\n",(0,t.jsxs)(a,{groupId:"os",children:[(0,t.jsx)(o,{value:"macOS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"})})}),(0,t.jsx)(o,{value:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"~/.local/share/rancher-desktop/lima/_config/override.yaml\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["You can then use the script below to increase the ",(0,t.jsx)(n.code,{children:"ulimit"})," for containers inside your created ",(0,t.jsx)(n.code,{children:"override.yaml"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If using the Elastic platform, please use the script below to set the ",(0,t.jsx)(n.code,{children:"vm.max_map_count"})," parameter as well."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n    sysctl -w vm.max_map_count=262144\n"})}),"\n",(0,t.jsx)(n.p,{children:"Lastly, please stop and restart Rancher Desktop in order for the updated limits to take effect."}),"\n",(0,t.jsx)(n.h2,{id:"windows-steps",children:"Windows Steps"}),"\n",(0,t.jsx)(n.p,{children:"First, be sure that you have run Rancher Desktop at least once in order for the configurations to initialize."}),"\n",(0,t.jsxs)(n.p,{children:["You can then create a provisioning script, say ",(0,t.jsx)(n.code,{children:"map_count.start"}),", at ",(0,t.jsx)(n.code,{children:"%AppData%\\rancher-desktop\\provisioning"})," with the below code to update the open file limit by increasing the ",(0,t.jsx)(n.code,{children:"max_map_count"})," parameter."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#!/bin/sh\n\nsysctl -w vm.max_map_count=262144\n"})}),"\n",(0,t.jsx)(n.p,{children:"Lastly, please stop and restart Rancher Desktop for these changes to take effect."})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,i){var t=i(10412);const s=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),a=s?"ios":"android",r=s?"macOS":o?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:r,defaultPackageManager:"npm",defaultPlatform:a,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return a}});var t=i(67294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);