var names = [
  "Jon",
  "Janet",
  "Drake"
]

// names.forEach(function(name) {
//   console.log("forEach", name);
// });
//
// names.forEach((name) => {
//   console.log("=>", name);
// });
//
// names.forEach((name) => console.log("...", name));
//
// var returnName = (name) => name + "!";
// console.log(returnName('Jon'));

var person = {
  name: "Charlie",
  sayHi: function() {
    names.forEach(function (name) {
      console.log(this.name, "says hi to", name);
    });
  },
  sayHi2: () => {
    names.forEach((name) => {
      console.log(this.name, "says hi to", name);
    });
  }
}

// person.sayHi();
// person.sayHi2();

var add1 = function(a,b) {
  return a + b;
}

var add2 = (a, b) => {
  return a + b;
}

var add3 = (a, b) => a + b;

console.log(add3(1,2));
