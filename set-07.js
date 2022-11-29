// Practice set on Operator and Conditionals

/*  Que-1:  Use logical operators to find whether the age os a person lies b/w 10 and 20...*/
let age = prompt("what is your age?");
age = Number.parseInt(age);
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20");
}
else{
    console.log("Your age doesn't lies between 10 and 20");
}
// output: what is your age?> 14
// Your age lies between 10 and 20

/* Que-2: Demonstrate the use of switch case statements in javascript */
let Age = prompt("what is your age?");
Age = Number.parseInt(Age);
switch(Age) {
    case '12':
        console.log("Your age is 12");
        break;
    case '13':
        console.log("Your age is 13");
        break;
    case '14':
        console.log("Your age is 14");
        break;
    case '15':
        console.log("Your age is 15");
        break;
        default:
            console.log("Your age is not special");
}    // note : If you not use the break, it means If case '12' is a match,then all the cases below that case(along with default) executes
// simply you can use the break
// output: what is your age?> 12
// Your age is 12


/* Que-3: write a javascript program to find whether a number is divisible by 2 and 3... */
let num = prompt("Enter the number:");
num = Number.parseInt(num);
if(num%2 == 0 && num%3 == 0){
    console.log("Your number is divisible by 2 and 3");
}
else{
    console.log("Your number is not divisible by 2 and 3");
}
// output: Enter the number: 12
// Your number is divisible by 2 and 3

/* Que-4: write a javascript program to find whether a number is divisible either by 2 and 3 .. */
let num1 = prompt("Enter the number:");
num1 = Number.parseInt(num1);
if(num1%2 == 0 || num1%3 == 0){
    console.log("Your number is divisible by either 2 and 3");
}
else{
    console.log("Your number is not divisible by either 2 and 3");
}
// output: Enter the number: 14
// Your number is divisible by either 2 and 3


/* Que-5: Print "You can drive" or "you cannot drive" based on age being greater than 18 using ternary operator.. */
let age2 = 19;
let a = age2 > 18 ? "You can drive" : "You cannot drive";
console.log(a);
// output: You can drive

let age3 = 15;
let a1 = age3 > 18 ? "You can drive" : "You cannot drive";
console.log(a1);
// output: You cannot drive
