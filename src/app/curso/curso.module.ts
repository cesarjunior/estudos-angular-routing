

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso.routing.module';
import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
    imports: [
        CommonModule,
        CursoRoutingModule
    ],
    exports: [],
    declarations: [
        CursoComponent,
        CursoDetalheComponent
    ],
    providers: [],
})
export class CursoModule { }
