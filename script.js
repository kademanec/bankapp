var testApp = angular.module("testApp",  ['ui.bootstrap']);

testApp.controller("testController", function($scope, $http) {
  $scope.home = "This is the homepage";

  $scope.names = ["BANGALORE", "DAVANGERE", "PUNE","MUMBAI","HUBLI"];
  $scope.getRequest = function() {
    console.log("I've been pressed!");


    $http.get("https://vast-shore-74260.herokuapp.com/banks?city="+$scope.selectedName).then(
      function successCallback(response,multi) {
        $scope.response = response;

        console.log(response.data,"correctresponse");


      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
  };


 });
