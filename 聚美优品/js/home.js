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
        document.querySelector(".block").style.width="50%";
        document.querySelector(".none").style.width="50%";
        document.querySelector(".none").style.display="block";
        document.querySelector("header").style.paddingBottom="40px";
    }else{
        document.querySelector(".home").style.position="static";
        document.querySelector(".home").style.top="auto";
        document.querySelector(".none").style.display="none";
        document.querySelector(".block").style.width="100%";
        document.querySelector("header").style.paddingBottom="0px";
    }
    
}



//alter弹窗

var lis=document.querySelectorAll(".alter .p1");
var ps=document.querySelectorAll(".alter .ps");
//ps[0].style.display="none";
//var 
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onclick=function(){
        if(ps[this.index].style.display=="none"){
            for(var n=0;n<lis.length;n++){
                ps[n].style.display="none";
                ps[n].parentNode.firstChild.style.color="#999";
                ps[n].parentNode.firstChild.lastChild.style.color="#999";
                ps[n].parentNode.firstChild.lastChild.setAttribute("class","fa fa-angle-up");

                }
                ps[this.index].style.display="block";
                ps[this.index].parentNode.firstChild.style.color="red";
                ps[this.index].parentNode.firstChild.style.color="red";
                ps[this.index].parentNode.firstChild.lastChild.style.color="red";
                ps[this.index].parentNode.firstChild.lastChild.setAttribute("class","fa fa-angle-down");
            }
            else{
                for(var n=0;n<lis.length;n++){
                    ps[n].style.display="none";
                    ps[n].parentNode.firstChild.style.color="#999";
                    ps[n].parentNode.firstChild.lastChild.style.color="#999";
                    ps[n].parentNode.firstChild.lastChild.setAttribute("class","fa fa-angle-up");

                }
            }
        }

}


var btn1=document.querySelector(".search2 img");
var btn2=document.querySelector(".search2 a");
var aaa=document.querySelector(".alter-search");

btn1.onclick=function(){
    aaa.style.transition="0.5s";
    aaa.style.left="20%";
    document.querySelector(".big").style.opacity="0.3";
}

btn2.onclick=function(){
    aaa.style.transition="0.5s";
    aaa.style.left="100%";
    document.querySelector(".big").style.opacity="1"
}


