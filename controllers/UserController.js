var mongoose = require("mongoose");
var User = require("../models/User");
var contactController = require("../controllers/ContactController.js");
var userController = {};

userController.login = function(req, res) {
    User.findOne({"username" : req.body.username}).exec(function (err, contact) {
      if (err) {
        res.render("../views/pages/contacts",{message: "Password validation failed"});
      } else if(contact && contact.password === req.body.password){
        contactController.list(req, res);
      } else { 
        res.render("../views/pages/contacts",{message: "Password validation failed"});
      }
    });
  };

module.exports = userController;
