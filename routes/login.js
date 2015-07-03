
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

router.get('/partials/:option',function(req,res){
    logger.debug("This is the Login module");
    res.render('loginpage/partials/'+req.params.option,{title: 'Express'})
});

router.get('/option',function(req,res){
    logger.debug("This is the Login module");
    res.send("This responce came from option"+req.query.optionid)
});
module.exports = router;
