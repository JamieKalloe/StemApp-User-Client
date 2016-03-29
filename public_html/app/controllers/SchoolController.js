StemApp.controller('SchoolController', function($scope, SchoolService) {
    
    //Constructor in js
    this.construct = function() {
        $scope.refresh();
    };
        
    $scope.schoolRegions = [
        'Noord-Holland',
        'Zuid-Holland',
        'Noord-Brabant'
    ];
        
    $scope.schools = [];
    
    //Later replace with db call
    $scope.add = function(name) {
      this.schoolRegions.push(name);  
    };
    
    //Later replace school with school obj and db
    $scope.addSchool = function(name) {
        this.schools.push(name);
    };
    
    $scope.refresh = function() {
        SchoolService.getAll(function (schools) {
            $scope.schools = schools;
        });
    };
    
    $scope.removeRegion = function(id) {
        this.schoolRegions.splice(id, 1)
    };
    
    this.construct();


});
