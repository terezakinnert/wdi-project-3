function reviewController($http, $scope, $state) {
  $http({
    method: 'GET',
    url: `/api/pets/${$state.params.id}`
  }).then(result => {
    $scope.animal = result.data;
  });
  $scope.submitReview = function() {
    console.log($scope.review);
    $http({
      method: 'POST',
      url: `/api/pets/${$state.params.id}/reviews`,
      data: $scope.review
    })
      .then(result => {
        $scope.animal = result.data;
        $scope.review.text = null;
      })
      .then(() => $state.go('animalsShow', { id: $state.params.id }));
  };
}

export default reviewController;
