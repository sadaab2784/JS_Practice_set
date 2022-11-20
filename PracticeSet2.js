// PracticeSet-3
// const, let and var in javascript
var a = 45;
// var b = "Alone";
let b = "Alone";
var c = null;
var d = undefined;
// note : var is globally scope, while let & const are block scoped
{
    // var b = 'this'
    let b = 'this'
    console.log(b); 
}
console.log(b);
// output: this this
// output: this Alone

// note: var can be updated & re-declared within its scope
    //   let can be updated but not re-declared
    //   const can neither be updated nor be re-declared

const author = "Alone";
// let author = 5; // Throws an error because sonatant cannot be changed

// note: var variable are initialized with undefined whereas,
    //   let and const variables are not initilized
    //   const must be initialized during declareation unlike let and var

