---
title: iStoreOS 配置记录
icon: cog
tag:
  - 代理
date: 2023-07-22
lastUpdated: false
---

::: tip 

OpenClash + MosDNS防DNS泄露（污染）配置

DHCP/DNS设置：`DNS 查询缓存的大小设置为0`

<span style="color:red">建议：小白请关闭其他DNS服务（如动态DNS、DHCP/DNS），否则可能出现防泄露不生效或其他问题</span>

:::

## OpenClash

### 覆写设置

::: tabs

@tab 常规设置

![](/assets/images/istoreos/image-20251115141338240.png)

@tab DNS设置

![只勾选<span style="color:red">***自定义上游 DNS 服务器**</span>](/assets/images/istoreos/image-20251115141447027.png)

@tab 设置自定义上游 DNS 服务器

::: center

删除其余所有DNS，添加以下两个指向MosDNS端口(5335)的DNS

![NameServer设置为`127.0.0.1:5335`类型为`TCP`](/assets/images/istoreos/image-20251115143420136.png)

![FallBack设置为`127.0.0.1:5335`类型为`UDP`](/assets/images/istoreos/image-20251115143453359.png)

@tab Smart设置

![](/assets/images/istoreos/image-20251115142813918.png)

:::

### 插件设置

::: tabs

@tab 模式设置

![](/assets/images/istoreos/image-20251115131231734.png)

@tab 流量控制

![](/assets/images/istoreos/image-20251115131430483.png)

@tab DNS设置

![](/assets/images/istoreos/image-20251115131535200.png)

@tab GEO数据库订阅

1. 依次点击`检查并更新`按钮更新数据库（需要从互联网下载）【**GeoIP MMDB、GeoIP Dat、GeoSite、Geo ASN**】

2. 再次回到当前标签查看（或者查看运行日志）

3. 出现当前时间<span style='color:green'>`202x-xx-xx xx:xx:xx`</span>则更新成功

@tab 大陆白名单订阅

点击`检查并更新`按钮

@tab 版本更新

![](/assets/images/istoreos/image-20251115140412551.png)

:::

## MosDNS

::: tip 

MosDNS下载

```sh
# 更新软件包列表
opkg update
# 安装curl
opkg install curl
# 脚本安装
sh -c "$(curl -ksS https://raw.githubusercontent.com/sbwml/luci-app-mosdns/v5/install.sh)"
# 安装失败时使用
sh -c "$(curl -ksS https://proxy.pipers.cn/https://raw.githubusercontent.com/sbwml/luci-app-mosdns/v5/install.sh)"
```

:::

::: tabs

@tab 基本选项

![监听端口与OpenClash自定义上游DNS服务器保持一致](/assets/images/istoreos/image-20251115144455566.png)

@tab 国内DNS服务器

添加运营商DNS（在光猫Web页面中查看，大部分光猫IP是：[192.168.1.1](http://192.168.1.1/)）

@tab 远程 DNS 服务器

![[更多DoH - DNS over HTTPS](https://github.com/curl/curl/wiki/DNS-over-HTTPS)](/assets/images/istoreos/image-20251115145335072.png)

@tab Bootstrap DNS 服务器

随便添加一个或者自定义

@tab 高级选项

![**勾选防止DNS泄露**](/assets/images/istoreos/image-20251115150651337.png)

@tab 更新数据库

![](/assets/images/istoreos/image-20251115151236635.png)

:::
