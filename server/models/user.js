"use strict"

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    google_id: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
  }, {
    underscored: true,
  })

  User.associate = models => {
    User.hasMany(models.longgoal)
  }

  return User
}
