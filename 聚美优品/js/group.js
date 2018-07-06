//顶端app点击删除
var clos=document.querySelector(".clos");
var ad=document.querySelector(".news");

if(sessionStorage.ad == "false"){
    ad.style.display="none";
}else{
    ad.style.display="block";
}


clos.onclick=function(){
    ad.style.display="none";
    sessionStorage.ad="false";
}


//滚动条定位   更新时间消失出现
window.onscroll=function(){
    if(document.body.scrollTop>45){
        document.querySelector(".home").style.position="fixed";
        document.querySelector(".home").style.top="0px";
    }else{
        document.querySelector(".home").style.position="static";
        document.querySelector(".home").style.top="auto";
    }
    
}



new Vue({
    el:".banner",
    data:{
        shops1:[
            {img:"images2/grop-1.jpg",btn1:"3.9万条评论",txt:"【手机专享】17版安耐晒黄金水钻防晒霜60ml",rmb1:"￥75.00",rmb2:"￥79.00",p:"单买价￥198"},
            {img:"images2/grop-2.jpg",btn1:"635条评论",txt:"【手机专享】雪花秀水律提拉喷雾30ml",rmb1:"￥29.09",rmb2:"￥75.6",p:"单买价￥39.9"},
            {img:"images2/grop-3.jpg",btn1:"10.5万条评论",txt:"【手机专享】爱茉莉玫瑰蜂蜜护发精油70ml",rmb1:"￥39.90",rmb2:"￥78.00",p:"单买价￥49"},
            {img:"images2/grop-4.jpg",btn1:"4345条评论",txt:"【手机专享】MISTINE AQUA水感保湿身体防晒霜",rmb1:"￥38.00",rmb2:"￥40.00",p:"单买价￥45"},
            {img:"images2/grop-5.jpg",btn1:"489条评论",txt:"【手机专享】孙俪同款•HealthyCare葡萄籽*2",rmb1:"￥229.00",rmb2:"￥319.00",p:"单买价￥255"},
            {img:"images2/grop-6.jpg",btn1:"4.6万条评论",txt:"【手机专享】jayjun樱花童颜水光焕白面膜",rmb1:"￥99.00",rmb2:"￥129.00",p:"单买价￥109"},
            {img:"images2/grop-7.jpg",btn1:"4356万条评论",txt:"【手机专享】玛贝拉脱毛膏套装-丝滑香肌",rmb1:"￥29.90",rmb2:"￥69.00",p:"单买价￥39.9"},
            {img:"images2/grop-8.jpg",btn1:"10条评论",txt:"【手机专享】衣织优美 卡通印花短袖T恤",rmb1:"￥49.00",rmb2:"￥315.00",p:"单买价￥89"},
            {img:"images2/grop-9.jpg",btn1:"1285条评论",txt:"【手机专享】澳佳宝蓝莓护眼素片30片",rmb1:"￥69.00",rmb2:"￥179.00",p:"单买价￥79"},
            {img:"images2/grop-10.jpg",btn1:"1792条评论",txt:"【手机专享】Clio珂莱欧气垫BB经典升级版套装",rmb1:"￥149.00",rmb2:"￥192.00",p:"单买价￥169"},
            {img:"images2/grop-11.jpg",btn1:"2870条评论",txt:"【手机专享】子初 婴幼儿配方电热蚊香液4瓶2器",rmb1:"￥29.9.00",rmb2:"￥96.00",p:"单买价￥39.9"},
            {img:"images2/grop-12.jpg",btn1:"73条评论",txt:"【手机专享】纤美媛蕾丝美背无钢圈聚拢收副乳 ",rmb1:"￥53.90",rmb2:"￥688.00",p:"单买价￥99"},
            {img:"images2/grop-13.jpg",btn1:"346条评论",txt:"Unichi玫瑰果精华胶囊60粒,明星保养青春肌肤秘诀!",rmb1:"￥135.00",rmb2:"￥299.00",p:"单买价￥159"},
            {img:"images2/grop-14.jpg",btn1:"234条评论",txt:"Unichi玫瑰果精华胶囊60粒,明星保养青春肌肤秘诀!",rmb1:"￥176.00",rmb2:"￥320.00",p:"单买价￥179"},
            {img:"images2/grop-15.jpg",btn1:"62条评论",txt:"【手机专享】龙之涵婴童纱布透气荞麦枕",rmb1:"￥39.9.00",rmb2:"￥98.00",p:"单买价￥59.9"},
            {img:"images2/grop-16.jpg",btn1:"1998条评论",txt:"【【手机专享】500支装一次性双头棉签 家用清洁",rmb1:"￥9.90",rmb2:"￥30.00",p:"单买价￥15"},
            {img:"images2/grop-17.jpg",btn1:"76条评论",txt:"LR婴儿宝宝滴鼻剂30ml",rmb1:"￥43.00",rmb2:"￥138.00",p:"单买价￥69"},
            {img:"images2/grop-18.jpg",btn1:"232条评论",txt:"派来丝 简约清新冰丝内裤五条装",rmb1:"￥29.9.00",rmb2:"￥129.00",p:"单买价￥35"},
            {img:"images2/grop-19.jpg",btn1:"710条评论",txt:"【手机专享】子初孕妇护肤品 海洋精华四件套",rmb1:"￥158.00",rmb2:"￥878.00",p:"单买价￥269"},
            {img:"images2/grop-20.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
        ],
        shops2:[
            {img:"images/group/01.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
            {img:"images/group/2.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
            {img:"images/group/3.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
            {img:"images/group/4.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
            {img:"images/group/5.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
            {img:"images/group/6.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
            {img:"images/group/7.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
            {img:"images/group/8.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
            {img:"images/group/9.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
            {img:"images/group/10.jpg",btn1:"39条评论",txt:"【手机专享】母乳时代 婴儿柔肤湿巾80抽*10包",rmb1:"￥42.90",rmb2:"￥99.00",p:"单买价￥69"},
        ]
    }
});

//选项卡
var navs=document.querySelectorAll(".navs li");
var a1s=document.querySelectorAll(".banner .as1");
var a=document.querySelector(".navs li a")
//console.log(navs.length)
a1s[0].style.display="block";
for(var i=0;i<navs.length;i++){
    navs[i].index=i;
    navs[i].onclick=function(){
        for(var n=0;n<navs.length;n++){
            a1s[n].style.display="none";
        }
        a1s[this.index].style.display="block";
    }
}
