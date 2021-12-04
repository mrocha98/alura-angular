angular
  .module('alurapic')
  .controller('FotosController', function ($scope, recursoFoto) {
    $scope.fotos = []
    $scope.filtro = ''
    $scope.mensagem = ''

    recursoFoto.query(fotos => ($scope.fotos = fotos), console.error)

    $scope.remover = foto => {
      recursoFoto.delete(
        { fotoId: foto._id },
        () => {
          const indiceFoto = $scope.fotos.indexOf(foto)
          $scope.fotos.splice(indiceFoto, 1)
          $scope.mensagem = `Foto ${foto.titulo} foi removida com sucesso`
        },
        () =>
          ($scope.mensagem = `Não foi possível remover a foto ${foto.titulo}`)
      )
    }
  })
