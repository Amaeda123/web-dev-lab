var person = {
  name: "Amaeda",
  gender: "Female",
  Age: "22",
  Country_Code: "+92",
};
const { Country_Code, Age, ...rest } = person;
console.log(Country_Code);
console.log(rest);

// Spread
let arr1 = [1, 2, 3];
let arr2 = ["a", "b"];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
//in objects
let obj1 = { x: 1, y: 2 };
let obj2 = { z: 3 };
let obj = { ...obj1, ...obj2 };
console.log(obj);

// set timeout example
console.log("Starting setTimeout example...");
setTimeout(() => {
  console.log("This message will be displayed after 2 seconds.");
}, 2000); // 2000 milliseconds = 2 seconds
console.log("setTimeout example scheduled.");

// set interval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval count: ${count}`);
  if (count === 5) {
    clearInterval(intervalId); // Stop the interval after 5 iterations
    console.log("Interval stopped after 5 iterations.");
  }
}, 1000); // 1000 milliseconds = 1 second
console.log("setInterval example started.");
