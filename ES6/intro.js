function addOne(value = 5){
	return 3 + value;
}

function run(val, f){
	return f(val)

}
// CLasses
class Square{
	constructor(length){
		this.length = length;
	}

	area(){
		return this.length * this.length;
	}
}
// ES6 version
	let sq =[2,4,6].map(n => n + 1);
	console.log(sq)

var sayHello = name => {
	console.log(`Hello, ${name}!`);
}
sayHello("World");

// let sayHello = name => console.log(`Hello, ${name}!`);

// sayHello("World of JavaScript");