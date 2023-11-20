//LET VS CONST VS VAR
//var ==> function scope
//let and const => block scope

// var myName = "thapa";
// console.log(myName);

// myName = "vinod";
// console.log(myName);

// let myName = "mona";
// console.log(myName);

// myName = "dawkhar";
// console.log(myName);

// const myName = "monalisa";
// console.log(myName);

// myName = "mishra";
// console.log(myName);

function biodata() {
  let myFirstName = "ajay";
  console.log(myFirstName);
  if (true) {
    var myLastName = "patil";
    console.log("inner " + myFirstName);
    console.log("inner " + myLastName);
  }
  console.log("innerOuter " + myLastName);
}
biodata();

//Template Literals:-(Template Strings)
console.log(tableOf + "*" + num + "=" + tableOf * num);
console.log(`${tableOf} * ${num} = ${tableOf * num}`);

//Default Arguments:-
//Default function parameters allow name parameters to be initialized with default values if no value or undefined is passed.
function mult(a, b = 5) {
  return a * b;
}
console.log(mult(2));

//fat arraow function:-
//first create then call function
//use functionname like a variable
//use fat arrow instead of function
const sum = () => `the sum of the two number is ${(a = 5) + (b = 7)}`;

console.log(sum());
