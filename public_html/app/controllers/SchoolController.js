StemApp.controller('SchoolController', function($scope) {
    
    $scope.schoolRegions = [
        'Noord-Holland',
        'Zuid-Holland',
        'Noord-Brabant'
    ];
        
    $scope.schools = [
        'Herbert Vissers College',
        'Hogeschool Leiden',
        'De Ark'
    ];
    
    //Later replace with db call
    $scope.add = function(name) {
      this.schoolRegions.push(name);  
    };
    
    //Later replace school with school obj and db
    $scope.addSchool = function(name) {
        this.schools.push(name);
    };
});
