let word;
let lettersGuessed = [];
let dashedLine = [];

function generateGame() {
  word = generateNum();
  console.log(word);
  displayDashes(word.length);
}

function random() {
  return Math.floor(Math.random() * 100);
}

function generateNum() {
  let num = random();
  return commonWords[num].split("");
}

function displayDashes(length) {
  for (var i=0; i < length; i++) {
    dashedLine += "_";
  }
  document.getElementById("msg").innerHTML = dashedLine;
}

function guessLetter() {
  var letterInput = prompt("Guess a letter").toLowerCase();
  guessedArr(letterInput);
  compare(letterInput);
}

function guessedArr(letter) {
  lettersGuessed.push(letter);
  document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
}

/*still no luck (below)*/
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

function compare(letter) {
    console.log("Guessed: " + letter);
    let dashedLineArray;
    for (var i = 0; i < word.length; i++) {
	    if (word[i] === letter) {
        console.log(word[i].toUpperCase());
        console.log(dashedLineArray[i]);
	      // dashedLineArray[i] = wordArray[i];
        // console.log(dashedLineArray.join());
        // return;

    }
  }
}


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
