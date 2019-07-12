class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.counter = 0;
  }

  shoot() {
    this.counter++;
    this.checkCranky();
    if (!this.cranky) {
      return 'Twang!!!';
    } else {
      return 'NO!';
    }
  }
  run() {
    this.counter++;
    this.checkCranky();
    return 'Clop clop clop clop!!!';
  }

  checkCranky() {
    if (this.counter >= 3) {
      this.cranky = true;
    }
  }
}

module.exports = Centaur;
