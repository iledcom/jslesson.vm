const delay = ms => {
	return new Promise(r => setTimeout(() => r(), ms)) // r === resolve
}

// проверка функции delay
// delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'

/*
Fetch API предоставляет интерфейс для получения ресурсов (в том числе по сети). 
Он покажется знакомым любому, кто использовал XMLHttpRequest, 
но новый API является более мощным и гибким набором функций.
*/
function fetchTodos() {
	console.log('Fetch todo started...')
	return delay(2000)
	.then(() => {
		return fetch(url) // fetch() аналог Ajax
// можно написать так  
// .then(() => fetch(url)) 
// в Es6 синтаксисе по умолчанию если 
// не указан return, то JavaScript 
// автоматически возвращает результат
	}).then(response => response.json())
}

fetchTodos()
	.then(data => {
		console.log('Data:', data)
	})
	.catch(e => console.error(e))

/*
Оператор await используется для ожидания окончания Promise. 
Может быть использован только внутри async function.

Оператор await заставляет функцию, объявленную с использованием оператора async, 
ждать выполнения Promise и продолжать выполнение после возвращения Promise значения. 
Впоследствии возвращает полученное из  Promise значение. Если типом значения, 
к которому был применён оператор await, является не Promise, то значение приводится 
к успешно выполненному Promise.

Если Promise отклоняется, то await генерирует исключение с отклонённым значением.


// Более лаконичная запись функции fetchTodos()
async function fetchAsyncTodos() {
	console.log('Fetch todo started...')
	await delay(4000) //равносильно обработке промиса
	const response = await fetch(url)
	const data = await response.json()
	console.log('Data:', data)
}

fetchAsyncTodos()
*/

// Применение try catch

async function fetchAsyncTodos() {
	console.log('Fetch todo started...')
	try {
		await delay(4000) //равносильно обработке промиса
		const response = await fetch(url)
		const data = await response.json()
		console.log('Data:', data)
	}
	catch (e) {
		console.error(e)
	} finally {
		await delay(2000)
		console.log('Fetch todo end')
	}
}

fetchAsyncTodos()

/*
What is Babel?
Babel is a JavaScript compiler

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code 
into a backwards compatible version of JavaScript in current and older browsers 
or environments. Here are the main things Babel can do for you:

    Transform syntax
    Polyfill features that are missing in your target environment 
    (through a third-party polyfill such as core-js)
    Source code transformations (codemods)
    And more! (check out these videos for inspiration)


Что такое Babel и где его используют

Babel - это транспайлер, который переписывает код современного стандарта 
Javascript (ES2015) на более поздний. 

Транспайлер - это программа, позволяющая менять исходный код одной программы 
на эквивалентный исходный код на другом языке. В случае с Babel, 
он переписывает современный Javascript на старый.

Где и зачем используют Babel

Babel это не просто транспайлер, это лучший друг разработчика. ECMA International, 
пока что, выпускает обновления языка Javascript каждый год. В связи с этим, 
у разработчиков появляются новые возможности: более короткий синтаксис, 
стрелочные функции, промисы и.т.д. 

Соответственно, не все современные браузеры могут или хотят идти в ногу 
с этими изменениями. А еще, к этому прибавляем старые браузеры, 
которые больше никогда не обновятся. Но их все равно пока используют, 
привет Internet Explorer.  

Вот здесь и нужен Babel. Он помогает не ждать обновлений браузеров, 
а сразу использовать всю мощь современных стандартов Javascript.

Используют Babel вместе с различными сборщиками проектов: webpack и gulp, 
устанавливая необходимый “функционал” с помощью менеджера пакетов NPM. 
Сам NPM входит в состав Node.js. 
/*
