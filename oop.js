// const user = {
//   username: "Sudhan",
//   loginCount: 8,
//   signIn: true,

//   getUserDetails: function () {
//     // console.log("got user details from database");
//     // console.log(`Username : ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("Sudhan", 5, true);
const userTwo = new User("suraj", 6, false);

console.log(userOne.constructor);
// console.log(userTwo);
