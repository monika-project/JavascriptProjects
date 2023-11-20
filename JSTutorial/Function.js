//Function:-block of code designed to perform a particular task.
//before we use,we need to define it.
//also called function declaration or function statement.
//consist function keyword,name of function,list of parameters enclose in parantheses seperated by commas.
//js statments that define the function,enclosed in curly brackets, {...}.

function sum() {
  var a = 10,
    b = 20;
  var total = a + b;
  console.log(total);
}
//defined function does not execute it.
//function execute when something invokes it(calles it).
sum();

//fn parameters:-names in the functions definitions
//fn operators:-real values passed to functions.
function sum1(x, y) {
  var total = x + y;
  console.log(total);
}
sum1();
sum1(10, 40);
sum1(45, 876);

//why functions:-
//reuse code,define code once use it many times
//use same code with different arguments to produce different results.
//group of reuseable code which can be called anywhere in you program this eliminates the need of writing same code again and again.
//DRY => do not repeat yourself

//fn expressions:-create fn & put it into the variable funExp.
var funExp = sum1(34, 78);
funExp;

//retuen :- js reaches return statement,fn will stop executing.
//fn often compute a retun value.
//return value is return back to caller.
function sum2(g, h) {
  return (total = g + h);
}
var fnexp = sum2(56, 76);
console.log("sum of two no is " + fnexp);

//Annonymous function:-fn expression & it syntax is same as the fn declaration one can defined "named".
//fn expressions (name of expression might be used in the call stack for example) or anonymous fn expressions.

var fnexp2 = function (g, h) {
  return (total = g + h);
};
var sum4 = fnexp2(5, 15);
var sum5 = fnexp2(15, 15);
console.log(sum4 > sum4);
console.log("sum of two no is" + sum4);
console.log("sum of two no is" + sum5);
