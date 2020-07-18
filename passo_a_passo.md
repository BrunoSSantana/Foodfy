## Iniciando o projeto
`npm init -y`

neste passo será criado um arquivo, chamado `package.json`

## Instalando o express
`npm install express`

agora irá aparecer uma pasta chamada, "node_modules".

## Criando e iniciando um servidor utilizando express
`const express = require('express')` Importand o express  no seervidor

`const server = express()` Executando o Express

`server.listen(5000, function() {
    console.log('server is runing')     //receberá alteração
})`

## Criando rotas 
`server.get("/", function(req, res) {
    return res.send("Opa")              //receberá alteração
})`

## Instlando Nodemon
`npm install -D nodemon`

Em seguida ir até o arquivo package.json e alterar o script, start para "nodemon server.js"

Pronto, seu arquivo será atualizado automaticamente após algumas alterações no projeto.

## Instalando o Nunjucks
`npm install nunjucks`

## Configurando a template engine
`const nunjucks = require('nunjucks')` importando o nunjucks

`server.set("view engine", "html")` setando a template engine para visualizar os arquivos html

`nunjucks.configure("views", {
    express: server              
})`
//primeiro termo: é o caminho (pasta) de onde virão os arquivos "html" ou "njk" (futuramente)
//segundo termo: opções em formato de objeto, onde será declarado o uso do express e a variável que está sendo usada para tal