require('dotenv').config()

module.exports = {
  development: {
    username: 'dev_user',
    password: 'dev_user',
    database: 'database_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
    migrationStorage: 'json',
    migrationStoragePath: 'sequelizeMeta.json',
  },
  test: {
    username: 'dev_user',
    password: 'dev_user',
    database: 'test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_URL,
    dialect: 'postgres'
  }
}