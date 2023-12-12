
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

// Create a new instance of Animal
let dog = new Animal('dog', 4);
console.log(dog.describe()); // dog has 4 legs