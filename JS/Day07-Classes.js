// Day 07: Classes | Jun 28, 2021
// All classes can create an object instance, but not all objects are from classes.

var obj = {
  'a': 0,
  'b': 1,
  'c': (arg) => {
    console.log(arg)
  },
  'toUpperCase': 2
}

obj.c('test')

// key = 'z'
// obj = {
//   [key]: 0
// }

// Best practice for naming classes: title case
class StringV2 {
  constructor(stringArg) {
    // 'this' is a placeholder for the class it is written; e.g., this class contains this property; this property is shared within the class scope
    this.stringArg = stringArg
  }
  toUpperCaseV2 = () => {
    return '*' + this.stringArg.toUpperCase()
  }
}

stringVariable = new StringV2('hello')
console.log(stringVariable.toUpperCase())
// modules are classes, like Math

// inheritance = if you have a parent object, you can create a child object which can inherit the properties of parent object; unique for OOP languages (Java, JS, C++, C#, Python)

// Parent: class <parentName> {
// }

// Child: class <childName> extends <parentName> {
// }

class PetAnimal {
  constructor(petName, weight, price) {
    this.petName = petName
    this.weight = weight
    this.price = price
    this.priceTag = 'PHP ' + price
  }
  displayName = () => {
    console.log(this.petName)
  }
  computePrice = () => {
    if (this.weight > 10) {
      return this.price +10
    }
    return this.price
  }
}

// case study: DOTA
class Skill() {
  constructor (heroMap, mobList, tiles) {

  }
  execute = () {

  }
}

class PetDog extends petAnimal {
  constructor(name, weight, price, food) {
    // accesses the parent class
    super(name, weight, price)
  }
  bark = () => {
    console.log('bark!')
    this.skill.execute()
  }
}

class PetCat extends petAnimal {
  constructor(name, weight, price, food) {
    // accesses the parent class
    super(name, weight, price)
  }
  meow = () => {
    console.log('meow!')
  }
}