function profileController ($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(result => {
      console.log('Result is', result);
      $scope.user = result.data;
    });
}

export default profileController;
