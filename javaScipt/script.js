//1. Template literals
//Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. Template literals are enclosed by backticks (``) instead of single or double quotes.
let age = 20;
let fullname = "Dineshkumar";
let message = `My name is ${fullname} and I am ${age} years old.`;
console.log(message);

//2. arrow methods
const add = (a, b) => a + b;

const subtract = (a, b) => {
  return a - b;
};
console.log(add(5, 10)); // Output: 15
console.log(subtract(10, 5)); // Output: 5

//3. call back functions

const users = [
  {
    username: "dk06",
    name: "Dinesh",
    age: 20,
  },
  {
    username: "dd07",
    name: "Divya",
    age: 21,
  },
];

function printUserDetails1(user) {
  console.log("User Details:");
  console.log("Username: " + user.username);
  console.log("Name: " + user.name);
  console.log("Age: " + user.age);
}
function printUserDetails2(user) {
  console.log("User Details with style:");
  console.log("Username: " + user.username);
  console.log("Name: " + user.name);
  console.log("Age: " + user.age);
}

function getUserData(username, callback) {
  const user = users.find((user) => user.username === username);
  callback(user);
}

getUserData("dk06", printUserDetails1);
getUserData("dd07", printUserDetails2);

//4. asynchronous - non blocking code
console.log("Start");

setTimeout(() => {
  console.log(5000);
}, 5000); // This will execute after 2 seconds

setTimeout(() => {
  console.log(2000);
}, 2000); // This will execute after 2 seconds

setTimeout(() => {
  console.log(3000);
}, 3000); // This will execute after 2 seconds

setTimeout(() => {
  console.log("Zero");
}, 0); // This will execute after 2 seconds

console.log("End");

//5.spread operator

let user = { name: "Dineshkumar", age: 34 };
console.log(user);

user = { ...user, address: "Chennai", age: 35 };
console.log(user);
