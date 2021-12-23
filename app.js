const delay = ms => {
	return new Promise(r => setTimeout(() => r(), ms)) // r === resolve
}

// проверка функции delay
// delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'