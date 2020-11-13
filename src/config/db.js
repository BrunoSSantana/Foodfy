const {Pool} = require("pg")

module.exports = new Pool({
    user: '',
    password: '',
    host: '',
    port: '',
    database: ''
})