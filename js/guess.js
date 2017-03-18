function validateChar(char) {
    for (var i = 0; i < isChars.length; i++) {
      let isChars =    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      if (isChars[i] === char) {
        return "yup, same letter";
      }
    return "no such letter"
  }
}


module.exports = function guessLength(letter) {
  if (letter.length > 1) {
    return "guess only one letter"
  } else if (letter === "") {
    return "no letters entered"
  } else {
    return "not a letter";
  }
}

function guessLetter() {
  var letterInput = prompt("Guess a letter").toLowerCase();
  validateChar(letterInput);
  guessedArr(letterInput); //pass letter to func to print to out-box
  // compare(letterInput);
}

function guessedArr(letter) {
  lettersGuessed.push(letter);
  document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
}



// module.exports = function validateChar(char) {
//   let isChars =    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     for (var i = 0; i < isChars.length; i++) {
//       if (char === isChars[i]) {
//         return char;
//       // } else {
//       //   return "Your guess was not a letter";
//     // } else if (char !== isChars[i]){
//     //     return "Your guess was not a letter";
//     }
//     return "other"
//   }
// }
// //     // let alphabet = ["a","p","e"];
// //     // ,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// //     // for (var i = 0; i < alphabet.length; i++) {
// //     //   if (alphabet[i] === char) {
// //         // return char;
// //       // } else {
// //       // return "Your guess was not a letter";
// //   //   }
// //   // }
// //   // compare();
// // }

// module.exports = function guessLength(letter) {
//   if (letter.length > 1) {
//     return "guess only one letter"
//   } else if (letter === "") {
//     return "no letters entered"
//   } else {
//     // function validate() {
//     // let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     // for (var i = 0; i < alphabet.length; i++) {
//     //   if (alphabet[i] === letter) {
//     //     return "you entered a single letter from the alphabet";
//     return "not a letter";
//   }
//   // compare();
// }


/*==========================================
**************PASSED************************
==========================================*/
/*1*/
// module.exports = function guessLength(letter) {
//   if (letter.length > 1) {
//     return "guess only one letter"
//   } else if (letter === "") {
//     return "no letters entered"
//   } else {
//     return "not a letter";
//   }
// }

//--tests--
// var test = require('tape');
// var validateChar = require('../../js/guess.js');
//
// test('validateChar() should return "guess only one letter"', function(t) {
//   var result = validateChar("pppp");
//   var expected = "guess only one letter";
//   t.deepEqual(result, expected);
//   t.end();
// });
//
// test('validateChar() should return "no letters entered"', function(t) {
//   var result = validateChar("");
//   var expected = "no letters entered";
//   t.deepEqual(result, expected);
//   t.end();
// });
//
// test('msg: validateChar() should return "not a letter"', function(t) {
//   var result = validateChar("=");
//   var expected = "not a letter";
//   t.deepEqual(result, expected);
//   t.end();
// });
//================================================

/*2*/
// module.exports = function validateChar(char) {
//   let isChars = ["a","p"];
//     for (var i = 0; i < isChars.length; i++) {
//       if (char === isChars[i]) {
//         return "yup, same letter";
//     }
//   }
// }
//
// test('validateChar() should return "yup, same letter"', function(t) {
//   var result = validateChar("a");
//   var expected = "yup, same letter";
//   t.deepEqual(result, expected);
//   t.end();
// });

/*3*/
module.exports = function validateChar(char) {
  let isChars = ["a","p"];
    for (var i = 0; i < isChars.length; i++) {
      if (isChars[i] === char) {
        return "yup, same letter";
      } else if (isChars[i] !== char) {
        return "no such letter"
      }
  }
}
/*==========================================
**************END************************
==========================================*/

/**working*/
// module.exports = function guessLength(letter) {
//   if (letter === "a") {
//     return "yeah"
//   }
// }



// } else if (letter === "") {
//   console.log('No letter entered. Please guess again.')
// }


/*=======================================*/
// module.exports = function add(a,b) {
//   sum = a + b;
//   return sum;
// }
//
// module.exports = function guessLength(letter) {
//   if (letter.length === 1) {
//     msg = "yeah";
//     return msg;
//   }
// }
