# __Hangman 11__

-Demonstrate correct use of functions, conditionals, loops, arrays
-Properly sequence JavaScript statements
-Change the DOM based on application state (win/loss, valid/invalid guess)

****

### _**Testing:**_

###### Functions
- [x] - Random Number Generate
- [x] - Generate Word (new game)
- [ ] - Refreshes page/clears word/guesses
- [x] - Activate Game Play
- [x] - Display Dashes
- [ ] - Receive Guess - Stash Letter
- [ ] - Replace dash in word with letter
- [ ] - Print letter guessed, add to
- [ ] - Only accept one char guess
- [ ] - verify if alphabet char
- [ ] - remaining turns
- [ ] - if win/lose produce indication
- [ ] - lose indication when run out of turns

*****

### __Resources__
- _LINK:_ [Git Commit Msg Website](https://karma-runner.github.io/1.0/dev/git-commit-msg.html)

```

Done:
- Text
  - instructions: Hangman 11
    - object: to guess the letters of a word before your 11 turns.
    - you can only guess one letter at a time
    - cannot guess the same letter twice
    - the words are between 3 and 5 letters long
- button disappear
- guess method
  - text input
    - .toLowerCase()
- update dash with guessed letter


switch(guess) {
  case 'a':
    var answer = answer();

}
