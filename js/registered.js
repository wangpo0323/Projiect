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
addLoadEvent(changeyzm);
//给刷新按钮绑定事件
$("input2").onclick=function(){
	$("input2").reset;
}
//提交按钮绑定事件
function sb(){
	//验证邮箱
	$("email").onblur=function(){
		if(!checkAll("Email",$("email").value)){
			$("span1").innerHTML="* 邮箱格式有误"
			$("email").style.cssText="border:1px solid red";
			
		}else{
			$("span1").innerHTML="√ 可以使用";
			$("email").style.cssText="border:1px solid #ccc";
		}
	};
	//验证电话
	$("phone").onblur=function(){
		if(!checkAll("Phone",$("phone").value)){
			$("span2").innerHTML="* 电话格式有误"
			$("phone").style.cssText="border:1px solid red";
			return false;
		}else{
			$("span2").innerHTML="√ 可以使用"
			$("phone").style.cssText="border:1px solid #ccc";
		}
	}; 
	//验证密码
	$("password").onblur=function(){
		if(!checkAll("password",$("password").value)){
			$("sp2").innerHTML="x 密码输入错误"
			$("password").style.cssText="border:1px solid red";
			return false;
		}else{
			$("sp2").innerHTML="√";
			$("phone").style.cssText="border:1px solid #ccc";
		}
	};
	//验证确认密码
	$("password1").onblur=function(){
		if(!checkAll("password",$("password").value)){
			$("sp3").innerHTML="x 密码输入错误";
			$("password1").style.cssText="border:1px solid red";
			return false;
		}else if($("password").value!=$("password1").value){
			$("sp3").innerHTML="两次输入密码不一致"
			$("password1").style.cssText="border:1px solid red"
			$("password").style.cssText="border:1px solid red";
			return;
		}else{
			$("sp3").innerHTML="√";
			$("password1").style.cssText="border:1px solid #ccc"
			$("password").style.cssText="border:1px solid #ccc";
		}
	};
	//确认验证码
	$("yanzheng").onblur=function(){
		if($("yanzheng").value!=$("showCode").innerHTML){
			$("yanzheng").style.cssText="border:1px solid red";
			return fasle;
		}else{
			$("yanzheng").style.cssText="border:1px solid #ccc";
		};
	};
	$("form1").submit();	
}

































