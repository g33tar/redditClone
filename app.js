var app = angular.module("redditApp", ['angularMoment', 'ngAnimate']);


app.controller("redditController", [ '$scope', function($scope){
    $scope.posts = [
    {
      title: 'Tango',
      author: 'Katie Whipple',
      image: 'http://i.ytimg.com/vi/f8csv4xGtTo/maxresdefault.jpg',
      description: 'If it doesn\'t challenge you, it doesn\'t change you.',
      date: 1439450850667,
    },
    {
      title: 'Swing It!',
      author: 'Darren Folks',
      image: 'https://s-media-cache-ak0.pinimg.com/236x/57/31/a8/5731a8b12432816d9da9561a3a1f33c5.jpg',
      description: 'It don\'t mean a thang, if it ain\'t got that swing!',
      date: 1439330950665,
    },
    {
      title: 'Blues!',
      author: 'Tara',
      image: 'http://www.evrimgallery.com/Portland-Wedding-Blog/wp-content/uploads/2009/05/lindy-exchange-9.jpg',
      description: 'Life is like Blues...sad, sensual, sexy, violent and quiet.',
      date: 1439300950665,
    },
  ];
    $scope.addPosts = function(){
      $scope.vm = this;
      $scope.vm.time = new Date();
      $scope.date = $scope.vm.time;
      $scope.posts.push({title: $scope.title, author: $scope.author, image: $scope.image, description: $scope.description, date: $scope.date})
      $scope.title = "";
      $scope.author = "";
      $scope.image = "";
      $scope.description = "";
    }
}])
app.controller("commentController", ['$scope', function($scope){
  $scope.commentsList = [];
  $scope.addComments = function(){
      console.log("hello");
    $scope.commentsList.push({commentAuthor: $scope.commentAuthor, commentText: $scope.commentText})
    $scope.commentAuthor = "";
    $scope.commentText = "";
  }
}])

app.controller("voteController", [ '$scope', function($scope){
  $scope.upVote = function(){
    $scope.post.vote++;
  }
  $scope.downVote = function(){
    $scope.post.vote--;
  }
  $scope.post.vote = 0;
}])


var app=angular.module("redditApp",["angularMoment","ngAnimate"]);app.controller("redditController",["$scope",function(t){t.posts=[{title:"Tango",author:"Katie Whipple",image:"http://i.ytimg.com/vi/f8csv4xGtTo/maxresdefault.jpg",description:"If it doesn't challenge you, it doesn't change you.",date:1439450850667},{title:"Swing It!",author:"Darren Folks",image:"https://s-media-cache-ak0.pinimg.com/236x/57/31/a8/5731a8b12432816d9da9561a3a1f33c5.jpg",description:"It don't mean a thang, if it ain't got that swing!",date:1439330950665},{title:"Blues!",author:"Tara",image:"http://www.evrimgallery.com/Portland-Wedding-Blog/wp-content/uploads/2009/05/lindy-exchange-9.jpg",description:"Life is like Blues...sad, sensual, sexy, violent and quiet.",date:1439300950665}],t.addPosts=function(){t.vm=this,t.vm.time=new Date,t.date=t.vm.time,t.posts.push({title:t.title,author:t.author,image:t.image,description:t.description,date:t.date}),t.title="",t.author="",t.image="",t.description=""}}]),app.controller("commentController",["$scope",function(t){t.commentsList=[],t.addComments=function(){console.log("hello"),t.commentsList.push({commentAuthor:t.commentAuthor,commentText:t.commentText}),t.commentAuthor="",t.commentText=""}}]),app.controller("voteController",["$scope",function(t){t.upVote=function(){t.post.vote++},t.downVote=function(){t.post.vote--},t.post.vote=0}]);
