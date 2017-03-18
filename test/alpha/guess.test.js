var test = require('tape');
var guessLength = require('../../js/guess.js');

test('validateChar() should return "guess only one letter"', function(t) {
  var result = guessLength("jj");
  var expected = "guess only one letter";
  t.deepEqual(result, expected);
  t.end();
});

test('guessLength() should return "no letters entered"', function(t) {
  var result = guessLength("");
  var expected = "no letters entered";
  t.deepEqual(result, expected);
  t.end();
});

test('guessLength() should return "not a letter"', function(t) {
  var result = guessLength(0);
  var expected = "not a letter";
  t.deepEqual(result, expected);
  t.end();
});
//
// test('guessLength() should return "you entered a single letter from the alphabet"', function(t) {
//   var result = guessLength(0);
//   var expected = "you entered a single letter from the alphabet";
//   t.deepEqual(result, expected);
//   t.end();
// });




/*working*/
// test('guessLength() should return "yeah"', function(t) {
//   var result = guessLength("a");
//   var expected = "yeah";
//   t.deepEqual(result, expected);
//   t.end();
// });

// test('guessLength() should return \'Your guess was more than one letter long. Please guess again.', function(t) {
//   var result = guessLength("999");
//   var expected = "Your guess was more than one letter long. Please guess again."
//   t.deepEqual(result, expected);
//   t.end();
// });
//
// /*****/
// test('guessLength() should return \'No letter entered. Please guess again.', function(t) {
//   var result = guessLength("");
//   var expected = "No letter entered. Please guess again."
//   t.deepEqual(result, expected);
//   t.end();
// });
// /*****/
//
// test('guessLength() should return \'Your guess was more than one letter long. Please guess again.', function(t) {
//   var result = guessLength("$");
//   var expected = "Your guess was more than one letter long. Please guess again."
//   t.deepEqual(result, expected);
//   t.end();
// });
//
// test('guessLength() should return \'Your guess was more than one letter long. Please guess again.', function(t) {
//   var result = guessLength("qq");
//   var expected = "Your guess was more than one letter long. Please guess again."
//   t.deepEqual(result, expected);
//   t.end();
// });
//
//
//
// /*======================================*/
// // var test = require('tape');
// // var add = require('../../js/guess.js');
// //
// // test('should produce sum of both number arguments', function(t) {
// //   var result = add(1,1);
// //   var expected = 2;
// //   t.deepEqual(result, expected);
// //   t.end();
// // });
