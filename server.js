const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const datas = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: false
})

server.get("/", function(req, res) {
    return res.render('home', {datas})
})
server.get("/receitas", function(req, res) {
    return res.render('receitas', {datas})
})
server.get("/receitas/:id", function(req, res) {
    const id = req.params.id

    const receita = datas.find( function(receita) {
        if(receita.id == id){
            return true
        } else if(!receita){
            return res. send(`Receita nã encontrada`)
        }
    })
    return res.render("prato", {receita})
})

server.get("/sobre", function(req, res) {
    return res.render('sobre')
})

server.listen(5000, function() {
    console.log("Servidor OK!")
})