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

  app.get("restricted/search", function (req, res){
    res.render("search");
  });


  // Load example page and pass in an example by id
  app.get("/example/:location/:product", function (req, res) {

    var locationID = req.params.location;
    var productID = req.params.product;
    var emptySQLNumber = 0;
    var dataArray = [];
    
    function median(values) {
      values.sort(function (a, b) {
        return a - b;
      });

      if (values.length === 0) return 0

      var half = Math.floor(values.length / 2);

      if (values.length % 2)
        return values[half];
      else
        return (values[half - 1] + values[half]) / 2.0;
    }

    db.UserReview.findAll({
      where: { 
        LocationID: locationID,
        ProductID: productID
       }
    }).then(function (dbExamples) {
      for (var i = 0; i < dbExamples.length; i++) {
        emptySQLNumber += parseInt(dbExamples[i].price);
        dataArray.push(parseInt(dbExamples[i].price));
        console.log(emptySQLNumber);
      }
      //Data Array
      console.log(dataArray+" Data Array");
      //Median Functionality
      var medianDisplay=median(dataArray);
      //Average Functionality
      var avg = emptySQLNumber / dbExamples.length;
      //Max Functionality
      var max = Math.max(...dataArray);
      //Min Functionality
      var min = Math.min(...dataArray);
      res.render('example', {
        example: dbExamples[0],
        avg: parseFloat(avg).toFixed(2),
        median: medianDisplay,
        max: max,
        min: min
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
