//获取邮箱的id
/*
function $(id){
	return document.getElementById(id);
}
//验证邮箱
$("email").onblur=function(){
	if(!checkAll("Email",$("email").value)){
		$("span1").innerHTML="x"
	}else{
		$("span1").innerHTML="√"
	}
};
//验证密码
$("password").onblur=function(){
	if(!checkAll("password",$("password").value)){
		$("span2").innerHTML="x"
	}else{
		$("span2").innerHTML="√"
	}
}
//提交
function chechkUser(){
	var result=$("email").value;
	var password=$("password").value;
	if(!result){
		$("email").value="帐号不能为空";
		return false;
	}
	if(!password){
		$("password").value="密码不能为空";
		return false;
	}
}
*/
var userEmile,userPass;
$(function(){
	$("#a").click(function(){
		//1.ajax(post方式)
		$.post("../php/login.php",{userEmile:$("#email").val(),userPass:$("#password").val()},function(data){
			if(data=="0"){
				$("#tishi").html("登录有误，请确认邮箱和密码是否输入正确");
			}else if(data=="1"){
				saveCookie('userName',$("#email").val(),360);
				//saveCookie(userPass,$("#password").val(),7);
				location.href="index.html";
				
			}
		})		
	})
});

