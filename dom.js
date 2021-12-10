// DOM

const heading = document.getElementById('hello')

// const heading2 = document.getElementsByTagName('h2') - устарел
// const heading2 = document.getElementsByClassName('h2-class') - устарел

// const heading2 = document.querySelector('h2-class')

//const heading2 = document.querySelector('#sub-hello')

const heading2 = document.querySelector('h2')

const heading3 = heading2.nextElementSibling

const h2List = document.querySelectorAll('h2')

const heading4 = h2List[h2List.length - 1]

console.log(heading2)

console.log(heading3)

console.log(heading4)

console.log(h2List)

console.dir(heading.id)

console.dir(heading.textContent)

setTimeout(() => {
	addStylesTo(heading, 'JavaScript')
}, 1500)

setTimeout(() => {
	addStylesTo(heading2, 'И всё получится', 'yellow', '2rem')
}, 4500)

/*
setTimeout(() => {
	addStylesTo(heading3, 'Практикуйся', 'blue')
}, 3000)

*/
const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
	event.preventDefault()
	console.log(event.target.getAttribute('href'))
	const url = event.target.getAttribute('href')

	window.location = url
})
setTimeout(() => {
	addStylesTo(link, 'Практикуйся', 'blue')
}, 3000)

function addStylesTo(node, text, color = 'red', fontSize) {
	node.textContent = text
	node.style.color = color
	node.style.textAlign = 'center'
	node.style.backgroundColor = 'black'
	node.style.padding = '2rem'
	node.style.display = 'block'
	node.style.width = '100%'
	if(fontSize) {
		node.style.fontSize = fontSize
	}
}

// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
	if (heading.style.color === 'red') {
		heading.style.color = '#000'
		heading.style.background = '#fff'
	} else {
		heading.style.color = 'red'
		heading.style.background = '#000'
	}
}

// target.addEventListener(type, listener[, options]); 

/*
Метод EventTarget.addEventListener() регистрирует определённый обработчик события, 
вызванного на EventTarget.

type - Чувствительная к регистру строка, представляющая тип обрабатываемого события.
listener - Объект, который принимает уведомление, когда событие указанного типа произошло. 
Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.

options - Необязательный. Объект options, который определяет характеристики объекта, 
прослушивающего событие. 
*/

heading2.addEventListener('dblclick', () => {
	if (heading2.style.color === 'yellow') {
		heading2.style.color = '#000'
		heading2.style.background = '#fff'
	} else {
		heading2.style.color = 'yellow'
		heading2.style.background = '#000'
	}
})