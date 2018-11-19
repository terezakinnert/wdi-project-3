function animalsEditController($http, $scope, $state) {
  $http({
    method: 'GET',
    url: `/api/animals/${$state.params.id}`
  }).then(result => $scope.animal = result.data);
  $scope.handleSubmit = function() {
    $http({
      method: 'PUT',
      url: `/api/animals/${$state.params.id}`,
      data: $scope.animal
    }).then(() => $state.go('animalsShow', { id: $state.params.id }));
  };
}

export default animalsEditController;
