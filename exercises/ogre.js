class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  encounter(humanX) {
    humanX.encounterCounter++;
    if (humanX.noticesOgre()) {
      this.swingAt(humanX);
    }
  }

  swingAt(humanY) {
    this.swings++;
    if (this.swings % 2 == 0) {
      humanY.knockedOut = true;
    }
  }

  apologize(humanZ) {
    humanZ.knockedOut = false;
  }
}

module.exports = Ogre;
