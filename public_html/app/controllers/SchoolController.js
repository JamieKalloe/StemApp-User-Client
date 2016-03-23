StemApp.controller('SchoolController', function($scope) {
        
    $scope.createTestSchools = function() {
        
        var schools = document.getElementById('schoolList');
        schools.innerHTML = '';
        
        for(var i = 0; i < 30; i++) {
            var li = document.createElement('li');
            li.setAttribute("class", "list-group-item");
            li.innerHTML = "School item " + i;
            schools.appendChild(li);
        }
    };
    
     $scope.createTestRegions = function() {
        var regions = document.getElementById('regionList');
        regions.innerHTML = '';
        
        for(var i = 0; i < 30; i++) {

            var li = document.createElement('li');
            li.setAttribute("class", "list-group-item");
            li.innerHTML = "Region item" + i;
            regions.appendChild(li);
        }
    };
    
    
    $scope.showAlert = function() {
      alert("this is alert");  
    };
    
    
});
