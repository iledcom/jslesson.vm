
const Birds = {
	name: 'Bird',
	age: 2,
	hasWings: true
}

console.log(Birds)



// ES6 Классы

class Animal {
	static type = 'Static property' // Статическое свойство
	                               // Обращаться через класс Animal.type
	constructor(options) {
		this.name = options.name
		this.age = options.age
		this.hasTail = options.hasTais
	}

	voice(sound = 'rrrrr') {
		console.log('I am:',this.name, sound)
	}
}

const animal = new Animal({
	name: 'Animal',
	age: 5,
	hasTail: true
})



console.log(animal)
animal.voice()
// Выводn статического свойства
console.log(Animal.type)

// Наследование extends

class Cat extends Animal {
	static type = 'CAT'

	constructor(options) {
		super(options) // сперва надо вызвать конструктор класса родителя
		this.color = options.color
	}

	voice() {
		super.voice() // вызов родительского метода
		console.log('I am cat') // переопределение родительского метода
	}

	//геттеры и сеттеры
	get ageInfo() {
		return this.age * 7
	}

	set ageInfo(newAge) {
		this.age = newAge
	}

}

const cat = new Cat ({
	name: 'Murzik',
	age: 3,
	hasTail: true,
	color: 'black'
})

cat.voice('myau')

console.log(cat.ageInfo) // вывод геттера, не вызывается, как функция

cat.ageInfo = 5

console.log('Перерасчет возраста кота: 5 * 7 = ', cat.ageInfo)