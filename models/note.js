var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  body: String,
  createdDate: Date,
  updatedDate: Date,
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }
});

mongoose.model('Note', NoteSchema);
