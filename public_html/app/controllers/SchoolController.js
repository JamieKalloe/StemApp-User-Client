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
    
    $scope.edit = function(id, name) {
        RegioService.edit(id, name, function() {
            $scope.schoolRegions[$scope.indexToBeEdited].name = name;
        });
    };
    
      $scope.removeRegion = function(id) {
        this.schoolRegions.splice(id, 1);
    };
    
    
    $scope.addSchool = function(id, name) {
        SchoolService.create(id, name, function(){
            $scope.getAllSchools();
        }); 
    };
    
    $scope.editSchool = function(schoolId, schoolName, region) {
        SchoolService.edit(schoolId, schoolName, region.id, function() {
            $scope.schools[$scope.indexToBeEdited].name = schoolName;
            $scope.schools[$scope.indexToBeEdited].regio.name = region.name;
            $scope.schools[$scope.indexToBeEdited].regio.id = region.id;
        });
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
