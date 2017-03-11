// function test() {
//   var num = random();
//   return num;
function random() {
  return Math.floor(Math.random() * 100);
}

var line = "";
function chooseWord() {
  var index = random();
  var word = commonWords[index];
  for (var i=0; i < word.length; i++) {
    line += " _ ";
  }
  document.getElementById("msg").innerHTML = line;
  // return line;
}
// console.log(chooseWord());
// document.getElementById("#").innerHTML = line;



//INPUTE BY PROMPT OR TEXTFIELD OR RADIO BUTTONS//
// var letter = prompt("Guess a letter");
//
// function guess(letter) {
//   function answerCalc() {
//     var wordArr = secretWord();
//     for (var i = 0; i < word.length; i++) {
//       letter in wordArr[i].push...
// //     }
//       var answer = letter.push(wordArr[i]);
//       //push letter var (or replace) into the index place where it belongs then reprints out the updated "line" var.
//       document.getElementById("msg").innerHTML = answer;
//   }
// }
//

// function guess(letter)

// function secretWord() {
//   wordArr = word.split();
//   return word;
// }














// for(i=0; i < word.length; i++) {
//   underscore = underscore + " _ ";
// }
// document.getElementById('message').innerHTML = underscore;
// var lengthOfWord = word.length;
// document.getElementById('message').innerHTML = underscore;
// var x = word.length "_");
