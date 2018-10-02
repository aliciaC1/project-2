module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Category;
};
