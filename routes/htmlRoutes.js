var db = require("../db/models");

module.exports = function(app) {
  // Load index page
  app.get("/index", function(req, res) {
    db.UserReview.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

//  search

// app.get("/search", function (req, res){
//   res.render("search");
// });
  app.get("restricted/search", function (req, res){
    res.render("search");
  });


  // Load example page and pass in an example by id
  app.get("/example", function(req, res) {
    var emptySQLNumber = 0;
    var medianArray = [];

    function median(values) {
      values.sort(function(a, b) {
        return a - b;
      });

      if (values.length === 0) {
        return 0;
      }

      var half = Math.floor(values.length / 2);

      if (values.length % 2) {
        return values[half];
      } else {
        return (values[half - 1] + values[half]) / 2.0;
      }
    }

    db.UserReview.findAll({}).then(function(dbExamples) {
      for (var i = 0; i < dbExamples.length; i++) {
        emptySQLNumber += parseInt(dbExamples[i].price);
        medianArray.push(parseInt(dbExamples[i].price));
        console.log(emptySQLNumber);
      }
      var medianDisplay = median(medianArray);
      console.log(medianArray);
      console.log(median(medianArray));
      var avg = emptySQLNumber / dbExamples.length;
      res.render("example", {
        example: dbExamples[0],
        avg: parseFloat(avg).toFixed(2),
        median: medianDisplay
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
