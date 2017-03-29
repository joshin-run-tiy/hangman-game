(function () {
  "use strict";
  let word;
  let dashedLine = "";

  function setup() {
    /* start config options */
    availableLetters = "abcdefghijklmnopqrstuvwxyz";
    lives = 11;
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
    "come","made","may","part"
    ];
    messages = {
      win: 'Alright! You won the game!',
      lose: 'Game over. Give it another shot!',
      guessed: ' already guessed, please try again...',
      validLetter: 'Please enter a letter from A-Z'
    };
    /* end config options */

    letterGuessed = letterMatched = '';
    numLettersMatched = 0;

/*=========================================
Simple Hangman's Word Chooser Code
=========================================*/
    // /* choose a word */
    // currentWord = words[Math.floor(Math.random() * words.length)];
    // console.log(currentWord);
/*=======================================*/
    /* choose a word */
    function newGame() {
      word = generateNum();
      console.log(word);
      displayDashes(word.length);
    }
    function random() {
      return Math.floor(Math.random() * 100);
    }
    function generateNum() {
      let num = random();
      return commonWords[num];
    }
    function displayDashes(length) {
      let dashedLine = [];
      for (var i=0; i < length; i++) {
        dashedLine += "_";
      }
      document.getElementById("msg").innerHTML = dashedLine;
    }
    /* make #man and #output blank, create vars for later access */
  }
}());
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

/*=========================================
GET LETTER - WORKING
=========================================*/
let lettersGuessed = [];
  function guessChar() {
    const input = prompt("Guess a letter").toLowerCase();
    guessedArr(input);
    verifyInput(input);
    // return input;
    // checkForNoneOrDouble(input);
  }
/*=========================================
PUSH LETTER TO 'GUESSED LETTERS' LIST - WORKING
=========================================*/
  function guessedArr(letter) {
    lettersGuessed.push(letter);
    document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
    console.log(lettersGuessed.join("・"))
  }
/*=========================================
REPLACE LETTER
=========================================*/
  function verifyInput (input) {
     if (typeof input !== "string" || input.length != 1) {
       console.log("not a valid entry!");
       return false;
     }
     return true;
   }
