"use strict";

/* const x = "23";
if (x === 23) console.log(23);
const calcAge = birthYear => 2021 - birthYear;

console.log(); 
console.log(calcAge(1950));

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);
*/

const measurKelvin = function () {
  const measurment = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius:"),
  };
  //console.log(measurment);
  console.table(measurment);
  //console.log(measurment.value);

  const kelvin = measurment.value + 273;
  return kelvin;
};
console.log(measurKelvin());
