totalPayable = 1487                                 // £14.87  (fourteen pounds and eighty-seven pence)
cashPaid     = 10000                                // £100.00 (one hundred pounds)
difference    = 8513                                 // £85.13
change       = [5000, 2000, 1000, 500, 10, 2, 1 ]   // £50, £20, £10, £5, 10p, 2p, 1p


module.exports = function calculateChange(totalPayable, cashPaid) {

  var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  var change = [];
  var length = coins.length;
  var remaining = cashPaid - totalPayable;          // we reduce this below

  for (var i = 0; i < length; i++) { // loop through array of notes & coins:
    var coin = coins[i];

    if(remaining/coin >= 1) { // check coin fits into the remaining amount
      var times = Math.floor(remaining/coin);        // no partial coins

      for(var j = 0; j < times; j++) {     // add coin to change x times
        change.push(coin);
        remaining = remaining - coin;  // subtract coin from remaining
      }
    }
  }
  return change;
};
