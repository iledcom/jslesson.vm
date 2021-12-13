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

/*
const personInfo = manager.logInfo.bind(secretar)

personInfo('book reading')
*/

/*
const personInfo = manager.logInfo.bind(secretar, 'book reading')

personInfo()
*/

// Метод call() 
// вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.
// fun.call(thisArg[, arg1[, arg2[, ...]]])

//manager.logInfo.bind(secretar, 'book reading')()
manager.logInfo.call(secretar, 'book reading')

/*
Примечание: хотя синтаксис этой функции практически полностью идентичен функции apply(), 
фундаментальное различие между ними заключается в том, что функция call() принимает список аргументов, 
в то время, как функция apply() - одиночный массив аргументов.
*/

// Метод apply()

/*
Метод apply() вызывает функцию с указанным значением this и аргументами, 
предоставленными в виде массива (либо массивоподобного объекта)
*/

manager.logInfo.apply(secretar, ['book reading'])

// Practic


const array = [1, 2, 3, 4, 5]

/*
function multBy(arr, n) {
	return arr.map(function(i) {
		return i * n
	})
}
*/

//console.log(multBy(array, 3))

// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

Array.prototype.multBy = function(n) {
	return this.map(function(i) {
		return i * n
	})
}

console.log(array.multBy(3))