// PracticeSet-4 (some practice set javascript question)

// Que-1: Create a variable of type string and try to add a number to it..
let a = "Alone";
let b = 5;
console.log(a + b);
//output: Alone5
// note: when you add two things to the string, then that things are concatenated

// Que-2: Use typeof operator to find the datatypeof the string in last question
console.log(typeof (a+b));
//output: string

// Que-3: Create a const object in javascript. can you change it to hold a number later..
const c = {
    name: "Alone",
    section: 1,
    isprincipal: false
} 
// c = "Alone"
// output: No, i cannot change it to hold a number later


// Que-4: Try to add a new key to the const object in problem 3 were you able to do it..
c['friend'] = "Sonu";
console.log(c);
// output: {name: 'Alone' section: 1, isprincipal: false, friend: 'Sonu'}
c['name'] = "Atish";
console.log(c);
// output: {name: 'Atish' section: 1, isprincipal: false, friend: 'Sonu'}


// Que-5: Write a javascript program to create a word meaning dictionary of 5 numbers..
const dict = {
    BOM: "Document Oriented Model",
    DOM: "Browser Oriented model",
    debugger: "debugger makes possible using the debug functions"
}
console.log(dict.DOM);
//output: Browser Oriented Model
console.log(dict['DOM']); // also we used this syntax
//output: Browser Oriented Model