describe("Frame", function() {

  var frame, roll1, roll2;

  beforeEach(function() {
    frame = new Frame();
    roll1 = new Bowl();
    roll2 = new Bowl();
  });

  it('should consist of two rolls', function() {
    frame.storeBowl(roll1);
    frame.storeBowl(roll2);
    expect(frame.score.length).toEqual(2);
  });

  it('should automatically set the second roll to zero in the event of a strike', function() {
    roll1.play(10);
    frame.storeBowl(roll1);
    expect(frame.score.length).toEqual(2);
    expect(frame.score[1].hitPins).toEqual(0);
  });

  it('should know if it is a strike', function() {
    roll1.play(10);
    frame.storeBowl(roll1);
    frame.shotType
    console.log(frame.isStrike)
    expect(frame.isStrike).toBe(true);
  });

  it('should know if it is a spare', function() {
    roll1.play(5);
    frame.storeBowl(roll1);
    roll2.play(5);
    frame.storeBowl(roll2);
    frame.shotType
    expect(frame.isSpare).toBe(true);
  });

  it('should know if it is neither a spare nor a strike', function() {
    roll1.play(5);
    frame.storeBowl(roll1);
    roll2.play(2);
    frame.storeBowl(roll2);
    frame.shotType
    expect(frame.isSpare).toBe(false);
    expect(frame.isStrike).toBe(false);
  });
})
