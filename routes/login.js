
var express = require('express');
var router = express.Router();
var logger = require('log4js').getLogger('login');


/*
 * GET home page.
*/
router.get('/',function(req,res){
    logger.debug("This is the Login module");
    res.render('loginpage/index',{title: 'Express'})
});
module.exports = router;
