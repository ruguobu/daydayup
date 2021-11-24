var a = 12,
    b =13,
    c =14;
function fn(a) {
    /**
     * 
     
    形参赋值
     a = 12
    变量提升
     var b;
     =>在私有作用域中,只有已下两种情况是私有变量
      a：声明过的变量()
    　ｂ：形参也是私有变量
    剩下的都不是自己私有变量，都需要基于作用域链的机制向上查找

     */
    console.log(a,b,c)　//12,undefined,14
    var b = c = a = 20;
    /**
     * var b=20;
     * c=20;=>把全局的ｃ修改为20；
     * a=20;
     */
    console.log(a,b,c)　//20,20,20
}
fn (a)
console.log(a,b,c) //12,13,20