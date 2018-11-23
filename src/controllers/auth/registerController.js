function registerController($scope, $state, $auth) {
  $scope.handleRegister = function() {
    $auth.signup($scope.user)
      .then(() => {
        $auth.login($scope.user)
          .then(() => {
            $state.go('animalsIndex');
          });
      })
      .catch(err => console.log('there was an error', err));
  };
}

export default registerController;
