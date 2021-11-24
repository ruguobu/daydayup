// (function(){
//     function jQuery(){
//        console.log("大帅逼")
//     }
//     window.jQuery = window.$ = jQuery;
//     //把需要供外面使用的方法,通过给WIN设置属性的方法暴露出去
// })();
// jQuery();
// $();

var Zepto = (function(){
    //...
    return {
        xxx:function(){
            console.log("大帅逼")
        }
    }
})()
