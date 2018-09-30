"use strict";

module.exports = {
  up: function(queryInterface) {
    return queryInterface.bulkInsert(
      "locations",
      [
        {
          name: "Sample Store",
          address: "1234 Broadway",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: function(queryInterface) {
    return queryInterface.bulkDelete("locations", null, {});
  }
};
