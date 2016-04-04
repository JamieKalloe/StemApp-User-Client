StemApp.service('CategoryService', function($http)
{
    var self = this;
    
    this.create = function (name, onCreated)
    {
        var uri = 'http://localhost:8080/api/categories';
        var data =
                {   
                    name: name
                };

        $http.post(uri, data).success(onCreated).error(function (message, status)
        {
            alert('Category aanmaken mislukt: ' + message);
        });
    };
    
     this.edit = function (id, name, onCreated)
    {
        var uri = 'http://localhost:8080/api/categories/' + id;
        var data =
                {   
                    id:id,
                    name: name
                };

        $http.put(uri, data).success(onCreated).error(function (message, status)
        {
            alert('Category updaten mislukt: ' + message);
        });
    };
    
    this.delete = function (id, onRemoved)
    {
        var uri = 'http://localhost:8080/api/categories/' + id;
        var data =
                {   
                    id:id
                };

        $http.delete(uri, data).success(onRemoved).error(function (message, status)
        {
            alert('Category verwijderen mislukt: ' + message);
        });
    };
    
    
    
    self.getAll = function(onReceived)
    {
        var uri = 'http://localhost:8080/api/categories';
        
        $http.get(uri).success(onReceived).error(function(message, status)
        {
            alert('Ophalen mislukt: ' + message);
        });
    };
});