describe("bowlingGame", function() {
  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  describe("Start up", function() {
    it ("Should start with an array of scores", function() {
      expect(game.rollscore[0]).toEqual([1, 2])
    });
    it ("Should have each array as a frame, with 10 overall frames", function() {
      expect(game.rollscore.length).toEqual(10)
    });
  });

  // describe("Scoring", function() {
  //   it ("adds the values of the frames to make a score array", function() {
  //     expect(game.frameScore()[1]).toEqual(3)
  //   });
  // })


})
