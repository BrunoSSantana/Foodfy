const datas = require('../data')

exports.home = function(req, res) {
    return res.render('home', {data: datas})
}
exports.recipes = function(req, res) {
    return res.render('receitas', {data: datas})
}
exports.show = function(req, res) {
    const id = req.params.id

    const receita = datas.find( function(receita) {
        if(receita.id == id){
            return true
        } else if(!receita){
            return res. send(`Receita nã encontrada`)
        }
    })
    return res.render("prato", {receita})
}
exports.about = function(req, res) {
    return res.render('sobre')
}

exports.create = function(req, res) {
    return res.render('admin/create')
}
exports.post = function(req, res) {
    return res.render('home', {data: datas})
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