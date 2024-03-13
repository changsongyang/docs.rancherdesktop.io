"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[67014],{10409:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=i(85893),t=i(11151),o=i(93687);const s={sidebar_label:"Behavior",title:"Behavior"},r=void 0,c={id:"ui/preferences/application/behavior",title:"Behavior",description:"Allows for configuration of application behavior upon startup, background process behavior, and notification icon display.",source:"@site/versioned_docs/version-latest/ui/preferences/application/behavior.md",sourceDirName:"ui/preferences/application",slug:"/ui/preferences/application/behavior",permalink:"/ui/preferences/application/behavior",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/preferences/application/behavior.md",tags:[],version:"latest",frontMatter:{sidebar_label:"Behavior",title:"Behavior"},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/ui/preferences/application/general"},next:{title:"Environment",permalink:"/ui/preferences/application/environment"}},l={},d=[{value:"Startup",id:"startup",level:4},{value:"Background",id:"background",level:4},{value:"Notification Icon",id:"notification-icon",level:4},{value:"Known Issues and Limitations",id:"known-issues-and-limitations",level:4},{value:"Startup",id:"startup-1",level:4},{value:"Background",id:"background-1",level:4},{value:"Notification Icon",id:"notification-icon-1",level:4},{value:"Known Issues and Limitations",id:"known-issues-and-limitations-1",level:4},{value:"Startup",id:"startup-2",level:4},{value:"Background",id:"background-2",level:4},{value:"Notification Icon",id:"notification-icon-2",level:4},{value:"Known Issues and Limitations",id:"known-issues-and-limitations-2",level:4}];function h(e){const n={a:"a",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{Head:i,TabItem:s,Tabs:r}=n;return i||p("Head",!0),s||p("TabItem",!0),r||p("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/preferences/application/behavior"})}),"\n","\n","\n",(0,a.jsx)(n.p,{children:"Allows for configuration of application behavior upon startup, background process behavior, and notification icon display."}),"\n",(0,a.jsxs)(r,{groupId:"os",defaultValue:o.Z.defaultOs,children:[(0,a.jsxs)(s,{value:"Windows",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/Windows_application_tabBehavior.png",alt:""})}),(0,a.jsx)(n.h4,{id:"startup",children:"Startup"}),(0,a.jsx)(n.p,{children:"Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well."}),(0,a.jsx)(n.h4,{id:"background",children:"Background"}),(0,a.jsx)(n.p,{children:"When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the task switcher or task bar. The application window can still be opened via the context menu of the notification icon."}),(0,a.jsx)(n.p,{children:"When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the task switcher and task bar. This can be used to gain access to the background application again when the notification icon is unavailable as well."}),(0,a.jsx)(n.p,{children:"Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the task switcher and task bar), but can be configured to terminate the application as well when the main window is closed."}),(0,a.jsx)(n.h4,{id:"notification-icon",children:"Notification Icon"}),(0,a.jsx)(n.p,{children:"Rancher Desktop shows the application status with a notification icon. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon."}),(0,a.jsx)(n.h4,{id:"known-issues-and-limitations",children:"Known Issues and Limitations"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["For Ubuntu operating systems and specifically versions >= 20.04.5 LTS, there is a known issue with hiding the tray icon in the preferences settings. Please see this ",(0,a.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/4205#issuecomment-1533750167",children:"issue comment"})," for further information."]}),"\n"]})]}),(0,a.jsxs)(s,{value:"macOS",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/macOS_application_tabBehavior.png",alt:""})}),(0,a.jsx)(n.h4,{id:"startup-1",children:"Startup"}),(0,a.jsx)(n.p,{children:"Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well."}),(0,a.jsx)(n.h4,{id:"background-1",children:"Background"}),(0,a.jsx)(n.p,{children:"When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the app switcher or the dock. The application window can still be opened via the context menu of the notification icon in the menu bar."}),(0,a.jsx)(n.p,{children:"When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the app switcher and the dock. This can be used to gain access to the background application again when the notification icon is unavailable as well."}),(0,a.jsx)(n.p,{children:"Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the app switcher and the dock), but can be configured to terminate the application as well when the main window is closed."}),(0,a.jsx)(n.h4,{id:"notification-icon-1",children:"Notification Icon"}),(0,a.jsx)(n.p,{children:"Rancher Desktop shows the application status with a notification icon in the menu bar. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon."}),(0,a.jsx)(n.h4,{id:"known-issues-and-limitations-1",children:"Known Issues and Limitations"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["For Ubuntu operating systems and specifically versions >= 20.04.5 LTS, there is a known issue with hiding the tray icon in the preferences settings. Please see this ",(0,a.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/4205#issuecomment-1533750167",children:"issue comment"})," for further information."]}),"\n"]})]}),(0,a.jsxs)(s,{value:"Linux",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.13/preferences/Linux_application_tabBehavior.png",alt:""})}),(0,a.jsx)(n.h4,{id:"startup-2",children:"Startup"}),(0,a.jsx)(n.p,{children:"Rancher Desktop can automatically be started as part of the user login process. This will take all other behavior settings from the page into account as well."}),(0,a.jsx)(n.h4,{id:"background-2",children:"Background"}),(0,a.jsx)(n.p,{children:"When Rancher Desktop is started in the background, it will not have an application window, nor an entry in the task switcher or task bar. The application window can still be opened via the context menu of the notification icon."}),(0,a.jsx)(n.p,{children:"When Rancher Desktop is launched again while already running in the background then the application window is shown and the application is added to the task switcher and task bar. This can be used to gain access to the background application again when the notification icon is unavailable as well."}),(0,a.jsx)(n.p,{children:"Rancher Desktop normally remains running in the background even when the main application window is closed (and the application therefore removed from the task switcher and task bar), but can be configured to terminate the application as well when the main window is closed."}),(0,a.jsx)(n.h4,{id:"notification-icon-2",children:"Notification Icon"}),(0,a.jsx)(n.p,{children:"Rancher Desktop shows the application status with a notification icon. The context menu of the icon provides more status information and provides quick access to other functionality of the application. This options will disable the creation of the notification icon."}),(0,a.jsx)(n.h4,{id:"known-issues-and-limitations-2",children:"Known Issues and Limitations"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["For Ubuntu operating systems and specifically versions >= 20.04.5 LTS, there is a known issue with hiding the tray icon in the preferences settings. Please see this ",(0,a.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/4205#issuecomment-1533750167",children:"issue comment"})," for further information."]}),"\n"]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,i){var a=i(10412);const t=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s=t?"ios":"android",r=t?"macOS":o?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:r,defaultPackageManager:"npm",defaultPlatform:s,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return s}});var a=i(67294);const t={},o=a.createContext(t);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);