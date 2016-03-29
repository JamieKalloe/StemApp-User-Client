StemApp.service('SchoolService', function ($http) {
    
    
    this.getAll = function(onRetrieved) {
        var uri = 'http://localhost:8080/api/schools';
         $http.get(uri).success(onRetrieved).error(function (message, status)
        {
            alert('Aanmaken product actie mislukt: ' + message);
        });
    };
    
    this.create = function (id, naam)
    {
        var uri = 'http://localhost:8080/schools';
        var data =
                {
                   name:naam,
                   regio:{id:id}
                };

        $http.post(uri, data).success(onCreated).error(function (message, status)
        {
            bootbox.alert('Aanmaken account mislukt: ' + message);
        });
    };
});
