const HashService = require('../../services/HashService');

exports.seed = async (knex) => {
  const users = [
    { name: 'Guilherme dos Santos Vahl', email: 'gdsvahl@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Marcelo Dias', email: 'marcelo.sdias@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Cristiano Flores dos Santos', email: 'cfdsantos@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Leandro Weber Tavares', email: 'lwtavares@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Larissa Freitas', email: 'ldsfreitas@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'ADM FAVOR RESPEITAR', email: 'adm@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Alessandra Rosa Galvão', email: 'argalvao@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Murillo Aleixo Mota', email: 'mamota@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Leonardo dos Santos Guths', email: 'ldsguths@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'André du Bois', email: 'adubois@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },

  ];

  await knex('users').del();

  await knex('users').insert(users);
};
