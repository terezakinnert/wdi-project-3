import mapLib from '../../lib/map';

function showController($state, $scope, $http) {
  $scope.review = {};
  $http({
    method: 'GET',
    url: `/api/pets/${$state.params.id}`
  }).then(result => {
    $scope.animal = result.data;
    // console.log('hre are the animals', $scope.animal);
  });
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/pets/${$state.params.id}`
    }).then(() => $state.go('animalsIndex'));
  };

  $scope.deleteReview = function(review) {
    $http({
      method: 'DELETE',
      url: `/api/pets/${$state.params.id}/reviews/${review._id}`
    }).then(result => {
      $scope.animal = result.data;
      console.log('$scope.animal', $scope.animal);
    });
  };
  $scope.$watch('animal', function(){
    if($scope.animal){
      $http({
        method: 'GET',
        url: `https://api.postcodes.io/postcodes/${$scope.animal.location}`
      }).then(result => {
        $scope.searchResults = result.data.result;
        console.log('this is $scope.searchResults ', $scope.searchResults, $scope.animal);
        mapLib.create('map-element', [$scope.searchResults.latitude, $scope.searchResults.longitude], 13);
        mapLib.addMarker([$scope.searchResults.latitude, $scope.searchResults.longitude], $scope.animal.name);
      });
    }
  });
}

export default showController;
