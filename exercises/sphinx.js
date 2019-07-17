class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(guess) {
    var correctAnswer = this.riddles.find(function(riddle) {
      return riddle.answer === guess;
    });
    if (correctAnswer === undefined) {
      this.heroesEaten++;
      return;
    } else if (correctAnswer.answer === guess) {
      this.riddles.pop();
      return "That wasn't that hard, I bet you don't get the next one";
    }
  }
}

module.exports = Sphinx;
