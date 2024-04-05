const a = 10;
const b = 0;

console.log("Hello i am in first?");

setTimeout(() => console.log("hello i am setTimeOut!!"));

setImmediate(() => console.log("hello i am setImmediate"));

// setTimeout(() => {
//   b = 30;
// }, 2000);

console.log("Old me::", a + b); // while i do that it  give 10 out put
// Its also disadvantage of ascynhronous

//now solving this problem using promice

const waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

waitingData.then((b) => {
  //   b = data;
  console.log("New me ::", a + b);
});

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  });
});

promiseOne.then(function () {
  console.log("promised comsumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("async task 2 complete");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "tester", email: "tester@gmail.com" });
  });
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "spider", password: "12345" });
    } else {
      reject("Error : Something wetn wrong!!");
    }
  });
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "iron", password: "123" });
    } else {
      reject("ERROR : js went wrong");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// console.log(username);
