const a = 10;
const b = 0;

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
