const data = require('../data.json')
const fs = require('fs')

exports.home = function(req, res) { //ok
    return res.render('home', {recipes: data})
}
exports.recipes = function(req, res) { // ok
    return res.render('receitas', {recipes :data.recipe})
}
exports.show = function(req, res) { //ok
    const id = req.params.id

    const receita = data.recipe.find( function(receita) {
        if(receita.id == id){
            return true
        } else if(!receita){
            return res. send(`Receita não encontrada`)
        }
    })
    return res.render("receita", {receita})
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
    
    let {title, image, ingredients, preparation, information, author} = req.body
    const id = title.split(' ').join('_')
    

    data.recipe.push({
        image,
        title,
        id,
        author,
        ingredients,
        preparation,
        information
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write file err')

        return res.redirect("/admin/recipes")
    })

}

exports.edit =function(req, res) {
    return res.render('admin/edition', {recipe: data.recipe})
}
exports.put =function(req, res) {
    return res.render('home', {recipe: data.recipe})
}
exports.delete = function(req, res) {
    return res.render('home', {recipe: data.recipe})
}