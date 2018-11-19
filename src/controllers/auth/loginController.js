function loginController($scope, $state, $auth) {
  $scope.handleLogin = function() {
    $auth.login($scope.user)
      .then(() => $state.go('animalsIndex'))
      .catch(err => console.log('there was an error', err));
  };
}

export default loginController;
