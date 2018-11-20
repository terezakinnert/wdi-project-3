function bookingsIndexController($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/pets/:petId/bookings'
  }).then(result => {
    $scope.allBookings = result.data;
    $scope.filteredBookings = $scope.allBookings;
  });
}

export default bookingsIndexController;
