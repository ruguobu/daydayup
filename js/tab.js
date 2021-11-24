/*
1.给所有的li绑定点击事件,当点击任何li时,进行下一步
2.可以先清空li/div的class都为空
3.在让点击的li和对应的div有类名
*/
var tabBox = document.getElementById('tabBox');
console.log('tabBox: ', tabBox);
var tabList = tabBox.getElementsByTagName('li');
console.log('tabList: ', tabList);
var divList = tabBox.getElementsByTagName('div');
console.log('divList: ', divList);

function changeTab(n){
    for(var i = 0;i<tabList.length;i++){
        tabList[i].className = '';
        divList[i].className = '';
    }
    tabList[n].className = 'active';
    divList[n].className = 'active';
}

for(let i = 0;i<tabList.length;i++){
    tabList[i].onclick = function(){
        //=>事件绑定:给当前元素的某一个事件绑定一个方法
        //绑定的时候方法没有执行(属于创建一个方法)
        //当页面中手动触发点击事件的时候绑定的方法执行
        changeTab(i)
        console.log(i)
    }
}