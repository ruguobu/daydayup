/**
 * 当前函数执行，形成一个私有作用域A，
 * A的上级作用域是谁，和她在哪里执行的没有关系
 * 在哪里创建的，她的上级作用域就是谁
 * 
 */


var a = 12;

function fn(){
    //=>arguments: 实参集合
    //=>arguments.callee:是当前函数本身FN
    //=>arguments.callee.caller:当前函数在哪里执行的，CALLER就是谁
    //记录的是它执行的宿主环境，在全局下执行CALLER，结果是ＮＵＬＬ
    console.log(arguments.callee.caller);
}

function sum(){
    var a = 120;
    fn();
}　

sum();

function aa(){
    fn();
}
aa()

var n = 10;
function fn(){
    var n =20;
    function f(){
        n++;
        console.log(n);
    }
    f(); 
    return f;
}
var x = fn();//把ＦＮ执行是结果赋值给ｘ
x();
x();
console.log(n)
