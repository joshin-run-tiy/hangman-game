const main = require('./main.js');
const guess = require('./guess.js');

main.newGame();
main.random();
main.generateNum();
main.displayDashes();

guess.guess();
guess.guessedArr();
guess.checkForNoneOrDouble();
guess.validate();
guess.compare();
