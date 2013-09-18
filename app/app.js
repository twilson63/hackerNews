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
  })
  .constant('fburl', 'https://chstechnews.firebaseio.com')
  .run(function($rootScope, angularFireAuth, fburl) {
    var ref = new Firebase(fburl);
    angularFireAuth.initialize(ref, {scope: $rootScope, name: "user"});
    $rootScope.login = function() {
      angularFireAuth.login("persona");
    };
    $rootScope.logout = function() {
      angularFireAuth.logout();
    };
    // $rootScope.$on("angularFireAuth:login", function(evt, user) {
    //   console.log(user);
    // });
    $rootScope.isAuthor = function(email) {
      return $rootScope.user ? $rootScope.user.email === email : false;
    };
  });