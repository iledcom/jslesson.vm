// DOM

const heading = document.getElementById('hello')

// const heading2 = document.getElementsByTagName('h2') - устарел
// const heading2 = document.getElementsByClassName('h2-class') - устарел

// const heading2 = document.querySelector('h2-class')

const heading2 = document.querySelector('.h2-class')

console.log(heading2)

console.dir(heading.id)

console.dir(heading.textContent)

setTimeout(() => {
	addStylesTo(heading)
}, 1500)

function addStylesTo(node) {
	node.textContent = 'Changed from JavaScript!'
	node.style.color = 'red'
	node.style.textAlign = 'center'
	node.style.backgroundColor = 'blue'
	node.style.padding = '2rem'
}