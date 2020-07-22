<h2 align="center">Sumário</h2>

 - [Iniciando o Projeto](#iniciando-o-projeto)
 
 - [Instalando o Nunjucks](#instalando-o-nunjucks)
 
 - [Páginas Dinâmicas com Nunjucks](#section)
 
 - [Importando e Exportando do JavaScript](#importando-e-exportando-do-javascript)

## Iniciando o projeto
`npm init -y`

neste passo será criado um arquivo, chamado `package.json`.

### Instalando o express
`npm install express`

agora irá aparecer uma pasta chamada, "node_modules".

### Criando e iniciando um servidor utilizando express
`const express = require('express')` Importand o express  no seervidor

`const server = express()` Executando o Express

`server.listen(5000, function() {
    console.log('server is runing')     //receberá alteração
})`

### Criando rotas 
`server.get("/", function(req, res) {
    return res.send("Opa")              //receberá alteração
})`

### Instlando Nodemon
`npm install -D nodemon`

Em seguida ir até o arquivo package.json e alterar o script, start para "nodemon server.js"

Pronto, seu arquivo será atualizado automaticamente após algumas alterações no projeto.

## Instalando o Nunjucks
`npm install nunjucks`

### Configurando a template engine
`const nunjucks = require('nunjucks')` importando o nunjucks

`server.set("view engine", "html")` setando a template engine para visualizar os arquivos html

`nunjucks.configure("views", {
    express: server              
})`
//primeiro termo: é o caminho (pasta) de onde virão os arquivos "html" ou "njk" (futuramente)
//segundo termo: opções em formato de objeto, onde será declarado o uso do express e a variável que está sendo usada para tal

### Renderizando index
onde anteriormente tinhamos o caminho do `server.get("/"`, mostrando o "opa" na tela com o `return res.send("Opa")`, iremos retornar `return res.render("index")` sem ser necessário o".html" no final

### Configurando a pasta public
Como foi notado anteriormente o css não foi carregado junto ao index.html, isso pq os arquivos estáticos não foram configurados ainda. para isso usamos a seguinte configuração no nosso servidor:
`server.use(express.static)`

### Configurando demais Rotas no backend e no html
É necessário observar como estarão os links no html se estão de acordo com backend, tal como o 'hrf' do index será a "/" os demais links iniciaram também com "/".

## <a name='section'><a/>Páginas Dinâmicas com Nunjucks
Inicialmente será criado um arquivo na pasta "views", chamada de layout (nome sugerido) a qual será a base de toda aplicação. Em seguida no layout será colado todo conteúdo do index, prferencialmente e apagar todo conteúdo que não se repete nas demais páginas e marcar com um block essas áreas e nomeando-as como no exemplo a seguir.
`{% block content %}`
`{% endblock %}`

No início das demais páginas, será implementado um código nunjucks para que este carregue o html previamente montado da página layout.
`{% extends "layout.html" %}`

No conteúdo que não está no layout, será envolto pela "marcação" do nunjucks que também foi previamente marcado no "layout.html"

Caso queira marcar um conteúdo como padrão se o mesmo não apresentar em alguma página como a tag `<title>`, isso será feito da seguinte forma:
``` {% block head %}
        <title>Título Padrão</title>
    {% endblock %}
```

### Configurando arquivos .njk
Para ficar claro e facilitar a visualização no código, vamos configurar no engine para visualizar os arquivos .njk. Para isso vamos configurar nosso servidor que anteriormente estava lendo o html, da seguinte forma:
`server.set("view engine", "njk")`
E em seguida renomear os arquivos .html em .njk

### Configuração da extensão Nunjucks Template para o VS Code
Para a melhor visualização e utilização do html nos arquivos nunjucks vamos configurar da seguinte forma:
 - ctrl + shift + P
 - Open settings (JSON)
 - colar o seguinte código:
```    "emmet.includeLanguages": {
        "njk": "html"
    },
```

## Importando e Exportando do JavaScript
Crinado um arquivo `data.js` na raiz do projeto, nós criaremos exportamos um array:
```module.exports = [
    {
        id: "Ana"
        etc:...
```

### Passando os dados para o Frontend
Após criar o array com os dados, é necessário importar o mesmo para o backend, fazendo uma requisição e guardando em uma variável.
`const data = require("./data")`

Em seguida, é enviada essa array "na rota" da página que usará esses dados. No exemplo a seguir, o nome da página será "home".
```server.get("/", function(req, res) {
    return res.render('home', {datas})
```
E por fim são passados as variáveis pelo Nunjucks e utilizando um laço, caso tenhmos a necessidade. No exemplo a seguir contiuaremos com a lógica na qual o array que foi passado anteriormente foi chamado de `datas`.
```
{% for data in datas %}
<div class="prato">
    <img src="assets/{{data.img}}.png" alt="{{data.title}}">
```

## Página de conteúdo Único
