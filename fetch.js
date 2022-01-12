const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    //return response.text()
    if(response.ok) { // ok - это флаг
      return response.json()
    }
    return response.json().then(error => {
      const e = new Error('Something went wrong')
      e.data = error
      throw e
    })
  })
}

const body = {
  name: 'Konstantyn',
  age: 40
}

/*
// GET
sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))
*/
// POST
sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))