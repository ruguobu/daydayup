
function changeTab(curIndex) {

}


for(var i=0;i<tabList.length;i++){
    tabList[i].onclick = function(){
        changeTab(i);
        // 执行方法,形成一个私有的栈内存,遇到变量i,i不是私有变量,向上级作用域查找
        // 所有事件绑定都是异步编程
    }
}