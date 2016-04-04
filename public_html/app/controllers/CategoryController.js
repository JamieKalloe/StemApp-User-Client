StemApp.controller('CategoryController', function($scope, CategoryService) {
    
     $scope.construct = function()
    {
        $scope.getAllCategories();
    };
            
    
    
    $scope.add = function(name) {
        CategoryService.create(name, function(){
            $scope.getAllCategories();
        });
    };
    
    
    
    $scope.edit = function(id, name) {
        CategoryService.edit(id, name, function() {
            $scope.categories[$scope.indexToBeEdited].name = name;
            alert("Category updated");
        });
    };
    
    
    
      $scope.removeCategory = function(index) {
        CategoryService.delete(this.categories[index].id, function() {
            $scope.categories.splice(index, 1);
            alert("Category removed");
        });
        
    };
    
    
    
    $scope.saveEditIndex = function(index) {
        $scope.indexToBeEdited = index;
    };
    
    
    //Has to go in separate function.
    //Id has to be generated to prevent problems with delete or update
    $scope.getAllCategories = function() {
        CategoryService.getAll(function(categories) {
            $scope.categories = categories;
        });
    };
    
    $scope.construct();
    
    
});