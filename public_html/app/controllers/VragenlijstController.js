StemApp.controller('VragenlijstController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    window.onload = $scope.getAllQuestionaires;
    
    // models voor selection boxes 
    // Komt later van een database
    // Filters voor regio`s en categorien 
    // waar vragenlijsten in zitten
    
      $scope.regionFilters = [
        "Noord-Holland",
        "Zuid-Holland",
        "Noord-Brabant"
    ];
    
     $scope.categoryFilters = [
        'Gemeenteraad',
        'Overheid',
        'Rijkswaterstaat'
    ];
    
       $scope.stateFilters = [
        'Both',
        'Active',
        'Not active'
    ];
    
    
    
    // Komt nog begin en eind tijd voor student en politici
    $scope.questionaires = [
        {
            id:13243425,
            name:'Name of an questionaire',
            region:'Noor-holland',
            category:'gemeenteraad',
            active:true
        }, 
        {
            id:132434344,
            name:'Name of an questionaire',
            region:'Noor-holland',
            category:'gemeenteraad',
            active:true
        },
        {
            id:132434342,
            name:'Name of an questionaire',
            region:'Noor-holland',
            category:'gemeenteraad',
            active:true
        }
    ];
    
    $scope.showAlert = function() {
        alert("geclickt");
    };
    
    //Gebruik dit voor het verwijderen van questionaire en refresh resultset
     $scope.remove = function(id) {
        alert(id);
    };
});


