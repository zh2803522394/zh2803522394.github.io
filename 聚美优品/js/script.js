//返回顶部

//var top=document.querySelector(".top");
//window.onscroll=function(){
//    if(document.body.scrollTop>115){
//        top.style.display="block";
//        
//    }else{
//        top.style.display="none";
//    }
//}

top.addEventListener("click",function(){
    
  var tt = setInterval(function(){
        document.body.scrollTop=document.body.scrollTop-50;
        document.documentElement.scrollTop=document.documentElement.scrollTop-50;
      
        if(document.body.scrollTop === 0){
            clearInterval(tt);
        };
  },10);
});


//timg弹窗点击消失
var timg=document.querySelector(".timg");
var cos=document.querySelector(".timg-clos");

if(sessionStorage.timg == "false"){
    timg.style.display="none";
}else{
    timg.style.display="block";
}

cos.onclick=function(){
    sessionStorage.timg = "false";
    timg.style.display="none";
}





//swiper
 var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });