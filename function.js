// function ab(n) {
//   if (n > 5) {
//     return;
//   }
//   console.log(n);
//   ab(n + 1);
// }
// ab(1);

function myFunction(x, y = 10) {
  console.log(x + y);
  return x + y;
}
myFunction(5);
