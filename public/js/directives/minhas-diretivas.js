angular
  .module('minhasDiretivas', [])
  .directive('meuPainel', () => ({
    restrict: 'AE',
    scope: {
      titulo: '@'
    },
    transclude: true,
    templateUrl: 'js/directives/meu-painel.html'
  }))
  .directive('minhaFoto', () => ({
    restrict: 'AE',
    scope: {
      titulo: '@',
      url: '@'
    },
    template: `
      <img
        class="img-responsive center-block"
        src="{{url}}"
        alt="{{titulo}}"
      />
    `
  }))
  .directive('meuBotaoPerigo', () => ({
    restrict: 'E',
    scope: {
      nome: '@',
      acao: '&'
    },
    template: `
      <button
        ng-click="acao(foto)"
        class="btn btn-danger btn-block"
      >{{nome}}</button>
    `
  }))
  .directive('meuFocus', () => ({
    restrict: 'A',
    link: (scope, element) => {
      scope.$on('fotoCadastrada', () => {
        element[0].focus()
      })
    }
  }))
