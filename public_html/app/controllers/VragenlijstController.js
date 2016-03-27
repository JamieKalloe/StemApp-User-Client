StemApp.controller('VragenlijstController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    window.onload = $scope.getAllQuestionaires;
    
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
    
     $scope.showAlert2 = function(id) {
        alert(id);
    };
});


