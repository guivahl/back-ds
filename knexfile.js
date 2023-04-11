const {
  DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_SCHEMA,
} = require('./src/config');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: DATABASE_HOST,
      database: DATABASE_SCHEMA,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },
};
