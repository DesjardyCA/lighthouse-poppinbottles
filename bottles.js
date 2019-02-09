// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase
// Given these parameters, write a program so that you can figure out how 
// many total bottles of pop can be redeemed given a customer investment.
const price = 2;
const emptyToFull = 2;
const capsToFull = 4;

var money = process.argv[2];
var totalBottles = 0;
var emptyBottles = 0;
var caps = 0;

doTheStuff();

// runs through the calcs and writes to log the expected out
function doTheStuff() {
  moneyStuff();

  console.log(`Total bottles: ${totalBottles}\n` +
    `Remaining bottles: ${emptyBottles}\n` +
    `Remaining caps: ${caps}\n` +
    `Total earned:\n` +
    `  Bottles: ${Math.trunc(totalBottles/emptyToFull)}\n` +
    `  Caps: ${Math.trunc(totalBottles/capsToFull)}`);
}

function moneyStuff() {
  let bottlesTemp = (Math.trunc(money / price));

  money -= bottlesTemp * price;
  groundhogDay(bottlesTemp);
}

// recursive function
function groundhogDay(bottlesTemp) {
  var changed = false;
  totalBottles += bottlesTemp;
  emptyBottles += bottlesTemp;
  caps += bottlesTemp;

  let recursTemp = 0;
  if (emptyBottles >= emptyToFull) {
    recursTemp += emptyBottleCalc();
    changed = true;
  }
  if (caps >= capsToFull) {
    recursTemp += capCalc();
    changed = true;
  }
  if (changed) {
    groundhogDay(recursTemp);
  }
}

// returns how many full bottles user gets from their empties
function emptyBottleCalc() {
  let bottlesTemp = Math.trunc(emptyBottles / emptyToFull);
  emptyBottles -= bottlesTemp * emptyToFull;

  return bottlesTemp;
}

// returns how many full bottles user gets from their caps
function capCalc() {
  let bottlesTemp = Math.trunc(caps / capsToFull);
  caps -= bottlesTemp * capsToFull;

  return bottlesTemp;
}

// *** Sample output ***
// Total bottles: 75
// Remaining bottles: 1
// Remaining caps: 3
// Total earned:
//   Bottles: 37
//   Caps: 18