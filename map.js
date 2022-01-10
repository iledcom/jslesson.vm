const obj = {
	name: 'Konstantyn',
	age: 26,
	job: 'Fullstack'
}

const arrayEntries = [
	['name', 'Konstantyn'],
	['age', 26],
	['job', 'Fullstack']
]

console.log(Object.entries(obj))
console.log(Object.fromEntries(arrayEntries))

const map = new Map(arrayEntries) 	// Создаётся через конструктор класса Map
									// На вход передаём массив значений например arrayEntries

// получаем значение value по ключу key с помощью метода get
const value = map.get('job') 

console.log(value)

// добавляем элемент с помощью метода set

map.set('newField', 42)
console.log(map)

// добавляем элемент, который является объектом с помощью метода set

map.set(obj, 'Value of object')
console.log(map)
console.log(map.get(obj))

map.set(NaN, 'NaN ??')
console.log(map.get(NaN))

map.delete('job') // удаление ключа с помощью метода delete

console.log(map.has('job')) // проверка наличия ключа job

console.log(map.size) // проверка размерности карты (количества ключей)

// map.clear() // очистка карты

// ==============

for(let entry of map.entries()) {  // для карты определен символ итератор
	console.log(entry)
}

// если мы делаем итерацию по карте метод entries() вызывается автоматически

for(let [key, value] of map) {
	console.log(key, value)
}

// итерация только по значениям с помощью метода values()

for(let val of map.values()) {
	console.log(val)
}

// итерация только по ключам с помощью метода keys()

for(let key of map.keys()) {
	console.log(key)
}

// итерация с помощью цикла forEach()
map.forEach((val, key, m) => {  // m - то же самое, что и map
	console.log(val, key)
})

// ==============

const array = [...map]  // ... - оператор спред 
console.log(array)

// либо же использовать Array.from() результат будет тот же

const arrayFrom = Array.from(map)

console.log(arrayFrom)

// Учитывая, что map это усложненный объект мы можем сделать объет из этой карты
// в обычных объектах ключами не могут быть объекты
const mapObj = Object.fromEntries(map.entries())

console.log(mapObj)

// ============== Как использовать карты

const users = [
	{name: 'Konstantyn'},
	{name: 'Mariya'},
	{name: 'Irina'}
]

const visits = new Map()

visits
	.set(users[0], new Date())
	.set(users[1], new Date(new Date().getTime() + 1000 *60))
	.set(users[2], new Date(new Date().getTime() + 5000 *60))

function lastVisit(user) {
	return visits.get(user)
}

console.log(lastVisit(users[1]))
console.log(lastVisit(users[2]))