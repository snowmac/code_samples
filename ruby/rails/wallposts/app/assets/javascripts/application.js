// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require_tree .



var app = angular.module('wallApp', []);

app.controller('posts', function($scope, $http) {

  $scope.init = function(){
    $http.get('/api/posts').then(function(result){
      $scope.postsArray = result["data"];
    });
  };

  $scope.addComment = function(){
    $http.post('/api/posts', {
      name: $scope.name, 
      email: $scope.email, 
      comment: $scope.comment
    }).then(function(result){
      $scope.postsArray = result["data"];
    });
  };


});