var mongoose = require('mongoose');

var StatusSchema = new mongoose.Schema({
  type: String,
  createdDate: String,
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }
});

mongoose.model('Status', StatusSchema);
