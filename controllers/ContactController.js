var mongoose = require("mongoose");
var Contact = require("../models/Contact");

var contactController = {};

// Show list of contacts
contactController.list = function(req, res) {
  Contact.find({}).exec(function (err, contacts) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/pages/contacts/index", {contacts: contacts});
    }
  });
};

// Show contact by id
contactController.show = function(req, res) {
  Contact.findOne({_id: req.params.id}).exec(function (err, contact) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/pages/contacts/show", {contact: contact});
    }
  });
};

// Create new contact
contactController.create = function(req, res) {
  res.render("../views/pages/contacts/create");
};

// Save new contact
contactController.save = function(req, res) {
  var contact = new Contact(req.body);

  contact.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/pages/contacts/create");
    } else {
      res.redirect("/pages/contacts/show/"+contact._id);
    }
  });
};

// Edit an contact
contactController.edit = function(req, res) {
  Contact.findOne({_id: req.params.id}).exec(function (err, contact) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/pages/contacts/edit", {contact: contact});
    }
  });
};

// Update an contact
contactController.update = function(req, res) {
  Contact.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, mobile: req.body.mobile, email: req.body.email}}, { new: true }, function (err, contact) {
    if (err) {
      console.log(err);
      res.render("../views/pages/contacts/edit", {contact: req.body});
    }
    res.redirect("/pages/contacts/show/"+contact._id);
  });
};

// Delete an contact
contactController.delete = function(req, res) {
  Contact.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      res.redirect("/pages/contacts/index");
    }
  });
};

module.exports = contactController;
