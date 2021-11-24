/**
 * 1.把ARGU中存储是实参值遍历
 * 2.把值累加
 */
function sum(){
    console.log(arguments)
    var total = null;
    for(var i = 0; i<arguments.length;i++){
        var item = arguments[i]//每一次遍历出来的实参值
        total += item;
    }
    return total
}
console.log(sum(10,20))

/**
 * 1.把字符串转换为数字
 * 2.非有效数字不再相加
 */
function sum(){ 
    console.log(arguments)
    var total = null;
    for(var i = 0; i<arguments.length;i++){
        var item = arguments[i]//每一次遍历出来的实参值
        //不管item传递是啥,都先转换为数字类型
        item = Number(item)
        //是有效数字才累加
        isNaN(item) ? null : total += item;
    }
    return total
}
console.log(sum(10,20))