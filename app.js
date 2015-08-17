var app = angular.module("redditApp", []);

app.controller("redditController", function($scope){
    $scope.posts = [];
    $scope.addPosts = function(){
    $scope.posts.push({title: $scope.title, author: $scope.author, image: $scope.image, description: $scope.description})
    $scope.title = "";
    $scope.author = "";
    $scope.image = "";
    $scope.description = "";
    $scope.date = Date.now();
    }
})
app.controller("commentController", function($scope){
  $scope.commentsList = [];
  $scope.addComments = function(){
      console.log("hello");
    $scope.commentsList.push({commentAuthor: $scope.commentAuthor, commentText: $scope.commentText})
    $scope.commentAuthor = "";
    $scope.commentText = "";
  }
})

app.controller("voteController", function($scope){
  $scope.upVote = function(){
    $scope.vote++;
  }
  $scope.downVote = function(){
    $scope.vote--;
  }
  $scope.vote = 0;
})
