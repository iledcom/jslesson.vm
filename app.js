// Контекст

function hello() {
	console.log('Hello', this)
}

/*
const person = {
	name: 'Konstantyn',
	age: 40,
	sayHello: hello
}
*/

// Function.prototype.bind()

/*
Метод bind() создаёт новую функцию, которая при вызове 
устанавливает в качестве контекста выполнения this 
предоставленное значение. В метод также передаётся 
набор аргументов, которые будут установлены перед 
переданными в привязанную функцию аргументами при 
её вызове.
fun.bind(thisArg[, arg1[, arg2[, ...]]])
*/

const employee = {
	specialty: 'electric',
	seniority: 27,
	salary: 20000
}

const person = {
	name: 'Konstantyn',
	age: 40,
	sayHello: hello,
	sayHelloWindow: hello.bind(employee),
	sayHelloThis: hello.bind(this)
}

// this === window

const manager = {
	name: person.name,
	age: person.age,
	sayHello: hello,

	logInfo: function(hobby) {
		console.group(`${this.name} info:`)
		console.log(`he is worker  ${this.specialty}`)
		console.log(`Age is ${this.age}`)
		console.log(`His hobby is ${hobby}`)
		console.groupEnd()
	}
}

const secretar = {
	name: 'Ira',
	age: 37,
	salary: 10000,
	specialty: 'secretar'
}

const personInfo = manager.logInfo.bind(secretar)

personInfo('book reading')

