---
title: 常用 Linux 基础操作
icon: fa-brands fa-linux
category:
  - Linux
tag:
  - 命令行
date: 2022-08-02
lastUpdated: false
---

::: tip

新装 Linux（桌面或服务器）最常见、最必要的软件包列表，以及最基础的 Linux 操作命令。这些内容适用于 Debian/Ubuntu、CentOS/RHEL、Arch 等常见发行版。

:::

## 快速部署一台新 Linux

**一条命令装最常用工具（Ubuntu）**

```bash
sudo apt update && sudo apt install -y \
git curl wget vim htop net-tools openssh-server unzip \
build-essential python3 python3-pip
```

**一条命令装 CentOS 基础工具**

```bash
sudo yum groupinstall -y "Development Tools"
sudo yum install -y git curl wget vim htop net-tools unzip python3
```

## 基本软件包

### 终端增强与系统管理

| 软件包               | 作用                       |
| -------------------- | -------------------------- |
| git                  | 版本控制、下载项目         |
| curl / wget          | 下载文件、发 HTTP 请求     |
| vim / nano           | 编辑器                     |
| htop / top           | 查看 CPU/内存使用          |
| psmisc               | 提供 `fuser` 等实用工具    |
| net-tools / iproute2 | 网络工具（如 ifconfig/ip） |
| ufw / firewalld      | 防火墙管理                 |
| openssh-server       | 允许远程 SSH 登录          |

### 构建与开发常用包

| 软件包          | 作用                          |
| --------------- | ----------------------------- |
| build-essential | gcc, g++, make 等编译工具集合 |
| python3 + pip   | Python 环境                   |
| cmake           | 常见构建工具                  |
| pkg-config      | 查找头文件与库                |

### 网络与调试工具

| 软件包         | 用途               |
| -------------- | ------------------ |
| netcat / socat | 网络端口调试       |
| traceroute     | 路由追踪           |
| nmap           | 扫描端口（调试用） |

### 压缩与文件处理

| 软件包             | 用途 |
| ------------------ | ---- |
| unzip / zip        |      |
| tar                |      |
| p7zip / p7zip-full |      |

## 基础操作

### 文件与目录操作

```bash
ls            # 列目录
ls -l         # 显示详细信息
ls -a         # 显示隐藏文件

cd /path/     # 进入目录
cd ..         # 返回上一级

pwd           # 显示当前路径

mkdir test    # 创建目录
rm file       # 删除文件
rm -r dir     # 删除目录及内容
cp a b        # 复制
mv a b        # 移动/重命名
```

### 查看文件内容

```bash
cat file      # 直接显示
less file     # 分页查看
head -n 20    # 前20行
tail -f log   # 实时查看日志
```

### 软件包管理

**Debian / Ubuntu**

```bash
sudo apt update
sudo apt upgrade
sudo apt install package
sudo apt remove package
```

**RHEL / CentOS**

```bash
sudo yum install package
sudo yum update
sudo yum remove package
```

### 用户与权限

```bash
sudo command        # 使用管理员权限
chmod 755 file      # 修改权限
chown user:group file  # 修改所有者
```

### 查看系统状态

```bash
top                 # 显示进程
htop                # 更好看的top（需安装）
free -h             # 查看内存
df -h               # 查看磁盘空间
du -sh folder       # 查看目录大小
```

### 网络操作

```bash
ifconfig / ip a         # 查看网卡
ping baidu.com          # 测试网络
curl http://example.com # 获取网页
ss -tln                 # 查看监听端口
```

### 服务管理（systemd）

```bash
systemctl status nginx
systemctl start nginx
systemctl stop nginx
systemctl enable nginx  # 开机自启
```

