// Define a variable called numASSTR and assign it the string value "10"
var numASSTR = "10";

// Convert the numASSTR variable to an integer and add 5 to it, then assign the result to the variable num
num = parseInt(numASSTR) + 5;

// Log the value of num to the console
console.log(num);
var day = " monday";
// Use a switch statement to perform different actions based on the value of the variable day
switch (day) {
  // If the value of day is "monday", log a message to the console
  case "monday":
    console.log("Starting work");
    break;

  // If the value of day is "tuesday", log a message to the console and continue executing the code for "wednesday"
  case "tuesday":
    console.log("Continuing work from where we left off on Monday.");

  // Without a break statement, execution will fall through to the next case

  // If the value of day is "wednesday", log a message to the console
  case "wednesday":
    console.log("Almost there... keep going!");

  /* falls through */

  // If the value of day is not "monday", "tuesday", or "wednesday", log a message to the console
  default:
    console.log("It's a weekend! Relax and have fun!");
}

// Use a for loop to log a message to the console 5 times
for (var i = 0; i < 5; i++) {
  console.log("Hello World!");
}

// Use a while loop to log the value of the variable a to the console, decrementing a by 1 in each iteration
let a = 5;
while (a > 0 && a <= 5) {
  console.log(`The value of i is ${a}`);
  a--;
}

// Use a for...in loop to loop through the properties of an object and log each property name and value to the console
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Use a for...in loop to loop through the elements of an array and log the double of each element to the console
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let vl in array) {
  let vl2 = (vl *= 2);
  console.log("The double of " + vl + " is : " + vl2);
}

// Use a for...of loop to loop through the elements of an array and log each element to the console
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// Define a function called addNumbers that takes two arguments, x and y, and returns their sum
function addNumbers(x, y) {
  return x + y;
}

// Call the addNumbers function with the arguments 5 and 10, and log the result to the console
console.log(addNumbers(5, 10));

// Define a function called multiplyNumbers that takes two arguments, x and y, and returns their product
const multiplyNumbers = function (x, y) {
  return x * y;
};

// Call the multiplyNumbers function with the arguments 5 and 10, and log the result to the console
console.log(multiplyNumbers(5, 10));

// Define an object called objFunc with a property called name and a method called sayHi
const objFunc = {
  name: "John Doe",
  sayHi() {
    console.log("Hi! My name is ", this.name);
  },
};

// Call the sayHi method of the objFunc object
objFunc.sayHi();

// Define an arrow function called arrowSayHi that logs a message to the console
const arrowSayHi = () => console.log("Hi!");

// Call the arrowSayHi function
arrowSayHi();

// Define a recursive function called factorial that takes an argument n and returns the factorial of n
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Call the factorial function with the argument 4, and log the result to the console
console.log(factorial(4));

// alert , confirm , prompt
// alert("Hello World"); // This will show an alert box saying Hello World

// let userConfirmation = confirm("Do you want to continue?"); // This will display a dialog asking the user Yes/No .
// var name = prompt("Enter your Name : "); // This will ask user for input and it will display in the browser.

// var age = prompt("How old are you?"); // It will ask user to enter
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2 }

console.log(Object.entries(target));

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = array3.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(`The sum of ${array3} is ${sum}`); // The output will be "The sum of 1,2,3,4,5,6,7,8,9,10 is 55"
const multiplesofTwo = array3.filter((num) => num % 2 == 0);
console.log(`Multiple of two in ${array3}: ${multiplesofTwo}`);

let x = array3.map((num) => num * 5);
console.log(x);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange']

let even = array3.every((num) => num % 2 == 0);
if (!even) console.log("Not all  even numbers here!");
else console.log("All numbers are even.");

let odds = array3.some((num) => num % 2 != 0);
if (odds) console.log("There are some odd numbers here!");
else console.log("No odd numbers here!");

//create custome map function
Map = function (arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i));
  }
  return newArr;
};
const result = Map(fruits, (item) => item.toUpperCase());
console.log(result); // Output : ['BANANA','ORANGE','APPLE','MANGO']
//create custome  reduce function
Reduce = function (arr, callback, initialValue) {
  let accu = initialValue || "";
  for (let i = 0; i < arr.length; i++) {
    if (initialValue && i === 0) continue;
    else accu = callback(accu, arr[i]);
  }
  return accu;
};
const joinedResult = Reduce(result, (total, next) => total + "-" + next);
console.log(joinedResult); // Output : BANANA-ORANGE-APPLE-MANGO
// create custome filter  function
Filter = function (arr, func) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};
const onlyFruitNamesStartingWithM = Filter(fruits, (fruit) =>
  fruit.startsWith("M")
);
console.log(onlyFruitNamesStartingWithM); // Output: [ 'Mango' ]
