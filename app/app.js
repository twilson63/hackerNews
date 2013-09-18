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