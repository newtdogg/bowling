
function BowlingGame(){
  this.rollscore = [[1, 2], [10], [6, 2], [7, 3], [5, 1], [10], [10], [6, 1], [1, 3], [8, 2, 4]]
  this.framescore = [2, 10, 8, 10, 6, 10, 10, ]
};

BowlingGame.prototype.frameScore = function () {
  var totalscore = 0;
  for (var i = 0, len = this.score.length; i < len; i++) {
    totalscore += this.score[i];
  } // make this add up the
  return totalscore
};

// BowlingGame.prototype.scoreCalculator = function(frame) {
//   if(frame.isStrike() == true) {
//     this.frameTotalPinsHit.push(frame.rollHolder[0].hitPins + frame.rollHolder[1].hitPins);
//   }
//   else if (frame.isSpare()) {
//
//   }
//   else {
//     this.frameTotalPinsHit.push(frame.rollHolder[0].hitPins + frame.rollHolder[1].hitPins);
//     this.frameBonus.push(0);
//     this.cumulativeScore = this.frameTotalPinsHit[this.frameTotalPinsHit.length-1] + this.cumulativeScore;
//   }
// };
