function ab(n) {
  if (n > 5) {
    return;
  }
  console.log(n);
  ab(n + 1);
}
ab(1);
