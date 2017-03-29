
function compare(letter) {
  for (var i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      line = line.split();
    }
  }
}

function guessedArr(letter) {
  var lettersGuessed = [];
  lettersGuessed.push(letter[i]);
  document.getElementById("letter-box").innerHTML = lettersGuessed;
}

function guessedArr() {
  var lettersGuessed = [];
  for(var i = 0; i < 11; i++) {
   lettersGuessed.push(letter);
   console.log(lettersGuessed);
 }
 console.log("game over");
 }
// //end run
//
// //return lettersGuessed.push(letter);
//
//
// function guess() {
//
//   var letter = prompt("Guess a letter").toLowerCase;
//   //.toLowerCase();
//   guessedArr();
// }
//
//
//
// var line = "";
//
// function chooseWord() {
//   var index = random();
//   var word = commonWords[index];
//
// //   var arr = [];
// // for(var i = 0; i < 10; i++)
// //    arr.push(prompt("Enter a number"); document.getElementById("letters-guessed-box").innerHTML = letter;
// // }
//
//
// //
// // function lettersGuessed() {
// //  var lettersGuessedArr = [];
// //  lettersGuessedArr = lettersGuessedArr.push(letter);
// //  document.getElementById("letters-guessed-box").innerHTML = lettersGuessedArr;
// // }
// // function answerCalc() {
// //   var answer = "";
// //   var wordArr = secretWord();
// //     for (var i = 0; i < word.length; i++) {
// //       answer = wordArr[i].push(line);
// //       //" _ " " _ " " _ "
// //       //" _ " " a " " _
// //  }
// /*-------------------
// // function secretWord() {
// //   word = word.split();
// //   return word;
// // }
// -------------*/
// // //
// // variables: letter (ex. "a"), wordArr (ex. ["c","a","t"])
// //     var answer = letter.push(wordArr[i]);
// //     //push letter var (or replace) into the index place where it belongs then reprints out the updated "line" var.
// //     document.getElementById("msg").innerHTML = answer;
// //   }
// // }*/





// function guessedArr() {
//   var lettersGuessed = [];
//   lettersGuessed.push(letter);
//   document.getElementById("letters-guessed-box").innerHTML = lettersGuessed;
// }
/*//
// function guessedArr() {
//   var lettersGuessed = [];
//   for(var i = 0; i < 11; i++) {
//    lettersGuessed.push(letter);
//    console.log(lettersGuessed);
//  }
//  }
-------------------*/ // document.getElementById("letters-guessed-box").innerHTML = lettersGuessed;
// }// function guess() {
//   var letter = prompt("Guess a letter").toLowerCase();
//   letter = lettersGuessed();
//   return letter;
// }
//
// var commonWords = [
// "the","boat","and","milk","any","pig","some","you","that","itch","cord",
// "was","for","only","are","ask","with","his","they","ice","bell","pink",
// "this","have","from","fork","one","had","bye","word","but","not",
// "what","all","were","went","when","your","can","said","there",
// "use","ant","each","which","she","dull","how","their","iffy","will",
// "pup","other","about","out","many","then","them","these","soul",
// "some","her","would","make","like","him","into","time","taste",
// "look","two","more","write","goat","seen","number","snow","way",
// "could","drops","smile","than","first","water","been","call",
// "who","oil","sits","cow","find","long","down","day","did","get",
// "come","made","may","part"
// ];
//
// function random() {
//   return Math.floor(Math.random() * 100);
// }
//
// function guessedArr() {
//   var lettersGuessed = [];
//   for(var i = 0; i < 11; i++) {
//    lettersGuessed.push(letter);
//    console.log(lettersGuessed);
//  }
//  console.log("game over");
//  }
// //end run
//
// //return lettersGuessed.push(letter);
//
//
// function guess() {
//
//   var letter = prompt("Guess a letter").toLowerCase;
//   //.toLowerCase();
//   guessedArr();
// }
//
//
//
// var line = "";
//
// function chooseWord() {
//   var index = random();
//   var word = commonWords[index];
//             // var guessButton = <button id="button" onclick="chooseWord()" class="play-button flex-container">Play Game</button>;
//   for (var i=0; i < word.length; i++) {
//     line += " _ ";
//   }
//   // document.getElementById("msg").innerHTML = line;
//   console.log(line);
//   guess();
//   // line = "";
//   // document.getElementById('button').innerHTML = '<button id="button" onclick="guess()" class="play-button flex-container">Guess</button>';
// }
//
//
//
//
//
//
// // function guess() {
// //   var arr = [];
// //   var letter = prompt("Guess a letter").toLowerCase();
// //   var array = arr.push(letter);
// //   document.getElementById("letters-guessed-box").innerHTML = array;
// //
//
// //   var arr = [];
// // for(var i = 0; i < 10; i++)
// //    arr.push(prompt("Enter a number"); document.getElementById("letters-guessed-box").innerHTML = letter;
// // }
//
//
// //
// // function lettersGuessed() {
// //  var lettersGuessedArr = [];
// //  lettersGuessedArr = lettersGuessedArr.push(letter);
// //  document.getElementById("letters-guessed-box").innerHTML = lettersGuessedArr;
// // }
// // function answerCalc() {
// //   var answer = "";
// //   var wordArr = secretWord();
// //     for (var i = 0; i < word.length; i++) {
// //       answer = wordArr[i].push(line);
// //       //" _ " " _ " " _ "
// //       //" _ " " a " " _
// //  }
// /*-------------------
// // function secretWord() {
// //   word = word.split();
// //   return word;
// // }
// -------------*/
// // //
// // variables: letter (ex. "a"), wordArr (ex. ["c","a","t"])
// //     var answer = letter.push(wordArr[i]);
// //     //push letter var (or replace) into the index place where it belongs then reprints out the updated "line" var.
// //     document.getElementById("msg").innerHTML = answer;
// //   }
// // }*/
