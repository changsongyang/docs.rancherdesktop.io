"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[30475],{39999:function(e,l,n){n.r(l),n.d(l,{assets:function(){return a},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return t},metadata:function(){return d},toc:function(){return c}});var o=n(85893),r=n(11151);const t={title:"Hello World Example"},i=void 0,d={id:"how-to-guides/hello-world-example",title:"Hello World Example",description:"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.",source:"@site/docs/how-to-guides/hello-world-example.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/hello-world-example",permalink:"/next/how-to-guides/hello-world-example",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/hello-world-example.md",tags:[],version:"current",frontMatter:{title:"Hello World Example"},sidebar:"tutorialSidebar",previous:{title:"Generating Deployment Profiles",permalink:"/next/how-to-guides/generating-deployment-profiles"},next:{title:"Installing and Uninstalling Rancher Desktop Extensions",permalink:"/next/how-to-guides/installing-uninstalling-extensions"}},a={},c=[{value:"Example#1 - Build Image &amp; Run Container",id:"example1---build-image--run-container",level:3},{value:"Create a folder",id:"create-a-folder",level:4},{value:"Create a blank Dockerfile",id:"create-a-blank-dockerfile",level:4},{value:"Populate the Dockerfile with the command below",id:"populate-the-dockerfile-with-the-command-below",level:4},{value:"Build and run the image for verification purposes",id:"build-and-run-the-image-for-verification-purposes",level:4},{value:"Example#2 - Build Image &amp; Deploy Container to Kubernetes",id:"example2---build-image--deploy-container-to-kubernetes",level:3},{value:"Create a folder and add a sample index.html file as follows",id:"create-a-folder-and-add-a-sample-indexhtml-file-as-follows",level:4},{value:"Create a blank Dockerfile",id:"create-a-blank-dockerfile-1",level:4},{value:"Populate the Dockerfile with the command below",id:"populate-the-dockerfile-with-the-command-below-1",level:4},{value:"Build image from code locally",id:"build-image-from-code-locally",level:4},{value:"Deploy to Kubernetes",id:"deploy-to-kubernetes",level:4},{value:"Delete the pod and the image",id:"delete-the-pod-and-the-image",level:4}];function s(e){const l={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Head:n,TabItem:t,Tabs:i}=l;return n||u("Head",!0),t||u("TabItem",!0),i||u("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/hello-world-example"})}),"\n",(0,o.jsx)(l.p,{children:"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster."}),"\n",(0,o.jsxs)(l.p,{children:["Rancher Desktop works with two container engines, ",(0,o.jsx)(l.a,{href:"https://containerd.io/",children:"containerd"})," and ",(0,o.jsx)(l.a,{href:"https://mobyproject.org/",children:"Moby"}),", the open-sourced components of the Docker ecosystem. For ",(0,o.jsx)(l.code,{children:"nerdctl"}),", use the ",(0,o.jsx)(l.strong,{children:"containerd"})," runtime. For ",(0,o.jsx)(l.code,{children:"docker"}),", use the ",(0,o.jsx)(l.strong,{children:"dockerd(moby)"})," runtime."]}),"\n",(0,o.jsx)(l.h3,{id:"example1---build-image--run-container",children:"Example#1 - Build Image & Run Container"}),"\n",(0,o.jsx)(l.h4,{id:"create-a-folder",children:"Create a folder"}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"mkdir hello-world\ncd hello-world\n"})}),"\n",(0,o.jsx)(l.h4,{id:"create-a-blank-dockerfile",children:"Create a blank Dockerfile"}),"\n",(0,o.jsxs)(l.p,{children:["On Windows, Create a blank file named ",(0,o.jsx)(l.code,{children:"Dockerfile"})]}),"\n",(0,o.jsxs)(l.p,{children:["On Linux, You can use below command to create a blank ",(0,o.jsx)(l.code,{children:"Dockerfile"})]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"vi Dockerfile\n"})}),"\n",(0,o.jsx)(l.h4,{id:"populate-the-dockerfile-with-the-command-below",children:"Populate the Dockerfile with the command below"}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:'FROM alpine  \nCMD ["echo", "Hello World!!"]\n'})}),"\n",(0,o.jsx)(l.h4,{id:"build-and-run-the-image-for-verification-purposes",children:"Build and run the image for verification purposes"}),"\n",(0,o.jsxs)(i,{groupId:"container-runtime",children:[(0,o.jsx)(t,{value:"nerdctl",default:!0,children:(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"nerdctl build --tag helloworld:v1.0 .\nnerdctl images | grep helloworld\nnerdctl run --rm helloworld:v1.0\n# Remove the image\nnerdctl rmi helloworld:v1.0 \n"})})}),(0,o.jsx)(t,{value:"docker",children:(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"docker build --tag helloworld:v1.0 .\ndocker images | grep helloworld\ndocker run --rm helloworld:v1.0\n# Remove the image\ndocker rmi helloworld:v1.0 \n"})})})]}),"\n",(0,o.jsx)(l.h3,{id:"example2---build-image--deploy-container-to-kubernetes",children:"Example#2 - Build Image & Deploy Container to Kubernetes"}),"\n",(0,o.jsxs)(l.p,{children:["Make sure that you switch the ",(0,o.jsx)(l.strong,{children:"Container Runtime"})," setting in the ",(0,o.jsx)(l.strong,{children:"Kubernetes Settings"})," panel to either ",(0,o.jsx)(l.code,{children:"dockerd"})," or ",(0,o.jsx)(l.code,{children:"containerd"})," as needed."]}),"\n",(0,o.jsx)(l.h4,{id:"create-a-folder-and-add-a-sample-indexhtml-file-as-follows",children:"Create a folder and add a sample index.html file as follows"}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:'mkdir nginx\ncd nginx\necho "<h1>Hello World from NGINX!!</h1>" > index.html\n'})}),"\n",(0,o.jsx)(l.h4,{id:"create-a-blank-dockerfile-1",children:"Create a blank Dockerfile"}),"\n",(0,o.jsxs)(l.p,{children:["On Windows, Create a blank file named ",(0,o.jsx)(l.code,{children:"Dockerfile"})]}),"\n",(0,o.jsxs)(l.p,{children:["On Linux, You can use below command to create a blank ",(0,o.jsx)(l.code,{children:"Dockerfile"})]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"vi Dockerfile\n"})}),"\n",(0,o.jsx)(l.h4,{id:"populate-the-dockerfile-with-the-command-below-1",children:"Populate the Dockerfile with the command below"}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"FROM nginx:alpine\nCOPY . /usr/share/nginx/html\n"})}),"\n",(0,o.jsx)(l.h4,{id:"build-image-from-code-locally",children:"Build image from code locally"}),"\n",(0,o.jsxs)(l.p,{children:["\u26a0\ufe0f"," ",(0,o.jsx)(l.strong,{children:"Note:"})," Please note that you need to pass the flag ",(0,o.jsx)(l.code,{children:"--namespace k8s.io"})," to the ",(0,o.jsx)(l.code,{children:"nerdctl"})," build command, so that ",(0,o.jsx)(l.code,{children:"nerdctl"})," builds the image and then makes it available in the ",(0,o.jsx)(l.code,{children:"k8s.io"})," namespace."]}),"\n",(0,o.jsxs)(i,{groupId:"container-runtime",children:[(0,o.jsx)(t,{value:"nerdctl",default:!0,children:(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"nerdctl --namespace k8s.io build --tag nginx-helloworld:latest .\nnerdctl --namespace k8s.io images | grep nginx-helloworld\n"})})}),(0,o.jsx)(t,{value:"docker",children:(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"docker build --tag nginx-helloworld:latest .\ndocker images | grep nginx-helloworld\n"})})})]}),"\n",(0,o.jsx)(l.h4,{id:"deploy-to-kubernetes",children:"Deploy to Kubernetes"}),"\n",(0,o.jsx)(l.p,{children:"Run below command to create and run a pod using the image built in the previous step."}),"\n",(0,o.jsxs)(l.p,{children:["\u26a0\ufe0f"," ",(0,o.jsx)(l.strong,{children:"Note:"})," Please note that you need to pass the flag ",(0,o.jsx)(l.code,{children:"--image-pull-policy=Never"})," to use a local image with ",(0,o.jsx)(l.code,{children:":latest"})," tag, as ",(0,o.jsx)(l.code,{children:":latest"})," tag will always try to pull the images from a remote repository."]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"kubectl run hello-world --image=nginx-helloworld:latest --image-pull-policy=Never --port=80\nkubectl port-forward pods/hello-world 8080:80\n"})}),"\n",(0,o.jsxs)(l.p,{children:["Point your web browser to ",(0,o.jsx)(l.code,{children:"localhost:8080"}),", and you will see the message ",(0,o.jsx)(l.code,{children:"Hello World from NGINX!!"}),". If you prefer to stay on the command line, use ",(0,o.jsx)(l.code,{children:"curl localhost:8080"}),"."]}),"\n",(0,o.jsx)(l.h4,{id:"delete-the-pod-and-the-image",children:"Delete the pod and the image"}),"\n",(0,o.jsxs)(i,{groupId:"container-runtime",children:[(0,o.jsx)(t,{value:"nerdctl",default:!0,children:(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"kubectl delete pod hello-world\n# Remove the image\nnerdctl --namespace k8s.io rmi nginx-helloworld:latest \n"})})}),(0,o.jsx)(t,{value:"docker",children:(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{children:"kubectl delete pod hello-world \n# Remove the image\ndocker rmi nginx-helloworld:latest\n"})})})]})]})}function h(e={}){const{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,o.jsx)(l,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}function u(e,l){throw new Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,l,n){n.d(l,{Z:function(){return d},a:function(){return i}});var o=n(67294);const r={},t=o.createContext(r);function i(e){const l=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:l},e.children)}}}]);