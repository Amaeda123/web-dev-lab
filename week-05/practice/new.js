// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function (items) {
//   console.log(item);
//   doubled = item * 2;
//   return doubled;
// });
// console.log(
//   arr.forEach(function (items) {
//     console.log(item);
//     doubled = item * 2;
//     return doubled;
//   })
// );
var arr2 = [1, 2, 3, 4];
// arr2.forEach(function(val){return val*2});
console.log(
  arr2.map(function (val) {
    return val * 2;
  })
);
const array = [1, 2, 3, 4];
const shuffledArray = array.sort(() => Math.random() - 0.5);
console.log(shuffledArray);

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(ages.filter((item) => item % 2));

const new_arr = ["amaeda", "Bhumika", "Radhika", "pari", "Preeti"];
console.log(new_arr.filter((item) => !item.includes("a")));
[1, 2, 3, 4, 5, 6].reduce((total, item) >= {
    total+ item;
},0)