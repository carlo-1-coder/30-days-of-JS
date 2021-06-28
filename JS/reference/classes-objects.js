
var obj = {
	'a' : 0,
	'b': 1,
	'c': (arg) => {
		console.log(arg);
	},
	'toUpperCase': () => {
		
	}
}


class StringV2 {
	constructor(stringArg){
		this.stringArg = stringArg;
	}
	toUpperCaseV2 = () => {
		return '*'+this.stringArg.toUpperCase();
	}
}


stringVariable = new StringV2('hello');
console.log(stringVariable.toUpperCaseV2())


class PetAnimal {
	constructor(petName, weight, price){
		this.petName = petName;
		this.price = price;
		this.weight = weight;
	}
	displayName = () => {
		console.log(this.petName);
	}
	computePrice = () => {
		if(this.weight > 10){
			return this.price + 10;
		}
		return this.price;
	}
}

class Skill {
	constructor(heroMap, mobList, tiles){
		
	}
	execute = (actionType, affectedObjects) => {
		if(actionType === 'damage'){
			for(var i=0;i<affectObject.length;i++){
				affectedObjects.hp -= 1;
			}
		}
	}
}

class PetDog extends PetAnimal {
	constructor(name, weight, price, food, skill){
		super(name, weight, price);
		this.skill = skill;
	}
	bark = (heroList) => {
		console.log("bark!");
		this.skill.execute('damage', heroList);
	}
}

class PetCat extends PetAnimal {
	constructor(name, weight, price){
		super(name, weight, price);
	}
	meow = () => {
		console.log("meow!");
	}
}

petCat = new PetCat("testname", 5, 5);
skill = new Skill(heroMap, mobList, tiles);
heroDog = new PetDog("name", 5, 10, "bone", skill);

heroDog.bark([petCat])

















