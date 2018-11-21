function bookingsNewController($http, $scope, $state, $auth) {
  $scope.booking = {};
  $scope.handleSubmit = function() {
    $scope.booking.createdBy = $auth.getPayload().sub;
    // console.log('Form submitted');
    $http({
      method: 'POST',
      url: '/api/pets/:petId/bookings/',
      data: $scope.booking
    }).then(() => $state.go('bookingsIndex'));
  };
}

export default bookingsNewController;
