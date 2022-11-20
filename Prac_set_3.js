// PracticeSet-3
// primitives and Object in javascript

// There are the 7 primitive datatypes in javascript :- Null, Number, String, Symbol, BigInt, Boolean, undefined
// Object is a non-primitive datatype in javascript

//nn bb ss u - Primitive datatype in Javascript
let a = null;
let b = 150;
let c = true;
let d = BigInt("250") + BigInt("5");
let e = "Alone";
let f = Symbol("I am a nice Symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
//output: null 150 255n Alone Symbol(I am a nice Symbol) undefined
console.log(typeof d);
//output: bigint


// non- primitive datatype -  Object in javascript
const item = {
    "Harry": true,
    "Sonu": false,
    "Alone": 55,
    "Sid": undefined
}
console.log(item["Alone"]);
console.log(item["Harry"]);
//output: 55 true