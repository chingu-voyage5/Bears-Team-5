module.exports = (sequelize, DataTypes) => {
  const ShortGoal = sequelize.define("shortgoal", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      required: true,
    },
    completed: DataTypes.BOOLEAN,
    date_completed: DataTypes.DATE,
    longgoal_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
  }, {
    underscored: true,
  })

  ShortGoal.associate = models => {
    ShortGoal.belongsTo(models.longgoal, {
      foreignKey: "longgoal_id",
      targetKey: "id",
    })
  }

  return ShortGoal
}
