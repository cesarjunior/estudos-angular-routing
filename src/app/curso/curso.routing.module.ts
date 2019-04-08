import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoActivateGuard } from './route-guards/curso-activate-guard';
import { CursoDeactivateGuard } from './route-guards/curso-deactivate-guard';
import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const routes: Routes = [
    { path: '', component: CursoComponent, canActivateChild: [CursoActivateGuard], 
        children: [
            { path: ':id', component: CursoDetalheComponent, canDeactivate: [CursoDeactivateGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class CursoRoutingModule { }