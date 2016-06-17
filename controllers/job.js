var express = require('express');
var router = express.Router();
//DB
var mongoose = require('mongoose');
//model
var Job = mongoose.model('Job');

/**
 * GET /job listing
 */
router.get('/', function(req, res, next) {
  Job.find(function(err, jobs) {
    if(err) { return next(err); }

    res.json(jobs);
  })
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
