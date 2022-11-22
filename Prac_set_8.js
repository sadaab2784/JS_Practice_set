        /*........ for loop in javascript .......*/ 
        // Types of loops in javascript
// 1. for loop (loop a block of code no of times)
// 2. for in loop (loops through the keys of an object)
// 3. for of loop (loops through the values of an object)
// 4. while loop (loops a block based on a specific condition)
// 5. do-while loop (while loop variant which runs atleast once)

/*............ for loop.........*/
/*.......syntax      for(statement1; statement2; statement3){
                       // code to be executed
                     }.......*/
// statement1 is exected one time 
// statement2 is the condition base on which the loop runs (loop body is executed)
// statement3 is executed everytime the loop body is executed

for (let i=0; i<5; i++){
    console.log(i);
}
// output: 0 1 2 3 4

// program to add first n natural number
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
    sum += i + 1;
}
console.log("Sum of first" + n + " natural number is" + sum);
// output: Enter the value of n> 3
// sum of first 3 natural number is 6

//note: when we use "let" for this for loop, then
console.log(i);
//output: ReferenceError: i is not defined    // because the scope of "let" is on block level

//note: when we use "var" for this for loop, then
console.log(i);
//output: 3    // because the scope of "var" is on Global now..


/*....... for in loop .....*/
/*...syntax....    for (key in object){
                    //code to be executed
                 }.....*/
let obj = {
    harry: 90,
    subh: 45,
    sonu: 75,
    ritik: 60,
    shiv: 23
}
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a]);
}
/*.. output: marks of harry are 90
             marks of subh are 45
             marks of sonu are 70
             marks of ritik are 60
             marks of shiv are 23  ......*/


/*..............for of loop.......*/
/*.... syntax....   for (variable of iterable){    // Iterable data structure like Arrays, String etc..
                       // code to be executed
                    }..........*/
for (let b of "Harry") {
    console.log(b);
}
// output: H a r r y
