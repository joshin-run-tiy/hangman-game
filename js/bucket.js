/*=========================================
VALIDATE CHARACTER (double, not letter, symbol, no guess.)
=========================================*/
// function validateInput(input) {
//   if (input.length > 1) {
//     alert("Guess only one letter.");
//     guess();
//   } else if (input === "" || " ") {
//     alert("Unrecognized character. Please enter a letter.");
//     guess();
//   } else if (typeof input === 'number') {
//     alert("Unrecognized character. Please enter a letter.");
//   } else {
//     alert("compare");
//     // compare(input);
//   }
// }
//==========================


/*=========================================
RELOAD ON "NEW GAME" BUTTON EXECUTION - BROKEN
=========================================*/
// function newGame() {
//   // function onLoad() {
//   window.onload = onLoad;
//   console.log('script loaded');
// }

/*CODE BELOW IS BROKEN BUT ALMOST THERE. CHECK THE CODE BETWEEN LINES FOR CLUES TO FIX

++++++++++++++++++++=
let word = ["a","t"];
let dashedLine = ["_","_","_","_","_"];
// letterString = word[1].toString("");
dashedLine[1] = word[1];
dashedLine[0] = word[0]
console.log(dashedLine);


/*
POSSIBLE CLUES:
let word = "would";
let dashedLine = "_____";
dashedLine = dashedLine.split("");
dashedLine[2] = "u";
// u = dashedLine.charAt(2);
console.log(dashedLine);
// console.log(word.charAt(2));
// dashedLine.charAt(2) = word.charAt(2);
*/

//
// +++++++++++++++++++++
//
// function compare(letter) {
//     console.log("Guessed: " + letter);
//     for (var i = 0; i < word.length; i++) {
// 	    if (word.charAt(i) === letter) {
// 	      dashedLine.charAt(i) = word.charAt(i);
//         console.log(dashedLine);
//         return;
// 	      // dashedLineArray[i] = wordArray[i];
//         // console.log(dashedLineArray.join());
//         // return;
//     }
//   }
// }


// function compare(letter) {
//     let wordArray = [];
//     let dashedLineArray = [];
//     let extractedLetter = [];
//     console.log("Guessed: " + letter);
//     for (var i = 0; i < word.length; i++) {
// 	    wordArray = word.split("");
//       if (wordArray[i] === letter) {
// 	      LineArray = dashedLine.split("");
//         console.log(LineArray);
//         return;
// 	      // dashedLineArray[i] = wordArray[i];
//         // console.log(dashedLineArray.join());
//         // return;
//     }
//   }
// }
// 	    if (wordArray[i] === letter) {
// 	      dashedLineArray = dashedLine.split("");
// 	      var extractedLetter = wordArray[i];
// 	      dashedLine[i] = extractedletter;
//         console.log(dashedLine);
//         // document.getElementById("msg").innerHTML = dashedLine;
// 	  }
//   }
// }

// function validate(letter) {
//     for (var i = 0; i < alphabet.length; i++) {
//         if (alphabet[i] == letter) {
//           var splicedIndex = alphabet.splice(i, 1);
//           document.getElementById("letter-box").innerHTML = splicedIndex;
//           return splicedIndex;
//           // alphabet updated without letter
//         } else {
//           console.log("Invalid.");
//           var letter = prompt("Guess again!");
//         }
//     }
// }



//
//     document.getElementById("letter-box").innerHTML = splicedIndex;
// }
//
// function compare(letter) {
//   for (var i = 0; i < word.length; i++) {
//     if (letter === word[i]) {
//       line = line.split();
//     }
//   }
// }
//
// function guessedArr(letter) {
//   var lettersGuessed = [];
//   lettersGuessed.push(letter[i]);
//   document.getElementById("letter-box").innerHTML = lettersGuessed;
// }
//
//
//           var splicedIndex = alphabet.splice(i, 1);
//           document.getElementById("letter-box").innerHTML = splicedIndex;
//           return splicedIndex;
//           // alphabet updated without letter
//         } else {
//           console.log("Invalid.");
//           var letter = prompt("Guess again!");
//         }
//     }
// }
/*+++++working above+++++++++++++++++++++++++*/



// function validateInAlphabet(input) {
//     for (var i = 0; i < isChars.length; i++) {
//       let isChars =    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//       if (isChars[i] === char) {
//         return "yup, same letter";
//       }
//     }
//   return "no such letter"
// }






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
// module.exports = function validateChar(char) {
//   let isChars = ["a","p"];
//     for (var i = 0; i < isChars.length; i++) {
//       if (isChars[i] === char) {
//         return "yup, same letter";
//       } else if (isChars[i] !== char) {
//         return "no such letter"
//       }
//   }
// }
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
