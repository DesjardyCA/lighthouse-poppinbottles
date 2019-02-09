// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase
// Given these parameters, write a program so that you can figure out how 
// many total bottles of pop can be redeemed given a customer investment.
const price = 2;
const emptyToFull = 2;
const capsToFull = 4;

var money = process.argv[2];
var fullBottles = 0;
var emptyBottles = [0, 0];
var caps = [0, 0];

doTheStuff();

// runs through the calcs and writes to log the expected out
function doTheStuff() {
  moneyStuff();

  console.log(`Total bottles: ${fullBottles.total}\n` +
    `Remaining bottles: ${emptyBottles}\n` +
    `Remaining caps: ${caps}\n` +
    `Total earned:\n` +
    `  Bottles: ${fullBottles.fromEmpties}\n` +
    `  Caps: ${fullBottles.fromCaps}`);
}

function moneyStuff() {
  let bottlesTemp = (Math.trunc(money / price));

  money -= bottlesTemp * price;
  groundhogDay(bottlesTemp);
}

// recursive function
function groundhogDay(bottlesTemp) {
  fullBottles += bottlesTemp;
  emptyBottles += bottlesTemp;
  caps += bottlesTemp;

  if (emptyBottles >= emptyToFull) {
    groundhogDay(emptyBottleCalc());
  }
  if (caps >= capsToFull) {
    groudhogDay(capCalc());
  }
}

// returns how many full bottles user gets from their empties
function emptyBottleCalc() {}

// returns how many full bottles user gets from their caps
function capCalc() {}

// *** Sample output ***
// Total bottles: 75
// Remaining bottles: 1
// Remaining caps: 3
// Total earned:
//   Bottles: 37
//   Caps: 18