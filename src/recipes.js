const datas = require('../data.json')
const fs = require('fs')

exports.home = function(req, res) { //ok
    return res.render('home', {datas})
}
exports.recipes = function(req, res) { // ok
    return res.render('receitas', {datas})
}
exports.show = function(req, res) { //ok
    const id = req.params.id

    const receita = datas.find( function(receita) {
        if(receita.id == id){
            return true
        } else if(!receita){
            return res. send(`Receita não encontrada`)
        }
    })
    return res.render("prato", {receita})
}
exports.about = function(req, res) { //ok
    return res.render('sobre')
}

exports.create = function(req, res) {
    return res.render('admin/create')
}

exports.post = function(req, res) { //ok
    const keys = Object.keys(req.body)
    
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send(`Preencha todos os campos`)
        }
    }
    
    let {id, image, ingredients, preparation, information} = req.body

    datas.recipe.push({
        id,
        image,
        ingredients,
        preparation,
        information
    })

    fs.writeFile("data.json", JSON.stringify(datas, null, 2), function(err) {
        if (err) return res.send('Write file err')

        return res.render('home', {datas})
    })

}

exports.edit =function(req, res) {
    return res.render('admin/edition', {data: datas})
}
exports.put =function(req, res) {
    return res.render('home', {data: datas})
}
exports.delete = function(req, res) {
    return res.render('home', {data: datas})
}