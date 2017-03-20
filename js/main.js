const main = (function() {

  let word;
  let lettersGuessed = [];
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

  return {
    newGame: newGame,
    random: random,
    generateNum: generateNum,
    displayDashes: displayDashes,
  }

})();

module.exports = main;



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
