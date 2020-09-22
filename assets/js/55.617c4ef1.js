(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{625:function(s,e,t){"use strict";t.r(e);var a=t(57),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"使用-luks-加密-home-目录并在开机时自动解密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-luks-加密-home-目录并在开机时自动解密"}},[s._v("#")]),s._v(" 使用 LUKS 加密 home 目录并在开机时自动解密")]),s._v(" "),t("p",[s._v("参考："),t("a",{attrs:{href:"https://www.cnblogs.com/guarderming/p/11957780.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("用luks方式对磁盘进行加密以及加密磁盘的自动挂载"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"创建-luks-加密分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-luks-加密分区"}},[s._v("#")]),s._v(" 创建 LUKS 加密分区")]),s._v(" "),t("p",[s._v("首先你需要创建一个 luks 加密分区，具体操作参阅上述链接。")]),s._v(" "),t("h2",{attrs:{id:"手动挂载并测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动挂载并测试"}},[s._v("#")]),s._v(" 手动挂载并测试")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("CTRL + ALT + F2")]),s._v(" 打开一个新的 tty2，并使用 root 登录")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 查看目标 luks 分区\nlsblk\n\n# 假设目标分区为 /dev/sda3，使用 cryptsetup 解密，名字为 home\ncryptsetup open /dev/sda3 home\n# 此时会要求输入密码，解密成功后会出现在 /dev/mapper/home\n\n# 重命名旧的 home 目录\nmv /home /home.old\n\n# 挂载新的 home 目录（此时应该为空）\nmkdir /home\nmount /dev/mapper/home /home\n\n# 复制原来的文件到新的 home 目录，并保留用户权限\ncp -ax /home.old/* /home/\n")])])]),t("p",[s._v("此时重新登录普通用户，如果登录成功并且 home 目录可以读写，则实验成功。")]),s._v(" "),t("h2",{attrs:{id:"加密设备的开机自动挂载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加密设备的开机自动挂载"}},[s._v("#")]),s._v(" 加密设备的开机自动挂载")]),s._v(" "),t("p",[s._v("创建密码文件，这个文件在开机时会自动读取并解密目标分区：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /root/luks_pass\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入分区加密密码并保存（不需要换行）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置文件权限，只允许 root 读写")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" /root/luks_pass\n")])])]),t("p",[s._v("设置开机自动解密 luks 分区："),t("code",[s._v("vim /etc/crypttab")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# <name>  <device>      <password> <options>\nhome    /dev/sda3       /root/luks_pass\n")])])]),t("p",[s._v("把密码添加到luks加密中，这一步必须执行才能使密码生效：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("cryptsetup luksAddKey /dev/sda3 /root/luks_pass\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会提示 `Enter any passphrase`，此时请输入分区的加密密码")]),s._v("\n")])])]),t("p",[s._v("设置 /home 目录的自动挂载点："),t("code",[s._v("vim /etc/fstab")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/dev/mapper/home        /home   ext4    defaults        0       2\n")])])]),t("p",[s._v("重启即可完成。")])])}),[],!1,null,null,null);e.default=r.exports}}]);