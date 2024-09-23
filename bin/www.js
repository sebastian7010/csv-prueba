const app = require('./../index')
const http = require('http')
const port = process.env.PORT

app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('error', () => {
    console.log('error conectado el server')
})
server.on('listening', () => {
    console.log('server on!!')
})