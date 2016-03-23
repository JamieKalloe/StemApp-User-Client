//configure our routes
StemApp.config(function($routeProvider, $sceDelegateProvider) {
    $routeProvider
            //Route for the dashboard page
            .when('/', {
                templateUrl:'assets/partials/dashboard.html',
                controller:'DashboardController'
            })
            //Route for about page
              .when('/schools', {
                templateUrl:'assets/partials/schoolsAndRegions.html',
                controller:'SchoolController'
            })
            //Route for the contact page
            .when('/questionaires', {
                templateUrl : 'assets/partials/vragenlijsten.html',
                controller  : 'VragenlijstController'
            });
});