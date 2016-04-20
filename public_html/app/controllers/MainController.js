//create the dashboard controller and inject angulars $scope
StemApp.controller('MainController', function($scope, $location) {
    
    $scope.isLocation = function() {
        return $location.path() === location;
    };
    
    $scope.goToHome = function() {
        $location.path('/');
    };
    
    $scope.goToVragenlijsten = function() {
        $location.path('/vragenlijsten');
    };
});