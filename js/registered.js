/*
//验证邮箱
$("email").onblur=function(){
	if(!checkAll("Email",$("email").value)){
		$("span1").innerHTML="* 邮箱格式有误"
		$("email").style.cssText="border:1px solid red"
	}else{
		$("span1").innerHTML="√ 可以使用"
	}
};
//验证密码
$("password").onblur=function(){
	if(!checkAll("password",$("password").value)){
		$("sp2").innerHTML="x 密码输入错误"
		$("password").style.cssText="border:1px solid red"
	}else{
		$("sp2").innerHTML="√"
	}
}
//确认密码
$("password1").onblur=function(){
	if(!checkAll("password",$("password").value)){
		$("sp3").innerHTML="x 密码输入错误";
		$("password1").style.cssText="border:1px solid red"
	}else if($("password").value!=$("password1").value){
		$("sp3").innerHTML="两次输入密码不一致"
		$("password1").style.cssText="border:1px solid red"
		$("password").style.cssText="border:1px solid red"
	}else{
		$("sp3").innerHTML="√"
	}
};
//验证码
function changeyzm(){		
	var num;
	var str="";//验证码
	while(true){
		num=parseInt(Math.random()*123);
		if(num>=97 && num<=122){
			str+=String.fromCharCode(num);
		}
		if(num>=65 && num<=90){
			str+=String.fromCharCode(num);
		}
		if(num>=0 && num<=9){
			str+=num.toString();
		}
		if(str.length>=4){
			break;
		}
	}
	$("showCode").innerHTML=str;
}
var genghuan=document.getElementsByClassName("genghuan")[0];
	genghuan.onclick=function(){
		changeyzm()
	}
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
};
addLoadEvent(changeyzm);*/
//给刷新按钮绑定事件
$("input2").onclick=function(){
	$("input2").reset;
}
//提交按钮绑定事件
function sb(){
	if(!checkAll("Email",$("email").value)){
		$("span1").innerHTML="* 邮箱格式有误"
		$("email").style.cssText="border:1px solid red";
		$("email").focus();
		return;
	}else{
		$("span1").innerHTML="√ 可以使用";
		
	}
	if(!checkAll("password",$("password").value)){
		$("sp2").innerHTML="x 密码输入错误"
		$("password").style.cssText="border:1px solid red";
		return;
	}else{
		$("sp2").innerHTML="√"
		
	}
	if(!checkAll("password",$("password").value)){
		$("sp3").innerHTML="x 密码输入错误";
		$("password1").style.cssText="border:1px solid red";
	}else if($("password").value!=$("password1").value){
		$("sp3").innerHTML="两次输入密码不一致"
		$("password1").style.cssText="border:1px solid red"
		$("password").style.cssText="border:1px solid red";
		return;
	}else{
		$("sp3").innerHTML="√";
	}
	$("form1").submit();
}


































