var mongoose = require('mongoose');

var StatusSchema = new mongoose.Schema({
  name: String,
  createdDate: String,
  previous: { type: mongoose.Schema.Types.ObjectId, ref: 'Status' },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }
});

mongoose.model('Status', StatusSchema);
