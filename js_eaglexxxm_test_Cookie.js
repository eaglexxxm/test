# This local subscription is used to resolve the cookie acquisition of QX task scripts, only available for QX 1.0.5 (188+) and above, you can disable it manually after use to avoid meaningless MITM.

hostname = *.iqiyi.com, www.52pojie.cn, c.tieba.baidu.com, api.m.jd.com, manga.bilibili.com, 

# iQIYI Get cookie
https?:\/\/.*\.iqiyi\.com\/.*authcookie= url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js

# 52pojie Get cookie
https:\/\/www\.52pojie\.cn\/home\.php\?mod=space url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js

# Tieba Get cookie
https?:\/\/(c\.tieba\.baidu\.com|180\.97\.\d+\.\d+)\/c\/s\/login url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js

# JingDong Get cookie
https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

# Bilibili manga Get cookie
https:\/\/manga\.bilibili\.com\/.*\.User\/GetWallet url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js