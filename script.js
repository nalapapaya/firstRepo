// comments (cmd+/)
/*
commenting long paragraphs - usually not used
*/
// console.log("something");

primitive types
boolean;
string;
number;
undefined;

const a = 1;
console.log(typeof a);

// reference types
object(dictionary / KVP);
array;
set;
null;

// always use const first unless you alr know you need to change it
const currName = "Lily";
const currRole = "dancer";

const outputStr = "hello, I am " + currName + " and I am a " + currRole;
console.log(outputStr);
// cmd+j to open terminal running via CLI

// template literals need to use (`)
const outputStr2 = `hello, i am ${currName} and I am a ${currRole}`;
console.log(outputStr2);

// new line (\n)
const thisLine = "This is line one\nThis is line two.";

// easier to read
const thatLine = `This is line one
This is line two`;
console.log(thatLine);

Math.ceil(X)
Math.floor(X)
Math.round(X)

const calculatedValue = Math.round(1.234)

Math.max(1,2,3)
Math.min(1,2,3)

Math.random() //returns number 0 or less than 1
const luckyNumber = Math.floor(Math.random()*10);
//floor gets rid of decimal point+ random gives decimal (chance) + 10 = range of numbers)
console.log(Math.random())

rounding to 2 decimal places
const x = 7.1632;
const y = Math.round(x * 100) / 100;

const z = x.toFixed(2); // returns "7.16" as a string
const a = parseFloat(z); // returns number as is - not as accurate because computer stores as fractions
const a = parseInt(z); // returns number as integer (whole number)
console.log(parseFloat(z));

const currentDate = new Date(); // returns date in ISO form yyyy-mm-ddThh:mm:ss:ms,timeZone

const newDate = new Date ('2020-01-01'); // gives set date and time as 00
const fullYear = newDate.getFullYear();
const month = newDate.getMonth(); // january starts from 0, feb = 1 (so +1 to all)
const thisDate = new Date().toISOString().split("T")[0]; // takes the first item in array [0]
console.log(thisDate);

const i = 5;

if (1 % 2) {
    console.log("odd");
} else {
    console.log("even");
}

//shorter if statement
//condition ? do when true : do when false
1 % 2 ? console.log("odd") : console.log("even");

const citizen = true;
const age = 32;

if (citizen) {
    if (age >= 21) {
        console.log("You can vote.")
    } else {
        console.log("You cannot vote.")
    }
} else {
    console.log("You must be a citizen to vote.");
}

const type = "a";

switch (type) { // requires break if not will ignore the next case. not as useful as if else statement
    case "a";
        console.log("animal");
        break;
    case "v";
        console.log("vegetable");
        break;
        default;
        console.log("none");
}

for (let i = 0; i <= 1000; i++) {
  console.log(i);
  //   if (i === 10); {
  //     break;
  //   }
}
let count = 0;

while (count <= 1000) {
  console.log(count);
  count++;
}

do {
  console.log(count);
  count++;
} while (count <= 1000);

function nameOfFunction(oarameter1, parameter2) {
  //codes
  return x;
}

const x = 10;
const y = 30;

function calculateTriangle(l = 5, b = 3) {
  // placeholder for reusability & if l and/or b is undefined, default values will be used.
  const area = 0.5 * l * b;
  return area;
  // or return 0.5 * l * b;
}

const area = calculateTriangle(x, y); // stores in area declaration

function sumAll(...allNums) {
  // accepts all parameters. rest(...) stores the numbers as array e.g. ...chicken etc
  let sum = 0;

  for (let i = 0; (i = allNums.length); i++) {
    sum += allNums[i];
  }
  return sum;
}
const area = sumAll(1, 2, 3, 4, 5, 6);
