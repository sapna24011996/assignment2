const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      ejs = require('ejs'),
      expressLayouts = require('express-ejs-layouts')
      mongoose = require('mongoose');
      mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/contacts')
.then(() =>  {
    console.log('Database connection succesful')
    const User = require('./models/User');    
    var user = new User({
        username: "sapna24011996@gmail.com",
        password: "Hello@123"
    });
    user.save(function (err, results) {
        var app = express()
        var port = process.env.PORT || 9000
        app.set('view engine', 'ejs')
        app.use(expressLayouts)
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(express.static(path.join(__dirname, 'public')))
        app.use('/', require('./routes'))
        app.listen(port)
    });
})
.catch((err) => console.error(err));

//console.log(`Live on port ${port}`)
