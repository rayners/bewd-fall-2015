// Write a function that takes a single argument: numberOfTimes
// That argument will loop from 0 to numberOfTimes and return an array
// where each value in the array is defined as follows:
// number, or if divisible by 3 "Fizz", if divisible by 5 "Buzz"
// and if divisble by 3 and 5 "FizzBuzz"

var _ = require('lodash');

function fizzOrBuzz(item) {
  if (item % 15 == 0) {
    return 'FizzBuzz';
  } else if (item % 5 == 0) {
    return 'Buzz';
  } else if (item % 3 == 0) {
    return 'Fizz';
  } else {
    return item;
  }
}

function fizzBuzz(numberOfTimes) {
    return _.map(_.times(numberOfTimes+1), fizzOrBuzz);
}

function fibNumber(index) {
  if (index == 0 || index == 1) {
    return 1;
  } else if (index >= 2) {
    // This is the recursive version
    // Try for loops!
    return fibNumber(index - 2) + fibNumber(index - 1);
  }
}

var assert = require('assert'),
  jsc = require('jsverify');

describe('fibNumber', function() {
  jsc.property('should obay the fibonacci rules', 'nat 35', { quiet: false }, function(n) {
    if (n < 2) {
      return fibNumber(n) == 1;
    } else {
      return fibNumber(n) == (fibNumber(n - 1) + fibNumber(n - 2));
    }
  });
});

describe('fizzBuzz', function() {
  it('should return ["FizzBuzz"] when called with 0', function() {
    assert.deepEqual(fizzBuzz(0), ['FizzBuzz']);
  });

  it('should return ["FizzBuzz", 1, 2, "Fizz", 4, "Buzz"] when called with 5', function() {
    assert.deepEqual(fizzBuzz(5), ['FizzBuzz', 1, 2, "Fizz", 4, "Buzz"]);
  });

  it('should return the right values when called with 15', function() {
    assert.deepEqual(fizzBuzz(15),
      ['FizzBuzz', 1, 2, "Fizz", 4, "Buzz", "Fizz",
        7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"])
  })
});
