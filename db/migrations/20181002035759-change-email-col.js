"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn("users", "email", {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn("users", "email", {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};
