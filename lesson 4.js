//destructuring array
const setVar = () => {
  return [1, 2, 3, 4, 5];
};
const [chicken, duck] = setVar();
const outputs = setVar();
outputs[0];
const chicken = outputs[0];
chicken++;

console.log(chicken);

//destructuring
const [, chicken, duck] = setVar(); // chicken starts from index 1
const [, , chicken, , duck] = setVar(); // chicken and duck refers to value of index 2 and 4 of setVar array
// can then use chicken++ on if statement etc.
//another simple example
const [x, y, z] = [1, 2, 3]; //method 2
const a = [1, 2, 3];
const [x, y, z] = a; //method 3, referring to array

for (const [key, value] of Object.entries(kvp)) {
  console.log(`${key}`);
}

const getVar = () => {
  return { one: "chicken", two: "duck" };
};
const data = getVar(); //{one:"chicken", two: "duck"}
const one = data.one;
const { one } = getVar(); //destructure 'one' kvp in getVar array (shortcut for line 29 & 30 together)
//const {key} = array to extract value from array

const { one, two } = getVar();
const { two, one } = getVar();

//renaming key/variable name
const { one: x, two: y } = getVar(); //returns x:chicken, y:duck

//call back functions
const allUpper = (str) => {
  return str.toUpperCase();
};

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" "); // other ways to do const array = [first.toUpperCase(), ...others] or const str = array.join(" ") + return str
};

//changing the last index to uppercase
str.split.with(-1, str.split.at(-1).toUpperCase);

//higher order function
const transform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`New string: ${fn(str)}`);
  console.log(`Function used: ${fn.name}`);
};

transform("this is general assembly", upperFirstWord); //upperFirstWord() should not be used here as it will be invoked immediately.
transform("this is general assembly", allUpper); // use fn reference/ fn variable name only

//sorting
let points = [2, 10, 156, 79, 83];
console.log(points.sort()); //returns [10, 156, 2, 79, 83]

points.sort(function (a, b) {
  return a - b;
});
console.log(points); //returns [2,10,79,83,156]
// if results is negative, stays in place, if results is positive, it moves in front

function naturalSort(a,b) {
    return a - b
}
points.sort(naturalSort);

console.log(points);