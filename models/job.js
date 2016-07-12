var mongoose = require('mongoose');

var StatusSchema = new mongoose.Schema({
  type: String,
  createdDate: String
});
var Status = mongoose.model('Status', StatusSchema);

var NoteSchema = new mongoose.Schema({
  body: String,
  createdDate: Date,
  updatedDate: Date
});
var Note = mongoose.model('Note', NoteSchema);

var ContactSchema = new mongoose.Schema({
  name: String,
  position: String,
  email: String,
  number: String,
  link: String
});
var Contact = mongoose.model('Contact', ContactSchema);

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
  contacts: [ContactSchema],
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
