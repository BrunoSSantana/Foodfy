const fs = require('fs')
const datas = require("./data")

exports.index = function(req, res) {
    return res.render('home', {datas})
}

exports.show = function(req, res){}

