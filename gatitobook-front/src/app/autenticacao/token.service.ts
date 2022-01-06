import { Injectable } from '@angular/core';

const KEY = 'token' as const;

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  retornaToken() {
    return window.localStorage.getItem(KEY) ?? '';
  }

  possuiToken() {
    return !!this.retornaToken();
  }

  salvaToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  excluiToken() {
    window.localStorage.removeItem(KEY);
  }
}
