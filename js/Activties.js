/*
* @Author: Administrator
* @Date:   2017-07-03 20:22:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-04 20:38:17
*/
 function $(id){
    return document.getElementById(id);
  };
  var time1=null;
function GetRTime(){
    var EndTime= new Date('2017/08/30 00:00:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    }
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s ;
    document.getElementById("h1").innerHTML = h;
    document.getElementById("m1").innerHTML = m;
    document.getElementById("s1").innerHTML = s ;
    document.getElementById("h2").innerHTML = h;
    document.getElementById("m2").innerHTML = m;
    document.getElementById("s2").innerHTML = s ;
    document.getElementById("h3").innerHTML = h;
    document.getElementById("m3").innerHTML = m;
    document.getElementById("s3").innerHTML = s ;
     document.getElementById("h4").innerHTML = h;
    document.getElementById("m4").innerHTML = m;
    document.getElementById("s4").innerHTML = s ;
    document.getElementById("h5").innerHTML = h;
    document.getElementById("m5").innerHTML = m;
    document.getElementById("s5").innerHTML = s ;
    document.getElementById("h6").innerHTML = h;
    document.getElementById("m6").innerHTML = m;
    document.getElementById("s6").innerHTML = s ;
  }
  time1=setInterval(GetRTime,0);



































