const recipe = require('../modules/recipe')

module.exports = {
    /* ----Admin----*/ 
    recipes(req, res) {//ok
        recipe.all(function(recipes){
            return res.render('admin/recipes/listing', {recipes: recipes})
        })
    },
    show(req, res) {//ok
        recipe.find(req.params.id, function(recipe){
            if(!recipe) return res.send('Recipe not Found')
            return res.render("admin/recipes/details", {recipe:recipe})
        })
    },
    create(req, res) {//ok
        return res.render('admin/recipes/create')
    },
    post(req, res) {//ok
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
    edit(req, res) {//ok
        const {id} = req.params
    
        recipe.find(req.params.id, function(recipe){
            if(!recipe) return res.send('Recipe noooot found')

            return res.render("admin/recipes/edit", {recipe: recipe})
        })    
    },
    put(req, res) {//ok

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
    delete(req, res) {//pk
        recipe.delete(req.body.id, function(){
            return res.redirect('/recipes')
        })
    },
    /*----Users----*/ 
    home(req, res) {//ok
        recipe.all(function(recipes){
            return res.render('home', {recipes: recipes})
        })
    },
    about(req, res) {//ok
        return res.render('sobre')
    },
    showUsers(req, res) {//ok
        recipe.find(req.params.id, function(recipe){
            return res.render("receita", {recipe: recipe})
        })
    },
    recipesUsers(req, res) {//ok
        recipe.all(function(recipes){
            
            return res.render('receitas', {recipes: recipes})
        })
    }
}