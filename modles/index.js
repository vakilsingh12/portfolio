var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://namastedev:TGmSfquq9Qt89HoG@namstenode.9ido0mx.mongodb.net/portfolio?retryWrites=true&w=majority&appName=NamsteNode"
);
var conSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
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
    default: Date.now,
  },
});
var model = mongoose.model("contact", conSchema);
module.exports = model;
