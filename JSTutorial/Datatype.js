// Primitive Data Types
// undefined: typeof instance === "undefined"
// Boolean: typeof instance === "boolean"
// Number: typeof instance === "number"
// String: typeof instance === "string"
// BigInt: typeof instance === "bigint"
// Symbol: typeof instance === "symbol"
var myName = "vinod thapa";
console.log(myName);
console.log(typeof myName);
var myAge = 25;
console.log(myAge);
console.log(typeof myAge);
var iammonika = true;
console.log(typeof true);
console.log(10 + "20");
console.log(9 - "5"); //bug
console.log("java" + "script");
console.log(" " + " ");
console.log(" " + 0);
console.log("vinod" - "thapa");
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false - true);

//difference null and undefined?
var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof iAmUseless); //2nd bug

var iamStandBy;
console.log(iamStandBy);
console.log(typeof iamStandBy);

//NAN is a property of the global object
//variable in global scope.
//the initial value of NaN is not-a-number
var myPhoneNumber = 9876543210;
var myName = "thapa technical";
console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

if (isNaN(myName)) {
  console.log("plz enter valid phone no");
}

console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(isNaN(NaN));
