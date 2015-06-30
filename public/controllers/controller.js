var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function ($scope) {
   	$scope.user = {firstname:"",lastname:"",phoneno:"",gender:"",email:"",password:"",confirmpassword:""};

   	$scope.gender = [{name:"male"},{name:"female"}]

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
});
