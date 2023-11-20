//Assignment operator:-assigns value to its left operands based on tne value of its right operands.the simple assignment opeartor is equal(=)
var x = 5;
var y = 5;
console.log("Is both the x and y are equal" + x == y);
console.log(`is both the x and y are equal: ${x == y}`);

//Arithmatic operator:-takes numerical values(literals or variables)as their operands &return a single numerical value.
console.log(3 + 3);
console.log(10 - 5);
console.log(20 / 5);
console.log(5 * 6);
console.log("<remainder operator" + (81 % 8));

//increment & decrement operator:X++ or ++x or x-- or --x
//postfix:-operator after operand (the increment opeartor increments & returns the value before incrementing)
var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum);

//prefix:-operator before operand(the increment opeartor increments & returns the value after incrementing)
var num1 = 10;
var newNum1 = ++num1;
console.log(num1);
console.log(newNum1);

//postfix
var num2 = 20;
var newNum2 = num2--;
console.log(num2);
console.log(newNum2);

//prefix
var num3 = 30;
var newNum3 = --num2;
console.log(num3);
console.log(newNum3);

//comparision operator:-compares its operands & returns a logical value based on whether the comparison is true.

var f = 30;
var g = 10;

console.log(f == g); //equal
console.log(f != g); //notqualTo
console.log(f > g); //greater than(>)
console.log(f >= g); //greater than or equal to
console.log(f < g); //less than(<)
console.log(f <= g); //less than or equal to

//logical operator:-used with  Boolean (logical) values;returns boolen value.
var X = 30;
var y = -20;

//logical And(&&):-logical conjunction for a set of operands is true if and only if all of its  expressions are true.
console.log(x > y && y > 0 && y < 0);

//Logical Or(||):-The logical(||) disjunction  for a set of operands is true if and one or more  of its  operands are true.
console.log(x > y || y > 0 || y < 0);

//logical not(!):-logical complement,negation) takes truth to falsity and vice versa
console.log(!(x > 0 || b < 0));
console.log(!false);

//String Concatenation(operators)
//The Concatenation operator (+) concatenates two string values together,
//returning another String that is unin of the two operand string.
console.log("hello world");
console.log("hello " + "world");
var myName = "vinod ";
console.log(myName + " thapa");
console.log(myName + " bahadur thapa");

//challenge time:-
console.log(3 ** 3); //power or exponentiation
console.log(10 ** -1); //1/10

console.log(5 + "thapa");
console.log(5 - "thapa");

//swapnum
var a = 5;
var b = 10;

// var c = b;
// var b = a;
// a = c;
// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

//swapnum without third num
a = a + b; //a = 15
b = a - b; //b = 5
a = a - b; //a = 10;
console.log("the value of a is " + a);
console.log("the value of b is " + b);

//difference between == & ===
var num1 = 5;
var num2 = "5";
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num2);
console.log(num1 == num2); //check value
console.log(num1 === num2); //check value & datatype
