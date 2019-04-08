import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from './login/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  authenticated: boolean = false;

  constructor(private authService: AuthService) {}
   
  ngOnInit() {
    this.authService.authEvent.subscribe((response) => this.authenticated = response);
  }

  ngOnDestroy() {
    this.authService.authEvent.unsubscribe();
  }
}
