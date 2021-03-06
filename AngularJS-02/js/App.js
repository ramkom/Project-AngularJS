// create the module and name it app
var app = angular.module('angularjsApp', ['ngRoute', 'ui.bootstrap', 'nvd3']); //route-routing config, nvd3-chart, bootstrap ui-dialog 

//capture state change
//will execute when page changes in SPA
app.run(function ($rootScope) {

    $rootScope.$on('$routeChangeStart', function (event, toState, toParams) {
        console.log("route change");
        //authentication shall happen here 
        //build a service to authenticate
    });

});

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
		.when('/', {
		    templateUrl: 'Home.html',
		    controller: 'mainController'
		})

        // route for the about page
        .when('/about', {
            templateUrl: 'About.html',
            controller: 'aboutController'
        })

        // route for the directive page
        //Notice i did not pass a controller here
        //it is assigned in the view
        .when('/custDirective', {
            templateUrl: 'customDirective.html'
        })

      // route for the directive page
        //Notice i did not pass a controller here
        //it is assigned in the view
        .when('/nvd3Chart', {
            templateUrl: 'chart.html',
            controller: 'chartController'
        })
    
});

