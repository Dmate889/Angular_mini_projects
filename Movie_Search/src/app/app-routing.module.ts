import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponentComponent } from './Components/home-page-component/home-page-component.component';
import { PlotComponent } from './Components/plot/plot.component';

const routes: Routes = [
  { path: '', redirectTo: 'homePage', pathMatch: 'full' },
  {path: 'homePage', component: HomePageComponentComponent},
  {path: 'plot', component: PlotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
