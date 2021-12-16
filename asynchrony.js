// Асинхронный JavaScript

console.log('Start')

/*
WindowTimers.setTimeout()

var timeoutID = window.setTimeout(func, [, delay, param1, param2, ...]);
var timeoutID = window.setTimeout(code [, delay]);

где

  timeoutID - это числовой ID, который может быть использован позже с window.clearTimeout() (en-US).
  
  func - это функция, которую требуется вызвать после delay миллисекунд.
  
  code - в альтернативном варианте применения это строка, содержащая код, который вы хотите выполнить 
  после delay миллисекунд (использовать этот метод не рекомендуется по тем же причинам, что и eval())
  
  delay  Необязательный -  задержка в миллисекундах (тысячных долях секунды), после которой будет 
  выполнен вызов функции. Реальная задержка может быть больше; см. Notes ниже.


*/
window.setTimeout(function() {
	console.log('Inside timeout, after 2000 seconds')
}, 2000)

console.log('End')