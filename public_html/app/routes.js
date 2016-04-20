//configure our routes
StemApp.config(function($routeProvider, $sceDelegateProvider) {
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
});