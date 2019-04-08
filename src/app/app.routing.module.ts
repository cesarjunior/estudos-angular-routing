import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth-guard';
import { NotFoundComponent } from './not-found/not-found.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'curso', loadChildren: './curso/curso.module#CursoModule', canActivate: [AuthGuard] },
    { path: '', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}