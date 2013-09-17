/* Declare app level module */
var hackerNews = angular.module('hackerNews', ['firebase'])
    .directive('rating', function() {
         return {
             restrict: 'A',
             template: '<span ng-click="ratingValue = ratingValue + 1">&and;</span>' +
                        '<br />' +
                       '<span ng-click="ratingValue = ratingValue - 1">&or;</span>',
             scope: {
                 ratingValue: '=',
                 onVote: '&'
             }
         }
     })
  .factory('posts', [function() {
      var posts = new Firebase('https://xyclos.firebaseio.com/hackerNews');
      return posts;
  }])
  .factory('users', [function() {
      var users = new Firebase('https://xyclos.firebaseio.com/users');
      return users;
  }])
  .factory('comments', [function() {
      var comments = new Firebase('https://xyclos.firebaseio.com/comments');
      return comments;
  }])
  .config(function($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl: 'partials/index.html'
    })
    .when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'AddCtrl',
      authRequired: true
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: 'EditCtrl',
      authRequired: true
    })
    .when('/remove/:id', {
      templateUrl: 'partials/remove.html',
      controller: 'RemoveCtrl',
      authRequired: true
    })
    .when('/comments/:id', {
        templateUrl: 'partials/comments.html',
        controller: 'CommentCtrl',
        authRequired: false
    })
    .otherwise({
      redirectTo: '/index'
    });
  });
  
  hackerNews.filter('shortURL', function () {
      return function (text) {
          var matches, 
            output = "",
            urls = /\w+:\/\/([\w|\.]+)/;
          matches = urls.exec(text);
          
          if (matches !== null) {output = matches[1];}
          
          return output;
      };
  });