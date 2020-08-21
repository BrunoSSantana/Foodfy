const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./src/routes/routes')
const methodOverride = require('method-override')//respossável por adicionar os métodos put e delete

const server = express()

server.use(express.urlencoded({extended: true}))//faz funcionar o req.body
server.use(express.static('public'))
server.use(methodOverride('_method')) //antes das rotas smp
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.listen(5000, function() {
    console.log("Servidor OK!")
})