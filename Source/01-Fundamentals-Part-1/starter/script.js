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
*/
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
