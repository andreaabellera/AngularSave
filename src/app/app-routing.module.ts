import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IlotsComponent } from './ilots/ilots.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IlotDetailComponent } from './ilot-detail/ilot-detail.component';

const routes: Routes = [ 
  {path: 'ilots', component: IlotsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:name', component: IlotDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
