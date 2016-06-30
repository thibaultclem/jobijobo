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

  //Create status
  var status = new Status({
    name: "Interessé",
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

module.exports = router;
