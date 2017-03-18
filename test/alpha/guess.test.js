var test = require('tape');
var validateChar = require('../../js/guess.js');


test('validateChar() should return "no such letter"', function(t) {
  var result = validateChar("j");
  var expected = "no such letter";
  t.deepEqual(result, expected);
  t.end();
});

test('validateChar() should return "no such letter"', function(t) {
  var result = validateChar("j");
  var expected = "no such letter";
  t.deepEqual(result, expected);
  t.end();
});

test('validateChar() should return "yup, same letter"', function(t) {
  var result = validateChar("p");
  var expected = "yup, same letter";
  t.deepEqual(result, expected);
  t.end();
});
