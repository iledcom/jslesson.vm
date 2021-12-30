// Objects

const person = {
	name: 'Konstantyn',
	age: 25,
	job: 'Fullstack'
}

/*
Заместитель (англ. Proxy) — структурный шаблон проектирования, предоставляющий объект, 
который контролирует доступ к другому объекту, перехватывая все вызовы 
(выполняет функцию контейнера).

Объект Proxy позволяет создать прокси для другого объекта, 
может перехватывать и переопределить основные операции для данного объекта.

Терминология

механизм полного перехвата (или "intercession API")
    Технический термин для этой функции.

прокси (proxy)
    Объект, оборачивающий исходный объект.

обработчик (handler)
    Объект-заменитель, содержащий ловушки. Определяет, какие операции будут перехвачены, 
    также переопределяет перехваченные операции.

ловушки (traps)
    Методы, которые предоставляют доступ к свойствам. Это аналогично концепции ловушек 
    в операционных системах.

цель (target)
    Исходный объект, который виртуализируется прокси. Он часто используется в качестве 
    источника данных в прокси. Для него проверяются инварианты относительно расширяемости 
    и настраиваемости свойств.

Прокси - это новые объекты; невозможно выполнить "проксирование" существующего объекта. 

Пример создания прокси:

var p = new Proxy(target, handler);

target — исходный объект (может быть объектом любого типа, включая массив, 
функцию и даже другой прокси объект).

handler — объект-обработчик, методы (ловушки) которого определяют поведение прокси 
во время выполнения операции над ним

Обработчик

Все ловушки опциональны. В случае, если ловушка не задана, 
то стандартным поведением будет перенаправление операции к объекту-цели.

*/

const op = new Proxy(person, {
	get(target, prop) {              // handler, поставлена ловушка на метод get
		console.log('Target', target)  // Object
		console.log('Prop', prop)      // Properties

		console.log(`Getting prop ${prop}`)

		/*пример из коца урока*/
		if(!(prop in target)) {
			return prop
				.split('_')          // метод split у строки возвращает массив
				.map(p => target[p]) // проходимся по массиву, на каждой итерации получаем объект "р"
				.join(' ')           // соединяем всё через пробел
		}
		/*____________________*/

		return target[prop]
	},
	set(target, prop, value) {
		if(prop in target) {
			target[prop] = value
		} else {
			throw new Error(`No ${prop} field in target`)
		}
	},
	has(target, prop) { // есть ли такое поле в объекте, возвращает true || false
		return ['age', 'name', 'job'].includes(prop) // причем, если удалить из массива, 
																								// некоторое свойство
	}, deleteProperty(target, prop) {
		console.log('Deleting...', ' prop')
		delete target[prop]
	}
})

// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
	apply(target, thisArg, args) {
		console.log('Calling fn...')

		return target.apply(thisArg, args).toUpperCase() 
	}
})


// Classes
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}

/*
const PersonProxy = new Proxy(Person, {
	construct(target, args) {
		console.log('Construct...')

		return new target(...args)  // используется оператор спред ... три точки
	}
})
*/

const PersonProxy = new Proxy(Person, {
	construct(target, args) {
		console.log('Construct...')

		return new Proxy(new target(...args), {
			get(t, prop) {
				console.log(`Getting prop "${prop}"`)
				return t[prop]
			}
		})  // используется оператор спред ... три точки
	}
})

const p = new PersonProxy('Maxim', 30)