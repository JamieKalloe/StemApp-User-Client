//configure our routes
StemApp.config(function($routeProvider, $sceDelegateProvider) {
    $routeProvider
            //Route for the dashboard page
            .when('/', {
                templateUrl:'assets/partials/components.html',
                controller:'MainController'
            })
            
});