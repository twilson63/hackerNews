angular.module('App', ['firebase'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {controller: 'MainCtrl', templateUrl: '/app/templates/main.html'})
      .when('/posts/new', {controller: 'NewCtrl', templateUrl: '/app/templates/form.html'})
      .when('/posts/:id/edit', {controller: 'EditCtrl', templateUrl: '/app/templates/form.html'})
      .when('/posts/:id/comments', {controller: 'CommentsCtrl', templateUrl: '/app/templates/comments.html'})
      .when('/posts/:id/comments/new', {controller: 'NewCommentCtrl', templateUrl: '/app/templates/comments/form.html'})
      .when('/posts/:post/comments/:id/edit', {controller: 'EditCommentCtrl', templateUrl: '/app/templates/comments/form.html'});
      
    $locationProvider.html5Mode(true);
  });
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
angular.module('App')
  .controller('EditCommentCtrl', function($scope, angularFire, $location, $routeParams) {
    $scope.postIndex = $routeParams.post;
    $scope.commentIndex = $routeParams.id;
    var ref = new Firebase('https://chstechnews.firebaseio.com/posts');
    angularFire(ref, $scope, 'posts');
    $scope.$watch('posts', function() {
      if($scope.posts) { 
        $scope.post = $scope.posts[$scope.postIndex];
        $scope.comment = $scope.post.comments[$scope.commentIndex];
      }
    });

    $scope.save = function() {
      $location.path('/posts/' + $scope.postIndex + '/comments');
    };
  });
angular.module('App')
  .controller('NewCommentCtrl', function($scope, angularFire, $location, $routeParams) {
    $scope.postIndex = $routeParams.id;
    var ref = new Firebase('https://chstechnews.firebaseio.com/posts');
    angularFire(ref, $scope, 'posts');
    $scope.$watch('posts', function() {
      if($scope.posts) { 
        $scope.post = $scope.posts[$scope.postIndex];
        if (!$scope.post.comments) { $scope.post.comments = []; }
      }
    });

    $scope.save = function() {
      var ref = new Firebase('https://chstechnews.firebaseio.com/posts');
      angularFire(ref, $scope, 'posts');
      $scope.post.comments.push($scope.comment);
      $location.path('/posts/' + $scope.postIndex + '/comments');
    };
  });
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
angular.module('App')
  .controller('MainCtrl', function($scope, angularFire) {
    var ref = new Firebase('https://chstechnews.firebaseio.com/posts');
    angularFire(ref, $scope, 'posts');
  });
angular.module('App')
  .controller('NewCtrl', function($scope, angularFire, $location) {
    $scope.save = function() {
      var ref = new Firebase('https://chstechnews.firebaseio.com/posts');
      angularFire(ref, $scope, 'posts');
      if (!$scope.posts) { $scope.posts = []; }
      $scope.posts.push($scope.post);
      $location.path('/');
    };
  });