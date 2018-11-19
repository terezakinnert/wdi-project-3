//this controller is global so things put on $scope here are available everywhere

function masterController($scope, $auth, $state) {
  $scope.isAuthenticated = function () {
    if ($auth.isAuthenticated()) {
      $scope.username = $auth.getPayload().username;
      $scope.userId = $auth.getPayload().sub;
    }
    return $auth.isAuthenticated();
  };
  $scope.handleLogout = function() {
    $auth.logout()
      .then(() => $state.go('home'));
  };
}

export default masterController;

//wht we had in the index controller now goes in here
