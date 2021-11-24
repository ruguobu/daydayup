//1.获取box下所有li(先获取box)
let box = document.getElementById('box')
console.log(box);
console.dir(box);
// console.log(typeof box)
//通过STYLE修改行内样式
// box.style.backgroundColor = 'pink'
//基于CLASS-NAME属性修改BOX的样式类,从而改变样式
// box.className = 'bgColor box'
box.className += ' bgColor'

var boxList = box.getElementsByTagName('li')
console.dir(boxList)

//2.搞个循环来完成样式复制
for(var i = 1;i<boxList.length;i+=2){
    boxList[i].classNameppp = 'liColor'
}

