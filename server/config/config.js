require('dotenv').config();

const { NODE_ENV } = process.env;

const configs = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_URL,
    port: process.env.DEV_DB_PORT,
    dialect: 'postgres',
    migrationStorage: 'json',
    migrationStoragePath: 'sequelizeMeta.json',
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_URL,
    port: process.env.TEST_DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_URL,
    port: process.env.PROD_DB_PORT,
    dialect: 'postgres',
  },
};

if (
  NODE_ENV !== 'production'
  && NODE_ENV !== 'test'
  && NODE_ENV !== 'development'
) {
  throw Error(`Bad NODE_ENV. Only accepted are: production, test and development. Got ${NODE_ENV}`);
}
console.log(`Running in NODE_ENV: ${NODE_ENV}`);
module.exports = {
  ...configs,
  default: configs[NODE_ENV],
};
