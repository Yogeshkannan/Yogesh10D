
angular.module('myNode',['ngResource']).controller('memberCtrl', ['$scope','$resource',function($scope,$resource){
 	
 	var Mem= $resource('/api/member');
 	//$scope.memberCount=10;
	$scope.member=[{name:"Yogesh"},{name:"Raja"}]
	$scope.sub=function(){
	 	
		var mem=new Mem();
		mem.name=$scope.memberName;
		mem.$save();
		$scope.member.push({name:$scope.memberName});
		$scope.memberName="";
	}

}]);