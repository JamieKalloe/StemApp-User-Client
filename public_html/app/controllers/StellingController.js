//create the dashboard controller and inject angulars $scope
StemApp.controller('StellingController', function($scope, VragenlijstService, $routeParams) {
                            
     $scope.construct = function()
    {
        $scope.getQuestionaire($routeParams.id);
        $scope.position = 0;
    };            
                
    $scope.saveEditIndex = function(index) {
        $scope.indexToBeEdited = index;
    };
    
    $scope.getQuestionaire = function(id) {
        VragenlijstService.get(id, function(questionaire) {
            $scope.selected_questionaire  = questionaire ;
            $scope.currentStelling = $scope.selected_questionaire.stellingen[$scope.position];

        });
    };
    
    //Maak later een functie om herhaalde statements te verkleinen
    
    $scope.next = function() {
        $scope.position++;
        
        if($scope.position < $scope.selected_questionaire.stellingen.length) {
            $scope.currentStelling = $scope.selected_questionaire.stellingen[$scope.position];
        } else {
            alert("einde van de vragenlijst");
        }
    };
    
    $scope.construct();
    
});
