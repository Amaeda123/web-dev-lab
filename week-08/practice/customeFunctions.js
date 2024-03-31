customeMap = function (array, appliedFunction) {
  new_Array = [];
  for (let i = 0; i < array.length; i++) {
    new_Array.push(appliedFunction(array[i], i));
  }
  return new_Array;
};

const arr = [1, 2, 3, 4, 5];
const doubled = customeMap(arr, (x) => x * 2);
console.log(doubled);

// custome filter

Filter = function (arr, func) {
  newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) newarr.push(arr[i]);
  }
  return newarr;
};
const onlyEvenNumbers = Filter(arr, (num) => num % 2 == 0);
console.log(onlyEvenNumbers);

// custome Reduce Function
Reduce = function (arr, callback, initialValue) {
  let acc = initialValue || arr[0];
  for (let i = initialValue ? 0 : 1; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  return acc;
};
addition = Reduce([1, 2, 3, 4, 5], (total, amount) => total + amount, 0);
console.log("The sum is: " + addition);
