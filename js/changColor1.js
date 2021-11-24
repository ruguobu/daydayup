// alert("hello")
// 目的:隔着三行变色
// 1.获取到li(需要获取到装li的box)
var box = document.getElementById('box')
var listLi = document.getElementsByTagName('li')
console.dir(listLi);
// 2.重复的将背景颜色搞上去
for(var i = 0; i<listLi.length;i++){
   listLi[i].className = 'bg'+ i%3;
   listLi[i].onmouseover = function(){
       this.style.background = 'yellow'
   }
   listLi[i].onmouseout = function(){
    this.style.background = ''
}

   
}
