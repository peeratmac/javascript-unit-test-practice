class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses: ['Iris'] };
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust = this.dust + 10;
  }

  makeDresses(someDresses) {
    var x = this.clothes.dresses.concat(someDresses);
    this.clothes.dresses = x;
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infantNumber) {
    if (this.disposition == 'Vengeful') {
      infantNumber.disposition = 'Malicious';
    }

    this.humanWards.push(infantNumber);
    if (this.humanWards.length >= 3) {
      this.disposition = 'Good natured';
    }
    return infantNumber;
  }
}

module.exports = Fairy;
