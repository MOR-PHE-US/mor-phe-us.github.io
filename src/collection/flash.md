---
title: Android 刷机搜集
icon: robot
category:
  - Android
tag:
  - 刷机
date: 2019-08-07
lastUpdated: false
---

::: important 

==刷机前先备份数据==，==刷机前先备份数据==，==刷机前先备份数据==。

:::

# 小米ROM

[下载链接](https://xiaomirom.com/)

# 原生ROM

[crDroid](https://crdroid.net/)

# Fastboot常用命令

## 查看

::: code-tabs

@tab:active 显示当前连接的设备

```bash
fastboot devices
```

:::

## 刷写

::: code-tabs

@tab:active 刷入Recovery分区

```bash
fastboot flash recovery fliename.img
```

@tab 刷入Boot分区

```bash
fastboot flash boot fliename.img
```

@tab 从指定镜像启动设备

```bash
fastboot boot fliename.img
```

:::

## 重启

::: code-tabs

@tab:active 重启设备

```bash
fastboot reboot
```

@tab 重启回到Fastboot模式

```bash
fastboot reboot-bootloader
```

:::