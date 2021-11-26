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
	}
}

console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])
console.log(person)
person.greet()

person.age++
person.languages.push('PHP')
delete person['key_4'] // удаляет свойство
console.log(person)

