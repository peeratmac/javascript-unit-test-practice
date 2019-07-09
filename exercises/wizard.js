class Wizard {
  constructor(wizardInstance) {
    this.name = wizardInstance.name;

    /* expected undefined to equal true for bearded...but it can equal false, use ternary operator */
    this.bearded = wizardInstance.bearded === undefined ? true : false;

    this.isRested = true;

    this.castCounter = 0;
  }

  incantation(rootPowers) {
    return rootPowers.toUpperCase();
  }

  cast() {
    this.castCounter++;
    if (this.castCounter < 3) {
      this.isRested = true;
      return 'MAGIC BULLET';
    } else if (this.castCounter >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST';
    }
  }
}

module.exports = Wizard;
