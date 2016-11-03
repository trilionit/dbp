var events = require("events");
var utils = require("util");

//some constructor function

var Person = function(name){
	this.name=name;
}
//inherit function Person to the emitter
utils.inherits(Person, events.EventEmitter);
//done

//get names using constructor function

var prince = new Person("Prince");
var kofi = new Person("Kofi");

//create array for names

var users = [prince, kofi];

//loop through users

users.forEach(function(user){
	//display in 
});