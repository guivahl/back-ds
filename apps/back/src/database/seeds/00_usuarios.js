const HashService = require('../../services/HashService');

exports.seed = async function (knex) {
  const usuarios = [
    { nome: 'Guilherme dos Santos Vahl', email: 'gdsvahl@inf.ufpel.edu.br', senha: HashService.generateHash('senha123') },
    { nome: 'Marcelo Dias', email: 'marcelo.sdias@inf.ufpel.edu.br', senha: HashService.generateHash('senha123') },
  ];

  await knex('usuarios').del();

  await knex('usuarios').insert(usuarios);
};
