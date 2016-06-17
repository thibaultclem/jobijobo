var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  name: String,
  position: String,
  email: String,
  number: String,
  note: String,
  link: String,
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }
});

mongoose.model('Contact', ContactSchema);
