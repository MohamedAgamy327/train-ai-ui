import { PageNotFoundComponent } from './components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, LoginGuard } from './core/guards';
import { LoginComponent } from './components/register';
import { RoleEnum } from './core/enums';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent /*, canActivate: [LoginGuard] */ },
  {
    path: 'home', /* canActivate: [AuthGuard] ,*/ data: { roles: [RoleEnum.Admin] }, loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
