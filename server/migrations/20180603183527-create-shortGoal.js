

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shortGoal', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.STRING,
    },
    completed: {
      type: Sequelize.BOOLEAN,
    },
    date_completed: {
      type: Sequelize.DATE,
    },
    longgoal_id: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
    deleteAt: {
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('shortGoal'),
};
