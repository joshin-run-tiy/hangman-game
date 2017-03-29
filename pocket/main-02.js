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
  // document.getElementById("msg").innerHTML = line;
  // document.getElementById("button").innerHTML = '<button id="button-second" onclick="guess()" class="play-button flex-container">Guess</button>';
}

// function guess() {
//   var letter = prompt("Guess a letter").toLowerCase();
//   document.getElementById("letter-box").innerHTML = letter;
//   // validate(letter);
// }

 // function validate(letter) {
 //     for (var i = 0; i < alphabet.length; i++) {
 //         if (alphabet[i] == letter) {
 //           var splicedIndex = alphabet.splice(i, 1);
 //           document.getElementById("letter-box").innerHTML = splicedIndex;
 //           return splicedIndex;
 //           alphabet updated without letter
 //         } else {
 //           console.log("Invalid.");
 //           var letter = prompt("Guess again!");
 //         }
 //     }
 // }
// --------------------------------
//
//  function guessedArr(letter) {
//    var lettersGuessed = [];
//    lettersGuessed.push(letter);
//    document.getElementById("letters-guessed-box").innerHTML = lettersGuessed;
//  }
//
//  /*---------------
//  COMPARE
//  ---------------*/
//
//
//   function guessedArr() {
//     var lettersGuessed = [];
//     for(var i = 0; i < 11; i++) {
//      lettersGuessed.push(letter);
//      console.log(lettersGuessed);
//    }
//    }
//
//  function guessedArr() {
//    var lettersGuessed = [];
//    for(var i = 0; i < 11; i++) {
//     lettersGuessed.push(letter);
//     console.log(lettersGuessed);
//   }
//   console.log("game over");
//   }
//  end run
// }

//
//     var arr = [];
//   for(var i = 0; i < 10; i++)
//      arr.push(prompt("Enter a number"); document.getElementById("letters-guessed-box").innerHTML = letter;
// }

// function answerCalc() {
//   var answer = "";
//   var wordArr = secretWord();
//     for (var i = 0; i < word.length; i++) {
//       answer = wordArr[i].push(line);
//       " _ " " _ " " _ "
//       " _ " " a " " _ "
//  }
