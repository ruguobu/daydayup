var i = 1;
function fn(i){
    return function(n){
        console.log(n+ (++i));
    }
}
var f = fn(2); //柯里化函数
f(3); 
fn(5)(6);
fn(7)(8);
f(4)