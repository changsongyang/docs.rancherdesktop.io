"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[69357],{98014:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var s=t(85893),o=t(11151);const r={title:"Generating Deployment Profiles"},i=void 0,l={id:"how-to-guides/generating-deployment-profiles",title:"Generating Deployment Profiles",description:"Deployment Profiles are a way of both providing first-time default settings for Rancher Desktop, and locking down any or all of the application settings. The purpose of this guide is to demonstrate how to create deployment profiles. General information about deployment profiles are further detailed in Getting Started > Deployment Profiles.",source:"@site/versioned_docs/version-1.12/how-to-guides/generating-deployment-profiles.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/generating-deployment-profiles",permalink:"/1.12/how-to-guides/generating-deployment-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.12/how-to-guides/generating-deployment-profiles.md",tags:[],version:"1.12",frontMatter:{title:"Generating Deployment Profiles"},sidebar:"tutorialSidebar",previous:{title:"Using Persistent Storage",permalink:"/1.12/tutorials/using-persistent-storage"},next:{title:"Hello World Example",permalink:"/1.12/how-to-guides/hello-world-example"}},a={},d=[{value:"Where do deployment profiles get installed?",id:"where-do-deployment-profiles-get-installed",level:2},{value:"Linux",id:"linux",level:3},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Generating deployments",id:"generating-deployments",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Crafting JSON deployment files",id:"crafting-json-deployment-files",level:3},{value:"Targeting other systems",id:"targeting-other-systems",level:3},{value:"macOS",id:"macos-1",level:4},{value:"Windows",id:"windows-1",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Running <code>reg.exe</code>",id:"running-regexe",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/hello-world-example"})}),"\n",(0,s.jsxs)(n.p,{children:["Deployment Profiles are a way of both providing first-time default settings for Rancher Desktop, and locking down any or all of the application settings. The purpose of this guide is to demonstrate how to create deployment profiles. General information about deployment profiles are further detailed in ",(0,s.jsx)(n.a,{href:"https://docs.rancherdesktop.io/getting-started/deployment",children:"Getting Started > Deployment Profiles"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If your organization has its own methods of remotely configuring users' systems, it is out of the scope of this document."})}),"\n",(0,s.jsx)(n.h2,{id:"where-do-deployment-profiles-get-installed",children:"Where do deployment profiles get installed?"}),"\n",(0,s.jsx)(n.p,{children:"The profile locations vary for each platform. We'll cover them from the simplest to most complex, and it is worth noting the file generation steps below will refer to these locations:"}),"\n",(0,s.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,s.jsx)(n.p,{children:"User deployments are stored in:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"~/.config/rancher-desktop.defaults.json\n~/.config/rancher-desktop.locked.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"XDG_CONFIG_HOME"})," environment variable is set, the user deployments are stored there instead of in ",(0,s.jsx)(n.code,{children:"~/.config/..."}),"."]}),"\n",(0,s.jsx)(n.p,{children:"System deployments always go in:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"/etc/rancher-desktop/defaults.json\n/etc/rancher-desktop/locked.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As is apparent from the filenames' extensions, they are ",(0,s.jsx)(n.code,{children:"json"})," files."]}),"\n",(0,s.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,s.jsx)(n.p,{children:"User deployments are stored in:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n~/Library/Preferences/io.rancherdesktop.profile.locked.plist\n"})}),"\n",(0,s.jsx)(n.p,{children:"System deployments always go in:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n/Library/Preferences/io.rancherdesktop.profile.locked.plist\n"})}),"\n",(0,s.jsxs)(n.p,{children:["These two lists look similar but differ in permissions. The user-deployments go under the user's home directory, while the system deployments are in the common ",(0,s.jsx)(n.code,{children:"/Library/"})," tree, and cannot be modified by users without root privileges."]}),"\n",(0,s.jsxs)(n.p,{children:["These files are all in a plain-text form of Apple's ",(0,s.jsx)(n.code,{children:"plist"}),' format, an XML-based language. It is possible to manually create these files, and the process is described below in "Generating Deployments".']}),"\n",(0,s.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(n.p,{children:"The Windows deployments are stored in the registry. User deployments are stored at:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"HKEY_CURRENT_USER\\SOFTWARE\\Policies\\Rancher Desktop\\Defaults\nHKEY_CURRENT_USER\\SOFTWARE\\Policies\\Rancher Desktop\\Locked\n"})}),"\n",(0,s.jsx)(n.p,{children:"And the system deployments are stored at:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Rancher Desktop\\Defaults\nHKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Rancher Desktop\\Locked\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The structure of the registry instances follows the structure of the JSON files for the other platforms. The name of a non-leaf node in the JSON structure (a name to the left of a \":\") will appear as a registry key. Leaf nodes appear as key-value pairs in the right-hand pane of a key's view where the key is the field's name. And hash-like objects (like ",(0,s.jsx)(n.code,{children:"WSL.integrations"}),") also appear as key-value pairs, in this case for the key ",(0,s.jsx)(n.code,{children:"...\\WSL\\integrations"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Additionally, if you're coding against the registry, names are always case-insensitive. Feel free to use all lower-case, UPPER-CASE, or spOnGeBoBCasE."}),"\n",(0,s.jsx)(n.h2,{id:"generating-deployments",children:"Generating deployments"}),"\n",(0,s.jsxs)(n.p,{children:["The easiest way to do this is on a system already running Rancher Desktop, mainly for its ",(0,s.jsx)(n.code,{children:"rdctl"})," command-line tool, and the default list of settings."]}),"\n",(0,s.jsx)(n.p,{children:"First, you're going to want to verify that the deployments you create make sense on a working Rancher Desktop, so the rest of this document assumes you'll have access to it. Rancher Desktop runs on air-gapped systems, so if you're creating deployments for security-related reasons, security shouldn't be a concern while creating them."}),"\n",(0,s.jsx)(n.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,s.jsxs)(n.p,{children:["We also assume you've installed the ",(0,s.jsx)(n.code,{children:"jq"})," json tool. If you have a preferred variant, simply substitute it for ",(0,s.jsx)(n.code,{children:"jq"})," in the following text."]}),"\n",(0,s.jsx)(n.h3,{id:"crafting-json-deployment-files",children:"Crafting JSON deployment files"}),"\n",(0,s.jsx)(n.p,{children:"Let's assume you want to create both default-value and locked-value deployment profiles."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you want to start with Rancher Desktop's default values, and don't have your own workloads you need to preserve, you can run ",(0,s.jsx)(n.code,{children:"rdctl factory-reset"})," first."]})}),"\n",(0,s.jsx)(n.p,{children:"Start up Rancher Desktop, and run the following commands in your preferred shell:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"rdctl list-settings | jq . > working-defaults.txt\nrdctl list-settings | jq . > working-locked.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you're only making one type of profile, you'll only need one of the above lines, of course. It also is not necessary to create both a user and system profile for the same type of deployment. If Rancher Desktop sees a system-profile, it won't load the user-profile of the same kind. However, if Rancher Desktop finds, for example, a user-defaults and a system-locked profile, but no system-defaults profile, it will load the user-defaults and system-locked profiles."}),"\n",(0,s.jsxs)(n.p,{children:["Next, you can edit each of the JSON files to contain only the values you care about. You can use the ",(0,s.jsx)(n.code,{children:"jq"})," command to validate the final outputs:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"jq  -e . working-defaults.txt >/dev/null 2>&1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The command will have a 0 status if the file is valid (",(0,s.jsx)(n.code,{children:"True"})," on Powershell), 1 or ",(0,s.jsx)(n.code,{children:"False"})," otherwise."]}),"\n",(0,s.jsx)(n.p,{children:"Here's a sample locked-field JSON file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": true,\n      "patterns": [\n        "PATTERN1",\n        "PATTERN2"\n      ]\n    },\n    "name": "moby"\n  },\n  "kubernetes": {\n    "version": "1.24.10"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,s.jsxs)(n.p,{children:["Users with this locked file will be able to use only ",(0,s.jsx)(n.code,{children:"moby"}),", not ",(0,s.jsx)(n.code,{children:"containerd"}),", and will only be able to pull container images that match the supplied patterns. They will also be constrained to using the specified kubernetes version."]})}),"\n",(0,s.jsx)(n.p,{children:"If you're on a Linux system, you can quickly test these files with the following steps:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Shut down Rancher Desktop\nrdctl factory-reset\ncp working-defaults.txt ~/.config/rancher-desktop.defaults.json\ncp working-locked.txt ~/.config/rancher-desktop.locked.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now bring up Rancher Desktop, and bring up the ",(0,s.jsx)(n.code,{children:"Preferences"})," window. Verify that the fields you entered in the ",(0,s.jsx)(n.code,{children:"locked"})," file have the specified values, appear with a padlock icon in the UI, and can't be changed. Verify that the fields from the ",(0,s.jsx)(n.code,{children:"defaults"})," value appear with the specified values in the UI,\nand can be changed (as expected, if a field appears in both the ",(0,s.jsx)(n.code,{children:"defaults"})," and ",(0,s.jsx)(n.code,{children:"locked"})," deployment profile, the ",(0,s.jsx)(n.code,{children:"locked"})," value takes precedence)."]}),"\n",(0,s.jsx)(n.h3,{id:"targeting-other-systems",children:"Targeting other systems"}),"\n",(0,s.jsxs)(n.p,{children:["If all your users are on Linux systems, you're done, but if not, the rest is straightforward. ",(0,s.jsx)(n.code,{children:"rdctl"})," can take a JSON file and generate a deployment for either macOS or Windows. Windows uses the registry, so we generate ",(0,s.jsx)(n.em,{children:"registry import files"}),", and you can then use the ",(0,s.jsx)(n.code,{children:"reg"})," command in a terminal to install them."]}),"\n",(0,s.jsx)(n.h4,{id:"macos-1",children:"macOS"}),"\n",(0,s.jsx)(n.p,{children:"For macOS, you would run the following commands to generate either system or user deployment files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rdctl create-profile --output plist --input working-defaults.txt > io.rancherdesktop.profile.defaults.plist\nrdctl create-profile --output plist --input working-locked.txt > io.rancherdesktop.profile.locked.plist\n"})}),"\n",(0,s.jsxs)(n.p,{children:["And the ",(0,s.jsx)(n.code,{children:"io.*.plist"})," files just need to be deployed to the users' systems, as described above."]}),"\n",(0,s.jsx)(n.h4,{id:"windows-1",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:['Windows differs from the other platforms. Here you specify the type of profile ("locked" or "defaults") and hive (',(0,s.jsx)(n.code,{children:"HKLM"})," or ",(0,s.jsx)(n.code,{children:"HKCU"}),") on the command-line, and let the ",(0,s.jsx)(n.code,{children:"run.exe"})," command decide which part of the registry to update:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rdctl create-profile --output reg --hive hklm --type defaults working-defaults.txt > reg-system-defaults.txt\nrdctl create-profile --output reg --hive hkcu --type defaults working-defaults.txt > reg-user-defaults.txt\nrdctl create-profile --output reg --hive hklm --type locked working-locked.txt > reg-system-locked.txt\nrdctl create-profile --output reg --hive hkcu --type locked working-locked.txt > reg-user-locked.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"The above commands generate four different files, but as explained before, system takes precedence over user profiles, so there's only need to generate at most two files."}),"\n",(0,s.jsx)(n.p,{children:"You would then deploy the files to the target Windows systems, and in a shell with administrative privileges run the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"reg import FILENAME\n"})}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.p,{children:["System profiles are loaded only when there is no ",(0,s.jsx)(n.code,{children:"settings.json"})," in the config area - so these typically are loaded only on first-run and after a factory-reset."]}),"\n",(0,s.jsxs)(n.p,{children:["Locked profiles are loaded at the start of every run, and take precedence over the values in existing ",(0,s.jsx)(n.code,{children:"settings.json"})," files (which means a crafty user can't shut down Rancher Desktop and manually edit the ",(0,s.jsx)(n.code,{children:"settings.json"})," file to get around the locked-deployment-profile restrictions)."]}),"\n",(0,s.jsxs)(n.h3,{id:"running-regexe",children:["Running ",(0,s.jsx)(n.code,{children:"reg.exe"})]}),"\n",(0,s.jsxs)(n.p,{children:["Running ",(0,s.jsx)(n.code,{children:"reg.exe"})," - registry entries under the ",(0,s.jsx)(n.code,{children:"Policies"})," key can only be loaded with the ",(0,s.jsx)(n.code,{children:"reg import"})," command when the user is running as an administrator."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(67294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);