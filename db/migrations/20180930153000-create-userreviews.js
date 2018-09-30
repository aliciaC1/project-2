"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("userreviews", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          min: 0.0
        }
      },
      description: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      ProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      LocationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "locations",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      }
    });
  },
  down: function(queryInterface) {
    return queryInterface.dropTable("userreviews");
  }
};
