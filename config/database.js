const Datastore = require('nedb')
const dbName = 'data.db'
let db

if (!db) {
  db = new Datastore({
    filename: dbName,
    autoload: true
  })
  console.log(`Banco ${dbName} pronto para uso`)
}

module.exports = db
