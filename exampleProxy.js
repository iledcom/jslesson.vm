// Wrapper
const withDefaultValue =(target, defaultValue = 0) => {
	return new Proxy(target, {
		get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
	})
}

const position = withDefaultValue(
	{
		x: 24,
		y: 42
	},
	0
)

//Hidden properties, реализация Области видимости свойства (private)
const withHiddenProps = (target, prefix = '_') => {
	return new Proxy(target, {
		has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
		ownKeys: obj => Reflect.ownKeys(obj)
			.filter(p => !p.startsWith(prefix)),
		get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
	})
}

const data = withHiddenProps({
	name: 'Konstantyn',
	age: 40,
	_uid: '1231231'
})

// Optimization
const userData = [
{id: 1, name: 'Konstantyn', job: 'Fullstack', age: 40},
{id: 2, name: 'Victor', job: 'Frontend', age: 27},
{id: 3, name: 'Alena', job: 'Backend', age: 32},
{id: 4, name: 'Sveta', job: 'Trainee', age: 25}
]

const index = {}
userData.forEach(i => (index[i.id] = i))

console.log(index[3])  // получим {id: 3, name: 'Alena', job: 'Backend', age: 32}

const IndexArray = new Proxy(Array, {
	construct(target, [args]) {
		const index = {}
		args.forEach(item => (index[item.id] = item))
		return new Proxy(new target(...args), {
			get(arr, prop) {
				switch(prop) {
					case 'push': 
					return item => {
						index[item.id] = item
						arr[prop].call(arr, item)
					}
					case 'findById': 
					return id => index[id]

					default:
						return arr[prop]
				}
			}
		})
	}
})

const users = new IndexArray([
	{id: 1, name: 'Konstantyn', job: 'Fullstack', age: 40},
	{id: 2, name: 'Victor', job: 'Frontend', age: 27},
	{id: 3, name: 'Alena', job: 'Backend', age: 32},
	{id: 4, name: 'Sveta', job: 'Trainee', age: 25}
])

users.push({id: 55, name: 'Vasya', job: 'Copywriter', age: 29})

console.log(users[4]) // получим {id: 55, name: 'Vasya', job: 'Copywriter', age: 29}