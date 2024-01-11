"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9451],{47309:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return c}});var i=t(85893),s=t(11151),l=t(93687);const r={title:"Deployment Profiles"},o=void 0,a={id:"getting-started/deployment",title:"Deployment Profiles",description:"Deployment profiles provide 2 features:",source:"@site/versioned_docs/version-latest/getting-started/deployment.md",sourceDirName:"getting-started",slug:"/getting-started/deployment",permalink:"/getting-started/deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/getting-started/deployment.md",tags:[],version:"latest",frontMatter:{title:"Deployment Profiles"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/getting-started/installation"},next:{title:"General",permalink:"/ui/general"}},d={},c=[{value:"Preferences Values at Startup",id:"preferences-values-at-startup",level:3},{value:"Locked Preference Fields",id:"locked-preference-fields",level:3},{value:"Profile Format and Location",id:"profile-format-and-location",level:3},{value:"Delete existing profiles",id:"delete-existing-profiles",level:4},{value:"By default use the &quot;moby&quot; container engine and disable Kubernetes",id:"by-default-use-the-moby-container-engine-and-disable-kubernetes",level:4},{value:"Lock allowed images list to only allow &quot;busybox&quot; and &quot;nginx&quot;",id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx",level:4},{value:"Verify registry settings",id:"verify-registry-settings",level:4},{value:"Convert all current settings into a deployment profile",id:"convert-all-current-settings-into-a-deployment-profile",level:4},{value:"By default use the &quot;moby&quot; container engine and disable Kubernetes",id:"by-default-use-the-moby-container-engine-and-disable-kubernetes-1",level:4},{value:"Lock allowed images list to only allow &quot;busybox&quot; and &quot;nginx&quot;",id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx-1",level:4},{value:"Verify the plist files",id:"verify-the-plist-files",level:4},{value:"Convert all current settings into a deployment profile",id:"convert-all-current-settings-into-a-deployment-profile-1",level:4},{value:"By default use the &quot;moby&quot; container engine and disable Kubernetes",id:"by-default-use-the-moby-container-engine-and-disable-kubernetes-2",level:4},{value:"Lock allowed images list to only allow &quot;busybox&quot; and &quot;nginx&quot;",id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx-2",level:4},{value:"<code>version</code> Field",id:"version-field",level:3},{value:"Linux",id:"linux",level:4},{value:"macOS",id:"macos",level:4},{value:"Windows",id:"windows",level:4},{value:"Known Issues and Limitations",id:"known-issues-and-limitations",level:3}];function p(e){const n={code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Details:t,Head:r,TabItem:o,Tabs:a}=n;return t||u("Details",!0),r||u("Head",!0),o||u("TabItem",!0),a||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/getting-started/deployment"})}),"\n","\n","\n",(0,i.jsx)(n.p,{children:"Deployment profiles provide 2 features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"Defaults" provide preference values that are applied on first run (or after a factory reset).'}),"\n",(0,i.jsx)(n.li,{children:'"Locked" settings allow an administrator to pin preference values.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'They can be specified both by an "admin" or by the "user". If either the "defaults" or the "locked" settings exists in the "admin" context, then the "user" profile is ignored.'}),"\n",(0,i.jsx)(n.h3,{id:"preferences-values-at-startup",children:"Preferences Values at Startup"}),"\n",(0,i.jsx)(n.p,{children:"Rancher Desktop settings are determined as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Load "admin" deployment profile (both "defaults" and "locked")'}),"\n",(0,i.jsx)(n.li,{children:'If neither of them exist then load "user" deployment profile (again both "defaults" and "locked")'}),"\n",(0,i.jsxs)(n.li,{children:["Load saved preferences from ",(0,i.jsx)(n.code,{children:"settings.json"})," file"]}),"\n",(0,i.jsx)(n.li,{children:'If there are no saved settings, use the "defaults" profile loaded earlier instead'}),"\n",(0,i.jsx)(n.li,{children:"Copy values from command-line arguments used to launch the app into settings"}),"\n",(0,i.jsx)(n.li,{children:"If the settings are still completely empty, show the first-run dialog"}),"\n",(0,i.jsx)(n.li,{children:"Fill any missing values from the builtin application defaults"}),"\n",(0,i.jsx)(n.li,{children:'Copy values from the "locked" profile over the current settings'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The user cannot modify any settings (via GUI or CLI) that have been locked by the profile."}),"\n",(0,i.jsx)(n.p,{children:"Rancher Desktop will refuse to load the application if a profile exists, but cannot be parsed correctly."}),"\n",(0,i.jsx)(n.p,{children:"Deployment profiles will not be modified or removed by Rancher Desktop. They will not be affected by a factory reset or uninstall."}),"\n",(0,i.jsx)(n.p,{children:"The structure of the profile data matches the application settings:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="rdctl list-settings"',children:'{\n  ...\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": false,\n      "patterns": []\n    },\n    "name": "containerd"\n  },\n  ...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The platform-specific documentation below will show how to create a deployment profile that changes the default container engine to ",(0,i.jsx)(n.code,{children:"moby"}),", disables Kubernetes, and locks down the list of allowed images to just ",(0,i.jsx)(n.code,{children:"busybox"})," and ",(0,i.jsx)(n.code,{children:"nginx"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"locked-preference-fields",children:"Locked Preference Fields"}),"\n",(0,i.jsxs)(n.p,{children:["For versions ",(0,i.jsx)(n.code,{children:"1.9"})," and later of Rancher Desktop, all preferences values can be locked when configuring a deployment profile. Depending on the directory or registry used for the lock file creation, users may need to have super user permissions for MacOS/Linux or execute from an admin shell for Windows in order to access priviliged paths. Once pinned, the various locked values will not be accessible from the application as seen in the UI examples below:"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Locked Fields UI Examples"}),(0,i.jsxs)(a,{groupId:"os",defaultValue:l.Z.defaultOs,children:[(0,i.jsxs)(o,{value:"Windows",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Windows_containerEngine_tabAllowedImages_lockedFields.png",alt:""})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Windows_kubernetes_lockedFields.png",alt:""})})]}),(0,i.jsxs)(o,{value:"macOS",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_containerEngine_tabAllowedImages_lockedFields.png",alt:""})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/macOS_kubernetes_lockedFields.png",alt:""})})]}),(0,i.jsxs)(o,{value:"Linux",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Linux_containerEngine_tabAllowedImages_lockedFields.png",alt:""})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/preferences/Linux_kubernetes_lockedFields.png",alt:""})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"profile-format-and-location",children:"Profile Format and Location"}),"\n",(0,i.jsx)(n.p,{children:"Deployment profiles are stored in a platform-specific format and location."}),"\n",(0,i.jsxs)(a,{groupId:"os",defaultValue:l.Z.defaultOs,children:[(0,i.jsxs)(o,{value:"Windows",children:[(0,i.jsx)(n.p,{children:"On Windows the deployment profiles are stored in the registry and can be distributed via group policy."}),(0,i.jsx)(n.p,{children:"The locations for the profiles are:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"HKEY_LOCAL_MACHINE\\Software\\Policies\\Rancher Desktop\\Defaults\nHKEY_LOCAL_MACHINE\\Software\\Policies\\Rancher Desktop\\Locked\nHKEY_CURRENT_USER\\Software\\Policies\\Rancher Desktop\\Defaults\nHKEY_CURRENT_USER\\Software\\Policies\\Rancher Desktop\\Locked\n"})}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"reg"}),' tool can be used to create a profile manually. To create an "admin" profile it will have to be executed from an elevated shell.']}),(0,i.jsxs)(n.p,{children:["Boolean values are stored in ",(0,i.jsx)(n.code,{children:"REG_DWORD"})," format, and lists in ",(0,i.jsx)(n.code,{children:"REG_MULTI_SZ"}),"."]}),(0,i.jsx)(n.h4,{id:"delete-existing-profiles",children:"Delete existing profiles"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'reg delete "HKCU\\Software\\Policies\\Rancher Desktop" /f\n'})}),(0,i.jsx)(n.h4,{id:"by-default-use-the-moby-container-engine-and-disable-kubernetes",children:'By default use the "moby" container engine and disable Kubernetes'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'reg add "HKCU\\Software\\Policies\\Rancher Desktop\\Defaults\\containerEngine" /v name /t REG_SZ -d moby\nreg add "HKCU\\Software\\Policies\\Rancher Desktop\\Defaults\\kubernetes" /v enabled /t REG_DWORD -d 0\n'})}),(0,i.jsx)(n.h4,{id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx",children:'Lock allowed images list to only allow "busybox" and "nginx"'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'reg add "HKCU\\Software\\Policies\\Rancher Desktop\\Locked\\containerEngine\\allowedImages" /v enabled /t REG_DWORD -d 1\nreg add "HKCU\\Software\\Policies\\Rancher Desktop\\Locked\\containerEngine\\allowedImages" /v patterns /t REG_MULTI_SZ -d busybox\\0nginx\n'})}),(0,i.jsx)(n.h4,{id:"verify-registry-settings",children:"Verify registry settings"}),(0,i.jsxs)(n.p,{children:["The profile can be exported into a ",(0,i.jsx)(n.code,{children:"*.reg"})," file"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'C:\\>reg export "HKCU\\Software\\Policies\\Rancher Desktop" rd.reg\nThe operation completed successfully.\n'})}),(0,i.jsxs)(n.p,{children:["This file can be used to distribute the profile to other machines. Note that the ",(0,i.jsx)(n.code,{children:"REG_MULTI_SZ"})," values are encoded in UTF16LE, so are not easily readable:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="HKCU\\Software\\Policies\\Rancher Desktop"',children:'Windows Registry Editor Version 5.00\n\n[HKEY_CURRENT_USER\\Software\\Policies\\Rancher Desktop]\n\n[HKEY_CURRENT_USER\\Software\\Policies\\Rancher Desktop\\Defaults]\n\n[HKEY_CURRENT_USER\\Software\\Policies\\Rancher Desktop\\Defaults\\containerEngine]\n"name"="moby"\n\n[HKEY_CURRENT_USER\\Software\\Policies\\Rancher Desktop\\Defaults\\kubernetes]\n"enabled"=dword:00000000\n\n[HKEY_CURRENT_USER\\Software\\Policies\\Rancher Desktop\\Locked]\n\n[HKEY_CURRENT_USER\\Software\\Policies\\Rancher Desktop\\Locked\\containerEngine]\n\n[HKEY_CURRENT_USER\\Software\\Policies\\Rancher Desktop\\Locked\\containerEngine\\allowedImages]\n"enabled"=dword:00000001\n"patterns"=hex(7):62,00,75,00,73,00,79,00,62,00,6f,00,78,00,00,00,6e,00,67,00,\\\n  69,00,6e,00,78,00,00,00,00,00\n'})})]}),(0,i.jsxs)(o,{value:"macOS",children:[(0,i.jsx)(n.p,{children:"On macOS the deployment profiles are stored as plist files."}),(0,i.jsx)(n.p,{children:"The locations for the profiles are:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n/Library/Preferences/io.rancherdesktop.profile.locked.plist\n~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n~/Library/Preferences/io.rancherdesktop.profile.locked.plist\n"})}),(0,i.jsx)(n.h4,{id:"convert-all-current-settings-into-a-deployment-profile",children:"Convert all current settings into a deployment profile"}),(0,i.jsx)(n.p,{children:"A simple way to turn existing settings into a deployment profile is by converting them from JSON into the plist XML format, and then manually trimming it down in an editor."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"rdctl list-settings | plutil -convert xml1 - -o ~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n"})}),(0,i.jsxs)(n.p,{children:["Alternatively the profile can be created manually, either with an editor, or with the ",(0,i.jsx)(n.code,{children:"plutil"})," tool. The ",(0,i.jsx)(n.code,{children:"defaults"})," utility doesn't work because it cannot create nested keys."]}),(0,i.jsx)(n.h4,{id:"by-default-use-the-moby-container-engine-and-disable-kubernetes-1",children:'By default use the "moby" container engine and disable Kubernetes'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'DEFAULTS=~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\nplutil -create xml1 "$DEFAULTS"\n\nplutil -insert containerEngine -dictionary "$DEFAULTS"\nplutil -insert containerEngine.name -string moby "$DEFAULTS"\n\nplutil -insert kubernetes -dictionary "$DEFAULTS"\nplutil -insert kubernetes.enabled -bool false "$DEFAULTS"\n'})}),(0,i.jsx)(n.h4,{id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx-1",children:'Lock allowed images list to only allow "busybox" and "nginx"'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'LOCKED=~/Library/Preferences/io.rancherdesktop.profile.locked.plist\nplutil -create xml1 "$LOCKED"\n\nplutil -insert containerEngine -dictionary "$LOCKED"\nplutil -insert containerEngine.allowedImages -dictionary "$LOCKED"\nplutil -insert containerEngine.allowedImages.enabled -bool true "$LOCKED"\n\nplutil -insert containerEngine.allowedImages.patterns -array "$LOCKED"\nplutil -insert containerEngine.allowedImages.patterns -string busybox -append "$LOCKED"\nplutil -insert containerEngine.allowedImages.patterns -string nginx -append "$LOCKED"\n'})}),(0,i.jsx)(n.h4,{id:"verify-the-plist-files",children:"Verify the plist files"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="~/Library/Preferences/io.rancherdesktop.profile.defaults.plist"',children:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n\t<key>containerEngine</key>\n\t<dict>\n\t\t<key>name</key>\n\t\t<string>moby</string>\n\t</dict>\n\t<key>kubernetes</key>\n\t<dict>\n\t\t<key>enabled</key>\n\t\t<false/>\n\t</dict>\n</dict>\n</plist>\n'})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="~/Library/Preferences/io.rancherdesktop.profile.locked.plist"',children:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n\t<key>containerEngine</key>\n\t<dict>\n\t\t<key>allowedImages</key>\n\t\t<dict>\n\t\t\t<key>enabled</key>\n\t\t\t<true/>\n\t\t\t<key>patterns</key>\n\t\t\t<array>\n\t\t\t\t<string>busybox</string>\n\t\t\t\t<string>nginx</string>\n\t\t\t</array>\n\t\t</dict>\n\t</dict>\n</dict>\n</plist>\n'})})]}),(0,i.jsxs)(o,{value:"Linux",children:[(0,i.jsx)(n.p,{children:"On Linux the deployment profiles are stored in JSON format."}),(0,i.jsx)(n.p,{children:"The locations for the profiles are:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"/etc/rancher-desktop/defaults.json\n/etc/rancher-desktop/locked.json\n~/.config/rancher-desktop.defaults.json\n~/.config/rancher-desktop.locked.json\n"})}),(0,i.jsx)(n.h4,{id:"convert-all-current-settings-into-a-deployment-profile-1",children:"Convert all current settings into a deployment profile"}),(0,i.jsx)(n.p,{children:"Since deployment profiles are stored in JSON format, the simplest way to create them is by saving the current application settings to the profile location, and then fine-tuning the profile with a text editor."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"rdctl list-settings > ~/.config/rancher-desktop.defaults.json\n"})}),(0,i.jsx)(n.h4,{id:"by-default-use-the-moby-container-engine-and-disable-kubernetes-2",children:'By default use the "moby" container engine and disable Kubernetes'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="~/.config/rancher-desktop.defaults.json"',children:'{\n  "containerEngine": {\n    "name": "moby"\n  },\n  "kubernetes": {\n    "enabled": false\n  }\n}\n'})}),(0,i.jsx)(n.h4,{id:"lock-allowed-images-list-to-only-allow-busybox-and-nginx-2",children:'Lock allowed images list to only allow "busybox" and "nginx"'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="~/.config/rancher-desktop.locked.json"',children:'{\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": true,\n      "patterns": ["busybox","nginx"]\n    }\n  }\n}\n'})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"version-field",children:[(0,i.jsx)(n.code,{children:"version"})," Field"]}),"\n",(0,i.jsxs)(n.p,{children:["Rancher Desktop version 1.12 introduces an explicit deployment profile ",(0,i.jsx)(n.code,{children:"version"})," field in generated profiles using ",(0,i.jsx)(n.code,{children:"rdctl"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are using deployment profiles created in previous Rancher Desktop versions, please either regenerate the file with the latest installation, or explicitly add the ",(0,i.jsx)(n.code,{children:"version"})," field to your existing file. See below for updating instructions for various operating systems:"]}),"\n",(0,i.jsx)(n.h4,{id:"linux",children:"Linux"}),"\n",(0,i.jsx)(n.p,{children:"User deployments are stored in:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"~/.config/rancher-desktop.defaults.json\n~/.config/rancher-desktop.locked.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"XDG_CONFIG_HOME"})," environment variable is set, the user deployments are stored there instead of in ",(0,i.jsx)(n.code,{children:"~/.config/...."}),"."]}),"\n",(0,i.jsx)(n.p,{children:"System deployments are stored in:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"/etc/rancher-desktop/defaults.json\n/etc/rancher-desktop/locked.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then add ",(0,i.jsx)(n.code,{children:'"version": 10'})," at the very start of your JSON-formatted file immediately after the initial open brace ",(0,i.jsx)(n.code,{children:"(})"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"macos",children:"macOS"}),"\n",(0,i.jsx)(n.p,{children:"User deployments are stored in:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"~/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n~/Library/Preferences/io.rancherdesktop.profile.locked.plist\n"})}),"\n",(0,i.jsx)(n.p,{children:"System deployments are stored in:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"/Library/Preferences/io.rancherdesktop.profile.defaults.plist\n/Library/Preferences/io.rancherdesktop.profile.locked.plist\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then add ",(0,i.jsx)(n.code,{children:"<key>Version</key><integer>10</integer>"})," after the initial ",(0,i.jsx)(n.code,{children:"<dict>"})," tag into your respective ",(0,i.jsx)(n.code,{children:".plist"})," file."]}),"\n",(0,i.jsx)(n.h4,{id:"windows",children:"Windows"}),"\n",(0,i.jsx)(n.p,{children:"The Windows deployments are stored in the registry. User deployments are stored at:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"HKEY_CURRENT_USER\\SOFTWARE\\Policies\\Rancher Desktop\\Defaults\nHKEY_CURRENT_USER\\SOFTWARE\\Policies\\Rancher Desktop\\Locked\n"})}),"\n",(0,i.jsx)(n.p,{children:"And the system deployments are stored at:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Rancher Desktop\\Defaults\nHKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Rancher Desktop\\Locked\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then add a ",(0,i.jsx)(n.code,{children:"DWORD"})," value named ",(0,i.jsx)(n.code,{children:"version"}),", with value ",(0,i.jsx)(n.code,{children:"10"})," (hexadecimal a) at the top level of each profile that needs updating."]}),"\n",(0,i.jsx)(n.h3,{id:"known-issues-and-limitations",children:"Known Issues and Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can set default values for ",(0,i.jsx)(n.code,{children:"diagnostics.showMuted"})," (and on Windows ",(0,i.jsx)(n.code,{children:"WSL.integrations"}),") via deployment profile, but currently can't lock them."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,t){var i=t(10412);const s=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=s?"ios":"android",o=s?"macOS":l?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(67294);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);