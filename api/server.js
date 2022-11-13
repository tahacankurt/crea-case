let jsonServer = require('json-server')
let server = jsonServer.create()
let router = jsonServer.router('db.json')
let middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
