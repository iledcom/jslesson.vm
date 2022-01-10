const users = [
	{name: 'Konstantyn'},
	{name: 'Mariya'},
	{name: 'Irina'}
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

console.log(visits.has(users[0]))  // true
console.log(visits.has(users[1]))  // true

users.splice(1, 1) // первое 1 - индекс элемента, второе 1 - кол-во элементов на удаление

console.log(visits.has(users[1]))  // false