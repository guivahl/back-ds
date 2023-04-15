exports.seed = async (knex) => {
  const admins = [
    { userEmail: 'adm@inf.ufpel.edu.br' },

  ];

  await knex('admins').del();

  await knex('admins').insert(admins);
};
