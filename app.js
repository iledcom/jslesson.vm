// Event Loop

const timeout = setTimeout(() => {
 console.log('After timeout')
}, 2500)

//clearTimeout(timeout)

const interval = setInterval(() => {
 console.log('After timeout')
}, 1000)

clearInterval(interval)

const delay = (callback, wait = 1000) => {
	setTimeout(callback, wait)
}

delay(() => {
	console.log('After 2 seconds')
})

// Промисы

const delay2 = (wait = 1000) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			//resolve()
			reject('Something went wrong, please try again.')
		}, wait)
	})
	return promise
}

/*
delay2(2500)
	.then(() => {
		console.log('After two seconds')
	})
	.catch(err => console.error('Error: ', err))
	.finally(() => console.log('Finally'))
*/
const getData = () => new Promise(resolve => resolve([
	1, 1, 2, 3, 5, 8, 13
	]))

//getData().then(data => console.log(data))

async function asyncExample() {
	try {
		await delay2(3000)
		const data = await getData()
		console.log('Data: ', data)
	} catch (e) {
		console.log(e)
	}	finally {
		console.log('Finally')
	}
}

asyncExample()