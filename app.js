
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  ,bodyparser = require('body-parser')
  ,multer = require('multer')
  ,cookieParser = require('cookie-parser')
  ,favicon = require('serve-favicon')
  ,methodOverride = require('method-override')
  ,errorHandler = require('errorhandler')
  ,log4js = require("log4js");

var logger = log4js.getLogger('app');

var homePageRouter = require('./routes/index');
var userRouter = require('./routes/users');

var app = module.exports = express();

  app.use(log4js.connectLogger(log4js.getLogger('http'),{level:'auto'}));

// Configuration

  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.engine('jade',require('jade').__express);
  app.use(favicon(__dirname + '/public/images/favicon.ico'));
  app.use(methodOverride());
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(multer());
  app.use(cookieParser());
  app.use(express.static(__dirname + '/public'));

/*
* Routes Configuration
*/
app.use('/',homePageRouter);
app.use('/users',userRouter);

var env = process.env.NODE_ENV || "development";
if('development' == env){
  app.use(function(err,req,res,next){
    logger.error("Something went wrong:",err);
    res.status(err.status || 500);
    res.render('error',{
        message: err.message,
        error: err
    });      
  });
}else{
  app.use(function(err,req,res,next){
    logger.error("Something went wrong:",err);
    res.status(err.status || 500);
    res.render('error',{
        message: err.message,
        error: err
    });
  });
}


// Routes

//app.get('/', routes.index);

/*app.listen(app.get('port'), function(){
  console.log("Express server listening on port"+app.get('port'));
});*/
