angular.module('App')
  .controller('EditCtrl', function($scope, angularFire, $location, $routeParams) {
    var index = $routeParams.id;
    var ref = new Firebase('https://chstechnews.firebaseio.com/posts');
    angularFire(ref, $scope, 'posts');
    $scope.$watch('posts', function() {
      if($scope.posts) { $scope.post = $scope.posts[index]; }
    });
    $scope.save = function() {
      //$scope.posts[index] = 
      $location.path('/');
    };
  });