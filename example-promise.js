// function getTempCallback (location, callback) {
//   callback(null, 25);
//   callback("City not found.");
// }
//
// getTempCallback( "London", function (err, data) {
//   if (err) {
//     console.log("Bummer, an error occurred >", err);
//   } else {
//     console.log("Success! >", data);
//   }
// });
//
// //
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout( function () {
//       resolve(25);
//       reject("City not found.");
//     }, 1000);
//   });
// }
//
// getTempPromise("London").then(
//   function (data) {
//     console.log("Promise success >", data);
//   },
//   function (err) {
//     console.log("Promise error >", err);
//   }
// );

// Challenge

if (typeof 7 === "number") {}

function addNumbers (a, b) {
  return new Promise( function (resolve, reject) {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    } else {
      reject("Please provide two numbers.");
    }
  });
}

addNumbers(2, 3).then(
  function(sum) {
    console.log("Sum is", sum);
  },
  function(err) {
    console.log(err);
  }
);


addNumbers(2, "3").then(
  function(sum) {
    console.log("Sum is", sum);
  },
  function(err) {
    console.log(err);
  }
);
