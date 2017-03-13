/*--------------------
WORD AND UNDERSCORES SET
---------------------*/
function random() {
  return Math.floor(Math.random() * 100);
}

function chooseWord() {
  var line = "";
  var index = random();
  var word = commonWords[index];
  for (var i=0; i < word.length; i++) {
    line += " _ ";
  }
  document.getElementById("msg").innerHTML = line;
  document.getElementById("letter-box").innerHTML = " ";
  /*would like to clear var below each time the 'generate word' button is clicked*/
  //var lettersGuessed = [];
}

function guess() {
  var letter = prompt("Guess a letter").toLowerCase();
  guessedArr(letter);
  compare(letter);
}
/*=================================================
                    Game Play
=================================================*/
var lettersGuessed = [];

function guessedArr(letter) {
  lettersGuessed.push(letter);
  document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
}
/*====Cannot clear the lettersGuessed variable after choosing another word====*/

/*=================================================
                    EVERYTHING ABOVE WORKS
=================================================*/

//function compare(letter)
//  for (var i = 0; i < word.length; i++) {
//     if (word[i] === letter) {


function compare(letter) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      var line = line.splice("");
      line[i] = word[i];
          document.getElementById("msg").innerHTML = line;
        } else {
          alert("No luck!");
          // guess();
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
