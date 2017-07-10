//封装id名函数
 function $(id){
    return document.getElementById(id);
};	
	//轮播图
	var Li=$("wrap").getElementsByTagName("li")[0].offsetWidth;//获取单个livar的宽度
	var btn = document.getElementById("btn").children;//获取底部圆圈
	var Lis=document.getElementById("wrap").children;//获取单个li
	var obannerimg = document.getElementById("wrap").children;//获取li
	var cbannerimg = obannerimg[0].cloneNode(true)//克隆
	var ImgWidth=document.documentElement.clientWidth;
	var imgs=$('wrap').getElementsByTagName("img");
		imgs[0].style.left=-(Li-ImgWidth)/2+"px"
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.left=-(Li-ImgWidth)/2+"px";
	}
	$("wrap").appendChild(cbannerimg);
	$("wrap").style.width = Li*obannerimg.length+"px"
	 var num = 0;
   $("right").onclick = function(){
	   num++;
	   if(num>=obannerimg.length){
		num=1	;
		//$("wrap").style.transition = ""
		$("wrap").style.left = 0+"px";
	   }
	 move($("wrap"),"left",-Li*num);
	   /*底部小圆圈*/
	   for (var j in btn) {
			btn[j].className="ccc";
		}
	  if(num==obannerimg.length-1){
		 btn[0].className="black";
	  }else{
		 btn[num].className="black";
	  }	  
   }
	 /* 左按钮*/
   $("left").onclick = function(){
	   num--;
	  
	   if(num<0){
		num=obannerimg.length-2;
		$("wrap").style.left = -Li*(obannerimg.length-1)+"px";
	   }
	
	   move($("wrap"),"left",-Li*num);
	  /*底部小圆圈*/
	   for (var j in btn) {
			btn[j].className="ccc";
		}
	   btn[num].className="black";
   }
  
  /* 底部小圆圈鼠标移入*/
 for (var i in btn) {
	btn[i].className="ccc";
	btn[0].className="black";
	btn[i].index = i;
	btn[i].onmouseover = function(){
		for (var j in btn) {
			btn[j].className="ccc";
		}
		btn[this.index].className="black";
		console.log(this.index)
		  move($("wrap"),"left",-Li*this.index)
	}
 }
/*让轮播图自己走，设置定时器*/
var time = null;  
time = setInterval($("right").onclick,3000)

/* 左右按钮的显示与隐藏*/
   $("box").onmouseover= function(){
	  $("left").style.display = "none";
	  $("right").style.display = "none";
	  clearInterval(time);
	};
   $("box").onmouseout = function(){
	  $("left").style.display = "none";
	  $("right").style.display = "none";
	  clearInterval(time)
	  
	 time = setInterval($("right").onclick,3000);
	 
  };
//第二个轮播图
var liwidth=$("market_e_ul").getElementsByTagName("li")[0].offsetWidth;
var btnS = document.getElementById("btn2").children;//获取底部圆圈
var Lis1=document.getElementById("market_e_ul").children;//获取单个li
var obanner = document.getElementById("market_e_ul").children;//获取li
var cbanner = obanner[0].cloneNode(true)//克隆
$("market_e_ul").appendChild(cbanner);
$("market_e_ul").style.width = liwidth*obanner.length+"px"
 var x = 0;
   $("right2").onclick = function(){
	   x++;
	   if(x>=obanner.length){
		x=1	;
		$("market_e_ul").style.left = 0+"px";
	   }
	 move($("market_e_ul"),"left",-liwidth*x);
	  
	   /*底部小圆圈*/
	 
	   for (var j in btnS) {
			btnS[j].className="cccc";
		}
	  if(x==obanner.length-1){
		 btnS[0].className="blackc";
	  }else{
		 btnS[x].className="blackc";
	  }
   }
 /* 底部小圆圈鼠标移入*/

 for (var i in btnS) {
	btnS[i].className="ccc";
	btnS[0].className="black";
	btnS[i].index =i;
	btnS[i].onmouseover = function(){
		for (var j in btnS) {
			btnS[j].className="cccc";
			
		}
		btnS[this.index].className="blackc";
		console.log(this.index)
		  move($("market_e_ul"),"left",-liwidth*this.index)
	}
 }
/*让轮播图自己走，设置定时器*/
var timeR = null;  
timeR = setInterval($("right2").onclick,3000)
/* 左右按钮的显示与隐藏*/
   $("market_e_ul").onmouseover= function(){
	  clearInterval(timeR)
	 
	};
   $("market_e_ul").onmouseout = function(){
	  clearInterval(timeR)
	 timeR = setInterval($("right2").onclick,3000);
	 
  }
//读取cookie
let userName;
	userName=getCookie('userName');
//将userName插入头部
	if(userName){
		jQuery(".userNAME").html(userName);
		jQuery(".loading li:first-child").remove();
		//将退出按钮插入头部 
		jQuery(".loading").prepend("<li class='li'><a href='javascript:tuichu()'>退出</a></li>")
	}
function tuichu(){
	jQuery(".loading li:first-child").remove();
	jQuery(".loading").prepend("<li class='li'><a href='login.html'>请登录</a></li>")
	removeCookie("userName");
	location.reload()
}




































