var express = require("express");

var app = express();
const PORT = process.env.PORT || 3000;

if (process.env.PORT) {
  app.use(function (req, res, next) {
    if (req.headers["x-forwarded-proto"] === "http") {
      console.log("All good.");
      next();
    } else {
      console.log("Redirecting...");
      res.redirect("http://" + req.hostname + req.url);
    }
  });
}

app.use(express.static("public"));

app.listen(PORT, function () {
  console.log("Express server running on port " + PORT + "...");
});
