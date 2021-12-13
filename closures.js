// Замыкания

/*
Замыкание — это комбинация функции и лексического окружения, 
в котором эта функция была определена. Другими словами, 
замыкание даёт вам доступ к Scope (en-US) внешней функции 
из внутренней функции. В JavaScript замыкания создаются каждый раз 
при создании функции, во время её создания.
*/

function createCalcFunction(n) {
	return function() {
		console.log(1000 * n)
	}
}

createCalcFunction()

const calc = createCalcFunction(42)
console.log(calc)

calc()

function createIncrementor(n) {
	return function(num) {
		return n + num
	}
}

const addOne = createIncrementor(1)

console.log(addOne(10))

function urlGenerator(domain) {
	return function(url) {
		return `https://${url}.${domain}`
	}
}

const comUrl = urlGenerator('com')

console.log(comUrl('google'))

console.log(comUrl('netflix'))

const ruUrl = urlGenerator('ru')

console.log(comUrl('yandex'))

// Написать свою функцию bind

function bind(context, fn) {
	return function(...args) { //...args - оператор спред
		fn.apply(context, args)
	}
}

function logPerson() {
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Stas', age: 22, job: 'Frontend'}
const person2 = {name: 'Lena', age: 18, job: 'Poll Dancer'}

bind(person1, logPerson)()
bind(person2, logPerson)()