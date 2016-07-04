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

  //Create status
  var status = new Status({
    name: "I",//Interested
    createdDate: now,
    job: job
  });

  //first save status
  status.save(function(err, status){
    //error:
    if(err){ return next(err); }
    //success:
    //Link status to job
    job.status.push(status);
    //save job
    job.save(function(err, job){
      if(err){ return next(err); }
      Job.populate(job, [{path:"status"}, {path:"notes"}], function(err, job) {
        if(err){ return next(err); console.log(err); }
        res.json(job);
      });
    });
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
  Job.remove({'user': req.user, '_id': req.job}, function(err){
    if(err){ return next(err); console.log(err); }
    //return deleted job id
    res.json(req.job._id);
  })
});


/**
* PARAM :note
*
*/
router.param('note', function(req, res, next, id) {
  var query = Notes.findById(id);

  query.exec(function (err, note){
    if (err) { return next(err); }
    if (!note) { return next(new Error('can\'t find note')); }

    req.note = note;
    return next();
  });
});

/**
* POST /note
*
* create a new note
*/
router.post('/:job/notes', function(req, res, next) {
  //Create Job
  var note = new Note(req.body);
  //Add date informations
  var now = new Date();
  note.createdDate = now;
  note.updatedDate = now;
  //link to job
  note.job = req.job;

  //first save note
  note.save(function(err, note){
    //error:
    if(err){ return next(err); console.log(err);}
    //success:
    //Link note to job
    req.job.notes.push(note);
    //save job
    req.job.save(function(err, job){
      if(err){ return next(err); console.log(err); }
      //return the new job with populate fields
      res.json(note);
    });
  });
});

module.exports = router;
