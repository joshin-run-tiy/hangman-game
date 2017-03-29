var test = require('tape');
var guessLength = require('../../js/guess.js');

test('guessLength() should return \'Your guess was more than one letter long. Please guess again.', function(t) {
  var result = guessLength();
  var expected = "Your guess was more than one letter long. Please guess again."
  t.deepEqual(result, expected);
  t.end();
}


//
// test('newGame() should refresh page; log\'script loaded\' serving as one result of running the function', function(t) {
//   var result = newGame();
//   var expected = "Your guess was more than one letter long. Please guess again";
//   t.deepEqual(result, expected);
//   t.end();
// });
