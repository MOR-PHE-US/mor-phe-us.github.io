---
title: Docker常用命令
icon: fa-brands fa-docker
star: true
category:
  - Docker
tag:
  - docker
  - linux
date: 2023-02-25
lastUpdated: false
---

## 基础命令

::: tabs

@tab 1 启停/重启

::: tip
```bash
# 启动
systemctl start docker

# 停止
systemctl stop docker

# 重启
systemctl restart docker
```

@tab 2 开机自启

::: tip

```bash
# 设置开机自启
systemctl enable docker

# 取消开机自启
systemctl disable docker
```

@tab 3 查看状态

::: tip

```bash
systemctl status docker
```

@tab 4 查看版本信息

::: tip

```bash
docker version
```

@tab 5 显示信息

::: tip

```bash
docker info
```

@tab 6 查看帮助

::: tip

```bash
docker --help
```

:::

## 镜像管理

::: tabs

@tab 1 搜索镜像

::: tip

```bash
# docker search [镜像名]
docker search nginx
```

@tab 2 下载镜像

::: tip

```bash
docker pull [镜像名]:[标签]
docker pull nginx:latest
# 下载指定镜像到本地，如果不指定标签则默认下载 latest 版本。
```

@tab 3 列出本地镜像

::: tip

```bash
docker images
# 列出本地所有镜像，显示镜像 ID、仓库、标签、大小等信息。
```

@tab 4 删除镜像

::: tip

```bash
docker rmi [镜像ID或镜像名]

# 强制删除
docker rmi -f mysql

# 删除全部镜像（慎用）
docker rmi -f $(docker images -aq)
# -a 显示全部，-q 只显示 ID。
```

@tab 5 构建镜像

::: tip

```bash
docker build -t [镜像名]:[标签] [Dockerfile路径]
docker build -t nginx:1.0 ./
# 从指定路径的 Dockerfile 构建新镜像。
```

@tab 6 导入镜像

::: tip

```bash
docker load -i 镜像保存文件位置
docker load -i /data/nginx.tar
```

@tab 7 保存镜像

::: tip

```bash
docker save -o 保存目标文件 镜像名
docker save -o /data/nginx.tar nginx
# 保存后的镜像可使用 docker load 加载到其他服务器。
```

@tab 8 给镜像打标签

::: tip

```bash
docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
docker tag nginx 10.10.10.200/software/nginx:1.26
# 根据业务需求对镜像进行分类或版本迭代。10.10.10.200 为仓库地址，software 为仓库名称。
```

:::

## 容器管理

::: tabs 

@tab 1 创建并运行

::: tip

```bash
docker run [选项] [镜像名]
# 常用选项
-d：后台运行
-p：端口映射
--name：指定容器名称
-v：挂载卷，例如 -v 主机路径:容器路径
```

示例：

```bash
docker run -d -p 8080:80 --name mynginx nginx
```

@tab 2 查看运行中的容器

::: tip

```bash
docker ps
# 列出当前运行的容器，显示容器 ID、镜像、状态、端口映射等信息。
```

@tab 3 查看所有容器

::: tip

```bash
docker ps -a
```

@tab 4 启停容器

::: tip

```bash
# 启动容器
docker start [容器ID或容器名]

# 停止容器
docker stop [容器ID或容器名]
```

@tab 5 重启

::: tip

```bash
docker restart [容器ID或容器名]
```

@tab 6 删除

::: tip

```bash
docker rm [容器ID或容器名]
# 删除指定容器，如果容器正在运行，可使用 -f 强制删除。
```

@tab 7 进入

::: tip

```bash
docker exec -it [容器ID或容器名] /bin/bash
docker exec -it mynginx /bin/bash
```

@tab 8 查看日志

::: tip

```bash
docker logs [容器ID或容器名]

# 常用选项
-f：实时输出日志
--tail n：显示最后 n 行日志
docker logs -f --tail 20 mynginx
```

@tab 9 查看容器内部细节

::: tip

```bash
docker inspect [容器ID或容器名]
```

:::

## 数据卷管理

::: tabs

@tab 1 创建数据卷

::: tip

```bash
docker volume create [卷名]
docker volume create data
```

@tab 2 查看数据卷

::: tip

```bash
docker volume ls
```

@tab 3 删除数据卷

::: tip

```bash
docker volume rm [卷名]
docker volume rm data
```

@tab 4 查看数据卷详情

::: tip

```bash
docker volume inspect [卷名]
```

:::

## 网络管理

::: tabs

@tab 1 创建网络

::: tip

```bash
docker network create [网络名]
```

@tab 2 查看网络

::: tip

```bash
docker network ls
```

@tab 3 查看网络详情

::: tip

```bash
docker network inspect [网络名]
```

@tab 4 删除网络

::: tip

```bash
docker network rm [网络名]
```

@tab 5 将容器连接到网络

::: tip

```bash
docker network connect [网络名] [容器名或容器ID]
```

@tab 6 将容器从网络断开

::: tip

```bash
docker network disconnect [网络名] [容器名或容器ID]
```

:::

## Docker Compose

::: tabs

@tab 1 启动服务

::: tip

```bash
docker-compose up

# 后台运行
docker-compose up -d
```

@tab 2 停止服务

::: tip

```bash
docker-compose down
# 停止并删除所有容器、网络和卷。
```

@tab 3 构建或重建服务

::: tip

```bash
docker-compose build
```

@tab 4 查看服务状态

::: tip

```bash
docker-compose ps
```

@tab 5 查看服务日志

::: tip

```bash
docker-compose logs [服务名]

# 常用选项
-f：实时输出
--tail n：显示最后 n 行
```

:::

## 清理命令

::: tip

```bash
# 删除所有已停止的容器
docker container prune

# 删除未使用的镜像
docker image prune

# 删除所有未使用的数据卷
docker volume prune

# 删除所有未使用的网络
docker network prune

# 清理所有未使用的资源（镜像、容器、卷、网络）
docker system prune
```

:::