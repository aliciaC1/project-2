"use strict";

module.exports = {
  up: function(queryInterface) {
    return queryInterface.bulkInsert(
      "categories",
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

  down: function(queryInterface) {
    return queryInterface.bulkDelete("categories", null, {});
  }
};
