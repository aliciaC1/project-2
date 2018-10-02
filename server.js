require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require("express-session");

var loginController = require("./routes/login");
var registerController = require("./routes/register");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "shhhh, very secret"
  })
);

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    helpers: {
      errorField: function() {
        return;
      }
    }
  })
);
app.set("view engine", "handlebars");

// Routes
app.use("/login", loginController);
app.use("/register", registerController);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;
