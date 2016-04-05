StemApp.service('SchoolService', function ($http) {
    
    
    this.getAll = function(onRetrieved) {
        var uri = 'http://localhost:8080/api/schools';
         $http.get(uri).success(onRetrieved).error(function (message, status)
        {
            alert('Ophalen scholen mislukt: ' + message);
        });
    };
    
    this.create = function (id, school_naam, onCreated) {
        var uri = 'http://localhost:8080/api/schools';
        var data =
                {
                   name:school_naam,
                   regio:{id:id}
                };

        $http.post(uri, data).success(onCreated).error(function (message, status)
        {
            alert('Aanmaken school mislukt: ' + message);
        });
    };
    
    this.delete = function(id, onRemoved)
    {
        var uri = 'http://localhost:8080/api/schools/' + id;
        var data =
                {
                    id:id
                };
                
        $http.delete(uri, data).success(onRemoved).error(function (message, status)
        {
            alert("School verwijderen mislukt: " + message);
        });
    };
    
    // Welke velden in welke volgorde vereist?
    this.edit = function (schoolId, school_naam, regionId, onCreated) {
        var uri = 'http://localhost:8080/api/schools/' + schoolId;
        var data =
                {
                   name:school_naam,
                   regio:{id:regionId}
                };

        $http.put(uri, data).success(onCreated).error(function (message, status)
        {
            alert('Aanmaken account mislukt: ' + message);
        });
    };
});
