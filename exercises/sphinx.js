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
    }

    var firstMatch = this.riddles.indexOf(correctAnswer);
    this.riddles.splice(firstMatch, 1);
    if (this.riddles.length === 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`;
    }
    return "That wasn't that hard, I bet you don't get the next one";
  }
}

module.exports = Sphinx;
