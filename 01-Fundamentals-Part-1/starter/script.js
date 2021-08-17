// let js = 'Amazing';
// // if (js === 'Amazing') alert('JS is FUN!');
// console.log(40 + 20 - 30 * 12 / 23);

// // Lecture: Values and Variables
// let firstName = "John";
// let lastName = "Doe";

// var country, continent, population;

// country = 'India';
// continent = 'Asia';
// population = '136.64 crores';

// console.log("I am", firstName, lastName);
// console.log("Country: ", country);
// console.log("Continent: ", continent);
// console.log("Population: ", population);

// // Lecture: Data Types
// const isIsland = false;
// let language;

// console.log("Type of isIsland is", typeof isIsland);
// console.log("Type of population is", typeof population);
// console.log("Type of country is", typeof country);
// console.log("Type of language is", typeof language);


// // Lecture: let, cosnt and var
// const givenName = 'CaptV';
// language = 'Malayalam';
// // givenName = 'Majja'; // Error Statement

// // Lecture: Basic Operator
// population = 13664000000;
// let split1 = population / 2;
// let split2 = population - split1;
// population++;
// console.log(population, split1, split2);

// let finpop = 600000000;
// let avgpop = 3300000000;

// console.log("Is my country population grater than Finland?", population > finpop);
// console.log("Does your country have less people than the average country?", population < avgpop);

// const description = 'Portugal is in Europe, and its 11 million people speak portuguese';
// console.log(description);

// // Coding Challenge 1: BMI Calculation
// // Test Data 1
// // For Mark
// let mWeight = 78;
// let mHeight = 1.69;
// mBMI = mWeight / (mHeight ** 2);
// console.log("Mark's BMI: ", mBMI)

// // For Jhon
// let jWeight = 92;
// let jHeight = 1.95;
// jBMI = jWeight / (jHeight ** 2);
// console.log("Jhon's BMI: ", jBMI)

// // Check who has more BMI
// if (mBMI > jBMI) {
//     console.log("Mark has higher BMI than Jhon")
// } else {
//     console.log("Jhon has higher BMI than Mark")
// }

// // Test Data 2
// // For Mark
// mWeight = 95;
// mHeight = 1.88;
// mBMI = (mWeight / (mHeight ** 2)).toFixed(2);
// console.log("Mark's BMI: ", mBMI)

// // For Jhon
// jWeight = 85;
// jHeight = 1.76;
// jBMI = (jWeight / (jHeight ** 2)).toFixed(2);
// console.log("Jhon's BMI: ", jBMI)

// // Check who has more BMI
// if (mBMI > jBMI) {
//     console.log(`Mark has higher ${mBMI} BMI than Jhon's ${jBMI}`)
// } else {
//     console.log(`Jhon has higher ${jBMI} BMI than Mark's ${mBMI}`)
// }

// String and Template Literals - Back Ticks
// const firstName = 'Vishnu';
// const job = 'Sailor';

// const yearOfBirth = '1990';
// const thisYear = '2050';

// let interst = 'Love Learning';

// const me = `I am ${firstName}, ${job} by profession. I am ${thisYear - yearOfBirth} years old.
// I ${interst} !!!`;

// console.log(me);

// // AND operator

// console.log(true && true && false)

// //OR Operator

// console.log(true || false || false)

// Coding Challenge 3:
// 1. Calculate avg score for each team
// 2. Compare score and declare a winer or draw
// Bonus 1 Team should have a minimum score of 100 to win
// Bonus 2 For draw also min score to be more than 100

// Data set 1: 
// Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
const dScore = [96, 108, 89];
const kScore = [88, 91, 110];

var dSum = dScore.reduce((a, b) => a + b, 0);
var kSum = kScore.reduce((a, b) => a + b, 0);

var dAvg = (dSum / dScore.length).toFixed(2);
var kAvg = (kSum / kScore.length).toFixed(2);

console.log(`Average score of Dolphins is ${dAvg}`)
console.log(`Average score of Koalas is ${kAvg}`)

var disqualify = 0

function checkMin(num) {
    if (num < 100) {
        console.log('No');
    }
}
var dQualify
var kQualify

dScore.forEach(function (elem) {
    if (elem < 100) {
        dQualify = false;
    }
})
console.log(dQualify)

kScore.forEach(function (elem) {
    if (elem < 100) {
        kQualify = false;
    }
})
console.log(kQualify)

if (dAvg > kAvg && dQualify == true) {
    console.log(`Winner is Dolphins`)
} else if (dAvg == kAvg) {
    console.log(`It's a draw`)
} else if (kAvg > dAvg && kQualify == true) {
    console.log(`Winner is Koalas`)
} else {
    console.log(`No winner`)
}