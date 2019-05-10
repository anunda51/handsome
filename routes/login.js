var express = require("express");
var router = express.Router();
var user = require("../models/mst_employee");

/* GET login page. */
router.get("/login", function(req, res, next) {
  res.render("login.ejs", { error: "พบข้อมูล" });
});

// login
router.route("/welcome").post((req, res) => {
  if (req.body.user && req.body.password) {
    user
      .findOne({ user: req.body.user })
      .then(user => {
        if (user.password === req.body.password) {
          res.render("welcome.ejs", { user: user });
        } else {
          res.render("login", { error: "ไม่พบข้อมูล" });
        }
      })
      .catch(err => {
        res.render("login", { error: "ไม่พบข้อมูล" });
      });
  }
});
module.exports = router;
