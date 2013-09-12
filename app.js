/* Declare app level module */
var hackerNews = angular.module('hackerNews', ['firebase'])
  .factory('posts', [function() {
      var posts = new Firebase('https://xyclos.firebaseio.com/hackerNews');
      return posts;
  }])
  .config(function($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl: 'partials/index.html'
    })
    .when('/info/:id', {
      templateUrl: 'partials/info.html',
      controller: 'InfoCtrl'
    })
    .when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'AddCtrl'
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: 'EditCtrl'
    })
    .when('/remove/:id', {
      templateUrl: 'partials/remove.html',
      controller: 'RemoveCtrl'
    })
    .when('/comments/:id', {
        templateUrl: 'partials/comments.html',
        controller: 'CommentCtrl'
    })
    .otherwise({
      redirectTo: '/index'
    });
  });
  
  hackerNews.filter('shortURL', function () {
      return function (text) {
          var getLocation = function(href) {
              var l = document.createElement("a");
              l.href = href;
              return l;
          };
          var url = getLocation(text);
          return url.hostname;
      };
  });