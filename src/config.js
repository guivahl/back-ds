const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env');

dotenv.config({
  path: envPath,
});

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_SCHEMA: process.env.DATABASE_SCHEMA,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  SECRET_ENV: process.env.SECRET_ENV,
  BRCRYPT_SALT: process.env.BRCRYPT_SALT || 10,
  AWS_BUCKET: process.env.AWS_BUCKET,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
};
