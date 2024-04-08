function multpipleBy5(num) {
  return num + 5;
}
multpipleBy5.power = 2;
console.log(multpipleBy5(5));
console.log(multpipleBy5.power);
console.log(multpipleBy5.prototype);

function createUser(username, score) {
  (this.username = username), (this.score = score);
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.prinyMe = function () {
  console.log(`price is ${this.score}`);
};

const beer = new createUser("beer", 41);
const chai = new createUser("chai", 25);

beer.prinyMe();
