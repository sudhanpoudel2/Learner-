const myName = "Sudhan     ";
const myBreak = "Chiya           ";

console.log(myName.trim().length);
console.log(myBreak.trueLength);

//  /////////////////

const heros = ["thor", "spiderman"];
const sudhan = [];

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
console.log(`hello`);

herosPower.sudhan();
heros.sudhan();
heros.hiSudhan();
sudhan.hiSudhan();
console.log(sudhan);

inheritane;

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

// // modern syntax
Object.setPrototypeOf(teachingSupport, Teacher);

let anotherUsername = "mobile        ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True lenght is ${this.trim().length}`);
};

anotherUsername.trueLength();
"Sudhan".trueLength();
"cup".trueLength();

///////

function person(name, age, color) {
  (this.name = name), (this.age = age), (this.color = color);
}

const father = new person("john", 32, "white");
console.log("name is ", father.name);
console.log(father.toSrring());

/////
const student = {
  name: "sudhan",
  lastName: "poudel",
  getFullName: function () {
    return this.name + " " + this.lastName;
  },
};

const Teacher = {
  name: "alex",
  lastName: "will",
  getFullName: function () {
    return this.name + " " + this.lastName;
  },
};

console.log(student.getFullName());
console.log(Teacher.getFullName());
