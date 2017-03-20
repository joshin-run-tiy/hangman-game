/*=========================================
GET LETTER - WORKING
=========================================*/
const guess = (function() {

  function guessChar() {
    const input = prompt("Guess a letter").toLowerCase();
    checkForNoneOrDouble(input);
  }
/*=========================================
PUSH LETTER TO 'GUESSED LETTERS' LIST - WORKING
=========================================*/
  function guessedArr(letter) {
    const lettersGuessed = [];
    lettersGuessed.push(letter);
    document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
  }

  function checkForNoneOrDouble(input) {
    if (input === "") {
      console.log("Please enter a letter.");
      guessChar();
      const inputLength = input.length;
    } else if (input > 1) {
      console.log("Guess only one letter.");
      guessChar();
    }
    validate(input);
  }
// //==============================
  function validate(input) {
    const alphabet =    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    alphaArr = alphabet.length;
    for (var i = 0; i < alphaArr; i++) {
      if (alphabet[i] === input) {
        compare(input);
      }
    }
  }
/*=========================================
COMPARE: Find if a lowercase letter of 26
=========================================*/
  function compare(input) {
    alert("it's a lowercase letter");
  }

  return {
    guessChar: guessChar,
    guessedArr: guessedArr,
    checkForNoneOrDouble: checkForNoneOrDouble,
    validate: validate,
    compare: compare,
  }
})();

module.exports = guess;


// function validateInAlphabet(input) {
//     let alphabet =    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     alphaArr = alphabet.length;
//     for (var i = 0; i < alphaArr; i++) {
//       if (alphaArr[i] !== input) {
//         alert("Please guess a letter.");
//     }
//   compare(input);
// }
// }

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
