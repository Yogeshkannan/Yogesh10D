angular.module('myNode',['ngResource']).controller('jsonCtrl', ['$scope','$resource',function($scope,$resource){

$scope.submit=function(){
	var contents=fs.readFileSync("/views/sample.json");
	var jsonContent=JSON.parse(contents);

	console.log("Username:",jsonContent.username);
	console.log("Password:",jsonContent.password);
	console.log("Email:",jsonContent.email);

}
}]);	
