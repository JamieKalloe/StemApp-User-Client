/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

StemApp.service('RegioService', function($http)
{
    var self = this;
    
    this.create = function (name, onCreated)
    {
        var uri = 'http://localhost:8080/api/regios';
        var data =
                {
                    name: name
                };

        $http.post(uri, data).success(onCreated).error(function (message, status)
        {
            alert('Regio aanmaken mislukt: ' + message);
        });
    };
    
     this.edit = function (id, name, onCreated)
    {
        var uri = 'http://localhost:8080/api/regios/' + id;
        var data =
                {   
                    id:id,
                    name: name
                };

        $http.put(uri, data).success(onCreated).error(function (message, status)
        {
            alert('Regio updaten mislukt: ' + message);
        });
    };
    
    this.delete = function(id, onRemoved)
    {
        var uri = 'http://localhost:8080/api/regios/' + id;
        var data = 
                {
                    id:id
                };
        
        $http.delete(uri, data).success(onRemoved).error(function (message, status)
        {
           alert("Regio verwijderen mislukt:" + message); 
        });
    };
    
    self.getAll = function(onReceived)
    {
        var uri = 'http://localhost:8080/api/regios';
        
        $http.get(uri).success(onReceived).error(function(message, status)
        {
            alert('Ophalen mislukt: ' + message);
        });
    };
});