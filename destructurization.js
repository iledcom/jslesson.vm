function calcValues(a, b) {
  return [
    a + b,
    a - b,  // если вместо вычитания будет undefined (например вычитание не возможно)
            // будет выводиться значение по умолчанию
    a * b,
    a / b
  ]
}

/*
const result = (calcValues(42, 10))
const sum = result[0]  // sum - сумма
const sub = result[1]  // subtraction - вычитание
*/

// Деструктуризация

/*
const [sum, sub] = calcValues(42, 10)

console.log(sum, sub)
*/

/*
const [sum,, mult] = calcValues(42, 10)  // дополнительная запятая говорит о том, 
                                         // что мы пропускаем один индекс
console.log(sum, mult)
*/

/*
const [sum,, mult, ...other] = calcValues(42, 10)  // ... - оператор rest

console.log(sum, mult, other)
*/

const [sum, sub = 'no subtraction', mult, ...other] = calcValues(42, 10)  // ... - оператор rest

console.log(sum, mult, other, sub)

// Objects
const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Russia',
    city: 'Moscow'
  }
}

// const {name} = person  // идентично const name = person.name

/*
const {name, age, car} = person
console.log(car)  // undefined
*/

// const {name, age, car = 'No car'} = person

//Переименование переменной

const {
  name: firstName = 'No name',  // значение по умолчанию, если name не определено
  age, 
  car = 'No car',
  address: {city: homeTown, country}
} = person

console.log(firstName, homeTown)

//const {name, ...info} = person
//console.log(name, info)

//================
