"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Sample User",
          email: "john@doe.com",
          salt: "",
          hash: "",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
