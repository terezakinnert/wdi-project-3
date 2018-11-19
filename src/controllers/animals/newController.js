function animalsNewController($http, $scope, $state, $auth) {
  $scope.handleSubmit = function() {
    $scope.animal.createdBy = $auth.getPayload().sub;
    console.log('Form submitted');
    $http({
      method: 'POST',
      url: '/api/animals',
      data: $scope.animal
    }).then(() => $state.go('animalsIndex'));
  };
}

export default animalsNewController;
