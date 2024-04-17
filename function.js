// print number 1 to 5

function ab(n) {
  if (n > 5) {
    return;
  }
  console.log(n);
  ab(n + 1);
}
ab(1);

// sum of x and y

function myFunction(x, y = 10) {
  console.log(x + y);
  return x + y;
}
myFunction(5);

// print hi 5 time

function show(n) {
  console.log("Hi", n);
  if (n >= 5) return;
  show(n + 1);
}
show(1);

//factorial

function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4));
// sum(4);
