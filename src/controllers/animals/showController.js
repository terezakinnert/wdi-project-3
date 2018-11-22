function showController($state, $scope, $http) {
  $scope.review = {};
  $http({
    method: 'GET',
    url: `/api/pets/${$state.params.id}`
  }).then(result => {
    $scope.animal = result.data;
    console.log('hre are the animals', $scope.animal);
  });
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/pets/${$state.params.id}`
    }).then(() => $state.go('animalsIndex'));
  };

  $scope.createReview = function() {
    console.log($scope.review);
    $http({
      method: 'POST',
      url: `/api/pets/${$state.params.id}/reviews`,
      data: $scope.review
    })
      .then(result => {
        $scope.animal = result.data;
        console.log('--=-=-=->', $scope.animal);
        $scope.review.text = null;
      });
  };

  $scope.deleteReview = function(review) {
    $http({
      method: 'DELETE',
      url: `/api/pets/${$state.params.id}/reviews/${review._id}`
    }).then(result => $scope.animal = result.data);
  };
}

export default showController;
