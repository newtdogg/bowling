function Frame(){
  this.isStrike = false
  this.isSpare = false
  this.score = []
};


Frame.prototype.storeBowl = function(roll) {
  if(roll.hitPins == 10) {
  	this.score.push(roll);
  	var blankRoll = new Bowl;
  	blankRoll.play(0);
  	this.score.push(blankRoll);
	}
  else
	 {
 	  this.score.push(roll);
	}
};

Frame.prototype.shotType = function() {
  if (this.score[0].hitPins === 10) {
    return this.isStrike = true
  } else if (this.score[0].hitPins + this.score[1].hitPins === 10 && this.score[0].hitPins != 10) {
    return this.isSpare = true
  }
}


function Bowl() {
	this.hitPins = 0;
};

Bowl.prototype.play = function(pins) {
  this.hitPins = pins;
};
