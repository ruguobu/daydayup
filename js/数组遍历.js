var ary = [1,2,3]
console.dir(ary)
ary.map(x => console.log(x))//映射出一个新的数组
ary.forEach(x => console.log(x))
ary.find(x => console.log(x))

for(let value of ary){
    console.log(value)
}


var s=0;
ary.forEach(x=>{
   s+=x
});
console.log(s)
//