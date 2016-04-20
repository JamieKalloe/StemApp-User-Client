StemApp.service('VragenlijstService', function($http)
{
    var self = this;
    
    self.getAll = function(onReceived)
    {
        var uri = 'http://localhost:8080/api/vragenlijsten';
        
        $http.get(uri).success(onReceived).error(function(message, status)
        {
            alert('Ophalen mislukt: ' + message);
        });
    };
});