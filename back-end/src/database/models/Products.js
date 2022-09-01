const Product = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(4, 2)
      },
      url_image: {
        allowNull: false,
        type: DataTypes.STRING
      },
    }, {timestamps: false, tableName: 'products'});
  
    return Product;
  };
  
  module.exports = Product;