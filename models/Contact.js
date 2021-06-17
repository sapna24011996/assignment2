var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', ContactSchema);