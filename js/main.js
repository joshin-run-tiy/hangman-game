// const main = (function() {

  let word;
  let dashedLine = "";
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

/*=========================================
INITIATES GAME PLAY - PASSES WORD LENGTH REQUEST
=========================================*/
  function newGame() {
    word = generateNum();
    console.log(word);
    displayDashes(word.length);
  }

/*=========================================
GENERATES RANDOM NUMBER
=========================================*/
  function random() {
    return Math.floor(Math.random() * 100);
  }

/*=========================================
GENERATES WORD
=========================================*/
  function generateNum() {
    let num = random();
    return commonWords[num];
  }

/*=========================================
DISPLAYS DASHES THE LENGTH OF THE WORD
=========================================*/
  function displayDashes(length) {
    let dashedLine = [];
    for (var i=0; i < length; i++) {
      dashedLine += "_";
    }
    document.getElementById("msg").innerHTML = dashedLine;
  }

  // return {
  //   newGame: newGame,
  //   random: random,
  //   generateNum: generateNum,
  //   displayDashes: displayDashes,
  // }
// })();

// module.exports = main;

/*=========================================
RELOAD ON "NEW GAME" BUTTON EXECUTION - BROKEN
=========================================*/
// function newGame() {
//   // function onLoad() {
//   window.onload = onLoad;
//   console.log('script loaded');
// }
