import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoActivateGuard implements CanActivateChild {

  constructor() { }

  canActivateChild(route: ActivatedRouteSnapshot, 
                    state: RouterStateSnapshot): boolean | Observable<boolean> {

    
    return true;
  }
}
