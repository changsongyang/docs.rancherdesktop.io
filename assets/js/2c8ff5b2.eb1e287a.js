"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[11958],{66756:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return h}});var t=r(85893),s=r(11151),o=r(74866),a=r(85162);r(93687);const i={title:"FAQ"},l=void 0,c={id:"faq",title:"FAQ",description:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop.",source:"@site/versioned_docs/version-latest/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/faq.md",tags:[],version:"latest",frontMatter:{title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Bundled Utilities",permalink:"/references/bundled-utilities"},next:{title:"Troubleshooting Tips",permalink:"/troubleshooting-tips"}},d={},h=[{value:"<strong>Q: Is Rancher Desktop a desktop version of Rancher?</strong>",id:"q-is-rancher-desktop-a-desktop-version-of-rancher",level:4},{value:"<strong>Q: Is there a Kubernetes Cluster Explorer available in Rancher Desktop?</strong>",id:"q-is-there-a-kubernetes-cluster-explorer-available-in-rancher-desktop",level:4},{value:"<strong>Q: Can I have Docker Desktop installed alongside Rancher Desktop?</strong>",id:"q-can-i-have-docker-desktop-installed-alongside-rancher-desktop",level:4},{value:"<strong>Q: How can I perform a clean uninstall of Rancher Desktop?</strong>",id:"q-how-can-i-perform-a-clean-uninstall-of-rancher-desktop",level:4},{value:"<strong>Q: What support, if any, is available for DNS over VPN on Windows?</strong>",id:"q-what-support-if-any-is-available-for-dns-over-vpn-on-windows",level:4},{value:"<strong>Q: What does the &quot;WSL Integration&quot; tab do?</strong>",id:"q-what-does-the-wsl-integration-tab-do",level:4},{value:"<strong>Q: Where can I find detailed logs?</strong>",id:"q-where-can-i-find-detailed-logs",level:4},{value:"<strong>Q: How can I enable the dashboard for the Traefik ingress controller?</strong>",id:"q-how-can-i-enable-the-dashboard-for-the-traefik-ingress-controller",level:4},{value:"Using <code>port-forward</code> to enable dashboard access",id:"using-port-forward-to-enable-dashboard-access",level:5},{value:"Using <code>HelmChartConfig</code> to enable dashboard access",id:"using-helmchartconfig-to-enable-dashboard-access",level:5},{value:"<strong>Q: Can I disable Traefik, and will doing so remove Traefik resources?</strong>",id:"q-can-i-disable-traefik-and-will-doing-so-remove-traefik-resources",level:4},{value:"<strong>Q: Is there support for internal container port forwarding?</strong>",id:"q-is-there-support-for-internal-container-port-forwarding",level:4},{value:"<strong>Q: Does file sharing work similarly to Docker Desktop? Do I have to do any additional configuration to mount volumes to VMs?</strong>",id:"q-does-file-sharing-work-similarly-to-docker-desktop-do-i-have-to-do-any-additional-configuration-to-mount-volumes-to-vms",level:4},{value:"<strong>Q: Can containers reach back to host services via <code>host.docker.internal</code>?</strong>",id:"q-can-containers-reach-back-to-host-services-via-hostdockerinternal",level:4},{value:"<strong>Q: I don&#39;t need the Kubernetes cluster deployed by Rancher Desktop; how do I disable it to save resources?</strong>",id:"q-i-dont-need-the-kubernetes-cluster-deployed-by-rancher-desktop-how-do-i-disable-it-to-save-resources",level:4},{value:"<strong>Q: What&#39;s happening to the Kubernetes Image Manager (kim)?</strong>",id:"q-whats-happening-to-the-kubernetes-image-manager-kim",level:4},{value:"<strong>Q: Running <code>brew install rancher</code> is failing with a <code>It seems there is already a Binary at &#39;/usr/local/bin/&lt;BINARY&gt;&#39;</code> error, why?</strong>",id:"q-running-brew-install-rancher-is-failing-with-a-it-seems-there-is-already-a-binary-at-usrlocalbinbinary-error-why",level:4},{value:"Q: I installed <code>nerdctl</code> through the Arch User Repository, but it doesn&#39;t work with Rancher Desktop, why?",id:"q-i-installed-nerdctl-through-the-arch-user-repository-but-it-doesnt-work-with-rancher-desktop-why",level:4},{value:"<strong>Q: The tools on the Support Utilities page (in Rancher Desktop <code>&lt;1.3.0</code>) are not installed and I see an <code>Insufficient permission to manipulate /usr/local/bin</code> error, how do I fix it?</strong>",id:"q-the-tools-on-the-support-utilities-page-in-rancher-desktop-130-are-not-installed-and-i-see-an-insufficient-permission-to-manipulate-usrlocalbin-error-how-do-i-fix-it",level:4},{value:"<strong>Q: Is Cygwin compatible with Rancher Desktop?</strong>",id:"q-is-cygwin-compatible-with-rancher-desktop",level:4},{value:"<strong>Q: Where does Rancher Desktop actually put the data volumes?</strong>",id:"q-where-does-rancher-desktop-actually-put-the-data-volumes",level:4},{value:"<strong>Q: How can I downgrade Rancher Desktop to a non-current (older) release version</strong>",id:"q-how-can-i-downgrade-rancher-desktop-to-a-non-current-older-release-version",level:4},{value:"Q: Rancher Desktop becomes unresponsive after my Windows machine wakes up from hibernation. How can I get my Rancher Desktop session working again with out having to reboot my machine?",id:"q-rancher-desktop-becomes-unresponsive-after-my-windows-machine-wakes-up-from-hibernation-how-can-i-get-my-rancher-desktop-session-working-again-with-out-having-to-reboot-my-machine",level:4},{value:"<strong>Q: What is <code>rancher-desktop-data</code> and why is it in a stopped state?</strong>",id:"q-what-is-rancher-desktop-data-and-why-is-it-in-a-stopped-state",level:4}];function u(e){const n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/faq"})}),"\n",(0,t.jsx)(n.p,{children:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop."}),"\n",(0,t.jsx)(n.h4,{id:"q-is-rancher-desktop-a-desktop-version-of-rancher",children:(0,t.jsx)(n.strong,{children:"Q: Is Rancher Desktop a desktop version of Rancher?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," No. Rancher Desktop is not Rancher on the Desktop."]}),"\n",(0,t.jsxs)(n.p,{children:["While ",(0,t.jsx)(n.a,{href:"https://rancher.com/",children:"Rancher"})," and ",(0,t.jsx)(n.a,{href:"https://rancherdesktop.io/",children:"Rancher Desktop"})," share the ",(0,t.jsx)(n.em,{children:"Rancher"})," name, they do different things. But, the two solutions do complement each other:"]}),"\n",(0,t.jsx)(n.p,{children:"Rancher is a complete software stack for managing multiple Kubernetes clusters across any infrastructure."}),"\n",(0,t.jsx)(n.p,{children:"Rancher Desktop provides container management and a Kubernetes instance on the desktop to support local development use cases."}),"\n",(0,t.jsx)(n.h4,{id:"q-is-there-a-kubernetes-cluster-explorer-available-in-rancher-desktop",children:(0,t.jsx)(n.strong,{children:"Q: Is there a Kubernetes Cluster Explorer available in Rancher Desktop?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," Yes, the Rancher Dashboard is included as a feature preview in the release 1.2.1. Invoke the dashboard by clicking on ",(0,t.jsx)(n.strong,{children:"Dashboard"})," option in the system tray menu."]}),"\n",(0,t.jsxs)(n.p,{children:["Learn more about ",(0,t.jsx)(n.a,{href:"https://docs.rancherdesktop.io/",children:"Rancher Desktop"}),".\nLearn more about ",(0,t.jsx)(n.a,{href:"https://rancher.com/why-rancher",children:"Rancher"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"q-can-i-have-docker-desktop-installed-alongside-rancher-desktop",children:(0,t.jsx)(n.strong,{children:"Q: Can I have Docker Desktop installed alongside Rancher Desktop?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," Yes, but they cannot be run at the same time as both Rancher Desktop and Docker Desktop use the same Docker socket (",(0,t.jsx)(n.code,{children:"/var/run/docker.sock"}),"). Be sure to stop one before starting the other."]}),"\n",(0,t.jsx)(n.h4,{id:"q-how-can-i-perform-a-clean-uninstall-of-rancher-desktop",children:(0,t.jsx)(n.strong,{children:"Q: How can I perform a clean uninstall of Rancher Desktop?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," First, perform a ",(0,t.jsx)(n.a,{href:"/ui/troubleshooting#factory-reset",children:"Factory Reset"}),", and then uninstall the app. The uninstall process varies based on the operating system. For more information, please refer ",(0,t.jsx)(n.a,{href:"/getting-started/installation",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"q-what-support-if-any-is-available-for-dns-over-vpn-on-windows",children:(0,t.jsx)(n.strong,{children:"Q: What support, if any, is available for DNS over VPN on Windows?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," An alternative DNS resolver for Windows has been implemented to address some of the VPN issues on Windows. It should support DNS lookup over VPN connections. It has to be enabled manually by editing an internal ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1899#issuecomment-1109128277",children:"configuration file"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"q-what-does-the-wsl-integration-tab-do",children:(0,t.jsx)(n.strong,{children:'Q: What does the "WSL Integration" tab do?'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," This makes the Kubernetes configuration accessible in the displayed WSL distributions so that you can use commands such as ",(0,t.jsx)(n.code,{children:"kubectl"})," to communicate with Kubernetes."]}),"\n",(0,t.jsx)(n.h4,{id:"q-where-can-i-find-detailed-logs",children:(0,t.jsx)(n.strong,{children:"Q: Where can I find detailed logs?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," Click on the ",(0,t.jsx)(n.strong,{children:"Troubleshooting"})," tab, then click on ",(0,t.jsx)(n.strong,{children:"Show Logs"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"q-how-can-i-enable-the-dashboard-for-the-traefik-ingress-controller",children:(0,t.jsx)(n.strong,{children:"Q: How can I enable the dashboard for the Traefik ingress controller?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," For security reasons, the Traefik dashboard is not exposed by default. However, it is possible to expose the dashboard in multiple ways. For instance, you can use one of the two approaches shown below."]}),"\n",(0,t.jsxs)(n.h5,{id:"using-port-forward-to-enable-dashboard-access",children:["Using ",(0,t.jsx)(n.code,{children:"port-forward"})," to enable dashboard access"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'kubectl port-forward -n kube-system $(kubectl -n kube-system get pods --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Visit ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:9000/dashboard/",children:"http://127.0.0.1:9000/dashboard/"})," in your browser to view the Traefik dashboard."]}),"\n",(0,t.jsxs)(n.h5,{id:"using-helmchartconfig-to-enable-dashboard-access",children:["Using ",(0,t.jsx)(n.code,{children:"HelmChartConfig"})," to enable dashboard access"]}),"\n",(0,t.jsxs)(n.p,{children:["Copy the instructions below into a file, for example, ",(0,t.jsx)(n.code,{children:"expose-traefik.yaml"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    dashboard:\n      enabled: true\n    ports:\n      traefik:\n        expose: true # Avoid this in production deployments\n    logs:\n      access:\n        enabled: true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run the command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl apply -f expose-traefik.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Visit ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:9000/dashboard/",children:"http://127.0.0.1:9000/dashboard/"})," in your browser to view the Traefik dashboard."]}),"\n",(0,t.jsx)(n.h4,{id:"q-can-i-disable-traefik-and-will-doing-so-remove-traefik-resources",children:(0,t.jsx)(n.strong,{children:"Q: Can I disable Traefik, and will doing so remove Traefik resources?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," Yes, you can disable Traefik in order to free up port 80 and 443 for alternate ingress configuration. Disabling Traefik will ",(0,t.jsx)(n.em,{children:"not"})," delete existing resources. By default, the ",(0,t.jsx)(n.code,{children:"Enable Traefik"})," feature is selected under ",(0,t.jsx)(n.strong,{children:"Kubernetes Settings"}),"; uncheck this box to disable it."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to delete Traefik resources, click on ",(0,t.jsx)(n.code,{children:"Reset Kubernetes"})," on the ",(0,t.jsx)(n.strong,{children:"Kubernetes Settings"})," panel of the UI."]}),"\n",(0,t.jsx)(n.h4,{id:"q-is-there-support-for-internal-container-port-forwarding",children:(0,t.jsx)(n.strong,{children:"Q: Is there support for internal container port forwarding?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," Yes, support for this feature is available on all three platforms, Windows, Linux, and macOS, as of ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/releases/tag/v1.1.0",children:"v1.1.0"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"q-does-file-sharing-work-similarly-to-docker-desktop-do-i-have-to-do-any-additional-configuration-to-mount-volumes-to-vms",children:(0,t.jsx)(n.strong,{children:"Q: Does file sharing work similarly to Docker Desktop? Do I have to do any additional configuration to mount volumes to VMs?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," Currently, the following directories are shared by default: ",(0,t.jsx)(n.code,{children:"/Users/$USER"})," on macOS, ",(0,t.jsx)(n.code,{children:"/home/$USER"})," on Linux, and ",(0,t.jsx)(n.code,{children:"/tmp/rancher-desktop"})," on both. For Windows, all files are automatically shared via WSL2."]}),"\n",(0,t.jsx)(n.p,{children:"Standard Docker volumes that are not generally accessible from the host computer work out of the box."}),"\n",(0,t.jsx)(n.p,{children:"To access other directories on Linux/macOS, you will have to perform additional configuration."}),"\n",(0,t.jsxs)(n.p,{children:["If you want to change the behavior of the mounts, that will also require ",(0,t.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1209#issuecomment-1370181132",children:"additional configuration"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"q-can-containers-reach-back-to-host-services-via-hostdockerinternal",children:(0,t.jsxs)(n.strong,{children:["Q: Can containers reach back to host services via ",(0,t.jsx)(n.code,{children:"host.docker.internal"}),"?"]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," Yes. On Windows, you may need to create a firewall rule to allow communication between the host and the container. You can run below command in a privileged powershell to create the firewall rule."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'New-NetFirewallRule -DisplayName "WSL" -Direction Inbound -InterfaceAlias "vEthernet (WSL)" -Action Allow\n'})}),"\n",(0,t.jsx)(n.h4,{id:"q-i-dont-need-the-kubernetes-cluster-deployed-by-rancher-desktop-how-do-i-disable-it-to-save-resources",children:(0,t.jsx)(n.strong,{children:"Q: I don't need the Kubernetes cluster deployed by Rancher Desktop; how do I disable it to save resources?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," Open ",(0,t.jsx)(n.strong,{children:"Rancher Desktop"})," settings, click the cog to open ",(0,t.jsx)(n.strong,{children:"Preferences"}),", select ",(0,t.jsx)(n.strong,{children:"Kuberentes"}),", uncheck ",(0,t.jsx)(n.code,{children:"Enable Kubernetes"})," feature is selected under ",(0,t.jsx)(n.strong,{children:"Kubernetes Settings"}),"; uncheck this box to disable it."]}),"\n",(0,t.jsxs)(n.p,{children:["This will allow you to run just ",(0,t.jsx)(n.code,{children:"containerd"})," or ",(0,t.jsx)(n.code,{children:"dockerd"})," by without allocating resources for Kubernetes."]}),"\n",(0,t.jsx)(n.h4,{id:"q-whats-happening-to-the-kubernetes-image-manager-kim",children:(0,t.jsx)(n.strong,{children:"Q: What's happening to the Kubernetes Image Manager (kim)?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," As of version 1.0, Kim is no longer shipped and has been replaced by nerdctl and the Docker CLI."]}),"\n",(0,t.jsx)(n.h4,{id:"q-running-brew-install-rancher-is-failing-with-a-it-seems-there-is-already-a-binary-at-usrlocalbinbinary-error-why",children:(0,t.jsxs)(n.strong,{children:["Q: Running ",(0,t.jsx)(n.code,{children:"brew install rancher"})," is failing with a ",(0,t.jsx)(n.code,{children:"It seems there is already a Binary at '/usr/local/bin/<BINARY>'"})," error, why?"]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," If any of the Rancher Desktop supporting utilities (Helm, kubectl, nerdctl, docker) are already managed by Homebrew, then the installation fails due to how the Homebrew cask formula is defined. Installing using the Mac app will avoid this issue."]}),"\n",(0,t.jsxs)(n.h4,{id:"q-i-installed-nerdctl-through-the-arch-user-repository-but-it-doesnt-work-with-rancher-desktop-why",children:["Q: I installed ",(0,t.jsx)(n.code,{children:"nerdctl"})," through the Arch User Repository, but it doesn't work with Rancher Desktop, why?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," For Rancher Desktop, ",(0,t.jsx)(n.code,{children:"nerdctl"})," must run inside the VM and not on the host. The host version distributed with Rancher Desktop is just a shell wrapper to execute the command inside the VM."]}),"\n",(0,t.jsx)(n.h4,{id:"q-the-tools-on-the-support-utilities-page-in-rancher-desktop-130-are-not-installed-and-i-see-an-insufficient-permission-to-manipulate-usrlocalbin-error-how-do-i-fix-it",children:(0,t.jsxs)(n.strong,{children:["Q: The tools on the Support Utilities page (in Rancher Desktop ",(0,t.jsx)(n.code,{children:"<1.3.0"}),") are not installed and I see an ",(0,t.jsx)(n.code,{children:"Insufficient permission to manipulate /usr/local/bin"})," error, how do I fix it?"]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," This occurs when you do not have ownership of ",(0,t.jsx)(n.code,{children:"/usr/local/bin"}),". A long-term solution to improve the handling of permissions is in the works. In the meantime, a temporary workaround is to change ownership of ",(0,t.jsx)(n.code,{children:"/usr/local/bin"})," by running ",(0,t.jsx)(n.code,{children:"sudo chown $USER /usr/local/bin"}),". When you are able to write to the directory, Rancher Desktop should be able to create the symlinks."]}),"\n",(0,t.jsxs)(n.p,{children:["From versions 1.3.0 and above, we no longer create symlinks in ",(0,t.jsx)(n.code,{children:"/usr/local/bin"})," but in ",(0,t.jsx)(n.code,{children:"~/.rd/bin"})," and put that directory on the PATH instead, to avoid having to deal with write permissions to ",(0,t.jsx)(n.code,{children:"/usr/local/bin"})," and file conflicts. We strongly recommend you to upgrade to the latest version of Rancher Desktop."]}),"\n",(0,t.jsx)(n.h4,{id:"q-is-cygwin-compatible-with-rancher-desktop",children:(0,t.jsx)(n.strong,{children:"Q: Is Cygwin compatible with Rancher Desktop?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," No, but there are plans to add compatibility."]}),"\n",(0,t.jsx)(n.h4,{id:"q-where-does-rancher-desktop-actually-put-the-data-volumes",children:(0,t.jsx)(n.strong,{children:"Q: Where does Rancher Desktop actually put the data volumes?"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"A:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Windows:"}),"\nOpen Run menu (Press Windows + R) and open the path provided below, depending on the active container runtime."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dockerd(moby): \\\\wsl$\\rancher-desktop-data\\var\\lib\\docker\\volumes\ncontainerd: \\\\wsl$\\rancher-desktop-data\\var\\lib\\nerdctl\\dbb19c5e\\volumes\\<namespace>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"macOS & Linux:"}),"\nNavigate to the path provided below in the (lima) VM, depending on the active container runtime. You can use ",(0,t.jsx)(n.code,{children:"rdctl shell"})," to access these paths in the VM."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dockerd(moby): /var/lib/docker/volumes\ncontainerd: /var/lib/nerdctl/dbb19c5e/volumes/<namespace>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"q-how-can-i-downgrade-rancher-desktop-to-a-non-current-older-release-version",children:(0,t.jsx)(n.strong,{children:"Q: How can I downgrade Rancher Desktop to a non-current (older) release version"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," We strongly recommend you use the current release version as it has the latest features and bug fixes included. However, if you want to downgrade to an earlier version, please follow the steps below."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Perform ",(0,t.jsx)(n.code,{children:"Troubleshooting > Factory Reset"})," from the current installation. Please make sure the ",(0,t.jsx)(n.code,{children:"Keep cached Kubernetes images"})," box is ",(0,t.jsx)(n.em,{children:"not"})," checked in the ",(0,t.jsx)(n.code,{children:"Factory Reset"})," pop up dialog."]}),"\n",(0,t.jsxs)(n.li,{children:["For downgrading on Windows platforms, please shutdown WSL before installing an older version of Rancher Desktop with ",(0,t.jsx)(n.code,{children:"wsl --shutdown"})," in a PowerShell command prompt."]}),"\n",(0,t.jsxs)(n.li,{children:["Uninstall the current version by following ",(0,t.jsx)(n.a,{href:"https://docs.rancherdesktop.io/getting-started/installation",children:"uninstallation instructions"})," for your OS."]}),"\n",(0,t.jsx)(n.li,{children:"Install the older version that you need."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"q-rancher-desktop-becomes-unresponsive-after-my-windows-machine-wakes-up-from-hibernation-how-can-i-get-my-rancher-desktop-session-working-again-with-out-having-to-reboot-my-machine",children:"Q: Rancher Desktop becomes unresponsive after my Windows machine wakes up from hibernation. How can I get my Rancher Desktop session working again with out having to reboot my machine?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," This is because of a WSL ",(0,t.jsx)(n.a,{href:"https://github.com/microsoft/WSL/issues/8696",children:"bug"})," that makes WSL unresponsive after hibernation on some Windows configurations. While the WSL bug itself is not yet resolved, various workarounds discussed on the GitHub issue thread make the problem a bit less frustrating; you can at least avoid a machine restart to get WSL and Rancher Desktop working again. You can follow the below steps."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Shutdown WSL via the command ",(0,t.jsx)(n.code,{children:"wsl --shutdown"}),". If the ",(0,t.jsx)(n.code,{children:"wsl --shutdown"})," command is successful then jump to step 3."]}),"\n",(0,t.jsx)(n.li,{children:"Stop and Restart the LxssManager service."}),"\n"]}),"\n",(0,t.jsxs)(o.Z,{groupId:"mode",children:[(0,t.jsxs)(a.Z,{value:"Powershell",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Stop the LxssManager service."}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"stop-service lxssmanager\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Start the LxssManager service."}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"start-service lxssmanager\n"})})]}),(0,t.jsx)(a.Z,{value:"GUI",children:(0,t.jsxs)(n.p,{children:["Open the list of services running on your machine using the command ",(0,t.jsx)(n.code,{children:"services.msc"}),". Locate the lxssmanager service in the list, right-click on it, and select ",(0,t.jsx)(n.code,{children:"Stop"}),", ",(0,t.jsx)(n.code,{children:"Start"})," to stop and start the service."]})})]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Exit and Restart Rancher Desktop."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"q-what-is-rancher-desktop-data-and-why-is-it-in-a-stopped-state",children:(0,t.jsxs)(n.strong,{children:["Q: What is ",(0,t.jsx)(n.code,{children:"rancher-desktop-data"})," and why is it in a stopped state?"]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A:"})," ",(0,t.jsx)(n.code,{children:"rancher-desktop-data"})," is a persistent volume used for storage, such as container images. When running, the volume is mounted inside the ",(0,t.jsx)(n.code,{children:"rancher-desktop"})," distribution and it will never run by itself. It is for implementation purposes and can be ignored by Rancher Desktop users."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},93687:function(e,n,r){var t=r(10412);const s=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),a=s?"ios":"android",i=s?"macOS":o?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:a,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,n,r){r.d(n,{Z:function(){return a}});r(67294);var t=r(36905),s={tabItem:"tabItem_Ymn6"},o=r(85893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:r,children:n})}},74866:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(67294),s=r(36905),o=r(12466),a=r(16550),i=r(20469),l=r(91980),c=r(67392),d=r(50012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=u(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,h]=g({queryString:r,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),m=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,o]),tabValues:o}}var f=r(72389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=r(85893);function x(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),s=i[r].value;s!==t&&(c(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...o,className:(0,s.Z)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function w(e){let{lazy:n,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(w,{...e,...n})]})}function j(e){const n=(0,f.Z)();return(0,v.jsx)(k,{...e,children:h(e.children)},String(n))}},11151:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var t=r(67294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);