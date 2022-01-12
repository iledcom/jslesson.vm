const citiesUkraine = ['Kiev', 'Harkov', 'Odessa', 'Lvov', 'Uzhgorod', 'Doneck']
const citiesEurope = ['Tallin', 'Parizh', 'Lublin', 'Berlin', 'London']

const citiesUkraineWithPopulation = {
  Kiev: 10,
  Harkov: 5,
  Odessa: 3,
  Lvov: 1.5,
  Uzhgorod: 0.8,
  Doneck: 1.2

}
const citiesEuropeWithPopulation = {
  Tallin: 3,
  Parizh: 15,
  Lublin: 1,
  Berlin: 12,
  London: 15
}

// Spred

console.log(... citiesUkraine)
console.log(... citiesEurope)

const allCities = [...citiesUkraine, 'Kaliningrad', ...citiesEurope]
console.log(allCities)

// Устаревшая запись с помощью concat()

const allCities2 = citiesEurope.concat(citiesUkraine) 
console.log(allCities2)

// console.log(...citiesUkraineWithPopulation) // citiesUkraineWithPopulation is not iterable
console.log({...citiesUkraineWithPopulation})
console.log({...citiesUkraineWithPopulation, ...citiesEuropeWithPopulation})

// ======================

const numbers = [5, 37, 42, 17]

console.log(Math.max(5, 37, 42, 17))
console.log(Math.max(numbers)) // NaN
console.log(Math.max(...numbers)) // 42

// устаревшая запись, до появления оператора ... (Spred) 
console.log(Math.max.apply(null, numbers))

// ======================
const divs = document.querySelectorAll('div')
const nodes = [...divs]  // конвертация в массив

console.log(divs, Array.isArray(divs))    // false
console.log(nodes, Array.isArray(nodes))  // true
