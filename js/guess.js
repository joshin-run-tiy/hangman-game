module.exports = function validateChar(char) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for (var i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === char) {
        return "you entered a single letter from the alphabet";
    return "not a letter";
  }
  // compare();
}

/*==========================================
**************PASSED************************
==========================================*/
/*1*/
// module.exports = function guessLength(letter) {
//   if (letter.length > 1) {
//     return "guess only one letter"
//   } else if (letter === "") {
//     return "no letters entered"
//   } else {
//     // function validate() {
//     // let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     // for (var i = 0; i < alphabet.length; i++) {
//     //   if (alphabet[i] === letter) {
//     //     return "you entered a single letter from the alphabet";
//     return "not a letter";
//   }
//   // compare();
// }
/*==========================================
**************END************************
==========================================*/

/**working*/
// module.exports = function guessLength(letter) {
//   if (letter === "a") {
//     return "yeah"
//   }
// }



// } else if (letter === "") {
//   console.log('No letter entered. Please guess again.')
// }


/*=======================================*/
// module.exports = function add(a,b) {
//   sum = a + b;
//   return sum;
// }
//
// module.exports = function guessLength(letter) {
//   if (letter.length === 1) {
//     msg = "yeah";
//     return msg;
//   }
// }
