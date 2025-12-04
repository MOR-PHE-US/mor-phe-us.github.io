---
title: 常见环境变量和基本配置
icon: bezier-curve
star: true
category:
  - Windows
tag:
  - nvm
  - python
  - adb
  - Java
date: 2022-05-05
lastUpdated: false
---

::: tip 提示

重装Windows系统后需要安装一系列软件，配置环境变量时很麻烦，故而整理到一起，方便参考

==tip中形如`%NVM_HOME%`则是新建到系统变量后再添加到`Path`下==

==其中`[\path\to]`代指前置路径==

:::

::: tabs

@tab nvm

[nvm下载](https://www.nvmnode.com/guide/download.html#latest-release)

::: tip nvm及node配置

- `%NVM_HOME%` 【nvm环境变量】

  `[\path\to]\nvm`

- `%NVM_SYMLINK%` 【node环境变量】

  `[\path\to]\nvm\nodejs`

- `%NODE_PATH%`【npm环境变量】

  `[\path\to]\nvm\nodejs\node_global`

- settings.txt 【nvm配置文件】

  ```yaml
  root: [\path\to]\nvm
  path: [\path\to]\nvm\nodejs
  node_mirror: https://npmmirror.com/mirrors/node/
  npm_mirror: https://npmmirror.com/mirrors/npm/
  ```

- npm 【设置node全局和缓存路径命令】

  ```bash
  npm config set prefix "[\path\to]\node_global"
  npm config set cache "[\path\to]\node_cache"
  ```

- 【管理员：允许第三方软件运行node脚本】


  ```shell
  Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
  ```

- 指定`.pnpm-store`存储路径【需要先安装pnpm】


  ```bash
  pnpm config set store-dir [/path/to/].pnpm-store
  ```

@tab Python

[Python下载](https://www.python.org/downloads/windows/)

==Stable Releases==下找适合自己系统架构的版本

==Windows installer==：可视化操作，推荐安装

Windows embeddable package：缺失很多东西，不应作为环境配置

::: tip Python配置

- Python 【Python环境变量】

  `[\path\to]\Python`

- Scripts 【pip等脚本环境变量】

  `[\path\to]\Python\Scripts`

@tab adb

[adb下载](https://developer.android.com/studio/releases/platform-tools?hl=zh-cn)

[下载适用于 Windows 的 SDK Platform-Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip?hl=zh-cn)

[下载适用于 Mac 的 SDK Platform-Tools](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip?hl=zh-cn)

[下载适用于 Linux 的 SDK Platform-Tools](https://dl.google.com/android/repository/platform-tools-latest-linux.zip?hl=zh-cn)

::: tip  adb配置

- platform-tools【adb环境变量】

  `[\path\to]\platform-tools`

- payload-dumper-go 【提取payload.bin中的镜像文件】

  [GITHUB下载地址](https://github.com/ssut/payload-dumper-go/releases) 

@tab Java

[个人版下载](https://www.java.com/zh-CN/download/)

[企业版下载](https://www.oracle.com/cn/java/technologies/downloads/)【需要登陆账号】

::: tip Java配置

- `%JAVA_HOME%`【系统变量】

  `[\path\to]\jdk`

- Path中加上bin路径

  `%JAVA_HOME%\bin`

@tab Git

[Git - Install for Windows](https://git-scm.com/install/windows)

::: tip 其他安装

- MacOS

  ```bash
  # Homebrew
  brew install git
  
  # MacPorts
  sudo port install git
  
  # Xcode Command Line Tools
  xcode-select --install
  
  # Installing git-gui
  brew install git-gui
  
  ssh-keygen -t rsa
  ```

- Linux

  ```bash
  # Debian/Ubuntu
  apt-get install git
  # 对于 Ubuntu，该 PPA 提供最新稳定的上游 Git 版本
  add-apt-repository ppa:git-core/ppa
  apt update
  apt install git
  
  # Fedora
  yum install git # (up to Fedora 21)
  dnf install git # (Fedora 22 and later)
  
  # Gentoo
  emerge --ask --verbose dev-vcs/git
  
  # Arch Linux
  pacman -S git
  
  # openSUSE
  zypper install git
  
  # Mageia
  urpmi git
  
  # Nix/NixOS
  nix-env -i git
  
  # FreeBSD
  pkg install git
  
  # Solaris 9/10/11 (OpenCSW)
  pkgutil -i git
  
  # Solaris 11 Express, OpenIndiana
  pkg install developer/versioning/git
  
  # OpenBSD
  pkg_add git
  
  # Alpine
  apk add git
  
  # Slitaz
  tazpkg get-install git
  ```



@tab C++

- Pre-built Toolchains

  [Downloads](https://www.mingw-w64.org/downloads/)

  [MinGW-W64](https://github.com/niXman/mingw-builds-binaries/releases)

  [Cygwin](https://cygwin.com/install.html)

- Ubuntu / Debian

  ```bash
  sudo apt update
  sudo apt install build-essential
  ```

  

:::
