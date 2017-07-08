/*
* @Author: Administrator
* @Date:   2017-07-03 13:48:27
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-03 15:07:22
*/

'use strict';
$.ajax({
	type:"get",
	url:"../php/getGoodsList.php",
	async:true,
	success:function(data){
		var obj=eval(data);
		for(let i=0;i<8;i++){
			let goodsId=obj[i].goodsId;
			let goodsPrice=obj[i].goodsPrice;
			let goodsImg=obj[i].goodsImg;
			let goodsDesc=obj[i].goodsDesc;
			let str="<li><a href='#'><img src='../images/S1L-A00-190.jpg'/></a><p><a href='#'></a><a href='#'>看到沮丧拉开发来的</a></p><p><a href='#'>大发发trfytu的大幅</a></p><p><a href='#'>安图恩几点开始对方告诉对方</a></p></li>";
			$(".shangpin").append(str); 
		}
	}
});






























window.onload=function(){
	page({
			id:"div1",
			nowNum:1,
			allNum:5
			//callBack:function(now,all){})
	})
};
//函数
function page(opt){
		if(!opt.id){return false};//没有ID不执行下面的代码
		var obj=document.getElementById(opt.id);
		var nowNum=opt.nowNum || 1;//写了当前页或不写1
		var allNum=opt.allNum || 5;//写了当前页或不写5
		var callBack=opt.callBack || function(){};
		if(nowNum>=4 && allNum>=6){
			var oA=document.createElement("a");
			oA.href="#1";
			oA.innerHTML="首页";
			obj.appendChild(oA);
		}
		if(nowNum>=2){
			var oA=document.createElement("a");
			oA.href="#"+(nowNum-1);
			oA.innerHTML="上一页";
			obj.appendChild(oA);
		}
		if(allNum<=5){
			for(var i=1;i<=allNum;i++){
				var oA=document.createElement("a");
				oA.href="#"+i;
				if(nowNum==i){
					oA.innerHTML= i;
				}else{
					oA.innerHTML="["+i+"]";
				}
				obj.appendChild(oA);
			}
		}
		else{
			for(var i=1;i<=5;i++){
				var oA=document.createElement("a");
				if(nowNum==1||nowNum==2){
					oA.href= "#"+i;
					if(nowNum==i){
						oA.innerHTML=i;
					}else{
						oA.innerHTML= "["+i+"]";
					}
				}
				else if((allNum-nowNum)==0||(allNum-nowNum)==1){
					oA.href="#"+(allNum-5+i);
					if((allNum-nowNum)==0 && i==5){
						oA.innerHTML=(allNum-5+i);
					}else if((allNum-nowNum)==1 && i==4){
						oA.innerHTML=(allNum-5+i);
					}
					else{
						oA.innerHTML="["+(allNum-5+i)+"]";
					}
				}
				else{
					oA.href="#"+(nowNum-3+i);
					if(i==3){
						oA.innerHTML= (nowNum-3+i);
					}else{
						oA.innerHTML="["+(nowNum-3+i)+"]";
					}
				}
				obj.appendChild(oA);
			}
		}
		if((allNum-nowNum)>=1){
			var oA=document.createElement("a");
			oA.href="#"+(nowNum+1);
			oA.innerHTML="下一页";
			obj.appendChild(oA);
		}
		if((allNum-nowNum)>=3 && allNum>=6){
			var oA=document.createElement("a");
			oA.href="#"+allNum;
			oA.innerHTML="尾页";
			obj.appendChild(oA);
		}
		//callBack(nowNum,allNum)
		//添加事件
		var aA=obj.getElementsByTagName("a");
		for(var i=0;i<aA.length;i++){
			aA[i].onclick=function(){
				var nowNum=parseInt(this.getAttribute('href').substring(1));
				obj.innerHTML=" ";
				page({
					id:opt.id,
					nowNum:nowNum,
					allNum:allNum,
					callBack:callBack
				})
				return false;//阻止默认事件向地址栏插入#
			}
		}
	}










































