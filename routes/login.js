var express = require("express");
var hash = require("pbkdf2-password")();

var db = require("../db/models");

var router = express.Router();

router.use(function(req, res, next) {
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = "";
  if (err) {
    res.locals.message = "<p>" + err + "</p>";
  }
  if (msg) {
    res.locals.message = "<p>" + msg + "</p>";
  }
  next();
});

function authenticate(email, pass, fn) {
  db.User.findOne({
    where: {
      email: email
    }
  })
    .then(function(userResult) {
      if (!userResult) {
        return fn(new Error("cannot find user"));
      }
      hash(
        {
          password: pass,
          salt: userResult.salt
        },
        function(err, pass, salt, hash) {
          if (err) {
            return fn(err);
          }
          if (hash === userResult.hash) {
            return fn(null, userResult);
          }
          return fn(new Error("invalid password"));
        }
      );
    })
    .catch(function(err) {
      console.log(err);
      return fn(new Error(err.message));
    });
}

router.get("/", function(req, res) {
  res.render("login");
});

router.post("/", function(req, res) {
  authenticate(req.body.email.trim(), req.body.password.trim(), function(
    err,
    user
  ) {
    if (user) {
      req.session.regenerate(function() {
        req.session.user = user;
        req.session.success =
          "Authenticated as " +
          user.email +
          " click to <a href='/logout'>logout</a>. " +
          " You may now access <a href='/restricted'>/restricted</a>.";
        res.redirect("/search");
      });
    } else {
      req.session.error =
        "Authentication failed, please check your username and password.";
      res.redirect("back");
    }
  });
});

router.post("/fb", function(req, res) {
  console.log("Received Facebook Access-Token: " + req.body.accessToken);
  req.session.regenerate(function() {
    req.session.user = {
      username: req.body.userId,
      name: req.body.name,
      email: req.body.email,
      accessToken: req.body.accessToken
    };
    return res.status(200).end();
  });
});

router.post("/google", function(req, res) {
  console.log("Received Google Access-Token: " + req.body.accessToken);
  res.status(200).end();
});

module.exports = router;
