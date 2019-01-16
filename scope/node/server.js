const file = require('./file')

console.log(global.message)

global.message = 'Hello World'

file.sayMessage()