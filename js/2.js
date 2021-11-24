/* 
tip:基本数据类型是没有 属性名 当前对象具备这个特征 键[key]
1.形成一个全局作用域(栈内存)
2.代码自上而下执行
   1.首先开辟一个新的堆内存(aaafff111),把键值对存储到堆内存中
       n:10,
       m:obj.n*10 => obj.n 此时堆内存信息还没有存储完成,空间的地址还没有给obj,此时
     报错喽!代码阻塞喽   obj是undefind.n 是TypeError喽
    2. 声明变量obj
    3. 将两者关联
*/
var obj = {
    n:10,
    m:obj.n*10
}
console.log(obj.m)