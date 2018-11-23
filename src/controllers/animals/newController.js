function animalsNewController($http, $scope, $state, $auth) {
  $scope.animal = {};
  $scope.handleSubmit = function() {
    $scope.animal.createdBy = $auth.getPayload().sub;
    $http({
      method: 'POST',
      url: '/api/pets',
      data: $scope.animal
    }).then(() => $state.go('animalsIndex'));
  };
}

export default animalsNewController;
