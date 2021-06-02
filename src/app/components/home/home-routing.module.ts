import { AuthGuard } from '../../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  LandingComponent,
  TargetComponent,
  AnalyzeVariablesComponent,
  BacktestComponent,
  BinVariablesComponent,
  DeployComponent,
  PredictComponent,
  ReportComponent,
  TrainComponent
} from '.';
import { RoleEnum } from 'src/app/core/enums';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: LandingComponent },
      { path: 'target', component: TargetComponent },
      { path: 'analyze-variables', component: AnalyzeVariablesComponent },
      { path: 'backtest', component: BacktestComponent },
      { path: 'bin-variables', component: BinVariablesComponent },
      { path: 'deploy', component: DeployComponent },
      { path: 'predict', component: PredictComponent },
      { path: 'report', component: ReportComponent },
      { path: 'train', component: TrainComponent },
      { path: 'users', canActivate: [AuthGuard], data: { roles: [RoleEnum.Admin] }, loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) },
      {
        path: '', redirectTo: '', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
