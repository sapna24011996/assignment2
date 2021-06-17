var express = require('express')
var router = express.Router()
var contact = require("../controllers/ContactController.js");
var user = require("../controllers/UserController.js");

router.get('/', function(req, res, next) {
  res.render('pages/home')
})

router.get('/about', function(req, res, next) {
  res.render('pages/about')
})

router.get('/contact', function(req, res, next) {
  res.render('pages/contact')
})

router.get('/projects', function(req, res, next) {
  res.render('pages/projects')
})

router.get('/services', function(req, res, next) {
  res.render('pages/services')
})

router.get('/contacts', function(req, res, next) {
  res.render('pages/contacts',{message: "Please login to access this page"})
})

router.post('/login', function(req, res, next) {
  user.login(req,res);
})

router.get('/pages/contacts/index', function(req, res) {
  contact.list(req, res);
});

router.get('/pages/contacts/', function(req, res) {
  contact.list(req, res);
});

router.get('/pages/contacts/show/:id', function(req, res) {
  contact.show(req, res);
});

router.get('/pages/contacts/create', function(req, res) {
  contact.create(req, res);
});

router.post('/pages/contacts/save', function(req, res) {
  contact.save(req, res);
});

router.get('/pages/contacts/edit/:id', function(req, res) {
  contact.edit(req, res);
});

router.post('/pages/contacts/update/:id', function(req, res) {
  contact.update(req, res);
});

router.post('/pages/contacts/delete/:id', function(req, res, next) {
  contact.delete(req, res);
});


module.exports = router
