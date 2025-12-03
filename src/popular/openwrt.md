---
title: OpenWRT 使用
icon: cog
tag:
  - 路由器
  - ImmortalWrt
  - NAS
date: 2023-07-22
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

### 用到的软件

**系统**

- [分区扩容（luci-app-partexp）](https://github.com/sirpdboy/luci-app-partexp)
- [应用过滤（luci-app-appfilter）](https://www.openappfilter.com/#/)

**文件**

- Dufs（luci-app-dufs）
- 统一文件共享（luci-app-unishare）

**iStore**

- 系统便利工具（luci-app-systools）
- 1Panel（istorepanel）
- Lucky

**流量分载**

- [Turbo ACC（luci-app-turboacc）](https://github.com/chenmozhijin/turboacc)

**管控**

- AdBlock Fast（luci-app-adblock-fast）
- [时间控制（luci-app-nft-timecontrol）](https://github.com/sirpdboy/luci-app-timecontrol)
- [任务设置（luci-app-taskplan）](https://github.com/sirpdboy/luci-app-taskplan)
- [高级卸载（luci-app-uninstall）](https://plugin.vumstar.com/download/luci-app-uninstall.run)
