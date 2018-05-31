require('dotenv').config()

const Sequelize = require('sequelize');

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_URL = process.env.DB_URL;

console.log('is this the db url', DB_URL);

const sequelize = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
  host: DB_URL,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
