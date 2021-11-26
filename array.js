// 7. Массивы

const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']

console.log('length cars array: ' + cars.length)


// Добавление нового элемента в конец массива
// Method push
cars.push('Porshe')


// Добавление нового элемента в начало массива
// Method unshift
cars.unshift('Toyota')

// Method shift удаляет элемент и выводит его
console.log(cars)
const firstItem = cars.shift()
console.log(cars)

console.log(firstItem)

// Method pop

const lastCar = cars.pop()
console.log(cars)
console.log(lastCar)

// Method reverse

cars.reverse()

console.log(cars)

// Задача 1

const text = 'we learn JavaScript'
// Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой. 
// str.split([separator[, limit]])
// separator - Необязательный параметр. Указывает символы, используемые в качестве разделителя внутри строки.
// limit - Необязательный параметр. Целое число, определяющее ограничение на количество найденных подстрок.

const reverseText = text.split('').reverse().join('')

// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.

console.log(reverseText)

//Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

const index_1 = cars.indexOf('BMW')
cars[index_1] = 'Renault'

console.log(cars)

//Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.

const people = [
	{name: 'Vika', budget: 4200},
	{name: 'Elena', budget: 3500},
	{name: 'Alex', budget: 1700}
]

const index = people.findIndex(function(person) { 
	return person.budget === 3500
})


let findedPerson
for(const person2 of people) {
	console.log(person2)
	if(person2.budget === 1700) {
		findedPerson = person2
	}
}

console.log(findedPerson)


// Более лаконичное решение
const person = people.find(function(person) {
	return person.budget === 3500
})

console.log(person)

// Использование стрелочной функции
const person3 = people.find((person) => {
	return person.budget === 4200
})
console.log(person3)

// Упрощенный вариант

// Лямбда функция
const person4 = people.find(person => person.budget === 3500)
console.log(person4)

// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

console.log(cars.includes('Ford'))

// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const upperCaseCars = cars.map(car => {
	return car.toUpperCase()
})

console.log(upperCaseCars)


const fib = [1, 1, 2, 3, 5, 8, 13, 21]

const pow5 = num => num ** 2

//const pow2Fib = fib.map(num => num ** 2)
const pow5Fib = fib.map(pow5) // В такой записи функция не вызывается, а передаётся

console.log(pow5Fib)

const sqrt = num => Math.sqrt(num)

const pow5FibSqrt = fib.map(pow5).map(sqrt)

console.log(pow5Fib)

// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

const filteredNumbers = pow5Fib.filter(num => {
	return num > 20
})

console.log(filteredNumbers)

//Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

/*
const allBudget = people.reduce((acc, person) => {
	if(person.budget > 2000) {
		acc += person.budget
	}
	return acc
}, 0)
*/

// Более правильное решение
const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {
	acc += person.budget
	return acc
}, 0)

console.log('All budget = ' + allBudget)

// 6. Object

const person 