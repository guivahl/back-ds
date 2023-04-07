const databaseConfig = require('../../knexfile')

const database = require('knex')(databaseConfig.development)

module.exports = database