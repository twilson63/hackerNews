angular.module('App')
  .controller('MainCtrl', function($scope, angularFire) {
    var ref = new Firebase('https://chstechnews.firebaseio.com/posts');
    angularFire(ref, $scope, 'posts');
  });