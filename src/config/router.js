import loginController from '../controllers/auth/loginController';
import registerController from '../controllers/auth/registerController';
import profileController from '../controllers/profileController';
import animalsIndexController from '../controllers/animals/indexController';
import showController from '../controllers/animals/showController';


function Router($stateProvider) {
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
    .state('profileShow', {
      templateUrl: './views/profile.html',
      url: '/profile/:id',
      controller: profileController
    })
    .state('animalsIndex', {
      templateUrl: './views/animals/index.html',
      url: '/animals',
      controller: animalsIndexController
    })
    .state('animalsShow', {
      templateUrl: './views/animals/show.html',
      url: '/animals/:id',
      controller: showController
    })
    .state('animalsNew', {
      url: '/animals/new',
      templateUrl: './views/animals/new.html',
      controller: function($scope, $http, $state) {
        $scope.handleSubmit = function() {
          console.log('Form was submitted!', $scope.testing);
          $http({
            method: 'POST',
            url: '/api/animals',
            data: $scope.animal
          }).then(result => $state.go('animalsIndex'));
        };
      }
    })
    .state('animalsEdit', {
      templateUrl: './views/animals/edit.html',
      url: '/animals/:id/edit',
      controller: function($scope, $state, $http) {
        $http({
          method: 'GET',
          url: `/api/animals/${$state.params.id}`
        }).then(result => $scope.animal = result.data);
        $scope.handleSubmit = function() {
          // Here we request the UPDATE route:
          $http({
            method: 'PUT',
            url: `/api/animals/${$state.params.id}`,
            data: $scope.animal
          }).then(result => $state.go('animalsIndex'));
        };
      }
    });
}

export default Router;
