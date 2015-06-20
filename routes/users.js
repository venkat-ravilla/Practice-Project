
var express = require('express');
var router = express.Router();
var logger = require('log4js').getLogger('users');

/*
* GET users Listing
*/
router.get('/',function(req,res){
  logger.debug("I am in the Users module");
  res.send("Users module yet to be completed");
});

/*
* GET call with a error
*/
router.get('/broken',function(req,res){
  logger.error("Testing error module");
  res.error("testing error user module");
});

module.exports = router;
