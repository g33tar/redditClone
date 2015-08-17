var app = angular.module("redditApp", []);

app.controller("redditController", function($scope){
    $scope.posts = [];
    $scope.addPosts = function(){
    $scope.posts.push({title: $scope.title, author: $scope.author, image: $scope.image, description: $scope.description})
    $scope.title = "";
    $scope.author = "";
    $scope.image = "";
    $scope.description = "";
    }
    $scope.upVote = function(){
      $scope.vote++;
    }
    $scope.downVote = function(){
      $scope.vote--;
    }
    $scope.vote = 0;
    $scope.date = Date.now();
  //   $scope.comments = [];
  //   $scope.addComments = function(){
  //   $scope.comments.push({user: $scope.user, comments: $scope.comments})
  //   $scope.user = "";
  //   $scope.comments = "";
  // }
})
