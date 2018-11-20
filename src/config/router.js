import loginController from '../controllers/auth/loginController';
import registerController from '../controllers/auth/registerController';

import usersIndexController from '../controllers/users/usersIndexController';
import usersShowController from '../controllers/users/usersShowController';

import animalsIndexController from '../controllers/animals/indexController';
import animalsShowController from '../controllers/animals/showController';
import animalsEditController from '../controllers/animals/editController';

import bookingsIndexController from '../controllers/bookings/bookingsIndexController';
// import bookingsShowController from '../controllers/bookings/bookingsShowContoller';


function Router($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('register', {
      templateUrl: './views/auth/register.html',
      url: '/register',
      controller: registerController
    })
    .state('login', {
      templateUrl: './views/auth/login.html',
      url: '/login',
      controller: loginController
    })
    .state('usersIndex', {
      templateUrl: './views/users/index.html',
      url: '/users',
      controller: usersIndexController
    })
    .state('usersShow', {
      templateUrl: './views/users/show.html',
      url: '/users/:id',
      controller: usersShowController
    })
    .state('animalsIndex', {
      templateUrl: './views/animals/index.html',
      url: '/animals',
      controller: animalsIndexController
    })
    .state('animalsShow', {
      templateUrl: './views/animals/show.html',
      url: '/animals/:id',
      controller: animalsShowController
    })
    .state('animalsNew', {
      url: '/animals/new',
      templateUrl: './views/animals/new.html',
      controller: function($scope, $http, $state) {
        $scope.handleSubmit = function() {
          console.log('Form was submitted!', $scope.testing);
          $http({
            method: 'POST',
            url: '/api/pets',
            data: $scope.animal
          }).then(result => $state.go('animalsIndex'));
        };
      }
    })
    .state('animalsEdit', {
      templateUrl: './views/animals/edit.html',
      url: '/animals/:id/edit',
      controller: animalsEditController
    })
    .state('bookingIndex', {
      templateUrl: './views/bookings/bookingsIndex.html',
      url: '/animals/:id/bookings',
      controller: bookingsIndexController
    });
  $urlRouterProvider.otherwise('/');
}

export default Router;
