var express = require('express');
var router = express.Router();

var lang_en = require('../i18n/en.json');
var lang_fr = require('../i18n/fr.json');

/**
* PARAM :note
*
*/
router.param('lang', function(req, res, next, lang) {
  req.lang = lang;
    return next();
});

/**
* GET /i18n/:lang
*
* return language labels in json format
*/
router.get('/:lang', function(req, res, next) {
  switch (req.lang) {
    case 'fr':
      res.json(lang_fr);
      break;
    default:
      res.json(lang_en);
   }
});

module.exports = router;
