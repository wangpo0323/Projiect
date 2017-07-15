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
			let arr=[],array=[];
			//将返回的内容解析，将内容插入页面
			for(let i in obj){
				//创建 表格
			let str="<tr id='trs' ord='"+obj[i].goodsId+"'><td><input class='count' type='checkbox'/></td><td><img style='width:65px;height:65px' src='"+obj[i].goodsImg+"'</td><td>"+obj[i].goodsDesc+"</td><td class='goodsTypeM' id='goodstype'>￥"+obj[i].goodsType+"</td><td><input id='num1' style='width:10px;height:21px' type='button' value='-'/><input id='num2' style= 'width:59px;height:19px;border:1px solid #ccc;text-align:center' type='text' value=\""+obj[i].goodsCount+"\"/><input id='num3' style='width:10px;height:21px' type='button' value='+'/></td><td>￥0.00</td><td><span id='sumPrice'>￥"+obj[i].goodsCount*obj[i].goodsType+"</span><br/><span id='usPrice'>$"+parseInt(obj[i].goodsCount*obj[i].goodsType/7)+"</span></td></tr>"				
				$("#quanuxan").before(str);
				arr.push(obj[i].goodsCount);
				array.push(obj[i].goodsCount*obj[i].goodsType)
			}
			//将arr的求和出插入到页面(件数)
			var jianshu=eval(arr.join('+'))
			$('#sumNum').html(jianshu);
			//求所有商品的总jiage 
			var sumMoney=eval(array.join('+'))
			if(!sumMoney){
				sumMoney=0;
			}else{
				$('#zongjiage').html('￥'+sumMoney);
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
			 	全选单选
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
				//1.3个复选框
				//2.用循环判断  attr checked;
				//3.通过父元素
				let count=$(".count");
				for(var i=0;i<count.length;i++){
					if(count.eq(i).attr("checked")=="checked"){
						let goodsId=count.eq(i).parent().parent().attr("ord");
						count.eq(i).parent().parent().remove()
						$.ajax({
							type:"get",
							url:"../php/deleteGoods.php",
							async:true,
							data:{'vipName':vipName,'goodsId':goodsId},
							success:function(data){
								location.reload()
						}
					});
					}
				}				
			}
			})
			//修改购物车数量（增加）
				$('#content').on('click','#num3',function(){
					//拿到3个值(动态获取)
					var goodsCount=$(this).parent().find('#num2').val();
					var goodsType1=$(this).parent().parent().find('#goodstype').html().split("￥")[1];
					var goodsId=$(this).parent().parent().attr("ord");
					//计算每个商品的总价格
					var sumPrice=goodsType1*goodsCount;
					var UssumPrice=parseInt(sumPrice/7);
					//找到当前目标的插入
					$(this).parent().parent().find("#sumPrice").html("￥"+sumPrice);
					$(this).parent().parent().find("#usPrice").html("$"+UssumPrice);
				$.ajax({
					type:"get",
					url:"../php/updateGoodsCount.php",
					data:{'vipName':vipName,'goodsId':goodsId,'goodsCount':goodsCount},
					async:true,
					success:function(data){		
						//在此请求服务器拿到obj
						$.ajax({
							type:"get",
							url:"../php/getShoppingCart.php",
							data:{'vipName':vipName},
							async:true,
							success:function(data){
								let obj=eval(data);
								let newArray=[],newArray1=[];
								for(var i in obj){
									newArray.push(obj[i].goodsCount);
									newArray1.push(obj[i].goodsCount*obj[i].goodsType)
								}
								//将改变后的数量插入页面 
								var jianshu1=eval(newArray.join('+'));
								var zongjiage=eval(newArray1.join('+'));
								$('#sumNum').html(jianshu1);
								$('#zongjiage').html('￥'+zongjiage);
							}
						});
					}
				});
			})
			//剪数量
			$('#content').on('click','#num1',function(){
					//拿到3个值(动态获取)
					var goodsCount=$(this).parent().find('#num2').val();
					var goodsType1=$(this).parent().parent().find('#goodstype').html().split("￥")[1];
					var goodsId=$(this).parent().parent().attr("ord");
					//计算每个商品的总价格
					var sumPrice=goodsType1*goodsCount;
					var UssumPrice=parseInt(sumPrice/7);
					//找到当前目标的插入
					$(this).parent().parent().find("#sumPrice").html("￥"+sumPrice);
					$(this).parent().parent().find("#usPrice").html("$"+UssumPrice);
				$.ajax({
					type:"get",
					url:"../php/updateGoodsCount.php",
					data:{'vipName':vipName,'goodsId':goodsId,'goodsCount':goodsCount},
					async:true,
					success:function(data){		
						//在此请求服务器拿到obj
						$.ajax({
							type:"get",
							url:"../php/getShoppingCart.php",
							data:{'vipName':vipName},
							async:true,
							success:function(data){
								let obj=eval(data);
								let newArray=[],newArray1=[];
								for(var i in obj){
									newArray.push(obj[i].goodsCount);
									newArray1.push(obj[i].goodsCount*obj[i].goodsType)
								}
								//将改变后的数量插入页面 
								var jianshu1=eval(newArray.join('+'));
								var zongjiage=eval(newArray1.join('+'));
								$('#sumNum').html(jianshu1);
								$('#zongjiage').html('￥'+zongjiage);
							}
						});
					}
				});
			})
		}
	})
})

		


































