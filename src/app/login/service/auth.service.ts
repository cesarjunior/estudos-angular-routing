import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from '../entity/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private controlAuth: boolean = false;
  public authEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    console.log('AuthService');
  }

  authenticated(usuario: Usuario): boolean {
    this.controlAuth = (usuario.login === 'usuario' && usuario.password === '123456');
    this.authEvent.emit(this.controlAuth);
    return this.controlAuth;
  }

  isAuthenticated(): boolean {
    return this.controlAuth;
  }

  logout() {
    this.controlAuth = false;
    this.authEvent.emit(false);
  }
}
