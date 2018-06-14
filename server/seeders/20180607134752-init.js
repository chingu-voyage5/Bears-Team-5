'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      username : 'John',
      email : 'johnDoe@test.com',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('User', [{
      username :'John'
    }])
  }
};
