import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router';
import 'bulma';
import 'satellizer';
import './css/style.scss';
import './css/style.css';
import masterController from './controllers/masterController';

angular.module('PetApp', ['ui.router', 'satellizer'])
  .controller('masterController', masterController)
  .config(Router)
  .config(function($authProvider) {
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
