//基本数据类型
// var name = 'zhang';
// var age = 18;
// var sex = "girl"

// var name = "dkkd";
// var age = 81;

// var person1 = {
//     namef
// }
/**
 * 单例设计模式(singleton pattern)
 * 1.表现形式
 * var obj = {
 *   xxx:xxx,
 *   ...
 * }
 * 2.作用
 * ba
*/
//实战思想

var n =2;
var obj = {
    n:3,
    fn:(function(n){
        n*=2;
        this.n+=2;
        var n =5;
        return function(m){
            this.n*=2;
            console.log(m+(++n))
        }
    })(n)
    //})(obj.n) 会报错
};
var fn = obj.fn;
fn(3);
obj.fn(3);
console.log(n,obj.n)