import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlySpendingsComponent } from './components/monthly-spendings/monthly-spendings.component';
import { TrackerWindowComponent } from './components/tracker-window/tracker-window.component';

const routes: Routes = [
  { path: '', redirectTo: 'trackerWindow', pathMatch: 'full' },
  {path: 'monthlySpendings', component: MonthlySpendingsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
