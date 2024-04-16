// const sum = function (a, b) {
//   console.log(a + b);
// };
// const sub = function (x, y) {
//   console.log(x - y);
// };

// sum("", 10);

const abc = (count) => {
  for (let i = 0; i <= count; i++)
    if (i % 2 == 0) {
      console.log(`${i} is even number`);
    } else {
      console.log(`${i} is odd number`);
    }
};

const vvv = (number, count, abc) => {
  for (let i = 0; i <= number; i++)
    if (i % 5 == 0) {
      console.log(`${i} in five div`);
    } else {
      console.log("NO");
    }
  abc(count);
};
// abc(20);
vvv(50, 20, abc);
