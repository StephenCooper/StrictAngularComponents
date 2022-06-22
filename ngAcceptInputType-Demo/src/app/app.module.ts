import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display.component';
import { WithPipeComponent } from './with-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    WithPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
