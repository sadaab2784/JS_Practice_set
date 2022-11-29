/*................... while loop in javascript.........*/
/*....syntax....   while (condition) {
                        // code to be executed
                    }..... */
// note: If the condition never becomes false, the loop will never end and this might crash the runtime
let n = prompt("Enter the value of n");
n = Number.parseInt(n);

let i = 0;
while (i<n) {
    console.log(i);
    i++;
}
// output: Enter the value of n> 4
// 0 1 2 3 

/*........ do while loop............*/
/*.... syntax..... do {
                     //code to be executed  => Execute at least once
                   }
                   while(condition)..........*/
let n1 = prompt("Enter the value of n1");
n1 = Number.parseInt(n1);

let j = 10;
do {
    console.log(j);
    j++;
}while (j<n)
//output: Enter the value of n1> 4
// 10

// note: "Do while loop" is a type of "while loop" that is executed at least once..
// because first execution, then condition checks...