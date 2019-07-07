class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.foodCounter = 0;
    // random stuff for testing some more
    this.strong = true;
    this.workoutCounter = 0;
  }

  eat() {
    this.foodCounter++;
    if (this.foodCounter >= 3) {
      this.hungry = false;
    }
  }

  workout() {
    this.workoutCounter = this.workoutCounter + 1;
    if (this.workoutCounter >= 5) {
      this.strong = true;
    } else if (this.workoutCounter < 5) {
      this.strong = false;
    }
  }
}

module.exports = Dragon;
