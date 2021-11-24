var str  = "2018-4-4 15:26:8";
/**
 * 1.基于SPLIT按照空格把字符串拆分成两部分
 */
function addZero(val) {
    return val <10 ? "0" + val:val
}
var ary = str.split(' '),
    aryLeft = ary[0].split('-'),
    aryRight = ary[1].split(':');
console.log(aryLeft, aryRight);
var month = addZero(aryLeft[1]),
    day = addZero(aryLeft[2]),
    hour = addZero(aryRight[0]),
    minute = addZero(aryRight[1]);
var result = month+'月'+day+'日 '+hour+'时'+minute+'分'
console.log(str)
console.log(str.split(/(?:-| |:)/g))
console.log(result)