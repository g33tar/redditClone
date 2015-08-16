var app = angular.module("redditApp", []);

app.controller("redditController", function($scope){
    $scope.posts = [];
    $scope.addPosts = function(){
    $scope.posts.push({title: $scope.title, author: $scope.author, image: $scope.image, description: $scope.description, date: $scope.date, comments: $scope.comments, votes: $scope.votes})
    }
})
