// import readline from "readline";

// const { response } = require("express");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What is your name? ", (a) => {
//   rl.question("What is your age? ", (b) => {
//     rl.question("What is your favorite color? ", (c) => {
//       console.log(`${a} is ${b} years old and has ${c} as favorite color.`);
//       rl.close();
//     });
//   });
// });

// console.log("ffdsdfs");

// function api(dataId) {
//   // console.log("hello");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Hello::", dataId);
//       resolve();
//     }, 2000);
//   });
// }

// // api(5);
// async function pen() {
//   console.log("getting data 1..........");
//   await api(5);
//   console.log("getting data 2..........");
//   await api(6);
//   console.log("getting data 3..........");
//   await api(7);
//   console.log("getting data 4..........");
//   await api(8);
//   console.log("getting data 5..........");
//   await api(9);
//   console.log("getting data 6..........");
//   await api(10);
//   console.log("getting data 7..........");
//   await api(11);
//   console.log("getting data 8..........");
//   await api(12);
// }

// pen();
// const api = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("hello i am working");
//     resolve();
//   }, 2000);
// });
// const asyncFunction = function (dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data::", dataId);
//       resolve();
//     });
//   });
// };

// async function p1() {
//   await asyncFunction(5);
// }
// p1();

// const getFruit = function (fruit) {
//   return new Promise((resolve, reject) => {
//     console.log("Fruits : ", fruit);
//     resolve();
//   });
// };
// async function allFruit() {
//   await getFruit("Apple");
//   await getFruit("Banana");
// }
// allFruit();
// function sleep(millisecond) {
//   const startTime = new Date().getTime();
//   console.log("Opertion is running!!");
//   while (new Date().getTime() < startTime + millisecond) {
//     console.log("in process..");
//   }
//   console.log("Operation is done");
// }
// sleep(1000);
// console.log("do something else.....");

// import { log } from "console";
// import readline from "readline";

// const userLogin = () => {
//   console.log("Enter Username and Password");

//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   return new Promise((resolve, reject) => {
//     rl.question("Enter Username: ", (username) => {
//       rl.question("Enter Password: ", (password) => {
//         setTimeout(() => {
//           console.log("Performing user authentication");
//           if (username === "sudhan" && password === "sudhan") {
//             resolve("User Authentication!!");
//           } else {
//             reject("Authentication Failed!!");
//           }
//           rl.close();
//         }, 1000);
//       });
//     });
//   });
// };

// function goToHomePage(userAuthStatus) {
//   return Promise.resolve(`Go to home page ${userAuthStatus}`);
// }

// userLogin()
//   .then((response) => {
//     console.log("validate user");
//     return goToHomePage(response);
//   })
//   .then((userAuthStatus) => {
//     console.log(userAuthStatus);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// async function performTask() {
//   const response = await userLogin();
//   console.log("Validated User!!");
//   const userAuthStatus = await goToHomePage(response);
//   console.log(userAuthStatus);
// }
// performTask();

console.log("Task Start");
function async(cb) {
  console.log("");
  setTimeout(() => {
    cb(null, "this is data from server");
  }, 1000);
}

async((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Data : ", data);
  }
});
