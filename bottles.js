// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase
// Given these parameters, write a program so that you can figure out how 
// many total bottles of pop can be redeemed given a customer investment.
const money = process.argv[2];
const price = 2;
var bottles = 0;
var caps = 0;

// returns how many full bottles user gets
function moneyStuff() {
  let bottlesTemp = (Math.trunc(money / price));
  money -= bottlesTemp * price;
  return bottlesTemp;
}

// returns how many full bottles user gets from their empties
function bottleCalc() {}

// returns how many full bottles user gets from their caps
function capCalc() {}