function usersEditController($http, $scope, $state) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  }).then(result => $scope.user = result.data);
  $scope.editProfile = function() {
    console.log('user?', $scope.user);
    $http({
      method: 'PUT',
      url: `/api/users/${$state.params.id}`,
      data: $scope.user
    }).then(() => $state.go('usersShow', { id: $state.params.id }));
  };
}

export default usersEditController;
