import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Injectable({
  providedIn: 'root',
})
export class ListaAnimaisResolver implements Resolve<Animais> {
  constructor(
    private readonly animaisService: AnimaisService,
    private readonly usuarioService: UsuarioService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animais> {
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) =>
        this.animaisService.listaDoUsuario(usuario.name ?? '')
      ),
      take(1)
    );
  }
}
