let person = {
    name:'张三',
    age:14
}

const p = new Proxy(person,{
    get(){
       console.log("有人读取了")
    },
    set(){

    }
})

console.dir(Array)
// propertyIsEnumerable

var array1 = [1,4,9,16]
const map1 = array1.map(x => x*2);
console.log(map1)


var arr = [1, 2, 3, 4, 5];
arr.forEach((item) => {
    console.log(item);
});

console.log(arr.values().next)