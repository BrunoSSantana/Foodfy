const data = require('../data.json')
const fs = require('fs')

exports.home = function(req, res) { //ok
    return res.render('admin/listing', {recipes: data.recipe})
}
//================================================
exports.recipes = function(req, res) { // ok
    return res.render('receitas', {recipe: data.recipe})
}
//================================================
exports.show = function(req, res) { //ok
    const id = req.params.id

    const recipe = data.recipe.find( function(receita) {
        if(receita.id == id){
            return true
        } else if(!receita){
            return res.send(`Receita não encontrada`)
        }
    })
    return res.render("admin/details", {recipe})
}
//================================================
exports.about = function(req, res) { //ok
    return res.render('sobre')
}
//================================================
exports.create = function(req, res) {
    return res.render('admin/create')
}
//================================================
exports.post = function(req, res) { //ok
    const keys = Object.keys(req.body)
    
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send(`Preencha todos os campos`)
        }
    }
    
    let {title, image, ingredients, preparation, information, author} = req.body
    const id = Number(data.length + 1)

    datas.recipe.push({
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

        return res.redirect("/admin/recipes", {recipe: data.recipes})
    })

}
//================================================
exports.edit = function(req, res) {
    const {id} = req.params

    const receita = data.recipe.find((receita)=>{
        if(receita.id == id) {
            return true
        } else if(!receita) {
            return res.send(`Receita não encontrada`)
        }
    })

    return res.render("admin/edit", {recipe: receita})
}
//================================================
exports.put = function(req, res) {
    const {id} = req.body
    let index = 0

    function founfor(element, foundindex) {
        if (element.id == id){
            index = foundindex
            return element
        }
        if (!element) {
            return res.send('Receita não encontrada')
        }
    }

    const foundrecipe = data.recipe.find(founfor)

    const recipe = {
        ...foundrecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipe[index] = recipe


    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write file err')

    return res.redirect(`/admin/recipes/${id}`)//err express res.redirect
    })
}
//================================================
exports.delete = function(req, res) {
    const {id} = req.body

    const filterrecipes = data.recipe.filter(function(recipe){
        return recipe.id != id
    })

    data.recipes = filterrecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Erro na execução do processo")

        return res.redirect("/admin/recipes/")
    })
}