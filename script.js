var testApp = angular.module("testApp", []);

testApp.controller("testController", function($scope, $http) {
  $scope.home = "This is the homepage";

  $scope.names = ["BANGALORE", "DAVANGERE", "PUNE","MUMBAI","HUBLI"];

  $scope.getRequest = function() {
    console.log("I've been pressed!");

    $http.get("https://vast-shore-74260.herokuapp.com/banks?city="+$scope.selectedName).then(
      function successCallback(response) {
        $scope.response = response;

        console.log(response.data,"correctresponse");

      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
  };

//   $scope.filterNames = function(searchText, searchFilter) {
//   if (searchFilter === 'bank_name') {
//     return function (x) { return x.bank_name.match(searchText); }
//   }
//   else if (searchFilter === 'ifsc') {
//     return function (x) { return x.ifsc.match(searchText); }
//   }
//   else if (searchFilter === 'branch') {
//     return function (x) { return x.branch.match(searchText); }
//   }
//   else if (searchFilter === 'address') {
//     return function (x) { return x.address.match(searchText); }
//   }
//   else if (searchFilter === 'district') {
//     return function (x) { return x.district.match(searchText); }
//   }
//   else {
//     return function (x) { return x.bank_name.match(searchText) || x.ifsc.match(searchText) || x.branch.match(searchText) || x.address.match(searchText) || x.district.match(searchText); }
//   }
// };





});
