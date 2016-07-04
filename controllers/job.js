var express = require('express');
var router = express.Router();
//DB
var mongoose = require('mongoose');
//model
var Job = mongoose.model('Job');
var Status = mongoose.model('Status');

/**
* GET /job
*
* return all jobs
*/
router.get('/', function(req, res, next) {
  Job.find({'user': req.user }).populate('status').exec(function(err, jobs) {
    if(err) { return next(err); }

    res.json(jobs);
  })
});

/**
* POST /job
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
      res.json(job);
    });
  });
});

/**
* PUT /job
*
* Update a job
*/
router.put('/', function(req, res, next) {
  var query = Job.findById(req.body.id);
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
      res.json(job);
    });
  });
});

/**
* DELETE /job
*
* Delete a job
*/
router.delete('/', function(req, res, next) {
  Job.remove({_id: req.body.id}, function(err){
    if(err){ return next(err); console.log(err); }
    //return deleted job id
    res.json(req.body.id);
  })
});

module.exports = router;
