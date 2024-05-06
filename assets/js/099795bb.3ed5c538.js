"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[75415],{3069:function(e,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var s=a(85893),t=a(11151),r=a(93687);const i={title:"Using the Traefik Ingress Controller"},o=void 0,l={id:"how-to-guides/traefik-ingress-example",title:"Using the Traefik Ingress Controller",description:"Rancher Desktop uses K3s under the hood, which in turn uses Traefik as the default Ingress controller for your Kubernetes cluster. As an example, the below steps outline creating simple services that can be routed by the Ingress object.",source:"@site/versioned_docs/version-latest/how-to-guides/traefik-ingress-example.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/traefik-ingress-example",permalink:"/how-to-guides/traefik-ingress-example",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/traefik-ingress-example.md",tags:[],version:"latest",frontMatter:{title:"Using the Traefik Ingress Controller"},sidebar:"tutorialSidebar",previous:{title:"ODO and Rancher Desktop",permalink:"/how-to-guides/odo-rancher-desktop"},next:{title:"Using Testcontainers on Rancher Desktop",permalink:"/how-to-guides/using-testcontainers"}},c={},d=[{value:"Example Steps: Traefik Ingress Controller",id:"example-steps-traefik-ingress-controller",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Head:a,TabItem:i,Tabs:o}=n;return a||u("Head",!0),i||u("TabItem",!0),o||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/traefik-ingress-example"})}),"\n",(0,s.jsxs)(n.p,{children:["Rancher Desktop uses ",(0,s.jsx)(n.code,{children:"K3s"})," under the hood, which in turn uses ",(0,s.jsx)(n.a,{href:"https://doc.traefik.io/traefik/",children:"Traefik"})," as the ",(0,s.jsx)(n.a,{href:"https://docs.k3s.io/networking#traefik-ingress-controller",children:"default Ingress controller"})," for your Kubernetes cluster. As an example, the below steps outline creating simple services that can be routed by the Ingress object."]}),"\n",(0,s.jsx)(n.h3,{id:"example-steps-traefik-ingress-controller",children:"Example Steps: Traefik Ingress Controller"}),"\n",(0,s.jsxs)(o,{groupId:"os",defaultValue:r.Z.defaultOs,children:[(0,s.jsxs)(i,{value:"Linux",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open a bash session and set the node IP to your localhost address:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"IP=127.0.0.1\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a namespace called demo:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl create ns demo\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"whoami"})," example with basic deployment, service, and Ingress objects defined:"]}),"\n"]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Some Linux distributions don't allow listening to privileged ports by default, please see the documentation on ",(0,s.jsx)(n.a,{href:"/getting-started/installation#traefik-port-binding-access",children:"Traefik port binding access"})," to authorize ports if necessary."]})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat << EOF | kubectl apply -n demo -f -\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: whoami\n  name: whoami\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: whoami\n  template:\n    metadata:\n      labels:\n        app: whoami\n    spec:\n      containers:\n        - image: traefik/whoami:latest\n          name: whoami\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: whoami-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: whoami\n  ports:\n    - port: 80\n---    \napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: whoami-http\n  annotations:\n    traefik.ingress.kubernetes.io/router.entrypoints: web\nspec:\n  rules:\n    - host: whoami.$IP.sslip.io\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: whoami-svc\n                port:\n                  number: 80\nEOF\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Verify the ingress works by calling ",(0,s.jsx)(n.code,{children:"curl"}),":"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl whoami.$IP.sslip.io\nHostname: whoami-6ff6dcfdc8-74mwq\nIP: 127.0.0.1\nIP: ::1\nIP: 10.42.0.42\nIP: fe80::e804:41ff:feac:7eef\nRemoteAddr: 10.42.0.45:35392\nGET / HTTP/1.1\nHost: whoami.127.0.0.1.sslip.io\nUser-Agent: curl/7.64.1\nAccept: */*\nAccept-Encoding: gzip\nX-Forwarded-For: 10.42.0.1\nX-Forwarded-Host: whoami.127.0.0.1.sslip.io\nX-Forwarded-Port: 80\nX-Forwarded-Proto: http\nX-Forwarded-Server: traefik-d497b4cb6-4vkg9\nX-Real-Ip: 10.42.0.1\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Delete the resources:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl delete all,ingress --all -n demo\n"})})]}),(0,s.jsxs)(i,{value:"macOS",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open a bash session and set the node IP to your localhost address:"}),"\n"]}),(0,s.jsxs)(o,{children:[(0,s.jsx)(i,{value:"Default",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"IP=127.0.0.1\n"})})}),(0,s.jsx)(i,{value:"socket-vmnet Enabled",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"IP=`kubectl get node/lima-rancher-desktop -o jsonpath='{.status.addresses[?(@.type==\"ExternalIP\")].address}'`\n"})})})]}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a namespace called demo:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl create ns demo\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"whoami"})," example with basic deployment, service, and Ingress objects defined:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat << EOF | kubectl apply -n demo -f -\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: whoami\n  name: whoami\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: whoami\n  template:\n    metadata:\n      labels:\n        app: whoami\n    spec:\n      containers:\n        - image: traefik/whoami:latest\n          name: whoami\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: whoami-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: whoami\n  ports:\n    - port: 80\n---    \napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: whoami-http\n  annotations:\n    traefik.ingress.kubernetes.io/router.entrypoints: web\nspec:\n  rules:\n    - host: whoami.$IP.sslip.io\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: whoami-svc\n                port:\n                  number: 80\nEOF\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Verify the ingress works by calling ",(0,s.jsx)(n.code,{children:"curl"}),":"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl whoami.$IP.sslip.io\nHostname: whoami-6ff6dcfdc8-74mwq\nIP: 127.0.0.1\nIP: 10.42.0.4\nRemoteAddr: 10.42.0.250:54102\nGET / HTTP/1.1\nHost: whoami.127.0.0.1.sslip.io\nUser-Agent: curl/8.1.1\nAccept: */*\nAccept-Encoding: gzip\nX-Forwarded-For: 10.42.0.246\nX-Forwarded-Host: whoami.127.0.0.1.sslip.io\nX-Forwarded-Port: 80\nX-Forwarded-Proto: http\nX-Forwarded-Server: traefik-64b96ccbcd-26wcv\nX-Real-Ip: 10.42.0.246\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Delete the resources:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl delete all,ingress --all -n demo\n"})})]}),(0,s.jsxs)(i,{value:"Windows",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open a powershell session and set the node IP to your local address:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$IP = (kubectl get node/$env:COMPUTERNAME -o=jsonpath=\"{range .status.addresses[?(@.type == 'InternalIP')]}{.address}{end}\")\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a namespace called demo:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl create ns demo\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"whoami"})," example with basic deployment, service, and Ingress objects defined:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'echo @"\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: whoami\n  name: whoami\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: whoami\n  template:\n    metadata:\n      labels:\n        app: whoami\n    spec:\n      containers:\n        - image: traefik/whoami:latest\n          name: whoami\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: whoami-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: whoami\n  ports:\n    - port: 80\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: whoami-http\n  annotations:\n    traefik.ingress.kubernetes.io/router.entrypoints: web\nspec:\n  rules:\n    - host: whoami.$IP.sslip.io\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: whoami-svc\n                port:\n                  number: 80\n"@ | kubectl apply -n demo -f -\n'})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Verify the ingress works by calling ",(0,s.jsx)(n.code,{children:"curl"}),":"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl whoami.$IP.sslip.io\n"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Delete the resources:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl delete all,ingress --all -n demo\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93687:function(e,n,a){var s=a(10412);const t=!!s.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!s.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=t?"ios":"android",o=t?"macOS":r?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},11151:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return i}});var s=a(67294);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);