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
    
    self.getAll = function(onReceived)
    {
        var uri = 'http://localhost:8080/api/regios';
        
        $http.get(uri).success(onReceived).error(function(message, status)
        {
            alert('Ophalen mislukt: ' + message);
        });
    };
});