angular
  .module('meusServicos', ['ngResource'])
  .factory('recursoFoto', function ($resource) {
    return $resource('/v1/fotos/:fotoId', null, {
      update: {
        method: 'PUT'
      }
    })
  })
  .factory('cadastroDeFotos', function (recursoFoto, $q) {
    return {
      cadastrar: foto =>
        $q((resolve, reject) => {
          if (foto._id) {
            recursoFoto.update(
              { fotoId: foto._id },
              foto,
              () =>
                resolve({
                  mensagem: `Foto ${foto.titulo} atualizada com sucesso!`,
                  inclusao: false
                }),
              erro =>
                reject({
                  mensagem: `Não foi possível alterar a foto ${foto.titulo}`,
                  erro
                })
            )
          } else {
            recursoFoto.save(
              foto,
              () => (
                resolve({
                  mensagem: `Foto ${foto.titulo} foi incluída com sucesso!`,
                  inclusao: true
                }),
                erro =>
                  reject({
                    mensagem: `Não foi possível incluir a foto ${foto.titulo}`,
                    erro
                  })
              )
            )
          }
        })
    }
  })
