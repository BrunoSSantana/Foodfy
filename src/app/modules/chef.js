const db = require('../../config/db')
const {date} = require('../../lib/utils')

module.exports = {
    all(callback) {
        db.query(`SELECT * 
        FROM students
        ORDER BY name ASC`, function(err, results){
            if(err) throw `Database Erro! ${err}`
            callback(results.rows)
        })
    },
    create(data, callback) {
        const query = `
            INSERT INTO chefs (
                name,
                avatar_url,
                create_at
            ) VALUES ($1 $2 $3 )
            RETURNING id
        `
        const values = [
            data.name,
            data.avatar_url,
            date(Date.now).iso
        ]

        db.query(query, values, function(err, results){
            if(err) throw `Database ERROR CREATE! ${err}`
            
            callback(results.rows[0])
        })
    },
    find(id, callback){
        db.query(`
        SELECT chefs.*
        FROM chefs
        WHERE chefs.id = $1`, [id], function(err, results){
            if(err) throw `Database Erro! ${err}`
            callback(results.rows[0])
        })
    },
    update(data, callback) {
        const query = `
        UPDATE chefs SET
            name=($1),
            avatar_url($2),
        WHERE id = $3
        `

        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

        db.query(query, values,function(err, results){
            if(err) throw `Database ERROR UPDATE ${err}`

            callback()
        })

    },
    delete(id, callback) {
        db.query(`DELETE FROM chefs WHERE id = $1`, [id], function(err, results){
            if(err) throw `Database ERROR DELETE! ${err}`

            return callback()
        })
    },
    paginate() {
        
    }
}