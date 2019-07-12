class Wizard {
  constructor(wizardObjectInstance) {
    // this.name = wizardInstance['name'];
    this.name = wizardObjectInstance.name;

    this.bearded = true;

    // this.bearded = wizardInstance.bearded === undefined ? true : false;

    if (wizardObjectInstance.bearded === false) {
      this.bearded = false;
    }

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
