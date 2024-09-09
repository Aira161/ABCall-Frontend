import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PqrsModule } from './pqrs/pqrs.module';
import { SentComponent } from './sent/sent.component';

@NgModule({
  declarations: [
    AppComponent,
    SentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PqrsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
