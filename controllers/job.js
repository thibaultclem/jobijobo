var express = require('express');
var router = express.Router();
//DB
var mongoose = require('mongoose');
//model
var Job = mongoose.model('Job');
var Status = mongoose.model('Status');
var Note = mongoose.model('Note')

/**
* GET /jobs
*
* return all jobs
*/
router.get('/', function(req, res, next) {
  Job.find({'user': req.user }).populate('status').populate('notes').exec(function(err, jobs) {
    if(err) { return next(err); }

    res.json(jobs);
  })
});

/**
* POST /jobs
*
* create a new job
*/
router.post('/', function(req, res, next) {
  //Create Job
  var job = new Job(req.body);
  //Add date informations
  var now = new Date();
  job.createdDate = now;
  job.updatedDate = now;
  //Link user
  job.user = req.user;
  //Add empty array of notes
  job.notes = [];
  job.status = [];

  //Create initial status
  var status = new Status({
    type: "interested",//Interested
    createdDate: now,
    job: job
  });
  //push initial status to the job advert
  job.status.push(status);
  //save job
  job.save(function(err, job){
    if(err){ return next(err); console.log(err); }
    res.json(job);
  });
});

/**
* PARAM :job
*
*/
router.param('job', function(req, res, next, id) {
  var query = Job.findOne({'user': req.user, '_id': id });

  query.exec(function (err, job){
    if (err) { return next(err); }
    if (!job) { return next(new Error('can\'t find job')); }

    req.job = job;
    return next();
  });
});


/**
* PUT /jobs
*
* Update a job
*/
router.put('/:job', function(req, res, next) {
  var query = Job.findOne({'user': req.user, '_id': req.job });
  query.exec(function (err, job){
    if (err) { return next(err); }
    if (!job) { return next(new Error('can\'t find job')); }
    //Update date informations
    var now = new Date();
    job.updatedDate = now;
    //Update info
    job.company = req.body.company;
    job.position = req.body.position;
    job.link = req.body.link;
    job.description = req.body.description;
    //save job
    job.save(function(err, job){
      if(err){ return next(err); console.log(err); }
      Job.populate(job, [{path:"status"}, {path:"notes"}], function(err, job) {
        if(err){ return next(err); console.log(err); }
        res.json(job);
      });
    });
  });
});

/**
* DELETE /jobs
*
* Delete a job
*/
router.delete('/:job', function(req, res, next) {
  var query = Job.findOne({'user': req.user, '_id': req.job });
  query.exec(function (err, job){
    if (err) { return next(err); }
    if (!job) { return next(new Error('can\'t find job')); }
    job.remove();
    res.json(req.job._id);
  })
});


/**
* POST /:job/notes'
*
* create a new note
*/
router.post('/:job/notes', function(req, res, next) {
  //Create note
  var note = new Note(req.body);
  //Add date informations
  var now = new Date();
  note.createdDate = now;
  note.updatedDate = now;
  //add note to job
  req.job.notes.push(note);
  //save job
  req.job.save(function(err, job){
    if(err){ return next(err); console.log(err); }
    //return the new note with populate fields
    res.json(job);
  });
});

/**
* PARAM :note
*
*/
router.param('note', function(req, res, next, id) {
  req.note = req.job.notes.id(id);
    return next();
});

/**
* UPDATE /:job/notes'
*
* Update a note
*/
router.put('/:job/notes/:note', function(req, res, next) {
  console.log('body: '+req.body.body);
  console.log('note: ');
  console.log(req.note);
  req.job.updateNote(req.note, req.body.body, function(err){
    if(err){ return next(err); console.log(err); }
    res.json(req.job);
  });
});

/**
* DELETE /:job/notes'
*
* Delete a note
*/
router.delete('/:job/notes/:note', function(req, res, next) {
  req.job.removeNote(req.note, function(err){
    if(err){ return next(err); console.log(err); }
    res.json(req.job);
  });
});


/**
* POST /:job/status'
*
* create a new status
*/
router.post('/:job/status', function(req, res, next) {
  //Create note
  var status = new Status(req.body);
  //Add date informations
  status.createdDate = new Date();
  //add note to job
  req.job.status.push(status);
  //save job
  req.job.save(function(err, job){
    if(err){ return next(err); console.log(err); }
    //return the new note with populate fields
    res.json(job);
  });
});

module.exports = router;
