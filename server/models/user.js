'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      required: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    google_id: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    underscored: true
  });
    User.associate = function(models) {
      User.hasMany(models.longgoals, {
        foreignKey: 'user_id',
      });
      User.hasMany(models.badges, {
        foreignKey: 'user_id',
      });
    };
  return User;
};
