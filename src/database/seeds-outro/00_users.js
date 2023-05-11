const HashService = require('../../services/HashService');

exports.seed = async (knex) => {
  const users = [
    { name: 'Administrador', email: 'adm@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Guilherme dos Santos Vahl', email: 'gdsvahl@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Marcelo Dias', email: 'marcelo.sdias@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Leandro Weber Tavares', email: 'lwtavares@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Alessandra Rosa Galvão', email: 'argalvao@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Murillo Aleixo Mota', email: 'mamota@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Leonardo dos Santos Guths', email: 'ldsguths@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Bruno da Silva Volcan', email: 'bdsvolcan@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'André du Bois', email: 'adubois@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Larissa Freitas', email: 'larissa@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Cristiano Flores dos Santos', email: 'cfdsantos@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Rafael Piccin Torchelsen', email: 'rafael.torchelsen@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Marilton Sanchotene Aguiar', email: 'marilton@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Guilherme Ribeiro Corrêa', email: 'gcorrea@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Renata Hax Sander Reiser', email: 'reiser@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'Ulisses Brisolara Corrêa', email: 'ulisses@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'User sem propostas', email: 'aaa@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'User com proposta, sem reviews e no periodo de submissao', email: 'testeenviosubmissao1@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'User com proposta, sem reviews e fora do periodo de submissao', email: 'testeenviosubmissao2@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },
    { name: 'User com proposta, com reviews, uma aprovada e uma null, e dentro do periodo de ressubmissao', email: 'testeenviosubmissao3@inf.ufpel.edu.br', password: HashService.generateHash('senha123') },

  ];

  await knex('users').del();

  await knex('users').insert(users);
};
