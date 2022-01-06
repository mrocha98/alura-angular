const http = require('http')
const app = require('./config/express')
require('./config/database')

http.createServer(app).listen(3000, function () {
  console.log('Servidor escutando na porta: ' + this.address().port)
})
