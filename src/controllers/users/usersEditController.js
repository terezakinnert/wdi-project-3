function usersEditController($http, $scope, $state) {
  $http({
    method: 'GET',
    url: `/api/pets/${$state.params.id}`
  }).then(result => $scope.animal = result.data);
  $scope.handleSubmit = function() {
    $http({
      method: 'PUT',
      url: `/api/pets/${$state.params.id}`,
      data: $scope.animal
    }).then(() => $state.go('animalsShow', { id: $state.params.id }));
  };
}

export default usersEditController;
