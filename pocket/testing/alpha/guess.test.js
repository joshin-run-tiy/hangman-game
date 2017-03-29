var test = require('tape');
var validateChar = require('../../js/guess.js');

test('validateChar() should return "guess only one letter"', function(t) {
  var result = validateChar("");
  var expected = "guess only one letter";
  t.deepEqual(result, expected);
  t.end();
});

test('validateChar() should return "nothing entered"', function(t) {
  var result = validateChar("");
  var expected = "nothing entered";
  t.deepEqual(result, expected);
  t.end();
});

test('validateChar() should return "compare"', function(t) {
  var result = validateChar("j");
  var expected = "compare";
  t.deepEqual(result, expected);
  t.end();
});
