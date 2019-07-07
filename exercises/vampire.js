class Vampire {
  constructor(name, pet, thirsty) {
    this.name = name;
    if (pet === undefined) {
      this.pet = 'BATMAN';
    } else {
      this.pet = pet;
    }
    this.thirsty = true;
    if (thirsty === true) {
      return true;
    }
  }
  drink() {
    this.thirsty = false;
  }
}

module.exports = Vampire;
