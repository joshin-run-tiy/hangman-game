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
  document.getElementById('button').innerHTML = "Guess";
}
/*=================================================
                    Game Play
=================================================*/
/*function guess(letter) {
  var letter = prompt("Guess a letter").toLowerCase();
}

function answerCalc() {
  var answer = "";
  var wordArr = secretWord();
    for (var i = 0; i < word.length; i++) {
      answer = wordArr[i].push(line);
      //" _ " " _ " " _ "
      //" _ " " a " " _
 }

function secretWord() {
  word = word.split();
  return word;
}

variables: letter (ex. "a"), wordArr (ex. ["c","a","t"])
    var answer = letter.push(wordArr[i]);
    //push letter var (or replace) into the index place where it belongs then reprints out the updated "line" var.
    document.getElementById("msg").innerHTML = answer;
  }
}*/
