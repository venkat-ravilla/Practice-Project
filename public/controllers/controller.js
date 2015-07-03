var loginApp = angular.module('loginApp', ["ngRoute","loginControllers", "loginServices"]);

loginApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/option1', {
        templateUrl: 'login/partials/option1',
        controller: 'option1Cntrl'
      }).
      when('/option2', {
        templateUrl: 'login/partials/option2',
        controller: 'option2Cntrl'
      }).
      otherwise({
        redirectTo: '/option1'
      });
  }]);


var loginControllers = angular.module('loginControllers', []);
loginControllers.controller('MainCtrl',["$scope","$http",function ($scope,$http) {
   	$scope.user = {firstname:"",lastname:"",phoneno:"",gender:"",email:"",password:"",confirmpassword:""};

   	$scope.gender = [{name:"male"},{name:"female"}]

   	$scope.toggleSideBar = function(){
   		jQuery("#side_menu_container").toggleClass("hide");
   		jQuery("#body_container").toggleClass("side-menu-included"); 
   	}

   	$scope.signInDialog = function(user){
   		jQuery("#signup_container").removeClass("show");
   		jQuery("#signin_container").removeClass("hide");
   		jQuery("#signup_container").addClass("hide");
   		jQuery("#signin_container").addClass("show");
   	}
   	$scope.signUpDialog = function(user){
   		jQuery("#signin_container").removeClass("show");
   		jQuery("#signup_container").removeClass("hide"); 
   		jQuery("#signin_container").addClass("hide");
   		jQuery("#signup_container").addClass("show");  	
   	}

   	$scope.usersignin = function(user){
   		console.log("signin",user);
   	}
   	$scope.usersignup = function(user){
   		console.log("signup",user);
   	}
}]);

loginControllers.controller('option1Cntrl',["$scope","OptionService",function ($scope,OptionService) {
	$scope.option = OptionService.query();
}]);

loginControllers.controller('option2Cntrl',["$scope","OptionService",function ($scope,OptionService) {
	//$scope.option = OptionService.query();
	OptionService.get({optionid: '2'}, function(optionvalue) {
		console.log(optionvalue);
    	$scope.option = optionvalue;
  	});

}]);



var loginServices = angular.module('loginServices', ['ngResource']);

loginServices.factory('OptionService', ['$resource',
  function($resource){
    return $resource('login/option', {}, {
      query: {method:'GET', params:{optionid:'1'}, isArray:true}
    });
  }]);