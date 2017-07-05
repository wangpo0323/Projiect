function $(id){
    return document.getElementById(id);
}
var date=[
        {"url1":"../image/zoom.jpg","url2":"../image/zoom.jpg"},
        {"url1":"../image/zoom1.jpg","url2":"../image/zoom1.jpg"},
        {"url1":"../image/zoom2.jpg","url2":"../image/zoom2.jpg"},
        {"url1":"../image/zoom3.jpg","url2":"../image/zoom3.jpg"}
    ];
//    获取各个元素
    var ObjCon=document.getElementById("contain");
    var ObjMainBox=document.getElementById("mainBox");
    var ObjMainImg=ObjMainBox.getElementsByTagName("img")[0];
    var ObjBigBox=document.getElementById("bigBox");
    var ObjBigImg=ObjBigBox.getElementsByTagName("img")[0];
    var ObjSmallBox=document.getElementById("smallBox");
    var Lis=ObjSmallBox.getElementsByTagName("li");
    var ObjMark=document.getElementById("mark");
    var ObjFloatbox=document.getElementById("floatBox");

//ShowDetails函数的作用主要是放大镜效果

    function ShowDetails(){
//        鼠标进入ObjMark后 ObjFloatbox和ObjBigBox显示
        ObjMark.onmouseover=function(){
            ObjFloatbox.style.display="block";
            ObjBigBox.style.display="block";
        };
//        鼠标离开ObjMark后 ObjFloatbox和ObjBigBox隐藏
        ObjMark.onmouseout=function(){
            ObjFloatbox.style.display="none";
            ObjBigBox.style.display="none";
        };
//        鼠标在ObjMark上运动
        ObjMark.onmousemove=function(ev){
            var event=ev||window.event;//兼容ie
//            value和valueY是鼠标移动后ObjFloatbox层的left和top值
//            ObjMainBox.offsetLeft-ObjCon.offsetLeft是获取的ObjFloatbox距离浏览器可是区域最左边的距离
//            ObjMainBox.offsetTop-ObjCon.offsetTop是获取的ObjFloatbox距离浏览器可是区域最左边的距离
//            ObjFloatbox.offsetWidth/2和ObjFloatbox.offsetHeight/2的目的是保持进入ObjMark区域后鼠标始终保持在该层正中间
            var valueX=event.clientX-ObjMainBox.offsetLeft-ObjCon.offsetLeft-ObjFloatbox.offsetWidth/2;
            var valueY=event.clientY-ObjMainBox.offsetTop-ObjCon.offsetTop-ObjFloatbox.offsetHeight/2;
//边框检测
//             ObjFloatbox可以设的最大left值是ObjMainBox的宽度减去ObjFloatbox的宽度
//             ObjFloatbox可以设的最大top值是ObjMainBox的高度减去ObjFloatbox的高度
            if(valueX<0){
                valueX=0
            } else if(valueX>ObjMainBox.offsetWidth-ObjFloatbox.offsetWidth){
                valueX=ObjMainBox.offsetWidth-ObjFloatbox.offsetWidth
            }
            if(valueY<0){
                valueY=0
            } else if(valueY>ObjMainBox.offsetHeight-ObjFloatbox.offsetHeight){
                valueY=ObjMainBox.offsetHeight-ObjFloatbox.offsetHeight
            }
//给ObjFloatbox设置left和top值
            ObjFloatbox.style.left=valueX+"px";
            ObjFloatbox.style.top=valueY+"px";
//因为放大镜效果是对原图的高和宽分别进行相应的放大所以移ObjFloatbox移动，ObjBigImg也会按照高的比例和宽的比例进行移动

//            宽的比例是等于ObjBigImg和ObjMainBox宽度的比例或者是ObjFloatbox和ObjBigBox的比例；
//            高的比例计算方法和宽的比例计算方法相似

            var percentX=ObjBigImg.offsetWidth/ObjMainBox.offsetWidth;
            var percentY=ObjBigImg.offsetHeight/ObjMainBox.offsetHeight;

            ObjBigImg.style.left=-percentX*valueX+"px";
            ObjBigImg.style.top=-percentY*valueY+"px";
        }
    }
//    ChangeImg函数的作用是在鼠标进入四个小图标上时，将放大镜效果上的图片分别替换为与其本身对呀的中等图片和大图片；
    function ChangeImg(){
        for(var i=0;i<Lis.length;i++){
            Lis[i].id=i;
            Lis[i].onmouseover=function(){
                ObjMainImg.src=date[this.id].url1;
                ObjBigImg.src=date[this.id].url2;
            }
        }
    }
//    常用的将函数追加到window，onload中；
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
    }
    addLoadEvent(ShowDetails);
    addLoadEvent(ChangeImg);
//选项卡
// 获取元素
//获取li
var DomLis=$("sect").children;
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
var Lieas=$("trection").children;
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



























































