// Метод Object.create() создаёт новый объект с указанным прототипом 
// и свойствами.

/*
Синтаксис
Object.create(proto[, propertiesObject])
Параметры
proto
Объект, который станет прототипом вновь созданного объекта.
propertiesObject
Необязательный параметр. Если указан и не равен undefined, должен быть
объектом, чьи собственные перечисляемые свойства (то есть такие, которые
определены на самом объекте, а не унаследованы по цепочке прототипов)
указывают дескрипторы свойств, добавляемых в новый объект. Имена
добавляемых свойств совпадают с именами свойств в этом объекте. Эти
свойства соответствуют второму аргументу метода
Object.defineProperties().
*/

const person = Object.create({}, {
	name: {
		value: 'Konstantyn'
	},
	birthYear: {
		value: 1981
	}
})

console.log(person)

// свойства name и birthYear не поддаются итерации
// следующий цикл ничего не выведет
for(let key in person) {
	console.log('Key', key)
}

const classicPerson = {
	name: 'Konstantyn',
	birthYear: 1981
}

for(let key in classicPerson) {
	console.log('Key', key)
}

const person2 = Object.create(
	{
		calculateAge() {
			console.log('Age:', new Date().getFullYear() - this.birthYear)
		}
	}, 
	{
		name: {
			value: 'Konstantyn',
			enumerable: true, 
			writable: true, // можем изменять значение ключа
			configurable: true // можем удалять, какой либо ключ из объекта
												// например delete person2.name
		},
		birthYear: {
			value: 1981,
			enumerable: false,  // не будет выводиться в цикле
			writable: false,
			configurable: false
		},
		age: {
			// геттеры и сеттеры
			get() {
				return new Date().getFullYear() - this.birthYear
			},
			set(value) {
				document.body.style.background = 'red'
				console.log('Set age', value)
			}
		}
	}
)

for(let key in person2) {
	console.log('Key', key, person2[key])
}

person2.name = 'Stas'

for(let key in person2) {
	if(person2.hasOwnProperty(key)) {
		console.log('Key', key, person2[key])
	}
}