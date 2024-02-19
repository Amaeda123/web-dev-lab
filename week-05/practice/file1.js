var colors = ["red", "green", "blue", "yellow", "white"];
colors.push("maroon");
console.log(colors);
colors.pop();
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift("purple");
console.log(colors);
var elements = ["pencil", "pen", "book"];
var array3 = colors.concat(elements);
console.log(array3);
const sliced_array = array3.slice(1, 4);
console.log(sliced_array);
// object with curly braces is called  literal

let person = {
  firstName: "Amaeda",
  lastName: "Qureshi",
  age: 21,
  eyeColor: "brown",
};
console.log("color of my eyes is " + person.eyeColor);
Object.defineProperty(person, "nationality", { value: "pakistan" });
console.log(Object.keys(person));

let student = { cms: "021-21-0006", Major: "cs" };
console.log(Object.assign(person, student));

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("amaeda"));

const greet1 = (name) => {
  return "Hello, " + name + "!";
};
console.log(greet1("amaeda"));

const annonymous = function (name) {
  console.log("i am annonymous function");
  return "Hello, " + name + "!";
};

annonymous("amaeda");

(function () {
  console.log("I am immediately invoked.");
})();

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled);

var str = "my name is amaeda";
console.log("length of string is " + str.length);
console.log(str.charAt(4));
console.log(str.charCodeAt(4));

new_str = str.slice(3, 8);
console.log(new_str);

console.log(str.toLocaleUpperCase());

const arr = [1, 2, 3, 4, 5];
// const num = 4;
function myfunction(array1, num) {
  for (i = 0; i < array1.length; i++) {
    array1[i] = array1 * num;
  }
  return array1;
}
console.log(myfunction(arr, 4));
