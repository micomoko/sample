import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './/app-routing.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
