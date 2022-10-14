/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Maltida";
let first = "Jonas";
let firstNamePerson;
let first_name;
let first_name_person;

console.log(firstName);
console.log(firstName);
console.log(firstName);

let person = "Jonas";
let PI = 3.1415;
// Variable name conventions

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "ATLAS");

console.log("----------------");
javascriptIsFun = "ATLAS";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 10;

// const job;

var job = "programer";
job = "teacher";

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); //>, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log((now = 1991 > now - 2018));

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const markHigherBMI =
  massMark / heightMark ** 2 > massJohn / (heightJohn * heightJohn);
console.log(massMark / heightMark ** 2);
console.log(massJohn / (heightJohn * heightJohn));
console.log(markHigherBMI);

const firstName = "Jonas";
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');
console.log(`String
multiple
lines new`);

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license`);
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// CODING CHALLENGE 2

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})
    })`
  );
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}

// Type conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18, Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + String(23) + " years old");
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // 11
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean("Jonas"));

const money = 10;
if (money) {
  console.log(`Don't spend it all!`);
} else {
  console.log(`You should get a job!`);
}

let height = 0;
if (height) {
  console.log(`Height is defined`);
} else {
  console.log(`Height is undefined`);
}

const age = 18;
if (age === 18) {
  console.log(`You just became an adult`);
}

const ageNew = 18;
if (ageNew === 18) {
  console.log(`Strict`);
} else {
  console.log(`Loose`);
}

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  23;
  console.log(`Cool! 23 is an amazing number!`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number!`);
} else {
  console.log(`Number is not 23 or 7`);
}

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);
if (favourite !== 23) {
  console.log(`Why not 23?`);
}

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive`);
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive`);
}

const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 101;
const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 106;

const averageScoreDolphins =
  (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const averageScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins > 100) {
  console.log(`Dolphins won with ${averageScoreDolphins}`);
} else if (
  averageScoreKoalas > averageScoreDolphins &&
  averageScoreKoalas > 100
) {
  console.log(`Koalas won with ${averageScoreKoalas}`);
} else if (
  averageScoreDolphins === averageScoreKoalas &&
  averageScoreDolphins > 100 &&
  averageScoreKoalas > 100
) {
  console.log(`Draw with ${averageScoreDolphins}`);
} else {
  console.log(`No teams won`);
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy 🏆`);
} else if (scoreDolphins < scoreKoalas) {
  console.log(`Koalas win the trophy 🏆`);
} else if (scoreDolphins === scoreKoalas) {
  console.log(`Both win the trophy! `);
}

// BONUS 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 130 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins win the trophy 🏆`);
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log(`Koalas win the trophy 🏆`);
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log(`Both win the trophy! `);
} else {
  console.log(`No team wins`);
}

const day = "monday";
switch (day) {
  case "monday":
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`Prepare theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write code examples`);
    break;
  case "friday":
    console.log(`Record videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weeekend`);
    break;
  default:
    console.log(`Not a valid day!`);
    break;
}
*/
