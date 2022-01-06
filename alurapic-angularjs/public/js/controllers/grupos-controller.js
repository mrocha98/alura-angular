angular
  .module('alurapic')
  .controller('GruposController', function ($scope, $http) {
    $scope.grupos = []

    $http
      .get('v1/grupos')
      .success(data => ($scope.grupos = data))
      .error(console.error)
  })
