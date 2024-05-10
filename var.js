function abc() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

var a = 23;
var b = 45;
let b = 34;
let b = 55;

///////////////////// how to copy reference value\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var a = [1, 2, 3, 4, 5, 6];
var b = [...a];
console.log(b);

var obj = { name: "sudhan" };
var copyObj = { ...obj };
console.log(copyObj);

/////////////////////////////// truthy and falsy\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

if (false) {
  console.log("i love you");
} else {
  console.log("i hate you");
}

////////////////////////////// Foreach \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///// foreach is always used in array

var a = [1, 5, 9, 12, 41, 56, 96, 98];
a.forEach(function (val) {
  console.log(val + 2);
});

////////////////////////////// Forin \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////// foris is always used in object

var a = { name: "Sudhan", Age: 24, Color: "Brown" };

for (var key in a) {
  console.log(a[key]);
}
