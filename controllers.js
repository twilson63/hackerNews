/* Controllers */

hackerNews.controller('AppCtrl',
  function AppCtrl ($scope, angularFire) {
      
      var ref = new Firebase('https://xyclos.firebaseio.com/hackerNews');
      angularFire(ref.limit(100), $scope, "posts");
      
    $scope.posts = [{}];
  });

hackerNews.controller('InfoCtrl',
  function InfoCtrl($scope, $routeParams) {
    $scope.post = $scope.posts[$routeParams.id];
  });

hackerNews.controller('AddCtrl',
  function AddCtrl($scope, $location) {
    $scope.post = {};
    $scope.add = function () {
      $scope.posts.push($scope.post);
      $location.url('/');
    };
  });

hackerNews.controller('EditCtrl',
  function EditCtrl($scope, $routeParams, $location) {
    $scope.post = $scope.posts[$routeParams.id];
    $scope.edit = function () {
      $scope.posts[$routeParams.id] = $scope.post;
      $location.url('/');
    };
  });

hackerNews.controller('RemoveCtrl',
  function RemoveCtrl($scope, $routeParams, $location) {
    $scope.post = $scope.posts[$routeParams.id];
    $scope.remove = function () {
      $scope.posts.splice($routeParams.id, 1);
      $location.url('/');
    };
    $scope.back = function () {
      $location.url('/');
    };
  });
