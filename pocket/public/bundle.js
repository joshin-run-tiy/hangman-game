/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/joshholladay/pro/hangman-game/js/guess.js Unexpected token (60:9)\nYou may need an appropriate loader to handle this file type.\n| var word = \"random\";\n| var result = \"____o_\"\n| function (letter, word, result) {}\n| ///////\n| /*---------------");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

const main = (function() {

  let word;
  let dashedLine = "";
  var commonWords = [
  "the","boat","and","milk","any","pig","some","you","that","itch","cord",
  "was","for","only","are","ask","with","his","they","ice","bell","pink",
  "this","have","from","fork","one","had","bye","word","but","not",
  "what","all","were","went","when","your","can","said","there",
  "use","ant","each","which","she","dull","how","their","iffy","will",
  "pup","other","about","out","many","then","them","these","soul",
  "some","her","would","make","like","him","into","time","taste",
  "look","two","more","write","goat","seen","number","snow","way",
  "could","drops","smile","than","first","water","been","call",
  "who","oil","sits","cow","find","long","down","day","did","get",
  "come","made","may","part"
  ];

/*=========================================
INITIATES GAME PLAY - PASSES WORD LENGTH REQUEST
=========================================*/
  function newGame() {
    word = generateNum();
    console.log(word);
    displayDashes(word.length);
  }

/*=========================================
GENERATES RANDOM NUMBER
=========================================*/
  function random() {
    return Math.floor(Math.random() * 100);
  }

/*=========================================
GENERATES WORD
=========================================*/
  function generateNum() {
    let num = random();
    return commonWords[num];
  }

/*=========================================
DISPLAYS DASHES THE LENGTH OF THE WORD
=========================================*/
  function displayDashes(length) {
    let dashedLine = [];
    for (var i=0; i < length; i++) {
      dashedLine += "_";
    }
    document.getElementById("msg").innerHTML = dashedLine;
  }

  return {
    newGame: newGame,
    random: random,
    generateNum: generateNum,
    displayDashes: displayDashes,
  }
})();

module.exports = main;

/*=========================================
RELOAD ON "NEW GAME" BUTTON EXECUTION - BROKEN
=========================================*/
// function newGame() {
//   // function onLoad() {
//   window.onload = onLoad;
//   console.log('script loaded');
// }


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const main = __webpack_require__(1);
const guess = __webpack_require__(0);

main.newGame();
main.random();
main.generateNum();
main.displayDashes();

guess.guessChar();
guess.guessedArr();
guess.checkForNoneOrDouble();
guess.validate();
guess.compare();


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map