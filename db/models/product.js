module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    basePrice: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0.0
      }
    }
  });
  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Product;
};
