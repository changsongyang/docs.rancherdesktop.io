"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[458],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s=r?"ios":"android",i=r?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:s,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},53299:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905)),o=n(93687);const s={title:"Using Testcontainers on Rancher Desktop"},i=void 0,l={unversionedId:"how-to-guides/using-testcontainers",id:"version-latest/how-to-guides/using-testcontainers",title:"Using Testcontainers on Rancher Desktop",description:"Rancher Desktop can be used with Testcontainers to execute ephemeral tests and containers that work inside Docker. This guide demonstrates the use of Testcontainers with a sample repository.",source:"@site/versioned_docs/version-latest/how-to-guides/using-testcontainers.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/using-testcontainers",permalink:"/zh/how-to-guides/using-testcontainers",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/using-testcontainers.md",tags:[],version:"latest",frontMatter:{title:"Using Testcontainers on Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"Using the Traefik Ingress Controller",permalink:"/zh/how-to-guides/traefik-ingress-example"},next:{title:"\u67b6\u6784",permalink:"/zh/references/architecture"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"QEMU",id:"qemu",level:4},{value:"VZ",id:"vz",level:4}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=u("Tabs"),m=u("TabItem"),h={toc:c};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/using-testcontainers"})),(0,r.kt)("p",null,"Rancher Desktop can be used with ",(0,r.kt)("a",{parentName:"p",href:"https://testcontainers.com/"},"Testcontainers")," to execute ephemeral tests and containers that work inside Docker. This guide demonstrates the use of Testcontainers with a sample repository."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testcontainers.com/"},"Testcontainers")," can only be used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"moby (dockerd)")," runtime as it requires a Docker-API compatible container runtime. Kubernetes must be disabled for machines on Apple Silicon. The setting can be disabled via the ",(0,r.kt)("strong",{parentName:"p"},"Preferences > Kubernetes")," dialog, or by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"rdctl")," command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rdctl set --kubernetes-enabled=false\n")),(0,r.kt)("p",null," Please also ensure that ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/install.html"},"Apache Maven")," is installed on your machine in order to make use of the ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/run-maven/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"mvn verify"))," command."),(0,r.kt)(d,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(m,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"You can download a sample test repository in the ",(0,r.kt)("inlineCode",{parentName:"p"},"testcontainers-java-repro")," located here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testcontainers/testcontainers-java-repro"},"https://github.com/testcontainers/testcontainers-java-repro")),(0,r.kt)("p",null,"After the repository is downloaded, please navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"testcontainers-java-repro")," folder and run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn verify"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn verify\n")),(0,r.kt)("p",null,"After the command has been run, you should see a ",(0,r.kt)("inlineCode",{parentName:"p"},"BUILD SUCCESS")," with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors.")),(0,r.kt)(m,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,"You can download a sample test repository in the ",(0,r.kt)("inlineCode",{parentName:"p"},"testcontainers-java-repro")," located here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testcontainers/testcontainers-java-repro"},"https://github.com/testcontainers/testcontainers-java-repro")),(0,r.kt)(d,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(m,{value:"Apple Silicon",mdxType:"TabItem"},(0,r.kt)("p",null,"Currently, workarounds are needed for using Testcontainers on macOS M1 machines. Below are methods for using Testcontainers on either runtime, depending on administrative access."),(0,r.kt)("h4",{id:"qemu"},(0,r.kt)("a",{parentName:"h4",href:"https://docs.rancherdesktop.io/ui/preferences/virtual-machine/emulation#qemu"},"QEMU")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Workaround Summary"),(0,r.kt)("p",null,"This runtime can be used with administrative access enabled which can be set via the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/ui/preferences/application/general"},(0,r.kt)("strong",{parentName:"a"},"Preferences > Application > General"))," dialog. This will ensure that routable IP's are allocated."),(0,r.kt)("p",null,"Next, export the virtual machine port explicitly using the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl shell ip a show rd0 | awk \'/inet / {sub("/.*",""); print $2}\')\n'))),(0,r.kt)("h4",{id:"vz"},(0,r.kt)("a",{parentName:"h4",href:"https://docs.rancherdesktop.io/ui/preferences/virtual-machine/emulation#vz"},"VZ")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Workaround Summary"),(0,r.kt)("p",null,"This runtime can be used with administrative access enabled which can be set via the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/ui/preferences/application/general"},(0,r.kt)("strong",{parentName:"a"},"Preferences > Application > General"))," dialog. This will ensure that routable IP's are allocated."),(0,r.kt)("p",null,"Next, export the virtual machine port explicitly using the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export TESTCONTAINERS_HOST_OVERRIDE=$(rdctl shell ip a show vznat | awk \'/inet / {sub("/.*",""); print $2}\')\n')),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"VZ")," virtual machines, you can also use Testcontainers without the need for administrative access by exporting the settings below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export DOCKER_HOST=unix://$HOME/.rd/docker.sock\nexport TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE=/var/run/docker.sock\nexport TESTCONTAINERS_HOST_OVERRIDE=$(rdctl shell ip a show vznat | awk \'/inet / {sub("/.*",""); print $2}\')\n'))),(0,r.kt)("p",null,"After the respective virtual machine settings have been applied, and the repository is downloaded, please navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"testcontainers-java-repro")," folder and run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn verify"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn verify\n")),(0,r.kt)("p",null,"After the command has been run, you should see a ",(0,r.kt)("inlineCode",{parentName:"p"},"BUILD SUCCESS")," with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors.")),(0,r.kt)(m,{value:"Intel",mdxType:"TabItem"},(0,r.kt)("p",null,"After the repository is downloaded, please navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"testcontainers-java-repro")," folder and run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn verify"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn verify\n")),(0,r.kt)("p",null,"After the command has been run, you should see a ",(0,r.kt)("inlineCode",{parentName:"p"},"BUILD SUCCESS")," with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors.")))),(0,r.kt)(m,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"You can download a sample test repository in the ",(0,r.kt)("inlineCode",{parentName:"p"},"testcontainers-java-repro")," located here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testcontainers/testcontainers-java-repro"},"https://github.com/testcontainers/testcontainers-java-repro")),(0,r.kt)("p",null,"After the repository is downloaded, please navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"testcontainers-java-repro")," folder and run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn verify"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn verify\n")),(0,r.kt)("p",null,"After the command has been run, you should see a ",(0,r.kt)("inlineCode",{parentName:"p"},"BUILD SUCCESS")," with test statistics for failures, number of tests ran, skipped tests, time elapsed, and errors."))))}k.isMDXComponent=!0}}]);