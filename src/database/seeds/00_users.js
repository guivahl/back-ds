const HashService = require('../../services/HashService');

exports.seed = async (knex) => {
  const usuarios = [
    { name: 'Guilherme dos Santos Vahl', email: 'gdsvahl@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Marcelo Dias', email: 'marcelo.sdias@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
  ];

  await knex('users').del();

  await knex('users').insert(usuarios);
};
