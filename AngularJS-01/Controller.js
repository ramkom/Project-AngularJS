// create the module and name it scotchApp
var app = angular.module('angularjsApp');

// create the controller and inject Angular's $scope
app.controller('mainController', function ($scope) {

    // create a message to display in our view
    $scope.message = 'I am main one';

    //sample list
    $scope.users = [{
        "name": "Dominic",
        "IsOnline": true
    }, {
        "name": "Naveen",
        "IsOnline": true
    }, {
        "name": "Shailesh",
        "IsOnline": false
    }];

});

// home controller
app.controller('homeController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'I am home';
});

// about controller
app.controller('aboutController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'I am about';
});

// create the controller and inject Angular's $scope
app.controller('mainControllerWithService', function ($scope, userDataService) {

    // create a message to display in our view
    $scope.message = 'I am main one';

    //sample list
    $scope.users = [];

    var promise = userDataService.getUsers();
    promise.then(function (users) {
        console.log(users.data);
        $scope.users = users.data;
    });

});