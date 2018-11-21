import loginController from '../controllers/auth/loginController';
import registerController from '../controllers/auth/registerController';

import usersIndexController from '../controllers/users/usersIndexController';
import usersShowController from '../controllers/users/usersShowController';
import usersEditController from '../controllers/users/usersEditController';

import animalsIndexController from '../controllers/animals/indexController';
import animalsShowController from '../controllers/animals/showController';
import animalsEditController from '../controllers/animals/editController';
import animalsNewController from '../controllers/animals/newController';

import bookingsIndexController from '../controllers/bookings/bookingsIndexController';
import bookingsShowController from '../controllers/bookings/bookingsShowController';
import bookingsNewController from '../controllers/bookings/bookingsNewController';


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
      controller: animalsNewController
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
    })
    .state('bookingShow', {
      templateUrl: './views/bookings/bookingsShow.html',
      url: '/animals/:id/bookings/:bookingId',
      controller: bookingsShowController
    })
    .state('bookingNew', {
      url: '/animals/:id/bookings/new',
      templateUrl: './views/bookings/bookingsNew.html',
      controller: bookingsNewController
    })
    .state('usersEdit', {
      templateUrl: './views/users/editProfile.html',
      url: '/users/:id/edit',
      controller: usersEditController
    });
  $urlRouterProvider.otherwise('/');
}

export default Router;
