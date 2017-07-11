/*
* @Author: Administrator
* @Date:   2017-07-04 21:12:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-04 21:13:33
*/
//获取按钮的
let vipName=getCookie("userName");	
let goodsId=getCookie("number");
$(function(){
	$.ajax({
		type:"get",
		data:{'vipName':vipName},
		url:"../php/getShoppingCart.php",
		async:true,
		success:function(data){
			let obj=eval(data);
			//将返回的内容解析，将内容插入页面
			$("#img").attr({src:obj[0].goodsImg});
			$("#shuoming").html(obj[0].goodsDesc);//说明
			$("#num").val(obj[0].goodsCount);//数量
			$("#price").html("￥"+obj[0].goodsType);//价格
			$("#sumPrice").html("￥"+obj[0].goodsType*obj[0].goodsCount)//总价格
			$("#UsPrice").html("$"+parseInt(obj[0].goodsType*obj[0].goodsCount/7))//美元
			$("#sumNum").html(obj[0].goodsCount);
			$("#zongjiage").html("￥"+obj[0].goodsType*obj[0].goodsCount);//所有商品的总价格				
		}
	});
	//删除购物车商品	
	$("#delete").click(function(){
		var result=new Array();
		//判断是否已选择商品
		var checked=document.getElementById("xuanze");
		if(!checked.checked){
			alert("请选择要删除的商品!")
		}else{
			//通过表格删除
			//向服务器请求删除服务器的商品信息
			$.ajax({
				type:"get",
				url:"../php/deleteGoods.php",
				data:{'vipName':vipName,'goodsId':goodsId},
				async:true,
				success:function(data){
					
				}
			});
		}			
	});	
})
//修改购物车的数量
	$(function(){
		$($("#num").val()).bind('input',function(){
			alert(1)
			$.ajax({
				type:"get",
				url:"../php/updateGoodsCount.php",
				async:true,
				data:{"vipName":vipName,"goodsId":goodsId,"goodsCount":goodsNum},
				success:function(data){
					alert(1)
				}
			});			
		})
			
			
		
	})
		


































