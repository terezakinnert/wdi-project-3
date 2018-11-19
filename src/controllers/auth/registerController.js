function registerController($scope, $state, $auth) {
  $scope.handleRegister = function() {
    $auth.signup($scope.user)
      .then(() => $state.go('login'))
      .catch(err => console.log('there was an error', err));
  };
}

export default registerController;
