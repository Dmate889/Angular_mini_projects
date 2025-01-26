import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponentComponent } from './Components/home-page-component/home-page-component.component';
import { MoreInfoComponent } from './Components/more-info/more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
