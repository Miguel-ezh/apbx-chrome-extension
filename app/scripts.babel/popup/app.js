angular
  .element( document )
  .ready( function() {

    let appName = 'extApp';

    let body = document.getElementsByTagName('body')[0];
    let app = angular
      .module(appName, [
        'ui.router',
        'ngMaterial',
        'ngMessages',

      ])
      .config( ['$provide', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
        function($provide, $stateProvider, $urlRouterProvider, $mdThemingProvider){
          $urlRouterProvider.otherwise('/');

          $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('light-blue')
            .warnPalette('red');
        }]);

    angular.bootstrap(body, [app.name], {strictDi: false});

  });
