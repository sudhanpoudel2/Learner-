//////////////////////////////// higher order function\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///The higher order function are the function which accept a function in a parameter
///or return a function or Both

function abc(val) {}
abc(function () {});

function abcd() {
  return function () {};
}
abcd();

///////////////////////////////////////Constructor\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/// The function where we use this and when we call the function we use new keyword

////////example 1\\\\\\

function biscuit() {
  this.width = 12;
  this.height = 10;
  this.color = "brown";
  this.test = "sugary";
}
var bis1 = new biscuit();
var bis2 = new biscuit();
var bis3 = new biscuit();

///////example 2\\\\\\\\\\\\\\\\\\\\\

function circularButton(color) {
  this.radius = 2;
  this.color = color;
  this.icon = false;
  this.pressable = true;
}
var redbtn = new circularButton("red");
var greenbtn = new circularButton("green");

///////////////////////////// New Keyword \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/// New keyword always create a blank object for the constructor function which
/// is getting called just after new.

// example of constructor function
function abc() {
  this.name = "Sudhan";
}
new abc();

// new keyword will be
{
  name: sudhan;
}

////////////////////////////// iiffe\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///immediately invoke function expression

var ans = (function () {
  var privateVal = 12;

  return {
    getter: function () {
      console.log(privateVal);
    },
    setter: function (val) {
      privateVal = val;
    },
  };
})();

//////////////////////////////////// prototype inheritance\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var human = {
  canFly: false,
  canWalk: true,
  canTalk: true,
  haveEmotion: true,
  haveFourLeg: false,
};

var fatherStudent = {
  canMakeWebsite: true,
  canMakeAnimation: true,
};
fatherStudent.__proto__ = human;
