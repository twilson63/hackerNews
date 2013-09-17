/* Controllers */

hackerNews.controller('AppCtrl',
  function AppCtrl ($scope, posts, users, angularFire, angularFireAuth) {
      angularFire(posts, $scope, 'posts', {});
      angularFireAuth.initialize(users, {scope: $scope, name: "user", path: "/"});
      $scope.login = function() {
          angularFireAuth.login("facebook");
      };
      $scope.logout = function() {
          angularFireAuth.logout();
      };
      $scope.$on("angularFireAuth:error", function(evt, err) {
          alert("We were unable to log you in.\n" + err);
      })
  });

hackerNews.controller('CommentCtrl',
  function CommentCtrl($scope, $routeParams, posts, comments, angularFire) {
    angularFire(comments, $scope, 'comments');
    $scope.post = $scope.posts[$routeParams.id];
    $scope.comments = {};
    if ($scope.user != null) {$scope.username = $scope.user.name;}
    $scope.timeStamp = new Date();
    $scope.addComment = function() {
        $scope.post.comments[comments.push().name()] = {
            from: $scope.username, 
            content: $scope.comment.content,
            created: $scope.timeStamp
        };
        $scope.comment = "";
    }
  });

  hackerNews.controller('AddCtrl',
    function AddCtrl($scope, $location, posts, users) {
      $scope.post = [{}];
      $scope.createdOn = new Date();
      if ($scope.user != null) {$scope.createdBy = $scope.user.name;}
      $scope.add = function () {
        $scope.posts[posts.push().name()] = {
            name: $scope.post.name,
            url: $scope.post.url,
            createdBy: $scope.createdBy,
            createdOn: $scope.createdOn,
            comments: {
                comment1: {
                    from: $scope.createdBy,
                    content: "test",
                    created: $scope.createdOn
                }
            }
        };
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
      //$scope.posts[posts.splice($routeParams.id, 1)];
      delete $scope.posts[$routeParams.id];
      $location.url('/');
    };
    $scope.back = function () {
      $location.url('/');
    };
  });