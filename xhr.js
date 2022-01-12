/*
XMLHttpRequest(XHR)

XMLHttpRequest это API, который предоставляет клиенту функциональность для обмена данными 
между клиентом и сервером. Данный API предоставляет простой способ получения данных 
по ссылке без перезагрузки страницы. Это позволяет обновлять только часть веб-страницы 
не прерывая пользователя.  

XMLHttpRequest используется в AJAX запросах и особенно в single-page приложениях.

XMLHttpRequest изначально был разработан Microsoft и позже заимствован Mozilla, Apple, 
и Google. Сейчас он стандартизирован WHATWG. Несмотря на своё название, XMLHttpRequest 
может быть использован для получения любых типов данных, не только XML, и поддерживает 
протоколы помимо HTTP (включая file и ftp).

Чтобы начать работать с XMLHttpRequest, выполните этот код:

var myRequest = new XMLHttpRequest();

Конструктор
XMLHttpRequest()

Конструктор создаёт объект XMLHttpRequest. 
Он должен быть вызван перед обращением к любому методу класса.

XMLHttpRequest (
  JSObject objParameters
);

Параметры (нестандартные)

objParameters
    Вы можете использовать два флага:

    mozAnon
        Boolean: Использование этого флага уберёт из запроса заголовки origin, 
        и user credentials. Кроме этого, куки не будут отправлены в запросе, 
        если только они не будут добавлены к запросу специально, через метод 
        setRequestHeader.
    mozSystem
        Boolean: Если выставить этот флаг в значение true то это позволит делать 
        cross-доменные запросы без необходимости получения специальных заголовков 
        со стороны сервера (CORS). 
        Для использования этого флага необходимо использовать дополнительный флаг
        mozAnon: true, поскольку для отправки запроса на другой домен, 
        нельзя использовать куки и креды пользователя. Этот флаг работает только с 
        привилегированными (одобренными) приложениями; он не сработает с произвольно 
        загруженными страницами.

Методы

open() - Инициализирует запрос. Этот метод может (и должен) быть вызван из 
JavaScript-кода; если необходимо вызвать запрос из нативного кода, 
то нужно использовать метод openRequest().

Примечание: Вызов этого метода из активного запроса (если метод open() 
или openRequest() уже были вызваны) эквивалентно вызову метода abort().

void open(
   DOMString method,
   DOMString url,
   optional boolean async,
   optional DOMString user,
   optional DOMString password
);

method
    HTTP метод отправки сообщения - "GET", "POST", "PUT", "DELETE", и проч.. 
    Ignored for non-HTTP(S) URLs.

url
    URL адрес, на который будет отправлено сообщение.

async
    Необязательный boolean параметр, по умолчанию равный true. Определяет, 
    будет ли запрос отправлен асинхронно. Если значение равно false, метод send() 
    вернёт ответ в общем потоке работы приложения (иначе говоря, приложение зависнет 
    на некоторое время), в противном случае, ответ может быть получен только при 
    помощи определённых  обработчиков событий. В случае, если используется отправка 
    multipart запроса, то этот атрибут должен быть true, или будет выброшено исключение.

user
    Необязательный параметр, используется для аутентификации пользователя. 
    По умолчанию, пустая строка.

password
    Необязательный параметр, используется для аутентификации пользователя. 
    По умолчанию пустая строка.

abort() - Отменяет запрос, если он был отправлен.

getAllResponseHeaders() - Возвращает все заголовки ответа как строку, 
или null если ответ не был получен. Для multypart запросов возвращает 
заголовки текущей части запроса, а не всего канала.

getResponseHeader() - Возвращает значение указанного заголовка из полученного ответа, 
или null в случает если ответ не получен, или такого заголовка в ответе нет. 
Возвращаемая строка имеет кодировку UTF.

Примечание: Если в ответе есть заголовки с одним названием, 
то значения этих заголовков будут объеденены в одну строку, 
разделённую запятой и пробелом.

overrideMimeType()

Переопределяет MIME тип, получаемый от сервера. Это может быть использовано, 
например, для того чтобы получить и распарсить данные в формате text/xml, 
даже, если сервер сообщает что это не так. Этот метод должен быть вызван 
перед вызовом метода send().

void overrideMimeType(DOMString mimetype);

send() - Отправляет запрос. Если запрос асинхронный (а по умолчанию это так), 
этот метод вернёт значение сразу после того как метод вызван.

Примечание переводчика: в этом случае, в ответе не будет содержаться информации, 
которая пришла с сервера, поскольку она ещё не пришла. Для того чтобы получить 
эту информацию, нужно слушать события загрузки, или использовать promise.

Если запрос синхронный, то метод вернёт значение только после того, 
как придёт запрос от сервера.

Примечание: все необходимые обработчики событий должны быть установлены 
перед вызовом send()

setRequestHeader() - Устанавливает значение заголовка HTTP-запроса. 
Вы должны вызвать setRequestHeader() после open(), но перед send(). 
Если данный метод вызывается несколько раз с одним и тем же заголовком, 
все значения объединяются в один заголовок запроса.

void setRequestHeader(
   DOMString header,
   DOMString value
);


header
    Имя заголовка, значение которого будет установлено.
value
    Значение, заданное как тело заголовка. 

*/

const requestURL = 'https://jsonplaceholder.typicode.com/users'

/*
const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL)  // открывает новое соединение

xhr.responseType = 'json'    // распарсить в объект

xhr.onload = () => {
    //console.log(JSON.parse(xhr.response)) // распарсить в объект
    if(xhr.status >= 400) {
        console.error(xhr.response)
    } else {
        console.log(xhr.response)
    }
    
}

xhr.onerror = () => {
    console.log(xhr.response)
}

xhr.send()
*/

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest()

        xhr.open(method, url)  // открывает новое соединение

        xhr.responseType = 'json'    // распарсить в объект
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            //console.log(JSON.parse(xhr.response)) // распарсить в объект
            if(xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))  // преобразуем объект JavaScript в строку
    })
}

/*
Метод JSON.stringify() преобразует значение JavaScript в строку JSON, 
возможно с заменой значений, если указана функция замены, или с включением 
только определённых свойств, если указан массив замены.
*/

/*
sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))
*/
const body = {
  name: 'Konstantyn',
  age: 40
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))