// task1

function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3]));

// task2

function carInfo(carObject) {
  return (
    "The " +
    carObject.brand +
    " " +
    carObject.model +
    " was manufactured in " +
    carObject.year +
    "."
  );
}

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};
console.log(carInfo(car));

// task3

function applyFunction(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

const array = [1, 2, 3];
const multiplyByTwo = function (x) {
  return x * 2;
};
console.log(applyFunction(array, multiplyByTwo)); // Output: [2, 4, 6]
