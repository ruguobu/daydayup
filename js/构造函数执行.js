// function fn(){
    
// }
// // var f = fn();
// // console.log(f)

// var f = new fn();//在函数执行前加一个new
// console.log(f)


// var num1 = 12;
// var num2 = new Number(12);
// console.log(typeof num1);//=>"number"
// console.log(typeof num2);//=>"object"

function Fn(name,age){
    var n =  10;
    this.name = name;
    this.age = age + n;
}
//=> 普通函数执行

var f1 = new Fn("xxx",20)
console.log(f1.n)
//=>undefined 只有this.xxx = xxx的才会和实例有关系,
// n是私有作用域中的一个私有变量