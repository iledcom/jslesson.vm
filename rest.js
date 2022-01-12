// Rest

function sum(a, b) {
  return a + b
}

const numbers = [1, 2, 3, 4, 5]

// Spred!!!
console.log(sum(...numbers))

function sum2(a, b, ...rest) {  //три точки ... это оператор rest, собирает остаток аргументов
  return a + b + rest.reduce((a, i) => a + i, 0)
}

console.log(sum2(...numbers))

// старая запись до ES6
let a = numbers[0]
let b = numbers[1]

console.log(a, b)

// новая запись после ES6

let [c, d] = numbers
console.log(c, d)

let [e, f, ...other] = numbers  // ... это rest !!!

console.log(e, f, other)

const person = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'Russia'
}

const {name, age, ...address} = person  // ... это rest !!!

console.log(name, age, address)