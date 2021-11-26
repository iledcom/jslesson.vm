// Функции

// function declaration
function declaration(name) {
	console.log('Hello declr -', name)
}

// function expression
// не можем вызывать до инициализации
const expression = function(name) {
	console.log('Hello exrp -', name)
}

declaration('Kostya')
expression('Vova')

// Функции не являются отдельным типом данных

console.dir(declaration)

// Анонимные функции
let counter = 0
const interval = setInterval(function() {
	if(counter === 5) {
		clearInterval(interval)
	} else {
		console.log(++counter)
	}
}, 1000)


// Стрелочные функции

const arrow =(name) => {
	console.log('Hello -', name)
}

arrow('Kostya')

const arrow2 = (name) => console.log('Hello -', name)

arrow('Katya')

// возведение в степень

const pow2 = num => {
	return num **2
}

// то же самое только сокращенный вариант написания
const pow3 = num => num **2

console.log(pow2(3))
console.log(pow3(5))

// Параметры по умолчанию

const sum = (a, b = 1) => a + b

console.log(sum(41, 3))

//Оператор rest

function sumAll(...all) {
	let result = 0
	for(let num of all) {
		result += num
	}
	return result
}

const res = sumAll(1, 2, 3, 4, 5)

console.log(res)

//Замыкания

function createMember(name) {
	return function(lastName) {
		console.log(name + lastName)
	}
}

const logWithLastName = createMember('Konstantyn')
console.log(logWithLastName)
console.log(logWithLastName('Korenev'))

