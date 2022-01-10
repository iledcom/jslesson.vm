/*
let obj = {name: 'weakmap'}

obj = null

console.log(obj)  // выведет null
*/

let obj = {name: 'weakmap'}

const arr = [obj]

obj = null

console.log(obj)      // выведет null

console.log(arr[0])   // выведет {name: 'weakmap'}

// в структуре WeakMap (слабая карта) ключами могут являться только объекты
let obj2 = {name: 'weakmap'}

const map = new WeakMap([
	[obj2, 'obj data'] 
])

// доступные методы для WeakMap: get, set, delete, has

console.log(map.has(obj2))
console.log(map.get(obj2))

// если обнулить данный объект

obj2 = null

console.log(map.get(obj2))  // выведет undefined

// ============ использование на практике
const cache = new WeakMap()

function cacheUser(user) {
	if(!cache.has(user)) {
		cache.set(user, Date.now())
	}
	return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

console.log(cache.has(lena))  // true
console.log(cache.has(alex))  // true

lena = null

console.log(cache.has(lena))  // false