StemApp.controller('SchoolController', function($scope, RegioService, SchoolService) {

    $scope.construct = function()
    {
        RegioService.getAll(function(regios)
        {
            $scope.schoolRegions = regios;
        });
        
        SchoolService.getAll(function (schools) {
            $scope.schools = schools;
        });
    };
            
    //Later replace with db call..
    $scope.add = function(name) {
      this.schoolRegions.push(name);  
    };
    
    //Later replace school with school obj and db
    $scope.addSchool = function(name) {
        this.schools.push(name);
    };
    
    $scope.removeRegion = function(id) {
        this.schoolRegions.splice(id, 1);
    };
    
    $scope.construct();
});
