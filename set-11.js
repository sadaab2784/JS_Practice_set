// Practice set on loops and functions

// que-1: Write a program to print the marks of a students in an object using for loop.
//        obj = {harry: 98, rohan: 70, akash: 7}

let marks = {
    harry: 90,
    subham: 9,
    lovish: 56,
    Monika: 4
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
/*.. output: 
    The marks of harry are 90
    The marks of subham are 9
    The marks of lovish are 56
    The marks of Monika are 4 ..........*/

// Que-2: Write a program in Q1 using for in loop
for (let key in marks) {
    console.log("The marks of " + key + " are " + marks[key]);
}
/*.. output
    The marks of harry are 90
    The marks of subham are 9
    The marks of lovish are 56
    The marks of Monika are 4 ........*/

//Que-3: Write a program to print "try again" until the user enters the correct number..
let cn = 35;
let i;
while (i != cn){
    console.log("Try again");
    i = prompt("Enter the number");
}
console.log("You have entered a correct number");

/*...output: 
    Try again
    Enter the number> 23
    Try again
    Enter the number> 10
    Try again
    Enter the number> 35
    You have entered a correct number  .........*/

//Que-4: Write a function to find mean of 5 numbers ..
const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
}
console.log(mean(2, 3, 4, 7, 4));
//output: 4
