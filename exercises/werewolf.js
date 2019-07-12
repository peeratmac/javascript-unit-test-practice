class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    if (this.human) {
      this.human = false;
      this.wolf = true;
      // line above is same as this.wolf = !this.human; (learn to use bang operator to make the code shorter, in this case, might not be as readable)
      this.hungry = true;
    } else if (!this.human) {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    }
  }

  eat(victim) {
    if (this.hungry && victim.alive) {
      this.hungry = false;
      victim.alive = false;
    } else {
      this.hungry = true;
      victim.alive = true;
    }
  }
}

module.exports = Werewolf;
