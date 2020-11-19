const recipe = require('../modules/recipe')

module.exports = {
    /* ----Admin----*/ 
    recipes(req, res) { // ok
        recipe.all(function(recipes){
            return res.render('admin/recipes/listing', {recipes: recipes})
        })
    },
    show(req, res) { //ok
        recipe.find(req.body.id, function(recipe){
            if(!recipe) return res.send('Student not Found')
            return res.render("admin/recipes/details", {recipe:recipe})
        })
    },
    create(req, res) {
        return res.render('admin/recipes/create')
    },
    post(req, res) { //ok
        const keys = Object.keys(req.body)
        
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send(`Preencha todos os campos`)
            }
        }
        
        recipe.create(req.body, function(recipe){
            return res.redirect(`/recipes/${recipe.id}`)
        })
    
    },
    edit(req, res) {
        const {id} = req.params
    
        recipe.find(req.params.id, function(recipe){
            if(!recipe) return res.send('Recipe noooot found')

            return res.render("admin/recipes/edit", {recipe: recipe})
        })    
    },
    put(req, res) {

        const keys = Object.keys(req.body)
        
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send(`Preencha todos os campos`)
            }
        }

        recipe.update(req.body, function(){
            return res.redirect(`students/${req.body.id}`)
        })
    },
    delete(req, res) {
        const {id} = req.body
    
        const filterrecipes = data.recipe.filter(function(recipe){
            return recipe.id != id
        })
    
        data.recipe = filterrecipes
    
        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
            if(err) return res.send("Erro na execução do processo")
    
            return res.redirect("/admin/recipes/")
        })
    },
    /*----Users----*/ 
    home(req, res) { //ok
        return res.render('home', {recipes: data.recipe})
    },
    about(req, res) { //ok
        return res.render('sobre')
    },
    showUsers(req, res) { //ok
        const id = req.params.id
    
        const recipe = data.recipe.find( function(receita) {
            if(receita.id == id){
                return true
            } else if(!receita){
                return res.send(`Receita não encontrada`)
            }
        })
        return res.render("receita", {recipe})
    },
    recipesUsers(req, res) { // ok
        return res.render('receitas', {recipe: data.recipe})
    }
}