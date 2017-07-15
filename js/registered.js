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



































