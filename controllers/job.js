var express = require('express');
var router = express.Router();
//DB
var mongoose = require('mongoose');
//model
var Job = mongoose.model('Job');

/**
 * GET /job
 *
 * return all jobs
 */
router.get('/', function(req, res, next) {
  Job.find(function(err, jobs) {
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
  var job = new Job(req.body);
  var now = new Date();
  job.createdDate = now;
  job.updatedDate = now;
  //rumor.author = req.payload.username;

  job.save(function(err, job){
    if(err){ return next(err); }

    res.json(job);
  });
});

/**
 * POST /job
 */
router.post('/test', function(req, res, next) {
  var job = new Job();
  //job.author = req.payload.username;
  job.company = "Alstom";
  job.position = "dev"

  job.save(function(err, job){
    if(err){ return next(err); }

    res.json(job);
  });
});

module.exports = router;
