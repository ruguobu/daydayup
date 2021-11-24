var ary = [1,2,2,3,5,5,5,3,4,5,2,5,2,5,4,4,9]

/*解决方案 双for循环
1.依次拿出数组中每一项
2.和当前拿出项的每一项比较
3. 如果发现有重复的,找到它,删除它
*/

// for(var i = 0;i<ary.length-1; i++){//不用拿最后一项
//    var item = ary[i]
//    //item:依次拿出的每一项
//    //i:当前项拿出的索引
//    //和当前拿出项的后面每一项进行比较
//    for(var k =i+1;k<ary.length;k++){
//       if(item===ary[k]){
//           //相等了即重复了,我们拿出索引是K这一项在原有数组中删除
//           ary.splice(k,1) 
//           k--;//删除后先减减
//           //执行删除操作 splice内置方法 删除原有数组改变 
//           //这样做会导致数组塌陷问题:当我们把当前项删除后,
//           //后面每1一项都要向前进一位,也就是原有数组索引发生改变
//           //此时我们K继续累加1,下一次再拿出来的结果就会跳过一位
//       }
//    }
   
// }
 
// console.log(ary)

/**
 * 基于对象的属性名不能重复,我们实现高性能数组去重
 * 1.创建一个空对象
 * 2.依次遍历数组中的每一项,把每一项的值,当作对象
 *   d的属性名和属性值存储起来
 */
var obj = {};
for(var i =0;i<ary.length;i++){
    var item = ary[i]; //每次循环拿出的那一项
    //如何判断对象中是否存在这个属性值:如果没有获取的值是undefined
    //出现过即重复了
    if(obj[item] !== undefined){
        /**
         *  ary.splice(i,1) i--;//防止数组塌陷
         * 如果数组宽度很长,splice后索引都要进一
         * 非常耗时,耗性能
         * 1.我们把数组最后一项获取到,替换当前内容
         * 2.删除数组最后一项
         * 3.此时不在需要重新计算索引(发现问题,解决问题)
         * 
         */
        ary[i] = ary[ary.length-1]
        ary.pop();
        i--;  
        continue;
    }
    //把这一项作为对象的属性名和属性值存储进去
    obj[item] = item; //obj[1] = 1 {1:1}
}
console.log(ary)



// new Set(ary) 
// console.log(new Set(ary))
// Array.from(new Set(ary))
// console.log(Array.from(new Set(ary)))

// var ary = []
// ary[1] = 4
// console.log(ary)
// console.log(ary.length)