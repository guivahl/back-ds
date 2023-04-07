
exports.up = (knex) => 
  knex.schema
    .createTable('usuarios', table => {
      table.increments('id')
      table.string('nome')
      table.string('email')
      table.string('senha')
    })

exports.down = (knex) => 
  knex.schema
    .dropTableIfExists('usuarios')

