angular
  .module('alurapic')
  .controller('FotoController', function (
    $scope,
    $routeParams,
    recursoFoto,
    cadastroDeFotos
  ) {
    $scope.foto = {}
    $scope.mensagem = ''

    const fotoId = $routeParams.fotoId
    if (fotoId) {
      recursoFoto.get(
        { fotoId },
        foto => ($scope.foto = foto),
        () => ($scope.mensagem = 'Não foi possível obter os dados da foto')
      )
    }

    $scope.submeter = () => {
      const IS_FORM_INVALID = $scope.formulario.$invalid
      if (IS_FORM_INVALID) return

      cadastroDeFotos
        .cadastrar($scope.foto)
        .then(dados => {
          $scope.mensagem = dados.mensagem
          if (dados.inclusao) $scope.foto = {}
        })
        .catch(erro => ($scope.mensagem = erro.mensagem))
    }
  })
