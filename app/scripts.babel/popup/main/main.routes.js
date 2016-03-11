(function() {
  angular
    .module('app.main', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('main', {
          url: '/main',
          controller: 'MainController',
          controllerAs: 'vm',
          templateUrl: 'scripts/popup/main/main.html'
        });
    }]);
}());
