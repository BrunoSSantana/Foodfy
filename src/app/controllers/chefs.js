const data = require('../../data.json')
const fs = require('fs')
module.exports = {
    /* === Admin === */ 
    chefs(req, res) { // ok
        return res.render('admin/chefs/listing', {chefs: data.chef})
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
        return res.render('admin/chefs/create')
    },
    post(req, res) { //ok
        const keys = Object.keys(req.body)
        
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send(`Preencha todos os campos`)
            }
        }
        
        let {title, image, ingredients, preparation, information, author} = req.body
        const id = Number(data.length + 1)
    
        datas.chef.push({
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
    
            return res.redirect("/admin/chefs", {chef: data.chefs})
        })
    
    },
    edit(req, res) {
        const {id} = req.params
    
        const receita = data.chef.find((receita)=>{
            if(receita.id == id) {
                return true
            } else if(!receita) {
                return res.send(`Receita não encontrada`)
            }
        })
    
        return res.render("admin/chefs/edit", {chef: receita})
    },
    put(req, res) {
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
    
        const foundchef = data.chef.find(founfor)
    
        const chef = {
            ...foundchef,
            ...req.body,
            id: Number(req.body.id)
        }
    
        data.chef[index] = chef
    
    
        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send('Write file err')
    
        return res.redirect(`/admin/chefs/${id}`)//err express res.redirect
        })
    },
    delete(req, res) {
        const {id} = req.body
    
        const filterchefs = data.chef.filter(function(chef){
            return chef.id != id
        })
    
        data.chef = filterchefs
    
        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
            if(err) return res.send("Erro na execução do processo")
    
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
