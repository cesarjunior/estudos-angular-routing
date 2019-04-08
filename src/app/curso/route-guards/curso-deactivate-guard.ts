import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CursoDetalheComponent } from './../curso-detalhe/curso-detalhe.component';

@Injectable({
    providedIn: 'root'
})
export class CursoDeactivateGuard implements CanDeactivate<CursoDetalheComponent> {
    canDeactivate(
        component: CursoDetalheComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('Deactivate route');
        return true;
    }
}