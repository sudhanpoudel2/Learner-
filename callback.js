const { Promise } = require("mongoose");

function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = url;
  document.body.appendChild(script);
}
loadScript(
  `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`
);

// normal function
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

anonymous;

const hello = function (a, b) {
  return a + b;
};
console.log(hello(10, 30));

// callback

const cc = function (a, b) {
  return a + b;
};

function callBack(cc) {
  console.warn(cc(200, 300));
}

callBack(cc);

function callBack(add) {
  console.log(add(100, 100));
}
callBack(function (a, b) {
  return a + b;
});

const funA = () => {
  setTimeout(() => {
    console.log("i will be appare after 5 sec");
  }, 5000);
  console.log("hello1");
};
const funB = () => {
  console.log("Hello2");
};

funA();
funB();

const talkOne = (friend, callback) => {
  console.log(
    `I am busy right now. I am talking with ${friend}.I will call back later`
  );
  callback();
};
const talktwo = () => {
  console.log(`hello what's up why you call me `);
};

talkOne("bibash", talktwo);

function sum(a, b) {
  console.log(a + b);
}

function calculation(a, b, summer) {
  summer(a, b);
}
calculation(11, 9, sum);

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data:", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2);
});

const getFruit = function (fruit, getNextFruit) {
  setTimeout(() => {
    console.log("Fruit = ", fruit);
    if (getNextFruit) {
      getNextFruit();
    }
  }, 1000);
};

getFruit("Apple", () => {
  getFruit("Banana", () => {
    getFruit("Orange");
  });
});

const xx = function (x, y) {
  return x - y;
};
const yy = function (xx) {
  console.log(xx(20, 4));
};
yy(xx);

const getAnimal = function (animal, getNextAnimal) {
  setTimeout(() => {
    console.log("Animal::", animal);
    if (getNextAnimal) {
      getNextAnimal();
    }
  }, 1000);
};
getAnimal("Horse", () => {
  getAnimal("Cat", () => {
    getAnimal("Dog");
  });
});

const sum = function (a, b) {
  console.log("Sum::", a + b);
};
const math = function (a, b, summer) {
  summer(a, b);
};
math(12, 8, sum);

const add = function (x, y) {
  return x + y;
};
const calc = function (add) {
  console.log(add(1, 5));
};
calc(add);

const nepalColleges = function (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("College Name: ", name);
      resolve();
    }, 2000);
  });
};
nepalColleges("new summit college").then((res) => {
  nepalColleges("chelsea Int. acadmy").then(() => {});
});
print;
nepalColleges(
  "New Sumit College",
  setTimeout(() => {
    nepalColleges("Chelsea Int. Acadmy");
  }, 7000),
  setTimeout(() => {
    nepalColleges("LiverPool Int. Acadmy");
  }, 2000),
  setImmediate(() => {
    nepalColleges("Softbenz Acadmy");
  })
);

const company = function (name, nextCompany) {
  const cbFun = () => {
    console.log("infoSoft");
  };
  const mainFun = (x, cbFun) => {
    setTimeout(() => {
      // console.log(x);
      cbFun();
    }, 5000);
    // cbFun();

    console.log(x);
  };
  mainFun("SoftBenz", cbFun);
  console.log("Name : ", nextCompany);
  setTimeout(() => {
    console.log("Name : ", name);
    // if (nextCompany) {
    //   nextCompany();
    // }
  }, 5000);
};
cbFun("SoftBenz", () => {
  cbFun("Info tech");
});
console.log("Task Start");
function asyncFunction(cb) {
  console.log("Task running");
  cb();
}

asyncFunction("Sudhan");
console.log("Task end");
const name = "Sudhan";
console.log("Task Start");
function asyncFunction(cb) {
  console.log("Task running");
  cb();
}

asyncFunction(function () {
  console.log("Callback executed");
});
console.log("Task end");

const iss = function (cb) {
  setTimeout(() => {
    cb(null, "This is my kingdom");
  });
};
iss((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data : ", data);
  }
});
