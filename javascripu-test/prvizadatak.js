// Task 1
// Write a function that takes an array and a value and returns all the users with that name from the array.
// If there is no user found return empty array.
// Example of the array is below and examples.

// Example:
// const array1 = [
//   { id: "333222111", name: "Sulejman", age: "22" },
//   { id: "321123432", name: "Stefan", age: "25" },
//   { id: "222312543", name: "Semir", age: "32" },
// ];

// function getObjects(array, value) {
// ...
// }

// console.log(getObjects(array1, "Semir"));
// // result: [ { id: '222312543', name: 'Semir', age: '32' } ]

// console.log(getObjects(array1, "Suad"));
// // result: [ ]

const array2 = [
  { id: "333222111", name: "Sulejman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
];

function getObjects(array, value) {
  return array.filter((item) => item.name === value);
}

console.log(getObjects(array2, "Stefan"));

console.log(getObjects(array2, "Suad"));
