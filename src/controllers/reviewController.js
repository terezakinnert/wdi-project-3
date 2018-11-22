function reviewController($http, $scope, $state, $auth) {
  $scope.animal = {};
  $scope.submitReview = function() {
    $scope.animal.rating = $auth.getPayload().sub;
    // console.log('Form submitted');
    $http({
      method: 'POST',
      url: '/api/pets',
      data: $scope.animal
    }).then(() => $state.go('animalsIndex'));
  };
}

export default reviewController;
