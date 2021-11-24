//关于私有变量的一点练习
var ary = [12,23];
function fn(ary) {
    //一个变量只能指向一个空间
    console.log(ary);//=>[12,23]
    ary[0] = 100;//改了堆内存的值
    ary =[100];
    ary[0] = 0;
    console.log(ary)//=>[0]
}
fn(ary);
console.log(ary);//=>[100,23]