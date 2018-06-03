require('dotenv').config();
const Sequelize = require('sequelize');
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_URL = process.env.DB_URL;

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object

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
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.users = require('./models/users.js')(sequelize, Sequelize);
db.longgoals = require('./models/longGoals.js')(sequelize, Sequelize);
db.shortgoals = require('./models/shortGoals.js')(sequelize, Sequelize);
db.badges = require('./models/badges.js')(sequelize, Sequelize);

// Relations
db.users.hasMany(db.longgoals);
db.longgoals.hasMany(db.shortgoals);
db.users.hasMany(db.badges);

module.exports = db;