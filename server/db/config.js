const Sequelize = require('sequelize');
const config = require('../../config/config');

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one 
console.log("Connecting to DB", config.host, config.database);
const sequelize = new Sequelize(config.database, config.username, config.password, {
  port: config.port,
  host: config.host,
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