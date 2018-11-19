function indexController($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/animals'
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
