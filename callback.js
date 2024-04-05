// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = url;
//   document.body.appendChild(script);
// }
// loadScript(
//   `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`
// );

// normal function
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

// anonymous

const hello = function (a, b) {
  return a + b;
};
console.log(hello(10, 30));

// callback

// const add = function (a, b) {
//   return a + b;
// };

// function callBack(add) {
//   console.warn(add(200, 300));
// }

// callBack(add);

// function callBack(add) {
//   console.log(add(100, 100));
// }
// callBack(function (a, b) {
//   return a + b;
// });

// const funA = () => {
//   setTimeout(() => {
//     console.log("i will be appare after 5 sec");
//   }, 5000);
//   console.log("hello1");
// };
// const funB = () => {
//   console.log("Hello2");
// };

// funA();
// funB();

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
