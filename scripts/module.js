var app = angular.module('portfolioModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/homepage', {
      controller: 'portCtrl',
      templateUrl: 'views/homepage.html'
    })
    // .when('/projects', {
    //   controller: 'portCtrl',
    //   templateUrl: 'views/projects.html'
    // })
    // .when('/contact', {
    //   controller: 'portCtrl',
    //   templateUrl: 'views/contactPage.html'
    // })
.otherwise({ redirectTo: '/' });
$locationProvider.hashPrefix('');

});
