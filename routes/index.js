var express = require("express");

var router = express.Router();

function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = "Access denied!";
    res.redirect("/login");
  }
}

router.get("/", function(req, res) {
  res.render("index", {
    user: req.session.user
  });
});

router.get("/restricted/search", restrict, function(req, res) {
  // res.send("Wahoo! restricted area, click to <a href='/logout'>logout</a>");
  res.render("search", {
    user: req.session.user
  });
});

router.get("/logout", function(req, res) {
  req.session.destroy(function() {
    res.redirect("/");
  });
});

module.exports = router;
