/* Controllers */

hackerNews.controller('AppCtrl',
  function AppCtrl ($scope, posts, angularFire) {
      angularFire(posts, $scope, 'posts');
  });

hackerNews.controller('InfoCtrl',
  function InfoCtrl($scope, $routeParams) {
    $scope.post = $scope.posts[$routeParams.id];
  });

hackerNews.controller('AddCtrl',
  function AddCtrl($scope, $location, posts) {
    $scope.post = [{}];
    $scope.add = function () {
      posts.push($scope.post);
      $location.url('/');
    };
  });

hackerNews.controller('EditCtrl',
  function EditCtrl($scope, $routeParams, $location, posts) {
    $scope.post = $scope.posts[$routeParams.id];
    $scope.edit = function () {
      $scope.posts[$routeParams.id] = $scope.post;
      $location.url('/');
    };
  });

hackerNews.controller('RemoveCtrl',
  function RemoveCtrl($scope, $routeParams, $location, posts) {
    $scope.post = $scope.posts[$routeParams.id];
    $scope.remove = function () {
      //$scope.posts.splice($routeParams.id, 1);
      //delete $scope.posts[$routeParams.id];
      $location.url('/');
    };
    $scope.back = function () {
      $location.url('/');
    };
  });
