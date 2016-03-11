(function() {
  angular
    .module('app.services', [])
    .service('storageService', storageService);

  function storageService() {
    const service = {
        get: getConfiguration,
        save: saveConfiguration
    };

    function saveConfiguration(username, password){
      let promise = new Promise(function(resolve, reject){
        chrome.storage.sync.set({ 'ACTIVEPBX_USERNAME': username });
        chrome.storage.sync.set({ 'ACTIVEPBX_PASSWORD': password });

        resolve();
      });

      return promise;
    };

    function getConfiguration(){
      let promise = new Promise(function(resolve, reject){
        let response = {};

        chrome.storage.sync.get('ACTIVEPBX_USERNAME', function(item){
          response.username = item.ACTIVEPBX_USERNAME;

          chrome.storage.sync.get('ACTIVEPBX_PASSWORD', function(item) {
            response.password = item.ACTIVEPBX_PASSWORD;

            resolve(response);
          });
        });
      });

      return promise;
    };

    return service;
  };
})();