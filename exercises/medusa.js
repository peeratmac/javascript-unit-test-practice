class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.push(victim);
    victim.stoned = true;
    if (this.statues.length >= 4) {
      // this.statues[3].stoned = true;
      // no need ^ because with shift(), stoned already set to be true by default
      this.statues[0].stoned = false;
      this.statues.shift(victim);
      console.log(this.statues);
    }
  }
}

module.exports = Medusa;
