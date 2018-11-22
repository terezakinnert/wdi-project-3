function bookingsIndexController($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/pets/${$state.params.id}/bookings`
  }).then(result => {
    $scope.allBookings = result.data;
    $scope.filteredBookings = $scope.allBookings;
    $scope.animal = result.data[0].animal;
    console.log('this is the animal', $scope.animal);
    $scope.timeNow = new Date();
  });
}

export default bookingsIndexController;
