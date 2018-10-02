var db = require("../db/models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.UserReview.findAll({
      include: [db.User, db.Product, db.Location]
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new examples
  app.post("/api/examples", function (req, res) {
    db.UserReview.create(req.body).then(function (UserReview) {
      res.json(UserReview);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.UserReview.destroy({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};

