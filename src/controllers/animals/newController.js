function animalsNewController($http, $scope, $state, $auth) {
  $scope.animal = {};
  $scope.handleSubmit = function() {
    $scope.animal.createdBy = $auth.getPayload().sub;
    // console.log('Form submitted');
    $http({
      method: 'POST',
      url: '/api/pets',
      data: $scope.animal
    }).then(() => $state.go('animalsIndex'));
  };
}

export default animalsNewController;

// taken from the router (T., 18:43)
// function($scope, $http, $state) {
//   $scope.handleSubmit = function() {
//     console.log('Form was submitted!', $scope.testing);
//     $http({
//       method: 'POST',
//       url: '/api/pets',
//       data: $scope.animal
//     }).then(result => $state.go('animalsIndex'));
//   };
// }
