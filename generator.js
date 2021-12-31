/*_________Generator_________

Генератор - это объект, возвращаемый функцией-генератором 
и соответствующий как "Итерируемому" протоколу, 
так и протоколу "Итератор".

Конструктор

Этот объект не может быть инстанциирован напрямую. 
Вместо этого, экземпляр Generator может быть возвращён 
из функции-генератора:

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(generator().next().value); // 1
console.log(generator().next().value); // 1

Методы экземпляра

Generator.prototype.next()
    Возвращает значение, полученное выражением yield.
Generator.prototype.return()
    Возвращает заданное значение и заканчивает генератор.
Generator.prototype.throw()
    Выдаёт ошибку генератора. 
_____________________________*/

function* strGenerator() {
	yield 'H'
	yield 'e'
	yield 'l'
	yield 'l'
	yield 'o'
}

const str = strGenerator()

//Последовательный вывод
/*
str.next() // выведет {value: 'H', done: false}
str.next() // выведет {value: 'e', done: false}
str.next() // выведет {value: 'l', done: false}
str.next().value // выведет 'l'
str.next() // выведет {value: 'o', done: false}
*/


function* numberGen(n = 10) {
	for(let i = 0; i < n; i++) {
		yield i
	}
}

const num = numberGen(7)

// Examle
// Генератор без генератора

const iterator = {
	gen(n = 10) {
//[Symbol.iterator](n =10) {
		let i = 0

		return {
			next() {
				if(i < n) {
					return {value: ++i, done: false}
				}
				return {value: undefined, done: true}
			}
		}
	}
}

const itr = iterator.gen()

console.log(itr.next())  // выведет {value: 1, done: false}

// выведем посимвольно слово 'Hello'
for (let k of 'Hello') {
	console.log(k)
}

// generator
function* iter(n = 10) {
	for (let i = 0; i < n; i++) {
		yield i
	}
}

for (let k of iter(6)) {
	console.log(k)
}