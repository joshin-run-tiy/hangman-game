;(function onLoad() {
  // "use strict";

  let word;
  let dashedLine = [];
  /* start config options */
  let availableLetters = "abcdefghijklmnopqrstuvwxyz";
  let turns = 11;
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
  let messages = {
    win: 'Alright! You won the game!',
    lose: 'Game over. Give it another shot!',
    guessed: ' already guessed, please try again...',
    validLetter: 'Please enter a letter from A-Z'
  };
  function passedThrough(x) {
    document.getElementById("msg").innerHTML = dashedLine;
    console.log(dashedLine);
    return dashedLine;
  };
  /* end config options */
  let letterGuessed = letterMatched = '';
  let numLettersMatched = 0;
  /* choose a word */
  let newGameQuery = document.querySelector('button#new-game');
  newGameQuery.addEventListener('click', function newGame() {
    word = commonWords[Math.floor(Math.random() * 100)];
    console.log(word);
    for (var i=0; i < word.length; i++) {
      dashedLine += "_";
      passThrough(dashedLine);
      // newGameQuery.removeEventListener('click', newGame, false);
    }
    // function passThrough(dashedLine){
    //   return dashedLine;
    // };
});

// return true;

})();
//
// function pass(x) {
//   var obj = {
//     passed: x
//   }
//   return obj;
// }

  //

  let guessButton = document.getElementById("guess-button");
  guessButton.addEventListener('click', function () {
    let guessInput = document.getElementById("letter-box").value;
    console.log(guessInput.toLowerCase());
    // guessedArr(guessInput.toUpperCase());
    function guessedArr(letter) {
      let lettersGuessed = [];
      let guessUpper = guessInput.toUpperCase();
      lettersGuessed.push(guessUpper);
      document.getElementById("guessed-letter-box").innerHTML = lettersGuessed.join(" ");
    }
  // // });
  // let input = guessInput.toLowerCase();
  //   if (typeof input !== "string" || input.length != 1) {
  //     console.log("not a valid entry!");
  //     return false;
  //   }
  //   console.log(guessUpper);
  //   console.log(word);
  //   console.log(dashedLine);
  //   let arr = dashedLine.split("");
  //   let i = -1;
  //   do {
  //     i++;
  //     i = word.indexOf(guessUpper, i);
  //     arr[i] = guessUpper;
  //   } while (i != -1)
  //   let joinArr = arr.join("");
  //   console.log(joinArr);
        // return joinArr;
 // }



      // console.log(dashedLine);


//working above

          /* buttons */
          // document.getElementById("restart").onclick = setup;

          //
          /*
          let guessButton = document.getElementById("guess-button");
              guessButton.addEventListener('click', function () {
          let guessInput = document.getElementById("letter-box").value;
          // console.log(guessInput.toLowerCase());
          guessedArr(guessInput.toUpperCase());
              let lettersGuessed = [];
              function guessedArr(letter) {
                lettersGuessed.push(letter);
                document.getElementById("guessed-letter-box").innerHTML = lettersGuessed.join(" ");
              }
          let input = guessInput.toLowerCase();
              if (typeof input !== "string" || input.length != 1) {
                console.log("not a valid entry!");
                return false;
              }
              console.log(letter);
              console.log(word);
              console.log(dashedLine);
              let arr = dashedLine.split("");
              let i = -1;
              do {
                i++;
                i = word.indexOf(letter, i);
                arr[i] = letter;
              } while (i != -1)
              let joinArr = arr.join("");
              console.log(joinArr);
              // return joinArr;
            // }
          // return true;
        })



      // console.log(dashedLine);



    // checkLetter('p','pepper','______')
      // checkLetter('p','apple','___l_')
}
}
*/





/*=========================================+++++++++++++++++++++++++++++++++=
IN CLASS DO/WHILE LOOP REPLACING DASHES WITH LETTERS
========================================++++++++++++++++++++++++++++++++++=*/



/*=========================================
GUESSING/SCOPE/OBJECT/EXPERIMENT
=========================================*/

// let guessObject = {
//   toGuess: checkLetter
// }
//
//
// var whatIsThis = function(a, b) {
// 	console.log('This is...', this); //'This is...facebook'
// 	console.log('a = ', a); //'a = face'
// 	console.log('b = ', b); //'b = book'
// };
//
// var inAnObject = {
// 	name: 'inAnObject',
// 	test1: whatIsThis,
// 	anotherObject: {
// 		name: 'anotherObject',
// 		test2: whatIsThis
// 	}
// };
//
// guessObject.
/*=========================================
***END***GUESSING/SCOPE/OBJECT/EXPERIMENT
=========================================*/

    // }
    // // console.log(dashedLine);
    // function checkLetter (letter, word, dashedLine) {
    //   console.log(letter);
    //   console.log(word);
    //   console.log(dashedLine);
    //   let arr = dashedLine.split("");
    //   let i = -1;
    //   do {
    //     // i++;
    //     i = word.indexOf(letter, ++i);
    //     arr[i] = letter;
    //   } while (i != -1)
    //   let joinArr = arr.join("");
    //   console.log(joinArr);
    //   return joinArr;
    // }
    //
    // // checkLetter('p','pepper','______')
    // // checkLetter('p','apple','___l_')

/*=========================================+++++++++++++++++++++++++++++++++=
******END******IN CLASS DO/WHILE LOOP REPLACING DASHES WITH LETTERS
========================================++++++++++++++++++++++++++++++++++=*/

    // turns.innerHTML = turns;
    // blank-output.innerHTML = '';

    /* make sure guess button is enabled */

    // guessInput.style.display = 'inline';
    // guessButton.style.display = 'inline';

//guess button
    // let guessChar = document.querySelector('button#guess-char');
    // guessChar.addEventListener('click', function guessChar() {
    //   console.log('brbrbaba');
    //   const input = prompt("Guess a letter").toLowerCase();
    //   guessedArr(input);
    //   verifyInput(input);
    // });

    // function guessChar() {
    //   const input = prompt("Guess a letter").toLowerCase();
    //   guessedArr(input);
    //   verifyInput(input);
    //   // return input;
    //   // checkForNoneOrDouble(input);
    // }

//     var letter, i;
//     for (i = 0; i < currentWord.length; i++) {
//         letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
//         letters.insertAdjacentHTML('beforeend', letter);
//     }
// }



    /* make #man and #output blank, create vars for later access */
      // blank-output = document.getElementById("blank-out");
      // turns = document.getElementById("turns");
      // guessInput = document.getElementById("letter-box");
      // // turns.innerHTML = turns;
      // // blank-output.innerHTML = '';
      // document.getElementById("letter-box").value = '';
      // /* make sure guess button is enabled */
      // guessButton = document.getElementById("guess-button");
      // // guessInput.style.display = 'inline';
      // // guessButton.style.display = 'inline';
      // console.log(guessInput);
    /* set up dispay of letters in current word */

  // }

/*=========================================
INITIATES GAME PLAY - PASSES WORD LENGTH REQUEST
=========================================*/

/*=========================================
GENERATES RANDOM NUMBER
=========================================*/

/*=========================================
GENERATES WORD
=========================================*/

/*=========================================
DISPLAYS DASHES THE LENGTH OF THE WORD
=========================================*/







// /*=========================================
// GET LETTER - WORKING
// =========================================*/

// /*=========================================
// PUSH LETTER TO 'GUESSED LETTERS' LIST - WORKING
// =========================================*/
  // function guessedArr(letter) {
  //   lettersGuessed.push(letter);
  //   document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
  //   console.log(lettersGuessed.join("・"))
  // }
// /*=========================================
// REPLACE LETTER
// =========================================*/
//   function verifyInput (input) {
//      if (typeof input !== "string" || input.length != 1) {
//        console.log("not a valid entry!");
//        return false;
//      }
//      return true;
//    }
