class Unicorn {
  constructor(lastName, color) {
    this.lastName = lastName;
    // below can also be written as this.color = color || 'white';
    if (color === undefined) {
      this.color = 'white';
    } else {
      this.color = color;
    }
  }

  isWhite() {
    if (this.color == 'white') {
      return true;
    }
  }
  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;

// 1. read the test that you are running
// 2. ask yourself if it's going to fail and why
// 3. run the test
// 4. make it pass
