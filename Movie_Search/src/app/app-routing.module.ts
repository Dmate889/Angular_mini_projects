import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreInfoComponent } from './Components/more-info/more-info.component';
import { HomePageComponentComponent } from './Components/home-page-component/home-page-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'homePage', pathMatch: 'full' },
  {path: 'homePage', component: HomePageComponentComponent},
  {path: 'moreInfo', component: MoreInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
