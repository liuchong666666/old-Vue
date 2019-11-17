// var cal = {
//     add:function(n1,n2){
//         return n1 + n2;
//     }
// }

// //commonjs导出
// // module.exports = cal;
// // ES6导出
// export default cal;



//==================================================
var temp1 = '我是默认导出的结果';
export default temp1;
//导入方式是 import xxx from './cal.js'

//声明式导出
export var obj1 = '我是声明式1';
export var obj2 = '我是声明式2';
export var obj3 = '我是声明式3';

//导入方式是
// import {obj1,obj2} from './cal.js';

//另一种方式声明导出
var obj4 = '我是声明式导出4';
export { obj4 };

//导入方式是
//import {obj1,obj2,obj4} from './cal.js'

