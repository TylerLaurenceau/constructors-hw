function Person (options) {
  options = options || {};
  this.cool = options.cool
  if (options.cool === undefined){
    this.cool = false;
  }
};

// define functions on the prototype outside the constructor
Person.prototype.pet = function(dog) {
  dog.status = 'happy'
};

Person.prototype.feed = function(dog) {
  dog.hungry = false
};

// create an instance with new
// var aPerson = new Person();

// then you call methods on the instance
// aPerson.pet(dog)


export { Person };
