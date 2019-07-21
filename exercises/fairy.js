class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust = this.dust + 10;
  }
}

module.exports = Fairy;
