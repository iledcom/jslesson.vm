// 6. Object

const person  = {
	name: 'Konstantyn',
	age: 40,
	isProgrammer: true,
	languages: ['ru', 'ua', 'en'],
	'complex key': 'Complex value',
	['key_' + (1 + 3)]: 'Computed key',
	greet() {
		console.log('greet from person')
	},
	info() {
		console.info('Information about people whose name: ', this.name)
	}
}

console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])
console.log(person)
person.greet()

person.age--
person.languages.push('PHP')
delete person['key_4'] // удаляет свойство
console.log(person)

// const name = person.name
// const age = person.age
// const languages = person.languages

// Деструктуризация

const {name, age, languages} = person

console.log(name, age, languages)

const {age: personAge} = person

console.log('Это переопределенное свойство age: ' + personAge)

// Можно установить значение свойства по умолчанию

const {age: personAge2 = 35} = person

console.log('Это переопределенное свойство age: ' + personAge2)

for (let key in person) {
	if(person.hasOwnProperty(key)) {
		console.log(key)
		console.log(person[key])
	}
}

/*
Метод Object.keys() возвращает массив из собственных перечисляемых
свойств переданного объекта, в том же порядке, в котором они бы обходились
циклом for...in (разница между циклом и методом в том, что цикл перечисляет
свойства и из цепочки прототипов).
*/

/*
const keys = Object.keys(person)
keys.forEach((key) => {
	console.log(key)
	console.log(person[key])
})
*/

Object.keys(person).forEach((key) => {
	console.log(key)
	console.log(person[key])
})

person.info()

const logger = {
	keys() {
		console.log('Object Keys: ', Object.keys(this))
	}
}

logger.keys()

/*
Метод bind() создаёт новую функцию, которая при вызове устанавливает в
качестве контекста выполнения this предоставленное значение. В метод
также передаётся набор аргументов, которые будут установлены перед
переданными в привязанную функцию аргументами при её вызове.
*/

const bound = logger.keys.bind(person)

bound()

// Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.

logger.keys.call(person)