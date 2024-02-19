import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiModule } from 'projects/shared-ui/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
