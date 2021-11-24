function fn(n,m) {
    //=>如果n/m
    if(n === undefined || m === undefined) {
        if(n === undefined || m === undefined){
            return 0;
            //return还有一个作用:类似于循环中break,
            //能够强制结束函数体中代码的执行(return后面的代码不再执行 )
        }
    }
    var total = 0;
    total = n+m;
    return total;
}
console.log(fn(10))

n === undefined //经常这样判断n的值是否为undefined,可以
n == undefined //不可以 因为 null == undefined也是相等的
typeof n == 'undefined' //真实项目这种判断比较常见

total = 0; //0是有值的,值是0,从内存方面来说,会在栈内存中占一个位置
total = null;//开发者更喜欢用null来作为初始值,null是空对象指针,是不占内存位置