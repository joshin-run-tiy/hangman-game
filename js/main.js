function random() {
  return Math.floor(Math.random() * 100);
}

function generateNum() {
  let num = random();
  return commonWords[num];
}

let word;
let lettersGuessed = [];
let dashedLane;

function generateGame() {
  word = generateNum();
  console.log(word);
  displayDashes(word.length);
}

function displayDashes(length) {
  let dashedLine = "";
  for (var i=0; i < length; i++) {
    dashedLine += "_";
  }
  document.getElementById("msg").innerHTML = dashedLine;
  // return;
  // document.getElementById("letter-box").innerHTML = " ";
}

// const inputs = ["_","_","_"]


function guess() {
  var letterInput = prompt("Guess a letter").toLowerCase();
  guessedArr(letterInput);
  compare(letterInput);
}
/*=================================================
                    Game Play
=================================================*/


function guessedArr(letter) {
  lettersGuessed.push(letter);
  document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
}
/*====Cannot clear the lettersGuessed variable after choosing another word====*/

/*=================================================
                    EVERYTHING ABOVE WORKS
=================================================*/



function compare(letter) {
	  for (var i = 0; i < word.length; i++) {
	    let wordArray = word.split(" ");
	    if (wordArray[i] === letter) {
	      dashedLineArray = dashedLine.split(" ");
	      var extractedLetter = wordArray[i];
	      dashedLine[i] = letter;
        document.getElementById("msg").innerHTML = dashedLine;
	  }
  }
}



/*
function compare(letter) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          var line = (line[i] = " " + letter + " ");
          document.getElementById("msg").innerHTML = line;
        } else {
          alert("No luck!");
          guess();
        }
      }
*/



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


// function replace(letter);

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
