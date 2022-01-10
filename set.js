const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])

// так, как у Set() значения могут храниться только в единственном экземпляре
// то на выходе мы получим Set(6) {1, 2, 3, 4, 5, 6}

console.log(set)

set.add(10).add(20).add(30).add(20)  // значение 20 добавит только один раз

console.log(set)

// проверка на наличие значения в set()

console.log(set.has(30))  // вернёт true
console.log(set.has(32))  // вернёт false

// кол-во элементов

console.log(set.size)  // вернёт 9

// удаление элементов

set.delete(1)
console.log(set)

// очистка set
// set.clear()

// вызов values или keys выдаёт одни и те же значения
// методы values или keys нужны для синхронизации с Map(), для обратной совместимости

console.log(set.keys())
console.log(set.values())

for(let key of set) {
	console.log(key)
}

//=============
const arrayDubl = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

function uniqValues(array) {
	return [...new Set(array)]
}

// или

function uniqValues2(array) {
	return Array.from(new Set(array))
}

console.log(uniqValues(arrayDubl))

console.log(uniqValues2(arrayDubl))