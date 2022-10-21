// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let minTemp = temps[0];
  let maxTemp = minTemp;
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] != 'number') continue;
    if (temps[i] > maxTemp) maxTemp = temps[i];
    if (temps[i] < minTemp) minTemp = temps[i];
  }
  console.log('Max Temp =', maxTemp);
  console.log('Min Temp =', minTemp);
  return maxTemp - minTemp;
};
console.log(calcTempAmplitude(temperatures));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celsius:')),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
*/
const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let strForecast = '... ';
  for (let i = 0; i < arr.length; i++) {
    strForecast += `${arr[i]}°C in ${i + 1} days ... `;
  }
  return strForecast;
};
// console.log(printForecast(testData1));
console.log(printForecast(testData2));
