var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  body: String,
  createdDate: Date,
  updatedDate: Date,
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }
});

mongoose.model('Job', JobSchema);
