'use strict';

module.exports = (sequelize, DataTypes) => {
  const LongGoal = sequelize.define('longgoal', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      required: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    underscored: true
  });

  LongGoal.associate = function(models) {
    LongGoal.hasMany(models.shortgoal, {
      foreignKey: 'longgoal_id',
    });
  };;
  return LongGoal;
};