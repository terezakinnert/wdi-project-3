function showController($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/pets/${$state.params.id}`
  }).then(result => {
    console.log('what is the result', result);
    $scope.animal = result.data;
  });
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/pets/${$state.params.id}`
    }).then(() => $state.go('animalsIndex'));
  };
  $scope.createComment = function() {
    console.log('WHYYYYYYY', $state.params.id, 'this is $scope.comment', $scope.comment);
    $http({
      method: 'POST',
      url: `/api/pets/${$state.params.id}/comments`,
      data: $scope.comment
    })
      .then(result => $scope.animal = result.data);
  };
  $scope.deleteComment = function(comment) {
    $http({
      method: 'DELETE',
      url: `/api/pets/${$state.params.id}/comments/${comment._Id}`
    })
      .then(result => $scope.animal = result.data);
  };
}

export default showController;
