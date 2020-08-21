const data = require('../data.json')
const fs = require('fs')

exports.home = function(req, res) { //ok
    return res.render('home', {recipe: datas.recipe})
}
//================================================
exports.recipes = function(req, res) { // ok
    return res.render('receitas', {recipe: datas.recipe})
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
    return res.render("receita", {recipe})
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
    const id = title.split(' ').join('_')

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

    return res.render("admin/edit", {receita})
}
//================================================
exports.put = function(req, res) {
    const {title} = req.body
    const id = title.toLowerCase().split(' ').join('_')
    let index = 0

    const foundrecipe = data.recipe.find(function(recipe, foundIndex){
        if (id == recipe.id) {
            index = foundIndex
            return true
        }
    })
    
    if (!foundrecipe) {
        return res.send('Instrutor não encontrado')
    }

    const recipe = {
        ...foundrecipe,
        ...req.body,
        id
    }

    data.recipe[index] = recipe


    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write file err')

    return res.redirect({recipe}, `/admin/recipes/${id}`)//err express res.redirect
    })
}
//================================================
// exports.delete = function(req, res) {
//     const {id} = req.body

//     const filterrecipes = data.recipes.filter(function(recipe){
//         return recipe.id != id
//     })

//     data.recipes = filterrecipes

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
//         if(err) return res.send("Erro na execução do processo")

//         return res.redirect("/admin/recipes/", {recipe: data})
//     })
// }