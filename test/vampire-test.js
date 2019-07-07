var assert = require('chai').assert;
var Vampire = require('../exercises/vampire');

describe('Vampire', function() {
  it('should be a function', function() {
    assert.isFunction(Vampire);
  });

  it('should instantiate our good friend, Vampire', function() {
    var vampire = new Vampire();
    assert.isObject(vampire);
  });

  it('should have a name', function() {
    var vampire = new Vampire('Jun');
    assert.equal(vampire.name, 'Jun');
  });

  it('should have a pet BATMAN as a default', function() {
    var vampire = new Vampire('Brittany');
    assert.equal(vampire.name, 'Brittany');
    assert.equal(vampire.pet, 'BATMAN');
  });

  it('should take an argument for pet', function() {
    var vampire = new Vampire('Jeff', 'fox');
    assert.equal(vampire.pet, 'fox');
  });

  it('should have vampire return true if thirsty', function() {
    var vampire = new Vampire('Andy');
    assert.equal(vampire.thirsty, true);
  });

  it('should refute thirsty if vampire has drank', function() {
    var vampire = new Vampire('Meeka');
    vampire.drink();
    assert.equal(vampire.thirsty, false);
  });
});
