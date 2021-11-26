// Строки
function logPerson(s, namber, name, age, str) {
	console.log(s, namber, name, age, str)
	return `${s[0]}${namber}${s[1]}${name}${s[2]}${age}${s[3]}${str}`
}

const personName = 'Konstantyn'
const personAge = 40
const personStr = 'TT'

const output = logPerson `Null: ${null} Имя: ${personName} Возраст: ${personAge} Строка: ${personStr} !`

console.log(output)