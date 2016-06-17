var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  company: String,
  position: String,
  description: String,
  link: String,
  dueDate: Date,
  createdDate: Date,
  updatedDate: Date,
  status: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Status' }],
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }]
});

mongoose.model('Job', JobSchema);
