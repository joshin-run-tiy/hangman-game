;( function () {

  /*GLOBAL VARIABLES*/
  // let gamePlay = {
  //   setup: setup
  // }
  let word;
  let dashedLine;
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
  /**/
  // function setup() {
  //   word = commonWords[Math.floor(Math.random() * 100)];
  //   console.log(word);
  //   for (var i=0; i < word.length; i++) {
  //     dashedLine += "_";
  //   }
  //   document.getElementById("msg").innerHTML = dashedLine;
  //   return dashedLine;
  //   // newGameQuery.removeEventListener('click', newGame, false);
  // }
  // let newGame = document.querySelector('button#new-game');
  // let test = newGame.addEventListener('click', gamePlay.setup);
  // console.log(test);// document.getElementById("msg").innerHTML = test;
  let gamePlay = {
    random: random,
    generateNum: generateNum,
    generateGame: generateGame,
    displayDashes: displayDashes
  }
  function random() {
    return Math.floor(Math.random() * 100);
  }
  function generateNum() {
    let num = random();
    return commonWords[num].split("");
  }

  function generateGame() {
    word = gamePlay.generateNum;
    console.log(word);
    gamePlay.displayDashes(word.length);
  }

  function displayDashes(length) {
    for (var i=0; i < length; i++) {
      dashedLine += "_";
    }
    document.getElementById("msg").innerHTML = dashedLine;
  }

  let newGameThing = document.querySelector('button#new-game');
  let firstDashes = newGameThing.addEventListener('click', gamePlay.generateGame);
  console.log(firstDashes);


  //event listener for new game
  //random number
  //generate word
  //generate dashes

  //guess button initiation
  //guess input
  //display guesses
  //display turns left
  //display updated dashed line
  //verify if alphabet
  //win message/lose message
  //out of turns message


//   function newGame() {
//     word = generateNum();
//     console.log(word);
//     displayDashes(word.length);
//   }
//
// /*=========================================
// GENERATES RANDOM NUMBER
// =========================================*/
//   function random() {
//     return Math.floor(Math.random() * 100);
//   }
//
// /*=========================================
// GENERATES WORD
// =========================================*/
//   function generateNum() {
//     let num = random();
//     return commonWords[num];
//   }
//
// /*=========================================
// DISPLAYS DASHES THE LENGTH OF THE WORD
// =========================================*/
//   function displayDashes(length) {
//     let dashedLine = [];
//     for (var i=0; i < length; i++) {
//       dashedLine += "_";
//     }
//     document.getElementById("msg").innerHTML = dashedLine;
//   }


})();
