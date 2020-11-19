const chef = require('../modules/chef')

module.exports = {
    /*----Admin----*/ 
    chefs(req, res) { // ok

        chef.all(function(chefs){
            return res.render('/admin/chefs/listing', {chefs:chefs})
        })
    },
    show(req, res) { //ok
        const id = req.params.id
    
        const chef = data.chef.find( function(receita) {
            if(receita.id == id){
                return true
            } else if(!receita){
                return res.send(`Receita não encontrada`)
            }
        })
        return res.render("admin/chefs/details", {chef})
    },
    create(req, res) {
        return res.render('/admin/chefs/create')
    },
    post(req, res) { //ok
        const keys = Object.keys(req.body)
        
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send(`Preencha todos os campos`)
            }
        }
        
        chef.create(req.body, function(chef){
            return res.redirect(`/admin/chefs/${chef.id}`)
        })
    
    },
    edit(req, res) {
        chef.find(req.params.id, function(chefs){
            if(!chefs) return res.send("Chef not found!!!")
            
            return res.render("admin/chefs/edit", {chef: chefs})
        })
    
    },
    put(req, res) {
        
        const keys = Object.keys(req.body)

        for (key of keys) {
            if(req.body[key] == ""){
                return res.send(`Preeencha todos os campos`)
            }
        }

        chef.update(req.body, function(){
            return res.redirect(`/admin/chefs/${req.body.id}`)
        })
    },
    delete(req, res) {

        chef.delete(req.body.id, function(){
            return res.redirect("/admin/chefs/")

        })

    },
    /*----Users----*/ 
    home(req, res) { //ok
        return res.render('home', {chefs: data.chef})
    },
    about(req, res) { //ok
        return res.render('sobre')
    },
    showUsers(req, res) { //ok
        const id = req.params.id
    
        const chef = data.chef.find( function(receita) {
            if(receita.id == id){
                return true
            } else if(!receita){
                return res.send(`Receita não encontrada`)
            }
        })
        return res.render("receita", {chef})
    },
    chefsUsers(req, res) { // ok
        return res.render('receitas', {chef: data.chef})
    }
}
