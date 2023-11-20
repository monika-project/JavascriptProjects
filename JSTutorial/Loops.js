//Control statements and loops
//if ...else:-executes statement if a specified condition is truthy.if condition is falsey,another statement can be executed.
var tomr = "rain";
if (tomr == "rain") {
  console.log("take a raincoat");
} else {
  console.timeLog("no need to take raincoat");
}

//leapyear
var year = 2020;
debugger;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("the year " + year + " is a leap year");
    } else {
      console.log("the year " + year + " is a not leap year");
    }
  } else {
    console.log("the year " + year + " is a leap year");
  }
} else {
  console.log("the year " + year + " is not a leap year");
}

//truthy & false value
//5 falsy values in javascript:-0," ",undefined,null,NaN,false**.
if ((score = 0)) {
  console.log("omg,we loss the game");
} else {
  console.log("Yay,we won the game");
}

//conditional ternoaray operator:-only javascript operator that takes three operands.
//variablename = (condition)? value1:value2
var age = 17;
// if (age >= 18) {
//   console.log("you are eligible to vote");
// } else {
//   console.log("you are not eligible to vote");
// }

console.log(age >= 18 ? "eligible to vote" : "not eligible to vote");

//switch statement:-Evaluates an expression, matching expressions value to a case clause,& executes statements associated with that case.
//break:terminates current loop,switch,label,statement & transfers program control to statement following the terminated statement.
var area = "square";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;

// if (area == "circle") {
//   console.log("Arae of circle is: " + PI * r ** 2);
// } else if (area == "triangle") {
//   console.log("Area of triangle is: " + (l * b) / 2);
// } else if (area == "rectangle") {
//   console.log("Area of rectangle is: " + l * b);
// } else {
//   console.log("Please enter valid data");
// }

switch (area) {
  case "circle":
    console.log("Arae of circle is: " + PI * r ** 2);
    break;
  case "triangle":
    console.log("Area of triangle is: " + (l * b) / 2);
    break;
  case "rectangle":
    console.log("Area of rectangle is: " + l * b);
    break;
  default:
    console.log("Please enter valid data");
}

//while loop:-loop that executes  specified statement as long as the test  condition evalutes to true.

while (num <= 10) {
  console.log(num);
  num++;
}

//dowhileloop
var num = 0;
do {
  debugger;
  console.log(num);
  num++;
} while (num <= 10);

//for loop
for (var num = 0; num <= 10; num++) {
  debugger;
  console.log(num);
}

//table
for (var num = 1; num <= 10; num++) {
  var tableOf = 8;
  console.log(tableOf + " * " + num + " = " + tableOf * num);
}
