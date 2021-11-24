// a =12;
// console.log(a);
// let a =133;
// console.log(a)

// var a = 12;
// if (true) {
//     console.log(a);
//     //Uncaught ReferenceError: Cannot access 'a' before initialization
//     let a = 13;
//     //基于LET创建变量,会把{ }当作私有块级作用域(类似于函数的私有作用域),在这里也是重新检测语法规范,
//     //看一下是否基于新语法创建的变量,如果是新语法,就
// }

//es6 解决了浏览器暂时性死区问题

// console.log(a);
console.log(typeof a)
//在原有浏览器渲染机制下,基于typeof等逻辑运算符检测一个未被声明的变量,不会报错返回'undefined'
console.log(typeof a)
let a;
//如果当前变量是基于ES6语法处理,在没有声明这个变量的时候,使用TYPEOF检测会报错,不会是'undefined',解决了原生JS的BUG
