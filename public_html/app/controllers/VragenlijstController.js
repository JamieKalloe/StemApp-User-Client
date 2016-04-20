//create the dashboard controller and inject angulars $scope
StemApp.controller('VragenlijstController', function($scope, VragenlijstService,$location) {

    $scope.construct = function()
    {
        $scope.getAllQuestionaires();
    };
            
    $scope.saveEditIndex = function(index) {
        $scope.indexToBeEdited = index;
    };
    
    //Has to go in separate function.
    //Id has to be generated to prevent problems with delete or update
    $scope.getAllQuestionaires = function() {
        VragenlijstService.getAll(function(questionaires) {
            $scope.questionaires  = questionaires ;
        });
    };
    
    $scope.construct();
});


