// const myName = "Sudhan     ";
// const myBreak = "Chiya           ";

// console.log(myName.trim().length);
// console.log(myBreak.trueLength);

const heros = ["thor", "spiderman"];

const herosPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpidermanPower: function () {
    console.log(`spider power is ${this.spiderman}`);
  },
};

Object.prototype.sudhan = function () {
  console.log(`sudhan is preseny in all object`);
};

Array.prototype.hiSudhan = function () {
  console.log(`Sudhan say hi!!`);
};
// console.log(`hello`);

// herosPower.sudhan();
heros.sudhan();
heros.hiSudhan();

//inheritane

const User = {
  name: "tester",
  email: "tester@gmail.com",
};
const Teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js assignment ",
  fullTime: false,
  __proto__: teachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(teachingSupport, Teacher);

let anotherUsername = "mobile        ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True lenght is ${this.trim().length}`);
};

anotherUsername.trueLength();
"Sudhan".trueLength();
"cup".trueLength();
