StemApp.controller('SchoolController', function($scope, RegioService, SchoolService) {

    $scope.construct = function()
    {
        $scope.getAllRegions();
        $scope.getAllSchools();
    };
            
    
    $scope.add = function(name) {
        RegioService.create(name, function(){
            $scope.getAllRegions();
        });
    };
    
    $scope.addSchool = function(id, name) {
        SchoolService.create(id, name, function(){
            $scope.getAllSchools();
        }); 
    };
    
    $scope.editSchool = function(regionId, schoolName) {
        
    };
    
    $scope.removeRegion = function(id) {
        this.schoolRegions.splice(id, 1);
    };
    
    
    $scope.saveEditIndex = function(index) {
        $scope.indexToBeEdited = index;
    };
    
    
    
    //Has to go in separate function.
    //Id has to be generated to prevent problems with delete or update
    $scope.getAllRegions = function() {
        RegioService.getAll(function(regios) {
            $scope.schoolRegions = regios;
        });
    };
    
    //Solution db returns created ID at oncreate of object
    $scope.getAllSchools = function() {
        SchoolService.getAll(function (schools) {
            $scope.schools = schools;
        });  
    };
    
    $scope.construct();
});
