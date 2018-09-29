"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Sample Product",
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
