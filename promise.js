// Promise
// Объект Promise используется для отложенных и асинхронных вычислений.

console.log('Request data...')

/*
setTimeout(() => {
	console.log('Preparing data...')

const backendData  = {
	server: 'aws',
	port: 2000,
	status: 'working'
}

setTimeout(() => {
	backendData.modified = true
	console.log('Data received', backendData)
}, 2000)

}, 2000)

*/

/*
Параметры

new Promise(executor);
new Promise(function(resolve, reject) { ... });

executor
  Объект функции с двумя аргументами resolve и reject. 
  Функция executor  получает оба аргумента и выполняется сразу, 
  ещё до того как конструктор вернёт созданный объект. 
  Первый аргумент (resolve) вызывает успешное исполнение промиса, 
  второй (reject) отклоняет его.
  Обычно функция executor описывает выполнение какой-то асинхронной работы, 
  по завершении которой необходимо вызвать функцию resolve или reject. 
  Обратите внимание, что возвращаемое значение функции executor игнорируется. 
*/

const p = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Preparing data...')
		const backendData  = {
			server: 'aws',
			port: 2000,
			status: 'working'
		}
		resolve(backendData) // передаваемый объект backendData в методе resolve
												// будет получен в методе промиса then(), например, как data
	}, 2000)
})

// метод промиса then
/*
Promise.prototype.then()

Метод then() возвращает Promise. 
Метод может принимать два аргумента: 
колбэк-функции для случаев выполнения и отклонения промиса.
 Если один или оба аргумента отсутствуют или их значения не функции, 
 то then пропустит их и не выбросит ошибку. 
 Если для Promise, который переходит в состояние выполнен или отклонён 
 вызван метод then, и у данного метода нет нужного обработчика, 
 то в таком случае then просто возвращает промис с состоянием начального Promise, 
 для которого then был вызван.
*/

/*
p.then(data => {
	//console.log('Promise resolved', data)
	const p2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true
			resolve(data)
		}, 2000)
	})

	p2.then(clientData => {
		console.log('Data received', clientData)
	})
})

*/

p.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true
			resolve(data)
		}, 2000)
	})
}).then(clientData => {
		console.log('Data received', clientData)
})

// Запись через точку называется чейн (chain - цепочка)

/*
Promise.prototype.catch()

Метод catch() возвращает промис (Promise() и работает только в случае отклонения промиса. Ведёт себя аналогично вызову Promise.prototype.then(undefined, onRejected).
Syntax

p.catch(onRejected);

p.catch(function(reason) {
   // отказ
});

*/

p.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true
			reject(data) // reject
		}, 2000)
	})
})
.then(clientData => {
		clientData.fromPromise = true
		return clientData
})
.catch(err => console.log('Error: ', err))

// Меняя методы resolve, reject мы можем говорить об успехе промиса, либо не успехе 

p.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true
			resolve(data) // resolve
		}, 2000)
	})
})
.then(clientData => {
		clientData.fromPromise = true
		return clientData
})
.catch(err => console.log('Error: ', err))

// finally() выводится не смотря на ошибку

p.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true
			reject(data)
		}, 2000)
	})
})
.then(clientData => {
		clientData.fromPromise = true
		return clientData
})
.catch(err => console.log('Error: ', err))
.finally(() => console.log('Finally'))


// example
const sleep = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), ms)
	})
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))


// метод all
Promise.all([sleep(2000), sleep(5000).then(() => {
	console.log('All promises')
})])

// метод race
Promise.race([sleep(2000), sleep(5000).then(() => {
	console.log('Race promises')
})])
