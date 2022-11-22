// PracticeSet-5
// Conditional expressions in javascript

let a = prompt("Hey whats your age?"); // note: prompt ask the question
console.log(typeof a);
// output: Hey what's your age> 45
// string
a = Number.parseInt(a) // Converting the string to a number
console.log(typeof a);
// number
if(a>0){
    alert("This is a valid age")
}
// output: Hey what's your age> 45
// This is a valid age
else{
    alert("This is an invalid age");
}
//output: Hey what's your age> -35
// This is an invalid age

/* ......If--else if statement...... */
if(a<0){
    alert("This is an invalid age");
}
else if(a<9){
    alert("You are a kid and you can't even think of driving");
}
else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving after 18");
}
else{
    alert("You can now drive as you are above 18");
}
// output: Hey what's your age> 17
// You are a kid and you can think of driving after 18

/* switch statement.........
Explore switch statement and write a basic program...... */
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


