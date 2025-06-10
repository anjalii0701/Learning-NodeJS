require("./xyz.js");
const obj =require("./sum")
var name = "NodeJS";

var a=10; 

var b=20;

obj.calculateSum(a,b);
console.log(obj.x);

// console.log(name);
// console.log(a+b);
// console.log(global);
console.log(globalThis===global);//empty object 


