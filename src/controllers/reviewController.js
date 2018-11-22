function reviewController($http, $scope, $state) {
  $scope.animal = {};
  $scope.submitReview = function() {
    console.log($scope.review);
    $http({
      method: 'POST',
      url: `/api/pets/${$state.params.id}/reviews`,
      data: $scope.review
    })
      .then(result => {
        $scope.animal = result.data;
        // console.log('--=-=-=->', $scope.animal);
        $scope.review.text = null;
      })
      .then(() => $state.go('animalsShow', { id: $state.params.id }));
  };
}

export default reviewController;
