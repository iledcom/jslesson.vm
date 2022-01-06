const people = [
	{name: 'Konstantyn', age: 40, budget: 50000},
	{name: 'Stas', age: 16, budget: 10000},
	{name: 'Vladimir', age: 45, budget: 30000},
	{name: 'Irina', age: 27, budget: 25000},
	{name: 'Victoriya', age: 17, budget: 5000},
	{name: 'Mariya', age: 30, budget: 32000}
]

// ES 5 синтаксис
for(let i = 0; i < people.length; i++) {
	console.log('First call: ', people[i])
}

// ES 6 синтаксис
for(let person of people) {
	console.log('Second call: ', person)
}

// ForEach
people.forEach(function(person, index, pArr) {
	console.log('Third call: ', person)
	console.log(index) // используется редко
	console.log(pArr)  // используется редко
}) 

/*
метод forEach принимает в себя параметр функцию

данная функция принимает в себя три параметра
	первый - объект персон
	второй - индекс
	третий - сам массив people

*/

// ES 6 синтаксис forEach

people.forEach(person => console.log(person))

// Map
/*--- 
Метод map() создаёт новый массив с результатом вызова указанной функции 
для каждого элемента массива.

Параметры

callback

    Функция, вызываемая для каждого элемента массива arr. Каждый раз, когда callback выполняется, 
    возвращаемое значение добавляется в new_array.

    Функция callback, создающая элемент в новом массиве, принимает три аргумента:

    currentValue
        Текущий обрабатываемый элемент массива.
    index Необязательный
        Индекс текущего обрабатываемого элемента в массиве.
    array Необязательный
        Массив, по которому осуществляется проход.

thisArgНеобязательный
    Необязательный параметр. Значение, используемое в качестве this при вызове функции callback

Возвращаемое значение

Новый массив, где каждый элемент является результатом callback функции.

---*/

/* Examle
const newPeople = people.map(person => {
	return person.name
})
*/

const newPeople = people.map(person => `${person.name} (${person.age})`)

console.log(newPeople)

// Filter
const adults = []
for (let i = 0; i < people.length; i++) {
	if(people[i].age >= 18) {
		adults.push(people[i]) // Метод push() добавляет один или более элементов в конец массива 
		                       // и возвращает новую длину массива.
	}
}

console.log(adults)

// альтернатива записи, с использованием метода filter
const adults2 = people.filter(person => {
	if(person.age >= 18) {
		return true
	}
})

console.log(adults2)

// альтернатива, использование метода filter c использованием стрелочных функций
const adults3 = people.filter(person => person.age >= 18)

console.log(adults3)

// Reduce
/*
Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение

Синтаксис

array.reduce(callback[, initialValue])

Параметры

callback
    Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

    accumulator
        Аккумулятор, аккумулирующий значение, которое возвращает функция callback 
        после посещения очередного элемента, либо значение initialValue, если оно 
        предоставлено (смотрите пояснения ниже).
    currentValue
        Текущий обрабатываемый элемент массива.
    indexНеобязательный
        Индекс текущего обрабатываемого элемента массива.
    arrayНеобязательный
        Массив, для которого была вызвана функция reduce.

initialValueНеобязательный
    Необязательный параметр. Объект, используемый в качестве первого аргумента 
    при первом вызове функции callback.

Описание

Метод reduce() выполняет функцию callback один раз для каждого элемента, 
присутствующего в массиве, за исключением пустот, принимая четыре аргумента: 
начальное значение (или значение от предыдущего вызова callback), значение текущего элемента, 
текущий индекс и массив, по которому происходит итерация.

При первом вызове функции, параметры accumulator и currentValue могут принимать одно из двух 
значений. Если при вызове reduce() передан аргумент initialValue, то значение accumulator 
будет равным значению initialValue, а значение currentValue будет равным первому значению 
в массиве. Если аргумент initialValue не задан, то значение accumulator будет равным первому 
значению в массиве, а значение currentValue будет равным второму значению в массиве.

Если массив пустой и аргумент initialValue не указан, будет брошено исключение TypeError. 
Если массив состоит только из одного элемента (независимо от его положения в массиве) 
и аргумент initialValue не указан, или если аргумент initialValue указан, но массив пустой, 
то будет возвращено одно это значение, без вызова функции callback.
*/

let amount = 0
for(let i = 0; i < people.length; i++) {
	amount += people[i].budget
}

console.log(amount)

// альтернатива записи, с использованием метода filter

let amount2 = people.reduce((total, person) => {
	return total + person.budget
}, 0)
console.log(amount2)

// более лаконичная запись в одну строку

let amount3 = people.reduce((total, person) => total + person.budget, 0)
console.log(amount3)

// Find
const Irina = people.find(person => person.name === 'Irina')
console.log(Irina)

// FindIndex

const IrinaIndex = people.findIndex(person => person.name === 'Irina')
console.log(IrinaIndex)


// Пример
const newPeople2 = people
	.filter(person => person.budget > 3000)
	.map(person => {
		return {
			info: `${person.name} (${person.age})`,
			budget: person.budget
		}
	})

console.log(newPeople2)

const amount4 = people
	.filter(person => person.budget > 3000)
	.map(person => {
		return {
			info: `${person.name} (${person.age})`,
			budget: Math.sqrt(person.budget) // Math.sqrt - квадратный корень 
		}
	})
	.reduce((total, person) => total + person.budget, 0)

console.log(amount4)