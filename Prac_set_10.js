/*.............function in javascript.........*/

// A javascript function is a block of code designed to perform a particular task.

/*  syntax   function myFunc(){
    // Code 
}

     function myFunc(parameter1, parameter2){  // function with parameters
        // code :- Here the parameters behaves as local variables
     }
     myFunc(7,8);    // function invocation
     .........*/

    // function invocation is a way to use the code inside the function
    // A function can also return a value. The value is "returned" back to the caller.

    /*..... Another way to create & use the function

    const sum = (a, b) => {
        let c = a + b;
        return c;   // return the sum
    }
    let y = sum(1, 3);
    console.log(y);  // print 4

    ...........*/


function onePlusAvg(x, y){
    // console.log("Done");
    return 1 + (x + y) / 2
}

// Arrow function
const sum = (p, q) => {
    return p + q
}

//without any parameter Arrow function
const hello = () => {
    console.log("Hey how are  you?");
    return "Hello"
}

let a = 1;
let b = 2;
let c = 3;

console.log("One Plus Average of a and b is ", onePlusAvg(a, b));
console.log("One Plus Average of b and c is ", onePlusAvg(b, c));
console.log("One Plus Average of a and c is ", onePlusAvg(a, c));
console.log(sum(9, 7));
let v = hello();
console.log(v);
