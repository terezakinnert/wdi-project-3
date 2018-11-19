function showController($state, $scope, $http) {
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/animals/${$state.params.id}`
    }).then(() => $state.go('animalsIndex'));
  };
  $scope.createComment = function() {
    console.log('WHYYYYYYY', $state.params.id, 'this is $scope.comment', $scope.comment);
    $http({
      method: 'POST',
      url: `/api/animals/${$state.params.id}/comments`,
      data: $scope.comment
    })
      .then(result => $scope.animal = result.data);
  };
  $scope.deleteComment = function(comment) {
    $http({
      method: 'DELETE',
      url: `/api/animals/${$state.params.id}/comments/${comment._Id}`
    })
      .then(result => $scope.animal = result.data);
  };
  $http({
    method: 'GET',
    url: `/api/animals/${$state.params.id}`
  }).then(result => {
    $scope.animal = result.data;
  });
}

export default showController;
