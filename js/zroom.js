//选项卡
// 获取元素
//获取li
var DomLis=document.getElementById("sect").children;
var DomDivs=document.getElementsByClassName("intr_cont")
var index=0;
DomDivs[0].style.display="block";
for(var i=0;i<DomLis.length;i++){
    DomLis[i].index=i;
    DomLis[i].onclick=function(){
        DomDivs[index].style.display="none";
        DomLis[index].className=" ";
        this.className = 'active';
        DomDivs[this.index].style.display = 'block';
        index = this.index;
    }
}
//第二个选项卡
var Lieas=document.getElementById("trection").children;
var Diveas=document.getElementsByClassName("intro_text");
var x=0;
for(var j=0;j<Lieas.length;j++){
    Lieas[j].x=j;
    Lieas[j].onclick=function(){
        Diveas[x].style.display="none";
        Lieas[x].className=" ";
        this.className="hover";
         Diveas[this.x].style.display = 'block';
         x = this.x;
    }
}



























































