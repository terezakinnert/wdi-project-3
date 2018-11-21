function showController($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/pets/${$state.params.id}`
  }).then(result => {
    $scope.animal = result.data;
  });
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/pets/${$state.params.id}`
    }).then(() => $state.go('animalsIndex'));
  };

  $scope.createComment = function() {
    $http({
      method: 'POST',
      url: `/api/pets/${$state.params.id}/comments`,
      data: $scope.comment
    })
      .then(result => {
        $scope.animal = result.data;
        // $scope.username = result.data.comment.user.username;
        $scope.comment.text = null;
        console.log('username?', $scope.comment.user.username);
      });
  };

  $scope.deleteComment = function(comment) {
    $http({
      method: 'DELETE',
      url: `/api/pets/${$state.params.id}/comments/${comment._id}`
    }).then(result => $scope.animal = result.data);
  };
}

export default showController;
