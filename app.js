angular.module('lisaApp',['ngRoute','ngResource','simplePagination'])
.controller('MyCtrl', ['$scope', 'Pagination','$http',
function($scope, Pagination,$http) {
  $scope.pagination = Pagination.getNew();
    
    $http.get("samples.json").success(function(data){
        $scope.posts = data;
        $scope.pagination.numPages = Math.ceil($scope.posts.length/$scope.pagination.perPage);
    });
    
    
    
    
    
    
    
    
    
    
    
}]);