class Vampire {
  constructor(name, pet, thirsty) {
    this.name = name;

    // this code accomplished the same as the one on line 12
    // if (pet === undefined) {
    //   this.pet = 'BATMAN';
    // } else {
    //   this.pet = pet;
    // }

    this.pet = pet || 'BATMAN';

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
