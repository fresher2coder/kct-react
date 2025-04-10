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

let a = 10; //11

let flag = a++ > 9 || ++a < 10;

console.log(flag); //flase
console.log(a); //11

//6. map - apply the logic to every element
// filter - filter the elements based on the condition
// reduce - reduce the elements to a single value
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squares = numbers.map((num) => num * num);
console.log(squares);

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

let total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

//7. promise

const promise1 = new Promise((resolve, reject) => {
  //fetch data -  url(sever)
  const love = true;
  if (love) {
    resolve("Heart");
  } else {
    reject("Broken Heart");
  }
});

promise1
  .then((msg) => {
    console.log("Marriage: ", msg);
  })
  .catch((msg) => {
    console.log("Break UP: ", msg);
  });

const promiseFn = (love) => {
  return new Promise((resolve, reject) => {
    //fetch data -  url(sever)
    if (love) {
      resolve("Heart");
    } else {
      reject("Broken Heart");
    }
  });
};

promiseFn(true)
  .then((msg) => {
    console.log("Marriage: ", msg);
  })
  .catch((msg) => {
    console.log("Break UP: ", msg);
  });
