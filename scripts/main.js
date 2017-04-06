;(function onLoad() {
  // "use strict";
/*===========================
INITIAL SETUP
===========================*/
  /* start config options */
  let word = "";
  let dashes;
  let dashesArr;
  let wordSplit;
  let availableLetters = "abcdefghijklmnopqrstuvwxyz";
  let turns = 11;
  let userLettersGuessed = [];
  var commonWords = [
  "the","boat","and","milk","any","pig","some","you","that","itch","cord",
  "was","for","only","are","ask","with","his","they","ice","bell","pink",
  "this","have","from","fork","one","had","bye","word","but","not",
  "what","all","were","went","when","your","can","said","there",
  "use","ant","each","which","she","dull","how","their","iffy","will",
  "pup","other","about","out","many","then","them","these","soul",
  "some","her","would","make","like","him","into","time","taste",
  "look","two","more","write","goat","seen","number","snow","way",
  "could","drops","smile","than","first","water","been","call",
  "who","oil","sits","cow","find","long","down","day","did","get",
  "come","made","may","part"];
  let userMessage = {
    won: 'Congratulations! You won! You won the game.',
    lost: 'Game over. Try again!',
    guessed: ' already guessed, please try again...',
    entry: 'Not a valid entry',
    validLetter: 'Please enter a letter from A-Z'
  };

  let messageOutput = document.getElementById("msg");
  let guessTextBox = document.getElementById("letter-box");
  let turnsTally = document.getElementById("turns");
  let letterTally = document.getElementById("guessed-letter-box");
  let blankOutput = document.getElementById("blank-output");

  function generateRandomNumber() {
    let num = Math.floor(Math.random() * 100);
    return num;
  }

  function selectWord() {
    let num = generateRandomNumber();
    let word = commonWords[num];
    console.log(word);
    return word;
  }

  function generateUnderscores() {
    word = selectWord();
    let wordSplit = word.split("");
    dashes = wordSplit.map(function(letter) {
    return "_";
    });
  return dashes.join("");
  }

  let setupEvent = document.querySelector('button#new-game');
  let reset = document.querySelector('button#reset');

  function reload() {
    location.reload();
  }

  setupEvent.addEventListener('click', function setup() {
    let output = generateUnderscores();
    messageOutput.innerHTML = output;
    return output;
  });

  reset.addEventListener('click', function () {
    reload();
  });

/*===========================
END GAME PLAY
===========================*/
  function noTurns() {
    blankOutput.innerHTML = userMessage.lost;
  }

  function won() {
    blankOutput.innerHTML = userMessage.won;
  }
/*===========================
Turn/Letter Tally
===========================*/
  let guessButton = document.getElementById("guess-button");
  guessButton.addEventListener('click', function () {
  let guessInput = document.getElementById("letter-box").value;
  tallyLetter(guessInput);
  tallyTurn();
  if (typeof guessInput !== "string" || guessInput.length != 1) {
    blankOutput.innerHTML = userMessage.entry;
    return false;
  }
  let wordArr = word.split("");
  let i = -1;
  do {
    i++;
    i = wordArr.indexOf(guessInput, i);
    dashes[i] = guessInput;
  } while (i != -1)
  dashesArr = dashes.join("");
  messageOutput.innerHTML = dashesArr;
  console.log(word);
  console.log(dashesArr);
  if (word === dashesArr) {
    won();
  }
  });

  function tallyTurn() {
    turns--;
    turnsTally.innerHTML = turns;
    if (turns === 0) {
      noTurns();
    }
  }

  function tallyLetter(guessInput) {
    userLettersGuessed += guessInput.toUpperCase();
    // userLettersGuessed.push(guessInput);
    letterTally.innerHTML = userLettersGuessed;
  }
})();


//
//
//
//
//   function displayDashes(length) {
//     for (var i=0; i < length; i++) {
//       dashedLine += "_";
//     }
//     document.getElementById("msg").innerHTML = dashedLine;
//   }
//

//
//   function gamePlay() {
//     let word = wordSelection;
//     console.log(word, 'from gamePlay function');
//     let wordLength = wordLength;
//     console.log(wordLength, 'from gamePlay function');
//   }
//
// })();
// //
// // ///*++++++++++++++++++++++good stuff below++++++++++++++++++++++++++++


// //   function passedThrough(x) {
// //     document.getElementById("msg").innerHTML = dashedLine;
// //     console.log(dashedLine);
// //     return dashedLine;
// //   };
// //   /* end config options */
// //   let letterGuessed = letterMatched = '';
// //   let numLettersMatched = 0;
// //   /* choose a word */
// //   let newGameQuery = document.querySelector('button#new-game');
// //   newGameQuery.addEventListener('click', newGame);
// //
// //






// // var joinArr = checkLetter(letter, word, dashedLine)
// // // return true;
// //

// let guessButton = document.getElementById("guess-button");
// //   guessButton.addEventListener('click', function () {
// //     let guessInput = document.getElementById("letter-box").value;
// //     console.log(guessInput.toLowerCase());
// //     // guessedArr(guessInput.toUpperCase());
// //     function guessedArr(letter) {
// //       let lettersGuessed = [];
// //       let guessUpper = guessInput.toUpperCase();
// //       lettersGuessed.push(guessUpper);
// //       document.getElementById("guessed-letter-box").innerHTML = lettersGuessed.join(" ");
// //     }
// //   // // });
// //   // let input = guessInput.toLowerCase();
// //   //   if (typeof input !== "string" || input.length != 1) {
// //   //     console.log("not a valid entry!");
// //   //     return false;
// //   //   }
// //   //   console.log(guessUpper);
// //   //   console.log(word);
// //   //   console.log(dashedLine);
// //   //   let arr = dashedLine.split("");
// //   //   let i = -1;
// //   //   do {
// //   //     i++;
// //   //     i = word.indexOf(guessUpper, i);
// //   //     arr[i] = guessUpper;
// //   //   } while (i != -1)
// //   //   let joinArr = arr.join("");
// //   //   console.log(joinArr);
// //         // return joinArr;
// //  // }






// // })();

// //   //
// //
// //   let guessButton = document.getElementById("guess-button");
// //   guessButton.addEventListener('click', function () {
// //     let guessInput = document.getElementById("letter-box").value;
// //     console.log(guessInput.toLowerCase());
// //     // guessedArr(guessInput.toUpperCase());
// //     function guessedArr(letter) {
// //       let lettersGuessed = [];
// //       let guessUpper = guessInput.toUpperCase();
// //       lettersGuessed.push(guessUpper);
// //       document.getElementById("guessed-letter-box").innerHTML = lettersGuessed.join(" ");
// //     }
// //   // // });
// //   // let input = guessInput.toLowerCase();
// //   //   if (typeof input !== "string" || input.length != 1) {
// //   //     console.log("not a valid entry!");
// //   //     return false;
// //   //   }
// //   //   console.log(guessUpper);
// //   //   console.log(word);
// //   //   console.log(dashedLine);
// //   //   let arr = dashedLine.split("");
// //   //   let i = -1;
// //   //   do {
// //   //     i++;
// //   //     i = word.indexOf(guessUpper, i);
// //   //     arr[i] = guessUpper;
// //   //   } while (i != -1)
// //   //   let joinArr = arr.join("");
// //   //   console.log(joinArr);
// //         // return joinArr;
// //  // }
// //
// //
// //
// //       // console.log(dashedLine);
// //
// //
// // //working above
// //
// //           /* buttons */
// //           // document.getElementById("restart").onclick = setup;
// //
// //           //
// //           /*
// //           let guessButton = document.getElementById("guess-button");
// //               guessButton.addEventListener('click', function () {
// //           let guessInput = document.getElementById("letter-box").value;
// //           // console.log(guessInput.toLowerCase());
// //           guessedArr(guessInput.toUpperCase());
// //               let lettersGuessed = [];
// //               function guessedArr(letter) {
// //                 lettersGuessed.push(letter);
// //                 document.getElementById("guessed-letter-box").innerHTML = lettersGuessed.join(" ");
// //               }
// //           let input = guessInput.toLowerCase();
// //               if (typeof input !== "string" || input.length != 1) {
// //                 console.log("not a valid entry!");
// //                 return false;
// //               }
// //               console.log(letter);
// //               console.log(word);
// //               console.log(dashedLine);
// //               let arr = dashedLine.split("");
// //               let i = -1;
// //               do {
// //                 i++;
// //                 i = word.indexOf(letter, i);
// //                 arr[i] = letter;
// //               } while (i != -1)
// //               let joinArr = arr.join("");
// //               console.log(joinArr);
// //               // return joinArr;
// //             // }
// //           // return true;
// //         })
// //
// //
// //
// //       // console.log(dashedLine);
// //
// //
// //
// //     // checkLetter('p','pepper','______')
// //       // checkLetter('p','apple','___l_')
// // }
// // }
// // */
// //
// //
// //
// //
// //
// // /*=========================================+++++++++++++++++++++++++++++++++=
// // IN CLASS DO/WHILE LOOP REPLACING DASHES WITH LETTERS
// // ========================================++++++++++++++++++++++++++++++++++=*/
// //
// //
// //
// // /*=========================================
// // GUESSING/SCOPE/OBJECT/EXPERIMENT
// // =========================================*/
// //
// // // let guessObject = {
// // //   toGuess: checkLetter
// // // }
// // //
// // //
// // // var whatIsThis = function(a, b) {
// // // 	console.log('This is...', this); //'This is...facebook'
// // // 	console.log('a = ', a); //'a = face'
// // // 	console.log('b = ', b); //'b = book'
// // // };
// // //
// // // var inAnObject = {
// // // 	name: 'inAnObject',
// // // 	test1: whatIsThis,
// // // 	anotherObject: {
// // // 		name: 'anotherObject',
// // // 		test2: whatIsThis
// // // 	}
// // // };
// // //
// // // guessObject.
// // /*=========================================
// // ***END***GUESSING/SCOPE/OBJECT/EXPERIMENT
// // =========================================*/
// //
// //     // }
// //     // // console.log(dashedLine);
// //     // function checkLetter (letter, word, dashedLine) {
// //     //   console.log(letter);
// //     //   console.log(word);
// //     //   console.log(dashedLine);
// //     //   let arr = dashedLine.split("");
// //     //   let i = -1;
// //     //   do {
// //     //     // i++;
// //     //     i = word.indexOf(letter, ++i);
// //     //     arr[i] = letter;
// //     //   } while (i != -1)
// //     //   let joinArr = arr.join("");
// //     //   console.log(joinArr);
// //     //   return joinArr;
// //     // }
// //     //
// //     // // checkLetter('p','pepper','______')
// //     // // checkLetter('p','apple','___l_')
// //
// // /*=========================================+++++++++++++++++++++++++++++++++=
// // ******END******IN CLASS DO/WHILE LOOP REPLACING DASHES WITH LETTERS
// // ========================================++++++++++++++++++++++++++++++++++=*/
// //
// //     // turns.innerHTML = turns;
// //     // blank-output.innerHTML = '';
// //
// //     /* make sure guess button is enabled */
// //
// //     // guessInput.style.display = 'inline';
// //     // guessButton.style.display = 'inline';
// //
// // //guess button
// //     // let guessChar = document.querySelector('button#guess-char');
// //     // guessChar.addEventListener('click', function guessChar() {
// //     //   console.log('brbrbaba');
// //     //   const input = prompt("Guess a letter").toLowerCase();
// //     //   guessedArr(input);
// //     //   verifyInput(input);
// //     // });
// //
// //     // function guessChar() {
// //     //   const input = prompt("Guess a letter").toLowerCase();
// //     //   guessedArr(input);
// //     //   verifyInput(input);
// //     //   // return input;
// //     //   // checkForNoneOrDouble(input);
// //     // }
// //
// // //     var letter, i;
// // //     for (i = 0; i < currentWord.length; i++) {
// // //         letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
// // //         letters.insertAdjacentHTML('beforeend', letter);
// // //     }
// // // }
// //
// //
// //
// //     /* make #man and #output blank, create vars for later access */
// //       // blank-output = document.getElementById("blank-out");
// //       // turns = document.getElementById("turns");
// //       // guessInput = document.getElementById("letter-box");
// //       // // turns.innerHTML = turns;
// //       // // blank-output.innerHTML = '';
// //       // document.getElementById("letter-box").value = '';
// //       // /* make sure guess button is enabled */
// //       // guessButton = document.getElementById("guess-button");
// //       // // guessInput.style.display = 'inline';
// //       // // guessButton.style.display = 'inline';
// //       // console.log(guessInput);
// //     /* set up dispay of letters in current word */
// //
// //   // }
// //
// // /*=========================================
// // INITIATES GAME PLAY - PASSES WORD LENGTH REQUEST
// // =========================================*/
// //
// // /*=========================================
// // GENERATES RANDOM NUMBER
// // =========================================*/
// //
// // /*=========================================
// // GENERATES WORD
// // =========================================*/
// //
// // /*=========================================
// // DISPLAYS DASHES THE LENGTH OF THE WORD
// // =========================================*/
// //
// //
// //
// //
// //
// //
// //
// // // /*=========================================
// // // GET LETTER - WORKING
// // // =========================================*/
// //
// // // /*=========================================
// // // PUSH LETTER TO 'GUESSED LETTERS' LIST - WORKING
// // // =========================================*/
// //   // function guessedArr(letter) {
// //   //   lettersGuessed.push(letter);
// //   //   document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
// //   //   console.log(lettersGuessed.join("・"))
// //   // }
// // // /*=========================================
// // // REPLACE LETTER
// // // =========================================*/
// // //   function verifyInput (input) {
// // //      if (typeof input !== "string" || input.length != 1) {
// // //        console.log("not a valid entry!");
// // //        return false;
// // //      }
// // //      return true;
// // //    }
