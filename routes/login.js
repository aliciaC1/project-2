var express = require("express");
var hash = require("pbkdf2-password")();

//var db = require("../db/models");

var router = express.Router();

router.get("/login", function(req, res) {
  console.log("Generating password...");
  hash({ password: "john" }, function(err, pass, salt, hash) {
    res.json({
      pass: pass,
      salt: salt,
      hash: hash
    });
  });
});

module.exports = router;
