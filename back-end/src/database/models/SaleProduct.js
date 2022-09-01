const SaleProduct = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('SaleProduct', {
        saleId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            foreignKey: true,
          },
          productId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            foreignKey: true,
          },
          quantity: {
            allowNull: false,
            type: DataTypes.INTEGER,
          }
    }, {timestamps: false, underscored: true, tableName: 'sales_products'});

    SaleProduct.associate = (models) => {
      models.Product.belongsToMany(models.Sale, {
        as: 'sale',
        through: SaleProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
      });

      models.Sale.belongsToMany(models.Product, {
        as: 'products',
        through: SaleProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
      })
    }
  
    return SaleProduct;
  };
  
  module.exports = SaleProduct;
