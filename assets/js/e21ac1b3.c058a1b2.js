"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[44247],{16957:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return c}});var s=i(85893),t=i(11151);i(93687);const o={title:"Provisioning Scripts"},r=void 0,a={id:"how-to-guides/provisioning-scripts",title:"Provisioning Scripts",description:"Provisioning scripts can be used to override some of Rancher Desktop's internal processes. For example, scripts can be used to provide certain command line parameters to K3s, add additional mounts, increase ulimit value etc. This guide will explain how to set up your provisioning scripts for macOS, Linux, and Windows.",source:"@site/versioned_docs/version-latest/how-to-guides/provisioning-scripts.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/provisioning-scripts",permalink:"/how-to-guides/provisioning-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/provisioning-scripts.md",tags:[],version:"latest",frontMatter:{title:"Provisioning Scripts"},sidebar:"tutorialSidebar",previous:{title:"Skaffold and Rancher Desktop",permalink:"/how-to-guides/skaffold-and-rancher-desktop"},next:{title:"Increasing Open File Limit",permalink:"/how-to-guides/increasing-open-file-limit"}},l={},c=[{value:"macOS &amp; Linux",id:"macos--linux",level:2},{value:"Windows",id:"windows",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Head:i,TabItem:o,Tabs:r}=n;return i||h("Head",!0),o||h("TabItem",!0),r||h("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/provisioning-scripts"})}),"\n","\n","\n",(0,s.jsx)(n.p,{children:"Provisioning scripts can be used to override some of Rancher Desktop's internal processes. For example, scripts can be used to provide certain command line parameters to K3s, add additional mounts, increase ulimit value etc. This guide will explain how to set up your provisioning scripts for macOS, Linux, and Windows."}),"\n",(0,s.jsx)(n.h2,{id:"macos--linux",children:"macOS & Linux"}),"\n",(0,s.jsx)(n.p,{children:"On macOS and Linux, you can use lima override.yaml to write provisioning scripts."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Run Rancher Desktop at least once to allow it to create the ",(0,s.jsx)(n.code,{children:"_config"})," directory."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Please note that the directory will be deleted during a factory-reset, so ensure a backup for your provisioning scripts in case you need them after a factory-reset."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create ",(0,s.jsx)(n.code,{children:"override.yaml"})," file at below path"]}),"\n"]}),"\n",(0,s.jsxs)(r,{groupId:"os",children:[(0,s.jsx)(o,{value:"macOS",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"})})}),(0,s.jsx)(o,{value:"Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"~/.local/share/rancher-desktop/lima/_config/override.yaml\n"})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Write a provisioning script in the ",(0,s.jsx)(n.code,{children:"override.yaml"})," file created in the previous step. For example, you can use the below script to increase ulimit for containers."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can also use ",(0,s.jsx)(n.code,{children:"override.yaml"})," to override/modify a lima configuration setting, for example, to create additional mounts as shown below."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mounts:\n  - location: /some/path \n    writable: true\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Another example uses the ",(0,s.jsx)(n.code,{children:"override.yaml"})," file to allow users to implement custom settings for ",(0,s.jsx)(n.a,{href:"https://k3s.io/?ref=traefik.io",children:(0,s.jsx)(n.code,{children:"K3s"})})," environments using Rancher Desktop's ",(0,s.jsx)(n.code,{children:"K3S_EXEC"})," syntax (Similar to the ",(0,s.jsx)(n.code,{children:"K3s"})," syntax ",(0,s.jsx)(n.a,{href:"https://docs.k3s.io/reference/env-variables#:~:text=as%20the%20default.-,INSTALL_K3S_EXEC,-Command%20with%20flags",children:(0,s.jsx)(n.code,{children:"INSTALL_K3S_EXEC"})}),"). Please see the ",(0,s.jsx)(n.a,{href:"https://docs.k3s.io/cli/agent",children:"agent"})," and ",(0,s.jsx)(n.a,{href:"https://docs.k3s.io/cli/server",children:"server"})," command line flags documentation for further installation options. Below is an example setting using the ",(0,s.jsx)(n.a,{href:"https://docs.k3s.io/cli/server#:~:text=of%20the%20cluster-,%2D%2Dtls%2Dsan%20value,-N/A",children:(0,s.jsx)(n.code,{children:"--tls-san value"})})," flag to add additional hostnames as Subject Alternative Names on the TLS certification:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"env:\n  K3S_EXEC: --tls-san value\n"})}),"\n",(0,s.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Caution:"})," You can only utilize these provisioning scripts for Rancher Desktop, version 1.1.0 or later, on Windows."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Run Rancher Desktop at least once to allow it to create the configuration ",(0,s.jsx)(n.code,{children:"provisioning"})," directory."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Please note that the directory will be deleted during a factory-reset, so ensure a backup for your provisioning scripts in case you need them after factory-reset."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"%LOCALAPPDATA%\\rancher-desktop\\provisioning"})," directory. An example of the full path: ",(0,s.jsx)(n.code,{children:"C:\\Users\\Joe\\AppData\\Local\\rancher-desktop\\provisioning"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Note that any files with a file extension of ",(0,s.jsx)(n.code,{children:".start"}),", such as ",(0,s.jsx)(n.code,{children:"k3s-overrides.start"}),", can be executed when ",(0,s.jsx)(n.em,{children:"Rancher Desktop starts its Kubernetes backend"})," (if enabled). Such files will run within the Rancher Desktop WSL context."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Example flow for ",(0,s.jsx)(n.code,{children:".start"})," files:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rancher Desktop internal setup"}),"\n",(0,s.jsx)(n.li,{children:"Run provisioning scripts"}),"\n",(0,s.jsxs)(n.li,{children:["Enable ",(0,s.jsx)(n.code,{children:"dockerd"})," or ",(0,s.jsx)(n.code,{children:"containerd"})," in the UI"]}),"\n",(0,s.jsx)(n.li,{children:"Kubernetes (K3s)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["As an example, using ",(0,s.jsx)(n.code,{children:"%LOCALAPPDATA%\\rancher-desktop\\provisioning\\insecure-registry.start"})," will allow ",(0,s.jsx)(n.code,{children:"nerdctl"})," to use insecure registries by default:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"#!/bin/sh\n\nmkdir -p /etc/nerdctl\ncat >  /etc/nerdctl/nerdctl.toml <<EOF\ninsecure_registry = true\nEOF\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Note that files with a file extension of ",(0,s.jsx)(n.code,{children:".stop"}),", such as ",(0,s.jsx)(n.code,{children:"wipe-data.stop"}),", can be executed ",(0,s.jsx)(n.em,{children:"after Rancher Desktop shuts down its Kubernetes backend"})," (if enabled). Such files will run within the same Rancher Desktop WSL context."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Example flow for ",(0,s.jsx)(n.code,{children:".stop"})," files:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Stop ",(0,s.jsx)(n.code,{children:"k3s"}),", ",(0,s.jsx)(n.code,{children:"dockerd"})," or ",(0,s.jsx)(n.code,{children:"containerd"})]}),"\n",(0,s.jsx)(n.li,{children:"Run deprovisioning scripts"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important to note:"})," Scripts need to be saved with Unix line endings; line-ending conversion is not done; and files with DOS line endings may produce unexpected results. There are some limitations to the things you can change using provisioning scripts. For example, you cannot change the hard ulimits on WSL2 using provisioning scripts. Please use provisioning scripts with caution and feel free to reach out to the Rancher Desktop team on Slack/Github if you have a specific question about provisioning scripts."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,i){var s=i(10412);const t=!!s.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!s.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=t?"ios":"android",a=t?"macOS":o?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:a,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return r}});var s=i(67294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);