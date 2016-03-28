StemApp.controller('VragenController', function($scope) {
    $scope.layouts = []; //Per vraag titel en vraagstelling vasthouden
    $scope.numberOfLayouts = 1; //Wordt gebruikt voor het kijken of er toegevoegd of verwijdert moet worden
    
    // models voor selection boxes 
    // Komt later van een database
    $scope.regions = [
        "Noord-Holland",
        "Zuid-Holland",
        "Noord-Brabant"
    ];
    
     $scope.categories = [
        'Gemeenteraad',
        'Overheid',
        'Rijkswaterstaat'
    ];
    
    
    
    //Voegt een question block toe of verwijdert deze. Zonder reset
    $scope.createQuestionLayouts = function(){        
       if(this.layouts.length > this.numberOfLayouts) {
            for (var i = this.layouts.length; i > this.numberOfLayouts; i--) {
                this.layouts.pop();
            }
       } else {
            for(var i = this.layouts.length; i < this.numberOfLayouts; i++) {
                this.layouts[i] = {title: "title" ,question:"message" };
            };
       }
    };
    
    $scope.tempMessage = function() {
        var message = this.name + " " + this.region + " " + this.category + "\n";
        
        for(var i= 0; i < this.layouts.length; i++) {
            message = message.concat(this.layouts[i].title + " " + this.layouts[i].question + "\n");
        }
        
        message = message.concat(this.politici_start + "\n");
        message = message.concat(this.politici_end + "\n");
        message = message.concat(this.student_start + "\n");
        message = message.concat(this.student_end + "\n");        
        alert(message);
    };
});