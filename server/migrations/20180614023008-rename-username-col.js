

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.renameColumn('user', 'username', 'name'),
  down: (queryInterface, Sequelize) => queryInterface.renameColumn('user', 'name', 'username'),
};
