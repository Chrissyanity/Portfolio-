var app = angular.module('portfolioModule');

app.controller('portCtrl', function($scope, $location, $anchorScroll) {

$scope.scrollTo = function(scrollLocation){
  $location.hash('scrollLocation');
  
  $anchorScroll();
}



$scope.homeImages = [{
  source: '../images/javascriptIcon.png'
},
{
source: '../images/htmlIcon.png'
},
{
source: '../images/cssIcon.png'
},
{
  source: '../images/angularIcon.png'
}
];

});
