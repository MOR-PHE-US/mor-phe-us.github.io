---
title: OpenWRT 使用日常
icon: cog
tag:
  - 路由器
  - ImmortalWRT
  - NAS
date: 2023-07-22
lastUpdated: false
---

::: tip 

使用ImmortalWrt作为主路由

:::

[**分区扩容app**](https://github.com/sirpdboy/luci-app-partexp)：

```bash
# 一键安装 sirpdboy分区扩容 app
wget -O install.sh https://cafe.cpolar.top/wkdaily/OneKeyExpand/raw/branch/main/install.sh && chmod +x install.sh && ./install.sh

# 如果上述代码访问不到。可直接复制下面的内容。
opkg update
wget https://cafe.cpolar.top/wkdaily/OneKeyExpand/raw/branch/main/luci-app-partexp_all.ipk
opkg install luci-app-partexp_all.ipk 2>/dev/null
```

写入磁盘命令：

```
gzip -dc immortalwrt-x86.img.gz | dd of=/dev/nvme0n1
```

