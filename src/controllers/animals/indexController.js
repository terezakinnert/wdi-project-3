function indexController($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/pets'
  }).then(result => {
    $scope.allAnimals = result.data;
    $scope.filteredAnimals = $scope.allAnimals;
  });
  $scope.handleFilterSubmit = function() {
    $scope.filteredAnimals = $scope.allAnimals.filter(animal =>
      animal.name.toLowerCase().startsWith($scope.searchTerm.toLowerCase())
    );
  };
}

export default indexController;
//
//
// function indexCtrl($scope, $http, $auth) {
//   $http({
//     method: 'GET',
//     url: '/api/fishes'
//   }).then(result => {
//     $scope.allFishes = result.data;
//     $scope.filteredFishes = $scope.allFishes;
//   });
//
//   $scope.handleFilterSubmit = function() {
//     console.log('Filter form submitted!', $scope.searchTerm);
//     $scope.filteredFishes = $scope.allFishes.filter(fish =>
//       fish.name.toLowerCase().startsWith($scope.searchTerm.toLowerCase())
//     );
//   };
// }
//
// export default indexCtrl;
//
