var mongoose = require('mongoose');
//model
//var Contact = mongoose.model('Contact');
var Status = mongoose.model('Status');
var Note = mongoose.model('Note')

var JobSchema = new mongoose.Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
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

JobSchema.pre('remove', function(next) {
  console.log('pre remove !!!');
  Status.remove({job: this._id}).exec();
  Note.remove({job: this._id}).exec();
  //Contacts.remove({job: this._id}).exec();
  next();
});

mongoose.model('Job', JobSchema);
