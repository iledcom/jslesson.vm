/*
const person = {
 name: 'Konstantyn',
 age: 25,
 greet: function() {
 	console.log('Greet!')
 }
}
*/

const person = new Object({
	name: 'Konstantyn',
	age: 25,
	greet: function() {
	console.log('Greet!')
 }
})

Object.prototype.sayHello = function() {
	console.log('Hello!')
}

const lena = Object.create(person)

lena.name = 'Lena'

// const str = 'I am string'

const str = new String('I am string')