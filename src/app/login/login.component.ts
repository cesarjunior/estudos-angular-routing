
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './service/auth.service';
import { Usuario } from './entity/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.authService.logout();
      this.route.navigate(['/login']);
    }
  }

  fazerLogin() {
    if(this.authService.authenticated(this.usuario)) {
      this.route.navigate(['/']);
    }
  }

}
