var mongoose = require('mongoose');
//model
//var Contact = mongoose.model('Contact');
var Status = mongoose.model('Status');
var Note = mongoose.model('Note')

var StatusSchema = new mongoose.Schema({
  name: String,
  createdDate: String
});

var NoteSchema = new mongoose.Schema({
  body: String,
  createdDate: Date,
  updatedDate: Date
});

var JobSchema = new mongoose.Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  company: String,
  position: String,
  description: String,
  link: String,
  dueDate: Date,
  createdDate: Date,
  updatedDate: Date,
  status: [StatusSchema],
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  notes: [NoteSchema]
});

JobSchema.pre('remove', function(next) {
  Status.remove({job: this._id}).exec();
  Note.remove({job: this._id}).exec();
  //Contacts.remove({job: this._id}).exec();
  next();
});

JobSchema.pre('save', function(next) {
  this.updatedDate = new Date();
  next();
})

JobSchema.methods.removeNote = function(note, cb){
  //Remove note for note array of job
  this.notes.id(note._id).remove();
  //Save and return callback method
  this.save(cb);
};

JobSchema.methods.updateNote = function(note, newBody, cb){
  console.log('Updating Note');
  //Remove note for note array of job
  this.notes.id(note._id).body = newBody;
  //Save and return callback method
  this.save(cb);
};

mongoose.model('Job', JobSchema);
