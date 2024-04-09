const hi = function (a, b) {
  return a + b;
};
const hey = function (hi) {
  console.log(hi(20, 30));
};
hey(hi);

// const a = 10;
// const b = 0;

// const hello = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// });
// hello.then((b) => {
//   console.log(a + b);
// });
