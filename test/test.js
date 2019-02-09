var assert = require("chai").assert;
var stocks = require("../bottles");

describe("stock market", function () {
  it("should return 16 if it works (brute)", function () {
    var num = [45, 24, 35, 31, 40, 38, 11];
    var result = stocks.findMaxBrute(num);
    assert.equal(result, 16);
  });
  it("should return 16 if it works (elegant)", function () {
    var num = [45, 24, 35, 31, 40, 38, 11];
    var result = stocks.findMaxElegant(num);
    assert.equal(result, 16);
  });
});