import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './components/pages/pages.component';
import { LandingpageComponent } from './components/pages/landingpage/landingpage.component';
import { FooterComponent } from './components/pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LandingpageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
