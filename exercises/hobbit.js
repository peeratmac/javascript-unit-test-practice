class Hobbit {
  // inside constructor, alternative could define parameter isShort = true, age = 0, disposition = 'homebody', old = false, etc.
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;
    this.hasRing = this.name == 'Frodo';
  }

  celebrateBirthday() {
    this.age++;
    if (this.age <= 32) {
      this.adult = false;
    } else if (this.age >= 101) {
      this.old = true;
    } else if (this.age >= 33) {
      this.adult = true;
    }
  }
}

module.exports = Hobbit;
