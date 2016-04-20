//create the dashboard controller and inject angulars $scope
StemApp.controller('StellingController', function($scope, VragenlijstService, $routeParams) {
                
     $scope.construct = function(id)
    {
        $scope.getQuestionaire($routeParams.id);
    };            
                
    $scope.saveEditIndex = function(index) {
        $scope.indexToBeEdited = index;
    };
    
    $scope.getQuestionaire = function(id) {
        VragenlijstService.get(id, function(questionaire) {
            $scope.selected_questionaire  = questionaire ;
        });
    };
    
    $scope.construct(6);
    
});
