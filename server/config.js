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

// in theory, we should have a separate file for our "models"
// which are our tables - users.js, longGoals.js, dailyGoals.js
// relation: user can have many LTG and LTG can have many DG

// user:
// userID
// username
// pwd

// LTG:
// UserID
// LTG ID
// description

// DG:
// LTG ID

/*

const dailyGoal = sequelize.define('task', {
  title: { type: Sequelize.STRING, unique: true, allowNull: false },
  description: Sequelize.TEXT,
  completeStatus: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
})
*/