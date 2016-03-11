(function() {
  angular
    .module('app.main')
    .controller('MainController', MainController);

  MainController.$inject = ['storageService', '$mdToast'];

  function MainController(storageService, $mdToast) {
    let vm = this;
    vm.username = '';
    vm.password = '';

    load();

    function load(){
      storageService
        .get()
        .then(function(item){
          vm.username = item.username;
          vm.password = item.password;
        });
    };

    vm.save = function(){
      storageService
        .save(vm.username, vm.password)
        .then(function(){
          $mdToast.show({
            template: '<md-toast class="md-toast md-toast-success">Saved.</md-toast>',
            hideDelay: 800,
            position: 'top right'
          });
        });
    };

    vm.test = function(){
      storageService
        .get()
        .then(function(item){
          vm.username = item.username;
          vm.password = item.password;
        });
    };
  };
})();