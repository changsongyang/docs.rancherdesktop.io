---
sidebar_label: General
title: General
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

Set the [container runtime] for Rancher Desktop. Users have the option of [containerd] which provides namespaces for containers and the use of nerdctl or [dockerd (moby)] which enables the Docker API and the use of the Docker CLI. Only one container runtime will function at a time.

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](rd-versioned-asset://preferences/Windows_containerEngine_tabGeneral.png)

</TabItem>
<TabItem value="macOS">

![](rd-versioned-asset://preferences/macOS_containerEngine_tabGeneral.png)

</TabItem>
<TabItem value="Linux">

![](rd-versioned-asset://preferences/Linux_containerEngine_tabGeneral.png)

</TabItem>
</Tabs>

#### Container Engine

When switching to a different container runtime: Workloads and images that have been built or pulled using the current container runtime are not available on the container runtime being switched to.

[container runtime]:
https://kubernetes.io/docs/setup/production-environment/container-runtimes/

[containerd]:
https://containerd.io/

[dockerd (moby)]:
https://mobyproject.org/
