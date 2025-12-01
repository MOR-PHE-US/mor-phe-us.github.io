---
title: OpenWRT 使用
icon: cog
tag:
  - 路由器
  - ImmortalWrt
  - NAS
date: 2023-07-22
lastUpdated: false
---

::: tip 

ImmortalWrt作为主路由的使用日常

:::

### 从U盘写入磁盘

```bash
# 在一个终端运行：
umount /dev/nvme0n1p* 2>/dev/null && \
parted /dev/nvme0n1 mklabel gpt && \
(dd if=/dev/sda of=/dev/nvme0n1 bs=1M conv=fsync &) && \
DD_PID=$! && \
while kill -USR1 $DD_PID 2>/dev/null; do sleep 5; done && wait $DD_PID && sync
```

### 通过SSH Key连接到ImmortalWrt

```bash
ssh-keygen -t ed25519 -C "ImmortalWrt"
```

**将公钥（.pub 文件）内容**添加到ImmortalWrt的：

`/etc/dropbear/authorized_keys`

```bash
chmod 600 /etc/dropbear/authorized_keys
```

