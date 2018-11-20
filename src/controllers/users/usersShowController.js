function usersShowController($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  }).then(result => {
    console.log('what is the result', result);
    $scope.user = result.data;
  });
}

export default usersShowController;
