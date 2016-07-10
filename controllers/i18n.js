var express = require('express');
var router = express.Router();

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
