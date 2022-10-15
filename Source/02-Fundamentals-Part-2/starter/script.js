"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) {
  console.log(`I can drive :p`);
}

const interface = `Audio`;
const private = 423;

function logger() {
  console.log(`My name is Jonas`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(2, 4));

const appleOrangeJuice = fruitProcessor(5, 4);
console.log(appleOrangeJuice);

// Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple and ${orangePieces} orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3))

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWiner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win🏆(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win🏆(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team win`);
  }
  return 0;
};

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// checkWiner(avgDolphins, avgKoalas);

checkWiner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Petter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice", "Jonas"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);

const friends = ["Michael", "Steven", "Peter"];

// Add elements
let newLength = friends.push("Jay");
console.log(friends); // Last
console.log(newLength);

newLength = friends.unshift("John"); // Frist
console.log(friends);
console.log(newLength);

// Remove elements
friends.pop();
const popped = friends.pop(); // Last
console.log(friends);
console.log(popped);

friends.shift(); // First
console.log(friends);

friends.push(23);
console.log(friends.indexOf("Steven")); // Return position of value

console.log(friends.includes("Steven")); // Check if value available
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log(`Steven has`);
}

const bills = [125, 555, 100];

const calcTip = function (value) {
  return value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
};

function calcTip(value){
  if (value >= 50 && value <= 300){
    return value * 0.15;
  } else {
    return value * 0.2;
  }
}

const calcTip = (value) =>
  value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`${bills}
${tips}
${totals}`);

*/
const jonas = {
  fistName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
