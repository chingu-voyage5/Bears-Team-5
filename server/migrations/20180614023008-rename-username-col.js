'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.renameColumn('user', 'username', 'name');
  },
  down: (queryInterface, Sequelize) => {
   return queryInterface.renameColumn('user', 'name', 'username');
  }
};