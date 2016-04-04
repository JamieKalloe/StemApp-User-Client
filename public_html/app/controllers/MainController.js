//create the dashboard controller and inject angulars $scope
StemApp.controller('MainController', function($scope, $location) {
    
    $scope.isLocation = function() {
        return $location.path() === location;
    };
    
    $scope.goToDashBoard = function() {
        $location.path('/');
    };
    
    $scope.goToSchool = function() {
        $location.path('/schools');
    };
    
    $scope.goToQuestionaires = function() {
       $location.path('/questionaires');
    };
    
    $scope.goToQuestionaire = function() {
        $location.path('/questionaires/nr');
    };
    
    $scope.goToAccountRequests = function() {
        $location.path('/accountrequests');
    };
    
    $scope.goToCategories = function() {
        $location.path('/categories');
    };
});