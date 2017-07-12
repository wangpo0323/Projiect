/*
* @Author: Administrator
* @Date:   2017-07-04 21:12:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-04 21:13:33
*/
//获取按钮的
let vipName=getCookie("userName");
$(function(){	
	//显示购物车，将信息显示在页面上
	$.ajax({
		type:"get",
		data:{'vipName':vipName},
		url:"../php/getShoppingCart.php",
		async:true,
		success:function(data){
			let obj=eval(data);
			//将返回的内容解析，将内容插入页面
			for(let i in obj){
				//创建 表格
			let str="<tr id='trs' ord='"+obj[i].goodsId+"'><td><input type='checkbox'/></td><td><img style='width:65px;height:65px' src='"+obj[i].goodsImg+"'</td><td>"+obj[i].goodsDesc+"</td><td>￥"+obj[i].goodsType+"</td><td><input id='num1' style='width:10px;height:21px' type='button' value='-'/><input id='num2' style= 'width:59px;height:19px;border:1px solid #ccc;text-align:center' type='text' value=\""+obj[i].goodsCount+"\"/><input id='num3' style='width:10px;height:21px' type='button' value='+'/></td><td>￥0.00</td><td><span>￥"+obj[i].goodsCount*obj[i].goodsType+"</span><br/><span>$"+parseInt(obj[i].goodsCount*obj[i].goodsType/7)+"</span></td></tr>"				
				$("#quanuxan").before(str);
			}
			//减号按钮事件
			let jians=$("#onsale #num1")
			for(let i=0;i<jians.length;i++){
				(function(i){
					jians[i].onclick=function(){
						let count=$(this).next();
						let num=count.val();
						num-=1;
						if(num<=1){
							num=1;
						}
						count.val(num);
					}
				})(i)
			}
			//加
			let jias=$("#onsale #num3");
			for(var i=0;i<jias.length;i++){
				(function(i){
					jias[i].onclick=function(){
						let count=$(this).prev();
						let num=parseInt(count.val());
						num+=1;
						count.val(num)
					}
				})(i)
			}
			/*
			 * 全选单选
			 */
			$("#quanxuan").click(function(){
				$("#onsale :checkbox").check(this.checked);
			})
			//删除购物车
			$("#delete").click(function(){		
			var b=$("input[type='checkbox']").is(':checked')
			if(!b){
				alert("请选择删除的商品")
			}else{
				let tbs=document.getElementById("onsale");				
				for(var i=0;i<tbs.length;i++){
					var goodsId=tbs[i].getAttribute("ord");
					console.log(goodsId)					
				}
				
				$.ajax({
					type:"get",
					url:"../php/deleteGoods.php",
					async:true,
					data:{'vipName':vipName,'goodsId':goodsId},
					success:function(data){
						$(this).prev().remove()
						location.reload();
						}
					});
				}
			})
			//修改购物车数量
			
		}
	});	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})











//修改购物车的数量
//	$(function(){
//		$($("#num").val()).bind('input',function(){
//			alert(1)
//			$.ajax({
//				type:"get",
//				url:"../php/updateGoodsCount.php",
//				async:true,
//				data:{"vipName":vipName,"goodsId":goodsId,"goodsCount":goodsNum},
//				success:function(data){
//					
//				}
//			});			
//		})
//			
//			
//		
//	})
		


































