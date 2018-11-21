function bookingsShowController($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/pets/:petId/bookings/${$state.params.id}`
  }).then(result => {
    console.log('here is our result', result);
    $scope.booking = result.data;
  });
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/pets/:petId/bookings/${$state.params.id}`
    }).then(() => $state.go('bookingsIndex'));
  };
}

export default bookingsShowController;
