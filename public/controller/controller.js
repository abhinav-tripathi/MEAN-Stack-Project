var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

var refresh = function(){
    $http.get('/contactlist').success(function(res){
      $scope.contactlist = res;
    });
  }
refresh();

$scope.addContact = function(){
  console.log($scope.contact);
  $http.post('/contactlist',$scope.contact).success(function(res){
    refresh();
  });
}

$scope.remove = function(id){
  $http.delete('/contactlist/'+id).success(function(res){
    console.log(res);
    refresh();
  });
}

$scope.edit = function(id){
  $http.get('/contactlist/'+id).success(function(res){
    $scope.contact = res;
  });
}

$scope.update = function(){
  console.log($scope.contact._id);
  $http.put('/contactlist/'+$scope.contact._id,$scope.contact).success(function(res){
    refresh();
  });
}

}]);
