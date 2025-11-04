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

# 常见原生ROM

[Lineageos](https://download.lineageos.org/changes)

[crDroid](https://crdroid.net/)

[Project Infinity X](https://projectinfinity-x.com/)

[LibreMobileOS](get.libremobileos.com)

[Evolution X](https://evolution-x.org/)

# 常用Recovery

- TWRP
- OrangeFox

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

## 刷机步骤

::: tabs

@tab:active 全新刷写

1. 下载需要的`ROM`、`Firmware`、谷歌套件如`Nikgapps`（可选）
2. 重启到`recovery`
3. 刷入`Firmware`
4. 擦除 Dalvik/Art Cache,cache,FRP,metadata（四清）
5. 刷入ROM（如`crDroidAndroid-**-**-**-**.zip`）并重新启动到`recovery`
6. 刷入`Nikgapps`（可选）
7. 格式化data,输入“`yes`”并重新启动到系统

@tab 升级刷写

1. 下载需要的`ROM`、谷歌套件如`Nikgapps`（可选）
2. 重启到`recovery`
3. 刷入`ROM`并重新启动到`recovery`
4. 刷入`Nikgapps`（可选）
5. 擦除 Dalvik/Art Cache,Cache（双清）
6. 格式化data,输入“`yes`”并重新启动到系统

:::
