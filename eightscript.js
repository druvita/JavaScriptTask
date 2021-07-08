"use strict";
/*
function calAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Goyani";
      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      const output = "NEW OUTPUT!";
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();
  //console.log(firstName);

  return age;
}

const firstName = "Dhruvi";
calAge(1996);

*/
//primitive types
let lastName = "Goyani";
let oldLastname = lastName;
lastName = "Mangukiya";
console.log(lastName, oldLastname);

const Dhruvi = {
  firstName: "Dhruvi",
  lastName: "Mangukiya",
  age: 25,
};

const marriedDhruvi = Dhruvi;
marriedDhruvi.lastName = "Mangukiya";
console.log("Before marriage:", Dhruvi);
console.log("After marriage:", marriedDhruvi);

//marriedDhruvi = {};
const Dhruvi2 = {
  firstName: "Dhruvi",
  lastName: "Goyani",
  age: 25,
  family: ["krish", "priyansi"],
};

const dhruviCopy = Object.assign({}, Dhruvi2);
dhruviCopy.lastName = "Mangukiya";

dhruviCopy.family.push("Mary");
dhruviCopy.family.push("Vimal");

console.log("Before marriage:", Dhruvi2);
console.log("After marriage:", dhruviCopy);
