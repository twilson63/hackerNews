angular.module('App')
  .controller('NewCtrl', function($scope, angularFire, $location) {
    $scope.save = function() {
      var ref = new Firebase('https://chstechnews.firebaseio.com/posts');
      angularFire(ref, $scope, 'posts');
      if (!$scope.posts) { $scope.posts = []; }
      $scope.post.email = $scope.user.email;
      $scope.posts.push($scope.post);
      $location.path('/');
    };
  });