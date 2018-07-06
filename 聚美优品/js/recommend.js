new Vue({
    el:".shop",
    data:{
        arrs:[
            {img:"images/shop-1.jpg",txt:"超长甩棍车载防身武器自卫打架用品伸缩棍子三节摔棍甩鞭甩棒甩辊硬淬火加厚可碎砖展开95厘米 95厘米悍马钛黑色淬火可碎砖38寸（送大礼",money1:"￥75.00",money2:"￥79.00",txt2:"6万条评论"},
            {img:"images/shop-2.jpg",txt:"华润 五丰 东北大米 优选东北珍珠米5kg",money1:"￥23.90",money2:"￥30.00",txt2:"6万条评论"},
            {img:"images/shop-3.jpg",txt:"捷昇(JIESHENG) 汽车摩托车便携式汽油桶备用油箱加厚柴油壶储油桶 30L 配赠倒油管",money1:"￥99.00",money2:"￥150.00",txt2:"5107条评论"},
            {img:"images/shop-4.jpg",txt:"图拉斯 苹果X钢化膜iPhoneX全屏全覆盖6D抗蓝光防爆玻璃手机10贴膜前后背膜 【黑色】高清款★真6D全屏隐形膜",money1:"￥29.80",money2:"￥38.00",txt2:"4600条评论"},
            {img:"images/shop-5.jpg",txt:"超长甩棍车载防身武器自卫打架用品伸缩棍子三节摔棍甩鞭甩棒甩辊硬淬火加厚可碎砖展开95厘米 95厘米悍马钛黑色淬火可碎砖38寸（送大礼",money1:"￥79.00",money2:"￥75.00",txt2:"6万条评论"},
            {img:"images/shop-6.jpg",txt:"本博（BENBO）颈椎按摩器颈部多功能腰部全身电动枕头肩部脊椎脖子家用靠垫 智能版+16头仿真人揉捏+轻重推拿+指压+热敷",money1:"￥119.00",money2:"￥135.00",txt2:"5万条评论"},
            {img:"images/shop-7.jpg",txt:"老人头（LAORENTOU）钱包男士短款真皮头层油蜡牛皮男士钱夹大容量驾照卡包 329J002L5Q棕色  ",money1:"￥99.00",txt2:"2030条评论"},
            {img:"images/shop-8.jpg",txt:"金龙鱼 东北大米 蟹稻共生 盘锦大米5KG(包装更新，新老包装随机发放）当季新米",money1:"￥29.80",txt2:"202万条评论"},
            {img:"images/shop-9.jpg",txt:"  索聚 OPPO R9s钢化膜 R9/R9Plus/R9sPlus/a59s 全屏透明 抗蓝光防指纹 R9S 全屏透明【抗蓝光版】（2张装）  ",money1:"￥19.90",txt2:"10万条评论"},
            {img:"images/shop-10.jpg",txt:"  魅可（M.A.C） MAC魅可口红 显色丰润唇膏女士口红口红3g Chili铁锈红/小辣椒色  ",money1:"￥129.00",txt2:"1万条评论"},
            {img:"images/shop-11.jpg",txt:"超长甩棍车载防身武器自卫打架用品伸缩棍子三节摔棍甩鞭甩棒甩辊硬淬火加厚可碎砖展开95厘米 95厘米悍马钛黑色淬火可碎砖38寸（送大礼",money1:"￥79.00",money2:"￥75.00",txt2:"6万条评论"},
            {img:"images/shop-12.jpg",txt:"福临门 特选东北大米 粳米 中粮出品 大米 5kg",money1:"￥28.90",txt2:"39万条评论"},
            {img:"images/shop-13.jpg",txt:"生活驿站  男士钱包韩版三折帆布钱包男 复古学生零钱包卡包 蓝色",money1:"￥18.00",money2:"￥30.00",txt2:"2439条评论"},
            {img:"images/shop-14.jpg",txt:"大白兔 奶糖礼盒糖果大礼包棒棒糖彩虹糖波板糖千纸鹤生日礼物糖果巧克力",money1:"￥58.00",txt2:"3640条评论"},
            {img:"images/shop-15.jpg",txt:"英皇保罗男士钱包男长款牛皮真皮商务简约拉链钱夹手拿包驾驶证包银行卡包 深咖色  ",money1:"￥169.00",txt2:"8180万条评论"},
            {img:"images/shop-16.jpg",txt:"GK 【聚美优品】 苹果x钢化膜 iphoneX/10全屏6D高清覆盖ix防指纹十手机膜 iPhonex【升级6D玻璃一体膜☆高清版】前膜",money1:"￥49.00",money2:"￥60.00",txt2:"12万条评论"},
            {img:"images/shop-17.jpg",txt:"  OPPO闪充数据线原装正品 r7 r11 plus r9s r15数据线充电器快充线 小米华为通用 原装闪充线【一根】 盒装版  ",money1:"￥29.00",txt2:"10万条评论"},
            {img:"images/shop-18.jpg",txt:"  金士顿（Kingston）DT 100G3 32GB USB3.0 U盘 高速车载U盘 黑色  ",money1:"￥38.30",txt2:"383万条评论"},
            {img:"images/shop-19.jpg",txt:"美宝莲（MAYBELLINE）绝色持久唇膏雾感哑光系列R09PM 3.9g（陈伟霆女皇色口红新老包装）",money1:"￥109.00",txt2:"19万条评论"},
            {img:"images/shop-20.jpg",txt:"南极人（NANJIREN） 颈椎按摩器 按摩靠垫全身 颈部腰部肩部按摩椅垫 按摩仪 机械手滚转版咖啡色-升级新款",money1:"￥298.00",txt2:"10万条评论"},
            {img:"images/shop-21.jpg",txt:"闪迪（SanDisk）酷铄(CZ73) USB3.0 金属U盘 32GB 读150MB/秒",money1:"￥66.90",txt2:"236万条评论"},
            {img:"images/shop-22.jpg",txt:"泰国原装 Mistine小草莓唇膏 1.7g 维他命E梦幻变色润唇膏保湿滋润 1支",money1:"￥19.00",txt2:"3万条评论"}
        ]
    }
})