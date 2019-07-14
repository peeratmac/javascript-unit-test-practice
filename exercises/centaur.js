class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  }

  shoot() {
    this.counter++;
    this.checkCranky();
    if (!this.cranky && !this.layingDown) {
      return 'Twang!!!';
    } else {
      return 'NO!';
    }
  }
  run() {
    this.counter++;
    this.checkCranky();
    if (!this.layingDown) {
      return 'Clop clop clop clop!!!';
    } else {
      return 'NO!';
    }
  }

  checkCranky() {
    if (this.counter >= 3) {
      this.cranky = true;
    } else {
      this.cranky = false;
    }
  }

  sleep() {
    if (this.layingDown) {
      return 'ZZZZ';
    } else {
      return 'NO!';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
    this.cranky = false;
    this.counter = 0;
    this.sleep();
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (!this.layingDown && this.cranky) {
      this.counter = 0;
      this.checkCranky();
    } else {
      this.cranky = true;
      return "Not while I'm laying down!";
    }
  }
}

module.exports = Centaur;
