const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    { timestamps: false, tableName: 'users' }
  );

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: 'sellerId',
      as: 'seller'
    });
    User.hasMany(models.Sale, {
      foreignKey: 'userId',
      as: 'customer'
    })
  }

  return User;
};

module.exports = User;