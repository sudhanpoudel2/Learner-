console.log("Hello i am in first?");

setTimeout(() => console.log("hello i am setTimeOut!!"));

setImmediate(() => console.log("hello i am setImmediate"));

setTimeout(() => {
  b = 30;
}, 2000);

console.log("Old me::", a + b); // while i do that it  give 10 out put
// Its also disadvantage of ascynhronous

// // now solving this problem using promice
const a = 10;
const b = 0;

const waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
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

const tea = function () {
  console.log("I will be appared after 7 second");
};

setTimeout(tea, 7000);

// //////////////////////////////////////////////////

const x = 15;
const y = 16;

const promice = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Add::", x + y);
    reject("Error : Error for showing data");
  });
});

promice
  .then(() => {
    console.log("Add::", x + y);
  })
  .catch((error) => {
    console.log(error);
  });

const asyncFunc1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("Success");
    }, 5000);
  });
};

const asyncFunc2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("Success");
    }, 5000);
  });
};
console.log("fetching data 1");
const Data1 = asyncFunc1();
Data1.then((res) => {
  console.log(res);
  console.log("fetching data 2");
  const Data2 = asyncFunc2();
  Data2.then((res) => {
    console.log(res);
  });
});

// const people = [
//   {
//     name: "jack",
//     age: 25,
//   },
// ];

// const employee = [...people];
// employee[0].age = 30;
// console.log(people);
// console.log("fetching data 1");
// const Data2 = asyncFunc2();
// Data2.then((res) => {
//   console.log(res);
// });

const itCompany = function (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Name : ", name);
      resolve();
    });
  });
};

itCompany("Softbenz Tech").then(() => {
  itCompany("Info Tech").then(() => {
    itCompany("Search Tech");
  });
});

const mult = function (s, p) {
  console.log("Solution : ", s * p);
};
const calc = function (s, p, value) {
  value(s, p);
};
calc(5, 4, mult);

const mouse = function () {
  console.log("Hello");
};
const keyboard = function (x, mouse) {
  setTimeout(() => {
    console.log(x);
  }, 2000);
  mouse();
};
keyboard("Sudhan", mouse);

const aipCall = (Time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this API excuted in " + Time);
    }, Time);
  });
};

const multiCall = [aipCall(1000), aipCall(5000), aipCall(500)];
Promise.all(multiCall).then((values) => {
  console.log(values);
});

Promise.race(multiCall).then((values) => {
  console.log(values);
});

// aipCall(2000).then((val) => {
//   console.log(val);
// });

const p = Promise.resolve("Execution is done");
p.then((val) => {
  console.log(val);
});

const maleApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This api executed in " + time);
    }, time);
  });
};

const multiApiCall = [maleApiCall(2000), maleApiCall(1000), maleApiCall(500)];

// Promise.all(multiApiCall).then((val) => {
//   console.log(val);
// });

Promise.race(multiApiCall).then((val) => {
  console.log(val);
});

// maleApiCall(1000).then((val) => {
//   console.log(val);
// });
