function bookingsIndexController($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/pets/${$state.params.id}/bookings`
  }).then(result => {
    $scope.allBookings = result.data;
    $scope.filteredBookings = $scope.allBookings;
    console.log('the time is', new Date());
    $scope.timeNow = new Date();
  });
}

export default bookingsIndexController;
