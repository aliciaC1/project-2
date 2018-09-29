"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Sample Category",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
