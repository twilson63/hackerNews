angular.module('App')
  .controller('CommentsCtrl', function($scope, angularFire, $location, $routeParams) {
    $scope.postIndex = $routeParams.id;
    var ref = new Firebase('https://chstechnews.firebaseio.com/posts');
    angularFire(ref, $scope, 'posts');
    $scope.$watch('posts', function() {
      if($scope.posts) { 
        $scope.post = $scope.posts[$scope.postIndex];
      }
    });
    $scope.back = function() {
      $location.path('/');
    };
  });