import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponentComponent } from './Components/home-page-component/home-page-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PlotComponent } from './Components/plot/plot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    PlotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
