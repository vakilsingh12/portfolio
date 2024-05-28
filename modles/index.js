var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
var conSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  subject: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
var model = mongoose.model('contact', conSchema);
module.exports = model;