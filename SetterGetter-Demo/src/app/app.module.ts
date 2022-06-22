import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display.component';
import { GenericComponent } from './generic.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
