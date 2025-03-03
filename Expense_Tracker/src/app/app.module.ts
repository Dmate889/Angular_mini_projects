import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackerWindowComponent } from './components/tracker-window/tracker-window.component';
import { HttpClientModule } from '@angular/common/http';
import { MonthlySpendingsComponent } from './components/monthly-spendings/monthly-spendings.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TrackerWindowComponent,
    MonthlySpendingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
