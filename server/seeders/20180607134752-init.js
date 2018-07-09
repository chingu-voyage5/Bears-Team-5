

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('user', [{
    username: 'John',
    email: 'johnDoe@test.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('user', [{
      username: 'John',
    }]);
  },
};
