class Pirate {
  constructor(name, job, cursed) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = cursed || false;
    this.commitHeinousActCounter = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.commitHeinousActCounter++;
    if (this.commitHeinousActCounter >= 3) {
      this.cursed = true;
    }
  }

  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }
}

module.exports = Pirate;
