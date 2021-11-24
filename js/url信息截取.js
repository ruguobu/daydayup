var str = "http://www.ruanyifeng.html?id=2233&name=zww&sex=man#teacher"
//#后面的称为哈希值

/**
 * 1.先找到问号,把问号后面的信息截取下来
 * 2.存在#截取到#,不存在#截取到末尾
 * 3.
 */

var indexASK = str.indexOf('?'),
    indexWell = str.indexOf('#');
if(indexWell > -1 ){
    str = str.substring(indexASK +1,indexWell)
}else {
    str = str.substr(indexASK + 1)
}
console.log(str)
var ary = str.split('&');
console.log(ary)
var obj = {};
for (var i=0 ;i<ary.length;i++){
    var item = ary[i],
        itemAry = item.split('=');
        console.log(itemAry)
    var key = itemAry[0],
        value = itemAry[1];
    obj[key] = value;
}
console.log(obj)
