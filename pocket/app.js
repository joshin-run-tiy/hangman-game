const main = require('./main.js');
const guess = require('./guess.js');

main.newGame();
main.random();
main.generateNum();
main.displayDashes();

guess.guessChar();
guess.guessedArr();
guess.checkForNoneOrDouble();
guess.validate();
guess.compare();
