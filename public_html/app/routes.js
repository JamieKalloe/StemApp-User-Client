//configure our routes
StemApp.config(function($routeProvider) {
    $routeProvider
            //Route voor de componenten pagina
            .when('/', {
                templateUrl:'assets/partials/components.html',
                controller:'MainController'
            })
            //Route voor de vragenlijsten pagina
            .when('/vragenlijsten', {
                templateUrl:'assets/partials/vragenlijsten.html',
                controller:'VragenlijstController'
            })
            .when('/vragenlijsten/:id', {
                templateUrl:'assets/partials/stellingen.html',
                controller:'StellingController'
            });
});