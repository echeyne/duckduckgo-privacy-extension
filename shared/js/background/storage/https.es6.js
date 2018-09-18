const Storage = require('./storage.es6')

class HTTPSStorage {
    constructor (ops) {
        this.storage = new Storage(ops)
    }

    getLists (lists) {
        return this.storage.getLists(lists)
    }
}
module.exports = new HTTPSStorage({dbName: 'https', tableName: 'httpsStorage'})
