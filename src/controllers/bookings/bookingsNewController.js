function bookingsNewController($http, $scope, $state, $auth) {
  $scope.booking = {};
  $http({
    method: 'GET',
    url: `/api/pets/${$state.params.id}`
  }).then(result => {
    $scope.animal = result.data;
  });
  $scope.handleSubmit = function() {
    $scope.booking.booker = $auth.getPayload().sub;
    console.log('Now lets post to the bookings page');
    $http({
      method: 'POST',
      url: `/api/pets/${$state.params.id}/bookings`,
      data: $scope.booking
    }).then(result => {
      console.log('we have our result.data._id should be 297a', result.data.animal.id);
      $state.go('bookingIndex', {
        id: result.data.animal.id
      });
    });
  };
}

export default bookingsNewController;
