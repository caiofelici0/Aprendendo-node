class Person {
  constructor(name){
    this.name = name;
  }

  getMyName(){
    return `My name is ${this.name}`;
  }
}

module.exports = {
  Person,
};